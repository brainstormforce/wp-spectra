import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import HeaderTitle from './header-title';
import { alterEditorTitleStyling } from './utils';

if ( 'enabled' === uagb_blocks_info.header_titlebar_status ) {
	alterEditorTitleStyling( false );
}

// When the DOM is ready, render the titlebar when possible.
domReady( () => {
	// Only do it if the titlebar needs to be rendered.
	if ( 'enabled' === uagb_blocks_info.header_titlebar_status ) {
		// Keep checking for when the header center is available
		const titlebar = setInterval( () => {
			const headerCenter = document.querySelector( '.edit-post-header__center' );
			if ( ! headerCenter ) {
				return;
			}

			clearInterval( titlebar );

			const sidebarRoot = createRoot( headerCenter );
			sidebarRoot.render( <HeaderTitle /> );

		}, 10 );
	}
} );