const globalDataReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case 'UPDATE_INITIAL_STATE':
            return {
                ...action.payload,
            };
        case 'UPDATE_INITIAL_STATE_FLAG':
            return {
                ...state,
                initialStateSetFlag: action.payload,
            };
        case 'UPDATE_BLOCK_STATUSES':
            return {
                ...state,
                blocksStatuses: action.payload
            };
        case 'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB':
            return {
                ...state,
                activeSettingsNavigationTab: action.payload
            };
        case 'UPDATE_FILE_GENERATION':
            return {
                ...state,
                enableFileGeneration: action.payload,
            };
        case 'UPDATE_TEMPLATES_BUTTON':
            return {
                ...state,
                enableTemplates: action.payload,
            };
		case 'UPDATE_ON_PAGE_CSS_BUTTON':
			return {
				...state,
				enableOnPageCSS: action.payload,
			};
        case 'UPDATE_BETA':
            return {
                ...state,
                enableBeta: action.payload,
            };
		case 'UPDATE_LEGACY_BLOCKS':
			return {
				...state,
				enableLegacyBlocks: action.payload,
			};
        case 'UPDATE_ENABLE_SELECTED_FONT_FAMILIES':
            return {
                ...state,
                enableSelectedFontFamilies: action.payload,
            };
        case 'UPDATE_SELECTED_FONT_FAMILIES':
            return {
                ...state,
                selectedFontFamilies: action.payload,
            };
        case 'UPDATE_ENABLE_FSE_FONT_FAMILIES':
            return {
                ...state,
                enableFSEFontFamilies: action.payload,
        };
        case 'UPDATE_ENABLE_LOAD_FONTS_LOCALLY':
            return {
                ...state,
                enableLoadFontsLocally: action.payload,
            };
        case 'UPDATE_ENABLE_PRELOAD_LOCAL_FONTS':
            return {
                ...state,
                enablePreloadLocalFonts: action.payload,
            };
        case 'UPDATE_ENABLE_COLLAPSE_PANELS':
            return {
                ...state,
                enableCollapsePanels: action.payload,
            };
        case 'UPDATE_ENABLE_COPY_PASTE_STYLES':
            return {
                ...state,
                enableCopyPasteStyles: action.payload,
            };
        case 'UPDATE_ENABLE_DISPLAY_CONDITIONS':
            return {
                ...state,
                enableDisplayConditions: action.payload,
            };
        case 'UPDATE_ENABLE_MASONRY_EXTENSION':
            return {
                ...state,
                enableMasonryExtension: action.payload,
            };
		case 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR_EXTENSION':
            return {
                ...state,
                enableQuickActionSidebarExtension: action.payload,
            };
        case 'UPDATE_ENABLE_ANIMATIONS_EXTENSION':
            return {
                ...state,
                enableAnimationsExtension: action.payload,
            };
        case 'UPDATE_RECAPTCHA_VERSION':
            return {
                ...state,
                social: {
					...state.social,
					recaptchaVersion: action.payload
				},
            };
        case 'UPDATE_RECAPTCHA_BADGE':
            return {
                ...state,
                social: {
					...state.social,
					recaptchaBadgeHide: action.payload
				},
            };
        case 'UPDATE_RECAPTCHA_SITE_KEY':
            return {
                ...state,
                social: {
					...state.social,
					recaptchaSiteKey: action.payload
				},
            };
        case 'UPDATE_RECAPTCHA_SECRET_KEY':
            return {
                ...state,
                social: {
					...state.social,
					recaptchaSecretKey: action.payload
				},
            };
        case 'UPDATE_SOCIAL_REGISTER':
            return {
                ...state,
                social: {
					...state.social,
					socialRegister: action.payload
				},
            };
        case 'UPDATE_GOOGLE_CLIENT_ID':
            return {
                ...state,
                social: {
					...state.social,
					googleClientId: action.payload
				},
            };
        case 'UPDATE_FACEBOOK_APP_ID':
            return {
                ...state,
                social: {
					...state.social,
					facebookAppId: action.payload
				},
            };
        case 'UPDATE_FACEBOOK_APP_SECRET':
            return {
                ...state,
                social: {
					...state.social,
					facebookAppSecret: action.payload
				}
			}
        case 'UPDATE_ENABLE_MOTION_EFFECTS_EXTENSION':
            return {
                ...state,
                enableMotionEffectsExtension: action.payload,
            };
        case 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION':
            return {
                ...state,
                enableDynamicContentExtension: action.payload,
            };
        case 'UPDATE_DYNAMIC_CONTENT_MODE':
            return {
                ...state,
                dynamicContentMode: action.payload,
            };
		case 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS':
			return {
				...state,
				enableResponsiveConditions: action.payload,
			};
		case 'UPDATE_CONTENT_WIDTH':
			return {
				...state,
				contentWidth: action.payload,
				};
		case 'UPDATE_RECAPTCHA_SITE_KEY_V2':
			return {
					...state,
					siteKeyV2: action.payload,
				};
		case 'UPDATE_RECAPTCHA_SITE_KEY_V3':
			return {
				...state,
				siteKeyV3: action.payload,
			};
		case 'UPDATE_RECAPTCHA_SECRET_KEY_V2':
			return {
				...state,
				secretKeyV2: action.payload,
			};
		case 'UPDATE_RECAPTCHA_SECRET_KEY_V3':
			return {
				...state,
				secretKeyV3: action.payload,
			};
		case 'UPDATE_SETTINGS_SAVED_NOTIFICATION':
			return {
				...state,
				settingsSavedNotification: action.payload,
			};
		case 'UPDATE_VISIBILITY_MODE':
			return {
				...state,
				visibilityMode: action.payload,
			};
		case 'UPDATE_VISIBILITY_PAGE':
			return {
				...state,
				visibilityPage: action.payload,
			};
		case 'UPDATE_BLOCKS_EDITOR_SPACING':
			return {
				...state,
				blocksEditorSpacing: action.payload,
				};
        case 'UPDATE_ENABLE_FONT_AWESOME_5':
            return {
                ...state,
                enableFontAwesome5: action.payload,
            };
        case 'UPDATE_ENABLE_AUTO_BLOCK_RECOVERY':
            return {
                ...state,
                enableAutoBlockRecovery: action.payload,
            };
		case 'UPDATE_CONTAINER_GLOBAL_PADDING':
			return {
				...state,
				containerGlobalPadding: action.payload,
				};
		case 'UPDATE_CONTAINER_GLOBAL_ELEMENTS_GAP':
			return {
				...state,
				containerGlobalElementsGap: action.payload,
				};
        case 'UPDATE_INSTA_LINKED_ACCOUNTS':
            return {
                ...state,
                instaLinkedAccounts: action.payload,
            };
        case 'UPDATE_BTN_INHERIT_FROM_THEME':
            return {
                ...state,
                btnInheritFromTheme: action.payload,
                };
        case 'UPDATE_GBS_EXTENSION':
            return {
                ...state,
                enableGBSExtension: action.payload,
                };
		case 'UPDATE_ZIP_AI_MODULES':
			return {
				...state,
				zipAiModules: action.payload,
				};
		case 'UPDATE_ALL_EXTENSIONS':
			const enableAll = 'enabled' === action.payload ? 'enabled' : 'disabled';
			return {
				...state,
				enableGBSExtension: enableAll,
				enableAnimationsExtension: enableAll,
				enableMasonryExtension: enableAll,
				enableDisplayConditions: enableAll,
				enableDynamicContentExtension: enableAll,
				enableResponsiveConditions: enableAll,
                enableMotionEffectsExtension: enableAll,
			}; 
        default:
            return state;
    }
}

export default globalDataReducer;
