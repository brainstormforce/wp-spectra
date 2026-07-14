const getEditorDocument = () => {
	const editorIframe = document.querySelector( 'iframe[name="editor-canvas"]' );
	return editorIframe?.contentDocument || document;
};

const maybeGetColorForVariable = ( color ) => {
	// This external condition handles the following color format:
	// `var(--paletteColor7)`
	if ( color && color.includes( 'var' ) ) {
		const currentDocument = getEditorDocument();
		const style = currentDocument.defaultView.getComputedStyle( currentDocument.body );

		// Slice off `var(` and the slice off the `)` bracket at the end.
		color = color.slice( 4 ).slice( 0, -1 );

		// This nested condition handles the following color format:
		// `var(--paletteColor7, #FBFBFB)`
		if ( color.includes( ',' ) ) {
			color = color.split( ',' ).pop().trim();

			return color;
		}

		color = style.getPropertyValue( color ).trim();
	}
	return color;
};

export default maybeGetColorForVariable;
