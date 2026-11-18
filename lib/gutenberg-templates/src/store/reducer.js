/** global wp, ast_block_template_vars; */
import {
	filterPatterns,
	filterWireframes,
	filterBlocksPages,
	filterBlocks,
} from './utils/filter-blocks';
import { filterPages } from './utils/filter-pages';
import {
	getWireframes,
	getDefaultBlockPalette,
	getDefaultPagePalette,
} from '../utils/functions';
import * as actionTypes from './action-types';
import {
	getFromSessionStorage,
	getPatternsWithCategories,
	getPagesWithCategories,
	updateSequenceByCategory,
	objSnakeToCamelCase,
} from '../utils/helpers';
import { SESSION_STORAGE_KEY } from '../utils/constants';

const aiStepValues = ast_block_template_vars?.business_details;

const { selectedImages } = getFromSessionStorage( SESSION_STORAGE_KEY, {} );

// Helper to get saved preference from localStorage with fallback
const getLocalStorageItem = ( key, fallback ) => {
	try {
		return localStorage.getItem( key ) || fallback;
	} catch ( error ) {
		return fallback;
	}
};

// Get saved version and status preferences from localStorage
const showVersionToggle = ast_block_template_vars?.show_version_toggle || false;

// Version preference logic — the library defaults to v3 (Spectra Blocks) everywhere:
// 1. If toggle is NOT shown → always v3.
// 2. If toggle IS shown (Spectra Legacy active) → default to 'v3'; a stored 'v2'
//    is not persisted across reloads (coerced back to 'v3'), matching the
//    established v3-default behaviour. Switching to v2 lasts for the session only.
let savedVersionPreference;
if ( ! showVersionToggle ) {
	savedVersionPreference = 'v3';
} else {
	const storedPreference = getLocalStorageItem( 'ast_block_templates_version_preference', 'v3' );
	// Only allow 'v3' or 'all' from localStorage, never 'v2' as the default.
	savedVersionPreference = storedPreference === 'v2' ? 'v3' : storedPreference;
}

// Load type-specific status preferences
// This ensures blocks and kits/sites have independent status filters
const savedBlocksStatusPreference = getLocalStorageItem( 'ast_block_templates_status_preference_blocks', 'all' );
const savedSitesStatusPreference = getLocalStorageItem( 'ast_block_templates_status_preference_sites', 'all' );
// Pages should NEVER be filtered by status (always 'all'), as we don't provide a premium filter UI for pages
const savedPagesStatusPreference = 'all';

