/**
 * BLOCK: Social Share
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import links from "./links"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/social-share", {
	title: uagb_blocks_info.blocks["uagb/social-share"]["title"],
	description: uagb_blocks_info.blocks["uagb/social-share"]["description"],
	icon: UAGB_Block_Icons.social_share,
	category: uagb_blocks_info.category,
	keywords: [
		__( "social share" ),
		__( "icon" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		const { attributes, className } = props

		const {
			block_id,
			align,
			items,
			socials,
			social_count,
			social_layout,
			current_url
		} = props.attributes

		return (
			<div className={ classnames(
				className,
				"uagb-social-share__outer-wrap",
				`uagb-social-share__layout-${social_layout}`
			) }
			id={ `uagb-social-share-${ block_id}` }>
				<div className="uagb-social-share__wrap">
					{
						socials.map( ( social, index ) => {

							if ( social_count <= index ) {
								return
							}

							let url = ""

							if( null != current_url ) {
								url = links[social.type]
							}

							let image_icon_html = ""

							if ( social.image_icon == "icon" ) {
								if ( social.icon ) {
									image_icon_html = <span className="uagb-ss__source-icon">{ renderSVG(social.icon) }</span>
								}
							} else {
								if ( social.image ) {
									image_icon_html = <img className="uagb-ss__source-image" src={social.image.url} />
								}
							}

							return (
								<div
									className={ classnames(
										`uagb-ss-repeater-${index}`,
										"uagb-ss__wrapper"
									) }
									key={ index }
								>
									<a className="uagb-ss__link" data-href={url} rel ="noopener noreferrer"><span className="uagb-ss__source-wrap">{image_icon_html}</span></a>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	},
	deprecated:[
		{
			attributes,
			save: props => {

				const { attributes, className } = props

				const {
					block_id,
					align,
					items,
					socials,
					social_count,
					social_layout,
					current_url
				} = props.attributes

				return (
					<div className={ classnames(
						className,
						"uagb-social-share__outer-wrap",
						`uagb-social-share__layout-${social_layout}`
					) }
					id={ `uagb-social-share-${ block_id}` }>
						<div className="uagb-social-share__wrap">
							{
								socials.map( ( social, index ) => {

									if ( social_count <= index ) {
										return
									}

									let url = ""

									if( null != current_url ) {
										url = links[social.type] + encodeURI( current_url )
									}

									let image_icon_html = ""

									if ( social.image_icon == "icon" ) {
										if ( social.icon ) {
											image_icon_html = <span className={ classnames( social.icon , "uagb-ss__source-icon" ) }></span>
										}
									} else {
										if ( social.image ) {
											image_icon_html = <img className="uagb-ss__source-image" src={social.image.url} />
										}
									}

									return (
										<div
											className={ classnames(
												`uagb-ss-repeater-${index}`,
												"uagb-ss__wrapper"
											) }
											key={ index }
										>
											<a className="uagb-ss__link" href={url} rel ="noopener noreferrer"><span className="uagb-ss__source-wrap">{image_icon_html}</span></a>
										</div>
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
