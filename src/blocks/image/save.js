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
		enableCaption,
		imageHoverEffect,
		href,
		linkClass,
		width,
		height,
		naturalHeight,
		naturalWidth,
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
		seperatorPosition,
	} = props.attributes;

	const image = (
		<img
			srcSet={ `${ url } ${ urlTablet ? ',' + urlTablet + ' 780w' : '' }${
				urlMobile ? ', ' + urlMobile + ' 360w' : ''
			}` }
			src={ url }
			alt={ alt }
			className={ id ? `uag-image-${ id }` : null }
			width={ width ? width : naturalWidth }
			height={ height ? height : naturalHeight }
			title={ title }
			loading="lazy"
		/>
	);
	// block validation issue fixing - ImageURLInputUI components automatic provide "noopener"
	const getRel = () => {
		if ( rel ) {
			return rel.trim();
		}
		return 'noopener';
	};
	const figureImage = (
		<>
			{ href ? (
				<a className={ linkClass } href={ href } target={ linkTarget } rel={ getRel() }>
					{ image }
				</a>
			) : (
				image
			) }
		</>
	);

	const imageHeading = (
		<>
			{ ! RichText.isEmpty( heading ) && (
				<RichText.Content
					tagName={ headingTag }
					id={ headingId }
					className="uagb-image-heading"
					value={ heading }
				/>
			) }
		</>
	);

	const imageCaption = (
		<>
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content tagName="figcaption" className="uagb-image-caption" value={ caption } />
			) }
		</>
	);

	const separator = 'none' !== seperatorStyle && <div className="uagb-image-separator"></div>;

	const imageOverlayLink = (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<a
			className={ `wp-block-uagb-image--layout-overlay-link ${ linkClass }` }
			href={ href }
			target={ linkTarget }
			rel={ getRel() }
		></a>
	);

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-image',
				`wp-block-uagb-image--layout-${ layout }`,
				`wp-block-uagb-image--effect-${ imageHoverEffect }`,
				`wp-block-uagb-image--align-${ align ? align : 'none' }`
			) }
		>
			<figure className="wp-block-uagb-image__figure">
				{ figureImage }
				{ layout === 'overlay' ? (
					<>
						<div className="wp-block-uagb-image--layout-overlay__color-wrapper"></div>
						<div
							className={ `wp-block-uagb-image--layout-overlay__inner ${ overlayContentPosition.replace(
								' ',
								'-'
							) }` }
						>
							{ imageOverlayLink }
							{ 'before_title' === seperatorPosition && separator }
							{ imageHeading }
							{ 'after_title' === seperatorPosition && separator }
							{ imageCaption }
							{ 'after_sub_title' === seperatorPosition && separator }
						</div>
					</>
				) : (
					<>{ enableCaption && imageCaption }</>
				) }
			</figure>
		</div>
	);
}
