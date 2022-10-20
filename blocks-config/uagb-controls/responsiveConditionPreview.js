
const responsiveConditionPreview = ( props ) => {
		// Desktop.
		const element = document.getElementById( 'block-' + props.clientId	);

		if ( null !== element && undefined !== element ) {
            const desktop = element.querySelector( '.uagb-editor-preview-mode-desktop' ); 
            const desktopStyle = document.getElementById( props.clientId + '-desktop-hide-block' );
            if ( null === desktopStyle || undefined === desktopStyle ) {

                const $style = document.createElement( 'style' );
                $style.setAttribute(
                    'id',
                    props.clientId + '-desktop-hide-block'
                );
                document.head.appendChild( $style );
            }
            if ( null !== desktop && undefined !== desktop ) {

                if( props.attributes.UAGHideDesktop ) {
                    desktopStyle.innerHTML = '#block-' + props.clientId + ' > .uagb-editor-preview-mode-desktop{ background:repeating-linear-gradient(125deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 2px, transparent 9px); border: 1px solid rgba(0, 0, 0, 0.15); } ';
                    desktopStyle.innerHTML += '#block-' + props.clientId + ' > .uagb-editor-preview-mode-desktop:before{ content: ""; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;  background-color: rgba(255, 255, 255, 0.6); z-index: 9997; } ';
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
            const iframeElement = iframeDocument.getElementById(
                props.clientId + '-hide-block'
            );
            if ( null === iframeElement || undefined === iframeElement ) {

                const $style = document.createElement( 'style' );
                $style.setAttribute(
                    'id',
                    props.clientId + '-hide-block'
                );
                document.head.appendChild( $style );
            }
           
            if( props.attributes.UAGHideTablet ) {
                
                iframeElement.innerHTML += '#block-' + props.clientId + ' > .uagb-editor-preview-mode-tablet{ background:repeating-linear-gradient(125deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 2px, transparent 9px); border: 1px solid rgba(0, 0, 0, 0.15); } ';
                iframeElement.innerHTML += '#block-' + props.clientId + ' > .uagb-editor-preview-mode-tablet:before{ content: ""; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;  background-color: rgba(255, 255, 255, 0.6); z-index: 9997; } ';
            } 
        
            if( props.attributes.UAGHideMobile ) {
                iframeElement.innerHTML += '#block-' + props.clientId + ' > .uagb-editor-preview-mode-mobile{ background:repeating-linear-gradient(125deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 2px, transparent 9px); border: 1px solid rgba(0, 0, 0, 0.15); } ';
                iframeElement.innerHTML += '#block-' + props.clientId + ' > .uagb-editor-preview-mode-mobile:before{ content: ""; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;  background-color: rgba(255, 255, 255, 0.6); z-index: 9997; } ';
         
            } 
            
        }
	
}

export default responsiveConditionPreview;

