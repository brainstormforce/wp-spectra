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

	constructor() {
		super( ...arguments )

		this.getTableContents    = this.getTableContents.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-marketing-btn-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	getTableContents() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			considerH1,
			considerH2,
			considerH3,
			considerH4,
			considerH5,
			considerH6,
		} = attributes

		let this_post = wp.data.select("core/editor").getCurrentPost()
		let content = this_post.content
		let matches = []
		let m
		let headings = {
			1 : ( considerH1 ) ? "1" : false,
			2 : ( considerH2 ) ? "2" : false,
			3 : ( considerH3 ) ? "3" : false,
			4 : ( considerH4 ) ? "4" : false,
			5 : ( considerH5 ) ? "5" : false,
			6 : ( considerH6 ) ? "6" : false
		}
		let current_depth      = 100
		let html               = ""
		let numbered_items     = []
		let numbered_items_min = null
		let collision_collector = []

		const regex = /(<h([1-6]{1})[^>]*>).*<\/h\2>/gm

		while (( m = regex.exec( content ) ) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if ( m.index === regex.lastIndex ) {
				regex.lastIndex++
			}

			matches.push( m )
		}

		// find the minimum heading to establish our baseline
		for ( var j = 0; j < matches.length; j ++ ) {
			if ( current_depth > matches[ j ][2] ) {
				current_depth = parseInt(matches[ j ][2])
			}
		}

		numbered_items[ current_depth ] = 0
		numbered_items_min = current_depth

		for ( var i = 0; i < matches.length; i ++ ) {

			if ( current_depth == parseInt( matches[ i ][2] ) ) {

				html += "<li>"
			}

			// start lists
			if ( current_depth != parseInt( matches[ i ][2] ) ) {

				for ( current_depth; current_depth < parseInt( matches[ i ][2] ); current_depth++ ) {

					numbered_items[ current_depth + 1 ] = 0
					html += "<ul><li>"
				}
			}

			if ( headings[ parseInt( matches[ i ][2] ) ] != false ) {

				// list item
				html += "<a href=\"#\">" + matches[ i ][0] + "</a>"
			}

			// end lists
			if ( i != matches.length - 1 ) {

				if ( current_depth > parseInt( matches[ i + 1 ][2] ) ) {

					for ( current_depth; current_depth > parseInt( matches[ i + 1 ][2] ); current_depth-- ) {

						html += "</li></ul>"
						numbered_items[ current_depth ] = 0
					}
				}

				if ( current_depth == parseInt( matches[ i + 1 ][2] ) ) {

					html += "</li>"
				}

			} else {

				// this is the last item, make sure we close off all tags
				for ( current_depth; current_depth >= numbered_items_min; current_depth -- ) {

					html += "</li>"

					if ( current_depth != numbered_items_min ) {
						html += "</ul>"
					}
				}
			}
		}

		return html
	}

	render() {

		const { attributes, setAttributes, isSelected, className } = this.props

		const {
			align,
			smoothScroll,
			smoothScrollOffset,
			considerH1,
			considerH2,
			considerH3,
			considerH4,
			considerH5,
			considerH6,
			counter
		} = attributes

		// Push Styling to Head.
		var element = document.getElementById( "uagb-style-marketing-btn-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			//element.innerHTML = styling( this.props )
		}

		let html = this.getTableContents()

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } initialOpen={ true }>
						<ToggleControl
							label={ __( "Smooth Scroll" ) }
							checked={ smoothScroll }
							onChange={ ( value ) => setAttributes( { smoothScroll: ! smoothScroll } ) }
						/>
						<RangeControl
							label={ __( "Smooth Scroll Offset (px)" ) }
							value={ smoothScrollOffset }
							onChange={ ( value ) => setAttributes( { smoothScrollOffset: value } ) }
							min={ 0 }
							max={ 100 }
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Select the heading to consider when generating the table" ) }</h2>
						<ToggleControl
							label={ __( "H1" ) }
							checked={ considerH1 }
							onChange={ ( value ) => setAttributes( { considerH1: ! considerH1 } ) }
						/>
						<ToggleControl
							label={ __( "H2" ) }
							checked={ considerH2 }
							onChange={ ( value ) => setAttributes( { considerH2: ! considerH2 } ) }
						/>
						<ToggleControl
							label={ __( "H3" ) }
							checked={ considerH3 }
							onChange={ ( value ) => setAttributes( { considerH3: ! considerH3 } ) }
						/>
						<ToggleControl
							label={ __( "H4" ) }
							checked={ considerH4 }
							onChange={ ( value ) => setAttributes( { considerH4: ! considerH4 } ) }
						/>
						<ToggleControl
							label={ __( "H5" ) }
							checked={ considerH5 }
							onChange={ ( value ) => setAttributes( { considerH5: ! considerH5 } ) }
						/>
						<ToggleControl
							label={ __( "H6" ) }
							checked={ considerH6 }
							onChange={ ( value ) => setAttributes( { considerH6: ! considerH6 } ) }
						/>
						<hr className="uagb-editor__separator"/>
						<SelectControl
							label={ __( "Counter" ) }
							value={ counter }
							onChange={ ( value ) => setAttributes( { counter: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "numeric", label: __( "Numeric" ) },
								{ value: "roman", label: __( "Roman" ) },
							] }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className
				) }
				id={ `uagb-toc-${ this.props.clientId }` }>
					<div className="uagb-toc__wrap">
						<h3>Table Of Content</h3>
						<div className="uagb-toc__list-wrap">
							<ul className="uagb-toc__list" dangerouslySetInnerHTML={ { __html: html } }></ul>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBMarketingButtonEdit
