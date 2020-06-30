/**
 * BLOCK: Price List - Edit Class
 */
import classnames from "classnames"

import PositionClasses from "./classes"
import RestMenuStyle from "./inline-styles"
import RestMenuImage from "./components/RestMenuImage"
import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"



import times from "lodash/times"




// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	MediaUpload
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	Button,
	TabPanel,
	Dashicon
} = wp.components

const { Component, Fragment } = wp.element

class UAGBRestaurantMenuChild extends Component {

    constructor() {

		super( ...arguments )
		this.onSelectRestImage  = this.onSelectRestImage.bind( this )
		this.onRemoveRestImage  = this.onRemoveRestImage.bind(this)
		this.getImageName       = this.getImageName.bind(this)
		// this.onRemoveImage 		= this.onRemoveImage.bind( this )
		// this.onSelectImage 		= this.onSelectImage.bind( this )
    }
    
    onSelectRestImage( media ) {
		const { image } = this.props.attributes
		const { setAttributes } = this.props

		let image_url = null
		if ( ! media || ! media.url ) {
			image_url = null
		}else{
			image_url = media
		}

		if ( ! media.type || "image" !== media.type ) {
			image_url = null
		}
        
	
		setAttributes( {
			image: image_url,
		} )

    }

    /*
	 * Event to set Image selectot label.
	 */
	getImageName( image ){

		let image_title = __( "Select Image" )
		if(image){
			if(image.url == null || image.url == "" ){
				image_title = __( "Select Image" )
			}else{
				image_title = __( "Replace Image" )
			}
		}
		return image_title
    }
    /*
	 * Event to set Image as null while removing.
	 */
	onRemoveRestImage() {
		const { image } = this.props.attributes
		const { setAttributes } = this.props
		setAttributes( {
			image: null,
		} )
	}

