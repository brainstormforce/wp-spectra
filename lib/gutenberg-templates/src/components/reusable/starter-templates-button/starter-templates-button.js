import { memo, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

const StarterTemplatesButton = ( { onSetTogglePopup } ) => {
	const renderButton = () => {
		const wrapper = document.querySelector( '#ast-block-templates-button-wrap' );
		if ( ! wrapper ) {
			return null;
		}

		// Remove existing button if it exists
		const existingButton = document.getElementById( 'ast-block-templates-button' );
		if ( existingButton ) {
			return null;
		}

		// Create new button
		const button = document.createElement( 'button' );
		button.id = 'ast-block-templates-button';
		button.className = 'button button-primary button-large';
		button.onclick = onSetTogglePopup;
		button.innerHTML =
			ast_block_template_vars.display_button_logo &&
			'' === ast_block_template_vars.white_label_name
				? `<img
                src=${
					'active' === ast_block_template_vars.astra_sites_status ||
					'active' === ast_block_template_vars.astra_sites_pro_status
						? ast_block_template_vars.st_button_logo
						: ast_block_template_vars.button_logo
				}
                class="logo ${ ast_block_template_vars.button_class }"
                alt="Button Logo"
            />`
				: '';
		button.innerHTML += ast_block_template_vars.white_label_name
			? '<span class="logo-btn-label">' +
			  ast_block_template_vars.white_label_name +
			  '</span>'
			: '<span class="logo-btn-label">' +
			  ast_block_template_vars.button_text +
			  '</span>';

		// Append new button to wrapper
		wrapper.appendChild( button );
	};

	useEffect( () => {
		wp.data.subscribe( () => {
			setTimeout( () => {
				renderButton();
			}, 100 );
		} );
	}, [] );

	return null;
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setTogglePopup } = dispatch( 'ast-block-templates' );
		return {
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( StarterTemplatesButton ) );
