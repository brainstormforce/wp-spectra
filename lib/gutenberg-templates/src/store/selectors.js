const selectors = {
	getTogglePopup({ togglePopup }) {
		return togglePopup;
	},

	getAllBlocks({ allBlocks }) {
		return allBlocks;
	},

	getAllSites({ allSites }) {
		return allSites;
	},

	getCount({ count }) {
		return count;
	},

	getCurrentScreen({ currentScreen }) {
		return currentScreen;
	},

	getPreviousScreen({ previousScreen }) {
		return previousScreen;
	},

	getSearchTerm({ searchTerm }) {
		return searchTerm;
	},

	getSitePreview({ sitePreview }) {
		return sitePreview;
	},

	getNotice({ notice }) {
		return notice;
	},

	getImportItemInfo({ importItemInfo }) {
		return importItemInfo;
	},

	getPagePreview({ pagePreview }) {
		return pagePreview;
	},

	getFullWidthPreview({ fullWidthPreview }) {
		return fullWidthPreview;
	},

	getFilterBlocksByCategory({ filterBlocksByCategory }) {
		return filterBlocksByCategory;
	},
	getFilterBlocksByColor({ filterBlocksByColor }) {
		return filterBlocksByColor;
	},
	getFilterBlocksBySearchTerm({ filterBlocksBySearchTerm }) {
		return filterBlocksBySearchTerm;
	},
	getFilterPagesByPageType({ filterPagesByPageType }) {
		return filterPagesByPageType;
	},
	getFilterPagesBySearchTerm({ filterPagesBySearchTerm }) {
		return filterPagesBySearchTerm;
	},

	getFullWidthPagePreview({ fullWidthPagePreview }) {
		return fullWidthPagePreview;
	},
	getFullWidthBlockPreview({ fullWidthBlockPreview }) {
		return fullWidthBlockPreview;
	},

	getAllPages({ allPages }) {
		return allPages;
	},

	getBlockSearchInput({ blockSearchInput }) {
		return blockSearchInput;
	},

	setImagesLoaded({ imagesLoad }) {
		return imagesLoad;
	},
};

export default selectors;
