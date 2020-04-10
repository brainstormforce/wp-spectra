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
	return null;
	
	const { attributes, className } = props

	const {
		block_id,
		label,
		image_icon,
		icon
	} = props.attributes

	return (

		<div
			className={ classnames(
				`uagb-icon-list-repeater-${block_id}`,
				"uagb-icon-list__wrapper"
			) }
		>
			<div className="uagb-icon-list__content-wrap">
				<span className="uagb-icon-list__source-wrap">
					<span className="uagb-icon-list__source-icon">{ renderSVG(icon.icon) }</span>
				</span>
				{ "" != label &&
					<div className="uagb-icon-list__label-wrap">
						<RichText.Content
							tagName="span"
							value={label}
							className='uagb-icon-list__label' />
					</div>
				}
			</div>
		</div>
	)
}
