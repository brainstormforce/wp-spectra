const { post } = wp.ajax;
const { parse } = wp.blocks;

import { success, log, error } from './logger';

let importer = (
	apiUrl,
	insertBlocks,
	onSetTogglePopup,
	insertIndex,
	insertClientID
) => {
	post({
		action: 'gutenberg_templates_importer',
		api_uri: apiUrl,
		_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
	})
		.done((response) => {
			log('done', response);

			importPageBlock(response,insertIndex,insertClientID, insertBlocks, onSetTogglePopup);			
		})
		.fail((response) => {
			error('fail', response);
		});
};

function importPageBlock( response,insertIndex, insertClientID, insertBlocks,onSetTogglePopup ) {
	post({
		action: 'gutenberg_templates_import_block',
		content: response,
		_ajax_nonce: GutenbergTemplatesVars._ajax_nonce,
	})
	.done((response) => {
		/**
		 * @todo Try to use `setStartImport(false)` instead of `startImport = false`
		 */
		// setStartImport(false);
		//startImport = false;

		console.log('done', response);
		insertBlocks(parse(response), insertIndex, insertClientID);
		onSetTogglePopup();
		document
			.getElementById('gutenberg-templates-modal-wrap')
			.classList.remove('open');
		document.body.classList.remove(
			'gutenberg-templates-modal-open'
		);
		console.log('Imported Template..');
	})
	.fail((response) => {
		console.log('fail', response);
	});
}

export default importer;
