/**
 * BLOCK: Column - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { block_id, tag, backgroundType, backgroundVideo, contentWidth, align } = attributes;

	let blockControlsClass = '';

	if ( 'full_width' === contentWidth ) {
		if ( align === 'wide' || align === 'full' ) {
			blockControlsClass = 'align' + align;
		}
	}

	const CustomTag = `${ tag }`;

	const blockProps = useBlockProps.save( {
		className: classnames(
			'uagb-section__wrap',
			`uagb-section__background-${ backgroundType }`,
			blockControlsClass,
			`uagb-block-${ block_id }`
		),
	} );

	return (
		<CustomTag
			{ ...blockProps }
		>
			<div className="uagb-section__overlay"></div>
			{ 'video' === backgroundType && (
				<div className="uagb-section__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source src={ backgroundVideo.url } type="video/mp4" />
						</video>
					) }
				</div>
			) }
			<div className="uagb-section__inner-wrap">
				<InnerBlocks.Content />
			</div>
		</CustomTag>
	);
}
