<?php
/**
 * Server-side rendering for the typography component.
 *
 * @since   0.0.1
 * @package UAGB
 */

// Ajax call
function uagb_google_fonts() {
	echo "this is  a function";
	die();
}

add_action( 'wp_ajax_uagb_google_fonts', 'uagb_google_fonts' );
add_action( 'wp_ajax_nopriv_uagb_google_fonts', 'uagb_google_fonts' );

