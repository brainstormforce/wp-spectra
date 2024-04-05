import { createPortal, memo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

const StarterTemplatesButton = ( { onSetTogglePopup } ) => {
	return createPortal(
		<button
			onClick={ onSetTogglePopup }
			id="ast-block-templates-button"
			className="button components-button is-primary"
		>
			{ ast_block_template_vars.display_button_logo && '' === ast_block_template_vars.white_label_name ? (
				<img
					src={ 'active' === ast_block_template_vars.astra_sites_status || 'active' === ast_block_template_vars.astra_sites_pro_status ? ast_block_template_vars.st_button_logo : ast_block_template_vars.button_logo }
					className={ `logo ${ ast_block_template_vars.button_class }` }
					alt="Button Logo"
				/>
			) : (
				''
			) }
			{ ast_block_template_vars.white_label_name ? ast_block_template_vars.white_label_name : ast_block_template_vars.button_text }
		</button>,
		document.getElementById( 'ast-block-templates-button-wrap' )
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setTogglePopup } = dispatch( 'ast-block-templates' );
		return {
			onSetTogglePopup: setTogglePopup,
		};
	} )
)( memo( StarterTemplatesButton ) );
