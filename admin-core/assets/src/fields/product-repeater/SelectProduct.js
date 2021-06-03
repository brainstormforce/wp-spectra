import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import './SelectProduct.scss';
import apiFetch from '@wordpress/api-fetch';

import { Select2Field } from '@Fields';

function SelectProduct( props ) {
	const { name, addProductCB, closePopupCB } = props;

	let [ selectedProduct, setSelectedProduct ] = useState();

	const clickOverlay = function ( e ) {
		if ( e.target.id === 'wcf-select-product-popup-overlay' ) {
			closePopupCB();
		}
	};

	const addProduct = function ( e ) {
		e.preventDefault();

		setAddText( __( 'Adding...', 'ultimate-addons-for-gutenberg' ) );

		addProductCB( selectedProduct );

		// closePopupCB();
	};

	const [ addText, setAddText ] = useState(
		__( 'Add Product', 'ultimate-addons-for-gutenberg' )
	);

	return (
		<div
			className="wcf-select-product-popup-overlay"
			id="wcf-select-product-popup-overlay"
			onClick={ clickOverlay }
		>
			<div className="wcf-select-product-popup-content">
				<div className="wcf-select-product-header">
					<div className="wcf-select-product-header__title">
						<div class="wcf-popup-header-title">
							<span className="cartflows-logo-icon"></span>
							{ __( 'Add New Product', 'ultimate-addons-for-gutenberg' ) }
						</div>
					</div>

					<div
						className="wcf-popup-header-action"
						title="Hide this"
						onClick={ closePopupCB }
					>
						<span class="dashicons dashicons-no"></span>
					</div>
				</div>

				<div className="wcf-content-wrap">
					<div className="wcf-select-product-content">
						<Select2Field
							name=""
							desc=""
							field="product"
							value=""
							allowed_products=""
							include_products="braintree-subscription, braintree-variable-subscription"
							excluded_products="grouped"
							placeholder={ __(
								'Type to search for a product...',
								'ultimate-addons-for-gutenberg'
							) }
							onChangeCB={ setSelectedProduct }
						/>
						<span className="wcf-select-product__button">
							<a
								href="#"
								className="wcf-button wcf-button--primary"
								onClick={ addProduct }
							>
								{ addText }
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectProduct;
