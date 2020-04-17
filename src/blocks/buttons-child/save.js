/**
 * BLOCK: Buttons - Save Block
 */

import classnames from "classnames"
import times from "lodash/times"
const { __ } = wp.i18n

const {
	RichText
} = wp.blockEditor

// Extend component
const { Fragment } = wp.element

export default function save( props ) {
	
	const { attributes, className } = props

	const {
		block_id,
		target,
		link,
		label
	} = props.attributes

	return (
		<div className={ classnames(
			className,
			"uagb-buttons__outer-wrap",
			`uagb-block-${ block_id }`
			) }>
			<div className="uagb-button__wrapper">
				<div className="uagb-buttons-repeater">
					<RichText.Content
						value={ label }
						tagName='a'
						className='uagb-button__link'
						href={ link }
						rel ="noopener noreferrer"
						target={ target }
					/>
				</div>
			</div>
		</div>
		
	)
}
