import { compose, useDebounce } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import {
	memo,
	useEffect,
	useState,
	useMemo,
} from '@wordpress/element';
import SingleBlockWrapper from '../../../reusable/single-block/single-block';
import Filters from './filters/index';
import Masonry from 'react-layout-masonry';
import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import { STORE_KEY } from '../../../../store';
import SingleBlockLoadingSkeleton from '../../../reusable/single-block/single-block-loading-skeleton';
import { updateHideNoticeFlag } from '../../../../utils/functions';
import {
	clearSessionStorage,
	getFromSessionStorage,
} from '../../../../utils/helpers';
import EventBus from '../../../../utils/event-emitter';
import useCredits from '../../../../hooks/use-credits';
import Snackbar from '../../../reusable/snackbar';
import { CheckCircleIcon, ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Button from '../../../reusable/button/button';

const BlocksGrid = ( {
	filterBlocksByCategory,
	allPatterns,
	allPatternsCategories,
	defaultPalette,
	activePalette,
	dynamicContent,
	selectedImages,
	syncFlags,
	syncStatus,
	searchTerm,
	reSyncStatus,
	regeneratingContentCategory,
	adaptiveMode,
	hideNotice,
	setHideNotice,
	toggleOnboardingAIStep,
	disableAi,
	isSyncBusinessDetails,
} ) => {
	const items = allPatterns;

	const {
		stepsData: { businessContact, businessDetails, token },
		allPatternsAndPages,
		loadingBlocksAndSites,
	} = useSelect( ( select ) => {
		const { getAIStepData, getAllPatternsAndPages, getLoadingBlocksAndSites } = select( STORE_KEY );
		return {
			stepsData: getAIStepData(),
			allPatternsAndPages: getAllPatternsAndPages(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
		};
	} );
	const { currentBalanceStatus, remaining } = useCredits();
	const noticeCategoryNames = allPatternsCategories
		.slice( 0, 2 )
		.map( ( { name } ) => name )
		.join( ', ' );

	const freeAiContentNotice = getFromSessionStorage(
		'ast-free-ai-content',
		false
	);
	const noticeSnackbar = {
		show:
			( !! freeAiContentNotice && currentBalanceStatus.warning && currentBalanceStatus.danger ) ||
			( currentBalanceStatus.warning && ! hideNotice.creditWarning ) ||
			( currentBalanceStatus.danger && ! hideNotice.creditDanger ) ||
			false,
		variantAndType:
			( !! freeAiContentNotice && { variant: 'success', type: 'freeAiContent' } ) ||
			( currentBalanceStatus.warning && { variant: 'warning', type: 'creditWarning' } ) ||
			( currentBalanceStatus.danger && { variant: 'error', type: 'creditDanger' } ),
		message:
			( !! freeAiContentNotice &&
				`Your ${ noticeCategoryNames } content is ready to shine. Ready to personalize the your entire library?` ) ||
			( remaining === 0 &&
				`You're out of AI credits. Personalize the design library with content and images tailored to your website project` ) ||
			( ( currentBalanceStatus.warning || currentBalanceStatus.danger ) &&
				`You're almost out of AI credits. Personalize the design library with content and images tailored to your website project` ),
	};

	useEffect( () => {
		EventBus.on( 'reset-list-count', () => setVisibleItems( 10 ) );
	}, [] );

	const [ visibleItems, setVisibleItems ] = useState( 10 ); // Number of visible items
	const colorPalette =
		Object.keys( activePalette ).length > 0
			? activePalette.colors
			: defaultPalette.colors;

	const handleScroll = () => {
		if ( shouldShowSkeleton() ) {
			return;
		}
		const currentItems = searchTerm && ! items.length ? allPatternsAndPages.patterns : items;

		if (
			window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500 &&
			// Adjust the threshold
			currentItems.length > visibleItems
		) {
			setVisibleItems( ( prevVisibleItems ) => prevVisibleItems + 10 ); // Increase the number of visible items
		}
	} // eslint-disable-line

	const debouncedHandleScroll = useDebounce( handleScroll, 200 );

	const visibleBlockItems = items.slice( 0, visibleItems );

	const getRowNum = ( index ) => {
		return Math.floor( index / 3 ) + 1;
	};

	const getLoadingSkeletonType = ( row, column ) => {
		const types = [ 1, 2, 3 ];
		const index = ( row - 1 ) % 3;
		const typeIndex = ( column - 1 + index ) % 3;
		return types[ typeIndex ];
	};

	const getSkeletonsCount = () => {
		if ( filterBlocksByCategory === '' ) {
			const catCount = allPatternsCategories.reduce( ( acc, category ) => {
				acc += category.count;
				return null;
			}, 0 );

			return catCount > 10 ? catCount : 10;
		}

		const category = allPatternsCategories.find(
			( element ) => element.id === filterBlocksByCategory
		);
		const minMax = category?.count ? category.count : 10;
		return category?.count > 10 ? 10 : minMax;
	};

	const getSkeleton = () => {
		let skeletonType = 1;
		let index = 0;

		return () => {
			if ( skeletonType > 3 ) {
				skeletonType = 1;
			}
			if ( index === getSkeletonsCount() - 1 ) {
				index = 0;
			}
			return (
				<SingleBlockLoadingSkeleton
					key={ index }
					type={ getLoadingSkeletonType(
						getRowNum( index++ ),
						skeletonType++
					) }
				/>
			);
		};
	};

	const isCurrentCategorySyncing = () => {
		if ( ! syncStatus ) {
			return false;
		}

		if (
			Object.values( syncFlags.patterns ).every( ( flag ) => flag === false ) &&
			filterBlocksByCategory === ''
		) {
			return true;
		}

		if (
			filterBlocksByCategory !== '' &&
			Object.keys( syncFlags.patterns )
				.map( Number )
				.includes( filterBlocksByCategory ) &&
			! syncFlags.patterns[ filterBlocksByCategory ]
		) {
			return true;
		}

		return false;
	};

	const shouldShowSkeleton = () => {
		if ( loadingBlocksAndSites ) {
			return true;
		}
		if (
			reSyncStatus &&
			regeneratingContentCategory === filterBlocksByCategory
		) {
			return true;
		}

		if ( reSyncStatus && regeneratingContentCategory === '' ) {
			return true;
		}

		if ( ! syncStatus ) {
			return false;
		}

		return isCurrentCategorySyncing();
	};

	const handleClickCloseNotice = ( type ) => () => {
		clearSessionStorage( 'ast-free-ai-content' );
		setHideNotice( { [ type ]: true } );
		if ( type === 'freeAiContent' ) {
			return;
		}
		updateHideNoticeFlag( type );
	};

	const allPatternItems =
		! visibleBlockItems?.length && searchTerm !== ''
			? allPatternsAndPages.patterns
			: [];

	const getMasonryItems = () => {
		const showSkeleton = shouldShowSkeleton();

		if ( showSkeleton ) {
			const skeletonCount = getSkeletonsCount();
			return Array( skeletonCount > 10 ? 10 : skeletonCount ).fill( 1 );
		}

		const syncFlagsEntries = Object.entries( syncFlags.patterns );
		if (
			! reSyncStatus &&
			syncStatus &&
			syncFlagsEntries.some( ( [ , doneStatus ] ) => doneStatus === false )
		) {
			return visibleBlockItems.filter(
				( item ) => syncFlags.patterns[ item.category ] !== false
			);
		}

		if ( ! visibleBlockItems.length && searchTerm !== '' ) {
			return allPatternItems.slice( 0, visibleItems );
		}
		return visibleBlockItems;
	};

	const renderSkeleton = useMemo( () => getSkeleton(), [] );

	const getRenderItem = ( item, index ) => {
		const showSkeleton = shouldShowSkeleton();

		if ( showSkeleton ) {
			return renderSkeleton();
		}

		return (
			<SingleBlockWrapper
				key={ item.ID }
				index={ index }
				item={ item }
				content={ item.content }
				stylesheet={ item.stylesheet }
				astraCustomizer={
					! adaptiveMode
						? ast_block_template_vars.server_astra_customizer_css
						: ast_block_template_vars.astra_customizer_css
				}
				globalStylesheet={ item.global_stylesheet }
				colorPalette={ colorPalette }
				dynamicContent={ dynamicContent[ item.category ] ?? [] }
				selectedImages={ selectedImages }
				email={ businessContact.email }
				phone={ businessContact.phone }
				address={ businessContact.address }
			/>
		);
	};

	return (
		<div className="ast-block-templates-grid-blocks active h-full">
			<Filters />
			<div
				onScroll={ debouncedHandleScroll }
				className="ast-scrolling-container w-full max-w-[calc(100%_-_280px)] ml-auto h-full overflow-auto"
			>
				{ noticeSnackbar.show && token && (
					<Snackbar
						type={ noticeSnackbar.variantAndType.variant }
						message={ noticeSnackbar.message }
						icon={
							'success' === noticeSnackbar.variantAndType.variant ? (
								<CheckCircleIcon className="w-6 h-6" />
							) : (
								<ExclamationTriangleIcon className="w-6 h-6" />
							)
						}
						ctaLink={ ast_block_template_vars.get_more_credits_url }
						ctaText="Get More Credits"
						onClose={ handleClickCloseNotice(
							noticeSnackbar.variantAndType.type
						) }
					/>
				) }
				{ ! hideNotice.personalizeAi &&
					token &&
					( ! businessDetails || ( businessDetails && 'yes' === isSyncBusinessDetails ) ) &&
					! disableAi &&
					! searchTerm &&
					! currentBalanceStatus.warning &&
					! currentBalanceStatus.danger && (
					<Snackbar
						className="pl-6 py-4 pr-4 mx-10 mt-9"
						rounded={ 8 }
						type="info"
						message={
							<div className="inline-flex items-center justify-start gap-5">
								<span>
									Did you know, you can personalize this
									design library with content and images
									tailored to your website project?
								</span>
								<Button
									id="ast-block-template-setup-ai-btn"
									className="min-w-fit"
									variant="primary"
									isSmall
									onClick={ () => {
										const closeNoticeHandler = handleClickCloseNotice( 'personalizeAi' );
    									closeNoticeHandler();
										toggleOnboardingAIStep( true );
									} }
								>
									Personalize Library with AI
								</Button>
							</div>
						}
						icon={ <SparklesIcon className="w-6 h-6" /> }
						onClose={ handleClickCloseNotice( 'personalizeAi' ) }
						isClose={ false }
					/>
				) }
				<div className="h-full w-full p-10">
					{ ! visibleBlockItems.length && searchTerm !== '' && (
						<div className="px-4 pb-0">
							<NoSearchResult keyword={ searchTerm } />
							<h6 className="m-0 mt-10 text-heading-text text-xl font-semibold leading-7">
								Other suggested pattern designs
							</h6>
						</div>
					) }
					<Masonry
						columns={ { default: 3, 768: 1, 1024: 3 } }
						className="ast-block-templates-grid"
						id="ast-block-templates-grid-blocks"
					>
						{ getMasonryItems()?.map( ( item, index ) =>
							getRenderItem( item, index )
						) }
					</Masonry>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setFilterBlocksBySearchTerm,
			setFilterBlocksByCategory,
			setActiveBlockPalette,
			setHideNotice,
			toggleOnboardingAIStep,
		} = dispatch( STORE_KEY );
		return {
			setFilterBlocksByCategory,
			setFilterBlocksBySearchTerm,
			setActiveBlockPalette,
			setHideNotice,
			toggleOnboardingAIStep,
		};
	} ),
	withSelect( ( select ) => {
		const {
			getAllPatterns,
			getAllCategories,
			getFilterBlocksByCategory,
			getFilterBlocksByColor,
			getDefaultBlockColorPalette,
			getActiveBlockPalette,
			getDynamicContent,
			getAIStepData,
			getFilterBlocksBySearchTerm,
			getDynamicContentSyncStatus,
			getDynamicContentSyncFlags,
			getAllPatternsCategories,
			getDynamicContentReSyncStatus,
			getRegeneratingContentCategory,
			getAdaptiveMode,
			getHideNotice,
			getSkipZipAIOnboarding,
			getDisableAi,
			getIsSyncBusinessDetails,
		} = select( STORE_KEY );
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksByColor: getFilterBlocksByColor(),
			allPatterns: getAllPatterns(),
			defaultPalette: getDefaultBlockColorPalette(),
			activePalette: getActiveBlockPalette(),
			dynamicContent: getDynamicContent(),
			selectedImages: getAIStepData().selectedImages,
			allCategories: getAllCategories(),
			searchTerm: getFilterBlocksBySearchTerm(),
			syncStatus: getDynamicContentSyncStatus()?.patterns,
			syncFlags: getDynamicContentSyncFlags(),
			allPatternsCategories: getAllPatternsCategories(),
			reSyncStatus: getDynamicContentReSyncStatus(),
			regeneratingContentCategory: getRegeneratingContentCategory(),
			adaptiveMode: getAdaptiveMode(),
			hideNotice: getHideNotice(),
			skipZipAIOnboarding: getSkipZipAIOnboarding(),
			disableAi: getDisableAi(),
			isSyncBusinessDetails: getIsSyncBusinessDetails(),
		};
	} )
)( memo( BlocksGrid ) );
