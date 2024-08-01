/**
 * The Quick Access React App for Spectra Enhanced Editor.
 */
import domReady from '@wordpress/dom-ready';
import { createRoot } from 'react-dom';
import Sidebar from './components/sidebar';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * The AddEventCommandForQAB component is responsible for creating a custom
 * event and dispatching it to the document. This event is used to toggle the
 * status of the Quick Action Sidebar.
 */
const AddEventCommandForQAB = () => {
	// Use the useSelect hook to get the current post ID from the WordPress
	// store. The post ID is used to determine when to create the custom event.
	const postId = useSelect( ( select ) => {
		// Select the current post ID from the store.
		const getPostIdFromStore = select( 'core/editor' ).getCurrentPostId();

		// Return the post ID.
		return getPostIdFromStore;
	}, [] );

	// Create a custom event and dispatch it to the document.
	const createCustomEvent = () => {
		// Create a new CustomEvent object with the name 'UAGBQABEditor'.
		const loadQABEditor = new CustomEvent( 'UAGBQABEditor', {
			// Set the event detail to include the toggleStatus property with a value of 'enabled'.
			// eslint-disable-line no-undef
			detail: { toggleStatus: 'enabled' },
		} );

		// Dispatch the event to the document.
		document?.dispatchEvent( loadQABEditor );
	};

	// Use the useEffect hook to create the custom event when the post ID changes.
	useEffect( () => {
		// Create the custom event.
		createCustomEvent();
	},[postId] )
	
	// Return null to indicate that this component does not render anything.
	return null;
};

domReady( () => {

	// Append a div to the body to render the React App.
	const blankDiv = document.createElement( 'div' );
	document.body.appendChild( blankDiv );
	createRoot( blankDiv ).render( <AddEventCommandForQAB /> );

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
		root.render( <Sidebar /> );
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