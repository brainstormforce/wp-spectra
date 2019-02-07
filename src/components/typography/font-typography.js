/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	SelectControl
} = wp.components;

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import TypographyOptionsInlineStyles from './inline-styles';
import map from "lodash/map"
import googleFonts from './fonts';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsInlineStyles,
};

function TypographyOptions( props ) {

	const fonts = [
		{ value: '', label: __( 'Default' ), weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], google: false },
		{ value: 'Arial', label: 'Arial', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], google: false },
		{ value: 'Helvetica', label: 'Helvetica', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], google: false },
		{ value: 'Times New Roman', label: 'Times New Roman', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], google: false },
		{ value: 'Georgia', label: 'Georgia', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], google: false },
	];

	let font_weight = '';
	let font_subset = '';

	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k, v ) => {
		fonts.push(
			{ value: k, label: k, weight: googleFonts[k].weight }
		);

		if( k === props.fontFamily.value ) {
			font_weight = googleFonts[k].weight;
			font_subset = googleFonts[k].subset;
		}
	})

	// check if the font is a stystem font and then apply the font weight accordingly.

	if ( font_weight === '' ) {
		font_weight = fonts[0].weight;
	}
	
	const font_weight_obj = [];

	font_weight.forEach(function(item) {
		font_weight_obj.push(
			{ value: item, label: item }
		);
	});

	const font_subset_obj = [];

	if( typeof font_subset == 'object' ) {
		font_subset.forEach(function(item) {
			font_subset_obj.push(
				{ value: item, label: item }
			);
		});
	}

	const onLineheightChange = value => props.setAttributes( { [ props.LineHeight.label ]: value } );

	const sizeTypes = [
		{ key: "px", name: __( "px" ) },
		{ key: "em", name: __( "em" ) },
	]

	const onFontfamilyChange = ( value ) => {
		props.setAttributes( { [ props.fontFamily.label ]: value } )
		onFontChange( props.fontWeight, font_weight_obj );
		onFontChange( props.fontSubset, font_weight_obj );
	}

	const onFontChange = ( font_arr, font_weight_obj ) => {
	
		let font_flag;
		let new_value;

		if( typeof font_weight_obj == 'object' ) {

			font_weight_obj.forEach(function(item) {
				if( font_arr.value == item.value ) {
					font_flag = false;
				} else {
					new_value  = item.value;
					font_flag = true;
				}
			});
		}

		if( font_flag == true ) {
			props.setAttributes( { [ font_arr.label ]: new_value } )
		}
	}

	return (
		<div className="uag-typography-options">
			<SelectControl
				label={ __( "Font Family" ) }
				value={ props.fontFamily.value }
				onChange={ onFontfamilyChange }
				options={ fonts	}
				placeholder={ __( 'Font family' ) }
			/>
			<SelectControl
				label={ __( "Font Weight" ) }
				value={ props.fontWeight.value }
				onChange={ ( value ) => props.setAttributes( { [ props.fontWeight.label ]: value } ) }
				options={
					font_weight_obj
				}
			/>
			<SelectControl
				label={ __( "Font Subset" ) }
				value={ props.fontSubset.value }
				onChange={ ( value ) => props.setAttributes( { [ props.fontSubset.label ]: value } ) }
				options={
					font_subset_obj
				}
			/>
		</div>
	);
}

export default TypographyOptions
