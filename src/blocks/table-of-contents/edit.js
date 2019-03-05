/**
 * BLOCK: Marketing Button
 */

import classnames from "classnames"
//import styling from "./styling"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

let svg_icons = Object.keys( UAGBIcon )

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	ToggleControl,
	TextControl
} = wp.components


class UAGBMarketingButtonEdit extends Component {

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-marketing-btn-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			align,
		} = attributes

		// Push Styling to Head.
		var element = document.getElementById( "uagb-style-marketing-btn-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			//element.innerHTML = styling( this.props )
		}

		let this_post = wp.data.select("core/editor").getCurrentPost()
		let content = this_post.content

		let matches = content.match(/(<h([1-6]{1})[^>]*>).*<\/h\2>\/msuU/);

		console.log(matches)


		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } initialOpen={ true }>

					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className
				) }
				id={ `uagb-toc-${ this.props.clientId }` }>
					<div className="uagb-toc__wrap">
						Table Of Content
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBMarketingButtonEdit
