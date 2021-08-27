/**
 * BLOCK: Star Rating - Save Block
 */

import classnames from "classnames"
import { RichText } from "@wordpress/block-editor"

export default function save( props ) {
	
	const {
		block_id,
		layout,
		title,
		rating,
		range,
	} = props.attributes

	let rangeValue = parseInt(range);
	let stars = [];
	for (let i = 1; i <= rangeValue; i++) {
		stars.push(<span key={i} class="uag-star">★</span>);
	}
	return (
		<div
			className={ classnames(
				props.className,
				"uag-star-rating__wrapper",
				`uagb-block-${block_id}`,
				`uag-star-rating__layout-${ layout }`,
			) }
		>
			{ title &&
				<RichText.Content
					tagName="p"
					value={ title }
					className='uag-star-rating__title'
				/>
			}
			<div class="uag-star-rating" title={`${rating}/${range}`}>
				{ stars }
			</div>
		</div>
	)
}
