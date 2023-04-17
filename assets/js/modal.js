document.addEventListener( 'UAGModalEditor', function ( e ) {
	UAGBModal.init( '.uagb-block-' + e.detail.block_id, e.detail.device_type, true );
} );

window.UAGBModal = {
	init( mainSelector, deviceType, isAdmin ) {
		let document_element = document;
		const siteEditTheme = document.getElementsByClassName( 'edit-site' );

		if ( deviceType && 'desktop' !== deviceType ) {
			const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
			const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

			if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {
				const preview = tabletPreview[ 0 ] || mobilePreview[ 0 ];

				let iframe = false;

				if ( preview ) {
					iframe = preview.getElementsByTagName( 'iframe' )[ 0 ];
				}

				const iframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;

				if ( iframeDocument ) {
					document_element = iframeDocument;
				}
			}
		}
		if ( siteEditTheme?.length !== 0 ) {
			const desktopIframe = siteEditTheme[ 0 ].getElementsByTagName( 'iframe' )[ 0 ];
			if ( 0 !== desktopIframe?.length ) {
				document_element = desktopIframe?.contentWindow.document || desktopIframe?.contentDocument;
			}
		}

		const modalWrapper = document_element.querySelector( mainSelector );

		if ( typeof modalWrapper !== 'undefined' && modalWrapper ) {
			const modalTrigger = modalWrapper.querySelector( '.uagb-modal-trigger' );
			const closeOverlayClick = modalWrapper.dataset.overlayclick;
			if ( typeof modalTrigger !== 'undefined' && modalTrigger ) {
				modalTrigger.style.pointerEvents = 'auto';

				const innerModal = modalWrapper.querySelector( '.uagb-modal-popup' );

				if ( null !== innerModal && ! isAdmin ) {
					document.body?.appendChild( innerModal );
				}
				const bodyWrap = document_element.querySelector( 'body' );
				modalTrigger.addEventListener( 'click', function ( e ) {
					e.preventDefault();
					if ( typeof innerModal !== 'undefined' && ! innerModal.classList.contains( 'active' ) ) {
						innerModal.classList.add( 'active' );
						if (
							typeof bodyWrap !== 'undefined' &&
							! bodyWrap.classList.contains( 'hide-scroll' ) &&
							siteEditTheme?.length === 0 &&
							! bodyWrap.classList.contains( 'wp-admin' )
						) {
							bodyWrap.classList.add( 'hide-scroll' );
						}
					}
				} );

				const closeModal = document_element.querySelector( `${ mainSelector } .uagb-modal-popup-close` );

				closeModal.addEventListener( 'click', function () {
					const modalPopup = document_element.querySelector( `${ mainSelector }.uagb-modal-popup` );
					if ( typeof modalPopup !== 'undefined' && modalPopup.classList.contains( 'active' ) ) {
						modalPopup.classList.remove( 'active' );
					}
					if ( typeof bodyWrap !== 'undefined' && bodyWrap.classList.contains( 'hide-scroll' ) ) {
						UAGBModal.closeModalScrollCheck( bodyWrap );
					}
				} );

				if( 'disable' !== closeOverlayClick ){
					innerModal.addEventListener( 'click', function ( e ) {
						if (
							'enable' === closeOverlayClick &&
							innerModal.classList.contains( 'active' ) &&
							! innerModal.querySelector( '.uagb-modal-popup-wrap' ).contains( e.target )
						) {
							innerModal.classList.remove( 'active' );
						}
						if ( typeof bodyWrap !== 'undefined' && bodyWrap.classList.contains( 'hide-scroll' ) ) {
							UAGBModal.closeModalScrollCheck( bodyWrap );
						}
					} );
				}

				document.addEventListener( 'keyup', function ( e ) {
					const closeOnEsc = modalWrapper.dataset.escpress;
					if ( 27 === e.keyCode && 'enable' === closeOnEsc ) {
						if ( typeof innerModal !== 'undefined' && innerModal.classList.contains( 'active' ) ) {
							innerModal.classList.remove( 'active' );
						}
						if ( typeof bodyWrap !== 'undefined' && bodyWrap.classList.contains( 'hide-scroll' ) ) {
							UAGBModal.closeModalScrollCheck( bodyWrap );
						}
					}
				} );
			}
		}
	},

	// Close the Modal and check if the Scrollbar needs to be reactivated.
	closeModalScrollCheck( bodyWrapper ) {
		const allActiveModals = document.querySelectorAll( '.uagb-modal-popup.active' );
		if ( 0 === allActiveModals.length ) {
			bodyWrapper.classList.remove( 'hide-scroll' );
		}
	},
};
