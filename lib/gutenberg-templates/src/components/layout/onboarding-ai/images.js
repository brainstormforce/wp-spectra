import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import Dropdown from '../../reusable/dropdown/dropdown';
import SuggestedKeywords from '../../reusable/suggested-keywords/suggested-keywords';
import { STORE_KEY } from '../../../store';
import { Tile } from '../../reusable/masonry';
import Masonry from 'react-layout-masonry';
import { classNames } from '../../../utils/helpers';
import apiFetch from '@wordpress/api-fetch';
import { useDebounce } from '../../../hooks/use-debounce';
import {
	useEffect,
	useState,
	useCallback,
	useRef,
	Fragment,
} from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { generateContentForAllCategories } from '../../../utils/functions';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import ConfirmationPopup from './confirmation-popup';
import useCredits from '../../../hooks/use-credits';
import { useForm } from 'react-hook-form';
import Input from '../../reusable/input/input';
import ImagePreview from '../../reusable/image-preview';
import { AnimatePresence } from 'framer-motion';

const { post } = wp.ajax;

const ORIENTATIONS = {
	all: {
		value: 'all',
		label: 'All',
	},
	landscape: {
		value: 'landscape',
		label: 'Landscape',
	},
	portrait: {
		value: 'portrait',
		label: 'Portrait',
	},
};

const TABS = [
	{
		label: 'Search Results',
		value: 'all',
	},
	{
		label: 'Selected Images',
		value: 'selected',
	},
];

const IMAGES_PER_PAGE = 20;
const IMAGE_ENGINES = [ 'pexels', 'unsplash' ];
const SKELETON_COUNT = 15;

const getImageSkeleton = ( count = SKELETON_COUNT ) => {
	const aspectRatioClassNames = [
		'aspect-[1/1]',
		'aspect-[1/2]',
		'aspect-[2/1]',
		'aspect-[2/2]',
		'aspect-[3/3]',
		'aspect-[4/3]',
		'aspect-[3/4]',
	];

	let aspectRatioIndex = 0;

	return Array.from( { length: count } ).map( ( _, index ) => {
		aspectRatioIndex =
			aspectRatioIndex === aspectRatioClassNames.length
				? 0
				: aspectRatioIndex;

		return (
			<Tile
				key={ index }
				className={ classNames(
					'relative overflow-hidden rounded-lg',
					'bg-slate-300 rounded-lg relative animate-pulse',
					aspectRatioClassNames[ aspectRatioIndex++ ]
				) }
			/>
		);
	} );
};

