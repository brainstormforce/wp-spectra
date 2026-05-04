import { useEffect } from '@wordpress/element';
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import {
	Welcome,
	UserInformation,
	Features,
	StarterTemplates,
	AddOns,
	Done,
} from '@/screens';
import Header from './Header';
import { ACTIONS, useStore } from '@/store';

const screens = [
	{ id: 'welcome', element: Welcome },
	{ id: 'user-info', element: UserInformation },
	{ id: 'features', element: Features },
	{ id: 'starter-templates', element: StarterTemplates },
	{ id: 'add-ons', element: AddOns },
	{ id: 'done', element: Done },
];

const AppRoutes = () => {
	const { state, dispatch } = useStore();

	useEffect( () => {
		// Initialize the store with screens
		dispatch( {
			type: ACTIONS.SET_SCREENS,
			payload: screens.map( ( screen ) => ( {
				...screen,
				skipped: state?.screens?.find( ( s ) => s.id === screen.id )
					?.skipped,
			} ) ),
		} );
	}, [ dispatch ] );

	return (
		<Router>
			<Header screens={ screens } />
			<Routes>
				{ screens.map( ( screen ) => (
					<Route
						key={ screen.id }
						path={ `/${ screen.id }` }
						element={ <screen.element /> }
					/>
				) ) }

				{ /* Redirect root to first screen */ }
				<Route
					path="/"
					element={
						<Navigate to={ `/${ screens[ 0 ].id }` } replace />
					}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
