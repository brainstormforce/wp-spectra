<?php
/**
 * Meta Helper.
 *
 * @package uag
 */

namespace UagAdmin\Inc;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class MetaOps.
 */
class MetaOps {

	/**
	 *  Save Meta fields - Common Function.
	 *
	 * @param int   $post_id post id.
	 * @param array $post_meta options to store.
	 * @return void
	 */
	public static function save_meta_fields( $post_id, $post_meta ) {

		if ( ! ( $post_id && is_array( $post_meta ) ) ) {
			return;
		}

		$allowed_html = array(
			'a'      => array(
				'href' => array(),
			),
			'br'     => array(),
			'strong' => array(),
			'p'      => array(),
			'span'   => array(),
		);

		foreach ( $post_meta as $key => $data ) {

			if ( ! isset( $_POST[ $key ] ) ) { //phpcs:ignore
				continue;
			}

			$meta_value = false;

			// Sanitize values.
			$sanitize_filter = ( isset( $data['sanitize'] ) ) ? $data['sanitize'] : 'FILTER_DEFAULT';

			switch ( $sanitize_filter ) {
				case 'FILTER_SANITIZE_STRING':
					$meta_value = filter_input( INPUT_POST, $key, FILTER_SANITIZE_STRING );
					break;

				case 'FILTER_SANITIZE_URL':
					$meta_value = filter_input( INPUT_POST, $key, FILTER_SANITIZE_URL );
					break;

				case 'FILTER_SANITIZE_NUMBER_INT':
					$meta_value = filter_input( INPUT_POST, $key, FILTER_SANITIZE_NUMBER_INT );
					break;

				case 'FILTER_CARTFLOWS_ARRAY':
					if ( isset( $_POST[ $key ] ) && is_array( $_POST[ $key ] ) ) { //phpcs:ignore
						$meta_value = array_map( 'sanitize_text_field', wp_unslash( $_POST[ $key ] ) ); //phpcs:ignore
					}
					break;

				case 'FILTER_SANITIZE_COLOR':
					// Sanitizes a hex color with #.
					$meta_value = sanitize_hex_color( $_POST[ $key ] ); //phpcs:ignore
					break;

				case 'FILTER_SANITIZE_FONT_FAMILY':
					// FILTER_FLAG_NO_ENCODE_QUOTES - Do not encode the single and double quotes.
					$meta_value = filter_input( INPUT_POST, $key, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES );
					break;

				case 'FILTER_WP_KSES':
					// It allow only tags that are defined in $allowed_html variable.
					$meta_value = wp_kses( $_POST[ $key ], $allowed_html ); // phpcs:ignore
					break;

				case 'FILTER_WP_KSES_POST':
						// wp_kses_post() allow only the same tags that are allowed in WP Posts.
						$meta_value = wp_kses_post( $_POST[ $key ] ); // phpcs:ignore
					break;

				case 'FILTER_CARTFLOWS_IMAGES':
					$meta_value = filter_input( INPUT_POST, $key, FILTER_DEFAULT );

					if ( isset( $_POST[ $key . '-obj' ] )) { //phpcs:ignore

						if ( ! is_serialized( $_POST[ $key . '-obj' ] ) ) { //phpcs:ignore

							$image_obj  = json_decode( stripcslashes( wp_unslash( $_POST[ $key . '-obj' ] ) ), true ); //phpcs:ignore
							$image_url = isset( $image_obj['sizes'] ) ? $image_obj['sizes'] : array();

							$image_data = array(
								'id'  => isset( $image_obj['id'] ) ? intval( $image_obj['id'] ) : 0,
								'url' => array(
									'thumbnail' => isset( $image_url['thumbnail']['url'] ) ? esc_url_raw( $image_url['thumbnail']['url'] ) : '',
									'medium'    => isset( $image_url['medium']['url'] ) ? esc_url_raw( $image_url['medium']['url'] ) : '',
									'full'      => isset( $image_url['full']['url'] ) ? esc_url_raw( $image_url['full']['url'] ) : '',
								),
							);

							$new_meta_value = 0 !== $image_data['id'] ? $image_data : '';
							update_post_meta( $post_id, $key . '-obj', $new_meta_value );
						}
					}

					break;

				default:
					if ( 'FILTER_DEFAULT' === $sanitize_filter ) {
						$meta_value = filter_input( INPUT_POST, $key, FILTER_DEFAULT );
					} else {
						$meta_value = apply_filters( 'uag_save_meta_field_values', $meta_value, $post_id, $key, $sanitize_filter );
					}

					break;
			}

			if ( is_null( $meta_value ) ) {
				continue;
			}

			if ( false !== $meta_value ) {
				update_post_meta( $post_id, $key, $meta_value );
			} else {
				// To delete the wcf-checkout-products if empty.
				delete_post_meta( $post_id, $key );
			}
		}
	}
}
