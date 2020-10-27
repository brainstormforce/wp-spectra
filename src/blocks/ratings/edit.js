/**
 * BLOCK: UAGB Rating Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
// import SchemaNotices from "./schema-notices"
import { ReviewBody } from "./components";
// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"
// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"


const { __ } = wp.i18n

const { withState, compose } = wp.compose;
const { withSelect } = wp.data;

const {
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
	TextControl,
	DatePicker,
	ExternalLink,
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

compose([
	withState({ editable: "", editedStar: 0 }),
	withSelect((select, ownProps) => {
		const { getBlock } =
			select("core/block-editor") || select("core/editor");

		return {
			block: getBlock(ownProps.clientId),
			getBlock,
		};
	}),
])

class UAGBRatingEdit extends Component {

	constructor() {

		super( ...arguments )

		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
		this.getImageSize  = this.getImageSize.bind( this )
		this.toggleTarget     = this.toggleTarget.bind( this )
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes({ schema: JSON.stringify(this.props.schemaJsonData) });

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-ratings-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {

		if (
				JSON.stringify( this.props.schemaJsonData ) !==
				JSON.stringify( prevProps.schemaJsonData )
			) {
				this.props.setAttributes({
				schema: JSON.stringify(this.props.schemaJsonData)
			});
		}

		var element = document.getElementById( "uagb-ratings-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
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
		if ( media["sizes"] ) {
			var new_img = this.getImageSize(media["sizes"])
			imageSizeOptions = new_img
		}
	}

	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { ctaTarget: ! ctaTarget } )
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
			attributes: {
				blockID,
				block_id,
				authorName,
				itemName,
				description,
				items,
				parts,
				starCount,
				summaryTitle,
				summaryDescription,
				inactiveStarColor,
				activeStarColor,
				sku,
				identifier,
				identifierType,
				offerType,
				offerCurrency,
				offerStatus,
				offerHighPrice,
				offerLowPrice,
				offerPrice,
				offerCount,
				offerExpiry,
				ctaLink,
				ctaTarget,
				brand,
				rTitle,
				rContent,
				rAuthor,
				headingTag,
				mainimage,
				imgSize,
				showFeature,
				showAuthor,
				starColor,
				descColor,
				titleColor,
				contentColor,
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
				contentLoadGoogleFonts,
				contentFontFamily,
				contentFontWeight,
				contentFontSubset,
				contentFontSizeType,
				contentLineHeightType,
				contentFontSize,
				contentFontSizeTablet,
				contentFontSizeMobile,
				contentLineHeight,
				contentLineHeightTablet,
				contentLineHeightMobile,
				contentVrPadding,
				contentHrPadding,
				authorColor,
				summaryColor,
				starActiveColor,
				starOutlineColor,
				editable,
				enableDescription,
				enableImage
			},
			setAttributes,
			isSelected,
			editedStar,
			getBlock,
			className,
		} = this.props;

		if (
			blockID === ""
		) {
			setAttributes({
				
				blockID: this.props.clientId.substr( 0, 8 ),
			});
		}

		if (
			items &&
			items !== JSON.stringify(parts) &&
			parts.length === 1 &&
			parts[0].label === "" &&
			parts[0].value === 0
		) {
			setAttributes({
				parts: JSON.parse(items),
				items: '[{"label":"","value":0}]',
			});
		}

		if( mainimage && mainimage["sizes"] ){
			imageSizeOptions = this.getImageSize(mainimage["sizes"])
		}

			let url_chk = ''
			let title = ''
			if( "undefined" !== typeof this.props.attributes.mainimage  && null !== this.props.attributes.mainimage && "" !== this.props.attributes.mainimage ){
				url_chk = this.props.attributes.mainimage.url
				title = this.props.attributes.mainimage.title
			}
			
			let url = ''
			if( '' !== url_chk ){
				let size = this.props.attributes.mainimage.sizes
				let imageSize = this.props.attributes.imgSize

				if ( "undefined" !== typeof size && "undefined" !== typeof size[imageSize] ) {
				  url = size[imageSize].url 
				}else{
				  url = url_chk 
				}
		}

		let image_icon_html = ''

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-review__source-image" src={url} title={title}/>

		}

		const ratingStyleSettings = () => {
			return (
				<PanelBody title={ __( "Style" ) } initialOpen={ true }>
					<h2>{ __( "Colors" ) }</h2>
					<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
					<ColorPalette
						value={ titleColor }
						onChange={ ( value ) => setAttributes( { titleColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
					<ColorPalette
						value={ descColor }
						onChange={ ( value ) => setAttributes( { descColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Author Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: authorColor }} ></span></span></p>
					<ColorPalette
						value={ authorColor }
						onChange={ ( value ) => setAttributes( { authorColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Content Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: contentColor }} ></span></span></p>
					<ColorPalette
						value={ contentColor }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Summary Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: summaryColor }} ></span></span></p>
					<ColorPalette
						value={ summaryColor }
						onChange={ ( value ) => setAttributes( { summaryColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Active Star Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: starColor }} ></span></span></p>
					<ColorPalette
						value={ starColor }
						onChange={ ( value ) => setAttributes( { starColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Inactive Star Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: starActiveColor }} ></span></span></p>
					<ColorPalette
						value={ starActiveColor }
						onChange={ ( value ) => setAttributes( { starActiveColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Star Outline Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: starOutlineColor }} ></span></span></p>
					<ColorPalette
						value={ starOutlineColor }
						onChange={ ( value ) => setAttributes( { starOutlineColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Typography" ) }</h2>
						<TypographyControl
							label={ __( "Title" ) }
							attributes = { this.props.attributes }
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
						<TypographyControl
							label={ __( "Description" ) }
							attributes = { this.props.attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: descLoadGoogleFonts, label: 'descLoadGoogleFonts' } }
							fontFamily = { { value: descFontFamily, label: 'descFontFamily' } }
							fontWeight = { { value: descFontWeight, label: 'descFontWeight' } }
							fontSubset = { { value: descFontSubset, label: 'descFontSubset' } }
							fontSizeType = { { value: descFontSizeType, label: 'descFontSizeType' } }
							fontSize = { { value: descFontSize, label: 'descFontSize' } }
							fontSizeMobile = { { value: descFontSizeMobile, label: 'descFontSizeMobile' } }
							fontSizeTablet= { { value: descFontSizeTablet, label: 'descFontSizeTablet' } }
							lineHeightType = { { value: descLineHeightType, label: 'descLineHeightType' } }
							lineHeight = { { value: descLineHeight, label: 'descLineHeight' } }
							lineHeightMobile = { { value: descLineHeightMobile, label: 'descLineHeightMobile' } }
							lineHeightTablet= { { value: descLineHeightTablet, label: 'descLineHeightTablet' } }
						/>
						<TypographyControl
							label={ __( "Content" ) }
							attributes = { this.props.attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: contentLoadGoogleFonts, label: 'contentLoadGoogleFonts' } }
							fontFamily = { { value: contentFontFamily, label: 'contentFontFamily' } }
							fontWeight = { { value: contentFontWeight, label: 'contentFontWeight' } }
							fontSubset = { { value: contentFontSubset, label: 'contentFontSubset' } }
							fontSizeType = { { value: contentFontSizeType, label: 'contentFontSizeType' } }
							fontSize = { { value: contentFontSize, label: 'contentFontSize' } }
							fontSizeMobile = { { value: contentFontSizeMobile, label: 'contentFontSizeMobile' } }
							fontSizeTablet= { { value: contentFontSizeTablet, label: 'contentFontSizeTablet' } }
							lineHeightType = { { value: contentLineHeightType, label: 'contentLineHeightType' } }
							lineHeight = { { value: contentLineHeight, label: 'contentLineHeight' } }
							lineHeightMobile = { { value: contentLineHeightMobile, label: 'contentLineHeightMobile' } }
							lineHeightTablet= { { value: contentLineHeightTablet, label: 'contentLineHeightTablet' } }
						/>
				</PanelBody>
			)
		}

		const ratingSchemaSettings = () => {
			return (
				<PanelBody title={ __( "Schema" ) } initialOpen={ true }>
					<h2>{ __( "Schema" ) }</h2>
					<TextControl
						label={__("Brand")}
						value={brand}
						onChange={(brand) => setAttributes({ brand })}
					/>
					<TextControl
						label={__("Author")}
						value={rAuthor}
						onChange={(rAuthor) => setAttributes({ rAuthor })}
					/>
					<TextControl
						label={__("SKU")}
						value={sku}
						onChange={(sku) => setAttributes({ sku })}
					/>
					<TextControl
						label={__("Identifier")}
						value={identifier}
						onChange={(identifier) => setAttributes({ identifier })}
					/>
					<SelectControl
						label={__("Identifier type")}
						value={identifierType}
						options={[
							"nsn",
							"mpn",
							"gtin8",
							"gtin12",
							"gtin13",
							"gtin14",
							"gtin",
						].map((a) => ({ label: __(a.toUpperCase()), value: a }))}
						onChange={(identifierType) =>
							setAttributes({ identifierType })
						}
					/>
					<SelectControl
						label={__("Offer Type")}
						value={offerType}
						options={["Offer", "Aggregate Offer"].map((a) => ({
							label: __(a),
							value: a.replace(" ", ""),
						}))}
						onChange={(offerType) => setAttributes({ offerType })}
					/>
					<TextControl
						label={__("Offer Currency")}
						value={offerCurrency}
						onChange={(offerCurrency) => setAttributes({ offerCurrency })}
					/>
					{offerType == "Offer" ? (
						<Fragment>
							<TextControl
								label={__("Offer Price")}
								value={offerPrice}
								onChange={(offerPrice) => setAttributes({ offerPrice })}
							/>
							<SelectControl
								label={__("Offer Status")}
								value={offerStatus}
								options={[
									"Discontinued",
									"In Stock",
									"In Store Only",
									"Limited Availability",
									"Online Only",
									"Out Of Stock",
									"Pre Order",
									"Pre Sale",
									"Sold Out",
								].map((a) => ({
									label: __(a),
									value: a.replace(" ", ""),
								}))}
								onChange={(offerStatus) => setAttributes({ offerStatus })}
							/>
							<TextControl
								label={__("Offer expiration")}
								value={offerExpiry}
								onChange={(offerExpiry) => setAttributes({ offerExpiry })}
							/>
						</Fragment>
					) : (
						<Fragment>
							<TextControl
								label={__("Offer Count")}
								value={offerCount}
								onChange={(offerCount) => setAttributes({ offerCount })}
							/>
							<TextControl
								label={__(`Lowest Available Price (${offerCurrency})`)}
								value={offerLowPrice}
								onChange={(offerLowPrice) =>
									setAttributes({ offerLowPrice })
								}
							/>
							<TextControl
								label={__(`Highest Available Price (${offerCurrency})`)}
								value={offerHighPrice}
								onChange={(offerHighPrice) =>
									setAttributes({ offerHighPrice })
								}
							/>
						</Fragment>
					)}
				</PanelBody>
			)
		}

		const ratingGeneralSettings = () => {
			return (
				<PanelBody title={ __( "General" ) } initialOpen={ true }>
				<h2>{ __( "Primary Heading" ) }</h2>
						<SelectControl
							label={ __( "Tag" ) }
							value={ headingTag }
							onChange={ ( value ) => setAttributes( { headingTag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
					/>
					<h2>{ __( "Link" ) }</h2>
					<TextControl
						value= { ctaLink }
						onChange={ value => setAttributes( { ctaLink: value } ) }
					/>
					<ToggleControl
						label={ __( "Open in new Window" ) }
						checked={ ctaTarget }
						onChange={ this.toggleTarget }
					/>
						<hr className="uagb-editor__separator" />
						<ToggleControl
					    	label={ __( "Show author" ) }
					    	checked={ showAuthor }
					    	onChange={ ( value ) => setAttributes( { showAuthor: ! showAuthor } ) }
					    	help={ __( "Note: This is recommended field for schema.It should be ON" ) }
					    />
					    <ToggleControl
					    	label={ __( "Show description" ) }
					    	checked={ enableDescription }
					    	onChange={ ( value ) => setAttributes( { enableDescription: ! enableDescription } ) }
					    	help={ __( "Note: This is recommended field for schema.It should be ON" ) }
					    />
						 <ToggleControl
					    	label={ __( "Show image" ) }
					    	checked={ enableImage }
					    	onChange={ ( value ) => setAttributes( { enableImage: ! enableImage } ) }
					    	help={ __( "Note: This is recommended field for schema.It should be ON" ) }
					    />
						{ enableImage === true && 
							<Fragment>
								<h2>{ __( "Image" ) }</h2>
								<MediaUpload
									title={ __( "Select Image" ) }
									onSelect={ ( value ) => setAttributes( { mainimage: value } ) }
									allowedTypes={ [ "image" ] }
									value={ mainimage }
									render={ ( { open } ) => (
										<Button isDefault onClick={ open }>
											{ ! mainimage.url ? __( "Select Image" ) : __( "Replace image" ) }
										</Button>
									)}
									/>
							
							{ mainimage.url &&
								<Button
									className="uagb-rm-btn"
									onClick={ () => setAttributes( { mainimage: '' } ) }
									isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button>
							}
							{ mainimage.url &&
								<SelectControl
									label={ __( "Size" ) }
									options={ imageSizeOptions }
									value={ imgSize }
									onChange={ ( value ) => setAttributes( { imgSize: value } ) }
								/>
							}
							</Fragment>
						} 
						<hr className="uagb-editor__separator" />
						 <ToggleControl
					    	label={ __( "Show features" ) }
					    	checked={ showFeature }
					    	onChange={ ( value ) => setAttributes( { showFeature: ! showFeature } ) }
					    	help={ __( "Note: This is recommended field for schema.It should be ON" ) }
					    />
						<h2>{ __( "Overall Padding (px)" ) }</h2>
						<RangeControl
							label={ UAGB_Block_Icons.vertical_spacing }
							className={ "uagb-margin-control" }
							value={ contentVrPadding }
							onChange={ ( value ) => setAttributes( { contentVrPadding: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						<RangeControl
							label={ UAGB_Block_Icons.horizontal_spacing }
							className={ "uagb-margin-control" }
							value={ contentHrPadding }
							onChange={ ( value ) => setAttributes( { contentHrPadding: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
				</PanelBody>
			)
		}

		let target ="_self"
		let rel ="noopener noreferrer"
		if( ctaTarget ){
			target ="_blank"
		}

		
		return [
			isSelected && (
				<InspectorControls>
					{ ratingGeneralSettings() }
					{ ratingSchemaSettings() }
					{ ratingStyleSettings() }
				</InspectorControls>
			),
			<div className={ classnames(
				className,
				"uagb-ratings__outer-wrap",
				`uagb-block-${ blockID.substr( 0, 8 ) }`
			) }>
				<a
				href = {ctaLink}
				className = {
					classnames(
						'uagb-cta__button-link-wrapper',
					)
				}
				target= {target}
				rel= {rel}
			>
			<ReviewBody
				rTitle={rTitle}
				setTitle={(newValue) =>
					setAttributes({ rTitle: newValue })
				}
				rContent={rContent}
				setDescription={(newValue) =>
					setAttributes({ rContent: newValue })
				}
				rAuthor={rAuthor}
				setAuthorName={(newValue) =>
					setAttributes({ rAuthor: newValue })
				}
				headingTag={headingTag}
				mainimage={mainimage}
				imgSize={imgSize}
				image_icon_html={image_icon_html}
				isSelected={isSelected}
				authorName={authorName}
				itemName={itemName}
				description={description}
				descriptionEnabled={enableDescription}
				ID={blockID}
				imageEnabled={enableImage}
				items={parts}
				starCount={starCount}
				summaryTitle={summaryTitle}
				summaryDescription={summaryDescription}
				inactiveStarColor={inactiveStarColor}
				activeStarColor={activeStarColor}
				selectedStarColor={activeStarColor}
				starOutlineColor={starOutlineColor}
				setItemName={(newValue) => setAttributes({ itemName: newValue })}
				setImage={(img) =>
					setAttributes({
						imgID: img.id,
						imgURL: img.url,
						imgAlt: img.alt,
					})
				}
				setItems={(newValue) => setAttributes({ parts: newValue })}
				setSummaryTitle={(newValue) =>
					setAttributes({ summaryTitle: newValue })
				}
				setSummaryDescription={(newValue) =>
					setAttributes({ summaryDescription: newValue })
				}
				hasFocus={isSelected}
				setEditable={(newValue) => setState({ editable: newValue })}
				setActiveStarIndex={(editedStar) => setState({ editedStar })}
				showfeature={showFeature}
				showauthor={showAuthor}
			/></a></div>,
		];
	}} 
	export default compose(
		withSelect( ( select, ownProps ) => {
			const newAverage = ownProps.attributes.parts.map((i) => i.value).reduce((total, v) => total + v) / ownProps.attributes.parts.length;
			console.log();
				var offers = {}
				var json_data = {
					"@context": "https://schema.org/",
					"@type": "Product",
					"name": ownProps.attributes.rTitle,
					"description": ownProps.attributes.rContent,
					"image": [],
					"sku": ownProps.attributes.sku,
					"brand": {
						  "@type": "Brand",
						  "name": ownProps.attributes.brand,
						},
					"review": {
					  "@type": "Review",
					  "reviewRating": {
						"@type": "Rating",
						"ratingValue": newAverage,
						"bestRating": ownProps.attributes.starCount,

					  },
					  "author": {
						"@type": "Person",
						"name": ownProps.attributes.rAuthor,
					  }
					},
				   "aggregateRating": {
					  "@type": "AggregateRating",
					  "ratingValue": newAverage,
					  "reviewCount": (newAverage/ownProps.attributes.starCount * 100 )
					},
					offers : []
				}
	
				if( 'Aggregate Offer' == ownProps.attributes.offerType ){
					json_data.offers = {
						"@type": ownProps.attributes.offerType,
						"offerCount": ownProps.attributes.offerCount,
						"lowPrice": ownProps.attributes.offerLowPrice,
						"highPrice": ownProps.attributes.offerHighPrice,
						"priceCurrency": ownProps.attributes.offerCurrency,
					}	
				} else {
					json_data.offers = {
						"@type": ownProps.attributes.offerType,
						"price": ownProps.attributes.offerPrice,
						"url": ownProps.attributes.ctaLink,
						"priceValidUntil": ownProps.attributes.offerExpiry,
						"priceCurrency": ownProps.attributes.offerCurrency,
						"availability": "https://schema.org/InStock"
					  }
				  }
	
				if ( ownProps.attributes.mainimage ) {
					json_data.image = ownProps.attributes.mainimage.url;
				}
	
				json_data[ownProps.attributes.identifierType] = ownProps.attributes.identifier
				
			return {
				schemaJsonData: json_data
			};
		} )
	) ( UAGBRatingEdit )
	