/**
 * Reducer returning the viewport state, as keys of breakpoint queries with
 * boolean value representing whether query is matched.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
import { __ } from '@wordpress/i18n';

const DEFAULT_STATE = {
	initialStateSetFlag: false,
    globalBlockStylesPopupState: 'close',
	globalBlockStyles: [
        {
            value: '',
			label: __( 'None', 'ultimate-addons-for-gutenberg' ),
        }
    ],
	globalBlockStylesFontFamilies: []
};
function reducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'UPDATE_INITIAL_STATE':
            return {
                ...action.value,
            };
        case 'UPDATE_INITIAL_STATE_FLAG':
            return {
                ...state,
                initialStateSetFlag: action.value,
            };
		case 'TOGGLE_GLOBAL_BLOCK_STYLES_POPUP':
			return {
				...state,
				globalBlockStylesPopupState: action.value,
			};
		case 'UPDATE_GLOBAL_BLOCK_STYLES':
			return {
				...state,
				globalBlockStyles: action.value,
			};
		case 'UPDATE_GLOBAL_BLOCK_STYLES_FONT_FAMILIES':
			return {
				...state,
				globalBlockStylesFontFamilies: action.value,
			};
			
	}

	return state;
}

export default reducer;
