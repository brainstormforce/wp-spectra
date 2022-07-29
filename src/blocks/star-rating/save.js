/**
 * BLOCK: Star Rating - Save Block
 */

import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { rating, block_id, title, range, displayTitle, starPosition } = props.attributes;

	const rangeValue = parseInt( range );
	const stars = [];
	for ( let i = 1; i <= rangeValue; i++ ) {
		stars.push(
			<span key={ i } className="uag-star">
				★
			</span>
		);
	}
	return (
		<div
			className={ classnames(
				props.className,
				'before' === starPosition ? `uagb-star-position-${ starPosition }` : '',
				`uagb-block-${ block_id }`
			) }
		>
			{ ( displayTitle && title ) && (
				<RichText.Content
					tagName="p"
					value={ title }
					className="uag-star-rating__title"
				/>
			) }
			<div className="uag-star-rating" title={ `${ rating }/${ range }` }>
				{ stars }
			</div>
		</div>
	);
}
