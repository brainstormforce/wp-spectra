// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	BaseControl,
	ToggleControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBBlockQuote extends Component {

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
			enableTweet,
			tweetBtnColor,
			tweetBtnHoverColor,
			descFontSize,
			authorFontSize,
			tweetBtnFontSize,	
			descSpace,
			authorSpace,	
			stack,
			borderColor,
			borderStyle,
			borderWidth,
			borderGap,
			verticalPadding,
			quoteColor,
			quoteSize,
			quoteGap,
			quoteStyle,
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
				<SelectControl
					label={ __( "Quote Style" ) }
					value={ quoteStyle }
					onChange={ ( value ) => setAttributes( { quoteStyle: value } ) }
					options={ [
						{ value: "style_1", label: __( "Style 1" ) },
						{ value: "style_2", label: __( "Style 2" ) },
						{ value: "style_3", label: __( "Style 3" ) },
					] }
				/>
				<p className="uagb-setting-label">{ __( "Quote Color" ) }
				<span className="components-base-control__label">
				<span className="component-color-indicator" style={{ backgroundColor: quoteColor }} ></span></span></p>
				<ColorPalette
					value={ quoteColor }
					onChange={ ( colorValue ) => setAttributes( { quoteColor: colorValue } ) }
					allowReset
				/>
				<RangeControl
					label={ __( "Quote Size" ) }
					value={ quoteSize }
					onChange={ ( value ) => setAttributes( { quoteSize: value } ) }
					min={ 0 }
					max={ 2 }
					allowReset
				/>	
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

		return (
			<Fragment>				
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ align }
						onChange={ ( value ) => setAttributes( { align: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
					{ skin_settings }
					<PanelBody title={ __( "Social Icon" ) }
						initialOpen={ false }>
						<ToggleControl
							label={ __( "Enable Twitter Icon" ) }
							checked={ enableTweet }
							onChange={ ( value ) => setAttributes( { enableTweet: ! enableTweet } ) }
						/>						
					</PanelBody>
					<PanelBody
						title={ __( "Typography" ) }
						initialOpen={ false }>						
						<RangeControl
							label={ __( "Content Font Size" ) }
							value={ descFontSize }
							onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={30}
						/>
						<RangeControl
							label={ __( "Author Font Size" ) }
							value={ authorFontSize }
							onChange={ ( value ) => setAttributes( { authorFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={16}
						/>
						<RangeControl
							label={ __( "Tweet Font Size" ) }
							value={ tweetBtnFontSize }
							onChange={ ( value ) => setAttributes( { tweetBtnFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={16}
						/>						
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
							{
								value: tweetBtnColor,
								onChange: ( colorValue ) => setAttributes( { tweetBtnColor: colorValue } ),
								label: __( "Tweet Button Color" ),
							},							
							{
								value: tweetBtnHoverColor,
								onChange: ( colorValue ) => setAttributes( { tweetBtnHoverColor: colorValue } ),
								label: __( "Tweet Button Hover" ),
							},
						] }
					>
					</PanelColorSettings>

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
						
					</PanelBody>
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
						( skinStyle === "quotation" ) ? `uagb-quote__style-${quoteStyle}` : "",
					) } >
						<blockquote className="uagb-blockquote">					  
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
					      	{ enableTweet && <Fragment>
							      <a href="javascript:void(0)" className="uagb-blockquote__tweet-button" target="_blank">
							      	<i className="fab fa-twitter"></i>
							      	<span className="uagb-blockquote__tweet-label">Twitter</span>
							      </a>
					      		</Fragment>
					        }
					   </footer>
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
