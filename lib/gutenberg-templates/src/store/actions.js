import { select } from '@wordpress/data';
import { objSnakeToCamelCase } from '../utils/helpers';
import * as actionsTypes from './action-types';
import { STORE_KEY } from '.';
import { BLOCKS_AND_SITES_ENDPOINT, SETUP_ENDPOINT } from '../utils/constants';

const actions = {
	setTogglePopup() {
		return {
			type: 'TOGGLE_POPUP',
		};
	},

	setOnboardingAiPopup() {
		return {
			type: 'SET_ONBOARDING_AI_POPUP',
		};
	},

	setFullWidthPagePreview( fullWidthPagePreview ) {
		return {
			type: 'FULL_WIDTH_PAGE_PREVIEW',
			fullWidthPagePreview,
		};
	},

	setFullWidthBlockPreview( fullWidthBlockPreview ) {
		return {
			type: 'FULL_WIDTH_BLOCK_PREVIEW',
			fullWidthBlockPreview,
		};
	},

	*setCurrentScreen( currentScreen ) {
		if ( select( STORE_KEY ).getConnectZipAI() ) {
			yield actions.toggleConnectZipAI();
		}
		return {
			type: 'SET_CURRENT_SCREEN',
			currentScreen,
		};
	},

	setPreviousScreen( previousScreen ) {
		return {
			type: 'SET_PREVIOUS_SCREEN',
			previousScreen,
		};
	},

	setSitePreview( sitePreview ) {
		return {
			type: 'SET_SITE_PREVIEW',
			sitePreview,
		};
	},

	setSearchPagePreview( item ) {
		return {
			type: 'SET_SEARCH_PAGE_PREVIEW',
			item,
		};
	},

	setNotice( notice ) {
		return {
			type: 'SET_NOTICE',
			notice,
		};
	},

	setPagePreview( pagePreview ) {
		return {
			type: 'SET_PAGE_PREVIEW',
			pagePreview,
		};
	},

	setFullWidthPreview( fullWidthPreview ) {
		return {
			type: 'SET_FULL_PREVIEW',
			fullWidthPreview,
		};
	},

	setSearchTerm( searchTerm ) {
		return {
			type: 'SEARCH_TERM',
			searchTerm,
		};
	},

	setFilterBlocksByCategory( filterBlocksByCategory ) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_CATEGORY',
			filterBlocksByCategory,
		};
	},

	setFilterBlocksByColor( filterBlocksByColor ) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_COLOR',
			filterBlocksByColor,
		};
	},

	setDefaultBlockPalette( defaultBlockPalette ) {
		return {
			type: 'SET_DEFAULT_BLOCK_PALETTE',
			defaultBlockPalette,
		};
	},

	setActiveBlockPalette( activeBlockPalette ) {
		return {
			type: 'SET_ACTIVE_BLOCK_PALETTE',
			activeBlockPalette,
		};
	},

	setActiveBlockPaletteSlug( activeBlockPaletteSlug ) {
		return {
			type: 'SET_ACTIVE_BLOCK_PALETTE_SLUG',
			activeBlockPaletteSlug,
		};
	},

	setDefaultPagePalette( defaultPagePalette ) {
		return {
			type: 'SET_DEFAULT_PAGE_PALETTE',
			defaultPagePalette,
		};
	},

	setActivePagePalette( activePagePalette ) {
		return {
			type: 'SET_ACTIVE_PAGE_PALETTE',
			activePagePalette,
		};
	},

	setActivePagePaletteSlug( activePagePaletteSlug ) {
		return {
			type: 'SET_ACTIVE_PAGE_PALETTE_SLUG',
			activePagePaletteSlug,
		};
	},

	setImportItemInfo( importItemInfo ) {
		return {
			type: 'SET_IMPORT_ITEM_INFO',
			importItemInfo,
		};
	},

	setFilterBlocksBySearchTerm( filterBlocksBySearchTerm ) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_SEARCH_TERM',
			filterBlocksBySearchTerm,
		};
	},

	setFilterBlocksPagesByCategory( filterBlocksPagesByCategory ) {
		return {
			type: 'SET_FILTER_BLOCKS_PAGES_BY_CATEGORY',
			filterBlocksPagesByCategory,
		};
	},

	setFilterBlocksPagesByColor( filterBlocksPagesByColor ) {
		return {
			type: 'SET_FILTER_BLOCKS_PAGES_BY_COLOR',
			filterBlocksPagesByColor,
		};
	},

	setFilterBlocksPagesBySearchTerm( filterBlocksPagesBySearchTerm ) {
		return {
			type: 'SET_FILTER_BLOCKS_PAGES_BY_SEARCH_TERM',
			filterBlocksPagesBySearchTerm,
		};
	},

	setFilterSitesByCategory( payload ) {
		return {
			type: actionsTypes.SET_FILTER_SITES_BY_CATEGORY,
			payload,
		};
	},

	*setFilterSitesBySearchTerm( payload ) {
		yield actions.setFilterSitesByCategory( '' );

		return {
			type: actionsTypes.SET_FILTER_SITES_BY_SEARCH_TERM,
			payload,
		};
	},

	setFilterPagesByPageType( filterPagesByPageType ) {
		return {
			type: 'SET_FILTER_PAGES_BY_PAGE_TYPE',
			filterPagesByPageType,
		};
	},

	setFilterPagesBySearchTerm( filterPagesBySearchTerm ) {
		return {
			type: 'SET_FILTER_PAGES_BY_SEARCH_TERM',
			filterPagesBySearchTerm,
		};
	},

	setAllPages( allPages ) {
		return {
			type: 'SET_ALL_PAGES',
			allPages,
		};
	},

	setAllSites( payload ) {
		return {
			type: actionsTypes.SET_ALL_SITES,
			payload,
		};
	},

	setAllPatterns( allPatterns ) {
		return {
			type: 'SET_ALL_PATTERNS',
			allPatterns,
		};
	},

	setCurrentCategory( type, category ) {
		return {
			type: 'SET_CURRENT_CATEGORY',
			payload: { type, category },
		};
	},

	setAllCategories( allCategories ) {
		return {
			type: 'SET_ALL_CATEGORIES',
			allCategories,
		};
	},

	setDynamicContent( dynamicContent ) {
		return {
			type: 'SET_DYNAMIC_CONTENT',
			dynamicContent,
		};
	},

	setFavorites( favorites ) {
		return {
			type: 'SET_FAVORITES',
			favorites,
		};
	},

	setState( state ) {
		return {
			type: 'SET_STATE',
			state,
		};
	},

	setDisplayDynamicPopup( displayDynamicPopup ) {
		return {
			type: 'SET_DISPLAY_DYNAMIC_POPUP',
			displayDynamicPopup,
		};
	},

	toggleOnboardingAIStep( value ) {
		return {
			type: actionsTypes.TOGGLE_ONBOARDING_AI_STEP,
			...( !! value && { payload: value } ),
		};
	},

	setNextAIStep() {
		return {
			type: actionsTypes.SET_NEXT_AI_STEP,
		};
	},

	setPreviousAIStep() {
		return {
			type: actionsTypes.SET_PREVIOUS_AI_STEP,
		};
	},

	setTokenStep( token ) {
		return {
			type: actionsTypes.SET_OPEN_AI_API_KEY_AI_STEP,
			payload: token,
		};
	},

	setWebsiteTypeAIStep( websiteType ) {
		return {
			type: actionsTypes.SET_WEBSITE_TYPE_AI_STEP,
			payload: websiteType,
		};
	},

	setWebsiteNameAIStep( websiteName ) {
		return {
			type: actionsTypes.SET_WEBSITE_NAME_AI_STEP,
			payload: websiteName,
		};
	},

	setWebsiteDetailsAIStep( payload ) {
		return {
			type: actionsTypes.SET_WEBSITE_DETAILS_AI_STEP,
			payload,
		};
	},

	setWebsiteDetailsHistoryAIStep( payload ) {
		return {
			type: actionsTypes.SET_WEBSITE_DETAILS_HISTORY_AI_STEP,
			payload,
		};
	},

	setWebsiteKeywordsAIStep( websiteKeywords ) {
		return {
			type: actionsTypes.SET_WEBSITE_KEYWORDS_AI_STEP,
			payload: websiteKeywords,
		};
	},

	setWebsiteImagesAIStep( websiteImages ) {
		return {
			type: actionsTypes.SET_WEBSITE_IMAGES_AI_STEP,
			payload: websiteImages,
		};
	},

	setWebsiteImagesPreSelectedAIStep( websiteImagesPreSelected ) {
		return {
			type: actionsTypes.SET_WEBSITE_IMAGES_PRE_SELECTED_AI_STEP,
			payload: websiteImagesPreSelected,
		};
	},

	resetKeywordsImagesAIStep() {
		return {
			type: actionsTypes.RESET_KEYWORDS_IMAGES_AI_STEP,
		};
	},

	setWebsiteContactAIStep( websiteContact ) {
		return {
			type: actionsTypes.SET_WEBSITE_CONTACT_AI_STEP,
			payload: websiteContact,
		};
	},

	resetOnboardingAISteps() {
		return {
			type: actionsTypes.RESET_ONBOARDING_AI_STEPS,
		};
	},

	toggleDisableAiContent( value ) {
		return {
			type: actionsTypes.TOGGLE_DISABLE_AI_CONTENT,
			...( !! value && { payload: value } ),
		};
	},

	toggleAdaptiveMode( value ) {
		return {
			type: actionsTypes.TOGGLE_ADAPTIVE_MODE,
			...( !! value && { payload: value } ),
		};
	},

	toggleDisableLivePreview( value ) {
		return {
			type: actionsTypes.TOGGLE_DISABLE_LIVE_PREVIEW,
			...( !! value && { payload: value } ),
		};
	},

	*dynamicContentSyncStart( value ) {
		const message = select( STORE_KEY ).getDynamicContentSyncMessage();
		if ( !! message ) {
			yield actions.setDynamicContentSyncMessage( null );
		}

		return {
			type: actionsTypes.DYNAMIC_CONTENT_SYNC_START,
			payload: value,
		};
	},

	*dynamicContentSyncComplete( value, message = null ) {
		if ( !! message ) {
			yield actions.setDynamicContentSyncMessage( message );
		}

		return {
			type: actionsTypes.DYNAMIC_CONTENT_SYNC_COMPLETE,
			payload: value,
		};
	},

	setDynamicContentSyncMessage( payload ) {
		return {
			type: actionsTypes.DYNAMIC_CONTENT_SYNC_MESSAGE,
			payload,
		};
	},

	dynamicContentReSyncStatus() {
		return {
			type: actionsTypes.DYNAMIC_CONTENT_RESYNC_STATUS,
		};
	},

	dynamicContentFlagSet( key, value ) {
		return {
			type: actionsTypes.DYNAMIC_CONTENT_FLAG_SET,
			payload: { key, value },
		};
	},

	dynamicContentFlagReset( type, flags ) {
		const payload = {
			type,
		};

		if ( flags ) {
			payload.flags = flags;
		}

		return {
			type: actionsTypes.DYNAMIC_CONTENT_FLAGS_RESET,
			payload,
		};
	},

	setAllBlocksData( payload ) {
		return {
			type: 'SET_ALL_BLOCKS',
			payload,
		};
	},

	setRegeneratingContentCategory( regeneratingContentCategory ) {
		return {
			type: 'SET_REGENERATING_CONTENT_CATEGORY',
			regeneratingContentCategory,
		};
	},

	setImportInProgress( value ) {
		return {
			type: actionsTypes.SET_IMPORT_IN_PROGRESS,
			payload: value,
		};
	},

	setShowPagesOnboarding() {
		return {
			type: actionsTypes.SET_SHOW_PAGES_ONBOARDING,
		};
	},

	setCreditsDetails( payload ) {
		return {
			type: actionsTypes.SET_CREDITS_DETAILS,
			payload: objSnakeToCamelCase( payload ),
		};
	},

	toggleOnboardingPageAI() {
		return {
			type: actionsTypes.TOGGLE_ONBOARDING_PAGE_AI,
		};
	},

	setNextOnboardingPagesAIStep() {
		return {
			type: actionsTypes.SET_NEXT_ONBOARDING_PAGE_AI_STEP,
		};
	},

	setPreviousOnboardingPagesAIStep() {
		return {
			type: actionsTypes.SET_PREVIOUS_ONBOARDING_PAGE_AI_STEP,
		};
	},

	setIsNewUserOnboarding() {
		return {
			type: actionsTypes.SET_IS_NEW_USER_ONBOARDING,
		};
	},

	toggleUpdateOnboardingImages() {
		return {
			type: actionsTypes.TOGGLE_UPDATE_ONBOARDING_IMAGES,
		};
	},

	toggleSkipZipAIOnboarding() {
		return {
			type: actionsTypes.TOGGLE_SKIP_ZIP_AI_ONBOARDING,
		};
	},

	updateLicenseStatus( payload ) {
		return {
			type: actionsTypes.UPDATE_LICENSE_STATUS,
			payload,
		};
	},
	setBlockColorPaletteObj( blockColorPaletteObj ) {
		return {
			type: 'SET_BLOCK_COLOR_PALETTE_OBJ',
			blockColorPaletteObj,
		};
	},

	setPageColorPaletteObj( pageColorPaletteObj ) {
		return {
			type: 'SET_PAGE_COLOR_PALETTE_OBJ',
			pageColorPaletteObj,
		};
	},

	toggleConnectZipAI() {
		return {
			type: actionsTypes.TOGGLE_CONNECT_ZIP_AI,
		};
	},

	setHideNotice( payload ) {
		return {
			type: actionsTypes.SET_HIDE_NOTICE,
			payload,
		};
	},

	setLoadingBlocksAndSites( payload ) {
		return {
			type: actionsTypes.SET_LOADING_BLOCKS_AND_SITES,
			payload,
		};
	},

	setIsSyncBusinessDetails( isSyncBusinessDetails ) {
		return {
			type: 'SET_IS_SYNC_BUSINESS_DETAILS',
			isSyncBusinessDetails,
		};
	},

	fetchFromAPI( path ) {
		return {
			type: actionsTypes.FETCH_FROM_API,
			path,
		};
	},

	*initializeBlocksAndSites() {
		const allPatternsAndPages = select( STORE_KEY ).getAllPatternsAndPages();

		if (
			allPatternsAndPages.patterns.length &&
			allPatternsAndPages.pages.length
		) {
			return;
		}

		const loadingBlocksAndSites = select( STORE_KEY ).getLoadingBlocksAndSites();
		if ( loadingBlocksAndSites ) {
			return;
		}

		yield actions.setLoadingBlocksAndSites( true );

		try {
			const setupResponse = yield actions.fetchFromAPI( SETUP_ENDPOINT );
			if ( ! setupResponse?.success ) {
				return;
			}

			const response = yield actions.fetchFromAPI( BLOCKS_AND_SITES_ENDPOINT );
			const {
				allBlocks: blocks,
				allBlocksPages: blocks_pages,
				allSites: sites,
				allCategories,
			} = response;

			yield actions.setAllCategories( allCategories );
			yield actions.setAllSites( sites );
			yield actions.setAllBlocksData( {
				blocks,
				blocks_pages,
			} );
		} catch ( error ) {
			console.error( error );
		} finally {
			return actions.setLoadingBlocksAndSites( false );
		}
	},

	setBusinessTypeListAIStep( businessTypeList ) {
		return {
			type: actionsTypes.SET_WEBSITE_TYPE_LIST_AI_STEP,
			payload: businessTypeList,
		};
	},
};

export default actions;
