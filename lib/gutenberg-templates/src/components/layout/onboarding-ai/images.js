import { apiFetch } from '@Helpers';
import {
	ArrowUpTrayIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	MagnifyingGlassIcon,
	SparklesIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

import { compose } from '@wordpress/compose';
import { useDispatch, useSelect, withDispatch } from '@wordpress/data';
import {
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

import { AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import Masonry from 'react-layout-masonry';

import useCredits from '../../../hooks/use-credits';
import { useDebounce } from '../../../hooks/use-debounce';
import usePopper from '../../../hooks/use-popper';

import { STORE_KEY } from '../../../store';
import { generateContentForAllCategories } from '../../../utils/functions';
import {
	classNames,
	fileErrorToastConfig,
	isValidImageURL,
	toastBody,
} from '../../../utils/helpers';
import { MB_IN_BYTE } from '../../../utils/constants';

import Dropdown from '../../reusable/dropdown/dropdown';
import { logError } from '../../reusable/error-toast/handle-error';
import ImagePreview from '../../reusable/image-preview';
import { Tile } from '../../reusable/masonry';
import SuggestedKeywords from '../../reusable/suggested-keywords/suggested-keywords';
import UploadImage from '../../reusable/upload-image/upload-image';

import ConfirmationPopup from './confirmation-popup';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import { uniqBy } from 'lodash';
import { toast } from 'react-toastify';

const { uploadMedia } = wp.mediaUtils;

const ORIENTATIONS = {
	all: {
		value: 'all',
		label: 'All Orientations',
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
		label: __( 'Upload Your Images', 'ast-block-templates' ),
		value: 'upload',
	},
	{
		label: 'Selected Images',
		value: 'selected',
	},
];

const IMAGES_PER_PAGE = 20;
const IMAGE_ENGINES = ast_block_template_vars?.images_engines || [ 'pexels', 'unsplash' ];
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
	setIsSyncBusinessDetails,
} ) => {
	const {
		setWebsiteImagesAIStep,
		setCurrentCategory,
		toggleOnboardingAIStep,
		dynamicContentFlagSet,
		dynamicContentSyncStart,
		dynamicContentSyncComplete,
		dynamicContentFlagReset,
		setCreditsDetails,
		setIsNewUserOnboarding,
		setIsPersonalized,
	} = useDispatch( STORE_KEY );
	const {
		stepsData: {
			businessName,
			selectedImages = [],
			keywords = [],
			businessType,
			businessDetails,
			businessContact,
			siteLanguage,
			siteLanguageList,
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

	const requests = useRef( [] );

	const selectedLanguage = siteLanguageList?.find(
		( lang ) => lang.code === ( siteLanguage || 'en' )
	);
	const [ orientation, setOrientation ] = useState( ORIENTATIONS.all );
	const [ keyword, setKeyword ] = useState(
		keywords?.length > 0 ? keywords[ 0 ] : ''
	);
	const [ uploadedImages, setUploadedImages ] = useState( [] );
	const [ uploadingImagesCount, setUploadingImagesCount ] = useState( 0 );
	const [ images, setImages ] = useState( [] );
	const [ page, setPage ] = useState( 1 );
	const [ hasMore, setHasMore ] = useState( true );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ backToTop, setBackToTop ] = useState( false );
	const [ openConfirmationPopup, setOpenConfirmationPopup ] =
		useState( false );
	const [ activeTab, setActiveTab ] = useState( 'all' );

	const [ openSuggestedKeywords, setOpenSuggestedKeywords ] =
		useState( false );
	const [ referenceRef, popperRef ] = usePopper( {
		placement: 'bottom',
		modifiers: [ { name: 'offset', options: { offset: [ 0, 0 ] } } ],
	} );

	useEffect( () => {
		setWebsiteImagesAIStep(
			uniqBy(
				[
					...selectedImages,
					...uploadedImages.map( ( image ) => ( {
						id: String( image.id ),
						url: image?.originalImageURL ?? image.url,
						optimized_url: image?.sizes?.large?.url ?? image.url,
						engine: '',
						description: '',
						orientation:
							image?.orientation ??
							( image?.width > image?.height
								? 'landscape'
								: 'portrait' ),
						author_name: image?.author_name ?? '',
						author_url: '',
					} ) ),
				],
				'id'
			)
		);
	}, [ uploadedImages.length ] );

	const scrollContainerRef = useRef( null );
	const imageRequestCompleted = useRef( false );
	const blackListedEngines = useRef( new Set() );

	const uploadImagesBtn = useRef( null );

	const uploadDroppedFiles = async ( filesList ) => {
		setUploadedImages( [] );
		setUploadingImagesCount( filesList.length );
		filesList.forEach( async ( file ) => {
			try {
				await uploadMedia( {
					filesList: [ file ],
					onFileChange: ( files ) => {
						if ( ! files[ 0 ].id ) {
							return;
						}
						// if NOT a valid image name
						if ( ! isValidImageURL( files[ 0 ]?.url ) ) {
							toast.error(
								toastBody( {
									message: sprintf(
										/* translators: %s: file name */
										__(
											'Invalid file name! Please avoid special characters. (%s)',
											'ast-block-templates'
										),
										files[ 0 ].title
									),
								} ),
								fileErrorToastConfig
							);
							setUploadingImagesCount( ( prev ) => prev - 1 );
							return;
						}
						setUploadedImages( ( prevState ) => [
							...prevState,
							...files,
						] );
						setUploadingImagesCount( ( prev ) => prev - 1 );
					},
				} );
			} catch ( error ) {
				console.error( error );
				toast.error(
					toastBody( {
						message: error.message.toString(),
					} ),
					fileErrorToastConfig
				);
				setUploadingImagesCount( ( prevState ) => prevState - 1 );
			}
		} );
	};

	const onDropRejected = ( rejectedList ) => {
		if ( rejectedList.length > 20 ) {
			toast.error(
				toastBody( {
					message: __(
						`You can only upload 20 images at once`,
						'ast-block-templates'
					),
				} ),
				fileErrorToastConfig
			);
			return;
		}
		rejectedList.forEach( ( { errors, file } ) => {
			toast.error(
				toastBody( {
					message: `${ errors[ 0 ].message } (${ file?.name })`,
				} ),
				fileErrorToastConfig
			);
		} );
	};

	const { getRootProps, getInputProps } = useDropzone( {
		accept: {
			'image/png': [ '.png' ],
			'image/jpeg': [ '.jpeg', '.jpg' ],
		},
		noClick: true,
		noKeyboard: true,
		onDropAccepted: uploadDroppedFiles,
		maxFiles: 20,
		maxSize: 5 * MB_IN_BYTE,
		onDropRejected,
	} );

	const getUploadingImageSkeleon = () => {
		if ( ! uploadingImagesCount ) {
			return [];
		}
		return getImageSkeleton( uploadingImagesCount, [ 'aspect-[1/1]' ] );
	};

	const { register, handleSubmit, setValue, reset, setFocus, watch } =
		useForm( { defaultValues: { keyword } } );
	const watchedKeyword = watch( 'keyword' );

	const debouncedImageKeywords = useDebounce( keyword, 500 );
	const debouncedOrientation = useDebounce( orientation, 500 );

	const { isFreeUser } = useCredits();

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
		formData.append( 'language', JSON.stringify( selectedLanguage ) );
		formData.append(
			'social_profiles',
			JSON.stringify( businessContact?.socialMedia || [] )
		);

		try {
			const response = await apiFetch( {
				url: ast_block_template_vars.ajax_url,
				method: 'POST',
				body: formData,
			} );
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
		} catch ( error ) {
			logError( error );
		}

		const type = 'patterns';
		const categoriesToGenerate = isFreeUser
			? allPatternsCategories.slice( 0, 2 )
			: allPatternsCategories;

		dynamicContentFlagReset(
			type,
			isFreeUser ? categoriesToGenerate.map( ( item ) => item.id ) : null
		);
		dynamicContentSyncStart( type );

		let success = false;
		try {
			success = await generateContentForAllCategories(
				categoriesToGenerate,
				setDynamicContent,
				dynamicContentFlagSet,
				( catValue ) => setCurrentCategory( type, catValue ),
				setCreditsDetails,
				'block',
				setIsPersonalized
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
		formData.append( 'language', JSON.stringify( selectedLanguage ) );
		formData.append(
			'social_profiles',
			JSON.stringify( businessContact?.socialMedia || [] )
		);
		formData.append( 'save_only', true );

		try {
			const response = await apiFetch( {
				url: ast_block_template_vars.ajax_url,
				method: 'POST',
				body: formData,
			} );

			if ( response.success ) {
				// Close the onboarding screen on success.
				toggleOnboardingAIStep();
				if ( response?.data.images.length > 0 ) {
					setWebsiteImagesAIStep( response.data.images );
				}
				setIsSyncBusinessDetails( false );
			} else {
				// Handle error.
				throw new Error( response?.data?.data );
			}
		} catch ( error ) {
			// Handle the error here.
			logError( error );
		}
	};

	const handleOrientationChange = ( orientation_value ) => () => {
		if ( orientation_value !== orientation ) {
			cancelPreviousRequests();
		}
		setOrientation( orientation_value );
	};

	const handleSelectKeyword = ( keyword_value ) => {
		cancelPreviousRequests();
		setKeyword( keyword_value );
		setValue( 'keyword', keyword_value );
		setOpenSuggestedKeywords( false );
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
		[ selectedImages, setWebsiteImagesAIStep ] // eslint-disable-line
	);

	const handleClearImageSelection = ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		setWebsiteImagesAIStep(
			selectedImages.filter( ( img ) => ! img.engine )
		);
	};

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

	const cancelPreviousRequests = () => {
		if ( ! requests.current.length ) {
			return;
		}
		requests.current.forEach( ( controller ) => controller.abort() );
		requests.current = [];
		setImages( [] );
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
			const abortController = new AbortController();
			requests.current.push( abortController );

			const res = await apiFetch( {
				path: `gutenberg-templates/v1/images`,
				data: { ...payload, engine },
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
				signal: abortController.signal,
			} );
			const imageResponse = res.data || [];

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
										( prevImage ) =>
											prevImage.id === image.id
									)
							)
					: [];

			// Combine with existing images
			setImages( ( prevImages ) =>
				mergeUniqueImages( prevImages, newImages )
			);

			// Return image response length
			return imageResponse?.length || 0;
		} catch ( error ) {
			if ( error.name === 'AbortError' ) {
				throw error;
			}
			// Do nothing
			logError( error );
		}

		return 0;
	};

	const handleOpenConfirmationPopup = () => {
		setOpenConfirmationPopup( true );
	};

	const fetchAllImagesFromAllEngines = async () => {
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

			imageRequestCompleted.current = true;
			setIsLoading( false );
		} catch ( error ) {
			if ( error.name === 'AbortError' ) {
				return;
			}
			imageRequestCompleted.current = true;
			setIsLoading( false );
			logError( error );
		}
	};

	useEffect( () => {
		imageRequestCompleted.current = false;
		fetchAllImagesFromAllEngines();
	}, [ debouncedImageKeywords, debouncedOrientation, page ] );

	const handleImageSearch = ( data ) => {
		cancelPreviousRequests();
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

	const getUploadedImages = ( imagesArray = [] ) => {
		return imagesArray.filter( ( image ) => ! image.engine );
	};

	const getSelectedImages = ( imagesArray = [] ) => {
		return imagesArray.filter(
			( image ) => image.engine && image.engine !== 'placeholder'
		);
	};

	const getRenderItems = () => {
		switch ( activeTab ) {
			case TABS[ 0 ].value:
				return isLoading
					? [ ...images, ...getImageSkeleton() ]
					: images;
			case TABS[ 1 ].value:
				return [
					...getUploadedImages( selectedImages ),
					...getUploadingImageSkeleon(),
				];
			case TABS[ 2 ].value:
				return getSelectedImages( selectedImages );
			default:
				return isLoading
					? [ ...images, ...getImageSkeleton() ]
					: images;
		}
	};

	const handleOpenSuggestedKeywords = ( event ) => {
		if ( openSuggestedKeywords || ! getSuggestedKeywords()?.length ) {
			return;
		}

		// Check if the event type is on click
		if ( event?.type === 'click' || event?.type === 'keydown' ) {
			setOpenSuggestedKeywords( true );
		}
	};

	const handleClickOutside = ( event ) => {
		const businessTypesWrapper = document.getElementById(
			'search-images-wrapper'
		);
		if (
			businessTypesWrapper &&
			! businessTypesWrapper.contains( event.target )
		) {
			setOpenSuggestedKeywords( false );
		}
	};

	// handle outside click to close the suggestions.
	useEffect( () => {
		document.addEventListener( 'mousedown', handleClickOutside );
		return () =>
			document.removeEventListener( 'mousedown', handleClickOutside );
	}, [ handleClickOutside ] );

	const renderImages = getRenderItems();

	return (
		<div
			ref={ scrollContainerRef }
			className="w-full flex flex-col flex-auto h-full overflow-y-auto"
			onScroll={ handleScroll }
		>
			<div className="w-full space-y-6">
				<Heading
					className="pt-5 md:pt-12 px-5 md:px-10 lg:px-14 xl:px-20 max-w-fit mx-auto !text-zip-app-label"
					heading="Select the Images"
				/>
				<form
					className="w-full overflow-visible min-h-[3.125rem]"
					onSubmit={ handleSubmit( handleImageSearch ) }
				>
					<div
						id="search-images-wrapper"
						ref={ referenceRef }
						className={ classNames(
							'relative w-full max-w-[37.5rem] mx-auto pl-4 pr-12 py-3 border border-button-disabled rounded-md shadow bg-white z-[2]',
							{
								'pb-0 rounded-b-none border-b-0 shadow-md':
									openSuggestedKeywords,
							}
						) }
						onClick={ ( event ) => {
							// If event target is `search-images-wrapper` then focus input.
							if ( event.target.id !== 'search-images-wrapper' ) {
								return;
							}
							setFocus( 'keyword' );
							if (
								openSuggestedKeywords ||
								! getSuggestedKeywords()?.length
							) {
								return;
							}
							setOpenSuggestedKeywords( true );
						} }
						role="button"
						tabIndex="0"
						onKeyDown={ ( e ) => {
							if ( e.key === 'Enter' ) {
								// If event target is `search-images-wrapper` then focus input.
								if ( e.target.id !== 'search-images-wrapper' ) {
									return;
								}
								setFocus( 'keyword' );
								if (
									openSuggestedKeywords ||
									! getSuggestedKeywords()?.length
								) {
									return;
								}
								setOpenSuggestedKeywords( true );
							}
						} }
					>
						<div className="absolute top-[0.875rem] right-3 flex items-center">
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
						</div>
						<input
							className="!text-sm placeholder:text-sm p-0 border-0 w-full h-6 shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none"
							placeholder="Add more relevant keywords..."
							autoComplete="off"
							onKeyDown={ handleOpenSuggestedKeywords }
							onClick={ handleOpenSuggestedKeywords }
							{ ...register( 'keyword' ) }
						/>
						<div
							ref={ popperRef }
							className={ classNames(
								'w-[calc(100%_+_2px)] px-3 pb-4 z-10 bg-white shadow-md border-x border-b border-t-0 border-solid border-border-tertiary rounded-b-md',
								{
									invisible: ! openSuggestedKeywords,
								}
							) }
						>
							{ openSuggestedKeywords && (
								<hr
									className="!mx-0 !my-3 border-t border-solid border-b-0 border-border-tertiary"
									tabIndex={ -1 }
								/>
							) }
							<h6 className="flex items-center justify-start gap-1.5 text-sm font-medium mb-4">
								<span>
									{ __(
										'Suggested Keywords',
										'ast-block-templates'
									) }
								</span>
								<SparklesIcon className="inline-block size-4" />
							</h6>
							<SuggestedKeywords
								keywordClassName="border-zip-light-border-primary bg-background-secondary"
								keywords={ getSuggestedKeywords() }
								onClick={ handleSelectKeyword }
							/>
						</div>
					</div>
				</form>
			</div>

			<div className="pt-4 px-5 md:px-10 lg:px-14 xl:px-20 sticky top-0 space-y-4 z-[1] bg-gt-container-background">
				<div className="rounded-t-lg pt-2 pb-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1 text-sm font-normal leading-[21px]">
							{ /* Tabs */ }
							<div className="flex items-center justify-start gap-3">
								{ TABS.map( ( tab ) => (
									<button
										className={ classNames(
											'relative before:content-[attr(data-title)] before:block before:font-bold before:text-sm before:invisible before:h-0',
											'px-0 py-3 border-0 bg-transparent text-sm font-semibold text-accent-st cursor-pointer focus-visible:outline-none focus:outline-none active:outline-none transition-colors ease-in-out duration-150',
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
										{ tab.value === TABS[ 2 ].value &&
											!! getSelectedImages(
												selectedImages
											)?.length &&
											` (${
												getSelectedImages(
													selectedImages
												)?.length
											})` }
										{ tab.value === TABS[ 1 ].value &&
											!! getUploadedImages(
												selectedImages
											)?.length &&
											` (${
												getUploadedImages(
													selectedImages
												)?.length
											})` }
										{ tab.value === activeTab && (
											<span className="absolute bottom-0 inset-x-0 w-full h-0.5 bg-accent-ai" />
										) }
									</button>
								) ) }
							</div>
						</div>
						{ activeTab === TABS[ 0 ].value && (
							<Dropdown
								placement="right"
								trigger={
									<div
										className={ classNames(
											'flex items-center gap-2 min-w-[100px] py-3 pl-4 pr-3 cursor-pointer border border-border-primary rounded-md'
										) }
									>
										<span className="text-sm font-normal text-body-text leading-[150%]">
											{ orientation.label }
										</span>
										<ChevronDownIcon className="w-5 h-5 text-app-inactive-icon" />
									</div>
								}
								align="top"
								width="48"
								contentClassName="p-1 bg-white"
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
												className="w-full flex items-center justify-between gap-2 py-1.5 px-2 text-sm font-normal leading-5 text-body-text hover:bg-background-secondary transition duration-150 ease-in-out space-x-2 rounded bg-white border-none cursor-pointer"
												onClick={ handleOrientationChange(
													orientationItem
												) }
											>
												<span>
													{ orientationItem.label }
												</span>
												{ orientationItem.value ===
													orientation.value && (
													<CheckIcon className="w-4 h-4 text-heading-text" />
												) }
											</button>
										</Dropdown.Item>
									)
								) }
							</Dropdown>
						) }

						{ activeTab === TABS[ 2 ].value &&
							!! selectedImages?.length && (
								<button
									onClick={ handleClearImageSelection }
									className="px-1 py-px bg-transparent border border-solid border-border-primary rounded text-xs leading-4 text-body-text cursor-pointer"
								>
									{ __( 'Clear', 'ast-block-templates' ) }
								</button>
							) }

						{ activeTab === TABS[ 1 ].value && (
							<UploadImage
								render={ ( { open } ) => (
									<button
										ref={ uploadImagesBtn }
										className="px-0 bg-transparent border-none rounded text-xs leading-5 font-semibold text-accent-st cursor-pointer inline-flex items-center justify-end gap-2"
										onClick={ open }
									>
										<ArrowUpTrayIcon
											className="w-4 h-4 text-zip-app-inactive-icon"
											strokeWidth={ 2 }
										/>
										<span>
											{ __(
												'Upload Your Images',
												'ast-block-templates'
											) }
										</span>
									</button>
								) }
							/>
						) }
					</div>
				</div>
			</div>
			<div className="py-4 px-5 md:px-10 lg:px-14 xl:px-20 flex flex-col flex-auto relative">
				{ activeTab === TABS[ 1 ].value && ! renderImages.length && (
					<div
						className={ classNames(
							'relative flex flex-col items-center justify-center gap-3 py-[3.125rem] px-4 bg-background-primary border border-dashed border-border-tertiary rounded cursor-pointer'
						) }
						{ ...getRootProps() }
					>
						<input { ...getInputProps() } />
						<ArrowUpTrayIcon className="w-6 h-6 text-zip-app-inactive-icon" />
						<p className="text-zip-body-text text-base !my-0">
							<span className="text-accent-st min-w-fit break-keep text-nowrap whitespace-nowrap font-semibold mr-1">
								{ __( 'Upload images', 'ast-block-templates' ) }
							</span>
							{ __(
								'or drop your images here (Max 20)',
								'ast-block-templates'
							) }
						</p>
						<p className="text-zip-body-text text-base !my-0">
							{ __( 'PNG, JPG, JPEG', 'ast-block-templates' ) }
						</p>
						<p className="text-zip-body-text text-base !my-0">
							{ __(
								'Max size: 5 MB per file',
								'ast-block-templates'
							) }
						</p>
						<div
							className="absolute inset-0"
							onClick={ () => {
								if ( ! uploadImagesBtn?.current ) {
									return;
								}
								uploadImagesBtn?.current.click();
							} }
							tabIndex={ 0 }
							role="button"
							onKeyDown={ ( e ) => {
								if (
									! uploadImagesBtn?.current &&
									e.key !== 'Enter'
								) {
									return;
								}
								uploadImagesBtn?.current.click();
							} }
						/>
					</div>
				) }
				<AnimatePresence>
					{ renderImages?.length > 0 && (
						<Masonry
							className="gap-6 [&>div]:gap-6"
							columns={ {
								default: 1,
								220: 2,
								767: 3,
								1024: 3,
								1280: 5,
								1920: 6,
							} }
						>
							{ renderImages.map( ( image ) =>
								image?.optimized_url &&
								image?.engine !== 'placeholder' ? (
									<ImagePreview
										key={ image.id }
										image={ image }
										isSelected={ isSelected( image ) }
										onClick={ handleImageSelection }
										variant={
											activeTab === TABS[ 2 ].value ||
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
										{ __(
											'Find the perfect images for your website by entering a keyword or selecting from the suggested options.',
											'ast-block-templates'
										) }
									</>
								) : (
									<>
										{ __(
											'We couldn`t find anything with your keyword.',
											'ast-block-templates'
										) }
										<br />
										{ __(
											'Try to refine your search.',
											'ast-block-templates'
										) }
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
								{ __(
									'End of the search results',
									'ast-block-templates'
								) }
							</p>
						</div>
					) }

				{ activeTab === TABS[ 2 ].value &&
					! getSelectedImages( selectedImages ).length && (
						<div className="flex flex-col items-center justify-center h-full">
							<p className="text-secondary-text text-center px-10 py-5 border-2 border-dashed border-border-primary rounded-md">
								{ __(
									'No images are selected yet.',
									'ast-block-templates'
								) }
							</p>
						</div>
					) }
			</div>
			{ /* Back to the top */ }
			{ backToTop && (
				<div className="absolute right-[6.5rem] bottom-28 ml-auto">
					<button
						type="button"
						className="absolute bottom-0 right-0 z-10 w-8 h-8 rounded-full bg-accent-st border-0 border-solid text-white flex items-center justify-center shadow-sm cursor-pointer"
						onClick={ handleClickBackToTop }
					>
						<ChevronUpIcon className="w-5 h-5" />
					</button>
				</div>
			) }
			<div className="min-h-[80px] py-4 px-5 md:px-10 lg:px-14 xl:px-20 sticky bottom-0 bg-gt-container-background">
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
			setIsSyncBusinessDetails,
		} = dispatch( 'ast-block-templates' );

		return {
			onClickPrevious: setPreviousAIStep,
			setDynamicContent,
			setCurrentCategory,
			setIsSyncBusinessDetails,
		};
	} )
)( Images );
