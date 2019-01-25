// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Prefix from "./components/Prefix"
import Title from "./components/Title"
import Icon from "./components/Icon"
import InfoBoxDesc from "./components/InfoBoxDesc"
import InfoBoxPositionClasses from "./classes"
import InfoBoxSeparator from "./components/InfoBoxSeparator"
import CallToAction from "./components/CallToAction"
import InfoBoxStyle from "./inline-styles"
import InfoBoxIconImage from "./components/InfoBoxIconImage"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

let svg_icons = Object.keys( UAGBIcon )

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
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

// Image sizes.
let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

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
		var new_img = this.getImageSize(media["sizes"])
		imageSizeOptions = new_img
		setAttributes( { iconImage: media } )
	}

	getImageSize(sizes) {
		var size_arr = []
		$.each(sizes, function (index, item) {
		  var name = index	
		  	var p = { "value" : name, "label": name }
		  	size_arr.push(p)
		})
		return(size_arr)
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
			icons: svg_icons,
			value: icon,
			onChange: this.getIfbIcon,
			isMulti: false,
			renderFunc: renderSVG,
			noSelectedPlaceholder: __( "Select Icon" )
		}

		// Icon properties.
		const cta_icon_props = {
			icons: svg_icons,
			renderFunc: renderSVG,
			value: ctaIcon,
			onChange: this.getCtaicon,
			isMulti: false,
			noSelectedPlaceholder: __( "Select Icon" )
		}

		if( typeof attributes.iconImage !== "undefined" && attributes.iconImage !== null && attributes.iconImage !=="" ){
			imageSizeOptions = this.getImageSize(iconImage["sizes"])
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
							let tabout_icon
							if( "normal" === tabName.name ) {
								tabout_icon = <Fragment>
									<p className="uagb-setting-label">{ __( "Icon Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconColor }} ></span></span></p>
									<ColorPalette
										value={ iconColor }
										onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
										allowReset
									/>
								</Fragment>
							}else {
								tabout_icon = <Fragment>
									<p className="uagb-setting-label">{ __( "Icon Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconHover }} ></span></span></p>
									<ColorPalette
										value={ iconHover }
										onChange={ ( colorValue ) => setAttributes( { iconHover: colorValue } ) }
										allowReset
									/>
								</Fragment>
							}
							return <div>{ tabout_icon }</div>
						}
					}
				</TabPanel>
			</Fragment>
		)

		// Separator settings.
		const seperatorSettings = (
			<PanelBody
				title={ __( "Separator" ) }
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
						label={ __( "Width (%)" ) }
						value={ seperatorWidth }
						onChange={ ( value ) => setAttributes( { seperatorWidth: value } ) }
						min={ 0 }
						max={ 100 }
						beforeIcon=""
						allowReset
					/>
				    <p className="uagb-setting-label">{ __( "Separator Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: seperatorColor }} ></span></span></p>
				    <ColorPalette
				        value={ seperatorColor }
				        onChange={ ( colorValue ) => setAttributes( { seperatorColor: colorValue } ) }
				        allowReset
				    />
				</Fragment>
				)
				}

			</PanelBody>
		)

		// CTA settings.
		const ctaSettings = (
			<PanelBody	title={ __( "Call To Action" ) } initialOpen={ false }	>
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
				{ ( ctaType === "text" || ctaType === "button" ) && <Fragment>
					<TextControl
						label= { __( "Text" ) }
						value= { ctaText }
						onChange={ value => setAttributes( { ctaText: value } ) }
					/>
					<RangeControl
						label={ __( "Text Font Size" ) }
						value={ ctaFontSize }
						onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
						min={ 0 }
						max={ 50 }
						initialPosition={16}
						beforeIcon="editor-textcolor"
						allowReset
					/>
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
						<hr className="uagb-editor__separator" />
					</Fragment>
				}

				{ ( ctaType !== "all" ) && ( ctaType !== "none" ) &&
					<Fragment>
						<h2>{ __( "Button Icon" ) }</h2>
						<FontIconPicker {...cta_icon_props} />
						{ ctaIcon != "" && <Fragment>
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
						<hr className="uagb-editor__separator" />
					</Fragment>
				}

				{ ( ctaType == "button" ) && (
					<Fragment>
						<h2>{ __( "Button Padding" ) }</h2>
						<RangeControl
							label={ __( "Vertical" ) }
							value={ ctaBtnVertPadding }
							onChange={ ( value ) => setAttributes( { ctaBtnVertPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ __( "Horizontal" ) }
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

						{ ( ctaBorderStyle !== "none" ) && (
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
						<hr className="uagb-editor__separator" />
					</Fragment>
				)
				}

				{ ( ctaType === "text") &&
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
								let tabout_1
								if( "normal" === tabName.name ) {
									tabout_1 = <Fragment>
										<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkColor }} ></span></span></p>
										<ColorPalette
											value={ ctaLinkColor }
											onChange={ ( colorValue ) => setAttributes( { ctaLinkColor: colorValue } ) }
											allowReset
										/>
									</Fragment>
								}else {
									tabout_1 = <Fragment>
										<p className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
										<ColorPalette
											value={ ctaLinkHoverColor }
											onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
											allowReset
										/>
									</Fragment>
								}
								return <div>{ tabout_1 }</div>
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

		// Typography settings.
		const TypographySettings = (
			<PanelBody	title={ __( "Content" ) } initialOpen={ false }	>
				<ToggleControl
					label={ __( "Enable Prefix" ) }
					checked={ showPrefix }
					onChange={ ( value ) => setAttributes( { showPrefix: ! showPrefix } ) }
				/>
				{ showPrefix && <Fragment>
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
					<p className="uagb-setting-label">{ __( "Prefix Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: prefixColor }} ></span></span></p>
					    <ColorPalette
					        value={ prefixColor }
					        onChange={ ( colorValue ) => setAttributes( { prefixColor: colorValue } ) }
					        allowReset
					    />
					  	<hr className="uagb-editor__separator" />
				</Fragment>
				}

				<ToggleControl
					label={ __( "Enable Title" ) }
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
						label={ __( "Title Font Size" ) }
						value={ headFontSize }
						onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
						min={ 10 }
						max={ 200 }
						initialPosition={30}
						beforeIcon="editor-textcolor"
						allowReset
					/>
				    <p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
				    <ColorPalette
				        value={ headingColor }
				        onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
				        allowReset
				    />
				    <hr class="uagb-editor__separator" />
				</Fragment>
				}
				<ToggleControl
					label={ __( "Enable Description" ) }
					checked={ showDesc }
					onChange={ ( value ) => setAttributes( { showDesc: ! showDesc } ) }
				/>
				{ showDesc && <Fragment>
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
					<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
					    <ColorPalette
					        value={ subHeadingColor }
					        onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
					        allowReset
					    />
				</Fragment>
				}
			</PanelBody>
		)

		// Margin Settings.
		const marginSettings = (
			<PanelBody	title={ __( "Spacing" ) } initialOpen={ false }	>
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
						label={ __( "Title Bottom Margin" ) }
						value={ headSpace }
						onChange={ ( value ) => setAttributes( { headSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon=""
						allowReset
					/>
				}
				<RangeControl
					label={ __( "Separator Bottom Margin" ) }
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
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Image/Icon Margin (px)" ) }</h2>
				<RangeControl
					label={ UAGB_Block_Icons.left_margin }
					className={ "uagb-margin-control" }
					value={ iconLeftMargin }
					onChange={ ( value ) => setAttributes( { iconLeftMargin: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ UAGB_Block_Icons.right_margin }
					className={ "uagb-margin-control" }
					value={ iconRightMargin }
					onChange={ ( value ) => setAttributes( { iconRightMargin: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ UAGB_Block_Icons.top_margin }
					className={ "uagb-margin-control" }
					value={ iconTopMargin }
					onChange={ ( value ) => setAttributes( { iconTopMargin: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ UAGB_Block_Icons.bottom_margin }
					className={ "uagb-margin-control" }
					value={ iconBottomMargin }
					onChange={ ( value ) => setAttributes( { iconBottomMargin: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
			</PanelBody>
		)

		let image_name = __( "Select Image" )
		if(iconImage){
			if(iconImage.url == null || iconImage.url == "" ){
				image_name = __( "Select Image" )
			}else{
				image_name = __( "Replace Image" )
			}
		}

		// Image controls.
		const imageControls = (
			<Fragment>
				<BaseControl className="editor-bg-image-control" label={ __( "Image" ) } >
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
			<InspectorControls>
				<PanelBody	title={ __( "Image/Icon" ) } >
					<SelectControl
						label={ __( "Select Position" ) }
						value={ iconimgPosition }
						onChange={ ( value ) => setAttributes( { iconimgPosition: value } ) }
						options={ [
							{ value: "above-title", label: __( "Above Title" ) },
							{ value: "below-title", label: __( "Below Title" ) },
							{ value: "left-title", label: __( "Left of Title" ) },
							{ value: "right-title", label: __( "Right of Title" ) },
							{ value: "left", label: __( "Left of Text and Title" ) },
							{ value: "right", label: __( "Right of Text and Title" ) },

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
					<hr className="uagb-editor__separator" />
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
		)

		// Get icon/Image components.
		let is_image = ""

		if( source_type === "icon" && icon !== "" ) {
			is_image =  <Icon attributes={attributes}/>
		}else{
			is_image = <InfoBoxIconImage attributes={attributes} />
		}

		// Get description and seperator components.
		const desc = (
			<Fragment>
				{ "none" !== seperatorStyle && <InfoBoxSeparator attributes={attributes} /> }
				<div className = "uagb-ifb-text-wrap">
					{ showDesc && <InfoBoxDesc attributes={attributes} setAttributes = { setAttributes } props = { this.props } />}
					<CallToAction attributes={attributes} />
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
			<div className = { classnames( "uagb-infobox__content-wrap", ...InfoBoxPositionClasses( attributes ) ) }>
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

					{ ( iconimgPosition == "right") && is_image	}
				</div>
			</div>
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
						<a href= {ctaLink} className = "uagb-infobox-link-wrap" rel ="noopener noreferrer" > {output}</a>
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
