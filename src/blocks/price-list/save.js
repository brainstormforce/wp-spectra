/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import Title from "../price-list-child/components/Title"
import Price from "../price-list-child/components/Price"
import Description from "../price-list-child/components/Description"
import PositionClasses from "./classes"
import RestMenuImage from "../price-list-child/components/RestMenuImage"

const { Fragment } = wp.element
const {
	InnerBlocks
} = wp.blockEditor
export default function save( props ) {

	const {
		block_id,
		className,
		rest_menu_item_arr,
	} = props.attributes

	return (
		<Fragment>
			<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap",
					`uagb-block-${block_id}`,
					...PositionClasses( props.attributes ),
				) }
				>				
			<InnerBlocks.Content/>
			</div>
		</Fragment>
	)
}