const initialState = {
	// Popup.
	togglePopup: false,
	loadingBlocksAndSites: false,

	//importing block
	importing: false,

	// Sites, Pages, and Blocks Data.
	allPatternsAndPages: {
		patterns: [],
		pages: [],
	},
	allBlocks: [],
	allPatterns: [],
	allFavorites: [],
	allPatternsCategories: [],
	allBlocksPages: [],
	allPagesCategories: [],
	allWireframes: getWireframes(),
	allSites: [],
	allPages: [],
	dynamicContent: ast_block_template_vars.dynamic_content,
	allCategories: [],
	favorites: ast_block_template_vars.favorites,
	dynamicContentSyncStatus: {
		pages: false,
		patterns: false,
	},
	dynamicContentReSyncStatus: false,
	dynamicContentSyncMessage: null,
	dynamicContentSyncFlags: {
		patterns: {},
		pages: {},
	},
	currentCategory: {
		pages: {},
		patterns: {},
	},

	// Pages content generation onboarding flag.
	showPagesOnboarding: ast_block_template_vars.show_pages_onboarding,

	// Credits.
	credits: {
		flatRates: objSnakeToCamelCase( ast_block_template_vars.flat_rates ),
		...ast_block_template_vars.spec_credit_details,
	},

	// Screen.
	currentScreen: 'all-blocks-grid',
	previousScreen: '',

	// Filter sites by:
	filterSitesByCategory: '',
	filterSitesBySearchTerm: '',
	filterSitesByStatus: savedSitesStatusPreference,

	// Filter blocks by:
	filterBlocksByCategory: '',
	filterBlocksByColor: '',
	filterBlocksBySearchTerm: '',
	filterBlocksByStatus: savedBlocksStatusPreference,

	// Filter blocks pages by:
	filterBlocksPagesByCategory: '',
	filterBlocksPagesByColor: '',
	filterBlocksPagesBySearchTerm: '',
	filterBlocksPagesByStatus: savedPagesStatusPreference,

	// Unified version filter for blocks, pages, and sites
	filterBySpectraBlocksVersion: savedVersionPreference,

	//Filter favorites by:
	filterFavoritesBySearchTerm: '',

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

	// Dynamic Popup.
	displayDynamicPopup: false,

	// Color Palette.
	activeBlockPaletteSlug: 'default',
	activePagePaletteSlug: 'default',
	defaultBlockPalette: getDefaultBlockPalette(),
	defaultPagePalette: getDefaultPagePalette(),
	activeBlockPalette: {},
	activePagePalette: {},
	blockColorPaletteObj: ast_block_template_vars.block_color_palette,
	pageColorPaletteObj: ast_block_template_vars.page_color_palette,

	// Onboarding AI.
	onboardingAI: {
		showOnboarding: false,
		updateImages: false,
		currentStep: aiStepValues?.token ? 2 : 1,
		isNewUser: !! ast_block_template_vars.is_new_user,
		stepData: {
			token: aiStepValues?.token || '',
			businessType: aiStepValues?.business_category_name,
			businessName: aiStepValues?.business_name || '',
			businessDetails: aiStepValues?.business_description || '',
			businessDetailsHistory: aiStepValues?.business_description
				? [ aiStepValues?.business_description ]
				: [],
			keywords: aiStepValues?.image_keyword || [],
			selectedImages: !! selectedImages?.length
				? selectedImages
				: aiStepValues?.images,
			imagesPreSelected:
				!! aiStepValues?.images?.length ||
				!! aiStepValues?.images?.length ||
				false,
			businessContact: {
				phone: aiStepValues?.business_phone || '',
				email: aiStepValues?.business_email || '',
				address: aiStepValues?.business_address || '',
				socialMedia: aiStepValues?.social_profiles || [],
			},
			descriptionListStore: {
				list: [],
				currentPage: 0,
			},
			siteLanguage: aiStepValues?.language || 'en',
		},
	},

	// Settings.
	disableAi: !! ast_block_template_vars?.disable_ai,
	adaptiveMode: !! ast_block_template_vars?.adaptive_mode,
	disablePreview: !! ast_block_template_vars?.disable_preview,
	regeneratingContentCategory: null,

	// Import is in progress flag.
	importInProgress: false,

	// Onboarding Page AI.
	onboardingPageAI: {
		showOnboarding: false,
		currentStep: 1,
		stepData: {
			type: {},
			description: '',
		},
		pageContent: {},
		loadingNextStep: false,
	},
	aiDesignCopilot: ast_block_template_vars.ai_design_copilot,
	aiAssistant: ast_block_template_vars.ai_assistant,

	// License status.
	licenseStatus: ! ast_block_template_vars.license_status
		? 'inactive'
		: 'active',

	// Notice.
	hideNotice: objSnakeToCamelCase( ast_block_template_vars.hide_notice ),
	isSyncBusinessDetails: ast_block_template_vars.is_sync_business_details,
	isPersonalized: ast_block_template_vars.is_personalized,

	backgroundSyncInProgress: 'no',

	// Auto-open design library settings
	autoOpenDesignLibrary: typeof ast_block_template_vars !== 'undefined' ? Boolean( ast_block_template_vars.auto_open_design_library ) : true,
};

