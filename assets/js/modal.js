document.addEventListener( 'UAGModalEditor', function( e ) {
	UAGBModal.init( '.uagb-block-' + e.detail.block_id, e.detail.preview );
} );

window.UAGBModal = {
    
	init( mainSelector, previewModal ) {

        console.log( previewModal );

		const modalWrapper = document.querySelector(
            mainSelector
        );

        if( typeof modalWrapper !== 'undefined' && modalWrapper ) {

            const modalTrigger = modalWrapper.querySelector( '.uagb-modal-trigger' );

            if( 'disabled' === previewModal ) {
                modalTrigger.style.pointerEvents = 'none';
            }

            if( typeof modalTrigger !== 'undefined' && modalTrigger && 'enabled' === previewModal ) {

			    const innerModal = modalWrapper.querySelector( '.uagb-modal-popup' );

                modalTrigger.addEventListener(
                    'click',
                    function () {
                        if ( typeof innerModal !== 'undefined' && ! innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.add( 'active' );

                            const bodyWrap = document.querySelector( 'body' );
                            
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
            }
		}

	},
};