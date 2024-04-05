import { useForm } from 'react-hook-form';
import Divider from '../../reusable/divider/divider';
import Textarea from '../../reusable/textarea/textarea';
import { WandIcon } from '../../ui/icons';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import { STORE_KEY } from '../../../store';
import apiFetch from '@wordpress/api-fetch';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';
import { adjustTextAreaHeight, classNames } from '../../../utils/helpers';
import {
	useEffect,
	useState,
	useRef,
	useLayoutEffect,
} from '@wordpress/element';
import { withDispatch, useSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { toast } from 'react-toastify';
import toaster from '../../reusable/toaster';
import { __ } from '@wordpress/i18n';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const DescribeBusiness = ( { onClickContinue, onClickPrevious } ) => {
	const {
		businessDetails,
		businessType,
		businessName,
		businessDetailsHistory,
	} = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );
	const {
		setWebsiteDetailsAIStep,
		setWebsiteKeywordsAIStep,
		resetKeywordsImagesAIStep,
		setWebsiteDetailsHistoryAIStep,
	} = useDispatch( STORE_KEY );

	const [ isLoading, setIsLoading ] = useState( false );
	const [ isFetchingKeywords, setIsFetchingKeywords ] = useState( false ),
		[ descriptionHistory, setDescriptionHistory ] = useState(
			businessDetailsHistory
		),
		[ descriptionIndx, setDescriptionIndx ] = useState(
			businessDetails && businessDetailsHistory?.length
				? businessDetailsHistory.indexOf( businessDetails )
				: null
		);

	const prevBusinessDetails = useRef( businessDetails );
	const textareaRef = useRef( null );

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
		setFocus,
	} = useForm( { defaultValues: { businessDetails } } );
	const formBusinessDetails = watch( 'businessDetails' );

	const handleFormSubmit = async ( data ) => {
		setWebsiteDetailsAIStep( data.businessDetails );
		setWebsiteDetailsHistoryAIStep( descriptionHistory );
		if ( prevBusinessDetails.current !== data.businessDetails ) {
			// Reset images and keywords if description changes.
			resetKeywordsImagesAIStep();
		}
		await fetchImageKeywords( data.businessDetails );
		onClickContinue();
	};

	const handleGenerateContent = async ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();

		if ( isLoading ) {
			return;
		}
		setIsLoading( true );

		try {
			const response = await apiFetch( {
				path: '/gutenberg-templates/v1/description',
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
				data: {
					business_name: businessName,
					business_description: formBusinessDetails,
					category: businessType,
				},
			} );
			if ( response.success ) {
				setValue( 'businessDetails', response.data?.data, {
					shouldValidate: true,
				} );
				setDescriptionHistory( ( prev ) => [
					...new Set( [ ...prev, response?.data?.data ] ),
				] );
				// Always set the last index after generating new description.
				setDescriptionIndx( ( prev ) => ( prev === null ? 0 : prev + 1 ) );
			}
			if ( ! response.success ) {
				toast(
					toaster( {
						title: __(
							'Description Generation Error!',
							'ast-block-templates'
						),
						message: __(
							'Failed to generate business description using AI. Please retry or enter details manually.',
							'ast-block-templates'
						),
					} ),
					toaster.getOptions( { type: 'error' } )
				);
			}
		} catch ( error ) {
			// Do nothing
		} finally {
			setIsLoading( false );
		}
	};

	const fetchImageKeywords = async ( details ) => {
		if ( isFetchingKeywords ) {
			return;
		}
		// If description is same as previous, do not fetch keywords.
		if ( prevBusinessDetails.current === details ) {
			return;
		}
		setIsFetchingKeywords( true );
		try {
			const response = await apiFetch( {
				path: '/gutenberg-templates/v1/keywords',
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
				data: {
					business_name: businessName,
					business_description: details,
					category: businessType,
				},
			} );
			if ( response.success ) {
				const keywordsData = JSON.parse( response.data?.data );
				setWebsiteKeywordsAIStep(
					Array.isArray( keywordsData )
						? keywordsData
						: Object.values( keywordsData )
				);
			}
		} catch ( error ) {
			// DO Nothing.
			console.error( error );
		} finally {
			setIsFetchingKeywords( false );
		}
	};

	const getTitle = ( strings, name ) => {
		if ( name === 'name' ) {
			name = businessName;
		}

		return `${ strings[ 0 ] }${ businessName }${ strings[ 1 ] }`;
	};

	const CATEGORY_DATA = {
		business: {
			question: getTitle`What is ${ 'name' }? Please describe the business.`,
			description:
				'Please be as descriptive as you can. Share details such as services, products, goals, etc.',
		},
		person: {
			question: getTitle`Who is ${ 'name' }? Tell us more about the person.`,
			description:
				'Please be as descriptive as you can. Share details such as what they do, their expertise, offerings, etc.',
		},
		organisation: {
			question: getTitle`What is ${ 'name' }? Please describe the organisation.`,
			description:
				'Please be as descriptive as you can. Share details such as services, programs, mission, vision, etc.',
		},
		restaurant: {
			question: getTitle`What is ${ 'name' }? Tell us more about the restaurant.`,
			description:
				'Please be as descriptive as you can. Share details such as a brief about the restaurant, specialty, menu, etc.',
		},
		product: {
			question: getTitle`What is ${ 'name' }? Share more details about the product.`,
			description:
				'Please be as descriptive as you can. Share details such as a brief about the product, features, some USPs, etc.',
		},
		event: {
			question: getTitle`Tell us more about ${ 'name' }.`,
			description:
				'Please be as descriptive as you can. Share details such as Event information date, venue, some highlights, etc.',
		},
		'landing-page': {
			question: getTitle`Share more details about ${ 'name' }.`,
			description:
				'Please be as descriptive as you can. Share details such as a brief about the product, features, some USPs, etc.',
		},
		medical: {
			question: getTitle`Tell us more about the  ${ 'name' }.`,
			description:
				'Please be as descriptive as you can. Share details such as treatments, procedures, facilities, etc.',
		},
		unknown: {
			question: getTitle`What is ${ 'name' }? Please describe the website in a few words.`,
		},
	};

	const getDescription = ( type ) => {
		return (
			CATEGORY_DATA[ type ]?.description ??
			'Please be as descriptive as you can. Share details such services, products, goal, etc.'
		);
	};

	const handleSelectPreviousDescription = ( event ) => {
		event?.preventDefault();
		if ( descriptionIndx === 0 ) {
			return;
		}
		setDescriptionIndx( ( prev ) => prev - 1 );
		setValue( 'businessDetails', descriptionHistory[ descriptionIndx - 1 ] );
	};

	const handleSelectNextDescription = ( event ) => {
		event?.preventDefault();
		if ( descriptionIndx === descriptionHistory.length - 1 ) {
			return;
		}
		setDescriptionIndx( ( prev ) => prev + 1 );
		setValue( 'businessDetails', descriptionHistory[ descriptionIndx + 1 ] );
	};

	useEffect( () => {
		setFocus( 'businessDetails' );
	}, [ setFocus ] );

	useLayoutEffect( () => {
		const textarea = textareaRef.current;
		if ( textarea ) {
			adjustTextAreaHeight( textarea );
		}
	}, [ formBusinessDetails ] );

	return (
		<form
			className="w-full max-w-container flex flex-col gap-8 pb-10"
			action="#"
			onSubmit={ handleSubmit( handleFormSubmit ) }
		>
			<Heading
				heading={
					CATEGORY_DATA[ businessType?.slug ]?.question ??
					CATEGORY_DATA.unknown.question
				}
				subHeading={ getDescription( businessType?.slug?.toLowerCase() ) }
			/>
			<div>
				<Textarea
					ref={ textareaRef }
					rows={ 8 }
					className="w-full"
					placeholder="E.g. I am a Yoga Teacher from London who’s passionate about guiding students towards inner peace, strength, and mindfulness. I offer personalized classes that nurture the mind, body, and soul."
					name="businessDetails"
					register={ register }
					validations={ {
						required: 'Details are required',
					} }
					error={ errors.businessDetails }
				/>
				<div className="flex gap-3 justify-between items-center">
					<button
						type="button"
						onClick={ handleGenerateContent }
						className="mt-3 flex items-center gap-2 w-fit text-accent-ai bg-transparent border-0 cursor-pointer"
					>
						{ ! isLoading ? (
							<>
								<WandIcon className="w-5 h-5 transition duration-150 ease-in-out" />
								<span>
									{ watch( 'businessDetails' )?.length
										? 'Improve Using AI'
										: 'Write Using AI' }
								</span>
							</>
						) : (
							<LoadingSpinner className="text-accent-ai" />
						) }
					</button>
					{ !! descriptionHistory.length && (
						<div className="flex items-center gap-1">
							<button
								className={ classNames(
									'flex items-center justify-center border-none bg-transparent focus:outline-none cursor-pointer',
									{
										'text-disabled-text cursor-not-allowed':
											descriptionIndx === 0,
										'text-icon-secondary':
											descriptionIndx > 0,
									}
								) }
								onClick={ handleSelectPreviousDescription }
							>
								<ChevronLeftIcon className="w-5 h-5 " />
							</button>

							<span className="text-sm font-medium leading-5 text-body-text">
								{ descriptionIndx + 1 }/
								{ descriptionHistory.length }
							</span>

							<button
								className={ classNames(
									'flex items-center justify-center border-none bg-transparent focus:outline-none cursor-pointer',
									{
										'text-disabled-text cursor-not-allowed':
											descriptionIndx ===
											descriptionHistory.length - 1,
										'text-icon-secondary':
											descriptionIndx <
											descriptionHistory.length - 1,
									}
								) }
								onClick={ handleSelectNextDescription }
							>
								<ChevronRightIcon className="w-5 h-5" />
							</button>
						</div>
					) }
				</div>
			</div>
			<Divider />
			<NavigationButtons
				onClickPrevious={ onClickPrevious }
				loading={ isFetchingKeywords }
			/>
		</form>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNextAIStep, setPreviousAIStep } = dispatch(
			'ast-block-templates'
		);
		return {
			onClickContinue: setNextAIStep,
			onClickPrevious: setPreviousAIStep,
		};
	} )
)( DescribeBusiness );
