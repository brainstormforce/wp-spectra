/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import Title from "./components/Title"
import Description from "./components/Description"
import CtaPositionClasses from "./classes"
import CallToAction from "./components/CallToAction"
import CtaStyle from "./inline-styles"
import edit from "./edit"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"
const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks

const {
	RichText
} = wp.editor

// Extend component
const { Fragment } = wp.element


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
registerBlockType( "uagb/call-to-action", {
	title: uagb_blocks_info.blocks["uagb/call-to-action"]["title"],
	description: uagb_blocks_info.blocks["uagb/call-to-action"]["description"],
	icon: UAGB_Block_Icons.info_box,
	keywords: [
		__( "cta" ),
		__( "call to action" ),
		__( "uagb" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {
		const {
			ctaPosition,
			block_id,
			source_type,
			backgroundType,
			ctaType,
			ctaLink,
			ctaTarget,
			className,
			prefixTitle,
			ctaTitle,
			headingDesc,
			showTitle,
			showDesc,
			icon
		} = props.attributes


		const my_block_id = "uagb-infobox-"+ block_id
		var ClassNamesId    =  ( typeof className != "undefined" ) ? className : ""

		ClassNamesId = ClassNamesId +" "+ my_block_id

		var back_style = CtaStyle( props )

		// Get icon/Image components.
		let is_image = ""

		if( source_type === "icon" && icon !=="" ) {
			is_image = <CallToAction attributes={ props.attributes }/>
		}

		// Get description and seperator components.
		const desc = (
			<Fragment>
				<div className = "uagb-ifb-text-wrap">
					{ showDesc && "" !== headingDesc && <Description attributes={props.attributes} setAttributes = "not_set"/> }
				</div>
			</Fragment>
		)

		// Get Title components.
		const title_text = (
			<Fragment>
				<div className = "uagb-ifb-title-wrap">
					{ showTitle && "" !== ctaTitle && <Title attributes={ props.attributes} setAttributes = "not_set"/> }
				</div>
			</Fragment>
		)

		const output = (
			<Fragment>
				<div className = { classnames(
					"uagb-infobox__content-wrap",
					...CtaPositionClasses(  props.attributes  ),
				) }>
					<div className = "uagb-ifb-left-right-wrap">

						{ ( ctaPosition == "left") &&
								is_image
						}
						<div className = "uagb-ifb-content">

							{  ctaPosition == "above-title" && is_image }

							{ ( ctaPosition == "above-title" || ctaPosition == "below-title") && title_text }

							{ ctaPosition == "below-title"  && is_image }

							{ ( ctaPosition == "above-title" || ctaPosition == "below-title") && desc }

							{ ( ctaPosition === "left-title") &&
									<Fragment>
										<div className = "uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( ctaPosition === "right-title") &&
									<Fragment>
										<div className = "uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( ctaPosition == "left" || ctaPosition == "right") &&
									<Fragment>
										{ title_text }
										{ desc }
									</Fragment>
							}

						</div>

						{ ( ctaPosition == "right") &&
								is_image
						}
					</div>
				</div>
			</Fragment>
		)

		let target =""
		if( ctaTarget ){
			target ="_blank"
		}

		return (
			<Fragment>
				<div className={ classnames(
					className,
					"uagb-infobox__outer-wrap"
				) }
				id = { my_block_id } >

					{ ( ctaType == "all") &&
						<Fragment>
							<a href= {ctaLink} className = "uagb-infobox-link-wrap" target={target} rel ="noopener noreferrer"> {output}</a>
						</Fragment>
					}
					{ ( ctaType !== "all") && output }

				</div>
			</Fragment>
		)
	},
} )
