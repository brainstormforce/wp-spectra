import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import apiFetch from '@wordpress/api-fetch';
import './CouponField.scss';
import AsyncSelect from 'react-select/async';

function CouponField( props ) {
	const {
		label,
		name,
		id,
		desc,
		field,
		value,
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
		let changeEvent = new CustomEvent( 'uag:coupon:change', {
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

		formData.append( 'action', 'uag_json_search_coupons' );
		formData.append(
			'security',
			uag_react.json_search_coupons_nonce
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
		<div className="uag-select2-field uag-coupon-field">
			<div className="uag-selection-field">
				<label>
					{ label }
					{ tooltip && (
						<span className="uag-tooltip-icon" data-position="top">
							<em
								className="dashicons dashicons-editor-help"
								title={ tooltip }
							></em>
						</span>
					) }
				</label>

				<AsyncSelect
					className="uag-select2-input"
					classNamePrefix="uag"
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
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default CouponField;
