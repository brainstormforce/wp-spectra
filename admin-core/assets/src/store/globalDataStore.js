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
	enableFSEFontFamilies : '',
	enableLoadFontsLocally : '',
	enablePreloadLocalFonts : '',
	enableCollapsePanels : '',
	enableCopyPasteStyles : '',
	enableDisplayConditions : '',
	enableMasonryExtension : '',
	enableQuickActionSidebarExtension : '',
	enableAnimationsExtension : '',
	enableHeaderTitlebar : '',
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
	visibilityMode: 'disabled',
	visibilityPage: '',
	blocksEditorSpacing: '',
	containerGlobalPadding: '',
	containerGlobalElementsGap: 20,
	enableFontAwesome5: 'disabled',
	enableAutoBlockRecovery: 'disabled',
	enableLegacyBlocks: 'no',
	instaLinkedAccounts: '',
	coreBlocks: [
		'container',
		'advanced-heading',
		'image',
		'icon',
		'buttons',
		'info-box',
		'call-to-action',
		'countdown',
		'popup-builder'
	],
	spectraFSEFonts: [],
	themeFonts: [],
	spectraIsBlockTheme: false,
	enableGBSExtension: '',
	zipAiModules: [],
};

const globalDataStore = createStore(
	globalDataReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;
