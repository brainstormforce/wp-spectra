<?php

namespace WPB {
    /**
     * Loader
     *
     * @since X.X.X
     */
    class Loader
    {
        /**
         * Initiator
         *
         * @since X.X.X
         * @return self initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Autoload classes.
         *
         * @param string $class class name.
         */
        public function autoload($class)
        {
        }
        /**
         * Constructor
         *
         * @since X.X.X
         */
        public function __construct()
        {
        }
        /**
         * Load Plugin Text Domain.
         * This will load the translation textdomain depending on the file priorities.
         *      1. Global Languages /wp-content/languages/one-onboarding/ folder
         *      2. Local directory /wp-content/plugins/one-onboarding/languages/ folder
         *
         * @since X.X.X
         * @return void
         */
        public function load_textdomain()
        {
        }
    }
}
namespace {
    /**
     * Plugin Name: One Onboarding
     * Description: A library for onboarding flow for BSF products like Astra, Spectra, and more.
     * Author: Brainstorm Force
     * Version: 1.0.0
     * License: GPL v2
     * Text Domain: one-onboarding
     *
     * @package One_Onboarding
     */
    /**
     * Set constants
     */
    \define('WPB_FILE', __FILE__);
    \define('WPB_BASE', \plugin_basename(\WPB_FILE));
    \define('WPB_DIR', \plugin_dir_path(\WPB_FILE));
    \define('WPB_URL', \plugins_url('/', \WPB_FILE));
    \define('WPB_VER', '1.0.0');
}