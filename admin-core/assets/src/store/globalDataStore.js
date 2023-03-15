import { createStore } from 'redux';
import globalDataReducer from './globalDataReducer';

const initialState = {
    initialStateSetFlag : false,
    activeBlocksFilterTab : 'all',
    activeSettingsNavigationTab : '',
    blocksStatuses : [],
    enableFileGeneration : '',
    enableTemplates : '',
    enableBeta : '',
    enableSelectedFontFamilies : '',
    selectedFontFamilies : '',
    enableLoadFontsLocally : '',
    enablePreloadLocalFonts : '',
    enableCollapsePanels : '',
    enableCopyPasteStyles : '',
    enableDisplayConditions : '',
    enableMasonryExtension : '',
	socialLogin: {
		recaptchaVersion: 'v2',
		recaptchaSiteKey: '',
		recaptchaSecretKey: '',
		recaptchaBadgeHide: false,
		socialRegister: false,
		googleClientId: '',
		facebookAppId: '',
		facebookAppSecret: ''
	},
	enableDynamicContentExtension: '',
	dynamicContentMode: 'popup',
	enableResponsiveConditions : '',
	contentWidth: '',
	siteKeyV2: '',
	siteKeyV3: '',
	secretKeyV2: '',
	secretKeyV3: '',
	settingsSavedNotification: '',
	enableComingSoonMode: 'disabled',
	comingSoonPage: '',
	blocksEditorSpacing: '',
	containerGlobalPadding: '',
	containerGlobalElementsGap: 20,
    enableFontAwesome5: ( 'yes' === uag_react.global_data.uagb_old_user_less_than_2 ) ? 'enabled' : 'disabled',
    enableAutoBlockRecovery: ( 'yes' === uag_react.global_data.uagb_old_user_less_than_2 ) ? 'enabled' : 'disabled',
	enableLegacyBlocks: ( 'yes' === uag_react.global_data.uagb_old_user_less_than_2 ) ? 'yes' : 'no',
    coreBlocks: [
        'container',
        'advanced-heading',
        'image',
        'icon',
        'buttons',
        'info-box',
        'call-to-action',
    ]
};

const globalDataStore = createStore(
    globalDataReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;
