/**
 * BLOCK: Google Map
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import "./style.scss"

/* eslint-disable */
// Import __() from wp.i18n
const { __ } = wp.i18n
/* eslint-enable  */

const {
	registerBlockType
} = wp.blocks

const {
	InspectorControls,
} = wp.editor

const {
	PanelBody,
	RangeControl,
	TextControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

const api_key = "AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4"

class UAGBGoogleMap extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
	}

	render() {

		// Setup the attributes
		const {
			className,
			setAttributes,
			attributes: {
				block_id,
				height,
				zoom,
				address
			},
		} = this.props

		let encoded_address = encodeURI( address )

		let url = `https://www.google.com/maps/embed/v1/place?key=${api_key}&q=${encoded_address}&zoom=${zoom}`


		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } >
						<p className="uagb-google-map-notice">{ __( "This block uses UAGB's API key to display the map. You don't need to create your own API key or worry about renewing it." ) }</p>
						<p className="components-base-control__label">{__( "Address" )}</p>
						<TextControl
							value={ address }
							onChange={ ( value ) => setAttributes( { address: value } ) }
							placeholder={__( "Type the address" )}
						/>
						<RangeControl
							label={ __( "Zoom" ) }
							value={ zoom }
							onChange={ ( value ) => setAttributes( { zoom: value } ) }
							min={ 1 }
							max={ 22 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Height" ) }
							value={ height }
							onChange={ ( value ) => setAttributes( { height: value } ) }
							min={ 0 }
							max={ 1000 }
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames( className, "uagb-google-map__wrap" ) } id={ `uagb-google-map-${this.props.clientId}`}>
					<iframe
						className="uagb-google-map__iframe"
						src={url}
						style={{height: height}}></iframe>
				</div>
			</Fragment>
		)
	}
}

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/google-map", {
	title: uagb_blocks_info.blocks["uagb/google-map"]["title"],
	description: uagb_blocks_info.blocks["uagb/google-map"]["description"],
	icon: UAGB_Block_Icons.google_map,
	keywords: [
		__( "google map" ),
		__( "uagb" ),
	],
	category: uagb_blocks_info.category,
	attributes: {
		block_id: {
			type: "string"
		},
		address: {
			type: "string",
			default: "Brainstorm Force"
		},
		height: {
			type: "number",
			default: 300
		},
		zoom: {
			type: "number",
			default: 12
		}
	},
	edit: UAGBGoogleMap,
	save: function( props ) {

		const {
			block_id,
			height,
			zoom,
			address
		} = props.attributes

		let encoded_address = encodeURI( address )

		let url = `https://www.google.com/maps/embed/v1/place?key=${api_key}&q=${encoded_address}&zoom=${zoom}`

		return (
			<div className={ classnames( props.className, "uagb-google-map__wrap" ) } id={ `uagb-google-map-${block_id}`}>
				<iframe
					className="uagb-google-map__iframe"
					src={url}
					style={{height: height}}></iframe>
			</div>
		)
	}
} )
