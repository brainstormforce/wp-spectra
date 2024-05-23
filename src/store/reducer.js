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
	globalBlockStylesFontFamilies: [],
	
	/**
	 * This variable is used to set the device type. If the Gutenberg stores do not provide device type support, this variable serves as a fallback.
	 */
	deviceType: 'Desktop',
	enableQuickActionSidebar: 'disabled', // 'enabled' | 'disabled' quick action sidebar.
	defaultAllowedQuickSidebarBlocks: [ // Default blocks allowed in the quick action sidebar.
		'uagb/container',
		'uagb/advanced-heading',
		'uagb/image',
		'uagb/icon',
		'uagb/buttons',
		'uagb/info-box',
		'uagb/call-to-action',
	],
};
function reducer( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'UPDATE_INITIAL_STATE':
            return {
				...state,
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
		/**
		 * This action is used to set the device type. If the Gutenberg stores do not provide device type support, this action serves as a fallback.
		 */
		case 'UPDATE_DEVICE_TYPE':
			return {
				...state,
				deviceType: action.value,
			};
		case 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR':
			return {
				...state,
				enableQuickActionSidebar: action.value,
			};
		case 'UPDATE_DEFAULT_ALLOWED_QUICK_SIDEBAR_BLOCKS':
			return {
				...state,
				defaultAllowedQuickSidebarBlocks: action.value,
			};
	}

	return state;
}

export default reducer;
