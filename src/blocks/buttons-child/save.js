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
		align,
		items,
		buttons,
		btn_count,
		label
	} = props.attributes

	return (
		<div className={ classnames(
			className,
			"uagb-buttons__outer-wrap",
			`uagb-block-${ block_id }`
			) }>
			<div className="uagb-buttons__wrap">
				<div className="uagb-buttons-repeater">
					<RichText.Content
						value={ label }
						tagName='div'
						className='uagb-button__link'
					/>
				</div>
			</div>
		</div>
		
	)
}
