/**
 * Zip AI React Helpers.
 */

// Format a number to add commas as thousand separators.
export const formatNumber = ( number ) => {
	return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
};

// Convert array of classes to a single string.
export const zipAiClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );

// Function to copy text to the clipboard.
export const copyToClipboard = async ( textToCopy ) => {
	// Navigator clipboard API needs a secure context (https).
	if ( window.navigator.clipboard && window.isSecureContext ) {
		await window.navigator.clipboard.writeText( textToCopy );
	} else {
		// Use the 'out of viewport hidden text area' trick on non-secure/http sites.
		const textArea = document.createElement( 'textarea' );
		textArea.value = textToCopy;

		// Move textarea out of the viewport so it's not visible
		textArea.style.position = 'absolute';
		textArea.style.left = '-999999px';
		textArea.style.opacity = '0';

		document.body.prepend( textArea );
		textArea.select();

		try {
			document.execCommand( 'copy' );
		} catch ( error ) {
			console.error( error ); // eslint-disable-line no-console
		} finally {
			textArea.remove();
		}
	}
};
