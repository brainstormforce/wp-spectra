const selectors = {
	getTogglePopup( { togglePopup } ) {
		return togglePopup;
	},

	getAllWireframes( { allWireframes } ) {
		return allWireframes;
	},

	getAllPatternsAndPages( { allPatternsAndPages } ) {
		return allPatternsAndPages;
	},

	getAllPatterns( { allPatterns } ) {
		return allPatterns;
	},

	getAllPatternsCategories( { allPatternsCategories } ) {
		return allPatternsCategories;
	},

	getImporting( { importing } ) {
        return importing;
    },

	getAllPagesCategories( { allPagesCategories } ) {
		return allPagesCategories;
	},

	getDynamicContentSyncFlags( { dynamicContentSyncFlags } ) {
		return dynamicContentSyncFlags;
	},

	getDynamicContentSyncStatus( { dynamicContentSyncStatus } ) {
		return dynamicContentSyncStatus;
	},

	getDynamicContentReSyncStatus( { dynamicContentReSyncStatus } ) {
		return dynamicContentReSyncStatus;
	},

	getAllBlocksPages( { allBlocksPages } ) {
		return allBlocksPages;
	},

	getAllCategories( { allCategories } ) {
		return allCategories;
	},

	getDynamicContent( { dynamicContent } ) {
		return dynamicContent;
	},

	getCurrentCategory( { currentCategory } ) {
		return currentCategory;
	},

	getFavorites( { favorites } ) {
		return favorites;
	},

	getAllBlocks( { allBlocks } ) {
		return allBlocks;
	},

	getAllSites( { allSites } ) {
		// Return sites without filtering - filtering is handled by the component
		// and reducer actions (same as blocks and pages)
		return allSites;
	},

	getCount( { count } ) {
		return count;
	},

	getCurrentScreen( { currentScreen } ) {
		return currentScreen;
	},

	getPreviousScreen( { previousScreen } ) {
		return previousScreen;
	},

	getSearchTerm( { searchTerm } ) {
		return searchTerm;
	},

	getSitePreview( { sitePreview } ) {
		return sitePreview;
	},

	getNotice( { notice } ) {
		return notice;
	},

	getImportItemInfo( { importItemInfo } ) {
		return importItemInfo;
	},

	getPagePreview( { pagePreview } ) {
		return pagePreview;
	},

	getFullWidthPreview( { fullWidthPreview } ) {
		return fullWidthPreview;
	},

	getFilterBlocksByCategory( { filterBlocksByCategory } ) {
		return filterBlocksByCategory;
	},
	getFilterBlocksByColor( { filterBlocksByColor } ) {
		return filterBlocksByColor;
	},
	getDefaultBlockColorPalette( { defaultBlockPalette } ) {
		return defaultBlockPalette;
	},
	getActiveBlockPalette( { activeBlockPalette } ) {
		return activeBlockPalette;
	},
	getActiveBlockPaletteSlug( { activeBlockPaletteSlug } ) {
		return activeBlockPaletteSlug;
	},
	getDefaultPageColorPalette( { defaultPagePalette } ) {
		return defaultPagePalette;
	},
	getActivePagePalette( { activePagePalette } ) {
		return activePagePalette;
	},
	getActivePagePaletteSlug( { activePagePaletteSlug } ) {
		return activePagePaletteSlug;
	},
	getFilterBlocksBySearchTerm( { filterBlocksBySearchTerm } ) {
		return filterBlocksBySearchTerm;
	},
	getFilterBlocksByStatus( { filterBlocksByStatus } ) {
		return filterBlocksByStatus;
	},
	getFilterPagesByPageType( { filterPagesByPageType } ) {
		return filterPagesByPageType;
	},
	getFilterPagesBySearchTerm( { filterPagesBySearchTerm } ) {
		return filterPagesBySearchTerm;
	},

	getFilterBlocksPagesByCategory( { filterBlocksPagesByCategory } ) {
		return filterBlocksPagesByCategory;
	},
	getFilterBlocksPagesByColor( { filterBlocksPagesByColor } ) {
		return filterBlocksPagesByColor;
	},
	getFilterBlocksPagesBySearchTerm( { filterBlocksPagesBySearchTerm } ) {
		return filterBlocksPagesBySearchTerm;
	},
	getFilterPagesByStatus( { filterBlocksPagesByStatus } ) {
		return filterBlocksPagesByStatus;
	},
	getFilterFavoritres( { filterFavoritesBySearchTerm } ) {
		return filterFavoritesBySearchTerm;
	},
	getFullWidthPagePreview( { fullWidthPagePreview } ) {
		return fullWidthPagePreview;
	},
	getFullWidthBlockPreview( { fullWidthBlockPreview } ) {
		return fullWidthBlockPreview;
	},

	getAllPages( { allPages } ) {
		return allPages;
	},

	getBlockSearchInput( { blockSearchInput } ) {
		return blockSearchInput;
	},

	getDisplayDynamicPopup( { displayDynamicPopup } ) {
		return displayDynamicPopup;
	},

	getOnboardingAI( { onboardingAI } ) {
		return onboardingAI;
	},

	getCurrentAIStep( { onboardingAI: { currentStep } } ) {
		return currentStep;
	},

	getAIStepData( { onboardingAI: { stepData } } ) {
		return stepData;
	},

	getDisableAi( { disableAi } ) {
		return disableAi;
	},

	getAdaptiveMode( { adaptiveMode } ) {
		return adaptiveMode;
	},

	getDisablePreview( { disablePreview } ) {
		return disablePreview;
	},
	getRegeneratingContentCategory( { regeneratingContentCategory } ) {
		return regeneratingContentCategory;
	},

	getImportInProgress( { importInProgress } ) {
		return importInProgress;
	},

	getShowPagesOnboarding( { showPagesOnboarding } ) {
		return showPagesOnboarding;
	},

	getCreditsDetails( { credits } ) {
		return credits;
	},

	getOnboardingPageAI( { onboardingPageAI } ) {
		return onboardingPageAI;
	},

	getDynamicContentSyncMessage( { dynamicContentSyncMessage } ) {
		return dynamicContentSyncMessage;
	},

	getAiDesignCopilotStatus( { aiDesignCopilot } ) {
		return aiDesignCopilot;
	},

	getIsPersonalized( { isPersonalized } ) {
		return isPersonalized;
	},

	getAiAssistantStatus( { aiAssistant } ) {
		return aiAssistant;
	},

	getFilterSitesBySearchTerm( { filterSitesBySearchTerm } ) {
		return filterSitesBySearchTerm;
	},

	getFilterSitesByCategory( { filterSitesByCategory } ) {
		return filterSitesByCategory;
	},
	getFilterSitesByStatus( { filterSitesByStatus } ) {
		return filterSitesByStatus;
	},

	getLicenseStatus( { licenseStatus } ) {
		return licenseStatus;
	},
	getBlockColorPaletteObj( { blockColorPaletteObj } ) {
		return blockColorPaletteObj;
	},

	getPageColorPaletteObj( { pageColorPaletteObj } ) {
		return pageColorPaletteObj;
	},

	getHideNotice( { hideNotice } ) {
		return hideNotice;
	},

	getLoadingBlocksAndSites( { loadingBlocksAndSites } ) {
		return loadingBlocksAndSites;
	},
	getIsSyncBusinessDetails( { isSyncBusinessDetails } ) {
		return isSyncBusinessDetails;
	},
	getBackgroundSyncStatus( { backgroundSyncInProgress } ) {
		return backgroundSyncInProgress;
	},

	getLoadingNextStep( { onboardingAI: { loadingNextStep } } ) {
		return loadingNextStep;
	},

	getFilterBySpectraBlocksVersion( { filterBySpectraBlocksVersion } ) {
		return filterBySpectraBlocksVersion;
	},

	getAutoOpenDesignLibrary( { autoOpenDesignLibrary } ) {
		return autoOpenDesignLibrary;
	},
};

export default selectors;
