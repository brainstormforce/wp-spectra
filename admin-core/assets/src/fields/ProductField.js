import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import apiFetch from '@wordpress/api-fetch';
import './ProductField.scss';
import AsyncSelect from 'react-select/async';

function ProductField( props ) {
	const {
		label,
		name,
		id,
		desc,
		field,
		value,
		allowed_products,
		include_products,
		excluded_products,
		tooltip,
		placeholder,
		onChangeCB,
		attr,
	} = props;

	const [ selectedValue, setSelectedValue ] = useState( value );

	// handle selection
	const handleChange = ( value ) => {
		setSelectedValue( value );

		// Trigger change
		let changeEvent = new CustomEvent( 'wcf:product:change', {
			bubbles: true,
			detail: { e: {}, name: props.name, value: value },
		} );

		document.dispatchEvent( changeEvent );

		if ( onChangeCB ) {
			onChangeCB( value );
		}
	};

	const loadOptions = ( inputValue ) => {
		let formData = new window.FormData();
		formData.append( 'allowed_products', allowed_products );
		formData.append( 'include_products', include_products );
		formData.append( 'exclude_products', excluded_products );

		formData.append( 'action', 'uag_json_search_products' );
		formData.append(
			'security',
			uag_react.json_search_products_nonce
		);

		formData.append( 'term', inputValue );

		return new Promise( ( resolve ) => {
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( res ) => {
				resolve( res );
			} );
		} );
	};

	return (
		<div className="wcf-select2-field wcf-product-field">
			<div className="wcf-selection-field">
				<label>
					{ label }
					{ tooltip && (
						<span className="wcf-tooltip-icon" data-position="top">
							<em
								className="dashicons dashicons-editor-help"
								title={ tooltip }
							></em>
						</span>
					) }
				</label>

				<AsyncSelect
					className="wcf-select2-input"
					classNamePrefix="wcf"
					name={ `${ name }[]` }
					isClearable={ true }
					value={ selectedValue }
					getOptionLabel={ ( e ) => e.label }
					getOptionValue={ ( e ) => e.value }
					loadOptions={ loadOptions }
					onChange={ handleChange }
					placeholder={ placeholder }
					cacheOptions
					{ ...attr }
				/>
			</div>
			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default ProductField;
