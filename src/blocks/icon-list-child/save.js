/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		label,
		image_icon,
		icon,
		image,
		block_id,
		link,
		target,
		disableLink,
	} = attributes


	let url = ""
	let image_icon_html = ""

	if ( image_icon == "icon" ) {
		if ( icon ) {
			image_icon_html = <span className="uagb-icon-list__source-icon">{ renderSVG(icon) }</span>
		}
	} else {
		if ( image ) {
			image_icon_html = <img className="uagb-icon-list__source-image" src={image.url} />
		}
	}

	let target_val = ( target ) ? "_blank" : "_self"
	let link_url = ( !disableLink ) ? link : "/"

	if ( disableLink ) {
		return (
			<div
				className={ classnames(
					`uagb-icon-list-repeater`,
					"uagb-icon-list__wrapper",
					className,
					`uagb-block-${ block_id }`
				) }
			>
				<div className="uagb-icon-list__content-wrap">
					<span className="uagb-icon-list__source-wrap">{image_icon_html}</span>
					{ "" != label &&
						<div className="uagb-icon-list__label-wrap">
							<RichText.Content
								tagName="span"
								value={ label }
								className='uagb-icon-list__label' />
						</div>
					}
				</div>
			</div>
		)
	} else {

		return (
			<a
				className={ classnames(
					`uagb-icon-list-repeater`,
					"uagb-icon-list__wrapper",
					className,
					`uagb-block-${ block_id }`
				) }
				target={ target_val }
				rel="noopener noreferrer"
				href={ link_url }
			>
				<div className="uagb-icon-list__content-wrap">
					<span className="uagb-icon-list__source-wrap">{image_icon_html}</span>
					{ "" != label &&
						<div className="uagb-icon-list__label-wrap">
							<RichText.Content
								tagName="span"
								value={ label }
								className='uagb-icon-list__label' />
						</div>
					}
				</div>
			</a>
		)
	}
}
