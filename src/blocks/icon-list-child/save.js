/**
 * BLOCK: Icon List - Child - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes , className } = props;

	const {
		label,
		image_icon,
		icon,
		image,
		block_id,
		link,
		target,
		disableLink,
		hideLabel,
	} = attributes;

	let imageIconHtml = '';

	if ( image_icon === 'icon' ) {
		if ( icon ) {
			imageIconHtml = renderSVG( icon )
		}
	} else if ( image && image.url ) {
		imageIconHtml = (
			<img
				className="uagb-icon-list__source-image"
				src={ image.url }
				alt={ image.alt }
			/>
		);
	}

	const targetVal = target ? '_blank' : '_self';
	const linkUrl = disableLink ? link : '/';

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
		>
			{ disableLink && (
				<a
					target={ targetVal }
					aria-label={ label }
					rel="noopener noreferrer"
					href={ linkUrl }
				>
					{ ' ' }
				</a>
			) }
			<span className="uagb-icon-list__source-wrap">
				{ imageIconHtml }
			</span>
			{ ! hideLabel && '' !== label && (
				<RichText.Content
					tagName="span"
					value={ label }
					className="uagb-icon-list__label"
				/>
			) }
		</div>
	);
}
