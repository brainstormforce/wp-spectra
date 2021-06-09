import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import './SelectProduct.scss';
import apiFetch from '@wordpress/api-fetch';

import { Select2Field } from '@Fields';

function SelectProduct( props ) {
	const { name, addProductCB, closePopupCB } = props;

	let [ selectedProduct, setSelectedProduct ] = useState();

	const clickOverlay = function ( e ) {
		if ( e.target.id === 'uag-select-product-popup-overlay' ) {
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
			className="uag-select-product-popup-overlay"
			id="uag-select-product-popup-overlay"
			onClick={ clickOverlay }
		>
			<div className="uag-select-product-popup-content">
				<div className="uag-select-product-header">
					<div className="uag-select-product-header__title">
						<div class="uag-popup-header-title">
							<span className="ultimate-addons-for-gutenberg-logo-icon"></span>
							{ __( 'Add New Product', 'ultimate-addons-for-gutenberg' ) }
						</div>
					</div>

					<div
						className="uag-popup-header-action"
						title="Hide this"
						onClick={ closePopupCB }
					>
						<span class="dashicons dashicons-no"></span>
					</div>
				</div>

				<div className="uag-content-wrap">
					<div className="uag-select-product-content">
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
						<span className="uag-select-product__button">
							<a
								href="#"
								className="uag-button uag-button--primary"
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
