const { post } = wp.ajax;
const { parse } = wp.blocks;

import { savePostIfSpectraInactive } from './functions';
import { getSpectraStatus } from './helpers';
import { error } from './logger';

const importer = (
	apiUrl,
	insertBlocks,
	onSetTogglePopup,
	insertIndex,
	insertClientID,
	onSuccess,
	onError
) => {
	post( {
		action: 'ast_block_templates_kit_importer',
		api_uri: apiUrl,
		_ajax_nonce: ast_block_template_vars._ajax_nonce,
	} )
		.done( ( response ) => {
			importPageBlock(
				response,
				insertIndex,
				insertClientID,
				insertBlocks,
				onSetTogglePopup,
				onSuccess,
				onError
			);
		} )
		.fail( ( response ) => {
			error( 'fail', response );
			if ( typeof onError === 'function' ) {
				onError();
			}
		} );
};

function importPageBlock(
	response,
	insertIndex,
	insertClientID,
	insertBlocks,
	onSetTogglePopup,
	onSuccess,
	onError
) {
	post( {
		action: 'ast_block_templates_import_template_kit',
		content: response,
		_ajax_nonce: ast_block_template_vars._ajax_nonce,
	} )
		.done( ( resp ) => {
			/**
			 * @todo Try to use `setStartImport(false)` instead of `startImport = false`
			 */

			insertBlocks( parse( resp ), insertIndex, insertClientID );
			if ( typeof onSuccess === 'function' ) {
				onSuccess();
			}
			onSetTogglePopup();
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.remove( 'open' );
			document.body.classList.remove( 'ast-block-templates-modal-open' );

			const spectraPluginStatus = getSpectraStatus();
			if (
				spectraPluginStatus.notInstalled ||
				spectraPluginStatus.inactive
			) {
				savePostIfSpectraInactive();
			}
		} )
		.fail( () => {
			if ( typeof onError === 'function' ) {
				onError();
			}
		} );
}

export default importer;
