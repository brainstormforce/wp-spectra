/**
 * BLOCK: Icon List - Child - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import { RichText } from '@wordpress/block-editor';
import newrenderSVG from '@Controls/renderIcon';
import newAttributesV2_0_13 from './attributes';
import newAttributesV2_0_14 from './deprecated/v2_0_14/attributes';
import newSaveV2_0_14 from './deprecated/v2_0_14/save';

const attributes = {
	block_id: {
		type: 'string',
	},
	label: {
		type: 'html',
		selector: '.uagb-icon-list__label',
		default: '#Label',
	},
	image_icon: {
		type: 'string',
		default: 'icon',
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'fab fa-arrow-circle-right',
	},
	image: {
		type: 'object',
	},
	icon_color: {
		type: 'string',
		default: '#3a3a3a',
	},
	label_color: {
		type: 'string',
	},
	icon_hover_color: {
		type: 'string',
	},
	label_hover_color: {
		type: 'string',
	},
	icon_bg_color: {
		type: 'string',
	},
	icon_bg_hover_color: {
		type: 'string',
	},
	icon_border_color: {
		type: 'string',
	},
	icon_border_hover_color: {
		type: 'string',
	},
	link: {
		type: 'string',
		default: '#',
	},
	target: {
		type: 'boolean',
		default: false,
	},
	disableLink: {
		type: 'boolean',
		default: true,
	},
	deviceType: {
		type: 'string',
		default: 'Desktop',
	},
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

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
				fromParentIcon,
			} = attributes;

			let imageIconHtml = '';

			if ( image_icon == 'icon' ) {
				if ( icon || fromParentIcon ) {
					imageIconHtml = (
						<span className="uagb-icon-list__source-icon">
							{ icon ? renderSVG( icon ) : renderSVG( fromParentIcon ) }
						</span>
					);
				}
			} else if ( image && image.url && image_icon !== 'none' ) {
				imageIconHtml = <img className="uagb-icon-list__source-image" src={ image.url } />;
			}

			const targetVal = target ? '_blank' : '_self';
			const linkUrl = ! disableLink ? link : '/';

			return (
				<div
					className={ classnames(
						`uagb-icon-list-repeater`,
						'uagb-icon-list__wrapper',
						className,
						`uagb-block-${ block_id }`
					) }
				>
					{ ! disableLink && <a target={ targetVal } rel="noopener noreferrer" href={ linkUrl }></a> }
					<div className="uagb-icon-list__content-wrap">
						<span className="uagb-icon-list__source-wrap">{ imageIconHtml }</span>
						{ ! hideLabel && '' != label && (
							<div className="uagb-icon-list__label-wrap">
								<RichText.Content tagName="span" value={ label } className="uagb-icon-list__label" />
							</div>
						) }
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const { label, image_icon, icon, image, block_id, link, target, disableLink, hideLabel } = attributes;

			let imageIconHtml = '';

			if ( image_icon === 'icon' ) {
				if ( icon ) {
					imageIconHtml = <span className="uagb-icon-list__source-icon">{ renderSVG( icon ) }</span>;
				}
			} else if ( image && image.url ) {
				imageIconHtml = <img className="uagb-icon-list__source-image" src={ image.url } alt={ image.alt } />;
			}

			const targetVal = target ? '_blank' : '_self';
			const linkUrl = ! disableLink ? link : '/';

			return (
				<div
					className={ classnames(
						'uagb-icon-list-repeater',
						'uagb-icon-list__wrapper',
						className,
						`uagb-block-${ block_id }`
					) }
				>
					{ ! disableLink && (
						<a target={ targetVal } aria-label={ label } rel="noopener noreferrer" href={ linkUrl }>
							{ ' ' }
						</a>
					) }
					<div className="uagb-icon-list__content-wrap">
						<span className="uagb-icon-list__source-wrap">{ imageIconHtml }</span>
						{ ! hideLabel && '' !== label && (
							<div className="uagb-icon-list__label-wrap">
								<RichText.Content tagName="span" value={ label } className="uagb-icon-list__label" />
							</div>
						) }
					</div>
				</div>
			);
		},
	},
	{
		// Deprecated for 2.0.12.
		attributes,
		save( props ) {
			const { attributes, className } = props;

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
				fromParentIcon,
			} = attributes;

			const defaultedAlt = image && image?.alt ? image?.alt : '';

			let imageIconHtml = '';

			if ( image_icon === 'icon' ) {
				if ( icon || fromParentIcon ) {
					imageIconHtml = icon ? newrenderSVG( icon ) : newrenderSVG( fromParentIcon );
				}
			} else if ( image && image.url && image_icon !== 'none' ) {
				imageIconHtml = <img className="uagb-icon-list__source-image" src={ image.url } alt={ defaultedAlt } />;
			}

			const targetVal = target ? '_blank' : '_self';
			const linkUrl = disableLink ? link : '/';

			return (
				<div className={ classnames( className, `uagb-block-${ block_id }` ) }>
					{ disableLink && (
						<a target={ targetVal } aria-label={ label } rel="noopener noreferrer" href={ linkUrl }>
							{ ' ' }
						</a>
					) }
					{ imageIconHtml && <span className="uagb-icon-list__source-wrap">{ imageIconHtml }</span> }
					{ ! hideLabel && '' !== label && (
						<RichText.Content tagName="span" value={ label } className="uagb-icon-list__label" />
					) }
				</div>
			);
		},
	},
	{
		// Deprecated for 2.0.13.
		attributes: newAttributesV2_0_13,
		save( props ) {
			const { attributes, className } = props;

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
				fromParentIcon,
			} = attributes;

			const defaultedAlt = image && image?.alt ? image?.alt : '';

			let imageIconHtml = '';

			if ( image_icon === 'icon' ) {
				if ( icon || fromParentIcon ) {
					imageIconHtml = icon ? newrenderSVG( icon ) : newrenderSVG( fromParentIcon );
				}
			} else if ( image && image.url && image_icon !== 'none' ) {
				imageIconHtml = <img className="uagb-icon-list__source-image" src={ image.url } alt={ defaultedAlt } />;
			}

			const targetVal = target ? '_blank' : '_self';
			const linkUrl = disableLink ? link : '/';

			return (
				<div className={ classnames( className, `uagb-block-${ block_id }` ) }>
					{ disableLink && (
						<a
							target={ targetVal }
							aria-label={ label.replace( /(<([^>]+)>)/gi, '' ) }
							rel="noopener noreferrer"
							href={ linkUrl }
						>
							{ ' ' }
						</a>
					) }
					{ imageIconHtml && <span className="uagb-icon-list__source-wrap">{ imageIconHtml }</span> }
					{ ! hideLabel && '' !== label && (
						<RichText.Content tagName="span" value={ label } className="uagb-icon-list__label" />
					) }
				</div>
			);
		},
	},
	{
		// Deprecated for 2.0.14
		attributes: newAttributesV2_0_14,
		save: newSaveV2_0_14,
	},
];

export default deprecated;
