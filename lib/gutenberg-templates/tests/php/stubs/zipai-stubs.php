<?php

namespace ZipAI\Classes {
	class Zip_Ai_Helpers{

		/**
		 * Get the Zip AI Settings.
		 *
		 * If used with a key, it will return that specific setting.
		 * If used without a key, it will return the entire settings array.
		 *
		 * @param string $key The setting key.
		 * @param mixed  $default The default value to return if the setting is not found.
		 * @since 2.0.0
		 * @return mixed|array The setting value, or the default.
		 */
		public static function get_zip_ai_setting( $key = '', $default = array() ) {}

		/**
		 * Encrypt data using base64.
		 *
		 * @param string $input The input string which needs to be encrypted.
		 * @since 2.0.0
		 * @return string The encrypted string.
		 */
		public static function encrypt( $input ) {}

		/**
		 * Decrypt data using base64.
		 *
		 * @param string $input The input string which needs to be decrypted.
		 * @since 2.0.0
		 * @return string The decrypted string.
		 */
		public static function decrypt( $input ) {}

		/**
		 * This helper function returns credit details.
		 *
		 * @since 2.0.0
		 * @return array
		 */
		public static function get_credit_details() {}
	}
}

