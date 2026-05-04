import { createRoot } from '@wordpress/element';
import App from '@/App';
import '@/style.scss'; // Ensure styles are imported

// Find the root element in the WordPress page where the app will be rendered
const rootElement = document.querySelector( '.one-onboarding' );

// Ensure the root element exists before rendering
if ( rootElement ) {
	// Create a root and render the App component
	const root = createRoot( rootElement );
	root.render( <App /> );
}