const reducer = ( state = initialState, action ) => {
	if ( action.type === 'SET_DISPLAY_DYNAMIC_POPUP' ) {
		return { ...state, displayDynamicPopup: action.displayDynamicPopup };
	}

	if ( action.type === 'SET_STATE' ) {
		return { ...state, ...action.state };
	}

	if ( action.type === 'FULL_WIDTH_PAGE_PREVIEW' ) {
		return { ...state, fullWidthPagePreview: action.fullWidthPagePreview };
	}

	if ( action.type === 'SET_IMPORTING' ) {
        return { ...state, importing: action.importing };
    }

	if ( action.type === 'SET_CURRENT_CATEGORY' ) {
		const { type, category } = action.payload;
		const currentCategory = { ...state.currentCategory };

		return {
			...state,
			currentCategory: {
				...currentCategory,
				[ type ]: category,
			},
		};
	}

	if ( action.type === 'FULL_WIDTH_BLOCK_PREVIEW' ) {
		return {
			...state,
			fullWidthBlockPreview: action.fullWidthBlockPreview,
		};
	}

	if ( action.type === 'SET_IMPORT_ITEM_INFO' ) {
		return {
			...state,
			importItemInfo: action.importItemInfo,
		};
	}

	if ( action.type === 'SET_NOTICE' ) {
		return {
			...state,
			notice: action.notice,
		};
	}

	if ( action.type === 'SET_SEARCH_PAGE_PREVIEW' ) {
		let siteData = [];
		const siteID = action.item[ 'site-ID' ] || '';
		if ( siteID ) {
			siteData = state.allSites.filter( ( site ) => siteID === site.ID );
			if ( siteData ) {
				siteData = siteData[ 0 ];
			}
		}

		return {
			...state,
			sitePreview: siteData,
			pagePreview: action.item,
		};
	}

	if ( action.type === 'SET_CURRENT_SCREEN' ) {
		const previousScreen =
			action.currentScreen === 'all-sites-grid' ||
			action.currentScree === 'all-blocks-grid'
				? ''
				: state.currentScreen;
		return {
			...state,
			currentScreen: action.currentScreen,
			previousScreen,
		};
	}

	if ( action.type === 'SET_PREVIOUS_SCREEN' ) {
		return { ...state, previousScreen: action.previousScreen };
	}

	if ( action.type === 'TOGGLE_POPUP' ) {
		const item = 'gt-current-screen-' + ast_block_template_vars.site_host;
		const screen =
			localStorage.getItem( item ) !== 'all-single-site-pages'
				? localStorage.getItem( item )
				: '';

		return {
			...initialState,
			currentScreen: screen || initialState.currentScreen,
			togglePopup: ! state.togglePopup,
			filterBlocksByCategory: state.filterBlocksByCategory,
			filterBlocksByColor: state.filterBlocksByColor,
			allPatterns: state.allPatterns,
			allFavorites: state.allFavorites,
			allBlocksPages: state.allBlocksPages,
			allWireframes: state.allWireframes,
			allCategories: state.allCategories,
			filterBlocksBySearchTerm: state.filterBlocksBySearchTerm,
			activeBlockPalette: state.activeBlockPalette,

			filterBlocksPagesByCategory: state.filterBlocksPagesByCategory,
			filterBlocksPagesByColor: state.filterBlocksPagesByColor,
			filterBlocksPagesBySearchTerm: state.filterBlocksPagesBySearchTerm,
			filterFavoritesBySearchTerm: state.filterFavoritesBySearchTerm,

			// Preserve version and status filter states
			filterBlocksByStatus: state.filterBlocksByStatus,
			filterBlocksPagesByStatus: state.filterBlocksPagesByStatus,
			filterSitesByStatus: state.filterSitesByStatus,
			filterBySpectraBlocksVersion: state.filterBySpectraBlocksVersion,

			// Keep the dynamic content and onboarding AI data.
			dynamicContent: { ...state.dynamicContent },
			onboardingAI: { ...state.onboardingAI },

			// Settings
			disableAi: state.disableAi,
			adaptiveMode: state.adaptiveMode,
			disablePreview: state.disablePreview,

			// Pages content generation onboarding flag.
			showPagesOnboarding: state.showPagesOnboarding,

			// Credits.
			credits: { ...state.credits },

			// Sync status and flags.
			dynamicContentSyncStatus: { ...state.dynamicContentSyncStatus },
			dynamicContentReSyncStatus: state.dynamicContentReSyncStatus,
			dynamicContentSyncFlags: { ...state.dynamicContentSyncFlags },
			currentCategory: { ...state.currentCategory },
			regeneratingContentCategory: state.regeneratingContentCategory,

			// License status.
			licenseStatus: state.licenseStatus,

			// Notice.
			hideNotice: { ...state.hideNotice },

			// Auto-open design library settings.
			autoOpenDesignLibrary: state.autoOpenDesignLibrary,

			// Patterns, pages, and sites.
			allPagesCategories: state.allPagesCategories,
			allPatternsCategories: state.allPatternsCategories,
			allPatternsAndPages: state.allPatternsAndPages,
			allSites: state.allSites,
			loadingBlocksAndSites: state.loadingBlocksAndSites,
			isSyncBusinessDetails: state.isSyncBusinessDetails,
			isPersonalized: state.isPersonalized,
			backgroundSyncInProgress: state.backgroundSyncInProgress,
			importInProgress: state.importInProgress,
			favorites: state.favorites,
		};
	}

	if ( action.type === 'SET_ONBOARDING_AI_POPUP' ) {
		const updatedData = { ...state.onboardingAI };
		updatedData.showOnboarding = ! state.onboardingAI.showOnboarding;
		return { ...state, onboardingAI: updatedData };
	}

	if ( action.type === 'SET_SITE_PREVIEW' ) {
		return { ...state, sitePreview: action.sitePreview };
	}

	if ( action.type === 'SET_PAGE_PREVIEW' ) {
		return { ...state, pagePreview: action.pagePreview };
	}

	if ( action.type === 'SET_FULL_PREVIEW' ) {
		return { ...state, fullWidthPreview: action.fullWidthPreview };
	}

	if ( action.type === 'SET_DEFAULT_BLOCK_PALETTE' ) {
		return { ...state, defaultBlockPalette: action.defaultBlockPalette };
	}
	if ( action.type === 'SET_DEFAULT_PAGE_PALETTE' ) {
		return { ...state, defaultPagePalette: action.defaultPagePalette };
	}
	if ( action.type === 'SET_ACTIVE_BLOCK_PALETTE' ) {
		return { ...state, activeBlockPalette: action.activeBlockPalette };
	}
	if ( action.type === 'SET_ACTIVE_BLOCK_PALETTE_SLUG' ) {
		return {
			...state,
			activeBlockPaletteSlug: action.activeBlockPaletteSlug,
		};
	}

	if ( action.type === 'SET_ACTIVE_PAGE_PALETTE' ) {
		return { ...state, activePagePalette: action.activePagePalette };
	}
	if ( action.type === 'SET_ACTIVE_PAGE_PALETTE_SLUG' ) {
		return {
			...state,
			activePagePaletteSlug: action.activePagePaletteSlug,
		};
	}

	if ( action.type === 'SET_FILTER_BLOCKS_BY_CATEGORY' ) {
		const newState = {
			...state,
			filterBlocksBySearchTerm: '',
			filterBlocksByCategory: action.filterBlocksByCategory,
		};
		if ( state.currentScreen === 'all-wireframe-grid' ) {
			newState.allWireframes = filterWireframes(
				'',
				action.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				state.filterBlocksByStatus
			);
		} else {
			newState.allPatterns = filterBlocks(
				'',
				action.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				state.allPatternsAndPages.patterns,
				state.favorites,
				'block',
				state.filterBlocksByStatus,
				state.filterBySpectraBlocksVersion
			);
		}

		return newState;
	}

	if ( action.type === 'SET_FILTER_BLOCKS_BY_COLOR' ) {
		const newState = {
			...state,
			filterBlocksBySearchTerm: '',
			filterBlocksByColor: action.filterBlocksByColor,
		};

		if ( state.currentScreen === 'all-wireframe-grid' ) {
			newState.allWireframes = filterWireframes(
				'',
				state.filterBlocksByCategory,
				'',
				action.filterBlocksByColor
			);
		} else {
			newState.allPatterns = filterPatterns(
				'',
				state.filterBlocksByCategory,
				'',
				action.filterBlocksByColor,
				state.favorites
			);
		}

		return newState;
	}

	if ( action.type === actionTypes.SET_WEBSITE_TYPE_LIST_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessTypeList: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_LANGUAGE_LIST_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					siteLanguageList: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_LANGUAGE_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					siteLanguage: action.payload,
				},
				limitExceedModal: {
					...state.onboardingAI.limitExceedModal,
					limitExceedModal: action.payload,
				},
			},
		};
	}

	if ( action.type === 'SET_FILTER_FAVORITRES' ) {
		const newState = {
			...state,
			filterFavoritesBySearchTerm: action.filterFavoritesBySearchTerm,
		};
		newState.allFavorites = filterBlocks(
			action.filterFavoritesBySearchTerm,
			newState.filterBlocksPagesByCategory,
			'',
			'',
			// state.allPatternsAndPages.patterns,
			// state.allPatternsAndPages.pages,
			state.allPatternsAndPages.patterns,
			state.favorites,
			'block',
			state.filterBlocksByStatus,
			state.filterBySpectraBlocksVersion
		);
		return newState;
	}

	if ( action.type === 'SET_FILTER_BLOCKS_BY_SEARCH_TERM' ) {
		const newState = {
			...state,
			filterBlocksByColor: '',
			filterBlocksByCategory: '',
			filterBlocksBySearchTerm: action.filterBlocksBySearchTerm,
		};

		if ( state.currentScreen === 'all-wireframe-grid' ) {
			newState.allWireframes = filterWireframes(
				action.filterBlocksBySearchTerm,
				'',
				action.filterBlocksBySearchTerm,
				''
			);
		} else {
			newState.allPatterns = filterBlocks(
				action.filterBlocksBySearchTerm,
				newState.filterBlocksByCategory,
				'',
				'',
				state.allPatternsAndPages.patterns,
				state.favorites,
				'block',
				state.filterBlocksByStatus,
				state.filterBySpectraBlocksVersion,
				state.allPatternsCategories
			);
		}
		return newState;
	}

	if ( action.type === 'SET_FILTER_BLOCKS_PAGES_BY_CATEGORY' ) {
		const newState = {
			...state,
			filterBlocksPagesBySearchTerm: '',
			filterBlocksPagesByCategory: action.filterBlocksPagesByCategory,
		};

		newState.allBlocksPages = filterBlocks(
			newState.filterBlocksPagesBySearchTerm,
			action.filterBlocksPagesByCategory,
			'',
			'',
			state.allPatternsAndPages.pages,
			state.favorites,
			'page',
			state.filterBlocksPagesByStatus,
			state.filterBySpectraBlocksVersion
		);

		return newState;
	}

	if ( action.type === 'SET_FILTER_BLOCKS_PAGES_BY_COLOR' ) {
		const newState = {
			...state,
			filterBlocksPagesBySearchTerm: '',
			filterBlocksPagesByColor: action.filterBlocksPagesByColor,
		};

		newState.allBlocksPages = filterBlocksPages(
			'',
			state.filterBlocksPagesByCategory,
			'',
			action.filterBlocksPagesByColor,
			state.favorites
		);

		return newState;
	}

	if ( action.type === 'SET_FILTER_BLOCKS_PAGES_BY_SEARCH_TERM' ) {
		const newState = {
			...state,
			filterBlocksPagesByColor: '',
			filterBlocksPagesByCategory: '',
			filterBlocksPagesBySearchTerm: action.filterBlocksPagesBySearchTerm,
		};

		newState.allBlocksPages = filterBlocks(
			action.filterBlocksPagesBySearchTerm,
			newState.filterBlocksPagesByCategory,
			'',
			'',
			state.allPatternsAndPages.pages,
			state.favorites,
			'page',
			state.filterBlocksPagesByStatus,
			state.filterBySpectraBlocksVersion,
			state.allPagesCategories
		);

		return newState;
	}

	if ( action.type === 'SET_FILTER_PAGES_BY_SEARCH_TERM' ) {
		if ( action.filterPagesBySearchTerm.length ) {
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

	if ( action.type === actionTypes.SET_FILTER_BLOCKS_BY_STATUS ) {
		const newState = {
			...state,
			filterBlocksByStatus: action.payload,
		};

		if ( state.currentScreen === 'all-wireframe-grid' ) {
			newState.allWireframes = filterWireframes(
				state.filterBlocksBySearchTerm,
				state.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				action.payload
			);
		} else {
			newState.allPatterns = filterBlocks(
				state.filterBlocksBySearchTerm,
				state.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				state.allPatternsAndPages.patterns,
				state.favorites,
				'block',
				action.payload,
				state.filterBySpectraBlocksVersion
			);
		}

		return newState;
	}

	if ( action.type === actionTypes.SET_FILTER_PAGES_BY_STATUS ) {
		const newState = {
			...state,
			filterBlocksPagesByStatus: action.payload,
		};

		newState.allBlocksPages = filterBlocksPages(
			state.allPatternsAndPages.pages,
			state.filterBlocksPagesBySearchTerm,
			state.filterBlocksPagesByCategory,
			'',
			state.filterBlocksPagesByColor,
			state.favorites,
			action.payload
		);

		return newState;
	}

	if ( action.type === actionTypes.TOGGLE_ONBOARDING_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				showOnboarding:
					actionTypes?.payload ?? ! state.onboardingAI.showOnboarding,
				currentStep: state.onboardingAI.stepData.token ? 2 : 1,
				updateImages: false,
			},
		};
	}

	if ( action.type === actionTypes.TOGGLE_DISABLE_LIVE_PREVIEW ) {
		return {
			...state,
			disablePreview: actionTypes?.payload ?? ! state.disablePreview,
		};
	}

	if ( action.type === actionTypes.TOGGLE_DISABLE_AI_CONTENT ) {
		return {
			...state,
			disableAi: actionTypes?.payload ?? ! state.disableAi,
		};
	}

	if ( action.type === actionTypes.TOGGLE_ADAPTIVE_MODE ) {
		return {
			...state,
			adaptiveMode: actionTypes?.payload ?? ! state.adaptiveMode,
		};
	}

	if ( action.type === actionTypes.SET_NEXT_AI_STEP ) {
		const TOTAL_STEPS = 5;
		const nextStep = state.onboardingAI.currentStep + 1;
		if ( nextStep > TOTAL_STEPS ) {
			return state;
		}

		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				currentStep: nextStep,
			},
		};
	}

	if ( action.type === actionTypes.SET_PREVIOUS_AI_STEP ) {
		const previousStep = state.onboardingAI.currentStep - 1;
		if ( previousStep < 0 || previousStep === 0 ) {
			return state;
		}

		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				currentStep: previousStep,
			},
		};
	}

	if ( action.type === actionTypes.SET_CURRENT_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				currentStep: action.payload,
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_TYPE_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessType: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_NAME_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessName: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_DETAILS_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessDetails: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_DETAILS_HISTORY_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessDetailsHistory: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_CONTACT_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					businessContact: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_KEYWORDS_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					keywords: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_IMAGES_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					selectedImages: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_WEBSITE_IMAGES_PRE_SELECTED_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					imagesPreSelected: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.RESET_KEYWORDS_IMAGES_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					keywords: [],
					selectedImages: [],
					imagesPreSelected: false,
				},
			},
		};
	}

	if ( action.type === actionTypes.SET_OPEN_AI_API_KEY_AI_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				stepData: {
					...state.onboardingAI.stepData,
					token: action.payload,
				},
			},
		};
	}

	if ( action.type === actionTypes.RESET_ONBOARDING_AI_STEPS ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				currentStep: 1,
				stepData: {
					token: '',
					businessType: '',
					businessName: '',
					businessDetails: '',
					keywords: [],
					selectedImages: [],
					imagesPreSelected: false,
					businessContact: {
						phone: '',
						email: '',
						address: '',
						socialMedia: [],
					},
				},
			},
		};
	}

	if ( action.type === 'SET_ALL_PAGES' ) {
		return {
			...state,
			allPages: action.allPages,
		};
	}

	if ( action.type === 'SET_ALL_PATTERNS' ) {
		return {
			...state,
			allPatterns: action.allPatterns,
		};
	}

	if ( action.type === 'SET_ALL_CATEGORIES' ) {
		return {
			...state,
			allCategories: action.allCategories,
		};
	}

	if ( action.type === 'SET_DYNAMIC_CONTENT' ) {
		return {
			...state,
			dynamicContent: action.dynamicContent,
		};
	}

	if ( action.type === 'SET_IS_SYNC_BUSINESS_DETAILS' ) {
		return {
			...state,
			isSyncBusinessDetails: action.isSyncBusinessDetails,
		};
	}

	if ( action.type === 'SET_IS_PERSONALIZED' ) {
		return {
			...state,
			isPersonalized: action.isPersonalized,
		};
	}

	if ( action.type === 'SET_FAVORITES' ) {
		const {
			currentScreen,
			filterBlocksPagesByCategory,
			filterBlocksByCategory,
		} = state;
		const newState = {
			...state,
			favorites: action.favorites,
		};

		if (
			filterBlocksByCategory !== 'favorite' &&
			filterBlocksPagesByCategory !== 'favorite'
		) {
			return newState;
		}

		if ( currentScreen === 'all-blocks-grid' ) {
			newState.allPatterns = filterPatterns(
				state.allPatterns,
				'',
				'favorite',
				'',
				state.filterBlocksByColor,
				action.favorites
			);
		}

		if ( currentScreen === 'all-block-pages-grid' ) {
			newState.allBlocksPages = filterBlocksPages(
				state.allBlocksPages,
				'',
				'favorite',
				'',
				state.filterBlocksPagesByColor,
				action.favorites
			);
		}

		return newState;
	}
	if ( action.type === actionTypes.DYNAMIC_CONTENT_SYNC_START ) {
		let dynamicContentSyncStatus = { ...state.dynamicContentSyncStatus };

		if ( action.payload ) {
			dynamicContentSyncStatus[ action.payload ] = true;
		} else {
			dynamicContentSyncStatus = { pages: true, patterns: true };
		}

		return {
			...state,
			dynamicContentSyncStatus,
		};
	}

	if ( action.type === actionTypes.DYNAMIC_CONTENT_SYNC_COMPLETE ) {
		let dynamicContentSyncStatus = { ...state.dynamicContentSyncStatus };

		if ( action.payload ) {
			dynamicContentSyncStatus[ action.payload ] = false;
		} else {
			dynamicContentSyncStatus = { pages: false, patterns: false };
		}

		return {
			...state,
			dynamicContentSyncStatus,
		};
	}

	if ( action.type === actionTypes.DYNAMIC_CONTENT_SYNC_MESSAGE ) {
		return {
			...state,
			dynamicContentSyncMessage: action.payload,
		};
	}

	if ( action.type === actionTypes.DYNAMIC_CONTENT_RESYNC_STATUS ) {
		return {
			...state,
			dynamicContentReSyncStatus: ! state.dynamicContentReSyncStatus,
		};
	}

	if ( action.type === actionTypes.DYNAMIC_CONTENT_FLAG_SET ) {
		const dynamicContentSyncFlags = { ...state.dynamicContentSyncFlags };

		if (
			dynamicContentSyncFlags.patterns?.hasOwnProperty(
				action.payload.key
			)
		) {
			dynamicContentSyncFlags.patterns[ action.payload.key ] =
				action.payload.value;
		}
		if (
			dynamicContentSyncFlags.pages?.hasOwnProperty( action.payload.key )
		) {
			dynamicContentSyncFlags.pages[ action.payload.key ] =
				action.payload.value;
		}

		return {
			...state,
			dynamicContentSyncFlags,
		};
	}

	if ( action.type === actionTypes.DYNAMIC_CONTENT_FLAGS_RESET ) {
		const {
			dynamicContentSyncFlags,
			allPatternsCategories,
			allPagesCategories,
		} = state;
		const typeCategories =
			action.payload.type === 'patterns'
				? allPatternsCategories
				: allPagesCategories;

		if ( action.payload?.flags ) {
			dynamicContentSyncFlags[ action.payload.type ] = Object.fromEntries(
				action.payload.flags.map( ( item ) => [ item, false ] )
			);
		}

		if (
			! action.payload.flags &&
			typeCategories.length !==
				dynamicContentSyncFlags[ action.payload.type ]?.length
		) {
			dynamicContentSyncFlags[ action.payload.type ] = Object.fromEntries(
				typeCategories.map( ( item ) => [ item.id, false ] )
			);
		}

		Object.keys( dynamicContentSyncFlags[ action.payload.type ] ).forEach(
			( key ) => {
				dynamicContentSyncFlags[ action.payload.type ][ key ] = false;
			}
		);

		return {
			...state,
			dynamicContentSyncFlags: { ...dynamicContentSyncFlags },
		};
	}

	if ( action.type === 'SET_ALL_BLOCKS' ) {
		let { blocks: patterns, blocks_pages: pages } = action.payload;

		const patternAndCategories = getPatternsWithCategories(
			patterns,
			state.allCategories
		);
		const pageAndCategories = getPagesWithCategories(
			pages,
			state.allCategories
		);

		patterns = updateSequenceByCategory(
			patterns,
			patternAndCategories.categories,
			'block'
		);
		pages = updateSequenceByCategory(
			pages,
			pageAndCategories.categories,
			'page'
		);

		const filteredPatterns = filterBlocks(
			state.filterBlocksBySearchTerm,
			state.filterBlocksByCategory,
			'',
			'',
			patterns,
			state.favorites,
			'block',
			state.filterBlocksByStatus,
			state.filterBySpectraBlocksVersion
		);

		const filteredPages = filterBlocks(
			state.filterBlocksPagesBySearchTerm,
			state.filterBlocksPagesByCategory,
			'',
			'',
			pages,
			state.favorites,
			'page',
			state.filterBlocksPagesByStatus,
			state.filterBySpectraBlocksVersion
		);

		return {
			...state,
			allPatternsAndPages: { patterns, pages },
			allPatterns: filteredPatterns,
			allBlocksPages: filteredPages,
			allPatternsCategories: patternAndCategories.categories,
			allPagesCategories: pageAndCategories.categories,
			dynamicContentSyncFlags: {
				patterns: Object.fromEntries(
					patternAndCategories.categories.map( ( item ) => [
						item.id,
						false,
					] )
				),
				pages: Object.fromEntries(
					pageAndCategories.categories.map( ( item ) => [
						item.id,
						false,
					] )
				),
			},
		};
	}

	if ( action.type === 'SET_REGENERATING_CONTENT_CATEGORY' ) {
		return {
			...state,
			regeneratingContentCategory: action.regeneratingContentCategory,
		};
	}

	if ( action.type === actionTypes.SET_IMPORT_IN_PROGRESS ) {
		return {
			...state,
			importInProgress: action.payload,
		};
	}

	if ( actionTypes.SET_SHOW_PAGES_ONBOARDING === action.type ) {
		return {
			...state,
			showPagesOnboarding: false,
		};
	}

	if ( action.type === actionTypes.SET_CREDITS_DETAILS ) {
		return {
			...state,
			credits: {
				...state.credits,
				...action.payload,
			},
		};
	}

	if ( action.type === actionTypes.TOGGLE_ONBOARDING_PAGE_AI ) {
		const onboardingPageAI = { ...state.onboardingPageAI };
		return {
			...initialState,
			onboardingPageAI: {
				...onboardingPageAI,
				showOnboarding: ! onboardingPageAI.showOnboarding,
			},
			togglePopup: ! state.togglePopup,
		};
	}

	if ( action.type === actionTypes.SET_NEXT_ONBOARDING_PAGE_AI_STEP ) {
		const TOTAL_STEPS = 3;
		const nextStep = state.onboardingPageAI.currentStep + 1;
		if ( nextStep > TOTAL_STEPS ) {
			return state;
		}

		return {
			...state,
			onboardingPageAI: {
				...state.onboardingPageAI,
				currentStep: nextStep,
			},
		};
	}

	if ( action.type === actionTypes.SET_PREVIOUS_ONBOARDING_PAGE_AI_STEP ) {
		const previousStep = state.onboardingPageAI.currentStep - 1;
		if ( previousStep < 0 || previousStep === 0 ) {
			return state;
		}

		return {
			...state,
			onboardingPageAI: {
				...state.onboardingPageAI,
				currentStep: previousStep,
			},
		};
	}

	if ( action.type === actionTypes.SET_IS_NEW_USER_ONBOARDING ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				isNewUser: false,
			},
		};
	}

	if ( action.type === actionTypes.TOGGLE_UPDATE_ONBOARDING_IMAGES ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				showOnboarding: ! state.onboardingAI.showOnboarding,
				updateImages: ! state.onboardingAI.updateImages,
				currentStep: ! state.onboardingAI.updateImages ? 5 : 1,
			},
		};
	}

	if ( actionTypes.SET_FILTER_SITES_BY_SEARCH_TERM === action.type ) {
		return {
			...state,
			filterSitesBySearchTerm: action.payload,
		};
	}

	if ( actionTypes.SET_FILTER_SITES_BY_CATEGORY === action.type ) {
		return {
			...state,
			filterSitesByCategory: action.payload,
		};
	}

	if ( actionTypes.SET_FILTER_SITES_BY_STATUS === action.type ) {
		return {
			...state,
			filterSitesByStatus: action.payload,
		};
	}

	if ( action.type === actionTypes.SET_FILTER_BY_SPECTRA_BLOCKS_VERSION ) {
		const newState = {
			...state,
			filterBySpectraBlocksVersion: action.payload,
		};

		// Update patterns if on blocks screen
		if ( state.currentScreen === 'all-wireframe-grid' ) {
			newState.allWireframes = filterWireframes(
				state.filterBlocksBySearchTerm,
				state.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				state.filterBlocksByStatus,
				action.payload
			);
		} else if ( state.currentScreen === 'all-blocks-grid' ) {
			newState.allPatterns = filterBlocks(
				state.filterBlocksBySearchTerm,
				state.filterBlocksByCategory,
				'',
				state.filterBlocksByColor,
				state.allPatternsAndPages.patterns,
				state.favorites,
				'block',
				state.filterBlocksByStatus,
				action.payload
			);
		}

		// Update pages if on pages screen
		if ( state.currentScreen === 'all-block-pages-grid' ) {
			newState.allBlocksPages = filterBlocks(
				state.filterBlocksPagesBySearchTerm,
				state.filterBlocksPagesByCategory,
				'',
				state.filterBlocksPagesByColor,
				state.allPatternsAndPages.pages,
				state.favorites,
				'page',
				state.filterBlocksPagesByStatus,
				action.payload
			);
		}

		// Sites filtering happens in the component itself
		return newState;
	}

	if ( action.type === actionTypes.UPDATE_LICENSE_STATUS ) {
		return {
			...state,
			licenseStatus: action.payload,
		};
	}

	if ( action.type === actionTypes.SET_ALL_SITES ) {
		return {
			...state,
			allSites: action.payload,
		};
	}
	if ( action.type === 'SET_BLOCK_COLOR_PALETTE_OBJ' ) {
		return {
			...state,
			blockColorPaletteObj: action.blockColorPaletteObj,
		};
	}

	if ( action.type === 'SET_PAGE_COLOR_PALETTE_OBJ' ) {
		return {
			...state,
			pageColorPaletteObj: action.pageColorPaletteObj,
		};
	}

	if ( action.type === actionTypes.SET_HIDE_NOTICE ) {
		return {
			...state,
			hideNotice: {
				...state.hideNotice,
				...action.payload,
			},
		};
	}

	if ( action.type === actionTypes.SET_LOADING_BLOCKS_AND_SITES ) {
		return {
			...state,
			loadingBlocksAndSites: action.payload,
		};
	}

	if ( action.type === actionTypes.SET_BACKGROUND_SYNC_IN_PROGRESS ) {
		return {
			...state,
			backgroundSyncInProgress: action.payload,
		};
	}

	if ( action.type === actionTypes.LOADING_NEXT_STEP ) {
		return {
			...state,
			onboardingAI: {
				...state.onboardingAI,
				loadingNextStep: action.payload,
			},
		};
	}

	if ( action.type === actionTypes.SET_ONBOARDING_AI_DETAILS ) {
		return {
			...state,
			onboardingAI: action.payload,
		};
	}

	if ( action.type === actionTypes.SET_AUTO_OPEN_DESIGN_LIBRARY ) {
		return {
			...state,
			autoOpenDesignLibrary: action.payload,
		};
	}

	return state;
};

export default reducer;
