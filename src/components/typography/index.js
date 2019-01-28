/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ColorPalette } = wp.editor;
const {
	PanelBody,
	TextControl,
	PanelRow,
} = wp.components;

/**
 * Internal dependencies
 */
import TypographyOptionsAttributes from './attributes';
import TypographyOptionsInlineStyles from './inline-styles';
import TypographyOptionsClasses from './classes';
import './editor.scss';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsAttributes,
	TypographyOptionsInlineStyles,
	TypographyOptionsClasses
};

function TypographyOptions( props ) {
	const setFontFamily = value => props.setAttributes( { fontFamily: value } );
	const setFontSize 	= value => props.setAttributes( { fontSize  : value } );
	const setFontWeight = value => props.setAttributes( { fontWeight: value } );
	const setLineheight = value => props.setAttributes( { lineheight: value } );

	return (
		<PanelBody
			title={ __( 'Typography Options' ) }
			className="uag-typography-options"
			initialOpen={ false }
		>
			<PanelRow>
				<div className="uag-typography-option">
					<div>
						<TextControl
							label= { __( "Font Family" ) }
							value= { setFontFamily }
							onChange={ value => setAttributes( { setFontFamily: value } ) }
						/>
						<TextControl
							label= { __( "Font Size" ) }
							value= { setFontSize }
							onChange={ value => setAttributes( { setFontSize: value } ) }
						/>
						<TextControl
							label= { __( "Font Weight" ) }
							value= { setFontWeight }
							onChange={ value => setAttributes( { setFontWeight: value } ) }
						/>
						<TextControl
							label= { __( "Line Height" ) }
							value= { setLineheight }
							onChange={ value => setAttributes( { setLineheight: value } ) }
						/>
					</div>
				</div>
			</PanelRow>
		</PanelBody>
	);
}

export default TypographyOptions;
