const { productId } = window.oneOnboardingData || {};

// localStorage key for storing onboarding state
const STORAGE_KEY = `${ productId }_onboarding_state`;

/**
 * Saves the current state to localStorage
 *
 * @param {Object} state - The state object to save
 */
export const saveStateToStorage = ( state ) => {
	try {
		const serializedState = JSON.stringify( state );
		localStorage.setItem( STORAGE_KEY, serializedState );
	} catch ( error ) {
		console.warn( 'Failed to save state to localStorage:', error );
	}
};

/**
 * Loads state from localStorage
 *
 * @return {Object|null} - The stored state object or null if not found
 */
export const loadStateFromStorage = () => {
	try {
		const serializedState = localStorage.getItem( STORAGE_KEY );
		if ( serializedState === null ) {
			return null;
		}
		return JSON.parse( serializedState );
	} catch ( error ) {
		console.warn( 'Failed to load state from localStorage:', error );
		return null;
	}
};

/**
 * Removes the stored state from localStorage
 */
export const clearStorageState = () => {
	try {
		localStorage.removeItem( STORAGE_KEY );
	} catch ( error ) {
		console.warn( 'Failed to clear state from localStorage:', error );
	}
};
