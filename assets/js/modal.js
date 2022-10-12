
window.UAGBModal = {
    
	init( mainSelector ) {

		var modalWrapper = document.querySelector(
            mainSelector
        );
        console.log( "===============================================" );

        if( typeof modalWrapper !== 'undefined' && modalWrapper ) {
            var modalTrigger = document.querySelector( '.uagb-modal-trigger' );

            if( typeof modalTrigger !== 'undefined' && modalTrigger ) {

			    var innerModal = document.querySelector( '.uagb-modal-popup' );

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
                );

			    var closeModal = document.querySelector( '.uagb-modal-popup-close' );

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