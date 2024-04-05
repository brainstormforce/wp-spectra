export const activate_plugin = ( plugin ) => new Promise( ( resolve, reject ) => {
	// Activating plugin.
	const formData = new window.FormData();
	formData.append( 'action', 'ast_block_templates_activate_plugin' );
	formData.append( 'init', plugin.init );
	formData.append( 'security', ast_block_template_vars._ajax_nonce );

	wp.apiFetch( {
		url: ast_block_template_vars.ajax_url,
		method: 'POST',
		body: formData,
	} ).then( ( response ) => {
		if ( response.success ) {
			resolve( response );
		} else {
			reject( response );
		}
	} );
} );

export const install_plugin = ( plugin ) => new Promise( ( resolve, reject ) => {
	// @see /wp-admin/js/updates.js
	wp.updates.queue.push( {
		action: 'install-plugin', // Required action.
		data: {
			slug: plugin.slug,
			init: plugin.init,
			name: plugin.name,
			success( response ) {
				resolve( response, plugin );
			},
			error( response ) {
				reject( response, plugin );
			},
		},
	} );

	// Required to set queue.
	wp.updates.queueChecker();
} );
