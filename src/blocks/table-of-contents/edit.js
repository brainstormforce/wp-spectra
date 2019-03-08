/**
 * BLOCK: Table of Contents
 */

import classnames from "classnames"
import styling from "./styling"
import map from "lodash/map"
import generateContent from "./generateContent"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"


const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	ToggleControl,
	TextControl
} = wp.components


class UAGBMarketingButtonEdit extends Component {


	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-toc-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			align,
			smoothScroll,
			smoothScrollOffset,
			considerH1,
			considerH2,
			considerH3,
			considerH4,
			considerH5,
			considerH6,
			counter,
			//Color
			linkColor,
			linkHoverColor,
			//Border
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			//Typography
			loadGoogleFonts,
			fontFamily,
			fontWeight,
			fontSubset,
			fontSize,
			fontSizeType,
			fontSizeTablet,
			fontSizeMobile,
			lineHeightType,
			lineHeight,
			lineHeightTablet,
			lineHeightMobile,
		} = attributes

		let loadGFonts

		if( loadGoogleFonts == true ) {

			const config = {
				google: {
					families: [ fontFamily + ( fontWeight ? ":" + fontWeight : "" ) ],
				},
			}

			loadGFonts = (
				<WebfontLoader config={ config }>
				</WebfontLoader>
			)
		}

		// Push Styling to Head.
		var element = document.getElementById( "uagb-style-toc-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		let html = generateContent( this.props )

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } initialOpen={ true }>
						<h2>{ __( "Select the heading to consider when generating the table" ) }</h2>
						<ToggleControl
							label={ __( "H1" ) }
							checked={ considerH1 }
							onChange={ ( value ) => setAttributes( { considerH1: ! considerH1 } ) }
						/>
						<ToggleControl
							label={ __( "H2" ) }
							checked={ considerH2 }
							onChange={ ( value ) => setAttributes( { considerH2: ! considerH2 } ) }
						/>
						<ToggleControl
							label={ __( "H3" ) }
							checked={ considerH3 }
							onChange={ ( value ) => setAttributes( { considerH3: ! considerH3 } ) }
						/>
						<ToggleControl
							label={ __( "H4" ) }
							checked={ considerH4 }
							onChange={ ( value ) => setAttributes( { considerH4: ! considerH4 } ) }
						/>
						<ToggleControl
							label={ __( "H5" ) }
							checked={ considerH5 }
							onChange={ ( value ) => setAttributes( { considerH5: ! considerH5 } ) }
						/>
						<ToggleControl
							label={ __( "H6" ) }
							checked={ considerH6 }
							onChange={ ( value ) => setAttributes( { considerH6: ! considerH6 } ) }
						/>
						<hr className="uagb-editor__separator"/>
						<ToggleControl
							label={ __( "Smooth Scroll" ) }
							checked={ smoothScroll }
							onChange={ ( value ) => setAttributes( { smoothScroll: ! smoothScroll } ) }
						/>
						<RangeControl
							label={ __( "Smooth Scroll Offset (px)" ) }
							value={ smoothScrollOffset }
							onChange={ ( value ) => setAttributes( { smoothScrollOffset: value } ) }
							min={ 0 }
							max={ 100 }
						/>
						<SelectControl
							label={ __( "Counter" ) }
							value={ counter }
							onChange={ ( value ) => setAttributes( { counter: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "numeric", label: __( "Numeric" ) },
								{ value: "roman", label: __( "Roman" ) },
							] }
						/>
					</PanelBody>
					<PanelBody title={ __( "Content" ) } initialOpen={ false }>
						<h2>{ __( "Typography" ) }</h2>
						<TypographyControl
							label={ __( "Font" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: loadGoogleFonts, label: __( "loadGoogleFonts" ) } }
							fontFamily = { { value: fontFamily, label: __( "fontFamily" ) } }
							fontWeight = { { value: fontWeight, label: __( "fontWeight" ) } }
							fontSubset = { { value: fontSubset, label: __( "fontSubset" ) } }
							fontSizeType = { { value: fontSizeType, label: __( "fontSizeType" ) } }
							fontSize = { { value: fontSize, label: __( "fontSize" ) } }
							fontSizeMobile = { { value: fontSizeMobile, label: __( "fontSizeMobile" ) } }
							fontSizeTablet= { { value: fontSizeTablet, label: __( "fontSizeTablet" ) } }
							lineHeightType = { { value: lineHeightType, label: __( "lineHeightType" ) } }
							lineHeight = { { value: lineHeight, label: __( "lineHeight" ) } }
							lineHeightMobile = { { value: lineHeightMobile, label: __( "lineHeightMobile" ) } }
							lineHeightTablet= { { value: lineHeightTablet, label: __( "lineHeightTablet" ) } }
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Colors" ) }</h2>
						<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: linkColor }} ></span></span></p>
						<ColorPalette
							value={ linkColor }
							onChange={ ( colorValue ) => setAttributes( { linkColor: colorValue } ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: linkHoverColor }} ></span></span></p>
						<ColorPalette
							value={ linkHoverColor }
							onChange={ ( colorValue ) => setAttributes( { linkHoverColor: colorValue } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Border" ) }</h2>
						<SelectControl
							label={ __( "Border Style" ) }
							value={ borderStyle }
							onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "dotted", label: __( "Dotted" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "groove", label: __( "Groove" ) },
								{ value: "inset", label: __( "Inset" ) },
								{ value: "outset", label: __( "Outset" ) },
								{ value: "ridge", label: __( "Ridge" ) },
							] }
						/>
						{ "none" != borderStyle && (
							<RangeControl
								label={ __( "Border Width" ) }
								value={ borderWidth }
								onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
						) }
						<RangeControl
							label={ __( "Border Radius" ) }
							value={ borderRadius }
							onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
							min={ 0 }
							max={ 1000 }
							allowReset
						/>
						{ "none" != borderStyle && (
							<Fragment>
								<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
								<ColorPalette
									value={ borderColor }
									onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					`uagb-toc__align-${align}`
				) }
				id={ `uagb-toc-${ this.props.clientId }` }>
					<div className="uagb-toc__wrap">
						<span className="uagb-toc__title">Table Of Content</span>
						<div className="uagb-toc__list-wrap">
							<ul className="uagb-toc__list" dangerouslySetInnerHTML={ { __html: html } }></ul>
						</div>
					</div>
				</div>
				{ loadGFonts }
			</Fragment>
		)
	}
}

export default UAGBMarketingButtonEdit
