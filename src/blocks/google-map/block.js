/**
 * BLOCK: Google Map
 */


import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	InspectorControls,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	TextControl,
	SelectControl
} = wp.components

const { Component, Fragment } = wp.element

const api_key = "AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4"

class UAGBGoogleMap extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
	}

	render() {

		// Setup the attributes
		const {
			className,
			setAttributes,
			attributes: {
				height,
				zoom,
				address,
				language,
			},
		} = this.props
		let encoded_address = encodeURI( address )

		var lang_par = (language) ? language : "en";

		let url = `https://www.google.com/maps/embed/v1/place?key=${api_key}&q=${encoded_address}&zoom=${zoom}&language=${lang_par}`


		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( "General" ) } >
						<p className="uagb-settings-notice">{ __( "This block uses Ultimate Addon for Gutenberg's API key to display the map. You don't need to create your own API key or worry about renewing it." ) }</p>
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
						<SelectControl
						label={ __( "Language" ) }
						value={ language }
						onChange={ ( value ) => setAttributes( { language: value } ) }
						options={ [
							{ value: "af",	label: __( "Afrikaans" ) },
							{ value: "sq",	label: __( "Albanian" ) },
							{ value: "am",	label: __( "Amharic" ) },
							{ value: "ar",	label: __( "Arabic" ) },
							{ value: "hy",	label: __( "Armenian" ) },
							{ value: "az",	label: __( "Azerbaijani" ) },
							{ value: "eu",	label: __( "Basque" ) },
							{ value: "be",	label: __( "Belarusian" ) },
							{ value: "bn",	label: __( "Bengali" ) },
							{ value: "bs",	label: __( "Bosnian" ) },
							{ value: "bg",	label: __( "Bulgarian" ) },
							{ value: "my",	label: __( "Burmese" ) },
							{ value: "ca",	label: __( "Catalan" ) },
							{ value: "zh",	label: __( "Chinese" ) },
							{ value: "hr",	label: __( "Croatian" ) },
							{ value: "cs",	label: __( "Czech" ) },
							{ value: "da",	label: __( "Danish" ) },
							{ value: "nl",	label: __( "Dutch" ) },
							{ value: "en",	label: __( "English" ) },
							{ value: "et",	label: __( "Estonian" ) },
							{ value: "fa",	label: __( "Farsi" ) },
							{ value: "fi",	label: __( "Finnish" ) },
							{ value: "fr",	label: __( "French" ) },
							{ value: "gl",	label: __( "Galician" ) },
							{ value: "ka",	label: __( "Georgian" ) },
							{ value: "de",	label: __( "German" ) },
							{ value: "el",	label: __( "Greek" ) },
							{ value: "gu",	label: __( "Gujarati" ) },
							{ value: "iw",	label: __( "Hebrew" ) },
							{ value: "hi",	label: __( "Hindi" ) },
							{ value: "hu",	label: __( "Hungarian" ) },
							{ value: "is",	label: __( "Icelandic" ) },
							{ value: "id",	label: __( "Indonesian" ) },
							{ value: "it",	label: __( "Italian" ) },
							{ value: "ja",	label: __( "Japanese" ) },
							{ value: "kn",	label: __( "Kannada" ) },
							{ value: "kk",	label: __( "Kazakh" ) },
							{ value: "km",	label: __( "Khmer" ) },
							{ value: "ko",	label: __( "Korean" ) },
							{ value: "ky",	label: __( "Kyrgyz" ) },
							{ value: "lo",	label: __( "Lao" ) },
							{ value: "lv",	label: __( "Latvian" ) },
							{ value: "lt",	label: __( "Lithuanian" ) },
							{ value: "mk",	label: __( "Macedonian" ) },
							{ value: "ms",	label: __( "Malay" ) },
							{ value: "ml",	label: __( "Malayalam" ) },
							{ value: "mr",	label: __( "Marathi" ) },
							{ value: "mn",	label: __( "Mongolian" ) },
							{ value: "ne",	label: __( "Nepali" ) },
							{ value: "no",	label: __( "Norwegian" ) },
							{ value: "pl",	label: __( "Polish" ) },
							{ value: "pt",	label: __( "Portuguese" ) },
							{ value: "pa",	label: __( "Punjabi" ) },
							{ value: "ro",	label: __( "Romanian" ) },
							{ value: "ru",	label: __( "Russian" ) },
							{ value: "sr",	label: __( "Serbian" ) },
							{ value: "si",	label: __( "Sinhalese" ) },
							{ value: "sk",	label: __( "Slovak" ) },
							{ value: "sl",	label: __( "Slovenian" ) },
							{ value: "es",	label: __( "Spanish" ) },
							{ value: "sw",	label: __( "Swahili" ) },
							{ value: "sv",	label: __( "Swedish" ) },
							{ value: "ta",	label: __( "Tamil" ) },
							{ value: "te",	label: __( "Telugu" ) },
							{ value: "th",	label: __( "Thai" ) },
							{ value: "tr",	label: __( "Turkish" ) },
							{ value: "uk",	label: __( "Ukrainian" ) },
							{ value: "ur",	label: __( "Urdu" ) },
							{ value: "uz",	label: __( "Uzbek" ) },
							{ value: "vi",	label: __( "Vietnamese" ) },
							{ value: "zu",	label: __( "Zulu" ) },							
						] }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames( className, "uagb-google-map__wrap", `uagb-block-${this.props.clientId.substr( 0, 8 )}` ) }>
					<iframe
						className="uagb-google-map__iframe"
						title = { __( "Google Map for " + address ) }
						src={url}
						style={{height: height}}></iframe>
				</div>
			</Fragment>
		)
	}
}

registerBlockType( "uagb/google-map", {
	title: uagb_blocks_info.blocks["uagb/google-map"]["title"],
	description: uagb_blocks_info.blocks["uagb/google-map"]["description"],
	icon: UAGB_Block_Icons.google_map,
	keywords: [
		__( "google map" ),
		__( "uag" ),
		__( "map" ),
	],
	supports: {
		anchor: true,
	},
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
		},
		language: {
			type: "string",
			default: "en",
		},
	},
	edit: UAGBGoogleMap,
	save: function( props ) {

		const {
			block_id,
			height,
			zoom,
			address,
			language
		} = props.attributes
		
		let encoded_address = encodeURI( address )

		var lang_par = (language) ? language : "en";

		let url = `https://www.google.com/maps/embed/v1/place?key=${api_key}&q=${encoded_address}&zoom=${zoom}&language=${lang_par}`

		return (
			<div className={ classnames( props.className, "uagb-google-map__wrap", `uagb-block-${block_id}` ) }>
				<iframe
					className="uagb-google-map__iframe"
					title = { __( "Google Map for " + address ) }
					src={url}
					style={{height: height}}></iframe>
			</div>
		)
	},
	deprecated: [
		{
			attributes : {
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
					<div className={ classnames( props.className, "uagb-google-map__wrap", `uagb-block-${block_id}` ) }>
						<iframe
							className="uagb-google-map__iframe"
							title = { __( "Google Map for " + address ) }
							src={url}
							style={{height: height}}></iframe>
					</div>
				)
			},
		},
		{
			attributes : {
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
			},
		},
		{
			attributes : {
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
					<div className={ classnames( props.className, "uagb-google-map__wrap", `uagb-block-${block_id}` ) }>
						<iframe
							className="uagb-google-map__iframe"
							src={url}
							style={{height: height}}></iframe>
					</div>
				)
			},
		},
	]
} )
