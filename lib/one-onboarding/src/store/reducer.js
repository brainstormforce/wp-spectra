import { ACTIONS } from './actions';

// Reducer
export const storeReducer = ( state, action ) => {
	switch ( action.type ) {
		case ACTIONS.SET_SCREENS:
			return { ...state, screens: action.payload };
		case ACTIONS.SET_CURRENT_SCREEN:
			return { ...state, currentScreen: action.payload };
		case ACTIONS.UPDATE_STATE:
			return { ...state, ...action.payload };
		case ACTIONS.SET_LOADING:
			return { ...state, isLoading: action.payload };
		case ACTIONS.SET_ERROR:
			return { ...state, error: action.payload };
		case ACTIONS.SET_USER_INFO:
			return {
				...state,
				userInfo: {
					...state.userInfo,
					...action.payload,
				},
			};
		case ACTIONS.SET_PRO_FEATURES:
			return { ...state, proFeatures: action.payload };
		case ACTIONS.SET_PRO_STATUS:
			return { ...state, proStatus: action.payload };
		case ACTIONS.SET_SELECTED_ADDONS:
			return { ...state, selectedAddons: action.payload };
		case ACTIONS.SET_ACTIVATED_ADDONS:
			return { ...state, activatedAddons: action.payload };
		case ACTIONS.SET_STARTER_TEMPLATES_BUILDER:
			return { ...state, starterTemplatesBuilder: action.payload };
		default:
			return state;
	}
};
