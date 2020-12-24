/** global wp, GutenbergTemplatesVars; */
import { filterBlocks } from './utils/filter-blocks';
import { filterPages } from './utils/filter-pages';

const initialState = {
	// Popup.
	togglePopup: false,

	// Sites, Pages, and Blocks Data.
	allBlocks: GutenbergTemplatesVars.allBlocks,
	allSites: GutenbergTemplatesVars.allSites,
	allPages: [],

	// Screen.
	currentScreen: 'all-sites-grid',
	previousScreen: '',

	// Filter blocks by:
	filterBlocksByCategory: '',
	filterBlocksByColor: '',
	filterBlocksBySearchTerm: '',

	// Filter pages by:
	filterPagesByPageType: '',
	filterPagesBySearchTerm: '',

	// Preview.
	pagePreview: {},
	sitePreview: {},
	fullWidthPagePreview: {},
	fullWidthBlockPreview: {},

	// Notice.
	notice: {},

	// Import Item Info.
	importItemInfo: {},

	// Images Loaded
	imagesLoad: false,
};

const reducer = (state = initialState, action) => {
	if (action.type === 'FULL_WIDTH_PAGE_PREVIEW') {
		return { ...state, fullWidthPagePreview: action.fullWidthPagePreview };
	}

	if (action.type === 'FULL_WIDTH_BLOCK_PREVIEW') {
		return {
			...state,
			fullWidthBlockPreview: action.fullWidthBlockPreview,
		};
	}

	if (action.type === 'SET_IMPORT_ITEM_INFO') {
		return {
			...state,
			importItemInfo: action.importItemInfo,
		};
	}

	if (action.type === 'SET_NOTICE') {
		return {
			...state,
			notice: action.notice,
		};
	}

	if (action.type === 'SET_SEARCH_PAGE_PREVIEW') {
		let siteData = [];
		let siteID = action.item['site-ID'] || '';
		if (siteID) {
			siteData = state.allSites.filter((site) => siteID === site.ID);
			if (siteData) {
				siteData = siteData[0];
			}
		}

		return {
			...state,
			sitePreview: siteData,
			pagePreview: action.item,
		};
	}

	if (action.type === 'SET_CURRENT_SCREEN') {
		let previousScreen =
			'all-sites-grid' === action.currentScreen ||
			'all-blocks-grid' === action.currentScree
				? ''
				: state.currentScreen;
		return {
			...state,
			currentScreen: action.currentScreen,
			previousScreen: previousScreen,
		};
	}

	if (action.type === 'SET_PREVIOUS_SCREEN') {
		return { ...state, previousScreen: action.previousScreen };
	}

	if (action.type === 'TOGGLE_POPUP') {
		return {
			...initialState,
			togglePopup: !state.togglePopup,
		};
	}

	if (action.type === 'SET_SITE_PREVIEW') {
		return { ...state, sitePreview: action.sitePreview };
	}

	if (action.type === 'SET_PAGE_PREVIEW') {
		return { ...state, pagePreview: action.pagePreview };
	}

	if (action.type === 'SET_FULL_PREVIEW') {
		return { ...state, fullWidthPreview: action.fullWidthPreview };
	}

	if (action.type === 'SET_FILTER_BLOCKS_BY_CATEGORY') {
		return {
			...state,
			allBlocks: filterBlocks(
				state.filterBlocksBySearchTerm,
				state.filterBlocksByColor,
				action.filterBlocksByCategory,
				state.filterBlocksBySearchTerm
			),
			filterBlocksByCategory: action.filterBlocksByCategory,
		};
	}

	if (action.type === 'SET_FILTER_BLOCKS_BY_COLOR') {
		return {
			...state,
			allBlocks: filterBlocks(
				state.filterBlocksBySearchTerm,
				action.filterBlocksByColor,
				state.filterBlocksByCategory,
				state.filterBlocksBySearchTerm
			),
			filterBlocksByColor: action.filterBlocksByColor,
		};
	}

	if (action.type === 'SET_FILTER_BLOCKS_BY_SEARCH_TERM') {
		return {
			...state,
			allBlocks: filterBlocks(
				action.filterBlocksBySearchTerm,
				state.filterBlocksByColor,
				state.filterBlocksByCategory,
				action.filterBlocksBySearchTerm
			),
			filterBlocksBySearchTerm: action.filterBlocksBySearchTerm,
		};
	}

	if (action.type === 'SET_FILTER_PAGES_BY_SEARCH_TERM') {
		if (action.filterPagesBySearchTerm.length) {
			return {
				...state,
				allPages: filterPages(
					action.filterPagesBySearchTerm
					// state.filterPagesByColor,
					// action.filterPagesByCategory,
					// state.filterPagesBySearchTerm
				),
				filterPagesBySearchTerm: action.filterPagesBySearchTerm,
			};
		}

		return {
			...state,
			allPages: [],
			filterPagesBySearchTerm: action.filterPagesBySearchTerm,
		};
	}

	if (action.type === 'SET_ALL_PAGES') {
		return {
			...state,
			allPages: action.allPages,
		};
	}

	if (action.type === 'SET_IMAGES_LOADED') {
		return {
			...state,
			imagesLoad: action.imagesLoad,
		};
	}

	return state;
};

export default reducer;
