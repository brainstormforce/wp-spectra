/**
 * BLOCK: Call To Action
 */


import classnames from "classnames"
import map from "lodash/map"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Title from "./components/Title"
import Description from "./components/Description"
import CtaPositionClasses from "./classes"
import CTA from "./components/CTA"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import CtaStyle from "./inline-styles"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	PanelColorSettings,
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon,
	ToggleControl,
	TextControl,
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

const { Component, Fragment } = wp.element

class UAGBCallToAction extends Component {

	constructor() {
		super( ...arguments )
		this.toggleTarget     = this.toggleTarget.bind( this )
		this.setCtaIcon  	  = this.setCtaIcon.bind(this)
	}

	setCtaIcon(value) {
		this.props.setAttributes( { ctaIcon: value } )
	}

	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { ctaTarget: ! ctaTarget } )
	}

	render() {

		const { className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			textAlign,
			titleColor,
			descColor,
			titleTag,
			titleFontSize,
			titleFontSizeType,
			titleFontSizeMobile,
			titleFontSizeTablet,
			descFontSize,
			descFontSizeType,
			descFontSizeMobile,
			descFontSizeTablet,
			separatorWidth,
			separatorHeight,
			titleSpace,
			separatorSpace,
			descSpace,
			ctaPosition,
			block_id,
			buttonAlign,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaIcon,
			ctaIconPosition,
			ctaIconSpace,
			ctaFontSize,
			ctaFontSizeType,
			ctaFontSizeMobile,
			ctaFontSizeTablet,
			contentWidth,
			ctaBtnLinkColor,
			ctaBgHoverColor,
			ctaBgColor,
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaBorderStyle,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderWidth,
			ctaBorderRadius,
			stack,
			ctaLeftSpace,
			ctaRightSpace,
			ctaLinkHoverColor
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-cta-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = CtaStyle( this.props )
		}

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const titleTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ titleFontSizeType === key }
						aria-pressed={ titleFontSizeType === key }
						onClick={ () => setAttributes( { titleFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const descTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ descFontSizeType === key }
						aria-pressed={ descFontSizeType === key }
						onClick={ () => setAttributes( { descFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const ctaTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ ctaFontSizeType === key }
						aria-pressed={ ctaFontSizeType === key }
						onClick={ () => setAttributes( { ctaFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		// Icon properties.
		const cta_icon_props = {
			icons: svg_icons,
			value: ctaIcon,
			onChange: this.setCtaIcon,
			isMulti: false,
			renderFunc: renderSVG,
			noSelectedPlaceholder: __( "Select Icon" )
		}

		// CTA settings.
		const ctaSettings = (
			<PanelBody title={ __( "Button" ) } initialOpen={ false }>
				<SelectControl
					label={ __( "Type" ) }
					value={ ctaType }
					onChange={ ( value ) => setAttributes( { ctaType: value } ) }
					options={ [
						{ value: "none", label: __( "None" ) },
						{ value: "text", label: __( "Text" ) },
						{ value: "button", label: __( "Button" ) },
						{ value: "all", label: __( "Complete Box" ) },
					] }
				/>
				{ ( ctaType === "text" || ctaType === "button" ) &&
					<Fragment>
						<TextControl
							label= { __( "Text" ) }
							value= { ctaText }
							onChange={ value => setAttributes( { ctaText: value } ) }
						/>
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
												{ctaTypesControls}
												<RangeControl
													label={ __( "Button Font Size" ) }
													value={ ctaFontSizeMobile }
													onChange={ ( value ) => setAttributes( { ctaFontSizeMobile: value } ) }
													beforeIcon="editor-textcolor"
													allowReset
													min={ 0 }
													max={ 50 }
													initialPosition={16}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{ctaTypesControls}
												<RangeControl
													label={ __( "Button Font Size" ) }
													value={ ctaFontSizeTablet }
													onChange={ ( value ) => setAttributes( { ctaFontSizeTablet: value } ) }
													beforeIcon="editor-textcolor"
													allowReset
													min={ 0 }
													max={ 50 }
													initialPosition={16}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{ctaTypesControls}
												<RangeControl
													label={ __( "Button Font Size" ) }
													value={ ctaFontSize }
													onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
													beforeIcon="editor-textcolor"
													allowReset
													min={ 0 }
													max={ 50 }
													initialPosition={16}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
					</Fragment>
				}
				{ ( ctaType !== "none" ) &&
					<Fragment>
						<TextControl
							label= { __( "Link" ) }
							value= { ctaLink }
							onChange={ value => setAttributes( { ctaLink: value } ) }
						/>
						<ToggleControl
							label={ __( "Open in new Window" ) }
							checked={ ctaTarget }
							onChange={ this.toggleTarget }
						/>
					</Fragment>
				}
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Button Icon" ) }</h2>
				{ ( ctaType !== "all" ) && ( ctaType !== "none" ) &&
					<Fragment>
						<FontIconPicker {...cta_icon_props} />
						{ ctaIcon != "" &&
							<Fragment>
								<SelectControl
									label={ __( "Icon Position" ) }
									value={ ctaIconPosition }
									onChange={ ( value ) => setAttributes( { ctaIconPosition: value } ) }
									options={ [
										{ value: "before", label: __( "Before Text" ) },
										{ value: "after", label: __( "After Text" ) },
									] }
								/>
								<RangeControl
									label={ __( "Icon Spacing" ) }
									value={ ctaIconSpace }
									onChange={ ( value ) => setAttributes( { ctaIconSpace: value } ) }
									min={ 0 }
									max={ 50 }
									beforeIcon=""
									allowReset
								/>
							</Fragment>
						}
					</Fragment>
				}

				{ ( ctaType == "button" ) && (
					<Fragment>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Padding (px)" ) }</h2>
						<RangeControl
							label={ UAGB_Block_Icons.vertical_spacing }
							className={ "uagb-margin-control" }
							value={ ctaBtnVertPadding }
							onChange={ ( value ) => setAttributes( { ctaBtnVertPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ UAGB_Block_Icons.horizontal_spacing }
							className={ "uagb-margin-control" }
							value={ ctaBtnHrPadding }
							onChange={ ( value ) => setAttributes( { ctaBtnHrPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Border" ) }</h2>
						<SelectControl
							label={ __( "Style" ) }
							value={ ctaBorderStyle }
							onChange={ ( value ) => setAttributes( { ctaBorderStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "dotted", label: __( "Dotted" ) },
							] }
						/>
						{ ctaBorderStyle != "none" &&
							<Fragment>
								<RangeControl
									label={ __( "Width" ) }
									value={ ctaBorderWidth }
									onChange={ ( value ) => setAttributes( { ctaBorderWidth: value } ) }
									min={ 0 }
									max={ 10 }
									beforeIcon=""
									allowReset
								/>
								<RangeControl
									label={ __( "Rounded Corner" ) }
									value={ ctaBorderRadius }
									onChange={ ( value ) => setAttributes( { ctaBorderRadius: value } ) }
									min={ 0 }
									max={ 100 }
									beforeIcon=""
									allowReset
								/>
							</Fragment>
						}
					</Fragment>
				)
				}
				{ ( ctaType === "text" ) && <TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
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
							className: "uagb-hover-tab",
						},
					] }>
					{
						( tabName ) => {
							let cta_text_tab
							if( "normal" === tabName.name ) {
								cta_text_tab = cta_txt_color
							}else {
								cta_text_tab = cta_txt_hover_color
							}
							return <div>{ cta_text_tab }</div>
						}
					}
				</TabPanel>
				}

				{ ( ctaType === "button") &&
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
								let tabout
								if( "normal" === tabName.name ) {
									tabout = ctaNormalSettings
								}else {
									tabout = ctaHoverSettings
								}
								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				}
			</PanelBody>
		)

		const ctaNormalSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBtnLinkColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBtnLinkColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBgColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBgColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ) }
					allowReset
				/>
				{ ( ctaBorderStyle !== "none" ) && <Fragment>
					<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderColor }} ></span></span></p>
				    <ColorPalette
				        value={ ctaBorderColor }
				        onChange={ ( colorValue ) => setAttributes( { ctaBorderColor: colorValue } ) }
				        allowReset
				    />
				    </Fragment>
				}
			</Fragment>
		)

		const ctaHoverSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
				<ColorPalette
					value={ ctaLinkHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBgHoverColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBgHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ) }
					allowReset
				/>
				{ ( ctaBorderStyle !== "none" ) && <Fragment>
					<p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderhoverColor }} ></span></span></p>
				    <ColorPalette
				        value={ ctaBorderhoverColor }
				        onChange={ ( colorValue ) => setAttributes( { ctaBorderhoverColor: colorValue } ) }
				        allowReset
				    />
				    </Fragment>
				}
			</Fragment>
		)

		const cta_txt_color = (
			<Fragment>
			    <p className="uagb-setting-label">{ __( "CTA Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBtnLinkColor }} ></span></span></p>
			    <ColorPalette
			        value={ ctaBtnLinkColor }
			        onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
			        allowReset
			    />
			</Fragment>
		)

		const cta_txt_hover_color = (
			<Fragment>
			    <p className="uagb-setting-label">{ __( "CTA Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
			    <ColorPalette
			        value={ ctaLinkHoverColor }
			        onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
			        allowReset
			    />
			</Fragment>
		)

		// Typography settings.
		const TypographySettings = (
			<PanelBody title={ __( "Content" ) } initialOpen={ false }>
				<h2>{ __( "Heading" ) }</h2>
				<SelectControl
					label={ __( "Tag" ) }
					value={ titleTag }
					onChange={ ( value ) => setAttributes( { titleTag: value } ) }
					options={ [
						{ value: "h1", label: __( "H1" ) },
						{ value: "h2", label: __( "H2" ) },
						{ value: "h3", label: __( "H3" ) },
						{ value: "h4", label: __( "H4" ) },
						{ value: "h5", label: __( "H5" ) },
						{ value: "h6", label: __( "H6" ) },
					] }
				/>

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
										{titleTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ titleFontSizeMobile }
											onChange={ ( value ) => setAttributes( { titleFontSizeMobile: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={30}
										/>
									</Fragment>
								)
							} else if ( "tablet" === tab.name ) {
								tabout = (
									<Fragment>
										{titleTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ titleFontSizeTablet }
											onChange={ ( value ) => setAttributes( { titleFontSizeTablet: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={30}
										/>
									</Fragment>
								)
							} else {
								tabout = (
									<Fragment>
										{titleTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ titleFontSize }
											onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={30}
										/>
									</Fragment>
								)
							}

							return <div>{ tabout }</div>
						}
					}
				</TabPanel>
				<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
				<ColorPalette
					value={ titleColor }
					onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Description" ) }</h2>
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
										{descTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ descFontSizeMobile }
											onChange={ ( value ) => setAttributes( { descFontSizeMobile: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={16}
										/>
									</Fragment>
								)
							} else if ( "tablet" === tab.name ) {
								tabout = (
									<Fragment>
										{descTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ descFontSizeTablet }
											onChange={ ( value ) => setAttributes( { descFontSizeTablet: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={16}
										/>
									</Fragment>
								)
							} else {
								tabout = (
									<Fragment>
										{descTypesControls}
										<RangeControl
											label={ __( "Font Size" ) }
											value={ descFontSize }
											onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
											min={ 1 }
											max={ 100 }
											beforeIcon="editor-textcolor"
											allowReset
											initialPosition={16}
										/>
									</Fragment>
								)
							}

							return <div>{ tabout }</div>
						}
					}
				</TabPanel>
				<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
				<ColorPalette
					value={ descColor }
					onChange={ ( colorValue ) => setAttributes( { descColor: colorValue } ) }
					allowReset
				/>
			</PanelBody>
		)

		// Margin Settings.
		const marginSettings = (
			<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
				<RangeControl
					label={ __( "Heading Bottom Margin" ) }
					value={ titleSpace }
					onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
					min={ 0 }
					max={ 50 }
					beforeIcon=""
					allowReset
				/>
				<RangeControl
					label={ __( "Description Bottom Margin" ) }
					value={ descSpace }
					onChange={ ( value ) => setAttributes( { descSpace: value } ) }
					min={ 0 }
					max={ 50 }
					beforeIcon=""
					allowReset
				/>

				{ ( textAlign === "left" && ctaPosition === "right" ) &&
					<RangeControl
						label={ __( "Content Left Margin" ) }
						value={ ctaLeftSpace }
						onChange={ ( value ) => setAttributes( { ctaLeftSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon=""
						allowReset
					/>
				}
				{ ( textAlign === "right" && ctaPosition === "right" ) &&
					<RangeControl
						label={ __( "Content Right Margin" ) }
						value={ ctaRightSpace }
						onChange={ ( value ) => setAttributes( { ctaRightSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon=""
						allowReset
					/>
				}
			</PanelBody>
		)

		const layouts = (
			<PanelBody title={ __( "Layout" ) } initialOpen={ true }>
				<SelectControl
					label={ __( "Button Position" ) }
					value={ ctaPosition }
					onChange={ ( value ) => setAttributes( { ctaPosition: value } ) }
					options={ [
						{ value: "right", label: __( "Normal" ) },
						{ value: "below-title", label: __( "Stack" ) },
					] }
				/>
				{ ( ctaPosition == "right" ) &&
						<SelectControl
							label={ __( "Stack on" ) }
							value={ stack }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "tablet", label: __( "Tablet" ) },
								{ value: "mobile", label: __( "Mobile" ) },
							] }
							help={ __( "Note: Choose on what breakpoint the CTA button will stack." ) }
							onChange={ ( value ) => setAttributes( { stack: value } ) }
						/>
				}

				{ ( ctaType === "text" || ctaType === "button" ) &&
					<Fragment>
						{ ctaPosition === "right" &&
							<RangeControl
								label={ __( "Content Width (%)" ) }
								value={ contentWidth }
								onChange={ ( value ) => setAttributes( { contentWidth: value } ) }
								min={ 0 }
								max={ 100 }
								initialPosition={70}
								allowReset
							/>
						}
					</Fragment>
				}

				{ ( ctaPosition && ctaPosition === "right"  ) && <SelectControl
					label={ __( "Verticle Alignment" ) }
					value={ buttonAlign }
					onChange={ ( value ) => setAttributes( { buttonAlign: value } ) }
					options={ [
						{ value: "top", label: __( "Top" ) },
						{ value: "middle", label: __( "Middle" ) },
					] }
				/>
				}
			</PanelBody>
		)

		// Global Controls.
		const inspect_control = (
			<InspectorControls>
				{ ( ctaType !== "all" ) && ( ctaType !== "none" ) && layouts }
				{ TypographySettings }
				{ ctaSettings }
				{ marginSettings }
			</InspectorControls>
		)

		// Get icon/Image components.
		let is_cta =  <CTA attributes={attributes} setAttributes = { setAttributes }/>
		// Get description components.
		const desc = (
			<div className = "uagb-cta-text-wrap">
				{ <Description attributes={attributes} setAttributes = { setAttributes } props = { this.props } />}
			</div>
		)

		// Get Title components.
		const title_text = (
			<div className = "uagb-cta__title-wrap">
				{ <Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
			</div>
		)

		const output = (
			<div className = { classnames(
				"uagb-cta__content-wrap",
				...CtaPositionClasses( attributes ),
			) }>
				<div className = "uagb-cta__left-right-wrap">

					<div className = "uagb-cta__content">

						{ ctaPosition == "below-title"  &&
								<Fragment>
							     { title_text }
							     { desc }
							     { is_cta }
							    </Fragment>
						}

						{ ( ctaPosition == "right") &&
								<Fragment>
									{ title_text }
									{ desc }
								</Fragment>
						}

					</div>

					{ ( ctaPosition == "right") &&
								is_cta
					}
				</div>
			</div>
		)

		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
				</BlockControls>

				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-cta__outer-wrap"
				) }
				id = { `uagb-cta-block-${this.props.clientId}` }
				>
					{ ( ctaType == "all") &&
							<Fragment>
								<a href= "javascript:void(0)" className = "uagb-cta__block-link-wrap uagb-cta__link-to-all" rel ="noopener noreferrer" > </a>
								{output}
							</Fragment>
					}
					{ ( ctaType !== "all") && output }
				</div>
			</Fragment>
		)
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-cta-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBCallToAction
