import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
import shapes from './shapes';
import { select } from '@wordpress/data';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		className,
		deviceType,
		clientId
	} = props;

	const {
		block_id,
		htmlTag,
		htmlTagLink,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape,
		backgroundType,
		backgroundVideo,
		topInvert,
		bottomInvert
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'uagb-container__shape',
				'uagb-container__shape-top',
				{ 'uagb-container__shape-flip': topFlip === true },
				{
					'uagb-container__shape-above-content':
						topContentAboveShape === true,
				},
				{ 'uagb-container__invert' : topInvert === true }
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
					'uagb-container__shape-above-content':
						bottomContentAboveShape === true,
				},
				{ 'uagb-container__invert' : bottomInvert === true },
			) }
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = `${htmlTag}`;
	const customTagLinkAttributes = {};
	if( htmlTag === 'a' ){
		customTagLinkAttributes.rel = 'noopener'
		customTagLinkAttributes.onClick = ( e ) => e.preventDefault()
		if( htmlTagLink?.url ){
			customTagLinkAttributes.href = htmlTagLink?.url;
		}
		if( htmlTagLink?.opensInNewTab ){
			customTagLinkAttributes.target = '_blank';
		}
		if( htmlTagLink?.noFollow ){
			customTagLinkAttributes.rel = 'nofollow noopener';
		}
	}

	return (
		<CustomTag
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,
			) }
			key = { block_id }
			{...customTagLinkAttributes}
		>
			{ topDividerHtml }
			{ 'video' === backgroundType && (
				<div className="uagb-container__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source
								src={ backgroundVideo.url }
								type="video/mp4"
							/>
						</video>
					) }
				</div>
			) }
			<div className='uagb-container-inner-blocks-wrap'>
				<InnerBlocks
					__experimentalMoverDirection={ moverDirection }
					renderAppender = { hasChildBlocks
					? undefined
					: InnerBlocks.ButtonBlockAppender }
				/>
			</div>
			{ bottomDividerHtml }
		</CustomTag>
	);
};
export default React.memo( Render );