	render() {

		const { className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			menu_item_count,
			rest_menu_item_arr,
			headingAlign,
			priceColor,
			descColor,
			titleColor,
			headingTag,

			titleFontSizeType,
			titleFontSize,
			titleFontSizeTablet,
			titleFontSizeMobile,
			titleFontFamily,
			titleFontWeight,
			titleFontSubset,
			titleLineHeightType,
			titleLineHeight,
			titleLineHeightTablet,
			titleLineHeightMobile,
			
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
			

			descFontSizeType,
			descFontSize,
			descFontSizeTablet,
			descFontSizeMobile,
			descFontFamily,
			descFontWeight,
			descFontSubset,
			descLineHeightType,
			descLineHeight,
			descLineHeightTablet,
			descLineHeightMobile,
			
			imagePosition,
			imageAlignment,
			imageSize,
			imageWidth,
			
            stack,
			image,
			title,
			description,
			price,
			priceLoadGoogleFonts,
			titleLoadGoogleFonts,
			descLoadGoogleFonts,


		} = attributes	
		
		

		let loadTitleGoogleFonts
		let loadDescGoogleFonts
		let loadPriceGoogleFonts

		if( titleLoadGoogleFonts == true ) {
			
			const titleconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ":" + titleFontWeight : "" ) ],
				},
			}

			loadTitleGoogleFonts = (
				<WebfontLoader config={ titleconfig }>
				</WebfontLoader>
			)
		}
		
		if( descLoadGoogleFonts == true ) {
					
			const descconfig = {
				google: {
					families: [ descFontFamily + ( descFontWeight ? ":" + descFontWeight : "" ) ],
				},
			}

			loadDescGoogleFonts = (
				<WebfontLoader config={ descconfig }>
				</WebfontLoader>
			)
		}
		
		if( priceLoadGoogleFonts == true ) {
					
			const priceconfig = {
				google: {
					families: [ priceFontFamily + ( priceFontWeight ? ":" + priceFontWeight : "" ) ],
				},
			}

			loadPriceGoogleFonts = (
				<WebfontLoader config={ priceconfig }>
				</WebfontLoader>
			)
		}
        
        // Image sizes.
		const imageSizeOptions = [
			{ value: "thumbnail", label: __( "Thumbnail" ) },
			{ value: "medium", label: __( "Medium" ) },
			{ value: "full", label: __( "Large" ) }
		]

		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody title={ __( "Typography" ) }  initialOpen={ false }>
					<h2>{ __( "Title" ) }</h2>
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
							{ value: "p", label: __( "P" ) },
							{ value: "span", label: __( "SPAN" ) },
						] }
					/>					
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: titleLoadGoogleFonts, label: "titleLoadGoogleFonts" } }
						fontFamily = { { value: titleFontFamily, label: "titleFontFamily" } }
						fontWeight = { { value: titleFontWeight, label: "titleFontWeight" } }
						fontSubset = { { value: titleFontSubset, label: "titleFontSubset" } }
						fontSizeType = { { value: titleFontSizeType, label: "titleFontSizeType" } }
						fontSize = { { value: titleFontSize, label: "titleFontSize" } }
						fontSizeMobile = { { value: titleFontSizeMobile, label: "titleFontSizeMobile" } }
						fontSizeTablet= { { value: titleFontSizeTablet, label: "titleFontSizeTablet" } }
						lineHeightType = { { value: titleLineHeightType, label: "titleLineHeightType" } }
						lineHeight = { { value: titleLineHeight, label: "titleLineHeight" } }
						lineHeightMobile = { { value: titleLineHeightMobile, label: "titleLineHeightMobile" } }
						lineHeightTablet= { { value: titleLineHeightTablet, label: "titleLineHeightTablet" } }
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Content" ) }</h2>
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: descLoadGoogleFonts, label: "descLoadGoogleFonts" } }
						fontFamily = { { value: descFontFamily, label: "descFontFamily" } }
						fontWeight = { { value: descFontWeight, label: "descFontWeight" } }
						fontSubset = { { value: descFontSubset, label: "descFontSubset" } }
						fontSizeType = { { value: descFontSizeType, label: "descFontSizeType" } }
						fontSize = { { value: descFontSize, label: "descFontSize" } }
						fontSizeMobile = { { value: descFontSizeMobile, label: "descFontSizeMobile" } }
						fontSizeTablet= { { value: descFontSizeTablet, label: "descFontSizeTablet" } }
						lineHeightType = { { value: descLineHeightType, label: "descLineHeightType" } }
						lineHeight = { { value: descLineHeight, label: "descLineHeight" } }
						lineHeightMobile = { { value: descLineHeightMobile, label: "descLineHeightMobile" } }
						lineHeightTablet= { { value: descLineHeightTablet, label: "descLineHeightTablet" } }
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Price" ) }</h2>
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: priceLoadGoogleFonts, label: "priceLoadGoogleFonts" } }
						fontFamily = { { value: priceFontFamily, label: "priceFontFamily" } }
						fontWeight = { { value: priceFontWeight, label: "priceFontWeight" } }
						fontSubset = { { value: priceFontSubset, label: "priceFontSubset" } }
						fontSizeType = { { value: priceFontSizeType, label: "priceFontSizeType" } }
						fontSize = { { value: priceFontSize, label: "priceFontSize" } }
						fontSizeMobile = { { value: priceFontSizeMobile, label: "priceFontSizeMobile" } }
						fontSizeTablet= { { value: priceFontSizeTablet, label: "priceFontSizeTablet" } }
						lineHeightType = { { value: priceLineHeightType, label: "priceLineHeightType" } }
						lineHeight = { { value: priceLineHeight, label: "priceLineHeight" } }
						lineHeightMobile = { { value: priceLineHeightMobile, label: "priceLineHeightMobile" } }
						lineHeightTablet= { { value: priceLineHeightTablet, label: "priceLineHeightTablet" } }
					/>
				</PanelBody>

				
			</Fragment>
		)

		

        const inspect_control = (
            <InspectorControls>
                <PanelBody title={ __( "Image" ) }initialOpen={ false } >
                <BaseControl
						className="editor-bg-image-control"
						label={ __( "" ) }
					>
                        
						<MediaUpload
							title={ __( "Select Image" ) }
							onSelect={ ( media ) => {
								this.onSelectRestImage( media )
							} }
							allowedTypes= { [ "image" ] }
							value={ image }
							render={ ( { open } ) => (
								<Button isDefault onClick={ open }>
									{  this.getImageName( image ) }
								</Button>
							) }
						/>
						{ ( image ) &&
							<Button className="uagb-rm-btn"  onClick={ 
								this.onRemoveRestImage
							 } isLink isDestructive>
								{ __( "Remove Image" ) }
							</Button>
						}
					</BaseControl>

					{   <Fragment>
						<hr className="uagb-editor__separator" />
						<SelectControl
							label={ __( "Image Position" ) }
							value={ imagePosition }
							onChange={ ( value ) => setAttributes( { imagePosition: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "left", label: __( "Left" ) },
								{ value: "right", label: __( "Right" ) },
							] }
						/>
						{ (imagePosition == "left" || imagePosition == "right") &&
						<Fragment>
							<SelectControl
								label={ __( "Vertical Alignment" ) }
								value={ imageAlignment }
								onChange={ ( value ) => setAttributes( { imageAlignment: value } ) }
								options={ [
									{ value: "top", label: __( "Top" ) },
									{ value: "middle", label: __( "Middle" ) },
								] }
							/>
							<SelectControl
								label={ __( "Stack on" ) }
								value={ stack }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "tablet", label: __( "Tablet" ) },
									{ value: "mobile", label: __( "Mobile" ) },
								] }
								help={ __( "Note: Choose on what breakpoint the Images will stack." ) }
								onChange={ ( value ) => setAttributes( { stack: value } ) }
							/>
						</Fragment>
						}
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
							allowReset
						/>
					</Fragment>
					}
				</PanelBody>

                

				{ TypographySettings }
				
            </InspectorControls>
        )
        
		return (
			<Fragment>
				{  ( ( imagePosition =="top" ) ) && <BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				}
                {inspect_control}
				<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`
				) }
				>

			<div className = { classnames(
							"uagb-rest_menu__wrap",
							...PositionClasses( attributes ),
						) } >
										<div className = "uagb-rm__content" >
											
											{ (imagePosition == "top" || imagePosition == "left" ) && <RestMenuImage  attributes={attributes}   /> }
											<div className ="uagb-rm__text-wrap">
												{
													<Fragment>
														<div className = "uagb-rm-details">
															<div className = "uagb-rm__title-wrap" >
																<Title attributes={attributes} setAttributes = { setAttributes } />
																<div className = "uagb-rest-menu-text-wrap">
																	<Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  />
																</div>
															</div>
															<div className = "uagb-rm__price-wrap" >
																<Price attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
															</div>
															
														</div>
													</Fragment>
												}
											</div>
											
											{ ( imagePosition == "right" ) && <RestMenuImage  attributes={attributes}  /> }
										</div>
										<div className="uagb-rm__separator-parent"><div className="uagb-rm__separator"></div></div>
									</div>
							

					</div>
					{ loadTitleGoogleFonts }
					{ loadDescGoogleFonts }
					{ loadPriceGoogleFonts }
			</Fragment>
		)
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-restaurant-menu-style-child-" + this.props.clientId.substr( 0, 8 ) )
		
		if( null !== element && undefined !== element ) {
			element.innerHTML = RestMenuStyle( this.props )
		}
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes( { classMigrate: true } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-restaurant-menu-style-child-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

		
	}
}

export default UAGBRestaurantMenuChild
