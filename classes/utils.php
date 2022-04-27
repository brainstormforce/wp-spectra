<?php
/**
 * UAG Utils Functions.
 *
 * @package uagb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Get post assets object.
 *
 * @param int $post_id current step ID.
 * @since x.x.x
 */
function uagb_get_post_assets( $post_id ) {

	if ( ! isset( uagb()->post_assets_objs[ $post_id ] ) ) {

		uagb()->post_assets_objs[ $post_id ] = new UAGB_Post_Assets( $post_id );
	}

	return uagb()->post_assets_objs[ $post_id ];
}
