import { compose, useDebounce } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import {
	memo,
	useEffect,
	useState,
	useMemo,
	useRef,
} from '@wordpress/element';
import SingleBlockWrapper from '../../../reusable/single-block/single-block';
import { getSmartSuggestions } from '../../../../store/utils/filter-blocks';

import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import NoCategoryResult from '../../../reusable/no-category-result/no-category-result';
import Masonry from 'react-layout-masonry';
import { STORE_KEY } from '../../../../store';
import SingleBlockLoadingSkeleton from '../../../reusable/single-block/single-block-loading-skeleton';
import EventBus from '../../../../utils/event-emitter';
import { updateHideNoticeFlag } from '../../../../utils/functions';
import useCredits from '../../../../hooks/use-credits';
import Snackbar from '../../../reusable/snackbar';
import Button from '../../../reusable/button/button';
import Filters from './filters';
import {
	ExclamationTriangleIcon,
	FunnelIcon,
	SparklesIcon,
} from '@heroicons/react/24/outline';
import { __ } from '@wordpress/i18n';
import {
	clearSessionStorage,
	getFromSessionStorage,
	setToSessionStorage,
} from '../../../../utils/helpers';
import HowItWorks from '../../../reusable/snackbar/HowItWorks';
import Drawer from '../../../reusable/drawer/drawer';

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
	disableAi,
	isSyncBusinessDetails,
	toggleOnboardingAIStep,
	setFullPagePreview,
	filterBySpectraBlocksVersion,
} ) => {
	const [ filtersOpen, setFiltersOpen ] = useState( false );

	const items = allPages;
	const videoIntroURL = 'https://youtu.be/Zpkgw9USlEc';
	const {
		stepsData: { businessContact, businessDetails, token },
		allPatternsAndPages,
		loadingBlocksAndSites,
	} = useSelect( ( select ) => {
		const {
			getAIStepData,
			getAllPatternsAndPages,
			getLoadingBlocksAndSites,
		} = select( STORE_KEY );
		return {
			stepsData: getAIStepData(),
			allPatternsAndPages: getAllPatternsAndPages(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
		};
	} );

	const scrollingContainer = useRef( null );
	const { currentBalanceStatus, remaining } = useCredits();
	const noticeSnackbar = {
		show:
			( currentBalanceStatus.warning && ! hideNotice.creditWarning ) ||
			( currentBalanceStatus.danger && ! hideNotice.creditDanger ) ||
			false,
		variantAndType:
			( currentBalanceStatus.warning && {
				variant: 'warning',
				type: 'creditWarning',
			} ) ||
			( currentBalanceStatus.danger && {
				variant: 'error',
				type: 'creditDanger',
			} ),
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
			clearSessionStorage( 'ast-pages-visible-items' );
			clearSessionStorage( 'ast-pages-scroll-position' );
		} );
	}, [] );

	useEffect( () => {
		// Restore the scroll position from session storage.
		if ( ! scrollingContainer.current ) {
			return;
		}
		scrollingContainer.current.scrollTop =
			getFromSessionStorage( 'ast-pages-scroll-position' ) || 0;
	}, [] );

	const [ visibleItems, setVisibleItems ] = useState(
		getFromSessionStorage( 'ast-pages-visible-items' ) || 10
	); // Number of visible items
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
		const currentItems =
			searchTerm && ! items.length ? allPatternsAndPages.pages : items;
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
				container.removeEventListener(
					'scroll',
					handleScrollDebounced
				);
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
			Object.values( syncFlags.pages ).every(
				( flag ) => flag === false
			) &&
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

	const isPersonalizedNoticeShow = () => {
		if (
			! hideNotice.personalizeAi &&
			token &&
			( ! businessDetails ||
				( businessDetails && 'yes' === isSyncBusinessDetails ) ) &&
			! disableAi &&
			! searchTerm &&
			! currentBalanceStatus.warning &&
			! currentBalanceStatus.danger
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
			? getSmartSuggestions(
					searchTerm,
					allPatternsAndPages.pages,
					'page',
					filterBySpectraBlocksVersion,
					allPagesCategories
			  )
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
			syncFlagsEntries.some(
				( [ , doneStatus ] ) => doneStatus === false
			)
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

	const renderSkeleton = useMemo( () => getSkeleton(), [] ); // eslint-disable-line

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
				onClickBlock={ setFullPagePreview }
			/>
		);
	};

	return (
		<div className="relative ast-block-templates-grid-blocks active h-full">
			<Button
				className="absolute right-4 bottom-8 z-[9999] py-2 px-3.5 bg-accent-spectra shadow-xl sm:hidden"
				onClick={ () => setFiltersOpen( true ) }
			>
				<FunnelIcon className="size-5 text-white" />
			</Button>
			<Drawer
				open={ filtersOpen }
				onClose={ () => setFiltersOpen( false ) }
				className="sm:hidden"
				children={
					<Filters
						className="block sm:hidden h-full !w-full"
						style={ { maxWidth: '100%' } }
					/>
				}
			/>
			<Filters />
			<div
				onScroll={ ( event ) => {
					debouncedHandleScroll();
					setToSessionStorage(
						'ast-pages-scroll-position',
						event.target.scrollTop
					);
					setToSessionStorage(
						'ast-pages-visible-items',
						visibleItems
					);
				} }
				className="ast-scrolling-container w-full md:ml-auto h-full overflow-auto md:max-w-[calc(100%_-_246px)]"
				ref={ scrollingContainer }
			>
				{ noticeSnackbar.show && !! token && (
					<Snackbar
						type={ noticeSnackbar.variantAndType.variant }
						message={ noticeSnackbar.message }
						icon={ <ExclamationTriangleIcon className="w-6 h-6" /> }
						ctaLink={ ast_block_template_vars.get_more_credits_url }
						ctaText={ __(
							'Buy AI Credits',
							'ast-block-templates'
						) }
						onClose={ handleClickCloseNotice(
							noticeSnackbar.variantAndType.type
						) }
					/>
				) }
				{ isPersonalizedNoticeShow() && (
					<Snackbar
						className="pl-6 py-4 pr-4 mx-10 mt-9 md:max-lg:mx-5 hidden sm:block"
						rounded={ 8 }
						type="info"
						message={
							<div className="grid grid-cols-4 grid-rows-2 2xl:grid-rows-1 items-center justify-start gap-2 max-2xl:items-start">
								<span className="col-span-12 2xl:col-span-4 ">
									{ __(
										'Did you know, you can personalize this design library with content and images tailored to your website project?',
										'ast-block-templates'
									) }
								</span>
								<div className="col-span-12 2xl:col-start-5 flex flex-col md:flex-row gap-5 items-baseline md:items-center">
									<Button
										id="ast-block-template-setup-ai-btn"
										className="min-w-fit"
										variant="primary"
										isSmall
										onClick={ () => {
											const closeNoticeHandler =
												handleClickCloseNotice(
													'personalizeAi'
												);
											closeNoticeHandler();
											toggleOnboardingAIStep( true );
										} }
									>
										Personalize Library with AI
									</Button>
									{ videoIntroURL && (
										<HowItWorks
											className="flex 2xl:hidden"
											videoIntroURL={ videoIntroURL }
										/>
									) }
								</div>
							</div>
						}
						icon={ <SparklesIcon className="w-6 h-6" /> }
						onClose={ handleClickCloseNotice( 'personalizeAi' ) }
						isClose={ false }
						hasVideoIntro={ true }
						videoIntroURL={ videoIntroURL }
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
				<div className="h-full w-full p-10 md:max-lg:p-6">
					{ ! visibleBlockItems.length && searchTerm !== '' && (
						<div className="pb-4">
							<NoSearchResult keyword={ searchTerm } />
							<h6 className="m-0 mt-10 text-heading-text text-xl font-semibold leading-7">
								Other suggested pattern designs
							</h6>
						</div>
					) }
					{ ! shouldShowSkeleton() && visibleBlockItems.length === 0 && searchTerm === '' && (
						<div className="text-center text-base text-body-text py-10">
							<NoCategoryResult keyword={ 'category' } />
						</div>
					) }
					<Masonry
						columns={ { 640: 1, 768: 2, 1024: 3 } }
						gap={ 32 }
						className="ast-block-templates-grid"
						id="ast-block-templates-grid-blocks-pages"
					>
						{ getMasonryItems()?.map( ( item, index ) =>
							getRenderItem( item, index )
						) }
					</Masonry>
					<div className="h-10 w-full mb-10" />
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
			toggleOnboardingAIStep,
			setPagePreview,
			setCurrentScreen,
		} = dispatch( STORE_KEY );
		return {
			setFilterBlocksPagesByCategory,
			setFilterBlocksPagesBySearchTerm,
			setActiveBlockPalette,
			setHideNotice,
			toggleOnboardingAIStep,
			setFullPagePreview( item ) {
				setPagePreview( item );
				setCurrentScreen( 'single-block-page-full-preview' );
			},
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
			getDisableAi,
			getIsSyncBusinessDetails,
			getFilterBySpectraBlocksVersion,
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
			disableAi: getDisableAi(),
			isSyncBusinessDetails: getIsSyncBusinessDetails(),
			filterBySpectraBlocksVersion: getFilterBySpectraBlocksVersion(),
		};
	} )
)( memo( BlockPagesGrid ) );
