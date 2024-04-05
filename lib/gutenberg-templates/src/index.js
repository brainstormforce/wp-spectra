// Internal dependencies.
import Container from './components/layout/container';
import { createRoot } from '@wordpress/element';
import { subscribe } from '@wordpress/data';
import { getFromSessionStorage } from './utils/helpers';
import EventEmitter from './utils/custom-event-emitter';
import domReady from '@wordpress/dom-ready';
import './gutenberg-control.js';
import './store/index';
import './style.scss';

// document.addEventListener( 'DOMContentLoaded', add_starter_templates_button );
let opened = false;
let root = null;
const blockImport = getFromSessionStorage( 'ast-import' );

const siteEditorDiv = document.getElementById( 'site-editor' );
function add_starter_templates_button() {
	subscribe( function () {
		setTimeout( function () {
			if ( ! root ) {
				// add_block_templates_button();
				add_block_templates_modal_popup();
			}
		}, 5 );

		if ( ( ast_block_template_vars.open_ai_auth || ast_block_template_vars.credit_purchased ) && ! opened && ! blockImport ) {
			const buttonWrapper = document.getElementById( 'ast-block-templates-button' );
			if ( buttonWrapper ) {
			  setTimeout( () => {
					if ( ! opened ) {
						buttonWrapper.click();

						const currentURL = new URL( window.location.href );
						[ 'ast_action', 'token', 'nonce', 'sc_order', 'credit_token', 'email' ].forEach( ( param ) => {
							if ( currentURL.searchParams.has( param ) ) {
								currentURL.searchParams.delete( param );
							}
						} );
						const updatedURL = currentURL.toString();
						window.history.replaceState( {}, '', updatedURL );
						if ( ast_block_template_vars.show_onboarding && ast_block_template_vars.open_ai_auth ) {
							EventEmitter.emit( 'open-onboarding-ai' );
						}
						opened = true;
					}
			  }, 400 );
			}
		  }
	} );
}

/* function add_block_templates_button() {
	if (
		! siteEditorDiv &&
		! document.querySelector( '#editor .edit-post-header-toolbar' )
	) {
		return null;
	}
	if ( document.querySelector( '#ast-block-templates-button-wrap' ) ) {
		return null;
	}

	if ( ast_block_template_vars.is_white_label ) {
		return null;
	}

	const buttonWrapper = document.createElement( 'div' );
	buttonWrapper.id = 'ast-block-templates-button-wrap';
	if ( siteEditorDiv ) {
		document
			.querySelector( '.edit-site-header-edit-mode__toolbar' )
			?.appendChild( buttonWrapper );
	} else {
		document
			.querySelector( '#editor .edit-post-header-toolbar' )
			?.appendChild( buttonWrapper );
	}
} */

function add_block_templates_modal_popup() {
	if ( siteEditorDiv && ! document.getElementsByClassName( 'is-edit-mode' )[ 0 ] ) {
		return null;
	}
	if (
		siteEditorDiv &&
		! document.getElementById( 'ast-block-templates-button-wrap' )
	) {
		return null;
	}
	const modalElement = document.getElementById(
		'ast-block-templates-modal-wrap'
	);
	if ( document.getElementById( 'ast-block-templates-button' ) && modalElement ) {
		return null;
	}

	if ( modalElement ) {
		return null;
	}

	// Add modal popup markup.
	const modal = document.createElement( 'div' );
	modal.id = 'ast-block-templates-modal-wrap';
	modal.classList.add( ast_block_template_vars.popup_class, ...[ 'p-10', 'backdrop-blur-sm', 'bg-border-secondary' ] );
	modal.innerHTML = `<div id="ast-block-templates-modal" class="rounded-lg"></div>`;

	if ( ! modalElement ) {
		document.body.appendChild( modal );
	}

	const astTemplateModal = document.getElementById( 'ast-block-templates-modal' );
	if ( astTemplateModal ) {
		root = createRoot( astTemplateModal );
		root.render(
			<Container />
		);
	}
}

domReady( add_starter_templates_button );
