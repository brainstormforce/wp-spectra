/**
 * BLOCK: Table of Contents
 */

import classnames from "classnames"
import styling from "./styling"
import map from "lodash/map"
import generateContent from "./generateContent"
import getMapping from "./getMapping"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

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
	ColorPalette
} = wp.editor

const {
	Button,
	ButtonGroup,
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl
} = wp.components


class UAGBTableOfContentsEdit extends Component {

	constructor() {
		super( ...arguments )

		this.regenerateTable = this.regenerateTable.bind( this )
	}

	/*
	 * Event to set Mapping Object.
	 */
	regenerateTable() {

		const { mapping } = this.props.attributes
		const { setAttributes } = this.props
		setAttributes( { mapping: getMapping( this.props ) } )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { mapping: getMapping( this.props ) } )

		// Pushing Scroll To Top div
		var $scrollTop = document.createElement( "div" )
		$scrollTop.setAttribute( "class", "uagb-toc__scroll-top dashicons dashicons-arrow-up-alt2" )
		document.body.insertBefore( $scrollTop, document.body.lastChild )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-toc-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			align,
			mapping,
			heading,
			smoothScroll,
			smoothScrollOffset,
			smoothScrollDelay,
			considerH1,
			considerH2,
			considerH3,
			considerH4,
			considerH5,
			considerH6,
			scrollToTop,
			scrollToTopColor,
			scrollToTopBgColor,
			customWidth,
			width,
			widthType,
			//Color
			backgroundColor,
			linkColor,
			linkHoverColor,
			headingColor,
			//Padding,
			vPadding,
			hPadding,
			headingBottom,
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
			headingLoadGoogleFonts,
			headingFontFamily,
			headingFontWeight,
			headingFontSubset,
			headingFontSize,
			headingFontSizeType,
			headingFontSizeTablet,
			headingFontSizeMobile,
			headingLineHeightType,
			headingLineHeight,
			headingLineHeightTablet,
			headingLineHeightMobile,
		} = attributes

		let loadGFonts
		let headingloadGFonts

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


		if( headingLoadGoogleFonts == true ) {

			const headingconfig = {
				google: {
					families: [ headingFontFamily + ( headingFontWeight ? ":" + headingFontWeight : "" ) ],
				},
			}

			headingloadGFonts = (
				<WebfontLoader config={ headingconfig }>
				</WebfontLoader>
			)
		}

		// Push Styling to Head.
		var element = document.getElementById( "uagb-style-toc-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		var scrollElement = jQuery( ".uagb-toc__scroll-top" )
		if( null != scrollElement && "undefined" != typeof scrollElement ) {

			if ( scrollToTop ) {
				scrollElement.addClass( "uagb-toc__show-scroll" )
			} else {
				scrollElement.removeClass( "uagb-toc__show-scroll" )
			}
		}

		let html = generateContent( this.props )

		if ( "" == html || undefined == html ) {
			html = "<p>NOTE: There are no headings on this post with the selected Heading Tags.</p>"
		}

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
					</PanelBody>
					<PanelBody title={ __( "Scroll" ) } initialOpen={ false }>
						<ToggleControl
							label={ __( "Smooth Scroll" ) }
							checked={ smoothScroll }
							help={ __( "This will be in Action only in Front End." ) }
							onChange={ ( value ) => setAttributes( { smoothScroll: ! smoothScroll } ) }
						/>
						{ smoothScroll &&
							<Fragment>
								<RangeControl
									label={ __( "Smooth Scroll Offset (px)" ) }
									value={ smoothScrollOffset }
									onChange={ ( value ) => setAttributes( { smoothScrollOffset: value } ) }
									min={ 0 }
									max={ 100 }
								/>
								<RangeControl
									label={ __( "Scroll Animation Delay (ms)" ) }
									value={ smoothScrollDelay }
									onChange={ ( value ) => setAttributes( { smoothScrollDelay: value } ) }
									min={ 100 }
									max={ 1000 }
								/>
							</Fragment>
						}
						<hr className="uagb-editor__separator"/>
						<ToggleControl
							label={ __( "Show Scroll To Top" ) }
							checked={ scrollToTop }
							help={ __( "This will add a Scroll to Top arrow at the bottom of page." ) }
							onChange={ ( value ) => setAttributes( { scrollToTop: ! scrollToTop } ) }
						/>
						{ scrollToTop &&
							<Fragment>
								<p className="uagb-setting-label">{ __( "Icon Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: scrollToTopColor }} ></span></span></p>
								<ColorPalette
									value={ scrollToTopColor }
									onChange={ ( colorValue ) => setAttributes( { scrollToTopColor: colorValue } ) }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: scrollToTopBgColor }} ></span></span></p>
								<ColorPalette
									value={ scrollToTopBgColor }
									onChange={ ( colorValue ) => setAttributes( { scrollToTopBgColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						}
					</PanelBody>
					<PanelBody title={ __( "Content" ) } initialOpen={ false }>
						<h2>{ __( "Heading" ) }</h2>
						<TypographyControl
							label={ __( "Font" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: headingLoadGoogleFonts, label: __( "headingLoadGoogleFonts" ) } }
							fontFamily = { { value: headingFontFamily, label: __( "headingFontFamily" ) } }
							fontWeight = { { value: headingFontWeight, label: __( "headingFontWeight" ) } }
							fontSubset = { { value: headingFontSubset, label: __( "headingFontSubset" ) } }
							fontSizeType = { { value: headingFontSizeType, label: __( "headingFontSizeType" ) } }
							fontSize = { { value: headingFontSize, label: __( "headingFontSize" ) } }
							fontSizeMobile = { { value: headingFontSizeMobile, label: __( "headingFontSizeMobile" ) } }
							fontSizeTablet= { { value: headingFontSizeTablet, label: __( "headingFontSizeTablet" ) } }
							lineHeightType = { { value: headingLineHeightType, label: __( "headingLineHeightType" ) } }
							lineHeight = { { value: headingLineHeight, label: __( "headingLineHeight" ) } }
							lineHeightMobile = { { value: headingLineHeightMobile, label: __( "headingLineHeightMobile" ) } }
							lineHeightTablet= { { value: headingLineHeightTablet, label: __( "headingLineHeightTablet" ) } }
						/>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
							allowReset
						/>
						<RangeControl
							label={ __( "Heading Bottom Space" ) }
							value={ headingBottom }
							onChange={ ( value ) => setAttributes( { headingBottom: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Content" ) }</h2>
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
						<p className="uagb-setting-label">{ __( "Content Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: linkColor }} ></span></span></p>
						<ColorPalette
							value={ linkColor }
							onChange={ ( colorValue ) => setAttributes( { linkColor: colorValue } ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Content Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: linkHoverColor }} ></span></span></p>
						<ColorPalette
							value={ linkHoverColor }
							onChange={ ( colorValue ) => setAttributes( { linkHoverColor: colorValue } ) }
							allowReset
						/>
					</PanelBody>
					<PanelBody title={ __( "Style" ) } initialOpen={ false }>
						<h2>{ __( "Background" ) }</h2>
						<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>
						<ColorPalette
							value={ backgroundColor }
							onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator"/>
						<ToggleControl
							label={ __( "Custom Width" ) }
							checked={ customWidth }
							onChange={ ( value ) => setAttributes( { customWidth: ! customWidth } ) }
							help={ __( "Table's width will be auto if this is kept off." ) }
						/>
						{ customWidth &&
							<Fragment>
								<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
									<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ widthType === "px" } aria-pressed={ widthType === "px" } onClick={ () => setAttributes( { widthType: "px" } ) }>{ "px" }</Button>
									<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ widthType === "%" } aria-pressed={ widthType === "%" } onClick={ () => setAttributes( { widthType: "%" } ) }>{ "%" }</Button>
								</ButtonGroup>
								<RangeControl
									label={ __( "Width" ) }
									value={ width }
									onChange={ ( value ) => setAttributes( { width: value } ) }
									min={ 0 }
									max={ ( "%" == widthType ) ? 100 : 1000 }
									beforeIcon=""
									allowReset
								/>
							</Fragment>
						}
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Padding (px)" ) }</h2>
						<RangeControl
							label={ UAGB_Block_Icons.vertical_spacing }
							className={ "uagb-margin-control" }
							value={ vPadding }
							onChange={ ( value ) => setAttributes( { vPadding: value } ) }
							min={ 0 }
							max={ 100 }
						/>
						<RangeControl
							label={ UAGB_Block_Icons.horizontal_spacing }
							className={ "uagb-margin-control" }
							value={ hPadding }
							onChange={ ( value ) => setAttributes( { hPadding: value } ) }
							min={ 0 }
							max={ 100 }
						/>
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
						<RichText
							tagName= { "div" }
							placeholder={ __( "Table Of Content" ) }
							value={ heading }
							className = 'uagb-toc__title'
							onChange = { ( value ) => setAttributes( { heading: value } ) }
							multiline={ false }
							onRemove={ () => props.onReplace( [] ) }
						/>
						<div className="uagb-toc__list-wrap">
							<ul className="uagb-toc__list" dangerouslySetInnerHTML={ { __html: html } }></ul>
						</div>
					</div>
				</div>
				{ loadGFonts }
				{ headingloadGFonts }
			</Fragment>
		)
	}
}

export default UAGBTableOfContentsEdit
