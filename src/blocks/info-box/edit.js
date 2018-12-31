// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Prefix from "./components/Prefix"
import Title from "./components/Title"
import InfoBoxDesc from "./components/InfoBoxDesc"
import InfoBoxIcon from "./components/InfoBoxIcon"
import InfoBoxPositionClasses from "./classes"
import InfoBoxSeperator from "./components/InfoBoxSeperator"
import InfoBoxCta from "./components/InfoBoxCta"
import InfoBoxStyle from "./inline-styles"
import InfoBoxIconImage from "./components/InfoBoxIconImage"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	withNotices,
} = wp.components

const {
	compose
} = wp.compose

const {
	withSelect
} = wp.data

const {
	withViewportMatch
} = wp.viewport

// Extend component
const { Component, Fragment } = wp.element

class UAGBinfoBox extends Component {

	constructor() {

		super( ...arguments )
		this.getIfbIcon  	  = this.getIfbIcon.bind(this)
		this.toggleTarget     = this.toggleTarget.bind( this )
		this.toggleResponsive = this.toggleResponsive.bind( this )
		this.onSelectImage    = this.onSelectImage.bind( this )
		this.onRemoveImage    = this.onRemoveImage.bind( this )
		this.getCtaicon  	  = this.getCtaicon.bind(this)
	}

	getIfbIcon(value) {
		this.props.setAttributes( { icon: value } )
	}

