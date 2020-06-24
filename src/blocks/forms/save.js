/**
 * BLOCK: Forms - Save Block
 */

import classnames from "classnames"

const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {

	const { attributes } = props

	const {
		block_id
	} = attributes

	return (
		<div className={ classnames(
			"uagb-forms__outer-wrap",
			`uagb-block-${ block_id }`,
		) }
		>
            <InnerBlocks.Content />
		</div>
	)
}