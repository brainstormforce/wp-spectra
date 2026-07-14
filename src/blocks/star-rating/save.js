/**
 * BLOCK: Star Rating - Save Block
 */

import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { rating, block_id, title, range, displayTitle } = props.attributes;

	const rangeValue = parseInt( range );
	const stars = [];
	for ( let i = 1; i <= rangeValue; i++ ) {
		stars.push(
			<span key={ i } className="uag-star">
				★
			</span>
		);
	}
	const blockProps = useBlockProps.save( {
		className: `uagb-block-${ block_id }`,
	} );

	return (
		<div { ...blockProps }>
			{ displayTitle && title && (
				<RichText.Content tagName="p" value={ title } className="uag-star-rating__title" />
			) }
			<div className="uag-star-rating" title={ `${ rating }/${ range }` }>
				{ stars }
			</div>
		</div>
	);
}
