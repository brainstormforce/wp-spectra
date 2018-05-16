<?php

function advanced_heading_enqueue_block_editor_assets() {

	$dir = dirname( __FILE__ );
	$block_js = 'advanced-heading/block.js';
	$editor_css = 'advanced-heading/editor.css';

	wp_enqueue_script( 'advanced-heading-block', plugins_url( $block_js, __FILE__ ), array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
	), filemtime( "$dir/$block_js" ) );

	wp_enqueue_style( 'advanced-heading-block', plugins_url( $editor_css, __FILE__ ), array(
		'wp-blocks',
	), filemtime( "$dir/$editor_css" ) );
}

add_action( 'enqueue_block_editor_assets', 'advanced_heading_enqueue_block_editor_assets' );


/**
 * Enqueue block editor JavaScript and CSS
 */
function advanced_heading_enueue_scripts()
{
   	$dir 		= dirname( __FILE__ );
	$block_js 	= 'advanced-heading/frontend-block.js';
	$stylePath = 'advanced-heading/style.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'advanced-heading-frontend-js',
        plugins_url( $block_js, __FILE__ ),
        array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ),
        filemtime( "$dir/$block_js" )
    );

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'advanced-heading-css',
        plugins_url( $stylePath, __FILE__),
        array( 'wp-blocks' ),
        filemtime( "$dir/$editor_css" )
    );

}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'advanced_heading_enueue_scripts');