<?php
// block.php
/*
function riad_render_block_latest_post( $attribites ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 5,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	var_dump("praju");
	var_dump($recent_posts);die();
	$post = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	return sprintf(
		'<a class="wp-block-riad-latest-post" href="%1$s">%2$s</a>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}

register_block_type( 'uagb/timeline', array(
	'render_callback' => 'riad_render_block_latest_post',
) );*/