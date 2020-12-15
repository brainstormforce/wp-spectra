/**
 * BLOCK: UAGB Review Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import SchemaNotices from "./schema-notices"
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
	ColorPalette,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Button,
	TextControl,
	DateTimePicker 
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

export const removeFromArray = (arr, removedElems) =>
	arr.filter((a) =>
		Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems
	);

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
		this.toggleTarget  = this.toggleTarget.bind( this )
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

		$(".uagb-rating-link-wrapper").click( function(event) {
			event.preventDefault()
		})
	}

	/**
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props
		setAttributes( { mainimage: null } )
	}

	/**
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
				block_id,
				enableSchema,
				itemType,
				itemSubtype,
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
				offerPrice,
				offerExpiry,
				datepublish,
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
				headLoadGoogleFonts,
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
				subHeadLoadGoogleFonts,
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
				enableDescription,
				enableImage,
				overallAlignment,
				isbn,
				bookAuthorName,
				reviewPublisher,
				provider,
				appCategory,
				operatingSystem,
				datecreated,
				directorname,
			},
			setAttributes,
			isSelected,
			className,
		} = this.props;

		if (
			block_id === ""
		) {
			setAttributes({
				
				block_id: this.props.clientId.substr( 0, 8 ),
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

		let loadContentGoogleFonts;
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
		
		if( contentLoadGoogleFonts == true ) {
			const cconfig = {
				google: {
					families: [ contentFontFamily + ( contentFontWeight ? ':' + contentFontWeight : '' ) ],
				},
			};
			
			loadContentGoogleFonts = (
				<WebfontLoader config={ cconfig }>
				</WebfontLoader>
			)
		}

		let itemTypeExtras;

		const subtypeCategories = {
			Book: [{ value: "Audiobook", label: __( "Audio book" ) }],
			Product: [
				{ value: "IndividualProduct", label: __( "Individual Product" ) },
				{ value: "ProductCollection", label: __( "Product Collection" ) },
				{ value: "ProductGroup", label: __( "Product Group" ) },
				{ value: "ProductModel", label: __( "Product Model" ) },
				{ value: "SomeProducts", label: __( "Some Products" ) },
				{ value: "Vehicle", label: __( "Vehicle" ) },
			],
			SoftwareApplication: [
				{ value: "MobileApplication", label: __( "Mobile Application" ) },
				{ value: "VideoGame" , label: __( "Video Game" ) },
				{ value: "WebApplication" , label: __( "Web Application" ) }
			],
		};

		let unusedDefaults = [
			"bookAuthorName",
			"isbn",
			"provider",
			"brand",
			"sku",
			"identifierType",
			"identifier",
			"appCategory",
			"operatingSystem",
			"directorname",
			"datecreated"
		];

		switch (itemType) {
			default:
				//empty
				break;
			case "Book":
				itemTypeExtras = (
					<Fragment>
						<TextControl
							label={__("ISBN")}
							value={isbn}
							onChange={(value) => setAttributes({ isbn:value})}
							help={ __( "Note: This is a mandatory field for the Review schema" ) }
						/>
						<TextControl
							label={__("Book author name")}
							value={bookAuthorName}
							onChange={(value) => setAttributes({ bookAuthorName:value })}
							help={ __( "Note: This is a mandatory field for the Review schema" ) }
						/>
					</Fragment>
				);
				unusedDefaults = removeFromArray(unusedDefaults, [
					"isbn",
					"bookAuthorName",
				]);
				break;

			case "Course":
				itemTypeExtras = (
					<Fragment>
						<TextControl
							label={__("Provider")}
							value={provider}
							onChange={(value) => setAttributes({ provider:value })}
						/>
					</Fragment>
				);
				unusedDefaults = removeFromArray(unusedDefaults, [
					"provider",
				]);
				break;

			case "SoftwareApplication":
				itemTypeExtras = (
					<Fragment>
						<TextControl
							label={__("Application Category")}
							value={appCategory}
							onChange={(value) => setAttributes({ appCategory:value })}
						/>
						<TextControl
							label={__("Operating System")}
							value={operatingSystem}
							onChange={( value ) => setAttributes({ operatingSystem:value })}
						/>
					</Fragment>
				);
				unusedDefaults = removeFromArray(unusedDefaults, [
					"appCategory",
					"operatingSystem",
				]);
				break;

			case "Movie":
				itemTypeExtras = (
					<Fragment>
						<TextControl
							label={__("Director Name")}
							value={directorname}
							onChange={(value) => setAttributes({ directorname:value })}
						/>
						<h2>{ __( "Date of create" ) }</h2>
						<DateTimePicker
							currentDate={ datecreated }
							onChange={ ( value ) => setAttributes( { datecreated: value } ) }
							is12Hour={ true }
						/>
					</Fragment>
				);
				unusedDefaults = removeFromArray(unusedDefaults, [
					"directorname",
					'datecreated'
				]);
				break;
			}

		const ratingStyleSettings = () => {
			return (
				<PanelBody title={ __( "Style" ) } initialOpen={ false }>
					<TypographyControl
							label={ __( "Title Typography" ) }
							attributes = { this.props.attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: headLoadGoogleFonts, label:'headLoadGoogleFonts'  } }
							fontFamily = { { value: headFontFamily, label:'headFontFamily'  } }
							fontWeight = { { value: headFontWeight, label:'headFontWeight'  } }
							fontSubset = { { value: headFontSubset, label:'headFontSubset'  } }
							fontSizeType = { { value: headFontSizeType, label: 'headFontSizeType' } }
							fontSize = { { value: headFontSize, label:'headFontSize'  } }
							fontSizeMobile = { { value: headFontSizeMobile, label:'headFontSizeMobile'  } }
							fontSizeTablet= { { value: headFontSizeTablet, label:'headFontSizeTablet'  } }
							lineHeightType = { { value: headLineHeightType, label: 'headLineHeightType' } }
							lineHeight = { { value: headLineHeight, label:'headLineHeight'  } }
							lineHeightMobile = { { value: headLineHeightMobile, label:'headLineHeightMobile'  } }
							lineHeightTablet= { { value: headLineHeightTablet, label:'headLineHeightTablet'  } }
						/>
					<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
					<ColorPalette
						value={ titleColor }
						onChange={ ( value ) => setAttributes( { titleColor: value } ) }
						allowReset
					/>
					{ enableDescription === true &&
					(<Fragment>
					<hr className="uagb-editor__separator" />
						<TypographyControl
						label={ __( "Description Typography" ) }
						attributes = { this.props.attributes }
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
					<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
					<ColorPalette
						value={ descColor }
						onChange={ ( value ) => setAttributes( { descColor: value } ) }
						allowReset
					/>
					</Fragment>)
					}
					{ showAuthor === true &&
					(<Fragment>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Author Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: authorColor }} ></span></span></p>
					<ColorPalette
						value={ authorColor }
						onChange={ ( value ) => setAttributes( { authorColor: value } ) }
						allowReset
					/>
					</Fragment>)
					}
					{ showFeature === true &&
					(<Fragment>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Content Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: contentColor }} ></span></span></p>
					<ColorPalette
						value={ contentColor }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
						allowReset
					/>
					</Fragment>)
					}
					<hr className="uagb-editor__separator" />
					<TypographyControl
						label={ __( "Summary Typography" ) }
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
	
		
			const ratingSchemaSettings = () => {
				if ( true === enableSchema ) {
				return (
					<PanelBody title={ __( "Schema" ) } initialOpen={ false }>
						<SelectControl
							label={__("Item type")}
							value={itemType}
							onChange={(value) => {
								setAttributes({ itemType:value });
								if (itemType === "Movie") {
									setAttributes({ enableImage: true });
								}
								if (itemType === "Course") {
									setAttributes({ enableDescription: true });
								}
								if (
									!subtypeCategories.hasOwnProperty(itemType) ||
									!subtypeCategories[itemType].includes(itemSubtype)
								) {
									setAttributes({ itemSubtype: "None" });
								}
							}}
							options={[
								{ value: 'Book', label: __( 'Book' ) },
								{ value: 'Course', label: __( 'Course' ) },
								{ value: 'Movie', label: __( 'Movie' ) },
								{ value: 'Product', label: __( 'Product' ) },
								{ value: 'SoftwareApplication', label: __( 'Software Application' ) },
							]}
						/>
						{ subtypeCategories.hasOwnProperty(itemType) && (
							<SelectControl
								label={__("Item subtype")}
								options={ [{ value: 'none', label: __( 'None' ) },...subtypeCategories[itemType]] }
								value={ itemSubtype }
								onChange={ ( value ) =>
									setAttributes( {
										itemSubtype: value,
									} )
								}
							/>
						)}
						<hr className="uagb-editor__separator" />
						{itemTypeExtras}
						<TextControl
							label={__("Review publisher")}
							value={reviewPublisher}
							onChange={(value) => setAttributes({ reviewPublisher:value })}
							help={ __( "Note: This is a mandatory field for the Review schema" ) }
						/>
						<h2>{ __( "Date of publish" ) }</h2>
								<DateTimePicker
								currentDate={ datepublish }
								onChange={ ( value ) => setAttributes( { datepublish: value } ) }
								is12Hour={ true }
								/>
						{["Product", "SoftwareApplication"].includes( itemType ) && (
						<Fragment>
							{["Product"].includes( itemType ) && (
								<Fragment>
									<TextControl
										label={__("Brand")}
										value={brand}
										onChange={(value) => setAttributes({ brand:value })}
									/>
									<TextControl
										label={__("SKU")}
										value={sku}
										onChange={(value) => setAttributes({ sku:value })}
									/>
									<TextControl
										label={__("Identifier")}
										value={identifier}
										onChange={(value) => setAttributes({ identifier:value })}
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
										onChange={(value) =>
											setAttributes({ identifierType:value })
										}
									/>
								</Fragment>
							)}
						{["Product", "SoftwareApplication"].includes( itemType ) && (
							<Fragment>
							<TextControl
								label={__("Offer Currency")}
								value={offerCurrency}
								onChange={(value) => setAttributes({ offerCurrency:value })}
							/>
							</Fragment>
						)}
						{offerType == "Offer" && (
							<Fragment>
								<TextControl
									label={__("Offer Price")}
									value={offerPrice}
									onChange={(value) => setAttributes({ offerPrice:value })}
									help={ __( "Note: This is a mandatory field for the Review schema" ) }
								/>
								<SelectControl
									label={__("Offer Status")}
									value={offerStatus}
									options={[
										{ value: 'https://schema.org/Discontinued', label: __( 'Discontinued' ) },
										{ value: 'https://schema.org/InStock', label: __( 'In Stock' ) },
										{ value: 'https://schema.org/InStoreOnly', label: __( 'In Store Only' ) },
										{ value: 'https://schema.org/LimitedAvailability', label: __( 'Limited Availability' ) },
										{ value: 'https://schema.org/OnlineOnly', label: __( 'Online Only' ) },
										{ value: 'https://schema.org/OutOfStock', label: __( 'Out Of Stock' ) },
										{ value: 'https://schema.org/PreOrder', label: __( 'Pre Order' ) },
										{ value: 'https://schema.org/PreSale', label: __( 'Pre Sale' ) },
										{ value: 'https://schema.org/SoldOut', label: __( 'Sold Out' ) },
									]}
									onChange={ ( value ) =>
										this.props.setAttributes( {
											offerStatus: value,
										} )
									}
								/>
								<h2>{ __( "Price Valid Until" ) }</h2>
								<DateTimePicker
								currentDate={ offerExpiry }
								onChange={ ( value ) => setAttributes( { offerExpiry: value } ) }
								is12Hour={ true }
								/>
							</Fragment>
						)}
						</Fragment>
					)}
					</PanelBody>
				)}
			}
	
		const ratingGeneralSettings = () => {
			return (
				<PanelBody title={ __( "General" ) } initialOpen={ true }>
				<h2>{ __( "Review Title" ) }</h2>
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
						label={ __( "Open in new window" ) }
						checked={ ctaTarget }
						onChange={ this.toggleTarget }
					/>
					<ToggleControl
						label={ __( "Show review description" ) }
						checked={ enableDescription }
						onChange={ ( value ) => setAttributes( { enableDescription: ! enableDescription } ) }
						help={ __( "Note: This is a mandatory field for the Review schema." ) }
					/>
					<ToggleControl
						label={ __( "Show review author" ) }
						checked={ showAuthor }
						onChange={ ( value ) => setAttributes( { showAuthor: ! showAuthor } ) }
						help={ __( "Note: This is a mandatory field for the Review schema." ) }
					/>
					<ToggleControl
						label={ __( "Show review image" ) }
						checked={ enableImage }
						onChange={ ( value ) => setAttributes( { enableImage: ! enableImage } ) }
						help={ __( "Note: This is a mandatory field for the Review schema." ) }
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
					<ToggleControl
						label={ __( "Show ratings" ) }
						checked={ showFeature }
						onChange={ ( value ) => setAttributes( { showFeature: ! showFeature } ) }
						help={ __( "Note: Add feature/section ratings separately." ) }
					/>
					<ToggleControl
						label={ __( "Enable schema support" ) }
						checked={ enableSchema }
						onChange={ ( value ) => setAttributes( { enableSchema: ! enableSchema } ) }
					/>
				</PanelBody>
			)
		}

		return [
			<SchemaNotices
			    enableSchema={enableSchema}
			    itemType={itemType}
				rTitle={rTitle}
				enableDescription={enableDescription}
				rContent={rContent}
				enableImage={enableImage}
				mainimage={mainimage}
				sku={sku}
				brand={brand}
				starCount={starCount}
				showAuthor={showAuthor}
				rAuthor={rAuthor}
				showfeature={showFeature}
				offerType={offerType}
				datepublish={datepublish}
				offerCurrency={offerCurrency}
				offerPrice={offerPrice}
				ctaLink={ctaLink}
				offerExpiry={offerExpiry}
				identifier={identifier}
				isbn={isbn}
				bookAuthorName={bookAuthorName}
				directorname={directorname}
				datecreated={datecreated}
				provider={provider}
				appCategory={appCategory}
				operatingSystem={operatingSystem}
				reviewPublisher={reviewPublisher}
				/>,
				<BlockControls key='index'>
				<AlignmentToolbar
					value={ overallAlignment }
					onChange={ ( value ) => setAttributes( { overallAlignment: value } ) }
				/>
				</BlockControls>,
				<InspectorControls>
					{ ratingGeneralSettings() }
					{ ratingSchemaSettings() }
					{ ratingStyleSettings() }
				</InspectorControls>
			,<div className={ classnames(
				className,
				"uagb-ratings__outer-wrap",
				`uagb-block-${ block_id.substr( 0, 8 ) }`
			) }>
			<ReviewBody
				rTitle={rTitle}
				setTitle={(newValue) =>
					setAttributes({ rTitle: newValue })
				}
				ctaLink={ctaLink}
				ctaTarget={ctaTarget}
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
				ID={block_id}
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
				setEditable={(newValue) => this.setState({ editable: newValue })}
				setActiveStarIndex={(editedStar) => this.setState({ editedStar })}
				showfeature={showFeature}
				showauthor={showAuthor}
			/>{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadContentGoogleFonts }</div>
		];
	}} 
	export default compose(
		withSelect( ( select,ownProps ) => {
			const newAverage = ownProps.attributes.parts.map((i) => i.value).reduce((total, v) => total + v) / ownProps.attributes.parts.length;
			var itemtype = '';
				
			if( ["Product", "SoftwareApplication", "Book"].includes( ownProps.attributes.itemType ) ){
				itemtype = ( ( ownProps.attributes.itemSubtype != "None" && ownProps.attributes.itemSubtype != "" ) ? ownProps.attributes.itemSubtype : ownProps.attributes.itemType)
			}else{
				itemtype = ownProps.attributes.itemType
			}

				var json_data = {
					"@context": "http://schema.org/",
					"@type": "Review",
					"reviewBody": ownProps.attributes.summaryDescription,
					"description": ownProps.attributes.rContent,
					itemReviewed: [],
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": newAverage,
						"bestRating": ownProps.attributes.starCount,
					},
					"author": {
						"@type": "Person",
						"name": ownProps.attributes.rAuthor,
					},
					"publisher": ownProps.attributes.reviewPublisher,
					"datePublished":ownProps.attributes.datepublish,
					"url": ownProps.attributes.ctaLink
				}
				  
				  switch ( ownProps.attributes.itemType ) {
					case "Book":
					json_data.itemReviewed = {
						"@type":itemtype,
						"name": ownProps.attributes.rTitle,
						"description": ownProps.attributes.rContent,
						"image": [],
						"author": ownProps.attributes.rAuthor,
						"isbn": ownProps.attributes.isbn,
					}
					break;

					case "Course":
					json_data.itemReviewed = {
						"@type":ownProps.attributes.itemType,
						"name": ownProps.attributes.rTitle,
						"description": ownProps.attributes.rContent,
						"image": [],
						"provider": ownProps.attributes.provider,
					}
					break;
					
					case "Product":
					json_data.itemReviewed = {
						"@type":itemtype,
						"name": ownProps.attributes.rTitle,
						"description": ownProps.attributes.rContent,
						"image": [],
						"sku": ownProps.attributes.sku,
						"brand": {
						  "@type": "Brand",
						  "name": ownProps.attributes.brand,
						},
						offers : []
					}
					break;

					case "Movie":
					json_data.itemReviewed = {
						"@type":ownProps.attributes.itemType,
						"name": ownProps.attributes.rTitle,
						"dateCreated": ownProps.attributes.datecreated,
						"director": {
							"@type": "Person",
							"name": ownProps.attributes.directorname,
						},
					}
					break;

					case "SoftwareApplication":
					json_data.itemReviewed = {
						"@type": itemtype,
						"name": ownProps.attributes.rTitle,
						"applicationCategory": ownProps.attributes.appCategory,
						"operatingSystem": ownProps.attributes.operatingSystem,
						offers : {
							"@type": ownProps.attributes.offerType,
							"price": ownProps.attributes.offerPrice,
							"url": ownProps.attributes.ctaLink,
							"priceCurrency": ownProps.attributes.offerCurrency,
						},
					}
					break;

					default:
					break;	
				  }

				  if ( ownProps.attributes.mainimage ) {
					json_data.itemReviewed.image = ownProps.attributes.mainimage.url;
				}
	
				if( ownProps.attributes.itemType == 'Product' ){
					json_data.itemReviewed[ownProps.attributes.identifierType] = ownProps.attributes.identifier
					json_data.itemReviewed.offers = {
						"@type": ownProps.attributes.offerType,
						"price": ownProps.attributes.offerPrice,
						"url": ownProps.attributes.ctaLink,
						"priceValidUntil": ownProps.attributes.offerExpiry,
						"priceCurrency": ownProps.attributes.offerCurrency,
						"availability": ownProps.attributes.offerStatus
					}
				}
				
			return {
				schemaJsonData: json_data
			};
		} )
	) ( UAGBRatingEdit )
	