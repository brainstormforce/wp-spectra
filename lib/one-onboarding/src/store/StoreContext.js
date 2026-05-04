import { createContext, useReducer, useEffect } from 'react';
import { storeReducer } from './reducer';
import { initialState } from './initialState';
import { saveStateToStorage, loadStateFromStorage } from '@/utils/localStorage';
import { saveOnboardingState } from '@/utils/functions';

// Context
export const StoreContext = createContext();

// Provider
export const StoreProvider = ( { children } ) => {
	// Load stored state from localStorage or use initial state if none exists
	const storedState = loadStateFromStorage();
	const [ state, dispatch ] = useReducer(
		storeReducer,
		storedState || initialState
	);

	// Save state when user closes tab/browser or switches tabs
	useEffect( () => {
		const handleBeforeUnload = () => {
			// Save to localStorage for quick recovery
			saveStateToStorage( state );

			// Save to server for persistence (only if not already exiting via button click)
			if ( ! window.oneOnboardingData?.isExiting ) {
				// Remove any exit-specific flags that shouldn't be in unload/visibility events
				saveOnboardingState( {
					...state,
					exitedEarly: state?.currentScreen !== 'done',
				} );
			}
		};

		const handleVisibilityChange = () => {
			// Save state when tab becomes hidden (user switches tabs)
			if ( document.visibilityState === 'hidden' ) {
				saveStateToStorage( state );

				// Save to server when tab is hidden
				saveOnboardingState( {
					...state,
					exitedEarly: state?.currentScreen !== 'done',
				} );
			}
		};

		// Add event listeners for browser/tab close events
		window.addEventListener( 'beforeunload', handleBeforeUnload );
		document.addEventListener( 'visibilitychange', handleVisibilityChange );

		// Cleanup event listeners on component unmount
		return () => {
			window.removeEventListener( 'beforeunload', handleBeforeUnload );
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			);
		};
	}, [ state ] );

	// Save state whenever user navigates to next/previous screen
	useEffect( () => {
		saveStateToStorage( state );
	}, [ state.currentScreen ] );

	return (
		<StoreContext.Provider value={ { state, dispatch } }>
			{ children }
		</StoreContext.Provider>
	);
};
