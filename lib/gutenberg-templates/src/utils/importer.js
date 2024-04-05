import { error } from './logger';
import { savePostIfSpectraInactive } from './functions';

const { post } = wp.ajax;
const { parse } = wp.blocks;

const importer = (
	id,
	insertBlocks,
	onSetTogglePopup,
	insertIndex,
	insertClientID,
) => {
	post( {
		action: 'ast_block_templates_importer',
		id,
		_ajax_nonce: ast_block_template_vars._ajax_nonce,
	} )
		.done( ( response ) => {
			importPageBlock(
				response,
				insertIndex,
				insertClientID,
				insertBlocks,
				onSetTogglePopup,
			);
		} )
		.fail( ( response ) => {
			error( 'fail', response );
		} );
};

function importPageBlock(
	response,
	insertIndex,
	insertClientID,
	insertBlocks,
	onSetTogglePopup,
) {
	post( {
		action: 'ast_block_templates_import_block',
		content: response,
		_ajax_nonce: ast_block_template_vars._ajax_nonce,
	} )
		.done( ( resp ) => {
			/**
			 * @todo Try to use `setStartImport(false)` instead of `startImport = false`
			 */

			insertBlocks( parse( resp ), insertIndex, '', false );
			onSetTogglePopup();
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.remove( 'open' );
			document.body.classList.remove( 'ast-block-templates-modal-open' );
			if ( ast_block_template_vars.spectra_status !== 'active' || ast_block_template_vars.wpforms_status !== 'active' ) {
				savePostIfSpectraInactive();
			}
		} )
		.fail( ( ) => {} );
}

export default importer;
