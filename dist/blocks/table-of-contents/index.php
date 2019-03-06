<?php
/**
 * Server-side rendering for the Table of Contents.
 *
 * @since   x.x.x
 * @package UAGB
 */

/**
 * Renders the post grid block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since x.x.x
 */
function uagb_toc_callback( $attributes ) {

	ob_start();

	uagb_toc_html( $attributes );
	// Output the post markup.
	return ob_get_clean();
}

/**
 * Renders the post grid block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since x.x.x
 */
function uagb_toc_html( $attributes ) {
	echo 'vrundakansara';
}

/**
 * Registers the `uagb/table-of-contents` block on server.
 *
 * @since x.x.x
 */
function uagb_register_toc() {
	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/table-of-contents',
		array(
			'attributes'      => array(
				'block_id'           => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'smoothScroll'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'smoothScrollOffset' => array(
					'type'    => 'number',
					'default' => 30,
				),
				'considerH1'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'considerH2'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'considerH3'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'considerH4'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'considerH5'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'considerH6'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'counter'            => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'align'              => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'fontSize'           => array(
					'type' => 'number',
				),
			),
			'render_callback' => 'uagb_toc_callback',
		)
	);
}

add_action( 'init', 'uagb_register_toc' );
