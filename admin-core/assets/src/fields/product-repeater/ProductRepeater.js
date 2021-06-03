import React, { useState, useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import ProductRepeaterItem from './ProductRepeaterItem';
import './ProductRepeater.scss';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import SelectProduct from './SelectProduct';
import CreateWooProduct from './CreateWooProduct';

function ProductRepeater( props ) {
	const [ { options, is_cf_pro }, dispatch ] = useStateValue();

	const { name, value } = props;

	let CheckoutProducts = options[ name ];

	const [ popup, showPopup ] = useState( false );

	const new_product = {
		product: '0',
		quantity: '1',
		discount_type: '',
		discount_value: '',
		unique_id: Math.random().toString( 36 ).substring( 2, 10 ),
	};

	useEffect( () => {
		let isActive = true;

		dispatch( {
			type: 'UPDATE_CHECKOUT_PRODUCTS',
			field_name: name,
			products: value,
		} );

		return () => {
			isActive = false;
		};
	}, [] );

	const addProduct = function ( product ) {
		let product_id = product?.value;

		if ( product_id ) {
			apiFetch( {
				path: `/uag/v1/admin/product-data/${ product_id }`,
			} ).then( ( data ) => {
				console.log( data );

				let product_data = {
					product: product_id,
					quantity: '1',
					discount_type: '',
					discount_value: '',
					unique_id: Math.random().toString( 36 ).substring( 2, 10 ),
					name: product?.label,
					img_url: data?.img_url,
					regular_price: data?.regular_price,
				};

				dispatch( {
					type: 'ADD_CHECKOUT_PRODUCT',
					field_name: name,
					product_data: product_data,
				} );

				if ( is_cf_pro ) {
					let prod_opt_data = options[ 'wcf-product-options-data' ];
					prod_opt_data[ product_data.unique_id ] = {
						enable_highlight: 'no',
						highlight_text: '',
						product_name: '',
						product_subtext: '',
					};

					dispatch( {
						type: 'SET_OPTION',
						name: 'wcf-product-options-data',
						value: prod_opt_data,
					} );
				}

				closePopup();
			} );
		}
	};

	const closePopup = function () {
		showPopup( false );
	};

	const addNewProduct = function ( event ) {
		showPopup( true );
	};

	return (
		<div className="wcf-checkout-product-selection-field">
			{ CheckoutProducts.length === 0 && (
				<input
					name="wcf-checkout-products"
					type="hidden"
					value=""
				></input>
			) }
			{ CheckoutProducts.length > 0 && (
				<>
					<div className="wcf-checkout-product-selection-field__header">
						<div className="wcf-column--product">Product</div>
						<div className="wcf-column--quantity">Quantity</div>
						<div className="wcf-column--discount">Discount</div>
						<div className="wcf-column--actions">Actions</div>
					</div>
					<ReactSortable
						list={ CheckoutProducts }
						setList={ ( newState ) =>
							dispatch( {
								type: 'UPDATE_CHECKOUT_PRODUCTS',
								field_name: name,
								products: newState,
							} )
						}
						direction={ 'vertical' }
						filter={
							'.wcf-product-repeater-field__quantity, .wcf-product-repeater-field__discount'
						}
						preventOnFilter={ false }
						className="wcf-checkout-product-selection-field__content"
					>
						{ CheckoutProducts.map( ( product_data, index ) => {
							return (
								<ProductRepeaterItem
									key={ product_data.unique_id }
									field_index={ index }
									field_name={ name }
									product_data={ product_data }
								/>
							);
						} ) }
					</ReactSortable>
				</>
			) }
			<div className="wcf-checkout-product-selection-field__add-new">
				<a
					className="wcf-add-new-product wcf-button wcf-button--primary"
					onClick={ addNewProduct }
				>
					{ __( 'Add New product', 'ultimate-addons-for-gutenberg' ) }
				</a>
				<CreateWooProduct />
			</div>

			{ popup && (
				<SelectProduct
					name
					closePopupCB={ closePopup }
					addProductCB={ addProduct }
				/>
			) }
		</div>
	);
}

export default ProductRepeater;
