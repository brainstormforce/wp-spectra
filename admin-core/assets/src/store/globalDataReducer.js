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
        case 'UPDATE_BLOCKS_ACTIVE_FILTER_TAB':
            return {
                ...state,
                activeBlocksFilterTab: action.payload
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
        case 'UPDATE_BETA':
            return {
                ...state,
                enableBeta: action.payload,
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
        case 'UPDATE_INSTA_LINKED_ACCOUNTS':
            return {
                ...state,
                instaLinkedAccounts: action.payload,
            };
        default:
            return state;
    }
}

export default globalDataReducer;