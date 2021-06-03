import React from 'react';
import { useLocation } from 'react-router-dom';

import HomePage from '@SettingsApp/pages/HomePage';
import SettingsPage from '@SettingsApp/pages/SettingsPage';
// import WelcomePage from '@SettingsApp/pages/WelcomePage';

function SettingsRoute() {
	let query = new URLSearchParams( useLocation().search );
	let page = query.get( 'page' );
	let path = query.get( 'path' );
	let current_event = query.get( 'event' );

	let route_page = <p>Default route fallback</p>;

	if ( uag_react.home_slug === page ) {
		if ( 'getting-started' === current_event ) {
			route_page = <WelcomePage />;
		} else {
			switch ( path ) {
				case 'settings':
					route_page = <SettingsPage />;
					break;
				default:
					route_page = <HomePage />;
					break;
			}
		}
		wcfWpNavMenuChange( path );
	}

	return <>{ route_page }</>;
}

export default SettingsRoute;
