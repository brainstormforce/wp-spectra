import { useForm } from 'react-hook-form';
import Divider from '../../reusable/divider/divider';
import Textarea from '../../reusable/textarea/textarea';
import { WandIcon } from '../../ui/icons';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import { STORE_KEY } from '../../../store';
import { apiFetch } from '@Helpers';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';
import {
	adjustTextAreaHeight,
	classNames,
	toastBody,
} from '../../../utils/helpers';
import {
	useEffect,
	useState,
	useRef,
	useLayoutEffect,
} from '@wordpress/element';
import { withDispatch, useSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { toast } from 'react-toastify';
import { __ } from '@wordpress/i18n';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import StyledText from '../../reusable/styled-text/StyledText';
import { logError } from '../../reusable/error-toast/handle-error';
import AILayoutContainer from '../../reusable/ai-layout-container/ai-layout-container';
import improveUsingAiModal from '../../reusable/improve-using-ai-modal/improve-using-ai-modal';

const generateContentOptions = async ( {
	businessName,
	formBusinessDetails,
	businessType,
	siteLanguage,
} ) => {
	try {
		const response = await apiFetch( {
			path: `gutenberg-templates/v1/description`,
			method: 'POST',
			headers: {
				'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
			},
			data: {
				business_name: businessName,
				business_description: formBusinessDetails,
				category: businessType,
				language: siteLanguage,
			},
		} );

		return response?.data;
	} catch ( error ) {
		toast.error( toastBody( error ) );
	}
};

const DescribeBusiness = ( { onClickContinue, onClickPrevious } ) => {
	const {
		businessDetails,
		businessType,
		businessName,
		businessDetailsHistory,
		descriptionListStore,
		loadingNextStep,
		siteLanguage,
		siteLanguageList,
	} = useSelect( ( select ) => {
		const { getAIStepData, getLoadingNextStep } = select( STORE_KEY );
		return {
			...getAIStepData(),
			loadingNextStep: getLoadingNextStep(),
		};
	} );

	const aiOnboardingDetails = useSelect( ( select ) => {
		const { getOnboardingAI } = select( STORE_KEY );
		return getOnboardingAI();
	} );

	const {
		setWebsiteDetailsAIStep,
		setWebsiteKeywordsAIStep,
		resetKeywordsImagesAIStep,
		setWebsiteDetailsHistoryAIStep,
		setOnboardingAIDetails,
	} = useDispatch( STORE_KEY );

	const [ isLoading, setIsLoading ] = useState( false );
	const [ isFetchingKeywords, setIsFetchingKeywords ] = useState( false ),
		[ descriptionHistory ] = useState( businessDetailsHistory );

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

	const handleFetchSuggestion = async () => {
		try {
			const improvedDescription = generateContentOptions( {
				businessName,
				businessType,
				formBusinessDetails,
				siteLanguage,
			} );
			return improvedDescription;
		} catch ( error ) {
			console.log( error );
		}
	};

	const handleFormSubmit = async ( data ) => {
		let { businessDetails: description } = data;
		// if description too short, show modal
		if ( description.length < 200 ) {
			setFocus( 'businessDetails' );
			description = await improveUsingAiModal.show( {
				handleFetchSuggestion,
			} );

			if ( ! description ) {
				return;
			}

			setValue( 'businessDetails', description, {
				shouldValidate: true,
			} );

			return;
		}

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

		const newDescList = [ formBusinessDetails ];

		try {
			const selectedLanguage = siteLanguageList?.find(
				( lang ) => lang.code === ( siteLanguage || 'en' )
			);

			const response = await apiFetch( {
				path: `gutenberg-templates/v1/description`,
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
				data: {
					business_name: businessName,
					business_description: formBusinessDetails,
					category: businessType,
					language_name: selectedLanguage?.name,
				},
			} );
			const description = response.data || [];
			if ( description !== undefined ) {
				newDescList.push( description );

				addDescriptionToList( newDescList );

				setValue( 'businessDetails', description, {
					shouldValidate: true,
				} );
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
				path: `gutenberg-templates/v1/keywords`,
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
			const keywordsData = typeof response.data === 'string' ? JSON.parse( response.data ) : response.data;
			setWebsiteKeywordsAIStep(
				Array.isArray( keywordsData )
					? keywordsData
					: Object.values( keywordsData )
			);
		} catch ( error ) {
			logError( error );
		} finally {
			setIsFetchingKeywords( false );
		}
	};

	const getTitle = ( strings, name ) => {
		if ( name === 'name' ) {
			name = businessName;
		}

		return (
			<div className="text-[1.75rem] font-semibold leading-9">
				{ strings[ 0 ] }
				<StyledText text={ businessName } />
				{ strings[ 1 ] }
			</div>
		);
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
		'personal-website': {
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
			question: getTitle`Please describe ${ 'name' } in a few words.`,
		},
	};

	const getDescription = ( type ) => {
		return (
			CATEGORY_DATA[ type ]?.description ??
			__(
				'The best way to describe anything is by answering a few WH questions. Who, What, Where, Why, When, etc.',
				'ast-block-templates'
			)
		);
	};

	useEffect( () => {
		setFocus( 'businessDetails' );
	}, [ setFocus ] );

	useLayoutEffect( () => {
		setBusinessDesc( formBusinessDetails );
		const textarea = textareaRef.current;
		if ( textarea ) {
			adjustTextAreaHeight( textarea );
		}
	}, [ formBusinessDetails ] );

	const { list: descriptionList, currentPage: descriptionPage } =
		descriptionListStore || {};

	const navigateDescription = ( showNext ) => {
		const newPageNumber = showNext
			? descriptionPage + 1
			: descriptionPage - 1;

		const currentPageIndex = descriptionPage - 1;

		const newList = [ ...descriptionList ];

		// check if user has made changes to current description and save that change in new slot
		if ( descriptionList[ currentPageIndex ] !== formBusinessDetails ) {
			newList[ currentPageIndex ] = formBusinessDetails;
		}

		setValue( 'businessDetails', newList[ newPageNumber - 1 ] );
		setOnboardingAIDetails( {
			...aiOnboardingDetails,
			stepData: {
				...aiOnboardingDetails.stepData,
				descriptionListStore: {
					...descriptionListStore,
					list: newList,
					currentPage: newPageNumber,
				},
			},
		} );
	};

	const addDescriptionToList = ( descList ) => {
		if ( ! Array.isArray( descList ) ) {
			return;
		}

		const filteredList = descList.filter(
			( desc ) =>
				desc?.trim()?.length !== 0 &&
				! descriptionList?.includes( desc )
		);

		const newDescList = [ ...descriptionList, ...filteredList ];

		setOnboardingAIDetails( {
			...aiOnboardingDetails,
			stepData: {
				...aiOnboardingDetails.stepData,
				descriptionListStore: {
					list: newDescList,
					currentPage: newDescList.length,
				},
				businessDetails: formBusinessDetails,
				templateList: [],
			},
		} );
	};

	const setBusinessDesc = ( descriptionValue, isOnSubmit ) => {
		if ( descriptionValue?.trim() === businessDetails?.trim() ) {
			return;
		}

		setOnboardingAIDetails( {
			...aiOnboardingDetails,
			stepData: {
				...aiOnboardingDetails.stepData,
				businessDetails: formBusinessDetails,
				...( ! isOnSubmit && {
					keywords: [],
					selectedImages: [],
					imagesPreSelected: false,
				} ),
				templateList: [],
			},
		} );
	};

	return (
		<AILayoutContainer
			as="form"
			action="#"
			onSubmit={ handleSubmit( handleFormSubmit ) }
		>
			<Heading
				heading={
					CATEGORY_DATA[ businessType?.toLowerCase() ]?.question ??
					CATEGORY_DATA.unknown.question
				}
				subHeading={ getDescription(
					businessType?.replaceAll( ' ', '-' )?.toLowerCase()
				) }
			/>
			<div>
				<div
					className={ classNames(
						'ml-0 w-full text-right text-sm font-medium leading-5 text-app-text mb-2 -mt-2'
					) }
				>
					{ __( 'Characters: ', 'ai-builder' ) }
					<span>{ formBusinessDetails.length }</span> / 1000
				</div>
				<Textarea
					ref={ textareaRef }
					rows={ 8 }
					className="w-full"
					placeholder="E.g. Mantra Minds is a yoga studio located in Chino Hills, California. The studio offers a variety of classes such as Hatha yoga, Vinyasa flow, and Restorative yoga. The studio is led by Jane, an experienced and certified yoga instructor with over 10 years of teaching expertise. The welcoming atmosphere and personalized Jane make it a favorite among yoga enthusiasts in the area."
					name="businessDetails"
					register={ register }
					maxLength={ 1000 }
					validations={ {
						required: 'Details are required',
						maxLength: 1000,
					} }
					error={ errors.businessDetails }
					disabled={ isLoading || loadingNextStep }
				/>
				<div className="flex gap-3 justify-between items-center mt-3">
					<button
						type="button"
						onClick={ handleGenerateContent }
						className="flex items-center gap-2 w-fit text-accent-st bg-transparent border-0 cursor-pointer"
						disabled={ loadingNextStep }
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
					{ descriptionPage > 0 && descriptionList?.length > 1 && (
						<div className="flex gap-2 items-center justify-end w-[100px] cursor-default text-zip-body-text">
							<div className="w-5">
								{ descriptionPage !== 1 ? (
									<ChevronLeftIcon
										className="w-5 cursor-pointer text-zip-body-text flex justify-center"
										onClick={ () =>
											navigateDescription( false )
										}
										data-disabled={ loadingNextStep }
									/>
								) : (
									<ChevronLeftIcon
										className="w-5 text-border-tertiary flex justify-center cursor-not-allowed"
										data-disabled="true"
									/>
								) }
							</div>
							<div className="zw-sm-semibold cursor-default self-stretch flex items-end">
								{ descriptionPage } /{ ' ' }
								{ descriptionList?.length }
							</div>
							<div className="w-5">
								{ descriptionPage !==
								descriptionList?.length ? (
									<ChevronRightIcon
										className="w-5 cursor-pointer text-zip-body-text flex justify-center"
										onClick={ () =>
											navigateDescription( true )
										}
										data-disabled={ loadingNextStep }
									/>
								) : (
									<ChevronRightIcon
										className="w-5 text-border-tertiary flex justify-center"
										data-disabled="true"
									/>
								) }
							</div>
						</div>
					) }
				</div>
			</div>
			<Divider />
			<NavigationButtons
				onClickPrevious={ onClickPrevious }
				loading={ isFetchingKeywords }
			/>
		</AILayoutContainer>
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
