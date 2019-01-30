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
import './editor.scss';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsAttributes,
	TypographyOptionsInlineStyles,
	TypographyOptionsClasses
};

function TypographyOptions( props ) {

	const setFontFamily = value => {
		props.setAttributes( { fontFamily: value } );
	};
	const setFontSize = value => {
		props.setAttributes( { fontSize: value } );
	};
	const setFontWeight = value => {
		props.setAttributes( { fontWeight: value } );
	};
	const setLineheight = value => {
		props.setAttributes( { Lineheight: value } );
	};

	return (
		<PanelRow>
			<div className="uag-typography-options">
				<div>
					<SelectControl
						label={ __( "Font Family" ) }
						value={ props.attributes.fontFamily }
						onChange={ setFontFamily }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "solid", label: __( "Solid" ) },
							{ value: "double", label: __( "Double" ) },
							{ value: "dashed", label: __( "Dashed" ) },
							{ value: "dotted", label: __( "Dotted" ) },
						] }
					/>
					<SelectControl
						label={ __( "Font Weight" ) }
						value={ props.attributes.fontWeight }
						onChange={ setFontWeight }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "solid", label: __( "Solid" ) },
							{ value: "double", label: __( "Double" ) },
							{ value: "dashed", label: __( "Dashed" ) },
							{ value: "dotted", label: __( "Dotted" ) },
						] }
					/>
					<RangeControl
						label={ __( "Font Size" ) }
						value={ props.attributes.fontSize }
						onChange={ setFontSize }
						min={ 10 }
						max={ 100 }
						beforeIcon="editor-textcolor"
						allowReset
						initialPosition={30}
					/>
					<TextControl
						label= { __( "Line Height" ) }
						value= { props.attributes.lineHeight }
						onChange={ setLineheight }
					/>
				</div>
			</div>
		</PanelRow>
	);
}

export default TypographyOptions;
