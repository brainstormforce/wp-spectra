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
		// label,
		image_icon,
		icon,
		image,
		block_id,
		link,
	} = props.attributes

	let url = ""

	// if( null != current_url ) {
	// 	url = links[social.type]
	// }

	let image_icon_html = ""

	if ( image_icon == "icon" ) {
		if ( icon ) {
			image_icon_html = <span className="uagb-ss__source-icon">{ renderSVG(icon) }</span>
		}
	} else {
		if ( image ) {
			image_icon_html = <img className="uagb-ss__source-image" src={image.url} />
		}
	}

	return (
		<div
			className={ classnames(
				`uagb-ss-repeater`,
				"uagb-ss__wrapper",
				className,
				`uagb-block-${ block_id }`
			) }
		>
			<a className="uagb-ss__link" data-href={url} rel ="noopener noreferrer"><span className="uagb-ss__source-wrap">{image_icon_html}</span></a>
		</div>
	)
}
