/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {Object} state Viewport state object.
 *
 *
 * @return {boolean} Whether viewport matches query.
 */
export function getGlobalBlockStylesPopupState( state ) {
	return state.globalBlockStylesPopupState;
}

export function getGlobalBlockStyles( state ) {
	return state.globalBlockStyles;
}

export function getGlobalBlockStylesFontFamilies( state ) {
	return state.globalBlockStylesFontFamilies;
}

export function getState( state ) {
	return state;
}

// This selector is used to set the device type. If the Gutenberg stores do not provide device type support, this selector serves as a fallback.
export function getDeviceType( state ) {
	return state.deviceType;
}

export function getEnableQuickActionSidebar( state ) {
	return state.enableQuickActionSidebar;
}

export function getDefaultAllowedQuickSidebarBlocks( state ) {
	return state.defaultAllowedQuickSidebarBlocks;
}
