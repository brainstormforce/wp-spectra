import React, { useState, useEffect } from 'react';
import './ProductOptions.scss';

import { useStateValue } from '@Utils/StateProvider';
import { CheckboxField, TextField, ProNotification, RadioField } from '@Fields';
import { __ } from '@wordpress/i18n';

function ProductOptions( props ) {
	const [ { options }, dispatch ] = useStateValue();
	const { products } = props;

	let checkoutProducts = options[ 'uag-checkout-products' ];

	let productCondition = options[ 'uag-product-options' ];

	let counter = 0;

	var default_class = '';
	if ( 'force-all' === productCondition ) {
		default_class = 'disabled';
	}

	const showOptions = function ( event ) {
		var target_options =
			'product-option-index-' + event.target.getAttribute( 'index' );
		var element = document.getElementById( target_options );
		if ( element.classList.contains( 'hidden' ) ) {
			element.classList.remove( 'hidden' );
		} else {
			element.classList.add( 'hidden' );
		}
	};
	var productOptions = [];

	const get_product_options = function () {
		let product_options = {};

		Object.keys( products ).map( ( value ) => {
			var value1 = products[ value ];

			product_options[ value ] = {
				...value1,
			};
		} );

		let readyProductOptions = [];
		let defaultProductData = {
			enable_highlight: 'no',
			highlight_text: '',
			product_name: '',
			product_subtext: '',
			add_to_cart: 'yes',
		};
		let counter = 0;
		checkoutProducts.map( function ( checkoutProduct ) {
			if ( checkoutProduct?.unique_id ) {
				let tempProduct = {
					...defaultProductData,
				};

				let unique_id = checkoutProduct.unique_id;

				if ( product_options[ unique_id ] ) {
					tempProduct = {
						...product_options[ unique_id ],
					};
				}

				tempProduct[ 'product_id' ] = checkoutProduct?.product;
				tempProduct[ 'product_name' ] = tempProduct[ 'product_name' ]
					? tempProduct[ 'product_name' ]
					: checkoutProduct?.name;

				// To show the product name in backend product option settings tab.
				tempProduct[ 'product_title' ] = checkoutProduct?.name;

				tempProduct[ 'unique_id' ] = checkoutProduct.unique_id;

				if ( 'single-selection' !== productCondition ) {
					tempProduct[ 'add_to_cart' ] = tempProduct[ 'add_to_cart' ]
						? tempProduct[ 'add_to_cart' ]
						: 'yes';
				}

				// Need counter to check if add_to_cart value exist or is yes.
				if ( 'single-selection' === productCondition ) {
					if (
						tempProduct[ 'add_to_cart' ] &&
						tempProduct[ 'add_to_cart' ] !== 'no'
					) {
						counter++;
					}
				}

				readyProductOptions.push( tempProduct );
			}

			// Always first prododuct will be selected if no value saved.
			if ( 'single-selection' === productCondition && counter === 0 ) {
				readyProductOptions[ 0 ][ 'add_to_cart' ] = 'yes';
			}
		} );

		return readyProductOptions;
	};

	const get_default_column = function ( product, is_last ) {
		let value = '';

		if ( 'single-selection' === productCondition ) {
			if ( 'yes' === product.add_to_cart ) {
				value = product.unique_id;
				counter++;
			}

			return (
				<RadioField
					class={ `uag-product-add-to-cart` }
					name="uag_default_add_to_cart"
					options={ [
						{
							value: product.unique_id,
						},
					] }
					value={ value }
				/>
			);
		}

		if ( 'force-all' === productCondition ) {
			return (
				<CheckboxField
					class={ `uag-product-add-to-cart` }
					name={ `uag-product-options-data[${ product.unique_id }][add_to_cart]` }
					value="yes"
				/>
			);
		}

		if ( 'multiple-selection' === productCondition ) {
			return (
				<CheckboxField
					class={ `uag-product-add-to-cart` }
					name={ `uag-product-options-data[${ product.unique_id }][add_to_cart]` }
					value={ product.add_to_cart }
				/>
			);
		}
	};

	productOptions = get_product_options();

	return (
		<div className="uag-product-options-fields">
			<ul class="uag-product-options-fields__list">
				{ productOptions.length > 0 &&
					productOptions.map( ( product, index ) => {
						let highlight_text_class = '';
						if ( 'no' === product.enable_highlight ) {
							highlight_text_class = 'hidden';
						}

						let is_last = index === productOptions.length - 1;

						return (
							<li
								class="uag-product-option-field"
								data-product-id={ product.product_id }
							>
								<div className="uag-product-option-fields">
									<div className="uag-product-field-item-bar">
										<span
											className={ `uag-product-option-default-in-cart ${ default_class }` }
										>
											{ get_default_column(
												product,
												is_last
											) }
										</span>

										<span className="uag-product-option-title">
											{ product.product_title }
										</span>
										<span
											class="dashicons dashicons-arrow-down uag-dashicon"
											index={ index }
											onClick={ showOptions }
										></span>
									</div>

									<div
										className={
											'uag-product-field-item-settings hidden'
										}
										id={ 'product-option-index-' + index }
										data-id={ product.product_id }
									>
										<TextField
											class="uag-product-name"
											name={ `uag-product-options-data[${ product.unique_id }][product_name]` }
											label={ __(
												'Product Name',
												'ultimate-addons-for-gutenberg'
											) }
											value={ product.product_name }
											desc={ __(
												'Use {{product_name}} and {{quantity}} to dynamically fetch respective product details.'
											) }
										/>
										<TextField
											class="uag-product-subtext"
											name={ `uag-product-options-data[${ product.unique_id }][product_subtext]` }
											label={ __(
												'Subtext',
												'ultimate-addons-for-gutenberg'
											) }
											value={ product.product_subtext }
											desc={ __(
												'Use {{quantity}}, {{discount_value}}, {{discount_percent}} to dynamically fetch respective product details.',
												'ultimate-addons-for-gutenberg'
											) }
										/>
										<CheckboxField
											class="uag-product-enable-hl"
											name={ `uag-product-options-data[${ product.unique_id }][enable_highlight]` }
											label={ __(
												'Enable Highlight',
												'ultimate-addons-for-gutenberg'
											) }
											value={ product.enable_highlight }
											desc={ product.desc }
										/>
										<div
											className={ `${ highlight_text_class }` }
										>
											<TextField
												class={ `uag-product-hl-text` }
												name={ `uag-product-options-data[${ product.unique_id }][highlight_text]` }
												label={ __(
													'Highlight Text',
													'ultimate-addons-for-gutenberg'
												) }
												value={ product.highlight_text }
											/>
										</div>

										<input
											name={ `uag-product-options-data[${ product.unique_id }][unique_id]` }
											type="hidden"
											class="uag-product-options-unique-id"
											value={ product.unique_id }
										></input>
									</div>
								</div>
							</li>
						);
					} ) }
				{ productOptions.length > 0 && (
					<div className="uag-product-options-fields__list--header">
						<span className="uag-default-label">
							{ 'force-all' !== productCondition &&
								__(
									"Note: Select the default product/s. Selected product's will get added to the cart by default on the checkout step.",
									'ultimate-addons-for-gutenberg'
								) }
							{ 'force-all' === productCondition &&
								__(
									'Note: All of the above products will be added to the cart on the checkout step by default.',
									'ultimate-addons-for-gutenberg'
								) }
						</span>
					</div>
				) }
			</ul>
		</div>
	);
}

export default ProductOptions;
