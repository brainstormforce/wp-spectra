/**
 * BLOCK: How-To Child - Edit Class
 */

// Import classes
import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
// import links from "./links"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	MediaUpload,
	RichText,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	ToggleControl,
	TabPanel,
} = wp.components

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

let svg_icons = Object.keys( UAGBIcon )

class UAGBHowTostepsChild extends Component {

	constructor() {
		super( ...arguments )

		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { current_url: wp.data.select("core/editor").getPermalink() } )

		// et level_val = parseInt( this.props.attributes.align.replace( 'h' , '' ) )
		// this.props.setAttributes( { level: level_val } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-how-to-steps-child-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props
		setAttributes( { mainimage: null } )
	}

	// onTagChange( value ) {
	// 	const { setAttributes } = this.props

	// 	let level_val = parseInt( value.replace( 'h' , '' ) )

	// 	setAttributes( { level: level_val } )
	// 	setAttributes( { align: value } )
	// }

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

		const { attributes, setAttributes } = this.props
		const {
			current_url,
			align,
			// type,
			className,
			add_required_steps,
			description,
			link,
			mainimage,
			imgSize,
			imgWidth,
			steps_icon_color,
			steps_icon_hover_color,
			stepsLoadGoogleFonts,
			stepsFontFamily,
			stepsFontWeight,
			stepsFontSubset,
			stepsFontSize,
			stepsFontSizeType,
			stepsFontSizeTablet,
			stepsFontSizeMobile,
			stepsLineHeightType,
			stepsLineHeight,
			stepsLineHeightTablet,
			stepsLineHeightMobile,
			//description
			steps_desc_icon_color,
			steps_desc_icon_hover_color,
			stepsdescLoadGoogleFonts,
			stepsdescFontFamily,
			stepsdescFontWeight,
			stepsdescFontSubset,
			stepsdescFontSize,
			stepsdescFontSizeType,
			stepsdescFontSizeTablet,
			stepsdescFontSizeMobile,
			stepsdescLineHeightType,
			stepsdescLineHeight,
			stepsdescLineHeightTablet,
			stepsdescLineHeightMobile,
		} = attributes

		// Load Google fonts for tools.
		let loadstepsGoogleFonts
		if( loadstepsGoogleFonts == true ) {

			const stepsconfig = {
				google: {
					families: [ stepsFontFamily + ( stepsFontWeight ? ":" + stepsFontWeight : "" ) ],
				},
			}

			loadstepsGoogleFonts = (
				<WebfontLoader config={ stepsconfig }>
				</WebfontLoader>
			)
		}


		const iconColorControls = () => {

			let color_control = ""
			let color_control_hover = ""

			color_control = (
				<Fragment>
					<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: steps_icon_color }} ></span></span></p>
					<ColorPalette
						value={ steps_icon_color }
						onChange={ ( value ) => setAttributes( { steps_icon_color: value } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: steps_desc_icon_color }} ></span></span></p>
					<ColorPalette
						value={ steps_desc_icon_color }
						onChange={ ( value ) => setAttributes( { steps_desc_icon_color: value } ) }
						allowReset
					/>
				</Fragment>
			)
			color_control_hover = (
				<Fragment>
					<p className="uagb-setting-label">{ __( "Title Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: steps_icon_hover_color }} ></span></span></p>
					<ColorPalette
						value={ steps_icon_hover_color }
						onChange={ ( value ) => setAttributes( { steps_icon_hover_color: value } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Description Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: steps_desc_icon_hover_color }} ></span></span></p>
					<ColorPalette
						value={ steps_desc_icon_hover_color }
						onChange={ ( value ) => setAttributes( { steps_desc_icon_hover_color: value } ) }
						allowReset
					/>
				</Fragment>
			)

			return (
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
							let color_tab
							if( "normal" === tabName.name ) {
								color_tab = color_control
							}else {
								color_tab = color_control_hover
							}
							return <div>{ color_tab }</div>
						}
					}
				</TabPanel>
			)
		}

		var element = document.getElementById( "uagb-style-how-to-steps-child-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		if( mainimage && mainimage["sizes"] ){
			imageSizeOptions = this.getImageSize(mainimage["sizes"])
		}

		let image_icon_html = ""

		if ( mainimage && mainimage.url ) {

			image_icon_html = <img className="uagb-howto-steps__source-image" src={mainimage.url} />

		}
		// else{
		// 	image_icon_html = <img className="uagb-howto-steps__source-image" src="http://localhost/wordpress-uae/wp-content/plugins/elementor/assets/images/placeholder.png" />
		// }

		const renderHtml = () => {
								return (
									<div
										className={ classnames(
											`uagb-how-to-steps-child-repeater`,
											"uagb-how-to-steps-child__wrapper",
											className,
											`uagb-block-${ this.props.clientId }`
										) }
									>
										<div className="uagb-steps">
											<RichText
												tagName="div"
												placeholder={ __( "Requirements Steps:" ) }
												value={ add_required_steps }
												onChange={ ( value ) => setAttributes( { add_required_steps: value } ) }
												className='uagb-steps__label'
												placeholder={ __( "Description" ) }
												multiline={false}
												allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
											/>
										</div>
										<div className="uagb-steps-description">
											<RichText
												tagName="div"
												placeholder={ __( "Description" ) }
												value={ description }
												onChange={ ( value ) => setAttributes( { description: value } ) }
												className='uagb-steps__description'
												multiline={false}
												allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
											/>
										</div>
										<span className="uagb-howto-steps__image-wrap">{image_icon_html}</span>
									</div>
								)
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( "Steps" ) } initialOpen={ true } >
					<TypographyControl
						label={ __( "Title Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						// loadGoogleFonts = { { value: loadstepsGoogleFonts, label: 'loadstepsGoogleFonts' } }
						fontFamily = { { value: stepsFontFamily, label: 'stepsFontFamily' } }
						fontWeight = { { value: stepsFontWeight, label: 'stepsFontWeight' } }
						fontSubset = { { value: stepsFontSubset, label: 'stepsFontSubset' } }
						fontSizeType = { { value: stepsFontSizeType, label: 'stepsFontSizeType' } }
						fontSize = { { value: stepsFontSize, label: 'stepsFontSize' } }
						fontSizeMobile = { { value: stepsFontSizeMobile, label: 'stepsFontSizeMobile' } }
						fontSizeTablet= { { value: stepsFontSizeTablet, label: 'stepsFontSizeTablet' } }
						lineHeightType = { { value: stepsLineHeightType, label: 'stepsLineHeightType' } }
						lineHeight = { { value: stepsLineHeight, label: 'stepsLineHeight' } }
						lineHeightMobile = { { value: stepsLineHeightMobile, label: 'stepsLineHeightMobile' } }
						lineHeightTablet= { { value: stepsLineHeightTablet, label: 'stepsLineHeightTablet' } }
					/>
					<TypographyControl
						label={ __( "Description Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						// loadGoogleFonts = { { value: loadstepsdescGoogleFonts, label: 'loadstepsdescGoogleFonts' } }
						fontFamily = { { value: stepsdescFontFamily, label: 'stepsdescFontFamily' } }
						fontWeight = { { value: stepsdescFontWeight, label: 'stepsdescFontWeight' } }
						fontSubset = { { value: stepsdescFontSubset, label: 'stepsdescFontSubset' } }
						fontSizeType = { { value: stepsdescFontSizeType, label: 'stepsdescFontSizeType' } }
						fontSize = { { value: stepsdescFontSize, label: 'stepsdescFontSize' } }
						fontSizeMobile = { { value: stepsdescFontSizeMobile, label: 'stepsdescFontSizeMobile' } }
						fontSizeTablet= { { value: stepsdescFontSizeTablet, label: 'stepsdescFontSizeTablet' } }
						lineHeightType = { { value: stepsdescLineHeightType, label: 'stepsdescLineHeightType' } }
						lineHeight = { { value: stepsdescLineHeight, label: 'stepsdescLineHeight' } }
						lineHeightMobile = { { value: stepsdescLineHeightMobile, label: 'stepsdescLineHeightMobile' } }
						lineHeightTablet= { { value: stepsdescLineHeightTablet, label: 'stepsdescLineHeightTablet' } }
					/>
					 { iconColorControls() }
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
				</InspectorControls>
				{renderHtml()}
				{ loadstepsGoogleFonts }
			</Fragment>
		)
	}
}

export default UAGBHowTostepsChild
