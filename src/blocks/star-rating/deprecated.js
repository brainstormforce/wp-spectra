/**
 * BLOCK: Price List - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import attributes from './attributes';

import { RichText } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, layout, title, rating, range } = props.attributes;
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
						'uag-star-rating__wrapper',
						`uagb-block-${ block_id }`,
						`uag-star-rating__layout-${ layout }`
					) }
				>
					{ title && (
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
		},
	}
];

export default deprecated;
