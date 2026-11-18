import { compose, useDebounce } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import {
	memo,
	useEffect,
	useState,
	useMemo,
} from '@wordpress/element';
import SingleBlockWrapper from '../../../reusable/single-block/single-block';
import Masonry from 'react-layout-masonry';
import { STORE_KEY } from '../../../../store';
import SingleBlockLoadingSkeleton from '../../../reusable/single-block/single-block-loading-skeleton';
import EventBus from '../../../../utils/event-emitter';
import Snackbar from '../../../reusable/snackbar';
import { __ } from '@wordpress/i18n';
import SearchBox from '../../../reusable/search-box/search-box';
import Dropdown from '../../../reusable/dropdown/dropdown';
import { ChevronDownIcon, HeartIcon } from '@heroicons/react/24/outline';
import SingleSite from '../all-sites-grid/all-sites/single-site';

const SECTIONS = {
	all: {
		value: 'all',
		label: 'All',
	},
	Patterns: {
		value: 'pattern',
		label: 'Pattern',
	},
	Pages: {
		value: 'pages',
		label: 'Pages',
	},
	Kits: {
		value: 'kits',
        label: 'Kits',
	},
};

const AllFavorites = ( {
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
} ) => {
	const items = allPatterns;

	const {
		stepsData: { businessContact },
		allPatternsAndPages,
		loadingBlocksAndSites,
		favorites,
		allSites,
		licenseStatus,
	} = useSelect( ( select ) => {
		const { getAIStepData, getAllPatternsAndPages, getAllSites, getLoadingBlocksAndSites, getFavorites, getLicenseStatus } = select( STORE_KEY );
		return {
			stepsData: getAIStepData(),
			allPatternsAndPages: getAllPatternsAndPages(),
			allSites: getAllSites(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
			favorites: getFavorites(),
			licenseStatus: getLicenseStatus(),
		};
	} );
	//Merging the favorites from blocks and pages
	const favoriteBlockAndPage = [
		...( Array.isArray( favorites?.block ) ? favorites?.block : [] ),
		...( Array.isArray( favorites?.page ) ? favorites?.page : [] ),
		...( Array.isArray( favorites?.site ) ? favorites?.site : [] ),
	  ];
	const itemsSite = allSites.filter( ( item ) =>
	favoriteBlockAndPage.includes( parseInt( +item.ID ) )
	);
	const itemsPattern = allPatternsAndPages.patterns.filter( ( item ) =>
	favoriteBlockAndPage.includes( parseInt( +item.ID ) )
	);
	const itemsPages = allPatternsAndPages.pages.filter( ( item ) =>
    favoriteBlockAndPage.includes( parseInt( +item.ID ) )
    );
	const favoriteItems = [ ...itemsPattern, ...itemsPages, ...itemsSite ];

	// Standalone Spectra Blocks (v3) does not ship page patterns, so hide the
	// "Pages" filter for it. Legacy v3 (UAGB) patterns keep the option.
	const isStandaloneSpectraBlocks =
		'active' === ast_block_template_vars?.spectra_blocks_status ||
		'active' === ast_block_template_vars?.spectra_blocks_pro_status;

	const sections = Object.values( SECTIONS ).filter(
		( section ) =>
			! ( isStandaloneSpectraBlocks && 'pages' === section.value )
	);

	const [ orientation, setOrientation ] = useState( SECTIONS.all );

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
		const currentItems = searchTerm && ! items.length ? favoriteItems : items;

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

	const getFilteredFavorites = () => {
		let filtered = [ ...favoriteItems ];

		if ( orientation && orientation.value !== 'all' ) {
		  filtered = filtered.filter( ( item ) => {
			switch ( orientation.value ) {
			  case 'pattern':
				return itemsPattern.includes( item );
			  case 'pages':
				return itemsPages.includes( item );
			  case 'kits':
				return itemsSite.includes( item );
			  default:
				return true;
			}
		  } );
		}

		if ( searchTerm ) {
		  filtered = filtered.filter( ( item ) =>
			item.title.toLowerCase().includes( searchTerm.toLowerCase() )
		  );
		}

		return filtered;
	  };

	const filteredFavorites = getFilteredFavorites();

	const getMasonryItems = () => {
		const showSkeleton = shouldShowSkeleton();
		if ( showSkeleton ) {
			const skeletonCount = getSkeletonsCount();
			return Array( skeletonCount > 10 ? 10 : skeletonCount ).fill( 1 );
		}
		return filteredFavorites.slice( 0, visibleItems );
	};
	const renderSkeleton = useMemo( () => getSkeleton(), [] );

	const getRenderItem = ( item, index ) => {
		const showSkeleton = shouldShowSkeleton();

		if ( showSkeleton ) {
			return renderSkeleton();
		}

		if ( item.type === 'block' || item.type === 'page' ) {
			// Check if pattern should be locked (premium without license)
			const isPremiumPattern = item?.[ 'astra-sites-type' ] === 'premium';
			const hasInactiveLicense = licenseStatus === 'inactive' || licenseStatus === '' || ! licenseStatus;
			const isAccessStatus = isPremiumPattern && hasInactiveLicense;

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
					isLocked={ isAccessStatus }
				/>
			);
		}

		return (
			<SingleSite key={ item.ID } item={ item }
			/>
		);
	};
	const handleSectionChange = ( orientation_value ) => () => {
		setOrientation( orientation_value );
	};

	return (
		<div
			id="ast-template-kits-list"
			onScroll={ debouncedHandleScroll }
			className="h-full overflow-y-auto px-10 pb-10 pt-6"
		>
			<div className="flex items-center justify-between mb-6">
				<p className="m-0 text-xl font-semibold sm:inline-block hidden min-w-32">
					{ __( 'My Favorites', 'ast-block-templates' ) }
				</p>

				{ /* Search and DropDown filer */ }
				<div className="flex flex-col justify-end sm:flex-row items-center px-0 gap-2 sm:gap-4 lg:gap-6 w-full">
					<div className="w-full sm:w-52 border border-solid border-border-primary rounded-md py-2.5 px-2">
						<Dropdown
							placement="right"
							trigger={
								<div className="flex items-center gap-2 min-w-32 cursor-pointer">
									<span className="font-normal text-base leading-[150%]">
										{ '' }
										{ orientation.label }
									</span>
									<ChevronDownIcon className="w-5 h-5 text-app-inactive-icon ml-auto" />
								</div>
							}
							align="top"
							// width="48"
							contentClassName="border border-solid border-border-primary p-4 bg-white [&>:first-child]:pb-3 [&>:last-child]:pt-3 [&>:not(:first-child,:last-child)]:py-3 !divide-y !divide-border-primary divide-solid divide-x-0"
						>
							{ sections.map(
								( orientationItem, index ) => (
									<Dropdown.Item
										as="div"
										key={ index }
										className="only:!p-0"
									>
										<button
											type="button"
											className="w-full flex items-center gap-2 px-1.5 py-1 text-sm font-normal leading-5 text-body-text hover:bg-background-secondary transition duration-150 ease-in-out space-x-2 rounded bg-white border-none cursor-pointer"
											onClick={ handleSectionChange(
												orientationItem
											) }
										>
											{ orientationItem.label }
										</button>
									</Dropdown.Item>
								)
							) }
						</Dropdown>
					</div>
					{ /* Searchbox */ }
					<SearchBox
						className="!text-base w-full md:w-60"
						placeholder="Search.."
					/>
				</div>
			</div>
			<div className="ast-scrolling-container w-full max-w-full ml-auto h-full ">
				{ ! shouldShowSkeleton() && filteredFavorites.length === 0 && (
					<>
						{ searchTerm ? (
							<div className="mx-auto mt-10 md:mt-16 lg:mt-24 xl:mt-32 space-y-6 text-center">
								<div className="space-y-2.5">
									<p className="m-0 text-lg font-semibold text-heading-text">
										{ __(
											'Sorry No Favorites Found 😕',
											'ast-block-templates'
										) }
									</p>
								</div>
							</div>
						) : (
							<Snackbar
								className="p-10 !pl-8 !rounded-lg md:max-lg:mx-5 bg-background-secondary flex items-center"
								rounded={ 4 }
								type="info"
								message={
									<div className="flex flex-col md:flex-row items-start gap-4 w-full">
										<div className="flex-shrink-0 pt-1">
											<HeartIcon className="w-10 h-10 text-accent-spectra" />
										</div>
										<div className="flex flex-col items-start leading-tight">
											<span className="text-xl font-bold text-heading-text mb-1">
												{ __(
													'No favorites added.',
													'ast-block-templates'
												) }
											</span>
											<span className="text-base font-normal text-body-text leading-6">
												{ __(
													'Your favorite templates will be displayed here. You do not have any favorites yet. Click the heart icon and start adding them!',
													'ast-block-templates'
												) }
											</span>
										</div>
									</div>
								}
								isClose={ false }
							/>
						) }
					</>
				) }
				<div className="h-full w-full py-4 md:py-10 md:max-lg:p-6">
					<Masonry
						columns={ { 220: 1, 640: 2, 1024: 3 } }
						gap={ 32 }
						className="ast-block-templates-grid"
						id="ast-block-templates-grid-blocks"
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
			getFilterFavoritres,
			getDynamicContentSyncStatus,
			getDynamicContentSyncFlags,
			getAllPatternsCategories,
			getDynamicContentReSyncStatus,
			getRegeneratingContentCategory,
			getAdaptiveMode,
			getHideNotice,
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
			searchTerm: getFilterFavoritres(),
			syncStatus: getDynamicContentSyncStatus()?.patterns,
			syncFlags: getDynamicContentSyncFlags(),
			allPatternsCategories: getAllPatternsCategories(),
			reSyncStatus: getDynamicContentReSyncStatus(),
			regeneratingContentCategory: getRegeneratingContentCategory(),
			adaptiveMode: getAdaptiveMode(),
			hideNotice: getHideNotice(),
			disableAi: getDisableAi(),
			isSyncBusinessDetails: getIsSyncBusinessDetails(),
		};
	} )
)( memo( AllFavorites ) );
