/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	TextControl,
	RangeControl,
	SelectControl,
	PanelRow,
} = wp.components;

/**
 * Internal dependencies
 */
import TypographyOptionsAttributes from './attributes';
import TypographyOptionsInlineStyles from './inline-styles';
import TypographyOptionsClasses from './classes';
import googleFonts from './fonts';
import './editor.scss';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsAttributes,
	TypographyOptionsInlineStyles,
	TypographyOptionsClasses
};

function TypographyOptions( props ) {

	const fonts = [
		{ value: '', label: __( 'Default' ), weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Arial', label: 'Arial', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Helvetica', label: 'Helvetica', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Times New Roman', label: 'Times New Roman', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Georgia', label: 'Georgia', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
	];

	let font_weight = '';

	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k, v ) => {
		fonts.push(
			{ value: k, label: k, weight: googleFonts[k] }
		);

		if( k === props.attributes.fontFamily ) {
			font_weight = googleFonts[k].weight;
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
		
	const onFontFamilyChange = value => props.setAttributes( { fontFamily: value } );
	const onFontSizeChange 	= value => props.setAttributes( { fontSize  : value } );
	const onFontWeightChange = value => props.setAttributes( { fontWeight: value } );
	const onLineheightChange = value => props.setAttributes( { LineHeight: value } );

	return (
		<PanelRow>
			<div className="uag-typography-options">
				<div>
					<SelectControl
						label={ __( "Font Family" ) }
						value={ props.attributes.fontFamily }
						onChange={ onFontFamilyChange }
						options={
							fonts
						}
					/>
					<SelectControl
						label={ __( "Font Weight" ) }
						value={ props.attributes.fontWeight }
						onChange={ onFontWeightChange }
						options={
							font_weight_obj
						}
					/>
					<RangeControl
						label={ __( "Font Size" ) }
						value={ props.attributes.fontSize }
						onChange={ onFontSizeChange }
						min={ 0 }
						max={ 200 }
						initialPosition={16}
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Line Height" ) }
						value={ props.attributes.lineHeight }
						onChange={ onLineheightChange }
						min={ 0 }
						max={ 20 }
						beforeIcon=""
						allowReset
						initialPosition={3}
					/>
				</div>
			</div>
		</PanelRow>
	);
}

export default TypographyOptions;
