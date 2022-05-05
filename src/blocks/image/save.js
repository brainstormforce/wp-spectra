import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function Save( props ) {
	const {
		block_id,
		layout,
		url,
		urlTablet,
		urlMobile,
		alt,
		caption,
		imageHoverEffect,
		href,
		linkClass,
		width,
		height,
		align,
		id,
		linkTarget,
		rel,
		title,
		heading,
		headingTag,
		headingId,
		overlayContentPosition,
		seperatorStyle,
		seperatorPosition
	} = props.attributes;
	const image = (
		<img
			srcSet={`${url} 1024w${urlTablet ? ',' + urlTablet + ' 780w' : ''}${urlMobile ? ', ' + urlMobile + ' 360w' : ''}`}
			src={ url }
			alt={ alt }
			className={ id ? `uag-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
		/>
	);
	// block validation issue fixing - ImageURLInputUI components automatic provide "noopener"
	const getRel = () => {
		if( rel ){
			return rel + ' noopener';
		}
		return 'noopener';
	}
	const figureImage = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
					rel={getRel()}
				>
					{ image }
				</a>
			) : (
				image
			) }
		</>
	);

	const imageHeading = (
		<>
			{ ( ! RichText.isEmpty( heading ) ) && (
				<RichText.Content tagName={headingTag} id={headingId} className='uagb-image-heading' value={ heading } />
			) }
		</>
	)

	const imageCaption = (
		<>
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content tagName="figcaption" className='uagb-image-caption' value={ caption } />
			) }
		</>
	)

	const separator = 'none' !== seperatorStyle && (
		<div className="uagb-image-separator"></div>
	)

	// eslint-disable-next-line
	const imageOverlayLink = (<a
		className={ `wp-block-uagb-image--layout-overlay-link ${linkClass}` }
		href={ href }
		target={ linkTarget }
		rel={getRel()}
	></a> )

	return (
		<div className={ classnames(
			props.className,
			`uagb-block-${ block_id }`,
			'wp-block-uagb-image',
			`wp-block-uagb-image--layout-${ layout }`,
			`wp-block-uagb-image--effect-${imageHoverEffect}`,
			`wp-block-uagb-image--align-${align ? align : 'none'}`
		) }>
			<figure className='wp-block-uagb-image__figure'>
				{ figureImage }
				{
					layout === 'overlay' ? (
						<>
							<div className='wp-block-uagb-image--layout-overlay__color-wrapper'></div>
							<div className={`wp-block-uagb-image--layout-overlay__inner ${overlayContentPosition.replace( ' ', '-' )}`}>
								{imageOverlayLink}
								{ 'before_title' === seperatorPosition && separator}
								{imageHeading}
								{ 'after_title' === seperatorPosition && separator}
								{imageCaption}
								{ 'after_sub_title' === seperatorPosition && separator}
							</div>
						</>
					) : (
						imageCaption
					)
				}
			</figure>
		</div>
	);
}
