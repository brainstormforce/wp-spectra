/**
 * BLOCK: Buttons - Save Block
 */

import classnames from "classnames"

const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {
	
	const { className } = props
	const {
		block_id
	} = props.attributes

	return (
		<div className={ classnames(
			className,
			"uagb-buttons__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			<div className="uagb-buttons__wrap uagb-buttons-layout-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	)
}
