const { post } = wp.ajax;

export const block_api_request = ( blockID, blockType ) => post( {
	action: 'ast_block_templates_data_option',
	id: blockID,
	type: blockType,
	_ajax_nonce: ast_block_template_vars._ajax_nonce,
} ).done( ( response ) => response );
