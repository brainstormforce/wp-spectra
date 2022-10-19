document.addEventListener( 'UAGModalEditor', function( e ) {
	UAGBModal.init( '.uagb-block-' + e.detail.block_id );
});

window.UAGBModal = {
    
	init( mainSelector ) {

		var modalWrapper = document.querySelector(
            mainSelector
        );

        console.log( modalWrapper );

        if( typeof modalWrapper !== 'undefined' && modalWrapper ) {
            var modalTrigger = modalWrapper.querySelector( '.uagb-modal-trigger' );

            if( typeof modalTrigger !== 'undefined' && modalTrigger ) {

			    var innerModal = modalWrapper.querySelector( '.uagb-modal-popup' );

                modalTrigger.addEventListener(
                    'click',
                    function ( e ) {
                        if ( ! innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.add( 'active' );

                            var bodyWrap = document.querySelector( 'body' );
                            
                            if ( ! bodyWrap.classList.contains( 'hide-scroll' ) ) {
                                bodyWrap.classList.add( 'hide-scroll' );
                            }
                        }
                    }
                )

			    var closeModal = modalWrapper.querySelector( '.uagb-modal-popup-close' );

                closeModal.addEventListener(
                    'click',
                    function ( e ) {
                        if ( innerModal.classList.contains( 'active' ) ) {
                            innerModal.classList.remove( 'active' );
                        }
                    }
                );
            }
		}

	},
};