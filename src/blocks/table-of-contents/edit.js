/**
 * BLOCK: Marketing Button
 */

import classnames from "classnames"
//import styling from "./styling"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import map from "lodash/map"

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
		let matches = []
		let m
		let headings = { 1 : "1", 2 : "2", 3 : "3", 4 : "4", 5 : "5", 6 : "6" }
		const regex = /(<h([1-6]{1})[^>]*>).*<\/h\2>/gm;

		while (( m = regex.exec( content ) ) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if ( m.index === regex.lastIndex ) {
				regex.lastIndex++;
			}

			matches.push( m )
		}

		console.log(matches)

		let current_depth      = 100
		let html               = ''
		let numbered_items     = []
		let numbered_items_min = null

		// reset the internal collision collection
		let collision_collector = []

		// find the minimum heading to establish our baseline
		for ( var j = 0; j < matches.length; j ++ ) {
			if ( current_depth > matches[ j ][2] ) {
				current_depth = parseInt(matches[ j ][2])
			}
		}

		numbered_items[ current_depth ] = 0;
		numbered_items_min = current_depth;

		for ( var i = 0; i < matches.length; i ++ ) {

			if ( current_depth == parseInt( matches[ i ][2] ) ) {

				html += '<li>';
			}

			// start lists
			if ( current_depth != parseInt( matches[ i ][2] ) ) {

				for ( current_depth; current_depth < parseInt( matches[ i ][2] ); current_depth++ ) {

					numbered_items[ current_depth + 1 ] = 0;
					html += '<ul><li>';
				}
			}

			//console.log(headings.includes( matches[ i ][2] ))
			// list item
			html += '<a href="#">' + matches[ i ][0] + '</a>';

			// end lists
			if ( i != matches.length - 1 ) {

				if ( current_depth > parseInt( matches[ i + 1 ][2] ) ) {

					for ( current_depth; current_depth > parseInt( matches[ i + 1 ][2] ); current_depth-- ) {

						html += '</li></ul>';
						numbered_items[ current_depth ] = 0;
					}
				}

				if ( current_depth == parseInt( matches[ i + 1 ][2] ) ) {

					html += '</li>';
				}

			} else {

				// this is the last item, make sure we close off all tags
				for ( current_depth; current_depth >= numbered_items_min; current_depth -- ) {

					html += '</li>';

					if ( current_depth != numbered_items_min ) {
						html += '</ul>';
					}
				}
			}

			console.log(html)
		}


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
						<h3>Table Of Content</h3>
						<div className="uagb-toc__list">
							<ul dangerouslySetInnerHTML={ { __html: html } }></ul>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBMarketingButtonEdit
