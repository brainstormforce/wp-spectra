// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../uagb-controls/UAGBIcon"
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
	PanelColor,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	withNotices
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

const set_icons = {}

set_icons.upload = <svg aria-hidden="true" role="img" focusable="false" className ="dashicon dashicons-upload" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20"><path d="M8 14V8H5l5-6 5 6h-3v6H8zm-2 2v-6H4v8h12.01v-8H14v6H6z"></path></svg>

class UAGBinfoBox extends Component {

	constructor() {

		super( ...arguments )
		this.getTimelineicon = this.getTimelineicon.bind(this)
		this.toggleTarget    = this.toggleTarget.bind( this )
		this.toggleResponsive    = this.toggleResponsive.bind( this )

	}

	getTimelineicon(value) {
		this.props.setAttributes( { icon: value } )
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

	splitBlock( before, after, ...blocks ) {
		const {
			attributes,
			insertBlocksAfter,
			setAttributes,
			onReplace,
		} = this.props

		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( "core/paragraph", { content: after } ) )
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks )
		}

		const { content } = attributes
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] )
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } )
		}
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
			iconRotate,
			iconimgPosition,
			iconimgStyle,
			block_id,
			iconHover,
			iconBgHover,
			iconimgBorderstyle,
			iconimgBorderHover,
			iconimgBorder,
			iconimgBg,
			iconimgBorderWidth,
			iconimgBorderRadius,
			source_type,
			iconimgbgSize,
			sourceAlign,
			seperatorStyle,
			seperatorWidth,
			seperatorColor,
			seperatorThickness,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaLinkColor,
			ctaFontSize,
			ctaBtnSize,
			ctaBtnLinkColor,
			ctaBgColor,
			ctaBtnPadding,
			ctaBorderStyle,
			ctaBorderColor,
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
			stack
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
		  onChange: this.getTimelineicon,
		  isMulti: false,
		}

		const my_block_id = "uagb-"+this.props.clientId


		// Common setting for icon and images.
		const icon_imagenormalSettings = (
			<Fragment>
				{ ( source_type && source_type == "icon" ) &&
				<PanelColor
					title={ __( "Icon Color" ) }
					colorValue={ iconColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ iconColor }
						onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
						allowReset
					/>
				</PanelColor>
				}
				{ ( source_type && source_type == "icon" ) && ( iconimgStyle && iconimgStyle != "normal" )  &&
					<PanelColor
						title={ __( "Background Color" ) }
						colorValue={ iconimgBg }
						initialOpen={ false }
					>
						<ColorPalette
							value={ iconimgBg }
							onChange={ ( colorValue ) => setAttributes( { iconimgBg: colorValue } ) }
							allowReset
						/>
					</PanelColor>
				}

				{ ( iconimgStyle && iconimgStyle == "custom" )  &&
					<Fragment>
						<PanelColor
							title={ __( "Border Color" ) }
							colorValue={ iconimgBorder }
							initialOpen={ false }
						>
							<ColorPalette
								value={ iconimgBorder }
								onChange={ ( colorValue ) => setAttributes( { iconimgBorder: colorValue } ) }
								allowReset
							/>
						</PanelColor>
						<PanelColor
							title={ __( "Border Color" ) }
							colorValue={ iconimgBorderHover }
							initialOpen={ false }
						>
							<ColorPalette
								value={ iconimgBorderHover }
								onChange={ ( colorValue ) => setAttributes( { iconimgBorderHover: colorValue } ) }
								allowReset
							/>
						</PanelColor>
						 <SelectControl
							label={ __( "Border Style" ) }
							value={ iconimgBorderstyle }
							onChange={ ( value ) => setAttributes( { iconimgBorderstyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "dotted", label: __( "Dotted" ) },
							] }
						/>
						<RangeControl
							label = { __( "Border Width" ) }
							value = { iconimgBorderWidth }
							onChange = { ( value ) => setAttributes( { iconimgBorderWidth: value } ) }
							min = { 0 }
							max = { 30 }
							beforeIcon = "editor-textcolor"
							allowReset
						/>
						<RangeControl
							label = { __( "Rounded Corners" ) }
							value = { iconimgBorderRadius }
							onChange = { ( value ) => setAttributes( { iconimgBorderRadius: value } ) }
							min = { 0 }
							max = { 300 }
							beforeIcon = "editor-textcolor"
							allowReset
						/>
					</Fragment>
				}
			</Fragment>
		)


		// Common setting for icon hover and image hover.
		const icon_imageHoverSettings = (
			<Fragment>
				{ ( source_type && source_type == "icon" ) &&
				<PanelColor
					title={ __( "Icon Color" ) }
					colorValue={ iconHover }
					initialOpen={ false }
				>
					<ColorPalette
						value={ iconHover }
						onChange={ ( colorValue ) => setAttributes( { iconHover: colorValue } ) }
						allowReset
					/>
				</PanelColor>
				}

				{ ( source_type && source_type == "icon" ) && ( iconimgStyle && iconimgStyle != "normal" ) &&
					<PanelColor
						title={ __( "Background Color" ) }
						colorValue={ iconBgHover }
						initialOpen={ false }
					>
						<ColorPalette
							value={ iconBgHover }
							onChange={ ( colorValue ) => setAttributes( { iconBgHover: colorValue } ) }
							allowReset
						/>
					</PanelColor>
				}

				{ ( iconimgStyle && iconimgStyle == "custom" )  &&
					<Fragment>
						<PanelColor
							title={ __( "Border Color" ) }
							colorValue={ iconimgBorderHover }
							initialOpen={ false }
						>
							<ColorPalette
								value={ iconimgBorderHover }
								onChange={ ( colorValue ) => setAttributes( { iconimgBorderHover: colorValue } ) }
								allowReset
							/>
						</PanelColor>
					</Fragment>
				}
			</Fragment>
		)

		// Settings for icon.
		const iconControls = (
			<Fragment>
				<PanelBody
					title={ __( "Icon" ) }
					initialOpen={ true }
				>
					<FontIconPicker {...icon_props} />
					<RangeControl
						label = { __( "Icon Size" ) }
						value = { iconSize }
						onChange = { ( value ) => setAttributes( { iconSize: value } ) }
						min = { 10 }
						max = { 300 }
						beforeIcon = "editor-textcolor"
						allowReset
					/>
					<RangeControl
						label = { __( "Icon Rotate" ) }
						value = { iconRotate }
						onChange = { ( value ) => setAttributes( { iconRotate: value } ) }
						min = { 0 }
						max = { 360 }
						beforeIcon = "editor-textcolor"
						allowReset
					/>
				</PanelBody>
			</Fragment>
		)

		// Icon image settings.
		const iconImageSettings = (
			<Fragment>
				<TabPanel className="uagb-inspect-tabs"
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
							let tabout_settings
							if( "hover" === tabName.name ){
								tabout_settings = icon_imageHoverSettings
							}else {
								tabout_settings = icon_imagenormalSettings
							}
							return <div>{ tabout_settings }</div>
						}
					}
				</TabPanel>
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
						<PanelColor
							title={ __( "Color" ) }
							colorValue={ seperatorColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ seperatorColor }
								onChange={ ( colorValue ) => setAttributes( { seperatorColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>

						<RangeControl
							label={ __( "Thickness" ) }
							value={ seperatorThickness }
							onChange={ ( value ) => setAttributes( { seperatorThickness: value } ) }
							min={ 0 }
							max={ 10 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Width" ) }
							value={ seperatorWidth }
							onChange={ ( value ) => setAttributes( { seperatorWidth: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon="editor-textcolor"
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

					{ ( ctaType == "button" ) && (
						<Fragment>
							<SelectControl
								label={ __( "Size" ) }
								value={ ctaBtnSize }
								onChange={ ( value ) => setAttributes( { ctaBtnSize: value } ) }
								options={ [
									{ value: "xs", label: __( "Extra Small" ) },
									{ value: "sm", label: __( "Small" ) },
									{ value: "md", label: __( "Medium") },
									{ value: "lg", label: __( "Large" ) },
									{ value: "xl", label: __( "Extra Large" ) },
								] }
							/>

							<RangeControl
								label={ __( "Padding" ) }
								value={ ctaBtnPadding }
								onChange={ ( value ) => setAttributes( { ctaBtnPadding: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon="editor-textcolor"
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
									<PanelColor
										title={ __( "Border Color" ) }
										colorValue={ ctaBorderColor }
										initialOpen={ false }
									>
										<ColorPalette
											value={ ctaBorderColor }
											onChange={ ( colorValue ) => setAttributes( { ctaBorderColor: colorValue } ) }
											allowReset
										/>
									</PanelColor>
									<RangeControl
										label={ __( "Border Width" ) }
										value={ ctaBorderWidth }
										onChange={ ( value ) => setAttributes( { ctaBorderWidth: value } ) }
										min={ 0 }
										max={ 100 }
										beforeIcon="editor-textcolor"
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
								beforeIcon="editor-textcolor"
								allowReset
							/>
						</Fragment>
					)
					}
				</PanelBody>
			</Fragment>
		)


		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody
					title={ __( "Typography" ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( "Prefix Font Size" ) }
						value={ prefixFontSize }
						onChange={ ( value ) => setAttributes( { prefixFontSize: value } ) }
						min={ 10 }
						max={ 200 }
						beforeIcon="editor-textcolor"
						allowReset
					/>

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
						beforeIcon="editor-textcolor"
						allowReset
					/>

					<RangeControl
						label={ __( "Description Font Size" ) }
						value={ subHeadFontSize }
						onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
						min={ 10 }
						max={ 200 }
						beforeIcon="editor-textcolor"
						allowReset
					/>

					{ ( ctaType === "text" || ctaType === "button" ) &&	(

						<RangeControl
							label={ __( "CTA Font Size" ) }
							value={ ctaFontSize }
							onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>

					)
					}

				</PanelBody>

				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: prefixColor,
							onChange: ( colorValue ) => setAttributes( { prefixColor: colorValue } ),
							label: __( "Prefix Title Color" ),
						},
						{
							value: headingColor,
							onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
							label: __( "Title Color" ),
						},
						{
							value: subHeadingColor,
							onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
							label: __( "Description Color" ),
						},

					] }
				>
					{ ( ctaType === "text") &&
							<PanelColor
								title={ __( "CTA Color" ) }
								colorValue={ ctaLinkColor }
								initialOpen={ false }
							>
								<ColorPalette
									value={ ctaLinkColor }
									onChange={ ( colorValue ) => setAttributes( { ctaLinkColor: colorValue } ) }
									allowReset
								/>
							</PanelColor>
					}
					{ ( ctaType === "button") &&
							<Fragment>
								<PanelColor
									title={ __( "CTA Color" ) }
									colorValue={ ctaBtnLinkColor }
									initialOpen={ false }
								>
									<ColorPalette
										value={ ctaBtnLinkColor }
										onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
										allowReset
									/>
								</PanelColor>

								<PanelColor
									title={ __( "Background Color" ) }
									colorValue={ ctaBgColor }
									initialOpen={ false }
								>
									<ColorPalette
										value={ ctaBgColor }
										onChange={ ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ) }
										allowReset
									/>
								</PanelColor>
							</Fragment>
					}
				</PanelColorSettings>


			</Fragment>
		)

		// Margin Settings.
		const marginSettings = (
			<Fragment>
				<PanelBody
					title={ __( "Spacing" ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( "Prefix Bottom Margin" ) }
						value={ prefixSpace }
						onChange={ ( value ) => setAttributes( { prefixSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Title Bottom Margin" ) }
						value={ headSpace }
						onChange={ ( value ) => setAttributes( { headSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Seperator Bottom Margin" ) }
						value={ seperatorSpace }
						onChange={ ( value ) => setAttributes( { seperatorSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Description Bottom Margin" ) }
						value={ subHeadSpace }
						onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
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
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Right Margin" ) }
							value={ iconRightMargin }
							onChange={ ( value ) => setAttributes( { iconRightMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Top Margin" ) }
							value={ iconTopMargin }
							onChange={ ( value ) => setAttributes( { iconTopMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ iconBottomMargin }
							onChange={ ( value ) => setAttributes( { iconBottomMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
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
								onChange={ ( value ) => setAttributes( { stack: value } ) }
							/>
						}
					</PanelBody>
				</PanelBody>
			</Fragment>
		)

		// Set icon iamge.
		const onSelectIconImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { iconImage: null } )
				return
			}
			setAttributes( { iconImage: media } )
		}

		// Remove icon image.
		const onRemoveIconImage = ( media ) => {
			setAttributes( { iconImage: null } )
		}

		// Image sizes.
		const imageSizeOptions = [
			{ value: "thumbnail", label: __( "Thumbnail" ) },
			{ value: "medium", label: __( "Medium" ) },
			{ value: "full", label: __( "Large" ) }
		]

		// Image controls.
		const imageControls = (
			<Fragment>
				<PanelBody
					title={ __( "Image" ) }
					initialOpen={ true }
				>
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
						beforeIcon="editor-textcolor"
						allowReset
					/>
				</PanelBody>
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
						<SelectControl
							label={ __( "Select Source" ) }
							value={ source_type }
							onChange={ ( value ) => setAttributes( { source_type: value } ) }
							options={ [
								{ value: "icon", label: __( "Icon" ) },
								{ value: "image", label: __( "Image" ) },
							] }
						/>
						<SelectControl
							label={ __( "Image/Icon Style" ) }
							value={ iconimgStyle }
							onChange={ ( value ) => setAttributes( { iconimgStyle: value } ) }
							options={ [
								{ value: "normal", label: __( "Normal" ) },
								{ value: "circle", label: __( "Circle" ) },
								{ value: "square", label: __( "Square" ) },
								{ value: "custom", label: __( "custom" ) },
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

						{ ( source_type && source_type == "icon" ) && ( iconimgStyle && iconimgStyle != "normal" ) && <RangeControl
							label={ __( "Background Size" ) }
							value={ iconimgbgSize }
							onChange={ ( value ) => setAttributes( { iconimgbgSize: value } ) }
							min={ 0 }
							max={ 300 }
							beforeIcon="editor-textcolor"
							allowReset
						/>

						}

						{ ( source_type && source_type == "icon" ) && iconImageSettings }

						{ ( source_type && source_type == "image" ) && ( iconimgStyle && iconimgStyle == "custom" ) && iconImageSettings }
					</PanelBody>

					{ seperatorSettings }

					{ ctaSettings }

					{ TypographySettings }

					{ marginSettings }

				</InspectorControls>
			</Fragment>
		)

		var ClassNamesId = className+" "+ my_block_id
		//var back_style = InfoBoxStyle( this.props );

		//Get image components.
		const image_option = (
			<MediaUpload
				buttonProps={ {
					className: "change-image"
				} }
				onSelect= { onSelectIconImage }
				type="image"
				value={ iconImage }
				render={ ( { open } ) => (
					<Button onClick={ open }  >
						{ ! iconImage.url ? set_icons.upload : <InfoBoxIconImage attributes={attributes} />  }
					</Button>
				) }
			>
			</MediaUpload>
		)


		// Get icon/Image components.
		let is_image = ""

		if( source_type === "icon" ) {
			is_image = <InfoBoxIcon attributes={attributes}/>
		}else{
			is_image = image_option
		}

		// Get description and seperator components.
		const desc = (
			<Fragment>
				{ "none" !== seperatorStyle && <InfoBoxSeperator attributes={attributes} /> }
				<div className = "uagb-ifb-text-wrap">
					<InfoBoxDesc attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
					<InfoBoxCta attributes={attributes} />
				</div>
			</Fragment>
		)

		// Get Title and Prefix components.
		const title_text = (
			<Fragment>
				<div className = "uagb-ifb-title-wrap">
					<Prefix attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
					<Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
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
										<div className = "left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( iconimgPosition === "right-title") &&
									<Fragment>
										<div className = "right-title-image">
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
				<div className={ ClassNamesId }>
					{ ( ctaType == "all") &&
						<Fragment>
							<a href= {ctaLink} className = "uagb-infobox-link-wrap" > {output}</a>
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
