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
		this.toggleBorder    = this.toggleBorder.bind( this )
	}

	getTimelineicon(value) {
		this.props.setAttributes( { icon: value } )
	}

	/**
	 * Function Name: toggleBorder.
	 */
	toggleBorder() {
		const { enableBorder } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { enableBorder: ! enableBorder } )
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
			headSpace,
			subHeadSpace,
			imgPosition,
			iconimgStyle,
			block_id,
			iconBgHover,
			iconimgBorderstyle,
			iconimgBorderHover,
			iconimgBorder,
			iconimgBg,
			iconimgBorderWidth,
			iconimgBorderRadius,
			iconimgbgSize,
			sourceAlign,
			prefixSpace,
			imgLeftMargin,
			imgRightMargin,
			imgTopMargin,
			imgBottomMargin,
			iconImage,
			imageSize,
			imageWidth,
			backgroundType,
			backgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundSize,
			backgroundRepeat,
			backgroundOpacity,
			gradientColor1,
			gradientColor2,
			gradientType,
			gradientLocation1,
			gradientLocation2,
			gradientAngle,
			gradientDirection,
			blockPadding,
			blockMargin,
			enableBorder,
			borderstyle,
			borderWidth,
			borderRadius,
			borderColor
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-info-box-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = InfoBoxStyle( this.props )
		}

		const my_block_id = "uagb-"+this.props.clientId

		const onSelectBGImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { backgroundImage: null } )
				return
			}
			setAttributes( { backgroundImage: media } )
		}

		const onRemoveBGImage = ( media ) => {
			setAttributes( { backgroundImage: null } )
		}

		// Block border settings.
		const block_settings = (
			<Fragment>
				<PanelBody
					title={ __( "Block Border" ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( "Border" ) }
						checked={ enableBorder }
						onChange={ this.toggleBorder }
					/>

					{ enableBorder && <Fragment>
						<PanelColor
							title={ __( "Border Color" ) }
							colorValue={ borderColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ borderColor }
								onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>
					 <SelectControl
							label={ __( "Border Style" ) }
							value={ borderstyle }
							onChange={ ( value ) => setAttributes( { borderstyle: value } ) }
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
							value = { borderWidth }
							onChange = { ( value ) => setAttributes( { borderWidth: value } ) }
							min = { 0 }
							max = { 30 }
							beforeIcon = "editor-textcolor"
							allowReset
						/>
					</Fragment>
					}
					<RangeControl
						label = { __( "Rounded Corners" ) }
						value = { borderRadius }
						onChange = { ( value ) => setAttributes( { borderRadius: value } ) }
						min = { 0 }
						max = { 300 }
						beforeIcon = "editor-textcolor"
						allowReset
					/>
				</PanelBody>
			</Fragment>
		)
		// Setting for block
		const background_settings = (
			<Fragment>
				<PanelBody
					title={ __( "Background" ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( "Background Type" ) }
						value={ backgroundType }
						onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
						options={ [
							{ value: "color", label: __( "Color" ) },
							{ value: "image", label: __( "Image" ) },
							{ value: "gradient", label: __( "Gradient" ) },
						] }
					/>
					{ "gradient" !== backgroundType &&
					<PanelColor
						title={ __( "Background Color" ) }
						colorValue={ backgroundColor }
						initialOpen={ false }
					>
						<ColorPalette
							value={ backgroundColor }
							onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
							allowReset
						/>
					</PanelColor>
					}

					{ backgroundType && backgroundType == "image" &&
					(<Fragment>
						<BaseControl
							className="editor-bg-image-control"
							label={ __( "Background Image" ) }
						>
							<MediaUpload
								title={ __( "Select Background Image" ) }
								onSelect={ onSelectBGImage }
								type="image"
								value={ backgroundImage }
								render={ ( { open } ) => (
									<Button isDefault onClick={ open }>
										{ ! backgroundImage ? __( "Select Background Image" ) : __( "Replace image" ) }
									</Button>
								) }
							/>
							{ !! backgroundImage &&
								<Button onClick={ onRemoveBGImage } isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button>
							}
						</BaseControl>
						<SelectControl
							label={ __( "Image Position" ) }
							value={ backgroundPosition }
							onChange={ ( value ) => setAttributes( { backgroundPosition: value } ) }
							options={ [
								{ value: "top-left", label: __( "Top Left" ) },
								{ value: "top-center", label: __( "Top Center" ) },
								{ value: "top-right", label: __( "Top Right" ) },
								{ value: "center-left", label: __( "Center Left" ) },
								{ value: "center-center", label: __( "Center Center" ) },
								{ value: "center-right", label: __( "Center Right" ) },
								{ value: "bottom-left", label: __( "Bottom Left" ) },
								{ value: "bottom-center", label: __( "Bottom Center" ) },
								{ value: "bottom-right", label: __( "Bottom Right" ) },
							] }
						/>
						<SelectControl
							label={ __( "Repeat" ) }
							value={ backgroundRepeat }
							onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
							options={ [
								{ value: "no-repeat", label: __( "No Repeat" ) },
								{ value: "repeat", label: __( "Repeat" ) },
								{ value: "repeat-x", label: __( "Repeat-x" ) },
								{ value: "repeat-y", label: __( "Repeat-y" ) }
							] }
						/>
						<SelectControl
							label={ __( "Size" ) }
							value={ backgroundSize }
							onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
							options={ [
								{ value: "auto", label: __( "Auto" ) },
								{ value: "cover", label: __( "Cover" ) },
								{ value: "contain", label: __( "Contain" ) }
							] }
						/>
					</Fragment>)
					}
					{ "gradient" == backgroundType &&
					<Fragment>

						<PanelColorSettings
							title={ __( "GradientColor Color Settings" ) }
							colorSettings={ [
								 {
									value: gradientColor1,
									onChange: ( colorValue ) => setAttributes( { gradientColor1: colorValue } ),
									label: __( "Color 1" ),
								},
								{
									value: gradientColor2,
									onChange: ( colorValue ) => setAttributes( { gradientColor2: colorValue } ),
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
						<SelectControl
							label={ __( "Type" ) }
							value={ gradientDirection }
							onChange={ ( value ) => setAttributes( { gradientDirection: value } ) }
							options={ [
								{ value: "top_center", label: __( "Top Center" ) },
								{ value: "top_left", label: __( "Top Left" ) },
								{ value: "top_right", label: __( "Top Right" ) },
								{ value: "center_center", label: __( "Center Center" ) },
								{ value: "center_left", label: __( "Center Left" ) },
								{ value: "center_Right", label: __( "Center Right " ) },
								{ value: "bottom_center", label: __( "Bottom Center " ) },
								{ value: "bottom_left", label: __( "Bottom Left " ) },
								{ value: "bottom_right", label: __( "Bottom Right " ) },
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
					</Fragment>
					}
					<RangeControl
						label={ __( "Opacity" ) }
						value={ backgroundOpacity }
						onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					{ block_settings }
				</PanelBody>
			</Fragment>
		)

		// Common setting for icon and images.
		const imageNormalSettings = (
			<Fragment>
				{ ( iconimgStyle && iconimgStyle != "normal" )  &&
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
		const imageHoverSettings = (
			<Fragment>
				{ ( iconimgStyle && iconimgStyle != "normal" ) &&
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

		// Icon image settings.
		const imageSettings = (
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
							if ( "hover" === tabName.name ) {
								tabout_settings = imageHoverSettings
							} else {
								tabout_settings = imageNormalSettings
							}
							return <div>{ tabout_settings }</div>
						}
					}
				</TabPanel>
			</Fragment>
		)

		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody
					title={ __( "Typography" ) }
					initialOpen={ false }
				>

					<PanelBody
						title={ __( "Title Prefix" ) }
						initialOpen={ true }
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

					</PanelBody>

					<PanelBody
						title={ __( "Title" ) }
						initialOpen={ true }
					>
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
					</PanelBody>

					<PanelBody
						title={ __( "Description" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Description Font Size" ) }
							value={ subHeadFontSize }
							onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</PanelBody>
				</PanelBody>

				<PanelColorSettings
					title={ __( "Color Settings" ) }
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
						label={ __( "Block Margin" ) }
						value={ blockMargin }
						onChange={ ( value ) => setAttributes( { blockMargin: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Block Padding" ) }
						value={ blockPadding }
						onChange={ ( value ) => setAttributes( { blockPadding: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
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
						label={ __( "Description Bottom Margin" ) }
						value={ subHeadSpace }
						onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>

					<PanelBody
						title={ __( "Image Margins" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Left Margin" ) }
							value={ imgLeftMargin }
							onChange={ ( value ) => setAttributes( { imgLeftMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Right Margin" ) }
							value={ imgRightMargin }
							onChange={ ( value ) => setAttributes( { imgRightMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Top Margin" ) }
							value={ imgTopMargin }
							onChange={ ( value ) => setAttributes( { imgTopMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ imgBottomMargin }
							onChange={ ( value ) => setAttributes( { imgBottomMargin: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
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

					{ background_settings }

					<PanelBody
						title={ __( "Image" ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( "Select Position" ) }
							value={ imgPosition }
							onChange={ ( value ) => setAttributes( { imgPosition: value } ) }
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
							label={ __( "Image Style" ) }
							value={ iconimgStyle }
							onChange={ ( value ) => setAttributes( { iconimgStyle: value } ) }
							options={ [
								{ value: "normal", label: __( "Normal" ) },
								{ value: "circle", label: __( "Circle" ) },
								{ value: "square", label: __( "Square" ) },
								{ value: "custom", label: __( "custom" ) },
							] }
						/>

						{ ( imgPosition && (imgPosition !== "above-title" && imgPosition !== "below-title" )  ) && <SelectControl
							label={ __( "Vertical ALignment" ) }
							value={ sourceAlign }
							onChange={ ( value ) => setAttributes( { sourceAlign: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
						/>
						}

						{ imageControls }

						{ ( iconimgStyle && iconimgStyle != "normal" ) && <RangeControl
							label={ __( "Background Size" ) }
							value={ iconimgbgSize }
							onChange={ ( value ) => setAttributes( { iconimgbgSize: value } ) }
							min={ 0 }
							max={ 300 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						}


						{ imageSettings }
					</PanelBody>

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
		let team_image = image_option

		// Get description and seperator components.
		const desc = (
			<Fragment>
				<div className = "uagb-infobox-text-wrap">
					<InfoBoxDesc attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
				</div>
			</Fragment>
		)

		// Get Title and Prefix components.
		const title_text = (
			<Fragment>
				<div className = "uagb-infobox-title-wrap">
					<Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
					<Prefix attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
				</div>
			</Fragment>
		)

		return (
			<Fragment>
				{ ( imgPosition == "above-title" || imgPosition == "below-title") &&
					<BlockControls key='controls'>
						<AlignmentToolbar
							value={ headingAlign }
							onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
						/>
					</BlockControls>
				}
				{inspect_control}
				<div className={ ClassNamesId }>
					{/*<style dangerouslySetInnerHTML={{ __html: back_style }}></style>*/}
					<div className = { classnames(
						"uagb-module-content",
						...InfoBoxPositionClasses( attributes ),
					) }>
						<div className = "uagb-infobox-overlay"></div>
						<div className = "uagb-infobox-left-right-wrap">

							{ ( imgPosition == "left") &&
								team_image
							}
							<div className = "uagb-infobox-content">

								{  imgPosition == "above-title" && team_image }

								{ ( imgPosition == "above-title" || imgPosition == "below-title") && title_text }

								{ imgPosition == "below-title"  && team_image }

								{ ( imgPosition == "above-title" || imgPosition == "below-title") && desc }

								{ ( imgPosition === "left-title") &&
									<Fragment>
										<div className = "left-title-image">
											{ team_image }
											{ title_text }
										</div>
										{ desc }
									</Fragment>
								}

								{ ( imgPosition === "right-title") &&
									<Fragment>
										<div className = "right-title-image">
											{ title_text }
											{ team_image }
										</div>
										{ desc }
									</Fragment>
								}

								{ ( imgPosition == "left" || imgPosition == "right") &&
									<Fragment>
										{ title_text }
										{ desc }
									</Fragment>
								}

							</div>

							{ ( imgPosition == "right") &&
								team_image
							}
						</div>
					</div>
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
