
const slintedLines = ( props ) => {


		// Desktop.
		const element = document.getElementById( 'block-' + props.clientId	);

		if ( null !== element && undefined !== element ) {
            const desktop = element.querySelector( '.uagb-editor-preview-mode-desktop' ); 
            if ( null !== desktop && undefined !== desktop ) {

                if( props.attributes.UAGHideDesktop ) {
                    desktop.style.background = 'grey';
                } else {
                    desktop.style.background = '';
                }
            }

		}
        const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
        const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
    
        if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

            const preview = tabletPreview[0] || mobilePreview[0];

            let iframe = false;

            if ( preview ) {
                iframe = preview.getElementsByTagName( 'iframe' )[0];
            }

            const iframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;

            if ( ! iframe || ! iframeDocument ) {
                return;
            }
            const $style = document.createElement( 'style' );
            $style.setAttribute(
                'id',
                props.clientId
            );

            // Dynamic CSS.
            iframeDocument.head.appendChild( $style ); 
            const iframeElement = iframeDocument.getElementById(
                props.clientId
            );
           
            if( props.attributes.UAGHideTablet ) {
                
                iframeElement.innerHTML = '#block-' + props.clientId + ' > .uagb-editor-preview-mode-tablet{background:grey;}';
            } else {
                iframeElement.innerHTML = '';
            }
        
            if( props.attributes.UAGHideMobile ) {
                iframeElement.innerHTML = '#block-' + props.clientId + ' > .uagb-editor-preview-mode-mobile{background:grey;}';
            } else {
                iframeElement.innerHTML = '';
            }
            
        }
	
}

export default slintedLines;

