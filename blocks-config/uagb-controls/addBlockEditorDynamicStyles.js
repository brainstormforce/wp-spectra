const addBlockEditorDynamicStyles = ( styleTagId, styling ) => {

    // Static CSS.

    const editorStaticCSSStylesTag = document.getElementById( 'uagb-editor-styles' );
    let cloneEditorStaticCSSStylesTag = false;

    if ( editorStaticCSSStylesTag ) {

        cloneEditorStaticCSSStylesTag = editorStaticCSSStylesTag.cloneNode( true );
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

        let iframeElement = iframeDocument.getElementById(
            styleTagId
        );
        if ( null === iframeElement || undefined === iframeElement ) {

            const $style = document.createElement( 'style' );
            $style.setAttribute(
                'id',
                styleTagId
                );

            // Static CSS.
            if ( cloneEditorStaticCSSStylesTag ) {
                iframeDocument.head.appendChild( cloneEditorStaticCSSStylesTag );
            }

            // Slick CSS.
            if ( cloneSlickStaticCSSStylesTag ) {
                iframeDocument.head.appendChild( cloneSlickStaticCSSStylesTag );
            }

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
}

export default addBlockEditorDynamicStyles;
