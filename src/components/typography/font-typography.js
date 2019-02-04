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
import TypographyOptionsClasses from './classes';
import googleFonts from './fonts';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsInlineStyles,
};

function FontTypographyOptions( props ) {

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

		if( k === props.fontFamily ) {
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

	const sizeTypes = [
		{ key: "px", name: __( "px" ) },
		{ key: "em", name: __( "em" ) },
	]

	const headsizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ headFontSizeType === key }
					aria-pressed={ headFontSizeType === key }
					onClick={ () => setAttributes( { headFontSizeType: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)

	return (
		<PanelRow>
			<div className="uag-typography-options">
				<SelectControl
					label={ __( "Font Family" ) }
					value={ props.fontFamily }
					onChange={ onFontFamilyChange }
					options={
						fonts
					}
				/>
				<SelectControl
					label={ __( "Font Weight" ) }
					value={ props.fontWeight }
					onChange={ onFontWeightChange }
					options={
						font_weight_obj
					}
				/>
			</div>
		</PanelRow>
	);
}

export default FontTypographyOptions;
