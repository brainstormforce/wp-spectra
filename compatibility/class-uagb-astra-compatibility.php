<?php
/**
 * Astra compatibility
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Astra_Compatibility.
 */
class UAGB_Astra_Compatibility {

	/**
	 * Member Variable
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 */
	public function __construct() {

		$astra_settings = ( defined( 'ASTRA_THEME_SETTINGS' ) ) ? get_option( ASTRA_THEME_SETTINGS ) : '';

		if ( empty( $astra_settings['load-google-fonts-locally'] ) || false === $astra_settings['load-google-fonts-locally'] ) {

			// Disabled uag fonts.
			add_filter( 'uagb_enqueue_google_fonts', '__return_false' );

			// Add uag fonts in astra.
			add_filter( 'astra_google_fonts_selected', array( $this, 'add_google_fonts_in_astra' ) );
		}
	}

	/**
	 * This functions adds UAG Google Fonts in Astra filter to load a common Google Font File for both UAG & Astra.
	 *
	 * @param array $astra_fonts Astra Fonts Object.
	 *
	 * @since x.x.x
	 */
	public function add_google_fonts_in_astra( $astra_fonts ) {

		global $post;

		if ( $post ) {

			$google_fonts = uagb_get_post_assets( $post->ID )->get_fonts();

			if ( is_array( $google_fonts ) && ! empty( $google_fonts ) ) {

				foreach ( $google_fonts as $key => $gfont_values ) {

					if ( isset( $gfont_values['fontfamily'] ) && isset( $gfont_values['fontvariants'] ) ) {

						$astra_fonts[ $gfont_values['fontfamily'] ] = $gfont_values['fontvariants'];
					}
				}
			}
		}

		return $astra_fonts;
	}
}

/**
 *  Prepare if class 'UAGB_Astra_Compatibility' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Astra_Compatibility::get_instance();
