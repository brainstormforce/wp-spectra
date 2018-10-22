<?php
/**
 * UAEL Module Manager.
 *
 * @package UAEL
 */

namespace UltimateElementor;

use UltimateElementor\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Module_Manager.
 */
class Module_Manager {

	/**
	 * Member Variable
	 *
	 * @var modules.
	 */
	private $_modules = [];

	/**
	 * Register Modules.
	 *
	 * @since 0.0.1
	 */
	public function register_modules() {

		$all_modules = [
			/* Control */
			'query-post',
			/* Widgets */
			'headings',
			'gf-styler',
			'content-toggle',
			'caf-styler',
			'ba-slider',
			'business-hours',
			'content-toggle',
			'cf-styler',
			'gf-styler',
			'google-map',
			'image-gallery',
			'infobox',
			'modal-popup',
			'buttons',
			'price-table',
			'price-list',
			'table',
			'woocommerce',
			'timeline',
			'video',
			'posts',
			'video-gallery',
		];

		foreach ( $all_modules as $module_name ) {

			$class_name = str_replace( '-', ' ', $module_name );

			$class_name = str_replace( ' ', '', ucwords( $class_name ) );

			$class_name = __NAMESPACE__ . '\\Modules\\' . $class_name . '\Module';

			if ( $class_name::is_enable() ) {
				$this->modules[ $module_name ] = $class_name::instance();
			}
		}
	}

	/**
	 * Get Modules.
	 *
	 * @param string $module_name Module Name.
	 *
	 * @since 0.0.1
	 *
	 * @return Module_Base|Module_Base[]
	 */
	public function get_modules( $module_name = null ) {
		if ( $module_name ) {
			if ( isset( $this->modules[ $module_name ] ) ) {
				return $this->modules[ $module_name ];
			}
			return null;
		}

		return $this->_modules;
	}

	/**
	 * Required Files.
	 *
	 * @since 0.0.1
	 */
	private function require_files() {
		require( UAEL_DIR . 'base/module-base.php' );
	}

	/**
	 * Constructor.
	 */
	public function __construct() {

		$this->require_files();
		$this->register_modules();
	}
}
