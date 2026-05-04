import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore, ACTIONS } from './index';

// Hook to sync router with store
export const useRouterSync = () => {
	const { state, dispatch } = useStore();
	const location = useLocation();
	const navigate = useNavigate();

	// Update store when route changes
	useEffect( () => {
		const currentRoute = location.pathname.replace( '/', '' );
		if ( currentRoute && currentRoute !== state.currentScreen ) {
			dispatch( {
				type: ACTIONS.SET_CURRENT_SCREEN,
				payload: currentRoute,
			} );
		}
	}, [ location.pathname, state.currentScreen, dispatch ] );

	// Navigate when store changes
	const navigateToScreen = ( screen ) => {
		dispatch( {
			type: ACTIONS.SET_CURRENT_SCREEN,
			payload: screen,
		} );
		navigate( `/${ screen }` );
	};

	// Function to go to the next screen
	const navigateToNextScreen = ( { skip = false } = {} ) => {
		const currentIndex = state.screens.findIndex(
			( screen ) => screen.id === state.currentScreen
		);

		dispatch( {
			type: ACTIONS.SET_SCREENS,
			payload: state.screens.map( ( screen, index ) =>
				index === currentIndex ? { ...screen, skipped: skip } : screen
			),
		} );

		if ( currentIndex < state.screens.length - 1 ) {
			const nextScreen = state.screens[ currentIndex + 1 ].id;
			navigateToScreen( nextScreen );
		}
	};

	// Function to skip the current screen and go to the next screen
	const skipScreen = () => {
		navigateToNextScreen( { skip: true } );
	};

	// Function to go to the previous screen
	const navigateToPreviousScreen = () => {
		const currentIndex = state.screens.findIndex(
			( screen ) => screen.id === state.currentScreen
		);
		if ( currentIndex > 0 ) {
			const previousScreen = state.screens[ currentIndex - 1 ].id;
			navigateToScreen( previousScreen );
		}
	};

	return {
		currentScreen: state.currentScreen,
		navigateToScreen,
		navigateToNextScreen,
		navigateToPreviousScreen,
		skipScreen,
	};
};
