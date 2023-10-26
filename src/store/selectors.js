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
