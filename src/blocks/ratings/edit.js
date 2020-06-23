/**
 * Inline Notice Block.
 */

// Import block dependencies and components
import classnames from 'classnames';
import styling from "./styling"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

// Setup the block

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette,
} = wp.blockEditor

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

let svg_icons = Object.keys( UAGBIcon )

class UAGBInlineNoticeEdit extends Component {

	constructor() {

		super( ...arguments )
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-ratings-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-ratings-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}

	render() {

		// Setup the attributes
		const {
			attributes: {
				block_id,
				rTitel,
				rContent,
			},
			setAttributes,
			className,
			attributes,
		} = this.props;


		const ratingGeneralSettings = () => {
			return (
				<PanelBody title={ __( "General" ) } initialOpen={ true }>
					
				</PanelBody>
			)
		}
		
		return (
			<Fragment>
				<InspectorControls>
					{ ratingGeneralSettings() }
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-ratings__outer-wrap",
					`uagb-block-${ block_id }`
					) }
				>
				<RichText
					tagName="h4"
					placeholder={ __( 'Review Title', 'ultimate-addons-for-gutenberg' ) }
					keepPlaceholderOnFocus
					value={ rTitle }
					className='uagb-rating-title'
					onChange={ ( value ) =>
						setAttributes( { rTitle: value } )
					}
				/>
					
				</div>
			
			</Fragment>
		)
	}
}

export default UAGBInlineNoticeEdit