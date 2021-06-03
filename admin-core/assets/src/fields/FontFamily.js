import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AsyncSelect from 'react-select/async';
import { SelectField } from '@Fields';
import './FontFamily.scss';

function FontFamily( props ) {
	const {
		name,
		id,
		label,
		value,
		desc,
		tooltip,
		font_weight_name = '',
		font_weight_value = '',
		font_weight_for = '',
	} = props;

	const cf_font_family = uag_react.cf_font_family;

	const [ selectedValue, setSelectedValue ] = useState( {
		value: value,
		label:
			value && value.match( /'([^']+)'/ )
				? value.match( /'([^']+)'/ )[ 1 ]
				: ! value
				? 'Default'
				: value,
	} );

	const [ weightvalue, setWeight ] = useState( font_weight_value );

	const filterFont = ( inputValue ) => {
		var system_fonts = cf_font_family[ 1 ].options,
			google_font = cf_font_family[ 2 ].options,
			default_font = cf_font_family[ 0 ],
			fonts = system_fonts.concat( google_font, default_font );

		return fonts.filter( ( i ) =>
			i.label.toLowerCase().includes( inputValue.toLowerCase() )
		);
	};

	const prepareweightList = function ( currentValue ) {
		var font_family = currentValue.value;

		var weight = [];

		if ( 'undefined' === typeof font_family || '' === font_family ) {
			weight.push( { value: '', label: 'Default' } );
			return weight;
		}

		var temp = font_family.match( "'(.*)'" );

		var google_font_families = {};

		if ( temp && temp[ 1 ] ) {
			font_family = temp[ 1 ];
		}

		var new_font_weights = {};

		if ( wcf.google_fonts[ font_family ] ) {
			var variants = wcf.google_fonts[ font_family ][ 'variants' ];

			variants.map( ( index, weight ) => {
				if ( ! index.includes( 'italic' ) ) {
					new_font_weights[ index ] = wcf.font_weights[ index ];
				}
			} );

			Object.keys( new_font_weights ).map( ( value ) => {
				var value1 = new_font_weights[ value ];
				weight.push( { value: value, label: value1 } );
			} );

			var temp_font_family = font_family.replace( ' ', '+' );
			google_font_families[ temp_font_family ] = new_font_weights;
		} else if ( wcf.system_fonts[ font_family ] ) {
			var variants = wcf.system_fonts[ font_family ][ 'variants' ];

			variants.map( ( index, weight ) => {
				if ( ! index.includes( 'italic' ) ) {
					new_font_weights[ index ] = wcf.font_weights[ index ];
				}
			} );

			Object.keys( new_font_weights ).map( ( value ) => {
				var value1 = new_font_weights[ value ];
				weight.push( { value: value, label: value1 } );
			} );
		}

		return weight;
	};

	const handleChange = ( currentValue ) => {
		setSelectedValue( currentValue );

		var new_weight_list = prepareweightList( currentValue );

		weightList = new_weight_list;

		//Trigger change
		let changeEvent = new CustomEvent( 'wcf:font:change', {
			bubbles: true,
			detail: { name: props.name, value: currentValue.value },
		} );

		document.dispatchEvent( changeEvent );
	};
	const loadOptions = ( inputValue ) => {
		return new Promise( ( resolve ) => {
			setTimeout( () => {
				resolve( filterFont( inputValue ) );
			}, 1000 );
		} );
	};

	const setWeightValue = function ( value ) {
		setWeight( value );
	};

	var weightList = prepareweightList( selectedValue );

	return (
		<div className="wcf-font-family-field">
			<div className="wcf-selection-field">
				<label>{ label }</label>
				{ tooltip && (
					<span className="wcf-tooltip-icon" data-position="top">
						<em
							className="dashicons dashicons-editor-help"
							title={ tooltip }
						></em>
					</span>
				) }
				<AsyncSelect
					name={ name }
					className="wcf-select2-input"
					classNamePrefix="wcf"
					cacheOptions
					defaultOptions={ cf_font_family }
					value={ selectedValue }
					loadOptions={ loadOptions }
					onChange={ handleChange }
				/>
			</div>
			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }

			{ '' !== font_weight_name && (
				<div className="wcf-font-weight-field">
					<SelectField
						name={ font_weight_name }
						className="wcf-select-input"
						value={ weightvalue }
						onChange={ setWeightValue }
						options={ weightList }
						label="Font Weight"
					/>
				</div>
			) }
		</div>
	);
}

export default FontFamily;
