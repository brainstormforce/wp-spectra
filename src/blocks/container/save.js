/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import shapes from './shapes';

export default function save( props ) {
	const {
		block_id,
		htmlTag,
		htmlTagLink,
		contentWidth,
		innerContentWidth,
		isBlockRootParent,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape,
		backgroundType,
		backgroundVideo,
		topInvert,
		bottomInvert,
	} = props.attributes;

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-top',
				{ 'uagb-container__shape-flip': topFlip === true },
				{
					'uagb-container__shape-above-content': topContentAboveShape === true,
				},
				{ 'uagb-container__invert': topInvert === true }
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-bottom',
				{ 'uagb-container__shape-flip': bottomFlip === true },
				{
					'uagb-container__shape-above-content': bottomContentAboveShape === true,
				},
				{ 'uagb-container__invert': bottomInvert === true }
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const CustomTag = `${ htmlTag }`;
	const customTagLinkAttributes = {};
	if ( htmlTag === 'a' ) {
		customTagLinkAttributes.rel = 'noopener';
		if ( htmlTagLink?.url ) {
			customTagLinkAttributes.href = htmlTagLink?.url;
		}
		if ( htmlTagLink?.opensInNewTab ) {
			customTagLinkAttributes.target = '_blank';
		}
		if ( htmlTagLink?.noFollow ) {
			customTagLinkAttributes.rel = 'nofollow noopener';
		}
	}

	const blockProps = useBlockProps.save();

	return (
		<CustomTag
			id={ blockProps.id }
			className={ classnames(
				blockProps.className,
				`uagb-block-${ block_id }`,
				isBlockRootParent ? `${ contentWidth } uagb-is-root-container` : ''
			) }
			{ ...customTagLinkAttributes }
		>
			{ topDividerHtml }
			{ 'video' === backgroundType && (
				<div className="uagb-container__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source src={ backgroundVideo.url } type="video/mp4" />
						</video>
					) }
				</div>
			) }
			{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ? (
				<div className="uagb-container-inner-blocks-wrap">
					<InnerBlocks.Content />
				</div>
			) : (
				<InnerBlocks.Content />
			) }
			{ bottomDividerHtml }
		</CustomTag>
	);
}
