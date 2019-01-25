/**
 * BLOCK: Icon List
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.editor


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
registerBlockType( "uagb/icon-list", {
	title: uagb_blocks_info.blocks["uagb/icon-list"]["title"],
	description: uagb_blocks_info.blocks["uagb/icon-list"]["description"],
	icon: UAGB_Block_Icons.icon_list,
	category: uagb_blocks_info.category,
	keywords: [
		__( "icon list" ),
		__( "image list" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		const { attributes, className } = props

		const {
			block_id,
			icons,
			icon_count,
			icon_layout,
			hideLabel,
			disableLink
		} = props.attributes

		const labelClass = ( hideLabel ) ? "uagb-icon-list__no-label" : ""

		return (
			<div className={ classnames(
				className,
				"uagb-icon-list__outer-wrap",
				`uagb-icon-list__layout-${icon_layout}`,
				labelClass
			) }
			id={ `uagb-icon-list-${ block_id}` }>
				<div className="uagb-icon-list__wrap">
					{
						icons.map( ( icon, index ) => {

							if ( icon_count <= index ) {
								return
							}

							let url = ""
							let image_icon_html = ""

							if ( icon.image_icon == "icon" ) {
								if ( icon.icon ) {
									image_icon_html = <span className="uagb-icon-list__source-icon">{ renderSVG(icon.icon) }</span>
								}
							} else {
								if ( icon.image ) {
									image_icon_html = <img className="uagb-icon-list__source-image" src={icon.image.url} />
								}
							}

							let target = ( icon.target ) ? "_blank" : "_self"
							let link_url = ( !disableLink ) ? icon.link : "javascript:void(0);"

							return (
								<a
									className={ classnames(
										`uagb-icon-list-repeater-${index}`,
										"uagb-icon-list__wrapper"
									) }
									key={ index }
									target={ target }
									rel="noopener noreferrer"
									href={ link_url }
								>
									<div className="uagb-icon-list__content-wrap">
										<span className="uagb-icon-list__source-wrap">{image_icon_html}</span>
										{ ! hideLabel && "" != icons[ index ].label &&
											<div className="uagb-icon-list__label-wrap">
												<RichText.Content
													tagName="span"
													value={ icons[ index ].label }
													className='uagb-icon-list__label' />
											</div>
										}
									</div>
								</a>
							)
						})
					}
				</div>
			</div>
		)
	},
	deprecated: [		
		{	
			attributes,
			save: props => {

				const { attributes, className } = props

				const {
					block_id,
					icons,
					icon_count,
					icon_layout,
					hideLabel,
					disableLink
				} = props.attributes

				const labelClass = ( hideLabel ) ? "uagb-icon-list__no-label" : ""

				return (
					<div className={ classnames(
						className,
						"uagb-icon-list__outer-wrap",
						`uagb-icon-list__layout-${icon_layout}`,
						labelClass
					) }
					id={ `uagb-icon-list-${ block_id}` }>
						<div className="uagb-icon-list__wrap">
							{
								icons.map( ( icon, index ) => {

									if ( icon_count <= index ) {
										return
									}

									let url = ""
									let image_icon_html = ""

									if ( icon.image_icon == "icon" ) {
										if ( icon.icon ) {
											image_icon_html = <span className={ classnames( icon.icon , "uagb-icon-list__source-icon" ) }></span>
										}
									} else {
										if ( icon.image ) {
											image_icon_html = <img className="uagb-icon-list__source-image" src={icon.image.url} />
										}
									}

									let target = ( icon.target ) ? "_blank" : "_self"
									let link_url = ( !disableLink ) ? icon.link : "javascript:void(0);"

									return (
										<a
											className={ classnames(
												`uagb-icon-list-repeater-${index}`,
												"uagb-icon-list__wrapper"
											) }
											key={ index }
											target={ target }
											rel="noopener noreferrer"
											href={ link_url }
										>
											<div className="uagb-icon-list__content-wrap">
												<span className="uagb-icon-list__source-wrap">{image_icon_html}</span>
												{ ! hideLabel && "" != icons[ index ].label &&
													<div className="uagb-icon-list__label-wrap">
														<RichText.Content
															tagName="span"
															value={ icons[ index ].label }
															className='uagb-icon-list__label' />
													</div>
												}
											</div>
										</a>
									)
								})
							}
						</div>
					</div>
				)
			},
		}
	]
} )
