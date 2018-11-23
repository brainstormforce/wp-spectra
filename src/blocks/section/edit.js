/**
 * BLOCK: UAGB - Section Edit Class
 */

// Import classes
import classnames from "classnames"
import styling from "./styling"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	ColorPalette,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	PanelColorSettings
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	Dashicon,
	BaseControl,
	withNotices
} = wp.components


class UAGBSectionEdit extends Component {

	constructor() {
		super( ...arguments )

		this.onRemoveVideo = this.onRemoveVideo.bind( this )
		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
		this.onSelectVideo = this.onSelectVideo.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-" + this.props.clientId )
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

	/*
	 * Event to set Video as null while removing.
	 */
	onRemoveVideo() {
		const { backgroundVideo } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { backgroundVideo: null } )
	}

	/*
	 * Event to set Video while adding.
	 */
	onSelectVideo( media ) {
		const { backgroundVideo } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { backgroundVideo: null } )
			return
		}
		if ( ! media.type || "video" != media.type ) {
			return
		}
		setAttributes( { backgroundVideo: media } )
	}

	render() {

		const { attributes, setAttributes } = this.props

		const {
			align,
			className,
			padding,
			contentWidth,
			width,
			innerWidth,
			tag,
			leftPadding,
			rightPadding,
			topPadding,
			bottomPadding,
			leftMargin,
			rightMargin,
			topMargin,
			bottomMargin,
			backgroundType,
			backgroundImage,
			backgroundVideo,
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
			backgroundVideoColor,
			backgroundVideoOpacity,
			backgroundImageColor,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor
		} = attributes

		const CustomTag = `${tag}`

		var element = document.getElementById( "uagb-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const onColorChange = ( colorValue ) => {
			setAttributes( { backgroundColor: colorValue } )
		}

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left","center","right" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "Layout" ) }>
						<SelectControl
							label={ __( "Content Width" ) }
							value={ contentWidth }
							onChange={ ( value ) => setAttributes( { contentWidth: value } ) }
							options={ [
								{ value: "boxed", label: __( "Boxed" ) },
								{ value: "full_width", label: __( "Full Width" ) },
							] }
						/>
						{
							contentWidth == "boxed" &&
							( <RangeControl
								label={ __( "Width" ) }
								value={ width }
								onChange={ ( value ) => setAttributes( { width: value } ) }
							/> )
						}
						{
							contentWidth != "boxed" &&
							( <RangeControl
								label={ __( "Inner Width" ) }
								value={ innerWidth }
								onChange={ ( value ) => setAttributes( { innerWidth: value } ) }
							/> )
						}
						<SelectControl
							label={ __( "HTML Tag" ) }
							value={ tag }
							onChange={ ( value ) => setAttributes( { tag: value } ) }
							options={ [
								{ value: "div", label: __( "div" ) },
								{ value: "header", label: __( "header" ) },
								{ value: "footer", label: __( "footer" ) },
								{ value: "main", label: __( "main" ) },
								{ value: "article", label: __( "article" ) },
								{ value: "section", label: __( "section" ) },
								{ value: "aside", label: __( "aside" ) },
								{ value: "nav", label: __( "nav" ) },
							] }
						/>
					</PanelBody>
					<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
						<RangeControl
							label={ __( "Left Padding" ) }
							value={ leftPadding }
							onChange={ ( value ) => setAttributes( { leftPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Right Padding" ) }
							value={ rightPadding }
							onChange={ ( value ) => setAttributes( { rightPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Top Padding" ) }
							value={ topPadding }
							onChange={ ( value ) => setAttributes( { topPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Padding" ) }
							value={ bottomPadding }
							onChange={ ( value ) => setAttributes( { bottomPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Left Margin" ) }
							value={ leftMargin }
							onChange={ ( value ) => setAttributes( { leftMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Right Margin" ) }
							value={ rightMargin }
							onChange={ ( value ) => setAttributes( { rightMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Top Margin" ) }
							value={ topMargin }
							onChange={ ( value ) => setAttributes( { topMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ bottomMargin }
							onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
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
								{ value: "image", label: __( "Image" ) },
								{ value: "video", label: __( "Video" ) },
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
											value: gradientColor1,
											onChange:( value ) => setAttributes( { gradientColor1: value } ),
											label: __( "Color 1" ),
										},
										{
											value: gradientColor2,
											onChange:( value ) => setAttributes( { gradientColor2: value } ),
											label: __( "Color 2" ),
										}
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
						{ "video" == backgroundType && (
							<BaseControl
								className="editor-bg-video-control"
								label={ __( "Background Video" ) }
							>
								<MediaUpload
									title={ __( "Select Background Video" ) }
									onSelect={ this.onSelectVideo }
									allowedTypes={ [ "video" ] }
									value={ backgroundVideo }
									render={ ( { open } ) => (
										<Button isDefault onClick={ open }>
											{ ! backgroundVideo ? __( "Select Background Video" ) : __( "Replace Video" ) }
										</Button>
									) }
								/>
								{ backgroundVideo &&
									( <Button onClick={ this.onRemoveVideo } isLink isDestructive>
										{ __( "Remove Video" ) }
									</Button> )
								}
							</BaseControl> )
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
						{ "video" == backgroundType && backgroundVideo && (
							<Fragment>
								<p className="uagb-setting-label">{ __( "Video Overlay Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundVideoColor }} ></span></span></p>
								<ColorPalette
									value={ backgroundVideoColor }
									onChange={ ( colorValue ) => setAttributes( { backgroundVideoColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
						{ "video" == backgroundType && backgroundVideo && (
							<RangeControl
								label={ __( "Opacity" ) }
								value={ backgroundVideoOpacity }
								onChange={ ( value ) => setAttributes( { backgroundVideoOpacity: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
								initialPosition={50}
							/>
						)}
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
						{ "none" != borderStyle && (
							<RangeControl
								label={ __( "Border Radius" ) }
								value={ borderRadius }
								onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
								min={ 0 }
								max={ 1000 }
								allowReset
							/>
						) }
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
				<CustomTag
					className={ classnames(
						className,
						"uagb-section__wrap",
						`uagb-section__background-${backgroundType}`,
					) }
					id={ `uagb-section-${this.props.clientId}` }
				>
					<div className="uagb-section__overlay"></div>
					{ "video" == backgroundType &&
						<div className="uagb-section__video-wrap">
							{  backgroundVideo &&
								<video src={ backgroundVideo.url } autoPlay loop muted></video>
							}

						</div>
					}
					<div className="uagb-section__inner-wrap">
						<InnerBlocks templateLock={false} />
					</div>

				</CustomTag>
			</Fragment>
		)
	}
}

export default withNotices( UAGBSectionEdit )
