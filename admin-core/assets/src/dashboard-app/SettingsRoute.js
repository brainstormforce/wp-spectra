import React from 'react';
import { useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import Welcome from './pages/welcome/Welcome';
import Blocks from '@DashboardApp/pages/blocks/Blocks';
import Settings from '@DashboardApp/pages/settings/Settings';

function SettingsRoute() {
	const query = new URLSearchParams( useLocation().search );
	const page = query.get( 'page' );
	const path = query.get( 'path' );
	const currentEvent = query.get( 'event' );

	let routePage = <p>{ __( 'Default route fallback', 'ultimate-addons-for-gutenberg' ) }</p>;

	if ( uag_react.home_slug === page ) {

		// Get the Admin Sidebar Element from Wordpress.
		const adminMenu = document.getElementById( 'toplevel_page_spectra' )?.querySelector( '.wp-submenu' );

		// Remove the 'current' class from the old active elements.
		const oldCurrent = adminMenu?.querySelectorAll( '.current' );
		oldCurrent?.forEach( currentElement => {
			currentElement.classList.remove( 'current' );
		} );

		// Add the 'current' class to the new active elements.
		const newCurrent = adminMenu?.querySelector( `[href="admin.php?page=${ page }${ path ? `&path=${ path }` : ''}"]` );
		newCurrent?.classList?.add( 'current' );
		newCurrent?.parentElement?.classList?.add( 'current' );

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
