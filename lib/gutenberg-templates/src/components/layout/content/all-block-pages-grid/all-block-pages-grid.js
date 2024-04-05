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
import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import Masonry from 'react-layout-masonry';
import { STORE_KEY } from '../../../../store';
import SingleBlockLoadingSkeleton from '../../../reusable/single-block/single-block-loading-skeleton';
import EventBus from '../../../../utils/event-emitter';
import { updateHideNoticeFlag } from '../../../../utils/functions';
import useCredits from '../../../../hooks/use-credits';
import Snackbar from '../../../reusable/snackbar';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const BlockPagesGrid = ( {
	allPages,
	defaultPalette,
	activePalette,
	dynamicContent,
	selectedImages,
	filterBlocksPagesByCategory,
	allPagesCategories,
	searchTerm,
	syncFlags,
	syncStatus,
	reSyncStatus,
	regeneratingContentCategory,
	adaptiveMode,
	hideNotice,
	setHideNotice,
} ) => {
	const items = allPages;
	const {
		stepsData: { businessContact, token },
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
	const noticeSnackbar = {
		show:
			( currentBalanceStatus.warning && ! hideNotice.creditWarning ) ||
			( currentBalanceStatus.danger && ! hideNotice.creditDanger ) ||
			false,
		variantAndType:
			( currentBalanceStatus.warning && { variant: 'warning', type: 'creditWarning' } ) ||
			( currentBalanceStatus.danger && { variant: 'error', type: 'creditDanger' } ),
		message:
		( remaining === 0 &&
			`You're out of AI credits. Personalize the design library with content and images tailored to your website project` ) ||
		( ( currentBalanceStatus.warning || currentBalanceStatus.danger ) &&
			`You're almost out of AI credits. Personalize the design library with content and images tailored to your website project` ),
	};

	const handleClickCloseNotice = ( type ) => () => {
		setHideNotice( { [ type ]: true } );
		updateHideNoticeFlag( type );
	};

	useEffect( () => {
		EventBus.on( 'reset-list-count', () => {
			setVisibleItems( 10 );
		} );
	}, [] );

	const [ visibleItems, setVisibleItems ] = useState( 10 ); // Number of visible items
	const colorPalette =
		Object.keys( activePalette ).length > 0
			? activePalette.colors
			: defaultPalette.colors;

	// Debounce function implementation
	const debounce = ( func, delay ) => {
		let timeoutId;
		return ( ...args ) => {
			clearTimeout( timeoutId );
			timeoutId = setTimeout( () => func( ...args ), delay );
		};
	};

	const handleScroll = () => {
		const currentItems = searchTerm && ! items.length ? allPatternsAndPages.pages : items;
		//eslint-disable-line
		if (
			window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500 &&
			currentItems.length > visibleItems // Adjust the threshold
		) {
			setVisibleItems( ( prevVisibleItems ) => prevVisibleItems + 10 ); // Increase the number of visible items
		}
	};

	useEffect( () => {
		const handleScrollDebounced = debounce( handleScroll, 200 ); // Debounce the scroll event handler
		const containers = document.getElementsByClassName(
			'ast-scrolling-container'
		);
		if ( containers.length > 0 ) {
			const container = containers[ 0 ];
			container.addEventListener( 'scroll', handleScrollDebounced );
			return () =>
				container.removeEventListener( 'scroll', handleScrollDebounced );
		}
	}, [ handleScroll ] ); // Include handleScroll in the dependency array

	const debouncedHandleScroll = useDebounce( handleScroll, 200 );

	const visibleBlockItems = items.slice( 0, visibleItems );

	const getRowNum = ( index ) => {
		return Math.floor( index / 3 ) + 1;
	};

	const isCurrentCategorySyncing = () => {
		if ( ! syncStatus ) {
			return false;
		}

		if (
			Object.values( syncFlags.pages ).every( ( flag ) => flag === false ) &&
			filterBlocksPagesByCategory === ''
		) {
			return true;
		}

		if (
			filterBlocksPagesByCategory !== '' &&
			Object.keys( syncFlags.pages )
				.map( Number )
				.includes( filterBlocksPagesByCategory ) &&
			! syncFlags.pages[ filterBlocksPagesByCategory ]
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
			regeneratingContentCategory === filterBlocksPagesByCategory
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

	const allPagesItems =
		! visibleBlockItems?.length && searchTerm !== ''
			? allPatternsAndPages.pages
			: [];

	const getSkeletonsCount = () => {
		if ( filterBlocksPagesByCategory === '' ) {
			const catCount = allPagesCategories.reduce( ( acc, category ) => {
				acc += category.count;
				return null;
			}, 0 );

			return catCount > 10 ? catCount : 10;
		}

		const category = allPagesCategories.find(
			( element ) => element.id === filterBlocksPagesByCategory
		);
		const minMax = category?.count ? category.count : 10;
		return category?.count > 10 ? 10 : minMax;
	};

	const getLoadingSkeletonType = ( row, column ) => {
		const types = [ 1, 2, 3 ];
		const index = ( row - 1 ) % 3;
		const typeIndex = ( column - 1 + index ) % 3;
		return types[ typeIndex ];
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

	const getMasonryItems = () => {
		const showSkeleton = shouldShowSkeleton();

		if ( showSkeleton ) {
			const skeletonCount = getSkeletonsCount();
			return Array( skeletonCount > 10 ? 10 : skeletonCount ).fill( 1 );
		}

		const syncFlagsEntries = Object.entries( syncFlags.pages );
		if (
			! reSyncStatus &&
			syncStatus &&
			syncFlagsEntries.some( ( [ , doneStatus ] ) => doneStatus === false )
		) {
			return visibleBlockItems.filter(
				( item ) => syncFlags.pages[ item.category ] !== false
			);
		}

		if ( ! visibleBlockItems.length && searchTerm !== '' ) {
			return allPagesItems.slice( 0, visibleItems );
		}

		return visibleBlockItems;
	};

	const renderSkeleton = useMemo(() => getSkeleton(), []); // eslint-disable-line

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
				{ noticeSnackbar.show && !! token && (
					<Snackbar
						type={ noticeSnackbar.variantAndType.variant }
						message={ noticeSnackbar.message }
						icon={ <ExclamationTriangleIcon className="w-6 h-6" /> }
						ctaLink={ ast_block_template_vars.get_more_credits_url }
						ctaText="Get More Credits"
						onClose={ handleClickCloseNotice( noticeSnackbar.variantAndType.type ) }
					/>
				) }
				{ /* {
					! hideNotice.buildPageAi && !! token && remaining > 0 && !! businessDetails && ! searchTerm && (
						<Snackbar
							className="pl-6 py-4 pr-4 mx-10 mt-9"
							rounded={ 8 }
							type="info"
							message={ (
								<div className="inline-flex items-center justify-start gap-5">
									<span>You’re just few clicks away to build your entire page with personalized content and images to your website.</span>
									<Button
										className="min-w-fit"
										variant="primary"
										isSmall
										onClick={ () => EventEmitter.emit( 'toggle-onboarding-page-ai' ) }
									>
										Build Entire Page
									</Button>
								</div>
							) }
							icon={ <SparklesIcon className="w-6 h-6" /> }
							onClose={ handleClickCloseNotice( 'buildPageAi' ) }
						/>
					)
				} */ }
				<div className="h-full w-full p-10">
					{ ! visibleBlockItems.length && searchTerm !== '' && (
						<div className="px-4 pb-5">
							<NoSearchResult keyword={ searchTerm } />
							<h6 className="m-0 mt-10 text-heading-text text-xl font-semibold leading-7">
								Other suggested pattern designs
							</h6>
						</div>
					) }
					<Masonry
						columns={ { default: 3, 768: 1, 1024: 3 } }
						className="ast-block-templates-grid"
						id="ast-block-templates-grid-blocks-pages"
					>
						{ getMasonryItems()?.map( ( item, index ) => (
							getRenderItem( item, index )
						) ) }
					</Masonry>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setFilterBlocksPagesBySearchTerm,
			setFilterBlocksPagesByCategory,
			setActiveBlockPalette,
			setHideNotice,
		} = dispatch( STORE_KEY );
		return {
			setFilterBlocksPagesByCategory,
			setFilterBlocksPagesBySearchTerm,
			setActiveBlockPalette,
			setHideNotice,
		};
	} ),
	withSelect( ( select ) => {
		const {
			getAllBlocksPages,
			getAllCategories,
			getFilterBlocksPagesByCategory,
			getFilterBlocksPagesByColor,
			getDefaultPageColorPalette,
			getActivePagePalette,
			getDynamicContent,
			getAIStepData,
			getFilterBlocksPagesBySearchTerm,
			getDynamicContentSyncStatus,
			getDynamicContentSyncFlags,
			getAllPagesCategories,
			getDynamicContentReSyncStatus,
			getRegeneratingContentCategory,
			getAdaptiveMode,
			getHideNotice,
		} = select( STORE_KEY );
		return {
			filterBlocksPagesByCategory: getFilterBlocksPagesByCategory(),
			filterBlocksByColor: getFilterBlocksPagesByColor(),
			allPages: getAllBlocksPages(),
			defaultPalette: getDefaultPageColorPalette(),
			activePalette: getActivePagePalette(),
			dynamicContent: getDynamicContent(),
			selectedImages: getAIStepData().selectedImages,
			allCategories: getAllCategories(),
			searchTerm: getFilterBlocksPagesBySearchTerm(),
			syncStatus: getDynamicContentSyncStatus()?.pages,
			syncFlags: getDynamicContentSyncFlags(),
			allPagesCategories: getAllPagesCategories(),
			reSyncStatus: getDynamicContentReSyncStatus(),
			regeneratingContentCategory: getRegeneratingContentCategory(),
			adaptiveMode: getAdaptiveMode(),
			hideNotice: getHideNotice(),
		};
	} )
)( memo( BlockPagesGrid ) );
