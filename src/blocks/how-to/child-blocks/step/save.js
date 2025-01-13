/**
 * BLOCK: How To - Step - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const {
		block_id,
		name,
		description,
		url,
		urlType,
		image,
		imageSize,
		urlText,
		urlTarget,
		imgPosition,
		imgTagHeight,
		imgTagWidth,
	} = attributes;

	let urlCheck = '';
	if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
		urlCheck = image.url;
	}

	let imageUrl = '';
	if ( urlCheck !== '' ) {
		const size = image.sizes;

		if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
			imageUrl = size[ imageSize ].url;
		} else {
			imageUrl = urlCheck;
		}
	}

	let target = '_self';
	if ( urlTarget ) {
		target = '_blank';
	}

	const defaultedAlt = image?.alt || '';

	const imageMarkup = (
		<img
			className="uagb-how-to-step-image"
			src={ imageUrl }
			alt={ defaultedAlt }
			width={ imgTagWidth }
			height={ imgTagHeight }
			{...( uagb_blocks_info.img_lazy_load !== 'enabled' && { loading: 'lazy' } )}
		/>
	);
	const contentMarkup = (
		<div className="uagb-step-content-wrap">
			<RichText.Content tagName="div" className="uagb-how-to-step-name" value={ name } />
			<RichText.Content tagName="p" className="uagb-how-to-step-description" value={ description } />
			{ 'text' === urlType && (
				<>
					{ '' !== url ? (
						<a href={ url } target={ target } className="uagb-step-link" rel="noopener noreferrer">
							<span className="uagb-step-link-text">{ urlText }</span>
						</a>
					) : (
						<span className="uagb-step-link-text">{ urlText }</span>
					) }
				</>
			) }
		</div>
	);
	return (
		<div className={ classnames( 'uagb-how-to-step-wrap', `uagb-block-${ block_id }` ) }>
			{ ( 'all' === urlType || 'none' === urlType ) && (
				<>
					{ '' !== url && 'all' === urlType && (
						<a // eslint-disable-line jsx-a11y/anchor-has-content
							href={ url }
							target={ target }
							className="uagb-step-link-all"
							rel="noopener noreferrer"
						></a>
					) }
					<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
						{ imageUrl && imageMarkup }
						{ contentMarkup }
					</div>
				</>
			) }
			{ 'text' === urlType && (
				<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
					{ imageUrl && imageMarkup }
					{ contentMarkup }
				</div>
			) }
		</div>
	);
}
