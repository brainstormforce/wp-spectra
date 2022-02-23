import React from 'react';
import { useLocation } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Blocks from '@DashboardApp/pages/blocks/Blocks';
import Settings from '@DashboardApp/pages/settings/Settings';

function SettingsRoute() {
	const query = new URLSearchParams( useLocation().search );
	const page = query.get( 'page' );
	const path = query.get( 'path' );
	const currentEvent = query.get( 'event' );

	let routePage = <p>Default route fallback</p>;

	if ( uag_react.home_slug === page ) {
		if ( 'getting-started' === currentEvent ) {
			routePage = <Welcome/>;
		} else {
			switch ( path ) {
				case 'blocks':
					routePage = <Blocks/>;
					break;
				case 'settings':
					routePage = <Settings/>;
					break;
				default:
					routePage = <Welcome/>;
					break;
			}
		}
	}

	return <>{ routePage }</>;
}

export default SettingsRoute;
