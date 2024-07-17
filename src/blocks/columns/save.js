/**
 * BLOCK: Columns - Frontend Render.
 */

import classnames from 'classnames';
import shapes from './shapes';

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		tag,
		backgroundType,
		backgroundVideo,
		align,
		columns,
		stack,
		vAlign,
		columnGap,
		topType,
		bottomType,
		bottomFlip,
		topFlip,
		reverseTablet,
		reverseMobile,
		topContentAboveShape,
		bottomContentAboveShape,
		contentWidth,
	} = attributes;

	const CustomTag = `${ tag }`;

	const topDividerHtml = topType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-top',
				{ 'uagb-columns__shape-flip': topFlip === true },
				{
					'uagb-columns__shape-above-content': topContentAboveShape === true,
				}
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = bottomType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-bottom',
				{ 'uagb-columns__shape-flip': bottomFlip === true },
				{
					'uagb-columns__shape-above-content': bottomContentAboveShape === true,
				}
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const reverseTabletClass = reverseTablet ? 'uagb-columns__reverse-tablet' : '';

	const reverseMobileClass = reverseMobile ? 'uagb-columns__reverse-mobile' : '';

	const bgType = undefined !== backgroundType ? `uagb-columns__background-${ backgroundType }` : '';

	const verticalAlign = undefined !== vAlign ? `uagb-columns__valign-${ vAlign }` : '';

	const alignType = undefined !== align ? `align${ align }` : '';

	return (
		<CustomTag
			className={ classnames(
				className,
				'uagb-columns__wrap',
				`${ bgType }`,
				`uagb-columns__stack-${ stack }`,
				`${ verticalAlign }`,
				`uagb-columns__gap-${ columnGap }`,
				`${ alignType }`,
				reverseTabletClass,
				reverseMobileClass,
				`uagb-block-${ block_id }`,
				`uagb-columns__columns-${ columns }`,
				`uagb-columns__max_width-${ contentWidth }`
			) }
		>
			<div className="uagb-columns__overlay"></div>
			{ topDividerHtml }
			{ 'video' === backgroundType && (
				<div className="uagb-columns__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source src={ backgroundVideo.url } type="video/mp4" />
						</video>
					) }
				</div>
			) }
			<div className={ classnames( 'uagb-columns__inner-wrap', `uagb-columns__columns-${ columns }` ) }>
				<InnerBlocks.Content />
			</div>
			{ bottomDividerHtml }
		</CustomTag>
	);
}
