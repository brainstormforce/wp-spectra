/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import icon.
import Title from "./components/Title"
import Description from "./components/Description"
import CtaPositionClasses from "./classes"
import CallToAction from "./components/CallToAction"
import CTA from "./components/CTA"
import CtaStyle from "./inline-styles"
import edit from "./edit"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

const {
	RichText
} = wp.blockEditor

const { Fragment } = wp.element

registerBlockType( "uagb/call-to-action", {
	title: uagb_blocks_info.blocks["uagb/call-to-action"]["title"],
	description: uagb_blocks_info.blocks["uagb/call-to-action"]["description"],
	icon: UAGB_Block_Icons.call_to_action,
	keywords: [
		__( "cta" ),
		__( "call to action" ),
		__( "uag" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {
		const {
			ctaPosition,
			block_id,
			ctaType,
			ctaLink,
			ctaTarget,
			className,
			ctaTitle,
			description,
		} = props.attributes

		let is_cta =  <CTA attributes={props.attributes} setAttributes = "not_set" />

		// Get description and seperator components.
		const desc = (
			<Fragment>
				{ "" !== description && <div className = "uagb-cta-text-wrap">
					<Description attributes={props.attributes} setAttributes = "not_set"/>
				</div>
				}
			</Fragment>
		)

		// Get Title components.
		const title_text = (
			<Fragment>
				{ "" !== ctaTitle && <div className = "uagb-cta__title-wrap">
					<Title attributes={ props.attributes} setAttributes = "not_set"/>
				</div>
				}
			</Fragment>
		)

		const output = (
			<Fragment>
				<div className = { classnames(
					"uagb-cta__content-wrap",
					...CtaPositionClasses(  props.attributes  ),
				) }>
					<div className = "uagb-cta__left-right-wrap">

						{ ( ctaPosition == "left") &&
								is_cta
						}
						<div className = "uagb-cta__content">

							{  ctaPosition == "above-title" &&
								<Fragment>
							     { is_cta }
							     { title_text }
							     { desc }
							    </Fragment>
							}

							{ ctaPosition == "below-title"  &&
								<Fragment>
							     { title_text }
							     { desc }
							     { is_cta }
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
								is_cta
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
					"uagb-cta__outer-wrap"
				) }
				id = { `uagb-cta-block-${block_id}` } >

					{ ( ctaType == "all") &&
						<Fragment>
							<a href= {ctaLink} className = "uagb-cta__block-link-wrap uagb-cta__link-to-all" target={target} rel ="noopener noreferrer"></a>
							{output}
						</Fragment>
					}
					{ ( ctaType !== "all") && output }

				</div>
			</Fragment>
		)
	},
	deprecated: [
		{
			attributes,
			save: function( props ) {
				const {
					ctaPosition,
					block_id,
					ctaType,
					ctaLink,
					ctaTarget,
					className,
					ctaTitle,
					description,
				} = props.attributes

				let is_cta =  <CallToAction attributes={props.attributes} setAttributes = "not_set" />

				// Get description and seperator components.
				const desc = (
					<Fragment>
						{ "" !== description && <div className = "uagb-cta-text-wrap">
							<Description attributes={props.attributes} setAttributes = "not_set"/>
						</div>
						}
					</Fragment>
				)

				// Get Title components.
				const title_text = (
					<Fragment>
						{ "" !== ctaTitle && <div className = "uagb-cta__title-wrap">
							<Title attributes={ props.attributes} setAttributes = "not_set"/>
						</div>
						}
					</Fragment>
				)

				const output = (
					<Fragment>
						<div className = { classnames(
							"uagb-cta__content-wrap",
							...CtaPositionClasses(  props.attributes  ),
						) }>
							<div className = "uagb-cta__left-right-wrap">

								{ ( ctaPosition == "left") &&
										is_cta
								}
								<div className = "uagb-cta__content">

									{  ctaPosition == "above-title" &&
										<Fragment>
									     { is_cta }
									     { title_text }
									     { desc }
									    </Fragment>
									}

									{ ctaPosition == "below-title"  &&
										<Fragment>
									     { title_text }
									     { desc }
									     { is_cta }
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
										is_cta
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
							"uagb-cta__outer-wrap"
						) }
						id = { `uagb-cta-block-${block_id}` } >

							{ ( ctaType == "all") &&
								<Fragment>
									<a href= {ctaLink} className = "uagb-cta__block-link-wrap uagb-cta__link-to-all" target={target} rel ="noopener noreferrer"></a>
									{output}
								</Fragment>
							}
							{ ( ctaType !== "all") && output }

						</div>
					</Fragment>
				)
			},
		}
	]
} )
