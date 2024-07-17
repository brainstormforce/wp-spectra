/**
 * The Quick Access React App for Spectra Enhanced Editor.
 */
import domReady from '@wordpress/dom-ready';
import { createRoot } from 'react-dom';
import Sidebar from './components/sidebar';

domReady( () => {
	if ( 'disabled' === uagb_blocks_info.enableQuickActionSidebar ) {
		return;
	}
	// If not FSE editor, attach the sidebar to the DOM.
	const currentUrl = new URL( window.location.href );
	if( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
		toggleSidebar( window.location.href );

		// For FSE we are adding eventlistener to remove the sidebar when the user canvas is not editable.
		window.navigation.addEventListener( 'navigate', e => {
			toggleSidebar( e.destination.url );
		} );
	} else {

		// Attach the sidebar to the DOM.
		attachSidebar();
	}

} );

// Toggles the sidebar based on the url parameters.
const toggleSidebar = ( url ) => {
	const currentUrl = new URL( url );
	if( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
		if( 'edit' === currentUrl.searchParams.get( 'canvas' ) ) {
			attachSidebarAfterLoading();
		} else {
			const container = document.querySelector( '.spectra-ee-quick-access' );
			if ( container ) {
				container.parentElement.remove();
			}
		}
	}
}

// Attaches the sidebar to the DOM.
const attachSidebar = () => {
	const interval = setInterval( () => {
		const rootElement = document.querySelector( '.interface-interface-skeleton__body' );
		if ( ! rootElement ) {
			return;
		}

		const blockElement = document.querySelector( '.spectra-ee-quick-access__sidebar--blocks--block' );
		if ( blockElement ) {
			clearInterval( interval );
			return;
		}

		clearInterval( interval );

		let container = rootElement.querySelector( '.spectra-ee-quick-access-container' );

		if ( ! container ) {
			const parentDiv = rootElement.insertBefore( document.createElement( 'div' ), rootElement.firstChild );
			container = parentDiv.appendChild( document.createElement( 'div' ) );
			container.classList.add( 'spectra-ee-quick-access-container' );
		}
		const root = createRoot( container );
		root.render( <Sidebar/> );
	}
	, 100 );
}

// Attaches the sidebar after the page is loaded ( in FSE editor).
const attachSidebarAfterLoading = () => {
	const skeletonInterval = setInterval( () => {
		const skeleton = document.querySelector( '.edit-site-editor__interface-skeleton' ) || document.querySelector( '.editor-editor-interface.edit-site-editor__editor-interface' ); // For Old user with 6.5 and below || For New user with 6.6 and above.
		if( skeleton ) {
			if( ! skeleton.classList.contains( 'is-loading' ) ) {
				clearInterval( skeletonInterval );
				attachSidebar();
			}
		}
	}
	, 100 );
}

// get custom event using addEventListener ( Created from toggle status ), then attachSidebar.
document.addEventListener( 'UAGBQABEditor', function( event ) {
	if ( 'enabled' === event?.detail?.toggleStatus ){
		attachSidebar();
	}
} );