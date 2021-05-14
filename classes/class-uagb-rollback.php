<?php
/**
 * UAGB Rollback.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * UAG Rollback.
 *
 * UAG Rollback. handler class is responsible for rolling back UAG to
 * previous version.
 *
 * @since x.x.x
 */
class UAGB_Rollback {

	/**
	 * Package URL.
	 *
	 * Holds the package URL.
	 *
	 * @since x.x.x
	 * @access protected
	 *
	 * @var string Package URL.
	 */
	protected $package_url;

	/**
	 * Version.
	 *
	 * Holds the version.
	 *
	 * @since x.x.x
	 * @access protected
	 *
	 * @var string Package URL.
	 */
	protected $version;

	/**
	 * Plugin name.
	 *
	 * Holds the plugin name.
	 *
	 * @since x.x.x
	 * @access protected
	 *
	 * @var string Plugin name.
	 */
	protected $plugin_name;

	/**
	 * Plugin slug.
	 *
	 * Holds the plugin slug.
	 *
	 * @since x.x.x
	 * @access protected
	 *
	 * @var string Plugin slug.
	 */
	protected $plugin_slug;

	/**
	 * UAG Rollback constructor.
	 *
	 * Initializing UAG Rollback.
	 *
	 * @since x.x.x
	 * @access public
	 *
	 * @param array $args Optional. UAGB Rollback arguments. Default is an empty array.
	 */
	public function __construct( $args = array() ) {
		foreach ( $args as $key => $value ) {
			$this->{$key} = $value;
		}
	}

	/**
	 * Print inline style.
	 *
	 * Add an inline CSS to the UAG Rollback page.
	 *
	 * @since x.x.x
	 * @access private
	 */
	private function print_inline_style() {
		?>
		<style>
			.wrap {
				overflow: hidden;
				max-width: 850px;
				margin: auto;
				font-family: Courier, monospace;
			}

			h1 {
				background: #D30C5C;
				text-align: center;
				color: #fff !important;
				padding: 70px !important;
				text-transform: uppercase;
				letter-spacing: 1px;
			}

			h1 img {
				max-width: 300px;
				display: block;
				margin: auto auto 50px;
			}
		</style>
		<?php
	}

	/**
	 * Apply package.
	 *
	 * Change the plugin data when WordPress checks for updates. This method
	 * modifies package data to update the plugin from a specific URL containing
	 * the version package.
	 *
	 * @since x.x.x
	 * @access protected
	 */
	protected function apply_package() {
		$update_plugins = get_site_transient( 'update_plugins' );
		if ( ! is_object( $update_plugins ) ) {
			$update_plugins = new \stdClass();
		}

		$plugin_info              = new \stdClass();
		$plugin_info->new_version = $this->version;
		$plugin_info->slug        = $this->plugin_slug;
		$plugin_info->package     = $this->package_url;
		$plugin_info->url         = 'https://ultimategutenberg.com/';

		$update_plugins->response[ $this->plugin_name ] = $plugin_info;

		set_site_transient( 'update_plugins', $update_plugins );
	}

	/**
	 * Upgrade.
	 *
	 * Run WordPress upgrade to UAGB Rollback to previous version.
	 *
	 * @since x.x.x
	 * @access protected
	 */
	protected function upgrade() {

		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

		$upgrader_args = array(
			'url'    => 'update.php?action=upgrade-plugin&plugin=' . rawurlencode( $this->plugin_name ),
			'plugin' => $this->plugin_name,
			'nonce'  => 'upgrade-plugin_' . $this->plugin_name,
			'title'  => __( 'Ultimate Addons for Gutenberg Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
		);

		$this->print_inline_style();

		$upgrader = new \Plugin_Upgrader( new \Plugin_Upgrader_Skin( $upgrader_args ) );
		$upgrader->upgrade( $this->plugin_name );
	}

	/**
	 * Run.
	 *
	 * UAGB_Rollback Elementor to previous versions.
	 *
	 * @since x.x.x
	 * @access public
	 */
	public function run() {
		$this->apply_package();
		$this->upgrade();
	}
}
