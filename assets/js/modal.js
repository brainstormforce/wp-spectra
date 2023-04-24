document.addEventListener( 'UAGModalEditor', function ( e ) {
	UAGBModal.init( '.uagb-block-' + e.detail.block_id, true );
} );

window.UAGBModal = {
	init( mainSelector, isAdmin ) {
		const document_element = UAGBModal._getDocumentElement();
		const modalWrapper = document_element.querySelector( mainSelector );
		const siteEditTheme = document.getElementsByClassName( 'edit-site' );

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
	_getDocumentElement() {
		let document_element = document;
		const getEditorIframe = document.querySelectorAll( 'iframe[name="editor-canvas"]' );
		if( getEditorIframe?.length ){
			const iframeDocument = getEditorIframe?.[0]?.contentWindow?.document || getEditorIframe?.[0]?.contentDocument;
			if ( iframeDocument ) {
				document_element = iframeDocument;
			}
		}
		return document_element;
	},
	// Close the Modal and check if the Scrollbar needs to be reactivated.
	closeModalScrollCheck( bodyWrapper ) {
		const allActiveModals = document.querySelectorAll( '.uagb-modal-popup.active' );
		if ( 0 === allActiveModals.length ) {
			bodyWrapper.classList.remove( 'hide-scroll' );
		}
	},
};
