// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Seperator from "./components/Seperator"
import TweetButton from "./components/TweetButton"
import Description from "./components/Description"
import AuthorText from "./components/AuthorText"
import AuthorImage from "./components/AuthorImage"
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
	Tooltip,
	TabPanel,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBBlockQuote extends Component {

	constructor() {
		super( ...arguments )
		this.onSelectAuthorImage    = this.onSelectAuthorImage.bind( this )
		this.onRemoveAuthorImage    = this.onRemoveAuthorImage.bind( this )
	}
	
	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveAuthorImage() {
		const { authorImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { authorImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectAuthorImage( media ) {

		const { authorImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { authorImage: null } )
			return
		}

		if ( ! media.type || "image" != media.type ) {
			return
		}

		setAttributes( { authorImage: media } )
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
			authorImage,
			authorImageWidth,
			authorImageSize,
			authorImgBorderRadius,
			authorImgPosition
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-blockquote-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}	

		let image_name = "Select Image"
		if(authorImage){
			if(authorImage.url == null || authorImage.url == "" ){
				image_name = "Select Image"
			}else{
				image_name = "Replace Image"
			}
		}

		// Image sizes.
		const imageSizeOptions = [
			{ value: "thumbnail", label: __( "Thumbnail" ) },
			{ value: "medium", label: __( "Medium" ) },
			{ value: "full", label: __( "Large" ) }
		]

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
					
					</Fragment>
				 }
				</Fragment>		
		)

		const quote_settings = (
			<Fragment>
				<RangeControl
					label={ __( "Quote Size" ) }
					value={ quoteSize }
					onChange={ ( value ) => setAttributes( { quoteSize: value } ) }
					min={ 0 }
					max={ 200 }
					allowReset
				/>	
				<RangeControl
					label={ __( "Quote Background Size" ) }
					value={ quoteBgSize }
					onChange={ ( value ) => setAttributes( { quoteBgSize: value } ) }
					min={ 0 }
					max={ 50 }
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
						
					</Fragment>
					)
					}

				</PanelBody>
			</Fragment>
		)

		// Image controls.
		const imageControls = (
			<Fragment>
				<BaseControl
					className="editor-bg-image-control"
					label={ __( "Author Image" ) }
				>
					<MediaUpload
						title={ __( "Select Image" ) }
						onSelect={ this.onSelectAuthorImage }
						allowedTypes= { [ "image" ] }
						value={ authorImage }
						render={ ( { open } ) => (
							<Button isDefault onClick={ open }>
								{ image_name }
							</Button>
						) }
					/>
					{ ( authorImage && authorImage.url !=="null" && authorImage.url !== "" ) &&
						<Button className="uagb-rm-btn" onClick={ this.onRemoveAuthorImage } isLink isDestructive>
							{ __( "Remove Image" ) }
						</Button>
					}
				</BaseControl>
				{ ( authorImage && authorImage.url !=="null" && authorImage.url !== "" ) &&
					<Fragment>
						<SelectControl
							label={ __( "Image Size" ) }
							options={ imageSizeOptions }
							value={ authorImageSize }
							onChange={ ( value ) => setAttributes( { authorImageSize: value } ) }
						/>
						<RangeControl
							label={ __( "Image Width" ) }
							value={ authorImageWidth }
							onChange={ ( value ) => setAttributes( { authorImageWidth: value } ) }
							min={ 0 }
							max={ 200 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label = { __( "Image Rounded Corners" ) }
							value = { authorImgBorderRadius }
							onChange = { ( value ) => setAttributes( { authorImgBorderRadius: value } ) }
							min = { 0 }
							max = { 100 }
							beforeIcon = ""
							allowReset
						/>
						<SelectControl
							label={ __( "Image Position" ) }
							value={ authorImgPosition }
							onChange={ ( value ) => setAttributes( { authorImgPosition: value } ) }
							options={ [
								{ value: "left", label: __( "Left" ) },
								{ value: "right", label: __( "Right" ) },
								{ value: "top", label: __( "Top" ) },
							] }
						/>
					</Fragment>
				}
			</Fragment>
		)

		const colorSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Content Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
					<ColorPalette
						value={ descColor }
						onChange={ ( colorValue ) => setAttributes( { descColor: colorValue } ) }
						allowReset
					/>

				<p className="uagb-setting-label">{ __( "Author Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: authorColor }} ></span></span></p>
					<ColorPalette
						value={ authorColor }
						onChange={ ( colorValue ) => setAttributes( { authorColor: colorValue } ) }
						allowReset
					/>

				{ skinStyle == "quotation" && <Fragment>
					<p className="uagb-setting-label">{ __( "Quote Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: quoteColor }} ></span></span></p>
					<ColorPalette
						value={ quoteColor }
						onChange={ ( colorValue ) => setAttributes( { quoteColor: colorValue } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Quote Background Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: quoteBgColor }} ></span></span></p>
						<ColorPalette
							value={ quoteBgColor }
							onChange={ ( colorValue ) => setAttributes( { quoteBgColor: colorValue } ) }
							allowReset
					/>		
					</Fragment>
				}
				{ enableTweet && iconSkin == 'link' && <Fragment>
						<p className="uagb-setting-label">{ __( "Tweet Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: tweetLinkColor }} ></span></span></p>
					    <ColorPalette
					        value={ tweetLinkColor }
					        onChange={ ( colorValue ) => setAttributes( { tweetLinkColor: colorValue } ) }
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
					</Fragment>
				}
			</Fragment>
		)

		const hoverSettings = (
			<Fragment>
				{ enableTweet && iconSkin == 'link' && <Fragment>							
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
						{ imageControls } 
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
					<PanelBody
						title={ __( "Color Settings" ) }
						initialOpen={ false }>		
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
									className: "uagb-hover-tab",
								},							
							] }>
							{
								( tabName ) => {
									let tabout
									if( "hover" === tabName.name ) {
										tabout = hoverSettings
									}else {
										tabout = colorSettings
									}
									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
					</PanelBody>
			</Fragment>
		)

		const spacing_settings =(
			<Fragment>
				<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }>

					{ skinStyle === "quotation" && 
						<RangeControl
							label={ __( "Gap Beetween Quote and Content" ) }
							value={ quoteGap }
							onChange={ ( value ) => setAttributes( { quoteGap: value } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
					}

					{ skinStyle === "border" && <Fragment>
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
						<RangeControl
							label={ __( "Description Bottom Spacing" ) }
							value={ descSpace }
							onChange={ ( value ) => setAttributes( { descSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>	
					{ align == "center" && <RangeControl
							label={ __( "Author Bottom Spacing" ) }
							value={ authorSpace }
							onChange={ ( value ) => setAttributes( { authorSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>
					}	
					{ "none" !== seperatorStyle && <RangeControl
							label={ __( "Gap between Author and Seperator" ) }
							value={ seperatorSpace }
							onChange={ ( value ) => setAttributes( { seperatorSpace: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon=""
							allowReset
						/>
					}						
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
		
		return (
			<Fragment>				
				<BlockControls key='controls'>
					{  ( skinStyle !== "border" )  && <AlignmentToolbar
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
						</Fragment>
					}
					
				</BlockControls>
				<InspectorControls>
					{ skin_settings }					
					{ Typography }
					{ seperatorSettings }
					{ twitter_settings }
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
						( skinStyle !== "border" ) ? `uagb-quote__align-${align}` : "",
						( skinStyle === "quotation" ) ? `uagb-quote__style-${quoteStyle}` : "",
						( enableTweet ) ? `uagb-quote__with-tweet uagb-quote__tweet-style-${iconSkin} uagb-quote__tweet-${iconView}` : "",
						//( enableTweet ) ? `uagb-quote__tweet-${iconView}` : "",
						//( skinStyle !== "border" ) ? `uagb-quote__border` : "",
					) } >
						
						<blockquote className="uagb-blockquote">					  
						{ skinStyle === "quotation" && <span className="uagb-quote__icon"></span> }
						<div className="uagb-blockquote__content-wrap">
						   	{ <Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  /> }

						{ "none" !== seperatorStyle && <Seperator attributes={attributes} /> }

					   <footer>
					   		<div className={ classnames(
								"uagb-quote__author-wrap",
								( authorImage !== "" ) ? `uagb-quote__author-at-${authorImgPosition}` : "",	
							) }	>					   		
					      		{ <AuthorImage attributes={attributes} /> }
					      		{ <AuthorText attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
							</div>
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
