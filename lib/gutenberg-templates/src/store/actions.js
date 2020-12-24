const actions = {
	setTogglePopup() {
		return {
			type: 'TOGGLE_POPUP',
		};
	},

	setFullWidthPagePreview(fullWidthPagePreview) {
		return {
			type: 'FULL_WIDTH_PAGE_PREVIEW',
			fullWidthPagePreview,
		};
	},

	setFullWidthBlockPreview(fullWidthBlockPreview) {
		return {
			type: 'FULL_WIDTH_BLOCK_PREVIEW',
			fullWidthBlockPreview,
		};
	},

	setCurrentScreen(currentScreen) {
		return {
			type: 'SET_CURRENT_SCREEN',
			currentScreen,
		};
	},

	setPreviousScreen(previousScreen) {
		return {
			type: 'SET_PREVIOUS_SCREEN',
			previousScreen,
		};
	},

	setSitePreview(sitePreview) {
		return {
			type: 'SET_SITE_PREVIEW',
			sitePreview,
		};
	},

	setSearchPagePreview(item) {
		return {
			type: 'SET_SEARCH_PAGE_PREVIEW',
			item,
		};
	},

	setNotice(notice) {
		return {
			type: 'SET_NOTICE',
			notice,
		};
	},

	setPagePreview(pagePreview) {
		return {
			type: 'SET_PAGE_PREVIEW',
			pagePreview,
		};
	},

	setFullWidthPreview(fullWidthPreview) {
		return {
			type: 'SET_FULL_PREVIEW',
			fullWidthPreview,
		};
	},

	setSearchTerm(searchTerm) {
		return {
			type: 'SEARCH_TERM',
			searchTerm,
		};
	},

	setFilterBlocksByCategory(filterBlocksByCategory) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_CATEGORY',
			filterBlocksByCategory,
		};
	},

	setFilterBlocksByColor(filterBlocksByColor) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_COLOR',
			filterBlocksByColor,
		};
	},

	setImportItemInfo(importItemInfo) {
		return {
			type: 'SET_IMPORT_ITEM_INFO',
			importItemInfo,
		};
	},

	setFilterBlocksBySearchTerm(filterBlocksBySearchTerm) {
		return {
			type: 'SET_FILTER_BLOCKS_BY_SEARCH_TERM',
			filterBlocksBySearchTerm,
		};
	},

	setFilterPagesByPageType(filterPagesByPageType) {
		return {
			type: 'SET_FILTER_PAGES_BY_PAGE_TYPE',
			filterPagesByPageType,
		};
	},

	setFilterPagesBySearchTerm(filterPagesBySearchTerm) {
		return {
			type: 'SET_FILTER_PAGES_BY_SEARCH_TERM',
			filterPagesBySearchTerm,
		};
	},

	setAllPages(allPages) {
		return {
			type: 'SET_ALL_PAGES',
			allPages,
		};
	},

	setImagesLoaded(imagesLoad) {
		return {
			type: 'SET_IMAGES_LOADED',
			imagesLoad,
		};
	},
};

export default actions;
