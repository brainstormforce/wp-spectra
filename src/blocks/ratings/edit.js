/**
 * BLOCK: UAGB Rating Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import SchemaNotices from "./schema-notices"
import times from "lodash/times"
import { EmptyStar, FullStar, HalfStar } from "./icons";

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

// Setup the block

const { __ } = wp.i18n

const { compose } = wp.compose

const { select, withSelect } = wp.data

const {
	AlignmentToolbar,
	BlockControls,
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

let svg_icons = Object.keys( UAGBIcon )

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

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

	savefeatures( value, index ) {
			const { attributes, setAttributes } = this.props
			const { features } = attributes

		const newItems = features.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )

			setAttributes( {
				features: newItems,
			} )
		}

		removefeatures( value, index ) {
			const { attributes, setAttributes } = this.props
			const { features } = attributes

			let newItemsList = []
			
			newItemsList = features.splice(index, 1)

			const newItems = features.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )

			setAttributes( {
				features: newItems,
			} )
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
				block_id,
				rTitle,
				rContent,
				mainimage,
				imgSize,
				showFeature,
				feature_count,
				featuresTitle,
				featuresAvgText,
				features,
				headingTag,
				starCount,
				starSize,
				starColor,
				pricevalue,
				pricetext,
				selectedStars,
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
				availabilitytext,
				availabilityvalue,
				contentVrPadding,
				contentHrPadding,
				star_gap,
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
				author,
				brand,
			},
			setAttributes,
			className,
			attributes,
			mergeBlocks,
			highlightedStars
		} = this.props;

		let loadTitleGoogleFonts;
		let loadDescriptionGoogleFonts;
		let loadContentGoogleFonts;


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

		if( true === contentLoadGoogleFonts ) {

			const sconfig = {
				google: {
					families: [ contentFontFamily + ( contentFontWeight ? ':' + contentFontWeight : '' ) ],
				},
			};

			loadContentGoogleFonts = (
				<WebfontLoader config={ sconfig }>
				</WebfontLoader>
			)
		}

		
		if( mainimage && mainimage["sizes"] ){
			imageSizeOptions = this.getImageSize(mainimage["sizes"])
		}

			let url_chk = ''
			let title = ''
			if( "undefined" !== typeof attributes.mainimage  && null !== attributes.mainimage && "" !== attributes.mainimage ){
				url_chk = attributes.mainimage.url
				title = attributes.mainimage.title
			}
			
			let url = ''
			if( '' !== url_chk ){
				let size = attributes.mainimage.sizes
				let imageSize = attributes.imgSize

				if ( "undefined" !== typeof size && "undefined" !== typeof size[imageSize] ) {
				  url = size[imageSize].url 
				}else{
				  url = url_chk 
				}
		}

		let image_icon_html = ''

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-howto__source-image" src={url} title={title}/>

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
					<p className="uagb-setting-label">{ __( "Content Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: contentColor }} ></span></span></p>
					<ColorPalette
						value={ contentColor }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Star Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: starColor }} ></span></span></p>
					<ColorPalette
						value={ starColor }
						onChange={ ( value ) => setAttributes( { starColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Typography" ) }</h2>
						<TypographyControl
							label={ __( "Title" ) }
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
						<TypographyControl
							label={ __( "Description" ) }
							attributes = { attributes }
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
							attributes = { attributes }
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
						value={author}
						onChange={(author) => setAttributes({ author })}
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
							<ToggleControl
								label={__("Offer expiration")}
								checked={offerExpiry > 0}
								onChange={(_) =>
									setAttributes({
										offerExpiry: offerExpiry
											? 0
											: 60 * (10080 + Math.ceil(Date.now() / 60000)), //default to one week from Date.now() when enabled
									})
								}
							/>
							<ExternalLink href={ 'https://en.wikipedia.org/wiki/ISO_8601' }>
								{ __( 'Learn more about date/time formats.' ) }
							</ExternalLink>
							{offerExpiry > 0 && (
								<DatePicker
									currentDate={offerExpiry * 1000}
									onChange={(newDate) =>
										setAttributes({
											offerExpiry: Math.floor(Date.parse(newDate) / 1000),
										})
									}
								/>
							)}
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
						) }
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
					    	label={ __( "Show features" ) }
					    	checked={ showFeature }
					    	onChange={ ( value ) => setAttributes( { showFeature: ! showFeature } ) }
					    	help={ __( "Note: This is recommended field for schema.It should be ON" ) }
					    />
						<hr className="uagb-editor__separator" />
						<RangeControl
							label={ __( "Gap Between Star" ) }
							value={ star_gap }
							onChange={ ( value ) => setAttributes( { star_gap: value } ) }
							min={ 0 }
							max={ 500 }
							allowReset
						/>
						<h2>{ __( "Content Padding (px)" ) }</h2>
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
		
		return (
			<Fragment>
				<SchemaNotices
					rTitle = { rTitle }
					rContent = { rContent }
					mainimage = { mainimage }
					sku = { sku }
					brand = { brand }
					author = { author }
					offerCount = { offerCount }
					offerLowPrice = { offerLowPrice }
					offerHighPrice = { offerHighPrice }
					offerCurrency = { offerCurrency }
					offerPrice = { offerPrice }
					ctaLink = { ctaLink }
					offerExpiry = { offerExpiry }
					identifier = { identifier }
					showFeature = { showFeature }
					features = { features }
					clientId = { this.props.clientId }
				/>
				<InspectorControls>
					{ ratingGeneralSettings() }
					{ ratingSchemaSettings() }
					{ ratingStyleSettings() }
				</InspectorControls>
			<div className={ classnames(
				className,
				"uagb-ratings__outer-wrap",
				`uagb-block-${ block_id }`
				) }
				>
				<RichText
					tagName={ headingTag }
					placeholder={ __( 'Review Title', 'ultimate-addons-for-gutenberg' ) }
					keepPlaceholderOnFocus
					value={ rTitle }
					className='uagb-rating-title'
					onChange={ ( value ) =>
						setAttributes( { rTitle: value } )
					}
				/>
				<RichText
					tagName="p"
					placeholder={ __( 'Review Description', 'ultimate-addons-for-gutenberg' ) }
					keepPlaceholderOnFocus
					value={ rContent }
					className='uagb-rating-desc'
					onChange={ ( value ) =>
						setAttributes( { rContent: value } )
					}
				/>
				<div className="uagb-rating__source-wrap">{image_icon_html}</div>
				<div className="uagb-rating__wrap">
					{ showFeature &&
					<RichText
						tagName="h4"
						placeholder={ __( "List Of Features:" ) }
						value={ featuresTitle }
						className='uagb-rating-feature-text'
						onChange={ ( value ) => setAttributes( { featuresTitle: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onnRemove={ () => onReplace( [] ) }
					/>
					}
					{ showFeature &&
					<div className="uagb-ratings-feature">
								{
								features.map( ( features, index ) => {

										return (
											<div
												className={ classnames(
													`uagb-rating-feature-${index}`,
													"uagb-rating-feature-child__wrapper",
												) }
												key={ index }
											>
												<div className="uagb-features">
													<RichText
														tagName="div"
														placeholder={ __( "Requirements Features:" ) }
														value={ features.features_name }
														onChange={ value => {
																	this.savefeatures( { features_name: value }, index )
																} }
														className='uagb-rating-feature__label'
														placeholder={ __( "- Feature" ) }
														multiline={false}
														allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
													/>
													<div
														className="dashicons dashicons-trash"
														value={ feature_count }
														onClick={ value => {
																	this.removefeatures( { features_name: value }, index )
																} }
													/>
													<div className="uagb-features-star">
													<div
														className="uagb-star-inner-container"
														onMouseLeave={() => setAttributes({ highlightedStars: 0 })}
													>
														{[...Array(starCount)].map((e, i) => (
															<div
																key={i}
																onMouseEnter={() => {
																	setAttributes({ highlightedStars: i + 1 });
																}}
																onClick={() => {
																	if (selectedStars % 1 === 0) {
																		setAttributes({
																			selectedStars: i + (selectedStars - 1 === i ? 0.5 : 1)
																		});
																	} else {
																		setAttributes({
																			selectedStars: i + (selectedStars - 0.5 === i ? 1 : 0.5)
																		});
																	}
																}}
															>
																{i < (highlightedStars ? highlightedStars : selectedStars) ? (
																	highlightedStars ? (
																		highlightedStars - 1 === i ? (
																			selectedStars % 1 > 0 ? (
																				highlightedStars - selectedStars - 0.5 !== 0 ? (
																					<HalfStar size={starSize} fillColor={starColor} />
																				) : (
																					<FullStar size={starSize} fillColor={starColor} />
																				)
																			) : highlightedStars - selectedStars !== 0 ? (
																				<FullStar size={starSize} fillColor={starColor} />
																			) : (
																				<HalfStar size={starSize} fillColor={starColor} />
																			)
																		) : (
																			<FullStar size={starSize} fillColor={starColor} />
																		)
																	) : selectedStars - i >= 1 ? (
																		<FullStar size={starSize} fillColor={starColor} />
																	) : (
																		<HalfStar size={starSize} fillColor={starColor} />
																	)
																) : (
																	<EmptyStar size={starSize} />
																)}
															</div>
														))}
														</div>
													</div>
											</div>
											</div>
										)
									})
								}
								{ showFeature &&
						<div
						className="dashicons dashicons-plus-alt"
						value={ feature_count }
						onClick={ newCount => {
							let cloneIcons = [ ...features ]
	
								const incAmount = isNaN( Math.abs( newCount - cloneIcons.length ) )

								{ times( incAmount, n => {

									cloneIcons.push( {
										"feature_name": "- Feature Name." + ( cloneIcons.length + 1 ),
									} )

								} ) }

								setAttributes( { features: cloneIcons } )
							
							setAttributes( { feature_count: newCount } )
							} }
						/>
					}						
					</div>
					}
				</div>
				<div class="uagb-ratings-wrap">
				<div className="uagb-avg-review-star">
				<RichText
					tagName="h4"
					placeholder={ __( "List Of Features:" ) }
					value={ featuresAvgText }
					className='uagb-avg-rating-text'
					onChange={ ( value ) => setAttributes( { featuresAvgText: value } ) }
					onMerge={ mergeBlocks }
					unstableOnSplit={ this.splitBlock }
					onnRemove={ () => onReplace( [] ) }
				/>
				<div
					className="uagb-avg-review-star-inner-container"
					onMouseLeave={() => setAttributes({ highlightedStars: 0 })}
				>
					{[...Array(starCount)].map((e, i) => (
						<div
							key={i}
							onMouseEnter={() => {
								setAttributes({ highlightedStars: i + 1 });
							}}
							onClick={() => {
								if (selectedStars % 1 === 0) {
									setAttributes({
										selectedStars: i + (selectedStars - 1 === i ? 0.5 : 1)
									});
								} else {
									setAttributes({
										selectedStars: i + (selectedStars - 0.5 === i ? 1 : 0.5)
									});
								}
							}}
						>
							{i < (highlightedStars ? highlightedStars : selectedStars) ? (
								highlightedStars ? (
									highlightedStars - 1 === i ? (
										selectedStars % 1 > 0 ? (
											highlightedStars - selectedStars - 0.5 !== 0 ? (
												<HalfStar size={starSize} fillColor={starColor} />
											) : (
												<FullStar size={starSize} fillColor={starColor} />
											)
										) : highlightedStars - selectedStars !== 0 ? (
											<FullStar size={starSize} fillColor={starColor} />
										) : (
											<HalfStar size={starSize} fillColor={starColor} />
										)
									) : (
										<FullStar size={starSize} fillColor={starColor} />
									)
								) : selectedStars - i >= 1 ? (
									<FullStar size={starSize} fillColor={starColor} />
								) : (
									<HalfStar size={starSize} fillColor={starColor} />
								)
							) : (
								<EmptyStar size={starSize} />
							)}
						</div>
					))}
					</div>
				</div>
				
				<div className="uagb-product-price">
					<RichText
						tagName="h4"
						placeholder={ __( "Price" ) }
						value={ pricetext }
						className='uagb-price-text'
						onChange={ ( value ) => setAttributes( { pricetext: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onnRemove={ () => onReplace( [] ) }
					/>
					{offerType === "Offer" ? (
						
						<div className="uagb-product-price-value">
							<RichText
								tagName="h4"
								placeholder={ __( "$65" ) }
								value={ offerPrice }
								className='uagb-price-value-text'
								onChange={ ( value ) => setAttributes( { offerPrice: value } ) }
								onMerge={ mergeBlocks }
								unstableOnSplit={ this.splitBlock }
								onnRemove={ () => onReplace( [] ) }
							/>
						</div>

						) : (

						<div className="uagb-product-price-value">
							<RichText
								tagName="h4"
								placeholder={ __( "$69" ) }
								value={ offerLowPrice }
								className='uagb-price-value-text'
								onChange={ ( value ) => setAttributes( { offerLowPrice: value } ) }
								onMerge={ mergeBlocks }
								unstableOnSplit={ this.splitBlock }
								onnRemove={ () => onReplace( [] ) }
							/>
						</div>	

						)
					}
					<div className="uagb-product-price-currency">
					<RichText
						tagName="h4"
						placeholder={ __( "US" ) }
						value={ offerCurrency }
						className='uagb-price-currency-text'
						onChange={ ( value ) => setAttributes( { offerCurrency: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onnRemove={ () => onReplace( [] ) }
					/>
				</div>
				</div>
				<div className="uagb-stock-availability">
					<RichText
						tagName="h4"
						placeholder={ __( "Availability" ) }
						value={ availabilitytext }
						className='uagb-availability-text'
						onChange={ ( value ) => setAttributes( { availabilitytext: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onnRemove={ () => onReplace( [] ) }
					/>
					<div className="uagb-stock-availability-value">
					<RichText
						tagName="h4"
						placeholder={ __( "Instock" ) }
						value={ offerStatus }
						className='uagb-availability-value-text'
						//onChange={ ( value ) => setAttributes( { offerStatus: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onnRemove={ () => onReplace( [] ) }
					/>
					</div>
				</div>
				</div>
			</div>
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
			{ loadContentGoogleFonts }
			</Fragment>
		)
	}
}

export default compose(
	withSelect( ( select, ownProps ) => {
			
			var offers = {}
			var data = {}
			var simple_offers_data = {}
			var json_data = {
				"@context": "https://schema.org/",
				"@type": "Product",
				"name": ownProps.attributes.rTitle,
				"description": ownProps.attributes.rContent,
				"image": [],
				"sku": ownProps.attributes.sku,
				"brand": {
				      "@type": "Thing",
				      "name": ownProps.attributes.brand,
				    },
			    "review": {
		          "@type": "Review",
		          "reviewRating": {
		            "@type": "Rating",
		            "ratingValue": "4",
		            "bestRating": "5"
		          },
		          "author": {
		            "@type": "Person",
		            "name": ownProps.attributes.author,
		          }
		        },
		       "aggregateRating": {
		          "@type": "AggregateRating",
		          "ratingValue": "4.4",
		          "reviewCount": "89"
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