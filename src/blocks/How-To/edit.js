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
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
	TextControl
} = wp.components

const { withSelect } = wp.data

const { Component, Fragment } = wp.element

class UAGBAdvancedHeading extends Component {

	constructor() {
		super( ...arguments )

		this.splitBlock = this.splitBlock.bind( this )
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

		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { mainimage: null } )
			return
		}

		if ( ! media.type ) {
			return
		}

		setAttributes( { mainimage: media } )
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
				mainimage,
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
			},
		} = this.props

		// var element = document.getElementById( "uagb-how-to-schema-style-" + this.props.clientId )

		// if( null != element && "undefined" != typeof element ) {
		// 	element.innerHTML = styling( this.props )
		// }

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

		console.log(mainimage)

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-howto__source-image" src={mainimage.url} />

		}else{
			image_icon_html = <img className="uagb-howto__source-image" src="http://localhost/wordpress-uae/wp-includes/images/media/default.png" />
		}

		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
				<PanelBody title={ __( "Heading" ) }>
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
							loadGoogleFonts = { { value: headLoadGoogleFonts, label: __( "Font Family" ) } }
							fontFamily = { { value: headFontFamily, label: __( "Font Family" ) } }
							fontWeight = { { value: headFontWeight, label: __( "Font Weight" ) } }
							fontSubset = { { value: headFontSubset, label: __( "Font Subset" ) } }
							fontSizeType = { { value: headFontSizeType, label: __( "Line Height Type" ) } }
							fontSize = { { value: headFontSize, label: __( "Line Height" ) } }
							fontSizeMobile = { { value: headFontSizeMobile, label: __( "Font Size" ) } }
							fontSizeTablet= { { value: headFontSizeTablet, label: __( "Font Size" ) } }
							lineHeightType = { { value: headLineHeightType, label: __( "Line Height Type" ) } }
							lineHeight = { { value: headLineHeight, label: __( "Line Height" ) } }
							lineHeightMobile = { { value: headLineHeightMobile, label: __( "Line Height" ) } }
							lineHeightTablet= { { value: headLineHeightTablet, label: __( "Line Height" ) } }
						/>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( value ) => setAttributes( { headingColor: value } ) }
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
				</div>				
				{ loadHeadingGoogleFonts }
				{ loadSubHeadingGoogleFonts }

			</Fragment>
		)
	}
}

export default withSelect( ( select, props ) => {
	const { anchor, attributes } = props
	return {
		anchor: attributes.headingId
	}
} )( UAGBAdvancedHeading )
