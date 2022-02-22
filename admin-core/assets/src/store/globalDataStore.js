import { createStore } from 'redux';
import globalDataReducer from './globalDataReducer';

const initialState = {
    initialStateSetFlag : false,
    activeBlocksFilterTab : 'all',
    activeSettingsNavigationTab : 'asset-generation',
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
    enableMasonryExtension : ''
};

const globalDataStore = createStore(
    globalDataReducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;