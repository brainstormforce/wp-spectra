/**
 * Returns an action object used in signalling that viewport queries have been
 * updated. Values are specified as an object of breakpoint query keys where
 * value represents whether query matches.
 * Ignored from documentation as it is for internal use only.
 *
 * @param {string} value Value to update.
 */
export function toggleGlobalBlockStylesPopup( value ) {
	return {
		type: 'TOGGLE_GLOBAL_BLOCK_STYLES_POPUP',
		value,
	};
}

export function updateGlobalBlockStyles( value ) {
	return {
		type: 'UPDATE_GLOBAL_BLOCK_STYLES',
		value,
	};
}

export function updateGlobalBlockStylesFontFamilies( value ) {
	return {
		type: 'UPDATE_GLOBAL_BLOCK_STYLES_FONT_FAMILIES',
		value,
	};
}

export function updateInitialState( value ) {
	return {
		type: 'UPDATE_INITIAL_STATE',
		value,
	};
}

// This action is used to set the device type. If the Gutenberg stores do not provide device type support, this action serves as a fallback.
export function setDeviceType( value ) {
	return {
		type: 'UPDATE_DEVICE_TYPE',
		value,
	};
}

export function updateEnableQuickActionSidebar( value ) {
	return {
		type: 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR',
		value,
	};
}

export function updateDefaultAllowedQuickSidebarBlocks( value ) {
	return {
		type: 'UPDATE_DEFAULT_ALLOWED_QUICK_SIDEBAR_BLOCKS',
		value,
	};
}