	getCtaicon(value) {
		this.props.setAttributes( { ctaIcon: value } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } )
			return
		}

		if ( ! media.type || "image" !== media.type ) {
			setAttributes( { iconImage: null } )
			return
		}

		setAttributes( { iconImage: media } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { iconImage: null } )
	}

	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { ctaTarget: ! ctaTarget } )
	}

	/**
	 * Function Name: toggleResponsive.
	 */
	toggleResponsive() {
		const { responsiveDesign } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { responsiveDesign: ! responsiveDesign } )
	}

	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props

		// Setup the attributes.
		const {
			prefixTitle,
			infoBoxTitle,
			headingDesc,
			headingAlign,
			headingColor,
			subHeadingColor,
			prefixColor,
			prefixTag,
			prefixFontSize,
			headingTag,
			headFontSize,
			subHeadFontSize,
			separatorWidth,
			separatorHeight,
			seperatorSpace,
			headSpace,
			separatorSpace,
			subHeadSpace,
			icon,
			iconColor,
			iconSize,
			iconimgPosition,
			block_id,
			iconHover,
			iconimgBorderRadius,
			source_type,
			sourceAlign,
			seperatorStyle,
			seperatorWidth,
			seperatorColor,
			seperatorThickness,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaIcon,
			ctaIconPosition,
			ctaIconSpace,
			ctaLinkColor,
			ctaFontSize,
			ctaBtnLinkColor,
			ctaLinkHoverColor,
			ctaBgHoverColor,
			ctaBgColor,
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaBorderStyle,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderWidth,
			ctaBorderRadius,
			prefixSpace,
			iconLeftMargin,
			iconRightMargin,
			iconTopMargin,
			iconBottomMargin,
			iconImage,
			imageSize,
			imageWidth,
			stack,
			showPrefix,
			showTitle,
			showDesc,
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-info-box-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = InfoBoxStyle( this.props )
		}

		// Icon properties.
		const icon_props = {
		  icons: UAGBIcon,
		  renderUsing: "class",
		  theme: "default",
		  value: icon,
		  onChange: this.getIfbIcon,
		  isMulti: false,
		}

		// Icon properties.
		const cta_icon_props = {
		  icons: UAGBIcon,
		  renderUsing: "class",
		  theme: "default",
		  value: ctaIcon,
		  onChange: this.getCtaicon,
		  isMulti: false,
		}

		const my_block_id = "uagb-infobox-"+this.props.clientId


		// Settings for icon.
		const iconControls = (
			<Fragment>
				<FontIconPicker {...icon_props} />
				<RangeControl
					label = { __( "Icon Size" ) }
					value = { iconSize }
					onChange = { ( value ) => setAttributes( { iconSize: value } ) }
					min = { 10 }
					max = { 300 }
					beforeIcon = ""
					allowReset
				/>
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: iconColor,
							onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
							label: __( "Icon Color" ),
						},
						{
							value: iconHover,
							onChange: ( colorValue ) => setAttributes( { iconHover: colorValue } ),
							label: __( "Icon Hover Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		// Seperator settings.
		const seperatorSettings = (
			<Fragment>
				<PanelBody
					title={ __( "Seperator" ) }
					initialOpen={ false } >

					<SelectControl
						label={ __( "Style" ) }
						value={ seperatorStyle }
						onChange={ ( value ) => setAttributes( { seperatorStyle: value } ) }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "solid", label: __( "Solid" ) },
							{ value: "double", label: __( "Double" ) },
							{ value: "dashed", label: __( "Dashed" ) },
							{ value: "dotted", label: __( "Dotted" ) },
						] }
					/>
					{ "none" !== seperatorStyle &&
					( <Fragment>
						<Fragment>
						    <p className="uagb-setting-label">{ __( "Seperator Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: seperatorColor }} ></span></span></p>
						    <ColorPalette
						        value={ seperatorColor }
						        onChange={ ( colorValue ) => setAttributes( { seperatorColor: colorValue } ) }
						        allowReset
						    />
						</Fragment>

						<RangeControl
							label={ __( "Thickness" ) }
							value={ seperatorThickness }
							onChange={ ( value ) => setAttributes( { seperatorThickness: value } ) }
							min={ 0 }
							max={ 10 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ __( "Width" ) }
							value={ seperatorWidth }
							onChange={ ( value ) => setAttributes( { seperatorWidth: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon=""
							allowReset
						/>
					</Fragment>
					)
					}

				</PanelBody>
			</Fragment>
		)

		// CTA settings.
		const ctaSettings = (
			<Fragment>
				<PanelBody
					title={ __( "Call To Action" ) }
					initialOpen={ false }
				>
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
					<TextControl
						label= { __( "Text" ) }
						value= { ctaText }
						onChange={ value => setAttributes( { ctaText: value } ) }
					/>
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

					{ ( ctaType !== "all" ) && ( ctaType !== "none" ) &&
						<Fragment>
							<FontIconPicker {...cta_icon_props} />
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

					{ ( ctaType == "button" ) && (
						<Fragment>

							<RangeControl
								label={ __( "Vertical Padding" ) }
								value={ ctaBtnVertPadding }
								onChange={ ( value ) => setAttributes( { ctaBtnVertPadding: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
							<RangeControl
								label={ __( "HorizontalPadding" ) }
								value={ ctaBtnHrPadding }
								onChange={ ( value ) => setAttributes( { ctaBtnHrPadding: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
							<SelectControl
								label={ __( "Border Style" ) }
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

							{ ( ctaBorderStyle !== "none" ) && (
								<Fragment>
									<RangeControl
										label={ __( "Border Width" ) }
										value={ ctaBorderWidth }
										onChange={ ( value ) => setAttributes( { ctaBorderWidth: value } ) }
										min={ 0 }
										max={ 10 }
										beforeIcon=""
										allowReset
									/>
									<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderColor }} ></span></span></p>
								    <ColorPalette
								        value={ ctaBorderColor }
								        onChange={ ( colorValue ) => setAttributes( { ctaBorderColor: colorValue } ) }
								        allowReset
								    />
								    <p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderhoverColor }} ></span></span></p>
								    <ColorPalette
								        value={ ctaBorderhoverColor }
								        onChange={ ( colorValue ) => setAttributes( { ctaBorderhoverColor: colorValue } ) }
								        allowReset
								    />
								</Fragment>
							)
							}
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
					)
					}
				</PanelBody>
			</Fragment>
		)

		const ctaNormalSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "CTA Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: ctaBtnLinkColor,
							onChange: ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ),
							label: __( "Color" ),
						},
						{
							value: ctaBgColor,
							onChange: ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ),
							label: __( "Background Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		const ctaHoverSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "CTA Hover Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: ctaLinkHoverColor,
							onChange: ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ),
							label: __( "Hover Color" ),
						},
						{
							value: ctaBgHoverColor,
							onChange: ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ),
							label: __( "Background Hover Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody
					title={ __( "Typography" ) }
					initialOpen={ false }
				>	
					<ToggleControl
						label={ __( "Enable Prefix" ) }
						checked={ showPrefix }
						onChange={ ( value ) => setAttributes( { showPrefix: ! showPrefix } ) }
					/>
					{ showPrefix &&
						<RangeControl
							label={ __( "Prefix Font Size" ) }
							value={ prefixFontSize }
							onChange={ ( value ) => setAttributes( { prefixFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					}

					<ToggleControl
						label={ __( "Enable Heading" ) }
						checked={ showTitle }
						onChange={ ( value ) => setAttributes( { showTitle: ! showTitle } ) }
					/>
					{ showTitle && <Fragment>
						<SelectControl
							label={ __( "Title Tag" ) }
							value={ headingTag }
							onChange={ ( value ) => setAttributes( { headingTag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
						/>
						<RangeControl
							label={ __( "Heading Font Size" ) }
							value={ headFontSize }
							onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							initialPosition={30}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</Fragment>
					}
					<ToggleControl
						label={ __( "Enable Description" ) }
						checked={ showDesc }
						onChange={ ( value ) => setAttributes( { showDesc: ! showDesc } ) }
					/>
					{ showDesc &&
						<RangeControl
							label={ __( "Description Font Size" ) }
							value={ subHeadFontSize }
							onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					}

					{ ( ctaType === "text" || ctaType === "button" ) &&	(

						<RangeControl
							label={ __( "CTA Font Size" ) }
							value={ ctaFontSize }
							onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
							min={ 0 }
							max={ 50 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					)
					}

				</PanelBody>
				<PanelBody
					title={ __( "Color Settings" ) }
					initialOpen={ true }
				>					
					{ showPrefix && <Fragment>
						    <p className="uagb-setting-label">{ __( "Prefix Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: prefixColor }} ></span></span></p>
						    <ColorPalette
						        value={ prefixColor }
						        onChange={ ( colorValue ) => setAttributes( { prefixColor: colorValue } ) }
						        allowReset
						    />
						    </Fragment>	
					}
					{ showTitle && <Fragment>
						    <p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						    <ColorPalette
						        value={ headingColor }
						        onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
						        allowReset
						    /> </Fragment>	
					}
					{ showDesc && <Fragment>
						    <p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						    <ColorPalette
						        value={ subHeadingColor }
						        onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
						        allowReset
						    /> </Fragment>	
					}
					
					{ ( ctaType === "text") &&
							<Fragment>
							    <p className="uagb-setting-label">{ __( "CTA Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkColor }} ></span></span></p>
							    <ColorPalette
							        value={ ctaLinkColor }
							        onChange={ ( colorValue ) => setAttributes( { ctaLinkColor: colorValue } ) }
							        allowReset
							    />
							    <p className="uagb-setting-label">{ __( "CTA Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
							    <ColorPalette
							        value={ ctaLinkHoverColor }
							        onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
							        allowReset
							    />
							</Fragment>
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


			</Fragment>
		)

		// Margin Settings.
		const marginSettings = (
			<Fragment>
				<PanelBody
					title={ __( "Spacing" ) }
					initialOpen={ false }
				>
					{ showPrefix && 
						<RangeControl
							label={ __( "Prefix Bottom Margin" ) }
							value={ prefixSpace }
							onChange={ ( value ) => setAttributes( { prefixSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					}
					{ showTitle && 
						<RangeControl
							label={ __( "Heading Bottom Margin" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					}					
					<RangeControl
						label={ __( "Seperator Bottom Margin" ) }
						value={ seperatorSpace }
						onChange={ ( value ) => setAttributes( { seperatorSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon=""
						allowReset
					/>
					{ showDesc && 
						<RangeControl
							label={ __( "Description Bottom Margin" ) }
							value={ subHeadSpace }
							onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					}
					<PanelBody
						title={ __( "Image/Icon Margins" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Left Margin" ) }
							value={ iconLeftMargin }
							onChange={ ( value ) => setAttributes( { iconLeftMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ __( "Right Margin" ) }
							value={ iconRightMargin }
							onChange={ ( value ) => setAttributes( { iconRightMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ __( "Top Margin" ) }
							value={ iconTopMargin }
							onChange={ ( value ) => setAttributes( { iconTopMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ iconBottomMargin }
							onChange={ ( value ) => setAttributes( { iconBottomMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					</PanelBody>
				</PanelBody>
			</Fragment>
		)

		// Image sizes.
		const imageSizeOptions = [
			{ value: "thumbnail", label: __( "Thumbnail" ) },
			{ value: "medium", label: __( "Medium" ) },
			{ value: "full", label: __( "Large" ) }
		]

		let image_name = "Select Image"
		if(iconImage){
			if(iconImage.url == null || iconImage.url == "" ){
				image_name = "Select Image"
			}else{
				image_name = "Replace Image"
			}
		}

		// Image controls.
		const imageControls = (
			<Fragment>
				<BaseControl
					className="editor-bg-image-control"
					label={ __( "Image" ) }
				>
					<MediaUpload
						title={ __( "Select Image" ) }
						onSelect={ this.onSelectImage }
						allowedTypes= { [ "image" ] }
						value={ iconImage }
						render={ ( { open } ) => (
							<Button isDefault onClick={ open }>
								{ image_name }
							</Button>
						) }
					/>
					{ ( iconImage && iconImage.url !=="null" && iconImage.url !== "" ) &&
						<Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
							{ __( "Remove Image" ) }
						</Button>
					}
				</BaseControl>
				{ ( iconImage && iconImage.url !=="null" && iconImage.url !== "" ) &&
					<Fragment>
						<SelectControl
							label={ __( "Image Size" ) }
							options={ imageSizeOptions }
							value={ imageSize }
							onChange={ ( value ) => setAttributes( { imageSize: value } ) }
						/>
						<RangeControl
							label={ __( "Width" ) }
							value={ imageWidth }
							onChange={ ( value ) => setAttributes( { imageWidth: value } ) }
							min={ 0 }
							max={ 500 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label = { __( "Rounded Corners" ) }
							value = { iconimgBorderRadius }
							onChange = { ( value ) => setAttributes( { iconimgBorderRadius: value } ) }
							min = { 0 }
							max = { 500 }
							beforeIcon = ""
							allowReset
						/>
					</Fragment>
				}
			</Fragment>
		)

		// Global Controls.
		const inspect_control = (
			<Fragment>
				 <InspectorControls>

					<PanelBody
						title={ __( "Image/Icon" ) }
					>
						<SelectControl
							label={ __( "Select Position" ) }
							value={ iconimgPosition }
							onChange={ ( value ) => setAttributes( { iconimgPosition: value } ) }
							options={ [
								{ value: "above-title", label: __( "Above Heading" ) },
								{ value: "below-title", label: __( "Below Heading" ) },
								{ value: "left-title", label: __( "Left of Heading" ) },
								{ value: "right-title", label: __( "Right of Heading" ) },
								{ value: "left", label: __( "Left of Text and Heading" ) },
								{ value: "right", label: __( "Right of Text and Heading" ) },

							] }
						/>
						{ ( iconimgPosition == "left" || iconimgPosition == "right" ) &&
							<SelectControl
								label={ __( "Stack on" ) }
								value={ stack }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "tablet", label: __( "Tablet" ) },
									{ value: "mobile", label: __( "Mobile" ) },
								] }
								help={ __( "Note: Choose on what breakpoint the Info Box will stack." ) }
								onChange={ ( value ) => setAttributes( { stack: value } ) }
							/>
						}
						<SelectControl
							label={ __( "Select Source" ) }
							value={ source_type }
							onChange={ ( value ) => setAttributes( { source_type: value } ) }
							options={ [
								{ value: "icon", label: __( "Icon" ) },
								{ value: "image", label: __( "Image" ) },
							] }
						/>

						{ ( iconimgPosition && (iconimgPosition !== "above-title" && iconimgPosition !== "below-title" )  ) && <SelectControl
							label={ __( "Vertical ALignment" ) }
							value={ sourceAlign }
							onChange={ ( value ) => setAttributes( { sourceAlign: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
						/>
						}

						{ ( source_type && source_type == "icon" ) && iconControls }

						{ ( source_type && source_type == "image" ) && imageControls }

					</PanelBody>
					{ TypographySettings }
					{ seperatorSettings }
					{ ctaSettings }				

					{ marginSettings }

				</InspectorControls>
			</Fragment>
		)

		// Get icon/Image components.
		let is_image = ""

		if( source_type === "icon" && icon !== "" ) {
			is_image =  <InfoBoxIcon attributes={attributes}/>
		}else{
			is_image = <InfoBoxIconImage attributes={attributes} />
		}

		// Get description and seperator components.
		const desc = (
			<Fragment>
				{ "none" !== seperatorStyle && <InfoBoxSeperator attributes={attributes} /> }
				<div className = "uagb-ifb-text-wrap">
					{ showDesc && <InfoBoxDesc attributes={attributes} setAttributes = { setAttributes } props = { this.props } />}
					<InfoBoxCta attributes={attributes} /> 
				</div>
			</Fragment>
		)

		// Get Title and Prefix components.
		const title_text = (
			<Fragment>
				<div className = "uagb-ifb-title-wrap">
					{ showPrefix && <Prefix attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
					{ showTitle && <Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
				</div>
			</Fragment>
		)


		const output = (
			<Fragment>
				<div className = { classnames(
					"uagb-infobox__content-wrap",
					...InfoBoxPositionClasses( attributes ),
				) }>
					<div className = "uagb-ifb-left-right-wrap">

						{ ( iconimgPosition == "left") &&
								is_image
						}
						<div className = "uagb-ifb-content">

							{  iconimgPosition == "above-title" && is_image }

							{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && title_text }

							{ iconimgPosition == "below-title"  && is_image }

							{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && desc }

							{ ( iconimgPosition === "left-title") &&
									<Fragment>
										<div className = "uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( iconimgPosition === "right-title") &&
									<Fragment>
										<div className = "uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( iconimgPosition == "left" || iconimgPosition == "right") &&
									<Fragment>
										{ title_text }
										{ desc }
									</Fragment>
							}

						</div>

						{ ( iconimgPosition == "right") &&
								is_image
						}
					</div>
				</div>
			</Fragment>
		)

		return (
			<Fragment>
				{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") &&
					<BlockControls key='controls'>
						<AlignmentToolbar
							value={ headingAlign }
							onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
						/>
					</BlockControls>
				}
				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-infobox__outer-wrap"
				) }
				id = { my_block_id }
				>
					{ ( ctaType == "all") &&
						<Fragment>
							<a href= {ctaLink} className = "uagb-infobox-link-wrap" rel ="noopener noreferrer" > {output}</a>
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
		$style.setAttribute( "id", "uagb-info-box-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBinfoBox
