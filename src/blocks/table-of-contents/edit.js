/**
 * BLOCK: Table of Contents
 */

import classnames from "classnames"
import styling from "./styling"
import map from "lodash/map"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"
import TableOfContents from './components';

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
	ColorPalette
} = wp.blockEditor

const {
	Button,
	ButtonGroup,
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	ToggleControl,
	Dashicon,
	TabPanel
} = wp.components


class UAGBTableOfContentsEdit extends Component {

	constructor() {
		super( ...arguments )

		this.regenerateTable = this.regenerateTable.bind( this )
		this.getIcon  	 = this.getIcon.bind(this)
	}

	/*
	 * Event to set Mapping Object.
	 */
	regenerateTable() {

		const { setAttributes } = this.props
	}

	getIcon(value) {
		this.props.setAttributes( { icon: value } )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

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
			heading,
			disableBullets,
			makeCollapsible,
			initialCollapse,
			icon,
			iconColor,
			iconSize,
			smoothScroll,
			smoothScrollOffset,
			smoothScrollDelay,
			scrollToTop,
			scrollToTopColor,
			scrollToTopBgColor,
			customWidth,
			widthDesktop,
			widthTablet,
			widthMobile,
			widthTypeMobile,
			widthTypeTablet,
			widthTypeDesktop,
			tColumnsDesktop,
			tColumnsTablet,
			tColumnsMobile,
			//Color
			backgroundColor,
			linkColor,
			linkHoverColor,
			headingColor,
			//Padding,
			vPaddingDesktop,
			vPaddingTablet,
			vPaddingMobile,
			hPaddingDesktop,
			hPaddingTablet,
			hPaddingMobile,
			paddingTypeMobile,
			paddingTypeTablet,
			paddingTypeDesktop,
			headingBottom,
			// Content Padding,
			contentPaddingDesktop,
			contentPaddingTablet,
			contentPaddingMobile,
			contentPaddingTypeMobile,
			contentPaddingTypeTablet,
			contentPaddingTypeDesktop,
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
			headerLinks,
			mappingHeaders,
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

		// Icon properties.
		const icon_props = {
			icons: svg_icons,
			value: icon,
			onChange: this.getIcon,
			isMulti: false,
			renderFunc: renderSVG,
			noSelectedPlaceholder: __( "Select Icon" )
		}

		let icon_html = ''

		if ( makeCollapsible && icon ) {
			icon_html = (
				<span className="uag-toc__collapsible-wrap">{renderSVG(icon)}</span>
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
						controls={ [ "left", "center", "right" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } initialOpen={ true }>
						<h2>{ __( "Select the heading to consider when generating the table" ) }</h2>
						{mappingHeaders.map((a, i) => (
							<PanelRow>
								<label htmlFor={`ub_toggle_h${i + 1}`}>{`H${i + 1}`}</label>
								<ToggleControl
									id={`ub_toggle_h${i + 1}`}
									checked={a}
									onChange={() =>
										setAttributes({
											mappingHeaders: [
												...mappingHeaders.slice(0, i),
												!mappingHeaders[i],
												...mappingHeaders.slice(i + 1)
											]
										})
									}
								/>
							</PanelRow>
						))}
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
									max={ 1000 }
								/>
								<RangeControl
									label={ __( "Scroll Animation Delay (ms)" ) }
									value={ smoothScrollDelay }
									onChange={ ( value ) => setAttributes( { smoothScrollDelay: value } ) }
									min={ 100 }
									max={ 5000 }
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
						<RangeControl
							label={ __( "Bottom Space" ) }
							value={ headingBottom }
							onChange={ ( value ) => setAttributes( { headingBottom: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						<TypographyControl
							label={ __( "Typography" ) }
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
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Collapsible" ) }</h2>
						<ToggleControl
							label={ __( "Make Content Collapsible" ) }
							checked={ makeCollapsible }
							onChange={ ( value ) => setAttributes( { makeCollapsible: ! makeCollapsible } ) }
						/>
						{ makeCollapsible &&
							<Fragment>
								<ToggleControl
									label={ __( "Keep Collapsed Initially" ) }
									checked={ initialCollapse }
									onChange={ ( value ) => setAttributes( { initialCollapse: ! initialCollapse } ) }
								/>
								<FontIconPicker {...icon_props} />
								<RangeControl
									label = { __( "Icon Size" ) }
									value = { iconSize }
									onChange = { ( value ) => setAttributes( { iconSize: value } ) }
									min = { 0 }
									max = { 300 }
									beforeIcon = ""
									allowReset
								/>
								<ColorPalette
									value={ iconColor }
									onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						}
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Content" ) }</h2>
						<ToggleControl
							label={ __( "Disable Bullet points" ) }
							checked={ disableBullets }
							onChange={ ( value ) => setAttributes( { disableBullets: ! disableBullets } ) }
						/>
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
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeMobile === "px" } aria-pressed={ contentPaddingTypeMobile === "px" } onClick={ () => setAttributes( { contentPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeMobile === "%" } aria-pressed={ contentPaddingTypeMobile === "%" } onClick={ () => setAttributes( { contentPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2 className="uagb-light-font-weight">{ __( "Gap Between Lists" ) }</h2>
												<RangeControl
													className={ "uagb-margin-control" }
													value={ contentPaddingMobile }
													onChange={ ( value ) => setAttributes( { contentPaddingMobile: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
													/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeTablet === "px" } aria-pressed={ contentPaddingTypeTablet === "px" } onClick={ () => setAttributes( { contentPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeTablet === "%" } aria-pressed={ contentPaddingTypeTablet === "%" } onClick={ () => setAttributes( { contentPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2 className="uagb-lighter-font-weight">{ __( "Gap Between Lists" ) }</h2>
												<RangeControl
													className={ "uagb-margin-control" }
													value={ contentPaddingTablet }
													onChange={ ( value ) => setAttributes( { contentPaddingTablet: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
													/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeDesktop === "px" } aria-pressed={ contentPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { contentPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ contentPaddingTypeDesktop === "%" } aria-pressed={ contentPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { contentPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2 className="uagb-light-font-weight">{ __( "Gap Between Lists" ) }</h2>
												<RangeControl
													className={ "uagb-gap-control" }
													value={ contentPaddingDesktop }
													onChange={ ( value ) => setAttributes( { contentPaddingDesktop: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>					
						<TypographyControl
							label={ __( "Typography" ) }
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
							<TabPanel className="uagb-size-type-field-tabs" activeClass="active-tab"
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
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ widthTypeMobile === "px" } aria-pressed={ widthTypeMobile === "px" } onClick={ () => setAttributes( { widthTypeMobile: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ widthTypeMobile === "%" } aria-pressed={ widthTypeMobile === "%" } onClick={ () => setAttributes( { widthTypeMobile: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<RangeControl
														label={ __( "Width" ) }
														value={ widthMobile }
														onChange={ ( value ) => setAttributes( { widthMobile: value } ) }
														min={ 0 }
														max={ ( "%" == widthTypeMobile ) ? 100 : 1000 }
														beforeIcon=""
														allowReset
													/>
												</Fragment>
											)
										} else if ( "tablet" === tab.name ) {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ widthTypeTablet === "px" } aria-pressed={ widthTypeTablet === "px" } onClick={ () => setAttributes( { widthTypeTablet: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ widthTypeTablet === "%" } aria-pressed={ widthTypeTablet === "%" } onClick={ () => setAttributes( { widthTypeTablet: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<RangeControl
														label={ __( "Width" ) }
														value={ widthTablet }
														onChange={ ( value ) => setAttributes( { widthTablet: value } ) }
														min={ 0 }
														max={ ( "%" == widthTypeTablet ) ? 100 : 1000 }
														beforeIcon=""
														allowReset
													/>
												</Fragment>
											)
										} else {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ widthTypeDesktop === "px" } aria-pressed={ widthTypeDesktop === "px" } onClick={ () => setAttributes( { widthTypeDesktop: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ widthTypeDesktop === "%" } aria-pressed={ widthTypeDesktop === "%" } onClick={ () => setAttributes( { widthTypeDesktop: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<RangeControl
														label={ __( "Width" ) }
														value={ widthDesktop }
														onChange={ ( value ) => setAttributes( { widthDesktop: value } ) }
														min={ 0 }
														max={ ( "%" == widthTypeDesktop ) ? 100 : 1000 }
														beforeIcon=""
														allowReset
													/>
												</Fragment>
											)
										}

										return <div>{ tabout }</div>
									}
								}
							</TabPanel>
						}
						<TabPanel className="uagb-size-type-field-tabs uagb-inline-margin" activeClass="active-tab"
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
											<RangeControl
												label={ __( "Columns" ) }
												value={ tColumnsMobile }
												onChange={ ( value ) => setAttributes( { tColumnsMobile: value } ) }
												min={ 1 }
												max={ 10 }
											/>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<RangeControl
												label={ __( "Columns" ) }
												value={ tColumnsTablet }
												onChange={ ( value ) => setAttributes( { tColumnsTablet: value } ) }
												min={ 1 }
												max={ 10 }
											/>
										)
									} else {
										tabout = (
											<RangeControl
												label={ __( "Columns" ) }
												value={ tColumnsDesktop }
												onChange={ ( value ) => setAttributes( { tColumnsDesktop: value } ) }
												min={ 1 }
												max={ 10 }
											/>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<hr className="uagb-editor__separator" />
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
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeMobile === "px" } aria-pressed={ paddingTypeMobile === "px" } onClick={ () => setAttributes( { paddingTypeMobile: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeMobile === "%" } aria-pressed={ paddingTypeMobile === "%" } onClick={ () => setAttributes( { paddingTypeMobile: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPaddingMobile }
													onChange={ ( value ) => setAttributes( { vPaddingMobile: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPaddingMobile }
													onChange={ ( value ) => setAttributes( { hPaddingMobile: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeTablet === "px" } aria-pressed={ paddingTypeTablet === "px" } onClick={ () => setAttributes( { paddingTypeTablet: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeTablet === "%" } aria-pressed={ paddingTypeTablet === "%" } onClick={ () => setAttributes( { paddingTypeTablet: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPaddingTablet }
													onChange={ ( value ) => setAttributes( { vPaddingTablet: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPaddingTablet }
													onChange={ ( value ) => setAttributes( { hPaddingTablet: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeDesktop === "px" } aria-pressed={ paddingTypeDesktop === "px" } onClick={ () => setAttributes( { paddingTypeDesktop: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ paddingTypeDesktop === "%" } aria-pressed={ paddingTypeDesktop === "%" } onClick={ () => setAttributes( { paddingTypeDesktop: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vPaddingDesktop }
													onChange={ ( value ) => setAttributes( { vPaddingDesktop: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hPaddingDesktop }
													onChange={ ( value ) => setAttributes( { hPaddingDesktop: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
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
					`uagb-toc__align-${align}`,
					`uagb-toc__columns-${tColumnsDesktop}`,
					( initialCollapse ) ? `uagb-toc__collapse` : ''
				) }
				id={ `uagb-toc-${ this.props.clientId }` }>
					<div className="uagb-toc__wrap">
						<div className="uagb-toc__title-wrap">
							<RichText
								tagName= { "div" }
								placeholder={ __( "Table Of Contents" ) }
								value={ heading }
								className = 'uagb-toc__title'
								onChange = { ( value ) => setAttributes( { heading: value } ) }
								multiline={ false }
								onRemove={ () => props.onReplace( [] ) }
							/>
							{icon_html}
						</div>
						<TableOfContents
							align={align}
							numcolumns={tColumnsDesktop}
							heading={heading}
							mappingHeaders={mappingHeaders}
							headers={headerLinks && JSON.parse(headerLinks)}
							blockProp={this.props}
						/>
					</div>
				</div>
				{ loadGFonts }
				{ headingloadGFonts }
			</Fragment>
		)
	}
}

export default UAGBTableOfContentsEdit
