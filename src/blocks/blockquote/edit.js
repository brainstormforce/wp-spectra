// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Seperator from "./components/Seperator"
import TweetButton from "./components/TweetButton"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	BaseControl,
	ToggleControl,
	Toolbar,
	Tooltip
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBBlockQuote extends Component {

	constructor() {
		super( ...arguments )

		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
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

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props

		// Setup the attributes.
		const {
			block_id,
			skinStyle,
			align,	
			description_text,
			author,		
			authorColor,
			descColor,			
			descFontSize,
			authorFontSize,
			descSpace,
			authorSpace,	
			stack,
			borderColor,
			borderStyle,
			borderWidth,
			borderGap,
			verticalPadding,
			quoteColor,
			quoteBgColor,
			quoteSize,
			quoteBgSize,
			quoteGap,
			quoteStyle,
			seperatorWidth,
			seperatorThickness,
			seperatorColor,
			seperatorStyle,
			seperatorSpace,
			enableTweet,
			tweetLinkColor,
			tweetBtnColor,
			tweetBtnHoverColor,
			tweetBtnBgColor,
			tweetBtnBgHoverColor,
			tweetBtnFontSize,
			tweetBtnHrPadding,
			tweetBtnVrPadding,
			tweetIconSpacing,
			iconView,
			iconSkin,
			iconLabel,
			iconSahreVia,
			iconTargetUrl,
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
			contentPadding,
			blockBorderStyle,
			blockBorderWidth,
			blockBorderRadius,
			blockBorderColor,
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-blockquote-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}	

		const border_settings =(
			<Fragment>
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
				{ "none" != borderStyle &&  <Fragment>					
					<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
					<ColorPalette
						value={ borderColor }
						onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
						allowReset
					/>
					<RangeControl
						label={ __( "Border Width" ) }
						value={ borderWidth }
						onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>	
					<RangeControl
						label={ __( "Gap Beetween Border and Content" ) }
						value={ borderGap }
						onChange={ ( value ) => setAttributes( { borderGap: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ __( "Vertical Padding" ) }
						value={ verticalPadding }
						onChange={ ( value ) => setAttributes( { verticalPadding: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>	
					</Fragment>
				 }
				</Fragment>		
		)

		const quote_settings = (
			<Fragment>
				
				<p className="uagb-setting-label">{ __( "Quote Color" ) }
				<span className="components-base-control__label">
				<span className="component-color-indicator" style={{ backgroundColor: quoteColor }} ></span></span></p>
				<ColorPalette
					value={ quoteColor }
					onChange={ ( colorValue ) => setAttributes( { quoteColor: colorValue } ) }
					allowReset
				/>
				{ quoteStyle =="style_3" && <Fragment><p className="uagb-setting-label">{ __( "Quote Background Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: quoteBgColor }} ></span></span></p>
					<ColorPalette
						value={ quoteBgColor }
						onChange={ ( colorValue ) => setAttributes( { quoteBgColor: colorValue } ) }
						allowReset
					/>
					</Fragment>
				}
				<RangeControl
					label={ __( "Quote Size" ) }
					value={ quoteSize }
					onChange={ ( value ) => setAttributes( { quoteSize: value } ) }
					min={ 0 }
					max={ 200 }
					allowReset
				/>	
				{ quoteStyle =="style_3" && <RangeControl
						label={ __( "Quote Background Size" ) }
						value={ quoteBgSize }
						onChange={ ( value ) => setAttributes( { quoteBgSize: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>	
				}
				<RangeControl
					label={ __( "Gap Beetween Quote and Content" ) }
					value={ quoteGap }
					onChange={ ( value ) => setAttributes( { quoteGap: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>
			</Fragment>
		)

		const skin_settings =(
			<Fragment>
				<PanelBody
						title={ __( "Skin" ) }
					>
					<SelectControl
						label={ __( "Style" ) }
						options={[
							{ value: "border", label: __( "Border" ) },
							{ value: "quotation", label: __( "Quotation" ) },
							{ value: "clean", label: __( "Clean" ) }
						] }
						value={ skinStyle }
						onChange={ ( value ) => setAttributes( { skinStyle: value } ) }
					/>
					{ skinStyle === "border" && border_settings	}
					{ skinStyle === "quotation" && quote_settings }					
				</PanelBody>
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
						<RangeControl
							label={ __( "Gap between Author and Seperator" ) }
							value={ seperatorSpace }
							onChange={ ( value ) => setAttributes( { seperatorSpace: value } ) }
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

		const Typography =(
			<Fragment>
				<PanelBody
						title={ __( "Content" ) }
						initialOpen={ false }>						
						<RangeControl
							label={ __( "Content Font Size" ) }
							value={ descFontSize }
							onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={30}
						/>
						<RangeControl
							label={ __( "Author Font Size" ) }
							value={ authorFontSize }
							onChange={ ( value ) => setAttributes( { authorFontSize: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={16}
						/>
						{ enableTweet && <Fragment>
							<RangeControl
								label={ __( "Button Font Size" ) }
								value={ tweetBtnFontSize }
								onChange={ ( value ) => setAttributes( { tweetBtnFontSize: value } ) }
								min={ 0 }
								max={ 100 }
								beforeIcon="editor-textcolor"
								allowReset
								initialPosition={16}
							/>
							</Fragment>
						}					
					</PanelBody>
					<PanelColorSettings
						title={ __( "Color Settings" ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: descColor,
								onChange: ( colorValue ) => setAttributes( { descColor: colorValue } ),
								label: __( "Content Color" ),
							},
							{
								value: authorColor,
								onChange: ( colorValue ) => setAttributes( { authorColor: colorValue } ),
								label: __( "Author" ),
							},							
						] }
					>
					{ enableTweet && iconSkin == 'link' && <Fragment>
							<p className="uagb-setting-label">{ __( "Tweet Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetLinkColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetLinkColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetLinkColor: colorValue } ) }
						        allowReset
						    />

						    <p className="uagb-setting-label">{ __( "Tweet Hover Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetBtnHoverColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetBtnHoverColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetBtnHoverColor: colorValue } ) }
						        allowReset
						    />

						  </Fragment>
					}
					{ (enableTweet && iconSkin !== 'link') && <Fragment>
							<p className="uagb-setting-label">{ __( "Button Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetBtnColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetBtnColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetBtnColor: colorValue } ) }
						        allowReset
						    />

						    <p className="uagb-setting-label">{ __( "Button Background Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetBtnBgColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetBtnBgColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetBtnBgColor: colorValue } ) }
						        allowReset
						    />

						    <p className="uagb-setting-label">{ __( "Button Hover Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetBtnHoverColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetBtnHoverColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetBtnHoverColor: colorValue } ) }
						        allowReset
						    />

						    <p className="uagb-setting-label">{ __( "Button Background Hover Color" ) }
							<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: tweetBtnBgHoverColor }} ></span></span></p>
						    <ColorPalette
						        value={ tweetBtnBgHoverColor }
						        onChange={ ( colorValue ) => setAttributes( { tweetBtnBgHoverColor: colorValue } ) }
						        allowReset
						    />
						</Fragment>
					}
					
					</PanelColorSettings>
			</Fragment>
		)

		const spacing_settings =(
			<Fragment>
				<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }>
						<RangeControl
							label={ __( "Author Bottom Spacing" ) }
							value={ authorSpace }
							onChange={ ( value ) => setAttributes( { authorSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>
						<RangeControl
							label={ __( "Description Bottom Spacing" ) }
							value={ descSpace }
							onChange={ ( value ) => setAttributes( { descSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>			
					{ enableTweet && iconSkin !== 'link' && <Fragment>
						<RangeControl
							label={ __( "Button Horizontal Padding" ) }
							value={ tweetBtnHrPadding }
							onChange={ ( value ) => setAttributes( { tweetBtnHrPadding: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={5}
						/>	
						<RangeControl
							label={ __( "Button Vertical Padding" ) }
							value={ tweetBtnVrPadding }
							onChange={ ( value ) => setAttributes( { tweetBtnVrPadding: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={5}
						/>	
						</Fragment>
					}	
					{ (enableTweet && iconView == 'icon_text') && <Fragment>
						<RangeControl
							label={ __( "Space between Tweet Icon and Text" ) }
							value={ tweetIconSpacing }
							onChange={ ( value ) => setAttributes( { tweetIconSpacing: value } ) }
							min={ 0 }
							max={ 20 }
							allowReset
							initialPosition={5}
						/>	
						</Fragment>
					}					
					<RangeControl
						label={ __( "Content Padding" ) }
						value={ contentPadding }
						onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
						min={ 0 }
						max={ 20 }
						allowReset
						initialPosition={5}
					/>	
					</PanelBody>
			</Fragment>
		)

		const twitter_settings =(
			<Fragment>
				<PanelBody title={ __( "Social Icon" ) }
					initialOpen={ false }>
					<ToggleControl
						label={ __( "Enable Twitter Icon" ) }
						checked={ enableTweet }
						onChange={ ( value ) => setAttributes( { enableTweet: ! enableTweet } ) }
					/>	
					{ enableTweet && <Fragment>
						<SelectControl
							label={ __( "Icon View" ) }
							value={ iconView }
							onChange={ ( value ) => setAttributes( { iconView: value } ) }
							options={ [
								{ value: "icon_text", label: __( "Icon & Text" ) },
								{ value: "icon", label: __( "Icon" ) },
								{ value: "text", label: __( "Text" ) },
							] }
						/>
						<SelectControl
							label={ __( "Icon Style" ) }
							value={ iconSkin }
							onChange={ ( value ) => setAttributes( { iconSkin: value } ) }
							options={ [
								{ value: "classic", label: __( "Classic" ) },
								{ value: "bubble", label: __( "Bubble" ) },
								{ value: "link", label: __( "Link" ) },
							] }
						/>
					</Fragment>}	
					{ enableTweet && iconView !== "icon" && <Fragment>
						<TextControl
							label= { __( "Label" ) }
							value= { iconLabel }
							onChange={ value => setAttributes( { iconLabel: value } ) }
						/>
						</Fragment>
					}	
					{ enableTweet && <Fragment>
						<TextControl
							label= { __( "Share Via" ) }
							value= { iconSahreVia }
							onChange={ value => setAttributes( { iconSahreVia: value } ) }
						/>						
						<TextControl
							label= { __( "Target URL" ) }
							value= { iconTargetUrl }
							onChange={ value => setAttributes( { iconTargetUrl: value } ) }
						/>		
						</Fragment>
					}	
				</PanelBody>	
			</Fragment>
		)

		const background_settings =(
			<Fragment>
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
			</Fragment>
		)

		const block_border = (<Fragment>
					<PanelBody title={ __( "Border" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Border Style" ) }
							value={ blockBorderStyle }
							onChange={ ( value ) => setAttributes( { blockBorderStyle: value } ) }
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
						{ "none" != blockBorderStyle && (
							<RangeControl
								label={ __( "Border Width" ) }
								value={ blockBorderWidth }
								onChange={ ( value ) => setAttributes( { blockBorderWidth: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
						) }
						<RangeControl
							label={ __( "Border Radius" ) }
							value={ blockBorderRadius }
							onChange={ ( value ) => setAttributes( { blockBorderRadius: value } ) }
							min={ 0 }
							max={ 1000 }
							allowReset
						/>
						{ "none" != blockBorderStyle && (
							<Fragment>
								<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: blockBorderColor }} ></span></span></p>
								<ColorPalette
									value={ blockBorderColor }
									onChange={ ( colorValue ) => setAttributes( { blockBorderColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
					</PanelBody>
				</Fragment>
			)

		return (
			<Fragment>				
				<BlockControls key='controls'>
					{  ( ( skinStyle === "quotation" && quoteStyle !== 'style_2' ) && !enableTweet )  && <AlignmentToolbar
							value={ align }
							onChange={ ( value ) => setAttributes( { align: value } ) }
						/>
					}
					{ skinStyle === "quotation" && <Fragment>
						
						<Toolbar>
							<Tooltip text={ __( "Normal Quote" ) }>
								<Button
									className={ classnames(
										"components-icon-button",
										"components-toolbar__control",
										{ "is-active": quoteStyle === "style_1" },
									) }
									onClick={ () => setAttributes( { quoteStyle: "style_1" } ) }
								>
									{ UAGB_Block_Icons.style_1 }
								</Button>
							</Tooltip>
						</Toolbar>

						<Toolbar>
							<Tooltip text={ __( "Inline Quote" ) }>
								<Button
									className={ classnames(
										"components-icon-button",
										"components-toolbar__control",
										{ "is-active": quoteStyle === "style_2" },
									) }
									onClick={ () => setAttributes( { quoteStyle: "style_2" } ) }
								>
									{ UAGB_Block_Icons.style_2 }
								</Button>
							</Tooltip>
						</Toolbar>

						<Toolbar>
							<Tooltip text={ __( "Quote On Top" ) }>
								<Button
									className={ classnames(
										"components-icon-button",
										"components-toolbar__control",
										{ "is-active": quoteStyle === "style_3" },
									) }
									onClick={ () => setAttributes( { quoteStyle: "style_3" } ) }
								>
									{ UAGB_Block_Icons.style_3 }
								</Button>
							</Tooltip>
						</Toolbar>

						</Fragment>
					}
					
				</BlockControls>
				<InspectorControls>
					{ skin_settings }
					{ Typography }
					{ seperatorSettings }
					{ twitter_settings }	
					{ background_settings }	
					{ skinStyle === "quotation" && block_border }			
					{ spacing_settings }					
				</InspectorControls>
				<div
					className = { classnames(
						className,						
						"uagb-blockquote__outer-wrap",
					) }
					id={ `uagb-quote-${ this.props.clientId }` }>
					<div className = { classnames(
						"uagb-blockquote__wrap",
						`uagb-blockquote__skin-${skinStyle}`,
						( skinStyle === "quotation" ) ? ` uagb-quote__style-${quoteStyle}` : "",
						( enableTweet ) ? `uagb-quote__with-tweet uagb-quote__tweet-style-${iconSkin}` : "",
						( enableTweet ) ? `uagb-quote__tweet-${iconView}` : "",
						( skinStyle !== "border" ) ? `uagb-quote__border` : "",
					) } >
						
						{ backgroundType !== 'none' && <div className= "uagb-quote__overlay"></div> }

						<blockquote className="uagb-blockquote">					  
						{ skinStyle === "quotation" && <span className="uagb-quote__icon"></span> }
						<div className="uagb-blockquote__content-wrap">
						   	<RichText
								tagName="p"
								placeholder={ __( "Write Content" ) }
								value={ description_text }
								className='uagb-blockquote__content'
								multiline={ false }
								onChange={ ( value ) => {
									setAttributes( { description_text: value } ) }
								}
								onMerge={ mergeBlocks }
								unstableOnSplit={
									insertBlocksAfter ?
										( before, after, ...blocks ) => {
											setAttributes( { content: before } )
											insertBlocksAfter( [
												...blocks,
												createBlock( "core/paragraph", { content: after } ),
											] )
										} :
										undefined
								}
								onRemove={ () => onReplace( [] ) }
							/>

						{ "none" !== seperatorStyle && <Seperator attributes={attributes} /> }

					   <footer>
					      	<RichText
								tagName="cite"
								placeholder={ __( "Write Content" ) }
								value={ author }
								className='uagb-blockquote__author'
								multiline={ false }
								onChange={ ( value ) => {
									setAttributes( { author: value } ) }
								}
								onMerge={ mergeBlocks }
								unstableOnSplit={
									insertBlocksAfter ?
										( before, after, ...blocks ) => {
											setAttributes( { content: before } )
											insertBlocksAfter( [
												...blocks,
												createBlock( "core/paragraph", { content: after } ),
											] )
										} :
										undefined
								}
								onRemove={ () => onReplace( [] ) }
							/>
							
					      	{ enableTweet &&  <TweetButton attributes={attributes} /> }
					   </footer>
					</div>
					</blockquote>
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
		$style.setAttribute( "id", "uagb-blockquote-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBBlockQuote
