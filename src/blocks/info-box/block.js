/**
 * BLOCK: Info Box
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import Prefix from "./components/Prefix"
import Title from "./components/Title"
import InfoBoxDesc from "./components/InfoBoxDesc"
import InfoBoxIcon from "./components/InfoBoxIcon"
import Icon from "./components/Icon"
import InfoBoxPositionClasses from "./classes"
import InfoBoxSeparator from "./components/InfoBoxSeparator"
import InfoBoxCta from "./components/InfoBoxCta"
import CallToAction from "./components/CallToAction"
import InfoBoxStyle from "./inline-styles"
import InfoBoxIconImage from "./components/InfoBoxIconImage"
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
} = wp.editor

const { Fragment } = wp.element

registerBlockType( "uagb/info-box", {
	title: uagb_blocks_info.blocks["uagb/info-box"]["title"],
	description: uagb_blocks_info.blocks["uagb/info-box"]["description"],
	icon: UAGB_Block_Icons.info_box,
	keywords: [
		__( "info box" ),
		__( "uag" ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save: function( props ) {
		const {
			iconimgPosition,
			block_id,
			source_type,
			seperatorStyle,
			backgroundType,
			ctaType,
			ctaLink,
			ctaTarget,
			className,
			prefixTitle,
			infoBoxTitle,
			headingDesc,
			showPrefix,
			showTitle,
			showDesc,
			icon
		} = props.attributes

		// Get icon/Image components.
		let is_image = ""

		if( source_type === "icon" && icon !=="" ) {
			is_image = <Icon attributes={ props.attributes }/>
		}else{
			is_image = <InfoBoxIconImage attributes={ props.attributes } />
		}

		// Get description and seperator components.
		const desc = (
			<Fragment>
				{ "none" !== seperatorStyle && <InfoBoxSeparator attributes={props.attributes} /> }
				<div className = "uagb-ifb-text-wrap">
					{ showDesc && "" !== headingDesc && <InfoBoxDesc attributes={props.attributes} setAttributes = "not_set"/> }
					{ ctaType !== "none" && <CallToAction attributes={props.attributes} />}
				</div>
			</Fragment>
		)

		// Get Title and Prefix components.
		const title_text = (
			<Fragment>
				<div className = "uagb-ifb-title-wrap">
					{ showPrefix && "" !== prefixTitle && <Prefix attributes={ props.attributes } setAttributes = "not_set"/> }
					{ showTitle && "" !== infoBoxTitle && <Title attributes={ props.attributes} setAttributes = "not_set"/> }
				</div>
			</Fragment>
		)

		const output = (
			<Fragment>
				<div className = { classnames(
					"uagb-infobox__content-wrap",
					...InfoBoxPositionClasses(  props.attributes  ),
				) }>
					<div className = "uagb-ifb-left-right-wrap">

						{ ( iconimgPosition == "left") &&
								is_image
						}
						<div className = "uagb-ifb-content">

							{  iconimgPosition == "above-title" && is_image }

							{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && title_text }

							{ iconimgPosition == "below-title"  && is_image }

							{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && desc }

							{ ( iconimgPosition === "left-title") &&
									<Fragment>
										<div className = "uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( iconimgPosition === "right-title") &&
									<Fragment>
										<div className = "uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</Fragment>
							}

							{ ( iconimgPosition == "left" || iconimgPosition == "right") &&
									<Fragment>
										{ title_text }
										{ desc }
									</Fragment>
							}

						</div>

						{ ( iconimgPosition == "right") &&
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
				id = { `uagb-infobox-${block_id}` } >

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
	deprecated: [
		{
			attributes,
			save: function( props ) {
				const {
					iconimgPosition,
					block_id,
					source_type,
					seperatorStyle,
					backgroundType,
					ctaType,
					ctaLink,
					ctaTarget,
					className
				} = props.attributes

				// Get icon/Image components.
				let is_image = ""

				if( source_type === "icon" ) {
					is_image = <InfoBoxIcon attributes={ props.attributes }/>
				}else{
					is_image = <InfoBoxIconImage attributes={ props.attributes } />
				}

				// Get description and seperator components.
				const desc = (
					<Fragment>
						{ "none" !== seperatorStyle && <InfoBoxSeparator attributes={props.attributes} /> }
						<div className = "uagb-ifb-text-wrap">
							<InfoBoxDesc attributes={props.attributes} setAttributes = "not_set"/>
							<InfoBoxCta attributes={props.attributes} />
						</div>
					</Fragment>
				)

				// Get Title and Prefix components.
				const title_text = (
					<Fragment>
						<div className = "uagb-ifb-title-wrap">
							<Prefix attributes={ props.attributes } setAttributes = "not_set"/>
							<Title attributes={ props.attributes} setAttributes = "not_set"/>
						</div>
					</Fragment>
				)

				const output = (
					<Fragment>
						<div className = { classnames(
							"uagb-infobox__content-wrap",
							...InfoBoxPositionClasses(  props.attributes  ),
						) }>
							<div className = "uagb-ifb-left-right-wrap">

								{ ( iconimgPosition == "left") &&
									is_image
								}
								<div className = "uagb-ifb-content">

									{  iconimgPosition == "above-title" && is_image }

									{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && title_text }

									{ iconimgPosition == "below-title"  && is_image }

									{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && desc }

									{ ( iconimgPosition === "left-title") &&
										<Fragment>
											<div className = "uagb-ifb-left-title-image">
												{ is_image }
												{ title_text }
											</div>
											{ desc }
										</Fragment>
									}

									{ ( iconimgPosition === "right-title") &&
										<Fragment>
											<div className = "uagb-ifb-right-title-image">
												{ title_text }
												{ is_image }
											</div>
											{ desc }
										</Fragment>
									}

									{ ( iconimgPosition == "left" || iconimgPosition == "right") &&
										<Fragment>
											{ title_text }
											{ desc }
										</Fragment>
									}

								</div>

								{ ( iconimgPosition == "right") &&
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
						id = { `uagb-infobox-${block_id}` } >

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
		},
		{
			attributes,
			save: function( props ) {
				const {
					iconimgPosition,
					block_id,
					source_type,
					seperatorStyle,
					backgroundType,
					ctaType,
					ctaLink,
					ctaTarget,
					className,
					prefixTitle,
					infoBoxTitle,
					headingDesc,
					showPrefix,
					showTitle,
					showDesc,
					icon
				} = props.attributes

				// Get icon/Image components.
				let is_image = ""

				if( source_type === "icon" && icon !=="" ) {
					is_image = <InfoBoxIcon attributes={ props.attributes }/>
				}else{
					is_image = <InfoBoxIconImage attributes={ props.attributes } />
				}

				// Get description and seperator components.
				const desc = (
					<Fragment>
						{ "none" !== seperatorStyle && <InfoBoxSeparator attributes={props.attributes} /> }
						<div className = "uagb-ifb-text-wrap">
							{ showDesc && "" !== headingDesc && <InfoBoxDesc attributes={props.attributes} setAttributes = "not_set"/> }
							{ ctaType !== "none" && <InfoBoxCta attributes={props.attributes} />}
						</div>
					</Fragment>
				)

				// Get Title and Prefix components.
				const title_text = (
					<Fragment>
						<div className = "uagb-ifb-title-wrap">
							{ showPrefix && "" !== prefixTitle && <Prefix attributes={ props.attributes } setAttributes = "not_set"/> }
							{ showTitle && "" !== infoBoxTitle && <Title attributes={ props.attributes} setAttributes = "not_set"/> }
						</div>
					</Fragment>
				)

				const output = (
					<Fragment>
						<div className = { classnames(
							"uagb-infobox__content-wrap",
							...InfoBoxPositionClasses(  props.attributes  ),
						) }>
							<div className = "uagb-ifb-left-right-wrap">

								{ ( iconimgPosition == "left") &&
										is_image
								}
								<div className = "uagb-ifb-content">

									{  iconimgPosition == "above-title" && is_image }

									{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && title_text }

									{ iconimgPosition == "below-title"  && is_image }

									{ ( iconimgPosition == "above-title" || iconimgPosition == "below-title") && desc }

									{ ( iconimgPosition === "left-title") &&
											<Fragment>
												<div className = "uagb-ifb-left-title-image">
													{ is_image }
													{ title_text }
												</div>
												{ desc }
											</Fragment>
									}

									{ ( iconimgPosition === "right-title") &&
											<Fragment>
												<div className = "uagb-ifb-right-title-image">
													{ title_text }
													{ is_image }
												</div>
												{ desc }
											</Fragment>
									}

									{ ( iconimgPosition == "left" || iconimgPosition == "right") &&
											<Fragment>
												{ title_text }
												{ desc }
											</Fragment>
									}

								</div>

								{ ( iconimgPosition == "right") &&
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
						id = { `uagb-infobox-${block_id}` } >

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
		}
	]
} )
