import apiFetch from '@wordpress/api-fetch';

const controls = {
	FETCH_FROM_API( { path } ) {
		return apiFetch( {
			path,
			headers: {
				'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
			},
		} );
	},
};

export default controls;
