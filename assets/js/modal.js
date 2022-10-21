document.addEventListener( 'UAGModalEditor', function( e ) {
    UAGBModal.init( '.uagb-block-' + e.detail.block_id, e.detail.preview, e.detail.device_type );
} );

window.UAGBModal = {
    
	init( mainSelector, previewModal, deviceType = 'desktop' ) {

        let document_element = document;

        if( 'desktop' !== deviceType ) {
            const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
            const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

            if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

                const preview = tabletPreview[0] || mobilePreview[0];
        
                let iframe = false;
        
                if ( preview ) {
                    iframe = preview.getElementsByTagName( 'iframe' )[0];
                }
        
                const iframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;
        
                if ( iframeDocument ) {
                    document_element = iframeDocument;
                }
            }
        
        }
        
        const modalWrapper = document_element.querySelector(
            mainSelector
        );

        if( typeof modalWrapper !== 'undefined' && modalWrapper ) {

            const modalTrigger = modalWrapper.querySelector( '.uagb-modal-trigger' );

            if( 'disabled' === previewModal ) {
                modalTrigger.style.pointerEvents = 'none';
            }

            if( typeof modalTrigger !== 'undefined' && modalTrigger && 'enabled' === previewModal ) {

                modalTrigger.style.pointerEvents = 'auto';

                const innerModal = modalWrapper.querySelector( '.uagb-modal-popup' );

                modalTrigger.addEventListener(
                    'click',
                    function () {

                        if ( typeof innerModal !== 'undefined' && ! innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.add( 'active' );

                            const bodyWrap = document_element.querySelector( 'body' );
                            
                            if ( typeof bodyWrap !== 'undefined' && ! bodyWrap.classList.contains( 'hide-scroll' ) ) {
                                bodyWrap.classList.add( 'hide-scroll' );
                            }
                        }
                    }
                )              

                const closeModal = modalWrapper.querySelector( '.uagb-modal-popup-close' );

                closeModal.addEventListener(
                    'click',
                    function () {
                        if ( typeof innerModal !== 'undefined' && innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.remove( 'active' );
                        }
                    }
                );

                innerModal.addEventListener(
                    'click',
                    function ( e ) {
                        const closeOverlayClick = modalWrapper.dataset.overlayclick;

                        if ( 'enable' === closeOverlayClick && innerModal.classList.contains( 'active' ) && ! innerModal.querySelector( '.uagb-modal-popup-wrap' ).contains( e.target ) ) {
                            innerModal.classList.remove( 'active' );
                        }
                    }
                )              

                document.addEventListener( 'keyup', function( e ) {
                    const closeOnEsc = modalWrapper.dataset.escpress;
                    if ( 27 === e.keyCode && 'enable' === closeOnEsc ) {
                        if ( typeof innerModal !== 'undefined' && innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.remove( 'active' );
                        }
                    }
                } );
            }
        }
	},
};