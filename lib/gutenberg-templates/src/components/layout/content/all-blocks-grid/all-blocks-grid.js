import { compose, useDebounce } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import { memo, useEffect, useState, useMemo } from '@wordpress/element';
import SingleBlockWrapper from '../../../reusable/single-block/single-block';
import Filters from './filters';
import Masonry from 'react-layout-masonry';
import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import NoCategoryResult from '../../../reusable/no-category-result/no-category-result';
import { STORE_KEY } from '../../../../store';
import { getSmartSuggestions } from '../../../../store/utils/filter-blocks';
import SingleBlockLoadingSkeleton from '../../../reusable/single-block/single-block-loading-skeleton';
import { updateHideNoticeFlag } from '../../../../utils/functions';
import {
	clearSessionStorage,
	getFromSessionStorage,
} from '../../../../utils/helpers';
import EventBus from '../../../../utils/event-emitter';
import useCredits from '../../../../hooks/use-credits';
import Snackbar from '../../../reusable/snackbar';
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	FunnelIcon,
	SparklesIcon,
} from '@heroicons/react/24/outline';
import Button from '../../../reusable/button/button';
import { __ } from '@wordpress/i18n';
import HowItWorks from '../../../reusable/snackbar/HowItWorks';
import Drawer from '../../../reusable/drawer/drawer';

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
	filterBySpectraBlocksVersion,
} ) => {
	const [ filtersOpen, setFiltersOpen ] = useState( false );

	const items = allPatterns;
	const videoIntroURL = 'https://youtu.be/Zpkgw9USlEc';
	const {
		stepsData: { businessContact, businessDetails, token },
		allPatternsAndPages,
		loadingBlocksAndSites,
		licenseStatus,
	} = useSelect( ( select ) => {
		const {
			getAIStepData,
			getAllPatternsAndPages,
			getLoadingBlocksAndSites,
			getLicenseStatus,
		} = select( STORE_KEY );
		return {
			stepsData: getAIStepData(),
			allPatternsAndPages: getAllPatternsAndPages(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
			licenseStatus: getLicenseStatus(),
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
			( !! freeAiContentNotice &&
				currentBalanceStatus.warning &&
				currentBalanceStatus.danger ) ||
			( currentBalanceStatus.warning && ! hideNotice.creditWarning ) ||
			( currentBalanceStatus.danger && ! hideNotice.creditDanger ) ||
			false,
		variantAndType:
			( !! freeAiContentNotice && {
				variant: 'success',
				type: 'freeAiContent',
			} ) ||
			( currentBalanceStatus.warning && {
				variant: 'warning',
				type: 'creditWarning',
			} ) ||
			( currentBalanceStatus.danger && {
				variant: 'error',
				type: 'creditDanger',
			} ),
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
		const currentItems =
			searchTerm && ! items.length ? allPatternsAndPages.patterns : items;

		if (
			window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500 &&
			// Adjust the threshold
			currentItems.length > visibleItems
		) {
			setVisibleItems( ( prevVisibleItems ) => prevVisibleItems + 10 ); // Increase the number of visible items
		}
	}; // eslint-disable-line

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
			const catCount = allPatternsCategories.reduce(
				( acc, category ) => {
					acc += category.count;
					return null;
				},
				0
			);

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
			Object.values( syncFlags.patterns ).every(
				( flag ) => flag === false
			) &&
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
			? getSmartSuggestions(
					searchTerm,
					allPatternsAndPages.patterns,
					'block',
					filterBySpectraBlocksVersion,
					allPatternsCategories
			  )
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
			syncFlagsEntries.some(
				( [ , doneStatus ] ) => doneStatus === false
			)
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
				adaptiveMode={ adaptiveMode }
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
				onScroll={ debouncedHandleScroll }
				className="ast-scrolling-container w-full md:ml-auto h-full overflow-auto md:max-w-[calc(100%_-_246px)]"
			>
				{ noticeSnackbar.show && token && (
					<Snackbar
						type={ noticeSnackbar.variantAndType.variant }
						message={ noticeSnackbar.message }
						icon={
							'success' ===
							noticeSnackbar.variantAndType.variant ? (
								<CheckCircleIcon className="w-6 h-6" />
							) : (
								<ExclamationTriangleIcon className="w-6 h-6" />
							)
						}
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
				{ ! hideNotice.personalizeAi &&
					token &&
					( ! businessDetails ||
						( businessDetails &&
							'yes' === isSyncBusinessDetails ) ) &&
					! disableAi &&
					! searchTerm &&
					! currentBalanceStatus.warning &&
					! currentBalanceStatus.danger && (
						<Snackbar
							className="pl-6 py-4 !pr-0 mx-10 mt-9 md:max-lg:mx-5 hidden sm:block"
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
							onClose={ handleClickCloseNotice(
								'personalizeAi'
							) }
							isClose={ false }
							hasVideoIntro={ true }
							videoIntroURL={ videoIntroURL }
						/>
					) }
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
			getFilterBlocksBySearchTerm,
			getDynamicContentSyncStatus,
			getDynamicContentSyncFlags,
			getAllPatternsCategories,
			getDynamicContentReSyncStatus,
			getRegeneratingContentCategory,
			getAdaptiveMode,
			getHideNotice,
			getDisableAi,
			getIsSyncBusinessDetails,
			getFilterBySpectraBlocksVersion,
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
			disableAi: getDisableAi(),
			isSyncBusinessDetails: getIsSyncBusinessDetails(),
			filterBySpectraBlocksVersion: getFilterBySpectraBlocksVersion(),
		};
	} )
)( memo( BlocksGrid ) );
