import { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { useForm } from 'react-hook-form';
import { apiFetch } from '@Helpers';
import { motion } from 'framer-motion';
import { STORE_KEY } from '../../../store';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import usePopper from '../../../hooks/use-popper';
import { classNames } from '../../../utils/helpers';
import { useDebounce } from '../../../hooks/use-debounce';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';
import { logError } from '../../reusable/error-toast/handle-error';

const container = {
	closed: { opacity: 0 },
	open: {
		opacity: 1,
		transition: {
			delayChildren: 0.05,
			staggerChildren: 0.05,
		},
	},
};
const item = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 20,
		opacity: 0,
	},
};

const BusinessTypes = () => {
	const { setWebsiteTypeAIStep, setBusinessTypeListAIStep } =
		useDispatch( STORE_KEY );
	const { businessType, businessTypeList } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );

	const [ referenceRef, popperRef ] = usePopper( {
		placement: 'bottom',
		modifiers: [
			{ name: 'offset', options: { offset: [ 0, 0 ] } },
			{ name: 'flip', enabled: false },
			{
				name: 'preventOverflow',
				options: { boundariesElement: 'viewport' },
			},
		],
	} );

	const [ openSuggestions, setOpenSuggestions ] = useState( false );
	const [ isFetching, setIsFetching ] = useState( false );
	const reqAbort = useRef( null );
	const scrollableRef = useRef( null );

	const { register, setValue, reset, setFocus, watch } = useForm( {
		defaultValues: { keyword: businessType ?? '' },
	} );
	const watchedKeyword = watch( 'keyword' );
	const debouncedKeyword = useDebounce( watchedKeyword, 300 );

	const fetchCategories = async ( keyword = '' ) => {
		if ( reqAbort.current ) {
			reqAbort.current.abort();
			reqAbort.current = null;
		}
		setIsFetching( true );
		reqAbort.current = new AbortController();
		try {
			const response = await apiFetch( {
				path: `zipwp/v1/search-category`,
				method: 'POST',
				data: { keyword },
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
				signal: reqAbort.current.signal,
			} );

			setBusinessTypeListAIStep( response?.data );

			setIsFetching( false );
		} catch ( error ) {
			if ( error.name === 'AbortError' ) {
				return;
			}
			logError( error );

			setIsFetching( false );
		}
	};

	const handleClear = () => {
		if ( scrollableRef.current ) {
			scrollableRef.current.scrollTop = 0;
		}

		reset( { keyword: '' } );
		setWebsiteTypeAIStep( '' );

		if ( ! openSuggestions ) {
			return;
		}
		setTimeout( () => {
			setFocus( 'keyword' );
		}, 10 );
	};

	const handleCloseSuggestions = ( inputField ) => {
		if ( ! watchedKeyword && '' !== businessType ) {
			setValue( 'keyword', businessType );
		}
		if (
			watchedKeyword &&
			businessType &&
			watchedKeyword !== businessType
		) {
			setValue( 'keyword', watchedKeyword );
		}
		setOpenSuggestions( false );

		if ( ! inputField ) {
			return;
		}
		inputField?.blur();
	};

	const handleSearch = useCallback( () => {
		fetchCategories( ! openSuggestions ? '' : debouncedKeyword );
	}, [ debouncedKeyword ] );

	useEffect( () => {
		handleSearch();
	}, [ handleSearch ] );

	const handleKeyDown = ( event ) => {
		const businessTypesWrapper = document.getElementById(
			'business-types-suggestions'
		);
		if ( ! businessTypesWrapper ) {
			return;
		}
		const focusableElements = Array.from(
			businessTypesWrapper.querySelectorAll(
				'button, input, [tabindex]:not([tabindex="-1"])'
			)
		);
		// eslint-disable-next-line @wordpress/no-global-active-element
		let index = focusableElements.indexOf( document.activeElement );

		switch ( event.key ) {
			case 'Escape':
				// Close the suggestion when Esc is pressed
				handleCloseSuggestions( event?.target );
				break;
			case 'ArrowUp':
				// Focus the previous element when Up Arrow is pressed
				index--;
				if ( index < 0 ) {
					index = focusableElements.length - 1;
				} // Loop back to the end if at the beginning
				focusableElements[ index ].focus();
				event.preventDefault(); // Prevent the default scroll behavior
				break;
			case 'ArrowDown':
				// Focus the next element when Down Arrow is pressed
				index++;
				if ( index >= focusableElements.length ) {
					index = 0;
				} // Loop back to the beginning if at the end
				focusableElements[ index ].focus();
				event.preventDefault(); // Prevent the default scroll behavior
				break;
			default:
				break;
		}
	};

	const handleClickOutside = ( event ) => {
		const businessTypesWrapper = document.getElementById(
			'business-types-suggestions'
		);
		if (
			businessTypesWrapper &&
			! businessTypesWrapper.contains( event.target )
		) {
			handleCloseSuggestions();
		}
	};

	const renderHighlightedText = ( text, highlight ) => {
		if ( ! highlight ) {
			return text;
		}

		const {
			name: { matched_tokens: highlightTexts },
		} = highlight;
		const parts = text.split(
			new RegExp( `(${ highlightTexts.join( '|' ) })`, 'gi' )
		);
		return (
			<span>
				{ parts.map( ( part, index ) =>
					highlightTexts.includes( part ) ? (
						<span key={ index } className="font-semibold">
							{ part }
						</span>
					) : (
						part
					)
				) }
			</span>
		);
	};

	const getIcon = () => {
		if ( isFetching && openSuggestions ) {
			return <LoadingSpinner className="text-accent-st w-4 h-4" />;
		}
		return watchedKeyword ? (
			<button
				className="inline-flex !p-0 !m-0 border-0 !bg-transparent focus:outline-none cursor-pointer"
				onClick={ handleClear }
			>
				<XMarkIcon className="w-4 h-4 !text-zip-app-inactive-icon peer-focus:text-nav-inactive stroke-2 !shrink-0" />
			</button>
		) : (
			<MagnifyingGlassIcon className="w-4 h-4 text-zip-app-inactive-icon peer-focus:text-nav-inactive !shrink-0" />
		);
	};

	// handle outside click to close the suggestions.
	useEffect( () => {
		document.addEventListener( 'mousedown', handleClickOutside );
		return () =>
			document.removeEventListener( 'mousedown', handleClickOutside );
	}, [ handleClickOutside ] );

	// Include current input at the top of the list if the input is not empty and not in the list.
	const renderBusinessTypeList = () => {
		try {
			const businessTypes =
				!! businessTypeList && Array.isArray( businessTypeList )
					? businessTypeList
					: [];
			if ( ! watchedKeyword ) {
				return businessTypes;
			}
			const currentInput = businessTypes?.find(
				( { document: docItem } ) =>
					docItem.name?.toLowerCase()?.trim() ===
					watchedKeyword?.toLowerCase()?.trim()
			);
			if ( ! currentInput ) {
				return [
					{
						document: {
							name: watchedKeyword,
						},
						highlight: {
							name: {
								matched_tokens: [ watchedKeyword.trim() ],
							},
						},
					},
					...businessTypes,
				];
			}
			return businessTypes;
		} catch ( error ) {
			return [];
		}
	};

	return (
		<div
			id="business-types-suggestions"
			ref={ referenceRef }
			className={ classNames(
				'relative pr-3 pl-4 py-3 bg-white rounded-md border border-solid border-border-primary w-full',
				{
					'pb-0 rounded-b-none border-b-0 shadow-md': openSuggestions,
				}
			) }
			onKeyDown={ handleKeyDown }
			role="presentation"
		>
			<div className="flex items-center justify-start w-full gap-2">
				{ getIcon() }
				<input
					className="!h-auto !px-0 !mx-0 !border-0 !rounded-none !min-h-0 !shadow-none focus:ring-0 focus:!outline-none focus:!shadow-none w-full text-sm placeholder:text-sm placeholder:!text-zip-app-inactive-icon"
					type="text"
					placeholder="Type to search"
					onFocus={ () => setOpenSuggestions( true ) }
					autoComplete="off"
					{ ...register( 'keyword' ) }
				/>
			</div>
			<div
				ref={ popperRef }
				className={ classNames(
					'w-[calc(100%_+_2px)] px-3 pb-3 z-10 bg-white shadow-md border-x border-b border-t-0 border-solid border-border-primary rounded-b-md',
					{
						invisible: ! openSuggestions,
					}
				) }
			>
				{ openSuggestions && (
					<hr
						className="!mx-0 !my-3 border-t border-solid border-b-0 border-border-primary"
						tabIndex={ -1 }
					/>
				) }
				<div
					ref={ scrollableRef }
					className="max-h-[150px] w-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar-thumb:hover]:bg-black/[0.15] [&::-webkit-scrollbar-thumb]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-black/10"
				>
					<motion.div
						className="w-full flex flex-col gap-1 justify-start"
						initial={ false }
						animate={ openSuggestions ? 'open' : 'closed' }
						variants={ container }
					>
						{ renderBusinessTypeList()?.length > 0 &&
							renderBusinessTypeList().map(
								( { document: typeItem, highlight } ) => (
									<motion.button
										key={ typeItem.name }
										className={ classNames(
											'flex items-center justify-start w-full gap-2 py-2 px-3 bg-background-tertiary rounded border-0 !bg-transparent hover:!bg-zip-app-light-bg focus:!bg-zip-app-light-bg !text-zip-body-text hover:!text-zip-app-heading focus:outline-none focus:!shadow-none',
											{
												'!bg-zip-app-light-bg !text-zip-app-heading':
													typeItem.name ===
													businessType,
											},
											'text-left'
										) }
										onClick={ () => {
											setValue(
												'keyword',
												typeItem.name
											);
											setWebsiteTypeAIStep(
												typeItem.name
											);
											setOpenSuggestions( false );
										} }
										variants={ item }
									>
										{ renderHighlightedText(
											typeItem.name,
											highlight
										) }
									</motion.button>
								)
							) }
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default BusinessTypes;
