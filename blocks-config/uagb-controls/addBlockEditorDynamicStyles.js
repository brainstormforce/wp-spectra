
const addBlockEditorDynamicStyles = ( styleTagId, styling ) => {

	setTimeout( () => {

		// Static Editor CSS.

		const editorStaticCSSStylesTag = document.getElementById( 'uagb-editor-styles' );
		let cloneEditorStaticCSSStylesTag = false;

		if ( editorStaticCSSStylesTag ) {

			cloneEditorStaticCSSStylesTag = editorStaticCSSStylesTag.cloneNode( true );
		}

		// Dashicons Editor CSS.

		const editorDashiconsCSSStylesTag = document.getElementById( 'dashicons-css' );
		let cloneEditorDashiconsCSSStylesTag = false;

		if ( editorDashiconsCSSStylesTag ) {

			cloneEditorDashiconsCSSStylesTag = editorDashiconsCSSStylesTag.cloneNode( true );
		}

		// Dashicons Editor CSS Ends.

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

		// Slick CSS Ends.

		// Block Editor Spacing CSS.
		const blockEditorSpacingCSSStylesTag = document.getElementById( 'uagb-blocks-editor-spacing-style' );
		let cloneBlockEditorSpacingCSSStylesTag = false;

		if ( blockEditorSpacingCSSStylesTag ) {

			cloneBlockEditorSpacingCSSStylesTag = blockEditorSpacingCSSStylesTag.cloneNode( true );
		}

		// Block Editor Spacing CSS Ends.

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
		const twentyTwentyEditorIframe = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );

		if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length || 0 !== twentyTwentyEditorIframe.length ) {

			const preview = tabletPreview[0] || mobilePreview[0];

			let iframe = false;

			if ( 0 !== twentyTwentyEditorIframe.length ) {
				iframe = twentyTwentyEditorIframe[0];
			} else if ( preview ) {
				iframe = preview.getElementsByTagName( 'iframe' )[0];
			}

			const iframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;

			if ( ! iframe || ! iframeDocument ) {
				return;
			}

			// Static CSS.
			if ( cloneStaticCSSStylesTag ) {
				const iframeStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-block-css-css' );
				if ( ! iframeStaticCSSStylesTag ) {
					iframeDocument.head.appendChild( cloneStaticCSSStylesTag );
				}
			}

			// Static Editor CSS.
			if ( cloneEditorStaticCSSStylesTag ) {
				const iframeEditorStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-editor-styles' );
				if ( iframeEditorStaticCSSStylesTag ) {
					iframeDocument.head.removeChild( iframeEditorStaticCSSStylesTag );
				}
				iframeDocument.head.appendChild( cloneEditorStaticCSSStylesTag );
			}

			// Dashicons CSS.
			if ( cloneEditorDashiconsCSSStylesTag ) {
				const iframeEditorDashiconsCSSStylesTag = iframeDocument.getElementById( 'dashicons-css' );
				if ( iframeEditorDashiconsCSSStylesTag ) {
					iframeDocument.head.removeChild( iframeEditorDashiconsCSSStylesTag );
				}
				iframeDocument.head.appendChild( cloneEditorDashiconsCSSStylesTag );
			}

			// Slick CSS.
			if ( cloneSlickStaticCSSStylesTag ) {
				const iframeSlickStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-slick-css-css' );
				if ( ! iframeSlickStaticCSSStylesTag ) {
					iframeDocument.head.appendChild( cloneSlickStaticCSSStylesTag );
				}
			}

			// Block Editor Spacing  CSS.
			if ( cloneBlockEditorSpacingCSSStylesTag ) {
				const iframeBlockEditorSpacingCSSStylesTag = iframeDocument.getElementById( 'uagb-blocks-editor-spacing-style' );
				if ( ! iframeBlockEditorSpacingCSSStylesTag ) {
					iframeDocument.head.appendChild( cloneBlockEditorSpacingCSSStylesTag );
				}
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

