import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import attributesV2_0_13 from './deprecated/v2_0_13/attribute';
import saveV2_0_13 from './deprecated/v2_0_13/save';
import attributesV2_2_0 from './deprecated/v2_2_0/attribute';
import saveV2_2_0 from './deprecated/v2_2_0/save';
import saveV2_4_2 from './deprecated/v2_4_2/save';

const deprecated = [
	{
		attributes,
		save: ( props ) => {
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
					srcSet={ `${ url } 1024w${ urlTablet ? ',' + urlTablet + ' 780w' : '' }${
						urlMobile ? ', ' + urlMobile + ' 360w' : ''
					}` }
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
				if ( rel ) {
					return rel + ' noopener';
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

			// eslint-disable-next-line
			const imageOverlayLink = (
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
		},
	},
	{
		attributes,
		save: ( props ) => {
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
					width={ width }
					height={ height }
					title={ title }
				/>
			);
			// block validation issue fixing - ImageURLInputUI components automatic provide "noopener"
			const getRel = () => {
				if ( rel ) {
					return rel + ' noopener';
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

			// eslint-disable-next-line
			const imageOverlayLink = (
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
		},
	},
	{
		attributes: attributesV2_0_13,
		save: saveV2_0_13,
	},
	{
		attributes: attributesV2_2_0,
		save: saveV2_2_0,
	},
	{
		attributes: attributes,
		save: saveV2_4_2,
	},
];

export default deprecated;
