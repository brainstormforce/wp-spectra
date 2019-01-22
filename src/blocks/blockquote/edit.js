// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
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
		this.onSelectImage    = this.onSelectImage.bind( this )
		this.onRemoveImage    = this.onRemoveImage.bind( this )
	}
	
	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { authorImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { authorImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {

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
			quotePadding,
			quoteBorderRadius,
			quoteStyle,			
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
			iconShareVia,
			iconTargetUrl,	
			customUrl,		
			authorImage,
			authorImageWidth,
			authorImageSize,
			authorImgBorderRadius,
			authorImgPosition,
			quoteTopMargin,
			quoteBottomMargin,
			quoteLeftMargin,
			quoteRightMargin,
			quoteHoverColor,
			quoteBgHoverColor,
			borderHoverColor,
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-blockquote-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}	

		let image_name = __( "Select Image" )
		if(authorImage){
			if(authorImage.url == null || authorImage.url == "" ){
				image_name = __( "Select Image" )
			}else{
				image_name = __( "Replace Image" )
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
				{ "none" != borderStyle && <RangeControl
						label={ __( "Border Width" ) }
						value={ borderWidth }
						onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				 }
			</Fragment>		
		)

		const quote_settings = (
			<Fragment>
				<RangeControl
					label={ __( "Quote Icon Size" ) }
					value={ quoteSize }
					onChange={ ( value ) => setAttributes( { quoteSize: value } ) }
					min={ 0 }
					max={ 150 }
					allowReset
				/>		
				<RangeControl
					label={ __( "Quote Icon Background Size" ) }
					value={ quotePadding }
					onChange={ ( value ) => setAttributes( { quotePadding: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				{ quoteBgColor &&				
					<RangeControl
						label={ __( "Quote Icon Border Radius (%)" ) }
						value={ quoteBorderRadius }
						onChange={ ( value ) => setAttributes( { quoteBorderRadius: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>	
				}			
			</Fragment>
		)

		const skin_settings =(			
			<PanelBody	title={ __( "Style" ) } >
				<SelectControl
					label={ __( "Style" ) }
					options={[
						{ value: "border", label: __( "Border" ) },
						{ value: "quotation", label: __( "Quotation" ) },
					] }
					value={ skinStyle }
					onChange={ ( value ) => setAttributes( { skinStyle: value } ) }
				/>
				{ skinStyle === "border" && border_settings	}
				{ skinStyle === "quotation" && quote_settings }	
				<hr className="uagb-editor__separator" />
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
				<hr className="uagb-editor__separator" />				
				<SelectControl
					label={ __( "Stack on" ) }
					value={ stack }
					options={ [
						{ value: "none", label: __( "None" ) },
						{ value: "tablet", label: __( "Tablet" ) },
						{ value: "mobile", label: __( "Mobile" ) },
					] }
					help={ __( "Note: Choose on what breakpoint the elements will stack." ) }
					onChange={ ( value ) => setAttributes( { stack: value } ) }
				/>										
			</PanelBody>			
		)

		// Image controls.
		const imageControls = (
			<Fragment>
				<BaseControl className="editor-bg-image-control" label={ __( "Author Image" ) } >
					<MediaUpload
						title={ __( "Select Image" ) }
						onSelect={ this.onSelectImage }
						allowedTypes= { [ "image" ] }
						value={ authorImage }
						render={ ( { open } ) => (
							<Button isDefault onClick={ open }>
								{ image_name }
							</Button>
						) }
					/>
					{ ( authorImage && authorImage.url !=="null" && authorImage.url !== "" ) &&
						<Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
							{ __( "Remove Image" ) }
						</Button>
					}
				</BaseControl>
				{ ( authorImage && authorImage.url !=="null" && authorImage.url !== "" ) &&
					<Fragment>
						<SelectControl
							label={ __( "Author Image Position" ) }
							value={ authorImgPosition }
							onChange={ ( value ) => setAttributes( { authorImgPosition: value } ) }
							options={ [
								{ value: "left", label: __( "Left" ) },
								{ value: "right", label: __( "Right" ) },
								{ value: "top", label: __( "Top" ) },
							] }
						/>
						<SelectControl
							label={ __( "Author Image Size" ) }
							options={ imageSizeOptions }
							value={ authorImageSize }
							onChange={ ( value ) => setAttributes( { authorImageSize: value } ) }
						/>
						<RangeControl
							label={ __( "Author Image Width" ) }
							value={ authorImageWidth }
							onChange={ ( value ) => setAttributes( { authorImageWidth: value } ) }
							min={ 0 }
							max={ 200 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label = { __( "Author Image Rounded Corners" ) }
							value = { authorImgBorderRadius }
							onChange = { ( value ) => setAttributes( { authorImgBorderRadius: value } ) }
							min = { 0 }
							max = { 100 }
							beforeIcon = ""
							allowReset
						/>		
					</Fragment>
				}
			</Fragment>
		)

		const colorSettings = (
			<Fragment>
				{ "none" != borderStyle && skinStyle == "border" && <Fragment>					
					<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
					<ColorPalette
						value={ borderColor }
						onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
						allowReset
					/>
					</Fragment>
				}				
				
				{ skinStyle == "quotation" && <Fragment>
					<p className="uagb-setting-label">{ __( "Quote Icon Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: quoteColor }} ></span></span></p>
					<ColorPalette
						value={ quoteColor }
						onChange={ ( colorValue ) => setAttributes( { quoteColor: colorValue } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Quote Icon Background Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: quoteBgColor }} ></span></span></p>
						<ColorPalette
							value={ quoteBgColor }
							onChange={ ( colorValue ) => setAttributes( { quoteBgColor: colorValue } ) }
							allowReset
					/>		
					</Fragment>
				}				
			</Fragment>
		)

		const hoverSettings = (
			<Fragment>	
				{ skinStyle == "border" && <Fragment>
					<p className="uagb-setting-label">{ __( "Border Hover Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: borderHoverColor }} ></span></span></p>
					<ColorPalette
						value={ borderHoverColor }
						onChange={ ( colorValue ) => setAttributes( { borderHoverColor: colorValue } ) }
						allowReset
					/>					
					</Fragment>
				}
				{ skinStyle == "quotation" && <Fragment>
					<p className="uagb-setting-label">{ __( "Quote Icon Hover Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: quoteHoverColor }} ></span></span></p>
					<ColorPalette
						value={ quoteHoverColor }
						onChange={ ( colorValue ) => setAttributes( { quoteHoverColor: colorValue } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Quote Icon Background Hover Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: quoteBgHoverColor }} ></span></span></p>
						<ColorPalette
							value={ quoteBgHoverColor }
							onChange={ ( colorValue ) => setAttributes( { quoteBgHoverColor: colorValue } ) }
							allowReset
					/>		
					</Fragment>
				}									
			</Fragment>
		)

		const Typography =(
			<Fragment>
				<PanelBody title={ __( "Content" ) } initialOpen={ false }>						
					<RangeControl
						label={ __( "Quote Font Size" ) }
						value={ descFontSize }
						onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
						min={ 0 }
						max={ 100 }
						beforeIcon="editor-textcolor"
						allowReset
						initialPosition={30}
					/>					
					<p className="uagb-setting-label">{ __( "Quote Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
					<ColorPalette
						value={ descColor }
						onChange={ ( colorValue ) => setAttributes( { descColor: colorValue } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
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
					<p className="uagb-setting-label">{ __( "Author Color" ) }
					<span className="components-base-control__label">
					<span className="component-color-indicator" style={{ backgroundColor: authorColor }} ></span></span></p>
					<ColorPalette
						value={ authorColor }
						onChange={ ( colorValue ) => setAttributes( { authorColor: colorValue } ) }
						allowReset
					/>
				
					{ imageControls } 
								
				</PanelBody>			
			</Fragment>
		)

		const tweet_normal = ( 
			<Fragment>
				{ iconSkin == 'link' && <Fragment>
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
				{ ( iconSkin !== 'link' ) && <Fragment>
						<p className="uagb-setting-label">{ __( "Tweet Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: tweetBtnColor }} ></span></span></p>
					    <ColorPalette
					        value={ tweetBtnColor }
					        onChange={ ( colorValue ) => setAttributes( { tweetBtnColor: colorValue } ) }
					        allowReset
					    />

					    <p className="uagb-setting-label">{ __( "Tweet Background Color" ) }
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

		const tweet_hover = (
			<Fragment>
				{ iconSkin == 'link' && <Fragment>							
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
				{ ( iconSkin !== 'link' ) && <Fragment>
						<p className="uagb-setting-label">{ __( "Tweet Hover Color" ) }
						<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: tweetBtnHoverColor }} ></span></span></p>
					    <ColorPalette
					        value={ tweetBtnHoverColor }
					        onChange={ ( colorValue ) => setAttributes( { tweetBtnHoverColor: colorValue } ) }
					        allowReset
					    />

					    <p className="uagb-setting-label">{ __( "Tweet Background Hover Color" ) }
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

		const spacing_settings =(			
			<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
				{ skinStyle === "quotation" && <Fragment>						
					<RangeControl
						label={ __( "Quote Icon Top Margin" ) }
						value={ quoteTopMargin }
						onChange={ ( value ) => setAttributes( { quoteTopMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ __( "Quote Icon Bottom Margin" ) }
						value={ quoteBottomMargin }
						onChange={ ( value ) => setAttributes( { quoteBottomMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ __( "Quote Icon Left Margin" ) }
						value={ quoteLeftMargin }
						onChange={ ( value ) => setAttributes( { quoteLeftMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ __( "Quote Icon Right Margin" ) }
						value={ quoteRightMargin }
						onChange={ ( value ) => setAttributes( { quoteRightMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					</Fragment>
				}

				{ skinStyle === "border" && <Fragment>
					<RangeControl
						label={ __( "Gap Beetween Border and Quote" ) }
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
						label={ __( "Quote Bottom Spacing" ) }
						value={ descSpace }
						onChange={ ( value ) => setAttributes( { descSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
						initialPosition={0}
					/>	
				{ align == "center" && skinStyle !== "border" && <RangeControl
						label={ __( "Author Bottom Spacing" ) }
						value={ authorSpace }
						onChange={ ( value ) => setAttributes( { authorSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
						initialPosition={0}
					/>
				}									
					
			</PanelBody>
		)

		const twitter_settings =(			
			<PanelBody title={ __( "Twitter Icon" ) } initialOpen={ false }>
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
					<hr className="uagb-editor__separator" />
					<TextControl
						label= { __( "Label" ) }
						value= { iconLabel }
						onChange={ value => setAttributes( { iconLabel: value } ) }
					/>		
					
					</Fragment>		
				}	
				<RangeControl
					label={ __( "Tweet Font Size" ) }
					value={ tweetBtnFontSize }
					onChange={ ( value ) => setAttributes( { tweetBtnFontSize: value } ) }
					min={ 0 }
					max={ 100 }
					beforeIcon="editor-textcolor"
					allowReset
					initialPosition={16}
				/>					
				{ enableTweet && <Fragment>					
					<SelectControl
						label={ __( "Target URL" ) }
						value={ iconTargetUrl }
						onChange={ ( value ) => setAttributes( { iconTargetUrl: value } ) }
						options={ [
							{ value: "current", label: __( "Current Page" ) },
							{ value: "custom", label: __( "Custom URL" ) },
						] }
					/>				
					{ iconTargetUrl == "custom" && <TextControl
						label= { __( "URL" ) }
						value= { customUrl }
						onChange={ value => setAttributes( { customUrl: value } ) }
					/>	
					}							
					</Fragment>
				}	
				{ enableTweet && iconSkin !== 'link' && <Fragment>
					<hr className="uagb-editor__separator" />
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
				{ (enableTweet && iconView == 'icon_text') && <RangeControl
						label={ __( "Space between Tweet Icon and Text" ) }
						value={ tweetIconSpacing }
						onChange={ ( value ) => setAttributes( { tweetIconSpacing: value } ) }
						min={ 0 }
						max={ 20 }
						allowReset
						initialPosition={5}
					/>						
				}
				{ enableTweet && <Fragment>
					<hr className="uagb-editor__separator" />
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
								let tweet_tab_output
								if( "hover" === tabName.name ) {
									tweet_tab_output = tweet_hover
								}else {
									tweet_tab_output = tweet_normal
								}
								return <div>{ tweet_tab_output }</div>
							}
						}
					</TabPanel>
					</Fragment>
				}
			</PanelBody>				
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
									{ UAGB_Block_Icons.quote_1 }
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
									{ UAGB_Block_Icons.quote_2 }
								</Button>
							</Tooltip>
						</Toolbar>
						</Fragment>
					}

					{ enableTweet && 
						<Fragment>
							<Toolbar>
							<label
								aria-label={ __( 'Twitter Username' ) }
								className={ `${ className }__via-label` }
								htmlFor={ `${ className }__via` }
							>	{ UAGB_Block_Icons.at_the_rate }
							</label>
							<input
								aria-label={ __( 'Twitter Username' ) }
								className={ `${ className }__via` }
								id={ `${ className }__via` }
								onChange={ ( event ) => setAttributes( { iconShareVia: event.target.value } ) }
								placeholder={ __( 'Username' ) }
								type="text"
								value={ iconShareVia }
							/>
						</Toolbar>
						</Fragment>
					}
					
				</BlockControls>
				<InspectorControls>
					{ skin_settings }					
					{ Typography }
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
						`uagb-quote-stack-img-${stack}`
					) } >
						
						<blockquote className="uagb-blockquote">					  
						{ skinStyle === "quotation" && <div className="uagb-quote__icon-wrap"><span className="uagb-quote__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path></svg></span></div> }

						<div className="uagb-blockquote__content-wrap">
						   	{ <Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  /> }

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
