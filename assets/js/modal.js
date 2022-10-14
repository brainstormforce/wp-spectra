
window.UAGBModal = {
    
	init( mainSelector ) {

		var modalWrapper = document.querySelector(
            mainSelector
        );

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
                )

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

// window.addEventListener( 'load', uagbModalInit );
// window.addEventListener( 'DOMContentLoaded', uagbModalInit );

// function uagbModalInit() {

//     console.log( "Hieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" );

//     let modalWrapper = document.querySelectorAll( '.wp-block-uagb-modal' );

//     console.log( modalWrapper );
//     console.log( "=============================================================" );

// 	if ( modalWrapper.length === 0 ) {
// 		return;
// 	}

// 	for ( const content of modalWrapper ) {

//         const modalTrigger = content.querySelector( '.uagb-modal-trigger' );

//         if( typeof modalTrigger !== 'undefined' && modalTrigger ) {

//             var innerModal = content.querySelector( '.uagb-modal-popup' );

//             modalTrigger.addEventListener(
//                 'click',
//                 function ( e ) {
//                     if ( ! innerModal.classList.contains( 'active' ) ) {
//                         innerModal.classList.add( 'active' );

//                         var bodyWrap = content.querySelector( 'body' );
                        
//                         if ( ! bodyWrap.classList.contains( 'hide-scroll' ) ) {
//                             bodyWrap.classList.add( 'hide-scroll' );
//                         }
//                     }
//                 }
//             )

//             var closeModal = content.querySelector( '.uagb-modal-popup-close' );

//             closeModal.addEventListener(
//                 'click',
//                 function ( e ) {
//                     if ( innerModal.classList.contains( 'active' ) ) {
//                         innerModal.classList.remove( 'active' );
//                     }
//                 }
//             );

//         }
//     }
// }