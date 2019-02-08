/**
 * BLOCK: Column
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"
import "./style.scss"
import "./editor.scss"

const { __ } = wp.i18n

const { registerBlockType } = wp.blocks

const {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
	MediaUpload,
	PanelColorSettings,
} = wp.editor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	Button,
	BaseControl,
	TabPanel,
	Dashicon
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

export default class UAGBColumnEdit extends Component {

	constructor() {
		super( ...arguments )

		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-column-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { backgroundImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { backgroundImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {

		const { backgroundImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } )
			return
		}

		if ( ! media.type || "image" != media.type ) {
			return
		}

		setAttributes( { backgroundImage: media } )
	}

	render() {

		const {
			attributes: {
				topPadding,
				bottomPadding,
				leftPadding,
				rightPadding,
				topMargin,
				bottomMargin,
				leftMargin,
				rightMargin,

				topPaddingTablet,
				bottomPaddingTablet,
				leftPaddingTablet,
				rightPaddingTablet,
				topMarginTablet,
				bottomMarginTablet,
				leftMarginTablet,
				rightMarginTablet,

				topPaddingMobile,
				bottomPaddingMobile,
				leftPaddingMobile,
				rightPaddingMobile,
				topMarginMobile,
				bottomMarginMobile,
				leftMarginMobile,
				rightMarginMobile,

				colWidth,
				backgroundType,
				backgroundImage,
				backgroundColor,
				backgroundPosition,
				backgroundAttachment,
				backgroundRepeat,
				backgroundSize,
				gradientColor1,
				gradientColor2,
				gradientLocation1,
				gradientLocation2,
				gradientType,
				gradientAngle,
				backgroundOpacity,
				backgroundImageColor,
				borderStyle,
				borderWidth,
				borderRadius,
				borderColor,
				align,
				alignMobile,
				alignTablet
			},
			setAttributes,
			className,
			isSelected
		} = this.props

		var element = document.getElementById( "uagb-column-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const border_setting = (
			<Fragment>
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
						max={ 100 }
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
			</Fragment>
		)

		const inspector_controls = (
			<Fragment>
				<PanelBody title={ __( "Layout" ) }>
					<RangeControl
						label={ __( "Content Width (%)" ) }
						value={ colWidth }
						onChange={ ( value ) => {
							setAttributes( {
								colWidth: value,
							} )
						} }
						min={ 0 }
						max={ 100 }
					/>
					<TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
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
										<SelectControl
											label={ __( "Content Alignment" ) }
											value={ alignMobile }
											onChange={ ( value ) => setAttributes( { alignMobile: value } ) }
											options={ [
												{ value: "left", label: __( "Left" ) },
												{ value: "center", label: __( "Center" ) },
												{ value: "right", label: __( "Right" ) },
											] }
										/>
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<SelectControl
											label={ __( "Content Alignment" ) }
											value={ alignTablet }
											onChange={ ( value ) => setAttributes( { alignTablet: value } ) }
											options={ [
												{ value: "left", label: __( "Left" ) },
												{ value: "center", label: __( "Center" ) },
												{ value: "right", label: __( "Right" ) },
											] }
										/>
									)
								} else {
									tabout = (
										<SelectControl
											label={ __( "Content Alignment" ) }
											value={ align }
											onChange={ ( value ) => setAttributes( { align: value } ) }
											options={ [
												{ value: "left", label: __( "Left" ) },
												{ value: "center", label: __( "Center" ) },
												{ value: "right", label: __( "Right" ) },
											] }
										/>
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				</PanelBody>
				<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
					<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-without-size-type" activeClass="active-tab"
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
											<h2>{ __( "Padding Mobile (px)" ) }</h2>											
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topPaddingMobile }
												onChange={ ( value ) => setAttributes( { topPaddingMobile: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomPaddingMobile }
												onChange={ ( value ) => setAttributes( { bottomPaddingMobile: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftPaddingMobile }
												onChange={ ( value ) => setAttributes( { leftPaddingMobile: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightPaddingMobile }
												onChange={ ( value ) => setAttributes( { rightPaddingMobile: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<Fragment>
											<h2>{ __( "Padding Tablet (px)" ) }</h2>											
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topPaddingTablet }
												onChange={ ( value ) => setAttributes( { topPaddingTablet: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomPaddingTablet }
												onChange={ ( value ) => setAttributes( { bottomPaddingTablet: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftPaddingTablet }
												onChange={ ( value ) => setAttributes( { leftPaddingTablet: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightPaddingTablet }
												onChange={ ( value ) => setAttributes( { rightPaddingTablet: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								} else {
									tabout = (
										<Fragment>
											<h2>{ __( "Padding (px)" ) }</h2>											
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topPadding }
												onChange={ ( value ) => setAttributes( { topPadding: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomPadding }
												onChange={ ( value ) => setAttributes( { bottomPadding: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftPadding }
												onChange={ ( value ) => setAttributes( { leftPadding: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightPadding }
												onChange={ ( value ) => setAttributes( { rightPadding: value } ) }
												min={ 0 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
					<hr className="uagb-editor__separator" />
					<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-without-size-type" activeClass="active-tab"
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
											<h2>{ __( "Margin Mobile (px)" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topMarginMobile }
												onChange={ ( value ) => setAttributes( { topMarginMobile: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomMarginMobile }
												onChange={ ( value ) => setAttributes( { bottomMarginMobile: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftMarginMobile }
												onChange={ ( value ) => setAttributes( { leftMarginMobile: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightMarginMobile }
												onChange={ ( value ) => setAttributes( { rightMarginMobile: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<Fragment>
											<h2>{ __( "Margin Tablet (px)" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topMarginTablet }
												onChange={ ( value ) => setAttributes( { topMarginTablet: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomMarginTablet }
												onChange={ ( value ) => setAttributes( { bottomMarginTablet: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftMarginTablet }
												onChange={ ( value ) => setAttributes( { leftMarginTablet: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightMarginTablet }
												onChange={ ( value ) => setAttributes( { rightMarginTablet: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								} else {
									tabout = (
										<Fragment>
											<h2>{ __( "Margin (px)" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.top_margin }
												className={ "uagb-margin-control" }
												value={ topMargin }
												onChange={ ( value ) => setAttributes( { topMargin: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.bottom_margin }
												className={ "uagb-margin-control" }
												value={ bottomMargin }
												onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.left_margin }
												className={ "uagb-margin-control" }
												value={ leftMargin }
												onChange={ ( value ) => setAttributes( { leftMargin: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.right_margin }
												className={ "uagb-margin-control" }
												value={ rightMargin }
												onChange={ ( value ) => setAttributes( { rightMargin: value } ) }
												min={ -200 }
												max={ 200 }
												allowReset
											/>
										</Fragment>
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				</PanelBody>
				<PanelBody title={ __( "Background" ) } initialOpen={ false }>
					<SelectControl
						label={ __( "Background Type" ) }
						value={ backgroundType }
						onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "color", label: __( "Color" ) },
							{ value: "gradient", label: __( "Gradient" ) },
							{ value: "image", label: __( "Image" ) }
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
					{ "image" == backgroundType &&
							( <Fragment>
								<BaseControl
									className="editor-bg-image-control"
									label={ __( "Background Image" ) }>
									<MediaUpload
										title={ __( "Select Background Image" ) }
										onSelect={ this.onSelectImage }
										allowedTypes={ [ "image" ] }
										value={ backgroundImage }
										render={ ( { open } ) => (
											<Button isDefault onClick={ open }>
												{ ! backgroundImage ? __( "Select Background Image" ) : __( "Replace image" ) }
											</Button>
										) }
									/>
									{ backgroundImage &&
										( <Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
											{ __( "Remove Image" ) }
										</Button> )
									}
								</BaseControl>
								{ backgroundImage &&
									( <Fragment>
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
											label={ __( "Attachment" ) }
											value={ backgroundAttachment }
											onChange={ ( value ) => setAttributes( { backgroundAttachment: value } ) }
											options={ [
												{ value: "fixed", label: __( "Fixed" ) },
												{ value: "scroll", label: __( "Scroll" ) }
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
										<Fragment>
											<p className="uagb-setting-label">{ __( "Image Overlay Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundImageColor }} ></span></span></p>
											<ColorPalette
												value={ backgroundImageColor }
												onChange={ ( colorValue ) => setAttributes( { backgroundImageColor: colorValue } ) }
												allowReset
											/>
										</Fragment>
									</Fragment> )
								}
							</Fragment> )
					}
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
					{ ( "color" == backgroundType || ( "image" == backgroundType && backgroundImage ) || "gradient" == backgroundType ) &&
							( <RangeControl
								label={ __( "Opacity" ) }
								value={ backgroundOpacity }
								onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
								initialPosition={0}
							/> )
					}
				</PanelBody>
				{ border_setting }
			</Fragment>
		)

		let active = ( isSelected ) ? "active" : "not-active"

		let align_class = ( "center" == align ) ? "" : `uagb-column__align-${align}`
		let align_class_mobile = ( "" == alignMobile ) ? "" : `uagb-column__align-mobile-${alignMobile}`
		let align_class_tablet = ( "" == alignTablet ) ? "" : `uagb-column__align-tablet-${alignTablet}`

		return (
			<Fragment>
				<InspectorControls>
					{ inspector_controls }
				</InspectorControls>
				<div
					className={ classnames(
						className,
						"uagb-column__wrap",
						`uagb-column__background-${backgroundType}`,
						`uagb-column__edit-${ active }`,
						align_class,
						align_class_mobile,
						align_class_tablet
					) }
					id={ `uagb-column-${this.props.clientId}` }
				>
					<div className="uagb-column__overlay"></div>
					<div className="uagb-column__inner-wrap">
						<InnerBlocks templateLock={ false } />
					</div>
				</div>
			</Fragment>
		)
	}
}

registerBlockType( "uagb/column", {
	title: uagb_blocks_info.blocks["uagb/column"]["title"],
	description: uagb_blocks_info.blocks["uagb/column"]["description"],
	icon: UAGB_Block_Icons.column,
	category: uagb_blocks_info.category,
	parent: [ "uagb/columns" ],
	supports: {
		inserter: false
	},
	attributes: {
		block_id: {
			type: "string",
		},
		align : {
			type: "string",
			default: "center"
		},
		alignTablet : {
			type: "string",
			default: ""
		},
		alignMobile : {
			type: "string",
			default: ""
		},
		topPadding: {
			type: "number",
			default: "",
		},
		bottomPadding: {
			type: "number",
			default: "",
		},
		leftPadding: {
			type: "number",
			default: "",
		},
		rightPadding: {
			type: "number",
			default: "",
		},
		topMargin: {
			type: "number",
			default: "",
		},
		bottomMargin: {
			type: "number",
			default: "",
		},
		leftMargin: {
			type: "number",
			default: "",
		},
		rightMargin: {
			type: "number",
			default: "",
		},
		topPaddingTablet: {
			type: "number",
			default: ""
		},
		bottomPaddingTablet: {
			type: "number",
			default: ""
		},
		leftPaddingTablet: {
			type: "number",
			default: ""
		},
		rightPaddingTablet: {
			type: "number",
			default: ""
		},
		topMarginTablet: {
			type: "number",
			default: ""
		},
		bottomMarginTablet: {
			type: "number",
			default: ""
		},
		leftMarginTablet: {
			type: "number",
			default: ""
		},
		rightMarginTablet: {
			type: "number",
			default: ""
		},

		topPaddingMobile: {
			type: "number",
			default: ""
		},
		bottomPaddingMobile: {
			type: "number",
			default: ""
		},
		leftPaddingMobile: {
			type: "number",
			default: ""
		},
		rightPaddingMobile: {
			type: "number",
			default: ""
		},
		topMarginMobile: {
			type: "number",
			default: ""
		},
		bottomMarginMobile: {
			type: "number",
			default: ""
		},
		leftMarginMobile: {
			type: "number",
			default: ""
		},
		rightMarginMobile: {
			type: "number",
			default: ""
		},
		colWidth: {
			type: "number",
			default: "",
		},
		backgroundType: {
			type: "string",
		},
		backgroundImage: {
			type: "object",
		},
		backgroundPosition: {
			type: "string",
			default: "center-center"
		},
		backgroundSize: {
			type: "string",
			default: "cover"
		},
		backgroundRepeat: {
			type: "string",
			default: "no-repeat"
		},
		backgroundAttachment: {
			type: "string",
			default: "scroll"
		},
		backgroundColor: {
			type: "string",
		},
		gradientColor1: {
			type: "string",
		},
		gradientColor2: {
			type: "string",
		},
		gradientType: {
			type: "string",
			default: "linear"
		},
		gradientLocation1: {
			type: "number",
			default: 0
		},
		gradientLocation2: {
			type: "number",
			default: 100
		},
		gradientAngle: {
			type: "number",
			default: 0
		},
		backgroundOpacity: {
			type: "number"
		},
		backgroundImageColor: {
			type: "string"
		},
		borderStyle : {
			type: "string",
			default: "none"
		},
		borderWidth : {
			type: "number",
			default: 1
		},
		borderRadius : {
			type: "number"
		},
		borderColor : {
			type: "string"
		},
	},

	edit: UAGBColumnEdit,
	save( { attributes, className } ) {
		const { block_id, backgroundType, align, alignMobile, alignTablet  } = attributes

		let align_class = ( "center" == align ) ? "" : `uagb-column__align-${align}`
		let align_class_mobile = ( "" == alignMobile ) ? "" : `uagb-column__align-mobile-${alignMobile}`
		let align_class_tablet = ( "" == alignTablet ) ? "" : `uagb-column__align-tablet-${alignTablet}`

		return (
			<div
				className={ classnames(
					className,
					"uagb-column__wrap",
					`uagb-column__background-${backgroundType}`,
					align_class,
					align_class_mobile,
					align_class_tablet
				) }
				id={ `uagb-column-${block_id}` }
			>
				<div className="uagb-column__overlay"></div>
				<div className="uagb-column__inner-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
