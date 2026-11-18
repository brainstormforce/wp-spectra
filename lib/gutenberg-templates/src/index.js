// Internal dependencies.
import Container from './components/layout/container';
import { createRoot } from '@wordpress/element';
import { getFromSessionStorage } from './utils/helpers';
import EventEmitter from './utils/custom-event-emitter';
import './store/index';
import './style.scss';

document.addEventListener( 'DOMContentLoaded', add_starter_templates_button );
let opened = false;
let root = null;
const blockImport = getFromSessionStorage( 'ast-import' );

const siteEditorDiv = document.getElementById( 'site-editor' );

export function update_url() {
	const currentURL = new URL( window.location.href );
	[
		'ast_action',
		'token',
		'nonce',
		'sc_order',
		'credit_token',
		'email',
	].forEach( ( param ) => {
		if ( currentURL.searchParams.has( param ) ) {
			currentURL.searchParams.delete( param );
		}
	} );
	const updatedURL = currentURL.toString();
	window.history.replaceState( {}, '', updatedURL );
}

function add_starter_templates_button() {
	wp.data.subscribe( function () {
		setTimeout( function () {
			add_block_templates_button();
			if ( ! root ) {
				add_block_templates_modal_popup();
			}
			checkAndAutoOpenDesignLibrary();
		}, 100 );

		if (
			( ast_block_template_vars.open_ai_auth ||
				ast_block_template_vars.credit_purchased ) &&
			! opened &&
			! blockImport
		) {
			const buttonWrapper = document.getElementById(
				'ast-block-templates-button'
			);
			if ( buttonWrapper ) {
				setTimeout( () => {
					if ( ! opened ) {
						buttonWrapper.click();
						update_url();
						if (
							ast_block_template_vars.show_onboarding &&
							ast_block_template_vars.open_ai_auth
						) {
							EventEmitter.emit( 'open-onboarding-ai' );
						}
						opened = true;
					}
				}, 400 );
			}
		}
	} );
}

function add_block_templates_button() {
	if (
		! siteEditorDiv &&
		! document.querySelector( '.edit-post-header-toolbar' )
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

	let container = document.querySelector( '.edit-post-header-toolbar' );
	if ( container ) {
	} else {
		container = document.querySelector(
			'.edit-site-header-edit-mode__start'
		);
	}
	container?.appendChild( buttonWrapper );
}

function add_block_templates_modal_popup() {
	if (
		siteEditorDiv &&
		! document.getElementById( 'ast-block-templates-button-wrap' )
	) {
		return null;
	}
	const modalElement = document.getElementById(
		'ast-block-templates-modal-root'
	);
	if (
		document.getElementById( 'ast-block-templates-button' ) &&
		modalElement
	) {
		return null;
	}

	// Modal root.
	const modalRoot = document.createElement( 'div' );
	modalRoot.id = 'ast-block-templates-modal-root';
	modalRoot.classList.add( 'gt-library-styles' );

	// Add modal popup markup.
	const modal = document.createElement( 'div' );
	modal.id = 'ast-block-templates-modal-wrap';
	modal.classList.add(
		ast_block_template_vars.popup_class,
		...[ 'p-10', 'backdrop-blur-sm', 'bg-border-secondary' ]
	);
	modal.innerHTML = `<div id="ast-block-templates-modal" class="rounded-lg spectra-ai"></div>`;

	if ( ! modalElement ) {
		modalRoot.appendChild( modal );
		document.body.appendChild( modalRoot );
	}

	const astTemplateModal = document.getElementById(
		'ast-block-templates-modal'
	);
	if ( astTemplateModal ) {
		root = createRoot( astTemplateModal );
		root.render( <Container /> );
	}
}

/**
 * Check if we should auto-open the design library for new pages.
 *
 * @since x.x.x
 */
function checkAndAutoOpenDesignLibrary() {
	// Only proceed if auto-open is enabled and we haven't already opened.
	if ( ! ast_block_template_vars.auto_open_design_library || opened ) {
		return;
	}

	try {
		// Get current post information.
		const coreEditor = wp.data.select( 'core/editor' );
		const postId = coreEditor?.getCurrentPostId();
		const postStatus = coreEditor?.getCurrentPostAttribute( 'status' );
		const postType = coreEditor?.getCurrentPostType();

		// Check if this is a new page (auto-draft status).
		const isNewPage =
			postId && postStatus === 'auto-draft' && postType === 'page';

		if ( isNewPage ) {
			// Dismiss the WordPress Starter Patterns modal if present.
			// Scope the selector to the WP components modal to avoid closing third-party modals.
			let attempts = 0;
			const maxAttempts = 10;
			const interval = setInterval( () => {
				attempts++;
				const closeBtn = document.querySelector(
					'.components-modal__frame .components-modal__header button'
				);

				if ( closeBtn ) {
					closeBtn.click();
					clearInterval( interval );
				} else if ( attempts >= maxAttempts ) {
					clearInterval( interval );
				}
			}, 1000 );

			// Open the Design Library with a delay to avoid conflicts.
			const buttonWrapper = document.getElementById(
				'ast-block-templates-button'
			);
			if ( buttonWrapper ) {
				setTimeout( () => {
					if ( ! opened ) {
						buttonWrapper.click();
						opened = true;
					}
				}, 800 );
			}
		}
	} catch ( error ) {
		// Silently fail if editor data isn't available yet.
	}
}