const Images = ( {
	onClickPrevious,
	setDynamicContent,
	setAllBlocksData,
	setAllCategories,
	setIsSyncBusinessDetails,
} ) => {
	const {
		setWebsiteImagesAIStep,
		setWebsiteImagesPreSelectedAIStep,
		setCurrentCategory,
		toggleOnboardingAIStep,
		dynamicContentFlagSet,
		dynamicContentSyncStart,
		dynamicContentSyncComplete,
		dynamicContentFlagReset,
		setCreditsDetails,
		setIsNewUserOnboarding,
	} = useDispatch( STORE_KEY );
	const {
		stepsData: {
			businessName,
			selectedImages = [],
			keywords = [],
			imagesPreSelected,
			businessType,
			businessDetails,
			businessContact,
		},
		allPatternsCategories,
		updateImages,
		isNewUser,
	} = useSelect( ( select ) => {
		const {
			getAIStepData,
			getAllPatternsCategories,
			getDynamicContent,
			getOnboardingAI,
		} = select( STORE_KEY );
		const onboardingAI = getOnboardingAI();
		return {
			stepsData: getAIStepData(),
			allPatternsCategories: getAllPatternsCategories(),
			dynamicContent: getDynamicContent(),
			updateImages: onboardingAI?.updateImages,
			isNewUser: onboardingAI?.isNewUser,
		};
	} );

	const [ orientation, setOrientation ] = useState( ORIENTATIONS.all );
	const [ keyword, setKeyword ] = useState(
		keywords?.length > 0 ? keywords[ 0 ] : ''
	);
	const [ images, setImages ] = useState( [] );
	const [ page, setPage ] = useState( 1 );
	const [ hasMore, setHasMore ] = useState( true );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ backToTop, setBackToTop ] = useState( false );
	const [ openConfirmationPopup, setOpenConfirmationPopup ] = useState( false );
	const [ activeTab, setActiveTab ] = useState( 'all' );

	const scrollContainerRef = useRef( null );
	const imageRequestCompleted = useRef( false );
	const blackListedEngines = useRef( new Set() );
	const areImagesPreSelected = useRef( imagesPreSelected );

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
		setFocus,
		watch,
	} = useForm( { defaultValues: { keyword } } );
	const watchedKeyword = watch( 'keyword' );

	const debouncedImageKeywords = useDebounce( keyword, 500 );
	const debouncedOrientation = useDebounce( orientation, 500 );

	const { isFreeUser } = useCredits();

	/**
	 * Import Blocks
	 *
	 * @param {number} i
	 * @param {number} total
	 */
	const importBlock = async ( i, total ) => {
		await post( {
			action: 'ast-block-templates-import-blocks',
			page_no: i,
			total,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( ( response ) => {
			if ( response.status ) {
				// Updated UI.
				if ( i === total ) {
					setAllCategories( response.data?.categories );
					setAllBlocksData( response.data?.allBlocks );
				}
			}
		} );
	};

	const processSync = async () => {
		await post( {
			action: 'ast-block-templates-check-sync-library-status',
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( async ( response ) => {
			if ( response.status ) {
				if ( 'updated' !== response.data ) {
					const total = response.data.pages;
					for ( let i = 1; i <= total; i++ ) {
						await importBlock( i, total );
					}
				}
			}
		} );
	};

	const handleGenerateContent = async ( event ) => {
		event.preventDefault();
		const formData = new window.FormData();
		formData.append( 'action', 'ast-block-templates-ai-content' );
		formData.append(
			'security',
			ast_block_template_vars.ai_content_ajax_nonce
		);
		formData.append( 'business_name', businessName );
		formData.append( 'business_desc', businessDetails );
		formData.append( 'business_category', businessType );
		formData.append( 'images', JSON.stringify( selectedImages ) );
		formData.append( 'image_keyword', JSON.stringify( keywords ) );
		formData.append( 'business_address', businessContact?.address || '' );
		formData.append( 'business_phone', businessContact?.phone || '' );
		formData.append( 'business_email', businessContact?.email || '' );
		formData.append(
			'social_profiles',
			JSON.stringify( businessContact?.socialMedia || [] )
		);

		await apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if ( response.success ) {
				setIsSyncBusinessDetails( false );
				// Close the onboarding screen on success.
				toggleOnboardingAIStep();
				if ( response?.data.images.length > 0 ) {
					setWebsiteImagesAIStep( response.data.images );
				}
			} else {
				// TODO: Handle error.
			}
		} );

		const type = 'patterns';
		const categoriesToGenerate = isFreeUser
			? allPatternsCategories.slice( 0, 2 )
			: allPatternsCategories;

		dynamicContentFlagReset(
			type,
			isFreeUser ? categoriesToGenerate.map( ( item ) => item.id ) : null
		);
		dynamicContentSyncStart( type );

		await processSync();

		let success = false;
		try {
			success = await generateContentForAllCategories(
				categoriesToGenerate,
				setDynamicContent,
				dynamicContentFlagSet,
				( catValue ) => setCurrentCategory( type, catValue ),
				setCreditsDetails,
				'block'
			);
		} catch ( error ) {
			success = error;
		}

		if (
			typeof success === 'object' &&
			success?.data?.code === 'api_throttle_error'
		) {
			success = {
				type: 'error',
				title: 'Check Back Soon',
				message: (
					<>
						We are currently experiencing exceptionally high demand.
						Please try again in 5 minutes. If the error persists,
						kindly contact us through the website:
						<a
							href="https://zipwp.com/contact"
							target="_blank"
							rel="noreferrer"
						>
							{ ' ' }
							https://zipwp.com/contact
						</a>
						.
					</>
				),
			};
		}

		dynamicContentSyncComplete(
			type,
			typeof success === 'object' ? success : null
		);
		setCurrentCategory( type, {} );

		if ( isNewUser && success ) {
			setIsNewUserOnboarding();
		}
	};

	const handleSaveDetails = async ( event ) => {
		event.preventDefault();
		const formData = new window.FormData();

		formData.append( 'action', 'ast-block-templates-ai-content' );
		formData.append(
			'security',
			ast_block_template_vars.ai_content_ajax_nonce
		);
		formData.append( 'business_name', businessName );
		formData.append( 'business_desc', businessDetails );
		formData.append( 'business_category', businessType );
		formData.append( 'images', JSON.stringify( selectedImages ) );
		formData.append( 'image_keyword', JSON.stringify( keywords ) );
		formData.append( 'business_address', businessContact?.address || '' );
		formData.append( 'business_phone', businessContact?.phone || '' );
		formData.append( 'business_email', businessContact?.email || '' );
		formData.append(
			'social_profiles',
			JSON.stringify( businessContact?.socialMedia || [] )
		);
		formData.append( 'save_only', true );

		await apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if ( response.success ) {
				// Close the onboarding screen on success.
				toggleOnboardingAIStep();
				if ( response?.data.images.length > 0 ) {
					setWebsiteImagesAIStep( response.data.images );
				}
				setIsSyncBusinessDetails( false );
			} else {
				// TODO: Handle error.
			}
		} );
	};

	const handleOrientationChange = ( orientation_value ) => () => {
		setOrientation( orientation_value );
	};

	const handleSelectKeyword = ( keyword_value ) => {
		setKeyword( keyword_value );
		setValue( 'keyword', keyword_value );
	};

	const getSuggestedKeywords = () => {
		return [ ...new Set( keywords ) ].filter( ( keywordItem ) => {
			if ( keyword.trim() === '' ) {
				return true;
			}
			return keywordItem?.toLowerCase() !== keyword?.toLowerCase();
		} );
	};

	const isSelected = ( image ) => {
		const filteredSelectedImages = selectedImages?.filter(
			( img ) => img.id === image.id
		);
		return filteredSelectedImages?.length > 0;
	};

	// Function to merge new images with old images without duplicates
	const mergeUniqueImages = ( oldImages, newImages ) => {
		const uniqueImagesMap = new Map();

		[ ...oldImages, ...newImages ].forEach( ( image ) => {
			if ( ! uniqueImagesMap.has( image.id ) ) {
				// Add check to prevent overwrite
				uniqueImagesMap.set( image.id, image );
			}
		} );

		return Array.from( uniqueImagesMap.values() );
	};

	const handleImageSelection = useCallback(
		( image ) => {
			let newSelectedImages = [];

			if ( isSelected( image ) ) {
				image.id = String( image.id );
				newSelectedImages = selectedImages?.filter(
					( img ) => img.id !== image.id
				);
			} else {
				newSelectedImages = [ ...selectedImages, image ];
			}

			setWebsiteImagesAIStep( newSelectedImages );
		},
		[selectedImages, setWebsiteImagesAIStep] // eslint-disable-line
	);

	const handleClearImageSelection = useCallback(
		( event ) => {
			event.preventDefault();
			event.stopPropagation();

			setWebsiteImagesAIStep( [] );
		},
		[ setWebsiteImagesAIStep ]
	);

	const handleClickBackToTop = () => {
		if ( ! scrollContainerRef.current ) {
			return;
		}
		setBackToTop( false );
		scrollContainerRef.current.scrollTo( {
			top: 0,
			behavior: 'smooth',
		} );
	};

	const handleShowBackToTop = ( event ) => {
		if ( ! event ) {
			return;
		}
		const { scrollTop } = event.target;
		const SCROLL_THRESHOLD = 50;
		if ( scrollTop > SCROLL_THRESHOLD && ! backToTop ) {
			setBackToTop( true );
		}
		if ( scrollTop <= SCROLL_THRESHOLD && backToTop ) {
			setBackToTop( false );
		}
	};

	const handleScroll = ( event ) => {
		if ( ! event ) {
			return;
		}
		handleShowBackToTop( event );

		if ( ! hasMore || isLoading ) {
			return;
		}

		const { scrollTop, scrollHeight, clientHeight } =
			scrollContainerRef.current;

		// Load more images when user is 200px away from the bottom
		if ( scrollTop + clientHeight >= scrollHeight - 200 ) {
			setPage( ( prev ) => prev + 1 );
		}
	};

	const handlePreSelectImages = ( imgValues ) => {
		if ( !! areImagesPreSelected.current ) {
			return;
		}

		setWebsiteImagesAIStep( imgValues );

		if ( imgValues.length === 0 ) {
			return;
		}
		setWebsiteImagesPreSelectedAIStep( true );
		areImagesPreSelected.current = true;
	};

	// Define a function to fetch all images
	const fetchAllImages = async ( engine ) => {
		// eslint-disable-line
		let searchKeywords = keyword;

		// If we the input filed is empty we are passing the keyword as businessName[category]
		if (
			typeof keyword === 'string' &&
			( ! keyword || keyword.trim() === '' )
		) {
			searchKeywords = businessName;
		}

		const payload = {
			keywords: searchKeywords,
			orientation: orientation.value,
			per_page: IMAGES_PER_PAGE,
			page,
		};
		try {
			const res = await apiFetch( {
				path: '/gutenberg-templates/v1/images',
				data: { ...payload, engine },
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
			const imageResponse = res.data?.data || [];

			// If there are no images, blacklist the engine
			if ( imageResponse?.length === 0 ) {
				blackListedEngines.current.add( engine );
			}

			// Filter out images that are already selected
			const newImages =
				imageResponse?.length > 0
					? imageResponse
						.map( ( image ) => ( {
							...image,
							id: String( image.id ),
						} ) )
						.filter(
							( image ) =>
								! selectedImages?.some(
									( prevImage ) => prevImage.id === image.id
								)
						)
					: [];

			// Pre-select images for user.
			handlePreSelectImages( newImages );

			// Combine with existing images
			setImages( ( prevImages ) => mergeUniqueImages( prevImages, newImages ) );

			// Return image response length
			return imageResponse?.length || 0;
		} catch ( error ) {
			// Do nothing
			console.error( error );
		}

		return 0;
	};

	const handleOpenConfirmationPopup = () => {
		setOpenConfirmationPopup( true );
	};

	useEffect( () => {
		imageRequestCompleted.current = false;
		const fetchAllImagesFromAllEngines = async () => {
			if ( isLoading ) {
				return;
			}
			try {
				setIsLoading( true );
				const responseLengths = [];
				for ( const engine of IMAGE_ENGINES ) {
					if ( ! blackListedEngines.current.has( engine ) ) {
						const response = await fetchAllImages( engine );
						responseLengths.push( response );
					}
				}

				if (
					Math.max( responseLengths.filter( Boolean ) ) < IMAGES_PER_PAGE
				) {
					setHasMore( false );
				} else {
					setHasMore( true );
				}
			} catch ( error ) {
				// Do nothing
				console.error( error );
			} finally {
				imageRequestCompleted.current = true;
				setIsLoading( false );
			}
		};

		fetchAllImagesFromAllEngines();
	}, [ debouncedImageKeywords, debouncedOrientation, page ] );

	const handleImageSearch = ( data ) => {
		setKeyword( data.keyword );
	};

	const handleClearSearch = () => {
		if ( ! watchedKeyword ) {
			return;
		}
		setKeyword( '' );
		reset( { keyword: '' } );
	};

	useEffect( () => {
		imageRequestCompleted.current = false;
		blackListedEngines.current.clear();
		setPage( 1 );
		setImages( [] );
	}, [ keyword, orientation ] );

	useEffect( () => {
		setFocus( 'keyword' );
	}, [] );

	const getRenderItems = () => {
		switch ( activeTab ) {
			case TABS[ 0 ].value:
				return isLoading
					? [ ...images, ...getImageSkeleton() ]
					: images;
			case TABS[ 1 ].value:
				return [
					...selectedImages,
				];
			default:
				return isLoading
					? [ ...images, ...getImageSkeleton() ]
					: images;
		}
	};

	const renderImages = getRenderItems();

	return (
		<div
			ref={ scrollContainerRef }
			className="w-full flex flex-col flex-auto h-full overflow-y-auto"
			onScroll={ handleScroll }
		>
			<div className="pt-5 md:pt-10 px-5 md:px-10 lg:px-14 xl:px-20">
				<Heading
					heading="Select Images"
				/>
			</div>

			<div className="pt-4 px-5 md:px-10 lg:px-14 xl:px-20 sticky top-0 bg-white space-y-4 z-[1]">
				<form onSubmit={ handleSubmit( handleImageSearch ) }>
					<Input
						className="w-full"
						inputClassName="!pl-10"
						height="12"
						name="keyword"
						register={ register }
						placeholder="Add more relevant keywords..."
						validations={ {
							required: false,
						} }
						error={ errors?.keyword }
						prefixIcon={
							<button
								type="button"
								className="w-auto h-auto p-0 flex items-center justify-center cursor-pointer bg-transparent border-0 focus:outline-none"
								onClick={ handleClearSearch }
							>
								{ watchedKeyword ? (
									<XMarkIcon className="w-5 h-5 text-zip-app-inactive-icon" />
								) : (
									<MagnifyingGlassIcon className="w-5 h-5 text-zip-app-inactive-icon" />
								) }
							</button>
						}
					/>
				</form>
				<SuggestedKeywords
					keywordClassName="bg-background-secondary border-border-primary"
					keywords={ getSuggestedKeywords() }
					onClick={ handleSelectKeyword }
				/>
				<div className="rounded-t-lg pt-2 pb-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1 text-sm font-normal leading-[21px]">
							{ /* Tabs */ }
							<div className="flex items-center justify-start gap-3">
								{ TABS.map( ( tab ) => (
									<button
										className={ classNames(
											'relative before:content-[attr(data-title)] before:block before:font-bold before:text-sm before:invisible before:h-0',
											'px-0 py-3 border-0 bg-transparent text-sm font-semibold text-accent-ai cursor-pointer focus-visible:outline-none focus:outline-none active:outline-none transition-colors ease-in-out duration-150',
											tab.value !== activeTab &&
												'font-normal text-body-text'
										) }
										key={ tab.value }
										type="button"
										onClick={ () =>
											setActiveTab( tab.value )
										}
										data-title={ tab.label }
									>
										{ tab.label }
										{ tab.value === TABS[ 1 ].value &&
											!! selectedImages?.length &&
											` (${ selectedImages.length })` }
										{
											tab.value === activeTab && (
												<span
													className="absolute bottom-0 inset-x-0 w-full h-0.5 bg-accent-ai"
												/>
											)
										}
									</button>
								) ) }
							</div>
						</div>
						{ activeTab === TABS[ 0 ].value ? (
							<Dropdown
								placement="right"
								trigger={
									<div className="flex items-center gap-2 min-w-[100px] cursor-pointer">
										<span className="text-sm font-normal text-body-text leading-[150%]">
											Orientation: { '' }
											{ orientation.label }
										</span>
										<ChevronDownIcon className="w-5 h-5 text-app-inactive-icon" />
									</div>
								}
								align="top"
								width="48"
								contentClassName="p-4 bg-white [&>:first-child]:pb-3 [&>:last-child]:pt-3 [&>:not(:first-child,:last-child)]:py-3 !divide-y !divide-border-primary divide-solid divide-x-0"
							>
								{ Object.values( ORIENTATIONS ).map(
									( orientationItem, index ) => (
										<Dropdown.Item
											as="div"
											key={ index }
											className="only:!p-0"
										>
											<button
												type="button"
												className="w-full flex items-center gap-2 px-1.5 py-1 text-sm font-normal leading-5 text-body-text hover:bg-background-secondary transition duration-150 ease-in-out space-x-2 rounded bg-white border-none cursor-pointer"
												onClick={ handleOrientationChange(
													orientationItem
												) }
											>
												{ orientationItem.label }
											</button>
										</Dropdown.Item>
									)
								) }
							</Dropdown>
						) : (
							!! selectedImages?.length && (
								<button
									onClick={ handleClearImageSelection }
									className="px-1 py-px bg-transparent border border-solid border-border-primary rounded text-xs leading-4 text-body-text cursor-pointer"
								>
									Clear
								</button>
							)
						) }
					</div>
				</div>
			</div>
			<div
				className="py-4 px-5 md:px-10 lg:px-14 xl:px-20 flex flex-col flex-auto relative"
			>
				<AnimatePresence>
					{ renderImages?.length > 0 && (
						<Masonry
							className="gap-6 [&>div]:gap-6"
							columns={ {
								default: 1,
								220: 1,
								767: 2,
								1024: 2,
								1280: 4,
								1920: 5,
							} }
						>
							{ renderImages.map( ( image ) =>
								image?.optimized_url ? (
									<ImagePreview
										key={ image.id }
										image={ image }
										isSelected={ isSelected( image ) }
										onClick={ handleImageSelection }
										variant={
											activeTab === TABS[ 1 ].value
												? 'selection'
												: 'default'
										}
									/>
								) : (
									<Fragment
										key={ Math.random()
											.toString( 36 )
											.substring( 2, 10 ) }
									>
										{ image }
									</Fragment>
								)
							) }
						</Masonry>
					) }
				</AnimatePresence>

				{ activeTab === TABS[ 0 ].value &&
					! isLoading &&
					! images.length &&
					imageRequestCompleted.current && (
					<div className="flex flex-col items-center justify-center h-full">
						<p className="text-secondary-text text-center px-10 py-5 border-2 border-dashed border-border-primary rounded-md">
							{ ! keyword.length ? (
								<>
									Find the perfect images for your website
									by entering a keyword or selecting from
									the suggested options.
								</>
							) : (
								<>
									We couldn`t find anything with your
									keyword.
									<br />
									Try to refine your search.
								</>
							) }
						</p>
					</div>
				) }
				{ activeTab === TABS[ 0 ].value &&
					! isLoading &&
					! hasMore &&
					!! images.length && (
					<div className="pb-5 pt-10 flex flex-col items-center justify-center h-full">
						<p className="text-secondary-text text-sm leading-5 text-center after:mx-2.5 after:content-[''] after:inline-block after:w-5 sm:after:w-12 after:h-px after:bg-app-border after:relative after:-top-[5px] before:mx-2.5 before:content-[''] before:inline-block before:w-5 sm:before:w-12 before:h-px before:bg-app-border before:relative before:-top-[5px]">
							End of the search results
						</p>
					</div>
				) }

				{ activeTab === TABS[ 1 ].value && ! selectedImages.length && (
					<div className="flex flex-col items-center justify-center h-full">
						<p className="text-secondary-text text-center px-10 py-5 border-2 border-dashed border-border-primary rounded-md">
							No images are selected yet.
						</p>
					</div>
				) }
			</div>
			{ /* Back to the top */ }
			{ backToTop && (
				<div className="absolute right-[6.5rem] bottom-28 ml-auto">
					<button
						type="button"
						className="absolute bottom-0 right-0 z-10 w-8 h-8 rounded-full bg-accent-ai border-0 border-solid text-white flex items-center justify-center shadow-sm cursor-pointer"
						onClick={ handleClickBackToTop }
					>
						<ChevronUpIcon className="w-5 h-5" />
					</button>
				</div>
			) }
			<div className="min-h-[100px] py-4 px-5 md:px-10 lg:px-14 xl:px-20 sticky bottom-0 bg-white">
				<NavigationButtons
					{ ...( updateImages
						? {
							continueButtonText: 'Save & Exit',
							onClickContinue: handleSaveDetails,
						  }
						: {
							onClickContinue: handleOpenConfirmationPopup,
							onClickSkip: handleOpenConfirmationPopup,
							onClickPrevious,
						  } ) }
				/>
			</div>
			<ConfirmationPopup
				open={ openConfirmationPopup }
				setOpen={ setOpenConfirmationPopup }
				onClickGenerate={ handleGenerateContent }
				onClickSave={ handleSaveDetails }
			/>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setPreviousAIStep,
			setDynamicContent,
			setCurrentCategory,
			setAllBlocksData,
			setAllCategories,
			setIsSyncBusinessDetails,

		} = dispatch( 'ast-block-templates' );

		return {
			onClickPrevious: setPreviousAIStep,
			setDynamicContent,
			setCurrentCategory,
			setAllBlocksData,
			setAllCategories,
			setIsSyncBusinessDetails,
		};
	} )
)( Images );
