/**
 * BLOCK: Buttons - Save Block
 */

import classnames from "classnames"
import times from "lodash/times"

const {
	InnerBlocks
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
	} = props.attributes

	
	return (
		<div className="uagb-multi-buttons-wrap">
			<InnerBlocks.Content />
		</div>
	)
}
