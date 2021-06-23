import React from 'react';
import { useLocation } from 'react-router-dom';

import HomePage from '@SettingsApp/pages/HomePage';
import BlocksPage from '@SettingsApp/pages/BlocksPage';
import ToolsPage from '@SettingsApp/pages/ToolsPage';
import SettingsPage from '@SettingsApp/pages/SettingsPage';

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
				case 'blocks':
					route_page = <BlocksPage />;
					break;
				case 'tools':
					route_page = <ToolsPage />;
					break;
				case 'settings':
					route_page = <SettingsPage />;
					break;
				default:
					route_page = <HomePage />;
					break;
			}
		}
		uagWpNavMenuChange( path );
	}

	return <>{ route_page }</>;
}

export default SettingsRoute;
