/**
 * BLOCK: Marketing Button
 */

import classnames from "classnames"
import styling from "./styling"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

let svg_icons = Object.keys( UAGBIcon )

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
} = wp.blockEditor

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
		$style.setAttribute( "id", "uagb-style-marketing-btn-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			align,
			textAlign,
			heading,
			prefix,
			link,
			linkTarget,
			titleSpace,
			//Icon
			icon,
			iconPosition,
			iconSpace,
			iconFontSize,
			iconFontSizeType,
			iconFontSizeMobile,
			iconFontSizeTablet,
			//Colors
			titleColor,
			titleHoverColor,
			prefixColor,
			prefixHoverColor,
			iconColor,
			iconHoverColor,
			//Border
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			//Background
			vPadding,
			hPadding,
			hPaddingMobile,
			vPaddingMobile,
			hPaddingTablet,
			vPaddingTablet,
			paddingType,
			backgroundType,
			backgroundColor,
			backgroundHoverColor,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			backgroundOpacity,
			backgroundHoverOpacity,
			//Typography
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			titleFontSubset,
			titleFontSize,
			titleFontSizeType,
			titleFontSizeTablet,
			titleFontSizeMobile,
			titleLineHeightType,
			titleLineHeight,
			titleLineHeightTablet,
			titleLineHeightMobile,
			prefixLoadGoogleFonts,
			prefixFontFamily,
			prefixFontWeight,
			prefixFontSubset,
			prefixFontSize,
			prefixFontSizeType,
			prefixFontSizeTablet,
			prefixFontSizeMobile,
			prefixLineHeightType,
			prefixLineHeight,
			prefixLineHeightTablet,
			prefixLineHeightMobile,
		} = attributes

		// Push Styling to Head.
		var element = document.getElementById( "uagb-style-marketing-btn-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		// Load Google fonts for heading.
		let loadTitleGoogleFonts
		if( loadTitleGoogleFonts == true ) {

			const titleconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ":" + titleFontWeight : "" ) ],
				},
			}

			loadTitleGoogleFonts = (
				<WebfontLoader config={ titleconfig }>
				</WebfontLoader>
			)
		}

		// Load Google fonts for prefix.
		let loadPrefixGoogleFonts
		if( loadPrefixGoogleFonts == true ) {

			const prefixconfig = {
				google: {
					families: [ prefixFontFamily + ( prefixFontWeight ? ":" + prefixFontWeight : "" ) ],
				},
			}

			loadPrefixGoogleFonts = (
				<WebfontLoader config={ prefixconfig }>
				</WebfontLoader>
			)
		}

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right", "full" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } initialOpen={ true }>
						<h2>{ __( "Link" ) }</h2>
						<TextControl
							value={ link }
							onChange={ ( value ) => setAttributes( { link: value } ) }
							placeholder={ __( "Enter URL" ) }
						/>
						<ToggleControl
							label={ __( "Open link in New Tab" ) }
							checked={ linkTarget }
							onChange={ ( value ) => setAttributes( { linkTarget : ! linkTarget } ) }
						/>
						<SelectControl
							label={ __( "Text Alignment" ) }
							value={ textAlign }
							onChange={ ( value ) => setAttributes( { textAlign: value } ) }
							options={ [
								{ value: "center", label: __( "Center" ) },
								{ value: "left", label: __( "Left" ) },
								{ value: "right", label: __( "Right" ) },
							] }
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Icon" ) }</h2>
						<FontIconPicker
							icons= { svg_icons }
							renderFunc= { renderSVG }
							value= { icon }
							onChange={ ( value ) => setAttributes( { icon : value } ) }
							isMulti= { false }
							noSelectedPlaceholder= { __( "Select Icon" ) }
						/>
						{ "" != icon && <Fragment>
							<SelectControl
								label={ __( "Icon Position" ) }
								value={ iconPosition }
								onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
								options={ [
									{ value: "before", label: __( "Before Text" ) },
									{ value: "after", label: __( "After Text" ) },
								] }
							/>
							<RangeControl
								label={ __( "Icon Spacing" ) }
								value={ iconSpace }
								onChange={ ( value ) => setAttributes( { iconSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
							<TypographyControl
								label={ __( "Icon Size" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								fontSizeType = { { value: iconFontSizeType, label: __( "iconFontSizeType" ) } }
								fontSize = { { value: iconFontSize, label: __( "iconFontSize" ) } }
								fontSizeMobile = { { value: iconFontSizeMobile, label: __( "iconFontSizeMobile" ) } }
								fontSizeTablet= { { value: iconFontSizeTablet, label: __( "iconFontSizeTablet" ) } }
								fontSizeLabel= { __( "Icon Size" ) }
								disableFontFamily= { true }
								disableLineHeight= { true }
								disableAdvancedOptions = { true }
							/>
						</Fragment>
						}
						<RangeControl
							label={ __( "Title Bottom Spacing" ) }
							value={ titleSpace }
							onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
							min={ 0 }
							max={ 20 }
							beforeIcon=""
							allowReset
						/>
					</PanelBody>
					<PanelBody	title={ __( "Content" ) } initialOpen={ false }	>
						<h2>{ __( "Title" ) }</h2>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: loadTitleGoogleFonts, label: __( "loadTitleGoogleFonts" ) } }
							fontFamily = { { value: titleFontFamily, label: __( "titleFontFamily" ) } }
							fontWeight = { { value: titleFontWeight, label: __( "titleFontWeight" ) } }
							fontSubset = { { value: titleFontSubset, label: __( "titleFontSubset" ) } }
							fontSizeType = { { value: titleFontSizeType, label: __( "titleFontSizeType" ) } }
							fontSize = { { value: titleFontSize, label: __( "titleFontSize" ) } }
							fontSizeMobile = { { value: titleFontSizeMobile, label: __( "titleFontSizeMobile" ) } }
							fontSizeTablet= { { value: titleFontSizeTablet, label: __( "titleFontSizeTablet" ) } }
							lineHeightType = { { value: titleLineHeightType, label: __( "titleLineHeightType" ) } }
							lineHeight = { { value: titleLineHeight, label: __( "titleLineHeight" ) } }
							lineHeightMobile = { { value: titleLineHeightMobile, label: __( "titleLineHeightMobile" ) } }
							lineHeightTablet= { { value: titleLineHeightTablet, label: __( "titleLineHeightTablet" ) } }
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Description" ) }</h2>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: loadPrefixGoogleFonts, label: __( "loadPrefixGoogleFonts" ) } }
							fontFamily = { { value: prefixFontFamily, label: __( "prefixFontFamily" ) } }
							fontWeight = { { value: prefixFontWeight, label: __( "prefixFontWeight" ) } }
							fontSubset = { { value: prefixFontSubset, label: __( "prefixFontSubset" ) } }
							fontSizeType = { { value: prefixFontSizeType, label: __( "prefixFontSizeType" ) } }
							fontSize = { { value: prefixFontSize, label: __( "prefixFontSize" ) } }
							fontSizeMobile = { { value: prefixFontSizeMobile, label: __( "prefixFontSizeMobile" ) } }
							fontSizeTablet= { { value: prefixFontSizeTablet, label: __( "prefixFontSizeTablet" ) } }
							lineHeightType = { { value: prefixLineHeightType, label: __( "prefixLineHeightType" ) } }
							lineHeight = { { value: prefixLineHeight, label: __( "prefixLineHeight" ) } }
							lineHeightMobile = { { value: prefixLineHeightMobile, label: __( "prefixLineHeightMobile" ) } }
							lineHeightTablet= { { value: prefixLineHeightTablet, label: __( "prefixLineHeightTablet" ) } }
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Colors" ) }</h2>
						<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
							activeClass="active-tab"
							tabs={ [
								{
									name: "normal",
									title: __( "Normal" ),
									className: "uagb-normal-tab",
								},
								{
									name: "hover",
									title: __( "Hover" ),
									className: "uagb-focus-tab",
								},
							] }>
							{
								( tabName ) => {
									let tabout_color
									if( "normal" === tabName.name ) {
										tabout_color = <Fragment>
											<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
											<ColorPalette
												value={ titleColor }
												onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
												allowReset
											/>
											<p className="uagb-setting-label">{ __( "Icon Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconColor }} ></span></span></p>
											<ColorPalette
												value={ iconColor }
												onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
												allowReset
											/>
											<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: prefixColor }} ></span></span></p>
											<ColorPalette
												value={ prefixColor }
												onChange={ ( colorValue ) => setAttributes( { prefixColor: colorValue } ) }
												allowReset
											/>
										</Fragment>
									} else {
										tabout_color = <Fragment>
											<p className="uagb-setting-label">{ __( "Title Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleHoverColor }} ></span></span></p>
											<ColorPalette
												value={ titleHoverColor }
												onChange={ ( colorValue ) => setAttributes( { titleHoverColor: colorValue } ) }
												allowReset
											/>
											<p className="uagb-setting-label">{ __( "Icon Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconHoverColor }} ></span></span></p>
											<ColorPalette
												value={ iconHoverColor }
												onChange={ ( colorValue ) => setAttributes( { iconHoverColor: colorValue } ) }
												allowReset
											/>
											<p className="uagb-setting-label">{ __( "Description Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: prefixHoverColor }} ></span></span></p>
											<ColorPalette
												value={ prefixHoverColor }
												onChange={ ( colorValue ) => setAttributes( { prefixHoverColor: colorValue } ) }
												allowReset
											/>
										</Fragment>
									}
									return <div>{ tabout_color }</div>
								}
							}
						</TabPanel>
					</PanelBody>
					<PanelBody title={ __( "Background" ) } initialOpen={ false }>
						<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
							tabs={ [
								{
									name: "desktop",
									title: <Dashicon icon="desktop" />,
									className: "uagb-desktop-tab uagb-responsive-tabs",
								},
								{
									name: "tablet",
									title: <Dashicon icon="tablet" />,
									className: "uagb-tablet-tab uagb-responsive-tabs",
								},
								{
									name: "mobile",
									title: <Dashicon icon="smartphone" />,
									className: "uagb-mobile-tab uagb-responsive-tabs",
								},
							] }>
							{
								( tab ) => {
									let tabout

									if ( "mobile" === tab.name ) {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "px" } aria-pressed={ paddingType === "px" } onClick={ () => setAttributes( { paddingType: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "%" } aria-pressed={ paddingType === "%" } onClick={ () => setAttributes( { paddingType: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Button Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPaddingMobile }
													onChange={ ( value ) => setAttributes( { vPaddingMobile: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPaddingMobile }
													onChange={ ( value ) => setAttributes( { hPaddingMobile: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "px" } aria-pressed={ paddingType === "px" } onClick={ () => setAttributes( { paddingType: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "%" } aria-pressed={ paddingType === "%" } onClick={ () => setAttributes( { paddingType: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Button Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPaddingTablet }
													onChange={ ( value ) => setAttributes( { vPaddingTablet: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPaddingTablet }
													onChange={ ( value ) => setAttributes( { hPaddingTablet: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "px" } aria-pressed={ paddingType === "px" } onClick={ () => setAttributes( { paddingType: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingType === "%" } aria-pressed={ paddingType === "%" } onClick={ () => setAttributes( { paddingType: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Button Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPadding }
													onChange={ ( value ) => setAttributes( { vPadding: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPadding }
													onChange={ ( value ) => setAttributes( { hPadding: value } ) }
													min={ 0 }
													max={ ( "%" == paddingType ) ? 100 : 2000 }
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Background" ) }</h2>
						<SelectControl
							label={ __( "Background Type" ) }
							value={ backgroundType }
							onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
							options={ [
								{ value: "transparent", label: __( "Transparent" ) },
								{ value: "color", label: __( "Color" ) },
								{ value: "gradient", label: __( "Gradient" ) },
							] }
						/>
						{ "color" == backgroundType && (
							<Fragment>
								<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>
								<ColorPalette
									value={ backgroundColor }
									onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
						{ "gradient" == backgroundType &&
							( <Fragment>
								<PanelColorSettings
									title={ __( "Color Settings" ) }
									colorSettings={ [
										{
											value: gradientColor2,
											onChange:( value ) => setAttributes( { gradientColor2: value } ),
											label: __( "Color 1" ),
										},
										{
											value: gradientColor1,
											onChange:( value ) => setAttributes( { gradientColor1: value } ),
											label: __( "Color 2" ),
										},
									] }
								>
								</PanelColorSettings>
								<SelectControl
									label={ __( "Type" ) }
									value={ gradientType }
									onChange={ ( value ) => setAttributes( { gradientType: value } ) }
									options={ [
										{ value: "linear", label: __( "Linear" ) },
										{ value: "radial", label: __( "Radial" ) },
									] }
								/>
								<RangeControl
									label={ __( "Location 1" ) }
									value={ gradientLocation1 }
									onChange={ ( value ) => setAttributes( { gradientLocation1: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
								/>
								<RangeControl
									label={ __( "Location 2" ) }
									value={ gradientLocation2 }
									onChange={ ( value ) => setAttributes( { gradientLocation2: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
								/>
								<RangeControl
									label={ __( "Angle" ) }
									value={ gradientAngle }
									onChange={ ( value ) => setAttributes( { gradientAngle: value } ) }
									min={ 0 }
									max={ 360 }
									allowReset
								/>
							</Fragment> )
						}
						{ "transparent" != backgroundType &&
							<RangeControl
								label={ __( "Opacity" ) }
								value={ backgroundOpacity }
								onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
								initialPosition={0}
							/>
						}
						{ "color" == backgroundType && (
							<Fragment>
								<p className="uagb-setting-label">{ __( "Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundHoverColor }} ></span></span></p>
								<ColorPalette
									value={ backgroundHoverColor }
									onChange={ ( colorValue ) => setAttributes( { backgroundHoverColor: colorValue } ) }
									allowReset
								/>
								<RangeControl
									label={ __( "Opacity" ) }
									value={ backgroundHoverOpacity }
									onChange={ ( value ) => setAttributes( { backgroundHoverOpacity: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
									initialPosition={0}
								/>
							</Fragment>
						) }
					</PanelBody>
					<PanelBody title={ __( "Border" ) } initialOpen={ false }>
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
								<p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderHoverColor }} ></span></span></p>
								<ColorPalette
									value={ borderHoverColor }
									onChange={ ( colorValue ) => setAttributes( { borderHoverColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-marketing-btn__outer-wrap",
					`uagb-marketing-btn__align-${ align }`,
					`uagb-marketing-btn__align-text-${ textAlign }`,
					`uagb-marketing-btn__icon-${ iconPosition }`
				) }
				id={ `uagb-marketing-btn-${ this.props.clientId }` }>
					<div className="uagb-marketing-btn__wrap">
						<a className="uagb-marketing-btn__link">
							<div className="uagb-marketing-btn__title-wrap">
								{ "" != icon &&
									<div className="uagb-marketing-btn__icon-wrap">
										{ renderSVG( icon ) }
									</div>
								}
								<RichText
									placeholder={ __( "Add Button Title…" ) }
									value={ heading }
									tagName='h6'
									onChange={ ( value ) => setAttributes( { heading: value } ) }
									className='uagb-marketing-btn__title'
									onRemove={ () => this.props.onReplace( [] ) }
									multiline={ false }
									onMerge = { this.props.mergeBlocks }
									unstableOnSplit = {
										this.props.insertBlocksAfter ?
											( before, after, ...blocks ) => {
												setAttributes( { content: before } )
												this.props.insertBlocksAfter( [
													...blocks,
													createBlock( "core/paragraph", { content: after } ),
												] )
											} :
											undefined
									}
								/>
							</div>
							<div className="uagb-marketing-btn__prefix-wrap">
								<RichText
									placeholder={ __( "Add Button Description…" ) }
									value={ prefix }
									tagName='p'
									onChange={ ( value ) => setAttributes( { prefix: value } ) }
									className='uagb-marketing-btn__prefix'
									onRemove={ () => this.props.onReplace( [] ) }
									multiline={ false }
									onMerge = { this.props.mergeBlocks }
									unstableOnSplit = {
										this.props.insertBlocksAfter ?
											( before, after, ...blocks ) => {
												setAttributes( { content: before } )
												this.props.insertBlocksAfter( [
													...blocks,
													createBlock( "core/paragraph", { content: after } ),
												] )
											} :
											undefined
									}
								/>
							</div>
						</a>
					</div>
				</div>
				{ loadTitleGoogleFonts }
				{ loadPrefixGoogleFonts }
			</Fragment>
		)
	}
}

export default UAGBMarketingButtonEdit
