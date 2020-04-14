/**
 * BLOCK: UAGB - Social Share Edit Class
 */

import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import memoize from "memize"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	MediaUpload,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon
} = wp.components

const ALLOWED_BLOCKS = [ "uagb/social-share-child" ]

let svg_icons = Object.keys( UAGBIcon )

class UAGBSocialShare extends Component {

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { classMigrate: true } )
		// this.props.setAttributes( { current_url: wp.data.select("core/editor").getPermalink() } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-social-share-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

		const {
			align,
			className,
			social_count,
			socials,
			gap,
			stack,
			// current_url,
			social_layout,
			borderRadius,
			size,
			sizeType,
			sizeMobile,
			sizeTablet,
			bgSize,
			bgSizeType,
			bgSizeMobile,
			bgSizeTablet,
		} = attributes

		

		var element = document.getElementById( "uagb-style-social-share-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const sizeTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ sizeType === key }
						aria-pressed={ sizeType === key }
						onClick={ () => setAttributes( { sizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const bgSizeTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ bgSizeType === key }
						aria-pressed={ bgSizeType === key }
						onClick={ () => setAttributes( { bgSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const getSocialShareTemplate = memoize( ( icon_block, socials ) => {
			return times( icon_block, n => [ "uagb/social-share-child", socials[n] ] )
		} )

		return (
			<Fragment>
				
				<InspectorControls>
					
					
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-social-share__outer-wrap",
					`uagb-social-share__layout-${social_layout}`,
					`uagb-block-${ this.props.clientId }`
				) }
				>
					<div className="uagb-social-share__wrap">
						<InnerBlocks
							template={ getSocialShareTemplate( social_count, socials ) }
							templateLock="all"
							allowedBlocks={ ALLOWED_BLOCKS } />
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBSocialShare
