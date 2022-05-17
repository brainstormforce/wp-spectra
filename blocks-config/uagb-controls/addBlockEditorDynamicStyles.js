const addBlockEditorDynamicStyles = ( styleTagId, styling ) => {

	setTimeout( () => {

		// Static Editor CSS.

		const editorStaticCSSStylesTag = document.getElementById( 'uagb-editor-styles' );
		let cloneEditorStaticCSSStylesTag = false;

		if ( editorStaticCSSStylesTag ) {

			cloneEditorStaticCSSStylesTag = editorStaticCSSStylesTag.cloneNode( true );
		}

		// Static Editor CSS Ends.

		// Static CSS.

		const staticCSSStylesTag = document.getElementById( 'uagb-block-css-css' );
		let cloneStaticCSSStylesTag = false;

		if ( staticCSSStylesTag ) {

			cloneStaticCSSStylesTag = staticCSSStylesTag.cloneNode( true );
		}

		// Static CSS Ends.

		// Slick CSS.
		const slickStaticCSSStylesTag = document.getElementById( 'uagb-slick-css-css' );
		let cloneSlickStaticCSSStylesTag = false;

		if ( slickStaticCSSStylesTag ) {

			cloneSlickStaticCSSStylesTag = slickStaticCSSStylesTag.cloneNode( true );
		}

		// Desktop.
		const element = document.getElementById(
			styleTagId
		);

		if ( null === element || undefined === element ) {

			const $style = document.createElement( 'style' );
			$style.setAttribute(
				'id',
				styleTagId
			);
			$style.innerHTML = styling;
			document.head.appendChild( $style );
		}

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling;
		}
		// Desktop ends.

		// Tablet / Mobile Starts.
		const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
		const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

		if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

			const preview = tabletPreview[0] || mobilePreview[0];

			const iframe = preview.getElementsByTagName( 'iframe' )[0];
			const iframeDocument = iframe.contentWindow.document || iframe.contentDocument;

			// Static CSS.
			if ( cloneStaticCSSStylesTag ) {
				const iframeStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-block-css-css' );
				if ( iframeStaticCSSStylesTag ) {
					iframeDocument.head.removeChild( iframeStaticCSSStylesTag );
				}
				iframeDocument.head.appendChild( cloneStaticCSSStylesTag );
			}

			// Static Editor CSS.
			if ( cloneEditorStaticCSSStylesTag ) {
				const iframeEditorStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-editor-styles' );
				if ( iframeEditorStaticCSSStylesTag ) {
					iframeDocument.head.removeChild( iframeEditorStaticCSSStylesTag );
				}
				iframeDocument.head.appendChild( cloneEditorStaticCSSStylesTag );
			}

			// Slick CSS.
			if ( cloneSlickStaticCSSStylesTag ) {
				const iframeSlickStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-slick-css-css' );
				if ( iframeSlickStaticCSSStylesTag ) {
					iframeDocument.head.removeChild( iframeSlickStaticCSSStylesTag );
				}
				iframeDocument.head.appendChild( cloneSlickStaticCSSStylesTag );
			}

			let iframeElement = iframeDocument.getElementById(
				styleTagId
			);

			if ( null === iframeElement || undefined === iframeElement ) {

				const $style = document.createElement( 'style' );
				$style.setAttribute(
					'id',
					styleTagId
				);

				// Dynamic CSS.
				iframeDocument.head.appendChild( $style );

			}

			iframeElement = iframeDocument.getElementById(
				styleTagId
			);

			if ( null !== iframeElement && undefined !== iframeElement ) {
				iframeElement.innerHTML = styling;
			}
		}
	} );
}

export default addBlockEditorDynamicStyles;
