<?php

namespace One_Onboarding {
    /**
     * Loader
     *
     * @since 1.0.0
     */
    class Loader
    {
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {
        }
        /**
         * Initiator
         *
         * @since 1.0.0
         * @return self initialized object of class.
         */
        public static function get_instance()
        {
        }
        /**
         * Autoload classes.
         *
         * @param string $class class name.
         * @return void
         */
        public function autoload($class): void
        {
        }
        /**
         * Load Plugin
         *
         * @since 1.0.0
         *
         * @return void
         */
        public function load_plugin(): void
        {
        }
        /**
         * Load plugin text domain
         *
         * @since 1.0.0
         *
         * @return void
         */
        public function load_textdomain(): void
        {
        }
        /**
         * Register onboarding path.
         *
         * @param string $path Onboarding library path.
         * @return void
         */
        public static function register($path): void
        {
        }
        /**
         * Determine the latest onboarding path.
         *
         * @return void
         */
        public function load_onboarding(): void
        {
        }
    }
}
namespace {
    /**
     * Get the plugin version.
     *
     * @since 1.0.0
     *
     * @return string
     */
    function one_onboarding_get_plugin_version(): string
    {
    }
    /**
     * Check if the library is in development mode (active as plugin)
     *
     * @since 1.0.0
     *
     * @return bool True if in development mode, false otherwise.
     */
    function one_onboarding_is_development_mode(): bool
    {
    }
    \define('ONE_ONBOARDING_FILE', __FILE__);
    \define('ONE_ONBOARDING_BASE', \plugin_basename(\ONE_ONBOARDING_FILE));
    \define('ONE_ONBOARDING_DIR', \plugin_dir_path(\ONE_ONBOARDING_FILE));
    \define('ONE_ONBOARDING_URL', \plugins_url('/', \ONE_ONBOARDING_FILE));
    \define('ONE_ONBOARDING_VER', '1.0.0');
}