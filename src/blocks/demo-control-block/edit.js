/**
 * Demo Control Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import renderSVG from "@Controls/renderIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGBIcon from "@Controls/UAGBIcon.json"
import UAGB_Block_Icons from "@Controls/block-icons"
import AdvancedPopColorControl from '../../advanced-pop-color-control'
import InspectorTabs from '../../components/inspector-tabs/InspectorTabs.js'
import InspectorTab from '../../components/inspector-tabs/InspectorTab.js'
import DimensionsControl from '../../components/dimention-control';
import Range from '../../components/range/Range.js';
import GradientSettings from "../../components/gradient-settings"
import MultiButtonsControl from '../../components/multi-buttons-control'
import BoxShadowControl from "../../components/box-shadow"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

// Setup the block

import { __ } from '@wordpress/i18n';

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	BaseControl,
	Button,
	Dashicon,
	ButtonGroup,
	Icon,
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

let svg_icons = Object.keys( UAGBIcon )

class UAGBInlineNoticeEdit extends Component {

	constructor() {

		super( ...arguments )
		this.update_cookie_id = this.update_cookie_id.bind(this)
		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
	}

	
	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props

		setAttributes( { backgroundImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {

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

	update_cookie_id( value ) {
		const { getCurrentPostId } = wp.data.select("core/editor");
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

		this.props.setAttributes( { c_id: post_id + '-' + timestamp } )
		this.props.setAttributes( { cookies: value } )
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		//Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-demo-control-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-demo-control-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}

	render() {

		// Setup the attributes
		const {
			attributes: {
				block_id,
				icon,
				noticeTitle,
				noticeContent,
				noticeDismiss,
				cookies,
				close_cookie_days,
				textColor,
				titleColor,
				noticeColor,
				contentBgColor,
				noticeDismissColor,
				noticeAlignment,
				titleFontFamily,
				titleFontWeight,
				titleFontSubset,
				titleFontSizeType,
				titleLineHeightType,
				titleFontSize,
				titleFontSizeTablet,
				titleFontSizeMobile,
				titleLineHeight,
				titleLineHeightTablet,
				titleLineHeightMobile,
				descFontFamily,
				descFontWeight,
				descFontSubset,
				descFontSize,
				descFontSizeType,
				descFontSizeTablet,
				descFontSizeMobile,
				descLineHeight,
				descLineHeightType,
				descLineHeightTablet,
				descLineHeightMobile,
				titleLoadGoogleFonts,
				descLoadGoogleFonts,
				contentVrPadding,
				contentHrPadding,
				titleVrPadding,
				titleHrPadding,
				tabletPadding,
				mobilePadding,
				padding,
				headingTag,
				layout,
				highlightWidth,
				color,
				colorClass,
				paddingUnit,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTopTablet,
				paddingRightTablet,
				paddingBottomTablet,
				paddingLeftTablet,
				paddingTopMobile,
				paddingRightMobile,
				paddingBottomMobile,
				paddingLeftMobile,
				borderStyle,
				borderWidth,
				borderRadius,
				borderColor,
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
				overlayType,
				gradientOverlayColor1,
				gradientOverlayColor2,
				gradientOverlayType,
				gradientOverlayLocation1,
				gradientOverlayLocation2,
				gradientOverlayAngle,
				columnGap,
				boxShadowColor,
				boxShadowHOffset,
				boxShadowVOffset,
				boxShadowBlur,
				boxShadowSpread,
				boxShadowPosition,
				widthType
			},
			setAttributes,
			className,
			attributes,
		} = this.props;

	   	// Notice dismiss options
		const noticeDismissOptions = [
			{ value: '', label: __( 'Allow Always', 'ultimate-addons-for-gutenberg' ) },
			{
				value: 'uagb-dismissable',
				label: __( 'Allow to Dismiss', 'ultimate-addons-for-gutenberg' ),
			},
		];

		let loadTitleGoogleFonts;
		let loadDescriptionGoogleFonts;


		if( true === titleLoadGoogleFonts ) {
			
			const hconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
				},
			};

			loadTitleGoogleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}

		if( true === descLoadGoogleFonts ) {

			const sconfig = {
				google: {
					families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
				},
			};

			loadDescriptionGoogleFonts = (
				<WebfontLoader config={ sconfig }>
				</WebfontLoader>
			)
		}

		let image_icon_html = ''

		if ( noticeDismiss ) {
			image_icon_html = <span className="uagb-notice-dismiss">{ renderSVG(icon) }</span>
		}	

		const inlineGeneralSettings = () => {
			return (
				<InspectorTabs>
				<InspectorTab key={'general'}>
				<PanelBody title="Alignment" initialOpen={false}>
					<MultiButtonsControl
						label={ __( "Alignment", 'ultimate-addons-for-gutenberg' ) }
						currentOption={ noticeAlignment }
						className="uagb-multi-button-alignment-control"
						options={ [
							{ value: "left", icon: <Icon icon={ renderSVG("fa fa-align-left") } />, tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ), },
							{ value: "center", icon: <Icon icon={ renderSVG("fa fa-align-center") } />, tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ), },
							{ value: "right", icon: <Icon icon={ renderSVG("fa fa-align-right") } />, tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ), },
						] }
						showIcons={ true }
						onChange={ ( noticeAlignment ) => setAttributes( { noticeAlignment } ) }
					/>
					</PanelBody>
					<PanelBody title="Toggle" initialOpen={false}>
					<div className="uag-toggle-wrap">
					<label className="uag-toggle-label">{ __( "Toggle off", 'ultimate-addons-for-gutenberg' )  }</label>
					<ToggleControl
							checked={ cookies }
							onChange={ this.update_cookie_id }
					/>
					</div>
					</PanelBody>
					<PanelBody title="Slider" initialOpen={false}>
					<Range 
					    label={__( "Padding", 'ultimate-addons-for-gutenberg' )}
						setAttributes={setAttributes}
						value={contentVrPadding} 
						onChange={value => setAttributes({ contentVrPadding: value })}
						min={0} 
						max={100}
						unit={ paddingUnit } 
					/>
					</PanelBody>
					<PanelBody title="Typography" initialOpen={false}>
					<h2>{ __( "Typography", 'ultimate-addons-for-gutenberg' ) }</h2>
		            <TypographyControl
							label={ __( "Title", 'ultimate-addons-for-gutenberg' ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
							fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
							fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
							fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
							fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
							fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
							fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
							fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
							lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
							lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
							lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
							lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
						/>
						</PanelBody>
						<PanelBody title="Box Shadow" initialOpen={false}>
						<BoxShadowControl
							setAttributes = { setAttributes }
							label = { __( "Box Shadow", 'ultimate-addons-for-gutenberg' ) }
							boxShadowColor = { { value: boxShadowColor, label: __( "Color", 'ultimate-addons-for-gutenberg' ) } }
							boxShadowHOffset = { { value: boxShadowHOffset, label: __( "Horizontal", 'ultimate-addons-for-gutenberg' ) } }
							boxShadowVOffset = { { value: boxShadowVOffset, label: __( "Vertical", 'ultimate-addons-for-gutenberg' ) } }
							boxShadowBlur = { { value: boxShadowBlur, label: __( "Blur", 'ultimate-addons-for-gutenberg' ) } }
							boxShadowSpread = { { value: boxShadowSpread, label: __( "Spread", 'ultimate-addons-for-gutenberg' ) } }
							boxShadowPosition = { { value: boxShadowPosition, label: __( "Position", 'ultimate-addons-for-gutenberg' ) } }
							
						/>
						</PanelBody>
						<PanelBody title="Multi Buttons" initialOpen={false}>
						<MultiButtonsControl
							label={ __( "Gap", 'ultimate-addons-for-gutenberg' ) }
							currentOption={ columnGap }
							options={ [
								{ value: "10", label: __( "Default", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'Default (10px)', 'ultimate-addons-for-gutenberg' ), },
								{ value: "0", label: __( "None", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'No Gap (0px)', 'ultimate-addons-for-gutenberg' ), },
								{ value: "5", label: __( "S", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'Narrow (5px)', 'ultimate-addons-for-gutenberg' ), },
								{ value: "15", label: __( "M", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'Extended (15px)', 'ultimate-addons-for-gutenberg' ), },
								{ value: "20", label: __( "L", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'Wide (20px)', 'ultimate-addons-for-gutenberg' ), },
								{ value: "30", label: __( "XL", 'ultimate-addons-for-gutenberg' ), tooltip: __( 'Wider (30px)', 'ultimate-addons-for-gutenberg' ), }
							] }
							onChange={ ( columnGap ) => setAttributes( { columnGap } ) }
							showIcons={ false }
							help={ __( "Note: The individual Column Gap can be managed from Column Settings.", 'ultimate-addons-for-gutenberg' ) }
						/>
				</PanelBody>
				<PanelBody title="Layout" initialOpen={false}>
					<SelectControl
						label={ __( "Types", 'ultimate-addons-for-gutenberg' ) }
						value={ layout }
						onChange={ ( value ) => setAttributes( { layout: value } ) }
						options={ [
							{ value: "modern", label: __( "Modern", 'ultimate-addons-for-gutenberg' ) },
							{ value: "simple", label: __( "Default", 'ultimate-addons-for-gutenberg' ) },							
						] }
					/>
					{ "simple" == layout  &&
						<RangeControl
							label={ __( "Highlight width", 'ultimate-addons-for-gutenberg' ) }
							value={ highlightWidth }
							onChange={ ( value ) => setAttributes( { highlightWidth: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
					}
					<h2>{ __( "Primary Heading", 'ultimate-addons-for-gutenberg' ) }</h2>
					<SelectControl
						label={ __( "Tag" ) }
						value={ headingTag }
						onChange={ ( value ) => setAttributes( { headingTag: value } ) }
						options={ [
							{ value: "h1", label: __( "H1",'ultimate-addons-for-gutenberg' ) },
							{ value: "h2", label: __( "H2", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h3", label: __( "H3", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h4", label: __( "H4", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h5", label: __( "H5", 'ultimate-addons-for-gutenberg' ) },
							{ value: "h6", label: __( "H6", 'ultimate-addons-for-gutenberg' ) },
							{ value: "span", label: __( "span", 'ultimate-addons-for-gutenberg' ) },
							{ value: "p", label: __( "p", 'ultimate-addons-for-gutenberg' ) },
						] }
					/>
					<SelectControl
							label={ __( 'Notice Display', 'ultimate-addons-for-gutenberg' ) }
							options={ noticeDismissOptions }
							value={ noticeDismiss }
							onChange={ ( value ) =>
								this.props.setAttributes( {
									noticeDismiss: value,
								} )
							}
					/>
					{ noticeDismiss &&
						<Fragment>
							<p className="components-base-control__label">{__( "Icon", 'ultimate-addons-for-gutenberg' )}</p>
							<FontIconPicker
								icons={svg_icons}
								renderFunc= {renderSVG}
								theme="default"
								value={icon}
								onChange={ ( value ) => setAttributes( { icon: value } ) }
								isMulti={false}
								noSelectedPlaceholder= { __( "Select Icon", 'ultimate-addons-for-gutenberg' ) }
							/>
						</Fragment>
					}
					{ noticeDismiss &&
						<hr className="uagb-editor__separator" />
					}
					{ noticeDismiss &&
						<ToggleControl
							label={ __( "Enable Cookies", 'ultimate-addons-for-gutenberg' ) }
							checked={ cookies }
							onChange={ this.update_cookie_id }
						/>
					}
					{ cookies &&
						<RangeControl
							label={ __( "Show Closed Notice After (Days)", 'ultimate-addons-for-gutenberg' ) }
							value={ close_cookie_days }
							onChange={ ( value ) => setAttributes( { close_cookie_days: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
					}
				</PanelBody>
				<PanelBody title="Spacing" initialOpen={false}>
					<DimensionsControl { ...this.props }
							type={ 'padding' }
							label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
							help={ __( 'Space inside of the container.', 'ultimate-addons-for-gutenberg' ) }
							valueTop={ paddingTop }
							valueRight={ paddingRight }
							valueBottom={ paddingBottom }
							valueLeft={ paddingLeft }
							valueTopTablet={ paddingTopTablet }
							valueRightTablet={ paddingRightTablet }
							valueBottomTablet={ paddingBottomTablet }
							valueLeftTablet={ paddingLeftTablet }
							valueTopMobile={ paddingTopMobile }
							valueRightMobile={ paddingRightMobile }
							valueBottomMobile={ paddingBottomMobile }
							valueLeftMobile={ paddingLeftMobile }
							unit={ paddingUnit }
						/>
				</PanelBody>
				<PanelBody title={ __( "Border", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
					<div className="uag-border-wrap">
					<label className="uag-border-label">{ __( "Style",'ultimate-addons-for-gutenberg' ) }</label>
					<SelectControl
						value={ borderStyle }
						onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
						options={ [
							{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
							{ value: "solid", label: __( "Solid", 'ultimate-addons-for-gutenberg' ) },
							{ value: "dotted", label: __( "Dotted", 'ultimate-addons-for-gutenberg' ) },
							{ value: "dashed", label: __( "Dashed", 'ultimate-addons-for-gutenberg' ) },
							{ value: "double", label: __( "Double", 'ultimate-addons-for-gutenberg' ) },
							{ value: "groove", label: __( "Groove", 'ultimate-addons-for-gutenberg' ) },
							{ value: "inset", label: __( "Inset", 'ultimate-addons-for-gutenberg' ) },
							{ value: "outset", label: __( "Outset", 'ultimate-addons-for-gutenberg' ) },
							{ value: "ridge", label: __( "Ridge", 'ultimate-addons-for-gutenberg' ) },
						] }
					/>
					</div>
					{ "none" != borderStyle && (
						<Range 
							label={ __( "Width", 'ultimate-addons-for-gutenberg' ) }
							value={borderWidth} 
							onChange={val => setAttributes({ borderWidth: parseInt(val) })}
							min={0} 
							max={100} 
						/>
					) }
					{ "none" != borderStyle && (
					<Range 
						label={ __( "Radius", 'ultimate-addons-for-gutenberg' ) }
						value={borderRadius} 
						onChange={val => setAttributes({ borderRadius: parseInt(val) })}
						min={0} 
						max={100} 
					/>
					) }
					{ "none" != borderStyle && (
						<Fragment>
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ ( borderColor ? borderColor : '' ) }
								colorDefault={ '' }
								onColorChange={ value => setAttributes( { borderColor: value } ) }
								onColorClassChange={ value => setAttributes( { colorClass: value } ) }
							/>
						</Fragment>
					) }
				</PanelBody>
				<PanelBody title={ __( "Background", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
					<div className="uag-background-wrap">
						<label className="uag-background-label">{__( "Background Type", 'ultimate-addons-for-gutenberg' ) }</label>
						<SelectControl
							value={ backgroundType }
							onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
							options={ [
								{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
								{ value: "color", label: __( "Color", 'ultimate-addons-for-gutenberg' ) },
								{ value: "gradient", label: __( "Gradient", 'ultimate-addons-for-gutenberg' ) },
								{ value: "image", label: __( "Image", 'ultimate-addons-for-gutenberg' ) }
							] }
						/>
					</div>
					{ "color" == backgroundType && (
						<Fragment>
							<AdvancedPopColorControl
								label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ ( backgroundColor ? backgroundColor : '' ) }
								colorDefault={ '' }
								onColorChange={ value => setAttributes( { backgroundColor: value } ) }
								onColorClassChange={ value => setAttributes( { colorClass: value } ) }
							/>
						</Fragment>
					) }
					{ "image" == backgroundType &&
							( <Fragment>
								<BaseControl
									className="editor-bg-image-control"
									label={ __( "Background Image", 'ultimate-addons-for-gutenberg' ) }>
									<MediaUpload
										title={ __( "Select Background Image", 'ultimate-addons-for-gutenberg' ) }
										onSelect={ this.onSelectImage }
										allowedTypes={ [ "image" ] }
										value={ backgroundImage }
										render={ ( { open } ) => (
											<Button isSecondary onClick={ open }>
												{ ! backgroundImage ? __( "Select Background Image", 'ultimate-addons-for-gutenberg' ) : __( "Replace image", 'ultimate-addons-for-gutenberg' ) }
											</Button>
										) }
									/>
									{ backgroundImage &&
										( <Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
											{ __( "Remove Image", 'ultimate-addons-for-gutenberg' ) }
										</Button> )
									}
								</BaseControl>
								{ backgroundImage &&
									( <Fragment>
										<div className="uag-image-position-wrap">
										<label className="uag-image-position-label">{ __( "Position", 'ultimate-addons-for-gutenberg' ) }</label>
										<SelectControl
											value={ backgroundPosition }
											onChange={ ( value ) => setAttributes( { backgroundPosition: value } ) }
											options={ [
												{ value: "top-left", label: __( "Top Left", 'ultimate-addons-for-gutenberg' ) },
												{ value: "top-center", label: __( "Top Center", 'ultimate-addons-for-gutenberg' ) },
												{ value: "top-right", label: __( "Top Right", 'ultimate-addons-for-gutenberg' ) },
												{ value: "center-left", label: __( "Center Left", 'ultimate-addons-for-gutenberg' ) },
												{ value: "center-center", label: __( "Center Center", 'ultimate-addons-for-gutenberg' ) },
												{ value: "center-right", label: __( "Center Right", 'ultimate-addons-for-gutenberg' ) },
												{ value: "bottom-left", label: __( "Bottom Left", 'ultimate-addons-for-gutenberg' ) },
												{ value: "bottom-center", label: __( "Bottom Center", 'ultimate-addons-for-gutenberg' ) },
												{ value: "bottom-right", label: __( "Bottom Right", 'ultimate-addons-for-gutenberg' ) },
											] }
										/>
										</div>
										<div className="uag-image-attachment-wrap">
										<label className="uag-image-attachment-label">{ __( "Attachment", 'ultimate-addons-for-gutenberg' ) }</label>
										<SelectControl
											value={ backgroundAttachment }
											onChange={ ( value ) => setAttributes( { backgroundAttachment: value } ) }
											options={ [
												{ value: "fixed", label: __( "Fixed", 'ultimate-addons-for-gutenberg' ) },
												{ value: "scroll", label: __( "Scroll", 'ultimate-addons-for-gutenberg' ) }
											] }
										/>
										</div>
										<div className="uag-image-repeat-wrap">
										<label className="uag-image-repeat-label">{ __( "Repeat", 'ultimate-addons-for-gutenberg' ) }</label>
										<SelectControl
											value={ backgroundRepeat }
											onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
											options={ [
												{ value: "no-repeat", label: __( "No Repeat", 'ultimate-addons-for-gutenberg' ) },
												{ value: "repeat", label: __( "Repeat", 'ultimate-addons-for-gutenberg' ) },
												{ value: "repeat-x", label: __( "Repeat-x", 'ultimate-addons-for-gutenberg' ) },
												{ value: "repeat-y", label: __( "Repeat-y", 'ultimate-addons-for-gutenberg' ) }
											] }
										/>
										</div>
										<div className="uag-image-size-wrap">
										<label className="uag-image-size-label">{ __( "Size", 'ultimate-addons-for-gutenberg' ) }</label>
										<SelectControl
											value={ backgroundSize }
											onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
											options={ [
												{ value: "auto", label: __( "Auto", 'ultimate-addons-for-gutenberg' ) },
												{ value: "cover", label: __( "Cover", 'ultimate-addons-for-gutenberg' ) },
												{ value: "contain", label: __( "Contain", 'ultimate-addons-for-gutenberg' ) }
											] }
										/>
										</div>
										<div className="uag-image-overlay-wrap">
										<label className="uag-image-overlay-label">{  __( "Overlay Type", 'ultimate-addons-for-gutenberg' ) }</label>
										<SelectControl
											value={ overlayType }
											onChange={ ( value ) => setAttributes( { overlayType: value } ) }
											options={ [
												{ value: "color", label: __( "Color", 'ultimate-addons-for-gutenberg' ) },
												{ value: "gradient", label: __( "Gradient", 'ultimate-addons-for-gutenberg' ) },
											] }
										/>
										</div>
										{ "color" == overlayType &&<Fragment>
												<AdvancedPopColorControl
													label={ __( "Image Overlay Color", 'ultimate-addons-for-gutenberg' ) }
													colorValue={ ( backgroundImageColor ? backgroundImageColor : '' ) }
													colorDefault={ '' }
													onColorChange={ value => setAttributes( { backgroundImageColor: value } ) }
													onColorClassChange={ value => setAttributes( { colorClass: value } ) }
												/>
											</Fragment>
										}

										{ "gradient" == overlayType &&
											( <Fragment>
												<PanelColorSettings
													title={ __( "Color Settings", 'ultimate-addons-for-gutenberg' ) }
													colorSettings={ [
														{
															value: gradientOverlayColor2,
															onChange:( value ) => setAttributes( { gradientOverlayColor2: value } ),
															label: __( "Color 1", 'ultimate-addons-for-gutenberg' ),
														},
														{
															value: gradientOverlayColor1,
															onChange:( value ) => setAttributes( { gradientOverlayColor1: value } ),
															label: __( "Color 2", 'ultimate-addons-for-gutenberg' ),
														},
													] }
												>
												</PanelColorSettings>
												<SelectControl
													label={ __( "Type", 'ultimate-addons-for-gutenberg' ) }
													value={ gradientOverlayType }
													onChange={ ( value ) => setAttributes( { gradientOverlayType: value } ) }
													options={ [
														{ value: "linear", label: __( "Linear", 'ultimate-addons-for-gutenberg' ) },
														{ value: "radial", label: __( "Radial", 'ultimate-addons-for-gutenberg' ) },
													] }
												/>
												<RangeControl
													label={ __( "Location 1", 'ultimate-addons-for-gutenberg' ) }
													value={ gradientOverlayLocation1 }
													onChange={ ( value ) => setAttributes( { gradientOverlayLocation1: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ __( "Location 2", 'ultimate-addons-for-gutenberg' ) }
													value={ gradientOverlayLocation2 }
													onChange={ ( value ) => setAttributes( { gradientOverlayLocation2: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ __( "Angle", 'ultimate-addons-for-gutenberg' ) }
													value={ gradientOverlayAngle }
													onChange={ ( value ) => setAttributes( { gradientOverlayAngle: value } ) }
													min={ 0 }
													max={ 360 }
													allowReset
												/>
											</Fragment> )
										}
									</Fragment> )
								}
							</Fragment> )
					}
					{ "gradient" == backgroundType &&
							( <Fragment>
								<GradientSettings attributes={ this.props.attributes }	setAttributes={ setAttributes }/>
							</Fragment> )
					}
					{ ( "color" == backgroundType || ( "image" == backgroundType && backgroundImage ) || "gradient" == backgroundType ) &&
							( 
							<Range 
								label={ __( "Opacity", 'ultimate-addons-for-gutenberg' ) }
								value={backgroundOpacity} 
								onChange={val => setAttributes({ backgroundOpacity: parseInt(val) })}
								min={0} 
								max={100} 
							/>
							)
					}
				</PanelBody>
				</InspectorTab>
				<InspectorTab key={'style'}>
				<PanelBody title="Colors" initialOpen={true}>
					 <AdvancedPopColorControl
						label={ __( 'Title Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( titleColor ? titleColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { titleColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Highlight Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( noticeColor ? noticeColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { noticeColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Content Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( textColor ? textColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { textColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					<AdvancedPopColorControl
						label={ __( 'Content Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( contentBgColor ? contentBgColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { contentBgColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					{ noticeDismiss &&
					<AdvancedPopColorControl
						label={ __( 'Dismiss Icon Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ( noticeDismissColor ? noticeDismissColor : '' ) }
						colorDefault={ '' }
						onColorChange={ value => setAttributes( { noticeDismissColor: value } ) }
						onColorClassChange={ value => setAttributes( { colorClass: value } ) }
					/>
					}
				</PanelBody>
				</InspectorTab>
				<InspectorTab key={'advance'}>
				</InspectorTab>
				</InspectorTabs>
				)
			}

		// 			<hr className="uagb-editor__separator" />
		// 			<h2>{ __( "Typography", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<TypographyControl
		// 					label={ __( "Title", 'ultimate-addons-for-gutenberg' ) }
		// 					attributes = { attributes }
		// 					setAttributes = { setAttributes }
		// 					loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
		// 					fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
		// 					fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
		// 					fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
		// 					fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
		// 					fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
		// 					fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
		// 					fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
		// 					lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
		// 					lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
		// 					lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
		// 					lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
		// 				/>
		// 				<TypographyControl
		// 					label={ __( "Content", 'ultimate-addons-for-gutenberg' ) }
		// 					attributes = { attributes }
		// 					setAttributes = { setAttributes }
		// 					loadGoogleFonts = { { value: descLoadGoogleFonts, label: 'descLoadGoogleFonts' } }
		// 					fontFamily = { { value: descFontFamily, label: 'descFontFamily' } }
		// 					fontWeight = { { value: descFontWeight, label: 'descFontWeight' } }
		// 					fontSubset = { { value: descFontSubset, label: 'descFontSubset' } }
		// 					fontSizeType = { { value: descFontSizeType, label: 'descFontSizeType' } }
		// 					fontSize = { { value: descFontSize, label: 'descFontSize' } }
		// 					fontSizeMobile = { { value: descFontSizeMobile, label: 'descFontSizeMobile' } }
		// 					fontSizeTablet= { { value: descFontSizeTablet, label: 'descFontSizeTablet' } }
		// 					lineHeightType = { { value: descLineHeightType, label: 'descLineHeightType' } }
		// 					lineHeight = { { value: descLineHeight, label: 'descLineHeight' } }
		// 					lineHeightMobile = { { value: descLineHeightMobile, label: 'descLineHeightMobile' } }
		// 					lineHeightTablet= { { value: descLineHeightTablet, label: 'descLineHeightTablet' } }
		// 				/>
		// 				<hr className="uagb-editor__separator" />
		// 				<h2>{ __( "Title Padding (px)", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.vertical_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ titleVrPadding }
		// 					onChange={ ( value ) => setAttributes( { titleVrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.horizontal_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ titleHrPadding }
		// 					onChange={ ( value ) => setAttributes( { titleHrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<hr className="uagb-editor__separator" />
		// 				<h2>{ __( "Content Padding (px)", 'ultimate-addons-for-gutenberg' ) }</h2>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.vertical_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ contentVrPadding }
		// 					onChange={ ( value ) => setAttributes( { contentVrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 				<RangeControl
		// 					label={ UAGB_Block_Icons.horizontal_spacing }
		// 					className={ "uagb-margin-control" }
		// 					value={ contentHrPadding }
		// 					onChange={ ( value ) => setAttributes( { contentHrPadding: value } ) }
		// 					min={ 0 }
		// 					max={ 50 }
		// 					allowReset
		// 				/>
		// 		</PanelBody>
		// 	)
		// }
		
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ noticeAlignment }
						onChange={ ( value ) =>
							setAttributes( { noticeAlignment: value } )
						}
					/>
				</BlockControls>
				<InspectorControls>
				{ inlineGeneralSettings() }
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-inline_notice__outer-wrap",
					`${ noticeDismiss }`,
					`uagb-inline_notice__align-${ noticeAlignment }`,
					`uagb-block-${ block_id }`
					) }
				>
					{ image_icon_html }
					<RichText
						tagName={ headingTag }
						placeholder={ __( 'Notice Title', 'ultimate-addons-for-gutenberg' ) }
						keepPlaceholderOnFocus
						value={ noticeTitle }
						className='uagb-notice-title'
						onChange={ ( value ) =>
							setAttributes( { noticeTitle: value } )
						}
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Add notice text...', 'ultimate-addons-for-gutenberg' ) }
						value={ noticeContent }
						className='uagb-notice-text'
						onChange={ ( value ) =>
							setAttributes( { noticeContent: value } )
						}
					/>
				</div>
				{ loadTitleGoogleFonts }
				{ loadDescriptionGoogleFonts }
			</Fragment>
		)
	}
}

export default UAGBInlineNoticeEdit