UAGBAnimation = { // eslint-disable-line no-undef
	elements: {},
	init( data = {} ) {
        console.log( data );
	},
	getDefaultElements( mainSelector ) {
		const blockWrapper = this.getElement( mainSelector );
		return {
			blockWrapper
		};
	},
	getElement( selector, childSelector = null ) {
		let domElement = document.querySelector( selector );
		if ( domElement ) {
			if ( childSelector ) {
				return domElement.querySelector( childSelector );
			}
		} else {
			const editorCanvas = document.querySelector(
				'iframe[name="editor-canvas"]'
			);
			if ( editorCanvas && editorCanvas.contentDocument ) {
				domElement = editorCanvas.contentDocument.querySelector(
					selector
				);
				if ( childSelector ) {
					return ( domElement = domElement.querySelector(
						childSelector
					) );
				}
			}
		}
		return domElement;
	},
};
