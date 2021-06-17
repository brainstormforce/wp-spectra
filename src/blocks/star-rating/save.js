/**
 * BLOCK: Star Rating - Save Block
 */

import classnames from "classnames"

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const {
		block_id,
		title,
		rating,
		range,
	} = props.attributes

	let range_value = parseInt(range);
	var stars = [];
	for (var i = 1; i <= range_value; i++) {
		let star_class = ( i <= rating ) ? 'uag-star-full' : 'uag-star-empty'
		stars.push(<i class={star_class}>★</i>);
	}
	return (
		<div
			className={ classnames(
				props.className,
				"uag-star-rating__wrapper",
				`uagb-block-${block_id}`,
			) }
		>
			<RichText.Content
				tagName="p"
				value={ title }
				className='uag-star-rating__title'
			/>
			<div class="uag-star-rating" title={`${rating}/${range}`} itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
				{ stars }
				<span itemprop="ratingValue" class="uag-screen-only">
					{`${rating}/${range}`}
				</span>
			</div>
		</div>
	)
}
