import React, { useState, useEffect } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { SelectField, TextField } from '@Fields';
import { __ } from '@wordpress/i18n';

function ProductRepeaterItem( props ) {
	const [ { options }, dispatch ] = useStateValue();

	const { field_index, field_name, product_data } = props;

	const discountValueStatus =
		'' === product_data.discount_type ? 'disable' : 'enable';

	const [ showDiscountValue, setShowDiscountValue ] = useState(
		discountValueStatus
	);

	const removeProduct = function ( event ) {
		let product_id = parseInt( product_data.product );

		if ( product_id ) {
			dispatch( {
				type: 'REMOVE_CHECKOUT_PRODUCT',
				field_name: field_name,
				product_id: product_id,
			} );
		}
	};

	const showDiscountvalue = function ( e, name, value ) {
		if ( value === '' ) {
			setShowDiscountValue( 'disable' );
		} else {
			setShowDiscountValue( 'enable' );
		}
	};

	const discount_options = [
		{ value: '', label: 'Original' },
		{ value: 'discount_percent', label: 'Percentage' },
		{ value: 'discount_price', label: 'Price' },
	];

	const calculateDiscountvalue = function () {
		let discount_type = product_data.discount_type,
			discount_value = product_data.discount_value,
			original_price = product_data.regular_price,
			custom_price = original_price;

		if ( 'discount_percent' === discount_type ) {
			if ( discount_value > 0 ) {
				custom_price =
					original_price - ( original_price * discount_value ) / 100;
			}
		} else if ( 'discount_price' === discount_type ) {
			if ( discount_value > 0 ) {
				custom_price = original_price - discount_value;
			}
		}
		product_data[ 'sell_price' ] = custom_price;
	};
	calculateDiscountvalue();

	return (
		<>
			<div className="uag-product-repeater-field__product">
				<div className="uag-product-repeater-field__product-data uag-column--product">
					<div className="uag-product-repeater-field__drag">
						<span class="uag-drag-handle dashicons dashicons-menu"></span>
					</div>
					<div className="uag-product-repeater-field__product-image">
						<img
							src={
								product_data && product_data.img_url
									? product_data.img_url
									: uag_react.image_placeholder
							}
							className="product-image"
						/>
					</div>
					<div className="uag-product-repeater-field__product-details">
						<div className="uag-product-repeater-field__title">
							{ product_data.name }
						</div>
						<div className="uag-product-repeater-field__reg-price">
							{ __( 'Regular Price :', 'ultimate-addons-for-gutenberg' ) }
							{ uag_react.woo_currency +
								product_data.regular_price }
						</div>
						<div className="uag-product-repeater-field__dis-price">
							{ __( 'Discounted Price :', 'ultimate-addons-for-gutenberg' ) }
							{ uag_react.woo_currency +
								product_data.sell_price }
						</div>
					</div>
				</div>
				<div className="uag-product-repeater-field__quantity uag-column--quantity">
					<TextField
						type="number"
						id=""
						name={ `uag-checkout-products[${ field_index }][quantity]` }
						value={ product_data.quantity }
						min="1"
					/>
				</div>
				<div className="uag-product-repeater-field__discount uag-column--discount">
					<div className="uag-product-repeater-field__discount-type">
						<SelectField
							name={ `uag-checkout-products[${ field_index }][discount_type]` }
							value={ product_data.discount_type }
							options={ discount_options }
							callback={ showDiscountvalue }
						/>
					</div>
					<div className="uag-product-repeater-field__discount-value">
						<TextField
							type="number"
							id=""
							name={ `uag-checkout-products[${ field_index }][discount_value]` }
							value={
								showDiscountValue === 'disable'
									? ''
									: product_data.discount_value
							}
							readonly={
								showDiscountValue === 'disable'
									? 'readonly'
									: ''
							}
						/>
					</div>
				</div>

				<input
					name={ `uag-checkout-products[${ field_index }][product]` }
					type="hidden"
					class="uag-checkout-product-id"
					value={ product_data.product }
				></input>
				<input
					name={ `uag-checkout-products[${ field_index }][unique_id]` }
					type="hidden"
					class="uag-checkout-product-unique"
					value={ product_data.unique_id }
				></input>

				<div className="uag-product-repeater-field__action uag-column--actions">
					<span
						className="uag-remove-product-button dashicons dashicons-trash"
						onClick={ removeProduct }
					></span>
				</div>
			</div>
		</>
	);
}

export default ProductRepeaterItem;
