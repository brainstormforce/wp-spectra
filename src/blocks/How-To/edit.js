/**
 * BLOCK: How To
 */

// Import block dependencies and components.
import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import memoize from "memize"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"


//  Import CSS.
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	InspectorControls,
	RichText,
	ColorPalette,
	InnerBlocks,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
	ToggleControl,
	TextControl
} = wp.components

const { withSelect } = wp.data

const { Component, Fragment } = wp.element

const ALLOWED_TOOLS_BLOCKS = [ "uagb/how-to-tools-child" ]

const ALLOWED_MATERIALS_BLOCKS = [ "uagb/how-to-materials-child" ]

const ALLOWED_STEPS_BLOCKS = [ "uagb/how-to-steps-child" ]

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

class UAGBHowTo extends Component {

	constructor() {
		super( ...arguments )

		// this.splitBlock = this.splitBlock.bind( this )
		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Assigning block_id in the attribute.
		this.props.setAttributes( { classMigrate: true } )

		let level_val = parseInt( this.props.attributes.headingTag.replace( 'h' , '' ) )
		this.props.setAttributes( { level: level_val } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-how-to-schema-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	/*
	 * Heading Tag Change
	 */
	onTagChange( value ) {
		const { setAttributes } = this.props

		let level_val = parseInt( value.replace( 'h' , '' ) )

		setAttributes( { level: level_val } )
		setAttributes( { headingTag: value } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props
		setAttributes( { mainimage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { mainimage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { mainimage: null } )
			return
		}

		if ( ! media.type ) {
			return
		}

		setAttributes( { mainimage: media } )
		console.log(media)
		if ( media["sizes"] ) {
			var new_img = this.getImageSize(media["sizes"])
			imageSizeOptions = new_img
		}
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

	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			attributes,
			setAttributes,
			insertBlocksAfter,
			mergeBlocks,
			onReplace,
			anchor,
			attributes: {
				level,
				showEstcost,
				showTotaltime,
				showEstcostcolor,
				showTotaltimecolor,
				tools_count,
				steps_count,
				material_count,
				toolsTitle,
				materialTitle,
				stepsTitle,
				tools,
				materials,
				steps,
				timeNeeded,
				estCost,
				mainimage,
				imgSize,
				imgWidth,
				headingTitle,
				headingId,
				headingDesc,
				headingAlign,
				headingColor,
				subHeadingColor,
				separatorColor,
				headingTag,
				headFontFamily,
				headFontWeight,
				headFontSubset,
				headFontSizeType,
				headFontSize,
				headFontSizeMobile,
				headFontSizeTablet,
				headLineHeightType,
				headLineHeight,
				headLineHeightMobile,
				headLineHeightTablet,
				subHeadFontFamily,
				subHeadFontWeight,
				subHeadFontSubset,
				subHeadFontSize,
				subHeadFontSizeType,
				subHeadFontSizeMobile,
				subHeadFontSizeTablet,
				subHeadLineHeight,
				subHeadLineHeightType,
				subHeadLineHeightMobile,
				subHeadLineHeightTablet,
				separatorWidth,
				separatorWidthType,
				seperatorStyle,
				separatorHeight,
				headSpace,
				separatorSpace,
				headLoadGoogleFonts,
				subHeadLoadGoogleFonts,
				//Total time.
				priceFontSizeType,
				priceFontSize,
				priceFontSizeTablet,
				priceFontSizeMobile,
				priceFontFamily,
				priceFontWeight,
				priceFontSubset,
				priceLineHeightType,
				priceLineHeight,
				priceLineHeightTablet,
				priceLineHeightMobile,
				priceLoadGoogleFonts,
				//Est cost.
				estcostLoadGoogleFonts,
				estcostFontFamily,
				estcostFontWeight,
				estcostFontSubset,
				estcostFontSizeType,
				estcostFontSize,
				estcostFontSizeMobile,
				estcostFontSizeTablet,
				estcostLineHeightType,
				estcostLineHeight,
				estcostLineHeightMobile,
				estcostLineHeightTablet,
				time,
			},
		} = this.props

		var element = document.getElementById( "uagb-how-to-schema-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}
		
		if( mainimage && mainimage["sizes"] ){
			imageSizeOptions = this.getImageSize(mainimage["sizes"])
		}

		let loadHeadingGoogleFonts;
		let loadSubHeadingGoogleFonts;

		if( headLoadGoogleFonts == true ) {
			
			const hconfig = {
				google: {
					families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
				},
			};

			loadHeadingGoogleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}

		if( subHeadLoadGoogleFonts == true ) {

			const sconfig = {
				google: {
					families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
				},
			};

			loadSubHeadingGoogleFonts = (
				<WebfontLoader config={ sconfig }>
				</WebfontLoader>
			)
		}

		let image_icon_html = ""

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-howto__source-image" src={mainimage.url} />

		}else{
			image_icon_html = <img className="uagb-howto__source-image" src="http://localhost/wordpress-uae/wp-content/plugins/elementor/assets/images/placeholder.png" />
		}

		// console.log(showTotaltime);
		// console.log(showEstcost);


		const getHowToToolsTemplate = memoize( ( tools_block, tools ) => {
			return times( tools_block, n => [ "uagb/how-to-tools-child", tools[n] ] )
		} )

		const getHowToMaterialsTemplate = memoize( ( tools_block, materials ) => {
			return times( tools_block, n => [ "uagb/how-to-materials-child", materials[n] ] )
		} )

		const getHowTostepsTemplate = memoize( ( tools_block, steps ) => {
			return times( tools_block, n => [ "uagb/how-to-steps-child", steps[n] ] )
		} )

		// console.log(steps)

		// console.log(steps_count)

		// console.log(getHowTostepsTemplate)


		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
				<PanelBody title={ __( "General" ) }>
					<h2>{ __( "Heading" ) }</h2>
						<SelectControl
							label={ __( "Heading Tag" ) }
							value={ headingTag }
							onChange={ value => {
								this.onTagChange( value )
							} }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
						/>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: headLoadGoogleFonts, label: 'headLoadGoogleFonts' } }
							fontFamily = { { value: headFontFamily, label: 'headFontFamily' } }
							fontWeight = { { value: headFontWeight, label: 'headFontWeight' } }
							fontSubset = { { value: headFontSubset, label: 'headFontSubset' } }
							fontSizeType = { { value: headFontSizeType, label: 'headFontSizeType' } }
							fontSize = { { value: headFontSize, label: 'headFontSize' } }
							fontSizeMobile = { { value: headFontSizeMobile, label: 'headFontSizeMobile' } }
							fontSizeTablet= { { value: headFontSizeTablet, label: 'headFontSizeTablet' } }
							lineHeightType = { { value: headLineHeightType, label: 'headLineHeightType' } }
							lineHeight = { { value: headLineHeight, label: 'headLineHeight' } }
							lineHeightMobile = { { value: headLineHeightMobile, label: 'headLineHeightMobile' } }
							lineHeightTablet= { { value: headLineHeightTablet, label: 'headLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( value ) => setAttributes( { headingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Description" ) }</h2>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: subHeadLoadGoogleFonts, label: 'subHeadLoadGoogleFonts' } }
							fontFamily = { { value: subHeadFontFamily, label: 'subHeadFontFamily' } }
							fontWeight = { { value: subHeadFontWeight, label: 'subHeadFontWeight' } }
							fontSubset = { { value: subHeadFontSubset, label: 'subHeadFontSubset' } }
							fontSizeType = { { value: subHeadFontSizeType, label: 'subHeadFontSizeType' } }
							fontSize = { { value: subHeadFontSize, label: 'subHeadFontSize' } }
							fontSizeMobile = { { value: subHeadFontSizeMobile, label: 'subHeadFontSizeMobile' } }
							fontSizeTablet= { { value: subHeadFontSizeTablet, label: 'subHeadFontSizeTablet' } }
							lineHeightType = { { value: subHeadLineHeightType, label: 'subHeadLineHeightType' } }
							lineHeight = { { value: subHeadLineHeight, label: 'subHeadLineHeight' } }
							lineHeightMobile = { { value: subHeadLineHeightMobile, label: 'subHeadLineHeightMobile' } }
							lineHeightTablet= { { value: subHeadLineHeightTablet, label: 'subHeadLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						<ColorPalette
							value={ subHeadingColor }
							onChange={ ( value ) => setAttributes( { subHeadingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
								<h2>{ __( "Image" ) }</h2>
								<SelectControl
									label={ __( "Size" ) }
									options={ imageSizeOptions }
									value={ imgSize }
									onChange={ ( value ) => setAttributes( { imgSize: value } ) }
								/>
								<RangeControl
									label={ __( "Width(%)" ) }
									value={ imgWidth }
									onChange={ ( value ) => setAttributes( { imgWidth: value } ) }
									min={ 0 }
									max={ 500 }
									allowReset
								/>
								<MediaUpload
									title={ __( "Select Image" ) }
									onSelect={ ( value ) => setAttributes( { mainimage: value } ) }
									allowedTypes={ [ "image" ] }
									value={ mainimage }
									render={ ( { open } ) => (
										<Button isDefault onClick={ open }>
											{ ! mainimage ? __( "Select Image" ) : __( "Replace image" ) }
										</Button>
									) }
								/>
								{ mainimage &&
									<Button
										className="uagb-rm-btn"
										onClick={ () => setAttributes( { mainimage: null } ) }
										isLink isDestructive>
										{ __( "Remove Image" ) }
									</Button>
								}
						</PanelBody>
						<PanelBody title={ __( "Time & Cost" ) }>
							<ToggleControl
								label={ __( "Show Total Time" ) }
								checked={ showTotaltime }
								onChange={ ( value ) => setAttributes( { showTotaltime: ! showTotaltime } ) }
							/>
							<RangeControl
								label={ __( "Time ( Minutes ) " ) }
								value={ time }
								onChange={ ( value ) => setAttributes( { time: value } ) }
								min={ 0 }
								max={ 500 }
								allowReset
							/>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: priceLoadGoogleFonts, label: 'priceLoadGoogleFonts' } }
								fontFamily = { { value: priceFontFamily, label: 'priceFontFamily' } }
								fontWeight = { { value: priceFontWeight, label: 'priceFontWeight' } }
								fontSubset = { { value: priceFontSubset, label: 'priceFontSubset' } }
								fontSizeType = { { value: priceFontSizeType, label: 'priceFontSizeType' } }
								fontSize = { { value: priceFontSize, label: 'priceFontSize' } }
								fontSizeMobile = { { value: priceFontSizeMobile, label: 'priceFontSizeMobile' } }
								fontSizeTablet= { { value: priceFontSizeTablet, label: 'priceFontSizeTablet' } }
								lineHeightType = { { value: priceLineHeightType, label: 'priceLineHeightType' } }
								lineHeight = { { value: priceLineHeight, label: 'priceLineHeight' } }
								lineHeightMobile = { { value: priceLineHeightMobile, label: 'priceLineHeightMobile' } }
								lineHeightTablet= { { value: priceLineHeightTablet, label: 'priceLineHeightTablet' } }
							/>
							<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: showTotaltimecolor }} ></span></span></p>
							<ColorPalette
								value={ showTotaltimecolor }
								onChange={ ( value ) => setAttributes( { showTotaltimecolor: value } ) }
								allowReset
							/>
							<ToggleControl
								label={ __( "Show Estimated Cost" ) }
								checked={ showEstcost }
								onChange={ ( value ) => setAttributes( { showEstcost: ! showEstcost } ) }
							/>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: estcostLoadGoogleFonts, label: 'estcostLoadGoogleFonts' } }
								fontFamily = { { value: estcostFontFamily, label: 'estcostFontFamily' } }
								fontWeight = { { value: estcostFontWeight, label: 'estcostFontWeight' } }
								fontSubset = { { value: estcostFontSubset, label: 'estcostFontSubset' } }
								fontSizeType = { { value: estcostFontSizeType, label: 'estcostFontSizeType' } }
								fontSize = { { value: estcostFontSize, label: 'estcostFontSize' } }
								fontSizeMobile = { { value: estcostFontSizeMobile, label: 'estcostFontSizeMobile' } }
								fontSizeTablet= { { value: estcostFontSizeTablet, label: 'estcostFontSizeTablet' } }
								lineHeightType = { { value: estcostLineHeightType, label: 'estcostLineHeightType' } }
								lineHeight = { { value: estcostLineHeight, label: 'estcostLineHeight' } }
								lineHeightMobile = { { value: estcostLineHeightMobile, label: 'estcostLineHeightMobile' } }
								lineHeightTablet= { { value: estcostLineHeightTablet, label: 'estcostLineHeightTablet' } }
							/>
							<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: showEstcostcolor }} ></span></span></p>
							<ColorPalette
								value={ showEstcostcolor }
								onChange={ ( value ) => setAttributes( { showEstcostcolor: value } ) }
								allowReset
							/>
						</PanelBody>
				</InspectorControls>
				<div
					className={ classnames(
						className,
						`uagb-block-${this.props.clientId}`,					
					) }
				>
					<RichText
						tagName={ headingTag }
						placeholder={ __( "How to configure HowTo Schema in UAG?" ) }
						value={ headingTitle }
						className='uagb-howto-heading-text'
						multiline={ false }
						onChange={ ( value ) => {
							setAttributes( { headingTitle: value } ) }
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
					<RichText
						tagName="p"
						placeholder={ __( "So to get started, you will just need to drag-n-drop the How-to Schema block in the Guternburg editor. The How-to Schema block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements." ) }
						value={ headingDesc }
						className='uagb-howto-desc-text'
						onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
					<span className="uagb-howto__source-wrap">{image_icon_html}</span>
					{ showTotaltime &&
						<RichText
							tagName="h3"
							placeholder={ __( "Total Time Needed:" ) }
							value={ timeNeeded }
							className='uagb-howto-timeNeeded-text'
							onChange={ ( value ) => setAttributes( { timeNeeded: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					{ showEstcost &&
						<RichText
							tagName="h3"
							placeholder={ __( "Total Cost:" ) }
							value={ estCost }
							className='uagb-howto-estcost-text'
							onChange={ ( value ) => setAttributes( { estCost: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					<RichText
						tagName="h3"
						placeholder={ __( "requirements tools:" ) }
						value={ toolsTitle }
						className='uagb-howto-req-tools-text'
						onChange={ ( value ) => setAttributes( { toolsTitle: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
					<div className="uagb-how-to-tools__wrap">
						<InnerBlocks
							template={ getHowToToolsTemplate( tools_count, tools ) }
							templateLock={ false }
							allowedBlocks={ ALLOWED_TOOLS_BLOCKS } 
						/>
					</div>
					<RichText
						tagName="h3"
						placeholder={ __( "requirements materials:" ) }
						value={ materialTitle }
						className='uagb-howto-req-materials-text'
						onChange={ ( value ) => setAttributes( { materialTitle: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
					<div className="uagb-how-to-materials__wrap">
						<InnerBlocks
							template={ getHowToMaterialsTemplate( material_count, materials ) }
							templateLock={ false }
							allowedBlocks={ ALLOWED_MATERIALS_BLOCKS } 
						/>
					</div>
					<RichText
						tagName="h3"
						placeholder={ __( "requirements Steps:" ) }
						value={ stepsTitle }
						className='uagb-howto-req-steps-text'
						onChange={ ( value ) => setAttributes( { stepsTitle: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>		
							<div className="uagb-how-to-steps__wrap">
						<InnerBlocks
							template={ getHowTostepsTemplate( steps_count, steps ) }
							templateLock={ false }
							allowedBlocks={ ALLOWED_STEPS_BLOCKS } 
						/>
					</div>
							
				</div>				
				{ loadHeadingGoogleFonts }
				{ loadSubHeadingGoogleFonts }

			</Fragment>
		)
	}
}

export default UAGBHowTo