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
	enableResponsiveConditions : '',
	contentWidth: '',
	siteKeyV2: '',
	siteKeyV3: '',
	secretKeyV2: '',
	secretKeyV3: '',
	settingsSavedNotification: false,
};

const globalDataStore = createStore(
    globalDataReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;
