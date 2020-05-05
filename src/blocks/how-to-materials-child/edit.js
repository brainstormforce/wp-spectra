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
	InspectorControls,
	MediaUpload,
	RichText,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	Button,
	TextControl,
	ToggleControl,
	TabPanel,
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

class UAGBHowToMaterialsChild extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { current_url: wp.data.select("core/editor").getPermalink() } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-how-to-materials-child-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes } = this.props
		const {
			current_url,
			// type,
			className,
			add_required_materials,
			icon_color,
			icon_hover_color,
			toolsLoadGoogleFonts,
			toolsFontFamily,
			toolsFontWeight,
			toolsFontSubset,
			toolsFontSize,
			toolsFontSizeType,
			toolsFontSizeTablet,
			toolsFontSizeMobile,
			toolsLineHeightType,
			toolsLineHeight,
			toolsLineHeightTablet,
			toolsLineHeightMobile,
		} = attributes

		// Load Google fonts for tools.
		let loadtoolsGoogleFonts
		if( loadtoolsGoogleFonts == true ) {

			const toolsconfig = {
				google: {
					families: [ toolsFontFamily + ( toolsFontWeight ? ":" + toolsFontWeight : "" ) ],
				},
			}

			loadtoolsGoogleFonts = (
				<WebfontLoader config={ toolsconfig }>
				</WebfontLoader>
			)
		}


		const iconColorControls = () => {

			let color_control = ""
			let color_control_hover = ""

			color_control = (
				<Fragment>
					<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icon_color }} ></span></span></p>
					<ColorPalette
						value={ icon_color }
						onChange={ ( value ) => setAttributes( { icon_color: value } ) }
						allowReset
					/>
				</Fragment>
			)
			color_control_hover = (
				<Fragment>
					<p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icon_hover_color }} ></span></span></p>
					<ColorPalette
						value={ icon_hover_color }
						onChange={ ( value ) => setAttributes( { icon_hover_color: value } ) }
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

		var element = document.getElementById( "uagb-style-how-to-materials-child-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const renderHtml = () => {

								return (
									<div
										className={ classnames(
											`uagb-how-to-materials-child-repeater`,
											"uagb-how-to-materials-child__wrapper",
											className,
											`uagb-block-${ this.props.clientId }`
										) }
									>
										<div className="uagb-materials">
											<RichText
												tagName="div"
												placeholder={ __( "Requirements Materials:" ) }
												value={ add_required_materials }
												onChange={ ( value ) => setAttributes( { add_required_materials: value } ) }
												className='uagb-materials__label'
												placeholder={ __( "Description" ) }
												multiline={false}
												allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
											/>
										</div>
									</div>
								)
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( "Tools" ) } initialOpen={ true } >
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						// loadGoogleFonts = { { value: loadtoolsGoogleFonts, label: 'loadtoolsGoogleFonts' } }
						fontFamily = { { value: toolsFontFamily, label: 'toolsFontFamily' } }
						fontWeight = { { value: toolsFontWeight, label: 'toolsFontWeight' } }
						fontSubset = { { value: toolsFontSubset, label: 'toolsFontSubset' } }
						fontSizeType = { { value: toolsFontSizeType, label: 'toolsFontSizeType' } }
						fontSize = { { value: toolsFontSize, label: 'toolsFontSize' } }
						fontSizeMobile = { { value: toolsFontSizeMobile, label: 'toolsFontSizeMobile' } }
						fontSizeTablet= { { value: toolsFontSizeTablet, label: 'toolsFontSizeTablet' } }
						lineHeightType = { { value: toolsLineHeightType, label: 'toolsLineHeightType' } }
						lineHeight = { { value: toolsLineHeight, label: 'toolsLineHeight' } }
						lineHeightMobile = { { value: toolsLineHeightMobile, label: 'toolsLineHeightMobile' } }
						lineHeightTablet= { { value: toolsLineHeightTablet, label: 'toolsLineHeightTablet' } }
					/>
					 { iconColorControls() }
					</PanelBody>
				</InspectorControls>
				{renderHtml()}
				{ loadtoolsGoogleFonts }
			</Fragment>
		)
	}
}

export default UAGBHowToMaterialsChild
