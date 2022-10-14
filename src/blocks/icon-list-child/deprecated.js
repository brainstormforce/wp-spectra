/**
 * BLOCK: Icon List - Child - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import { RichText } from '@wordpress/block-editor';
import newrenderSVG from '@Controls/renderIcon';

const attributes = {
	block_id: {
		type: "string"
	},
	label: {
		type: 'html',
		selector: ".uagb-icon-list__label",
		default: "#Label"
	},
	image_icon: {
		type: "string",
		default: "icon"
	},
	hideLabel: {
		type: "boolean",
		default: false
	},
	icon: {
		type: "string",
		default: "fab fa-arrow-circle-right"
	},
	image: {
		type: "object",
	},
	icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	label_color: {
		type: "string"
	},
	icon_hover_color: {
		type: "string"
	},
	label_hover_color: {
		type: "string"
	},
	icon_bg_color: {
		type: "string"
	},
	icon_bg_hover_color: {
		type: "string"
	},
	icon_border_color: {
		type: "string"
	},
	icon_border_hover_color: {
		type: "string"
	},
	link: {
		type: "string",
		default: "#"
	},
	target: {
		type: "boolean",
		default: false
	},
	disableLink: {
		type: "boolean",
		default: true
	},
	deviceType: {
		type: "string",
		default: 'Desktop'
	}
}

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
				fromParentIcon
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
				imageIconHtml = (
					<img
						className="uagb-icon-list__source-image"
						src={ image.url }
					/>
				);
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
					{ ! disableLink && (
						<a
							target={ targetVal }
							rel="noopener noreferrer"
							href={ linkUrl }
						></a>
					) }
					<div className="uagb-icon-list__content-wrap">
						<span className="uagb-icon-list__source-wrap">
							{ imageIconHtml }
						</span>
						{ ! hideLabel && '' != label && (
							<div className="uagb-icon-list__label-wrap">
								<RichText.Content
									tagName="span"
									value={ label }
									className="uagb-icon-list__label"
								/>
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
					imageIconHtml = (
						<span className="uagb-icon-list__source-icon">
							{ renderSVG( icon ) }
						</span>
					);
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
						<a
							target={ targetVal }
							aria-label={ label }
							rel="noopener noreferrer"
							href={ linkUrl }
						>
							{ ' ' }
						</a>
					) }
					<div className="uagb-icon-list__content-wrap">
						<span className="uagb-icon-list__source-wrap">
							{ imageIconHtml }
						</span>
						{ ! hideLabel && '' !== label && (
							<div className="uagb-icon-list__label-wrap">
								<RichText.Content
									tagName="span"
									value={ label }
									className="uagb-icon-list__label"
								/>
							</div>
						) }
					</div>
				</div>
			);
		},
	},
	{ // Deprecated for 2.0.12.
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
				fromParentIcon
			} = attributes;

			const defaultedAlt = ( image && image?.alt ) ? image?.alt : '';

			let imageIconHtml = '';

			if ( image_icon === 'icon' ) {
				if( icon || fromParentIcon ){
					imageIconHtml = icon ? newrenderSVG( icon ) : newrenderSVG( fromParentIcon );
				}
			} else if ( image && image.url && image_icon !== 'none' ) {
				imageIconHtml = (
					<img
						className="uagb-icon-list__source-image"
						src={ image.url }
						alt={ defaultedAlt }
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
					{
						imageIconHtml && (
							<span className="uagb-icon-list__source-wrap">
								{ imageIconHtml }
							</span>
						)
					}
					{ ! hideLabel && '' !== label && (
						<RichText.Content
							tagName="span"
							value={ label }
							className="uagb-icon-list__label"
						/>
					) }
				</div>
			);
		},
	},
	{ // Deprecated for 2.0.14.
		attributes : {
			block_id: {
				type: 'string',
			},
			label: {
				type: 'html',
				selector: '.uagb-icon-list__label',
				// Need to Dynamically Number List Items.
				default: 'List item',
			},
			image_icon: {
				type: 'string',
				default: 'icon',
			},
			hideLabel: {
				type: 'boolean',
				default: false,
			},
			disableIcon: {
				type: 'boolean',
				default: false,
			},
			icon: {
				type: 'string',
				default: '',
			},
			image: {
				type: 'object',
			},
			icon_color: {
				type: 'string',
				default: '',
				UAGCopyPaste: {
					styleType: 'icon-color'
				},
			},
			label_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'main-title-color'
				},
			},
			icon_hover_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'icon-hover-color'
				},
			},
			label_hover_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'main-title-hover-color'
				},
			},
			icon_bg_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'icon-bg-color'
				},
				default: '',
			},
			icon_bg_hover_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'icon-bg-hover-color'
				},
			},
			icon_border_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'icon-border-color'
				},
				default: '',
			},
			icon_border_hover_color: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'icon-border-hover-color'
				},
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
				default: false,
			},
			fromParentIcon: {
				type: 'string',
				default: 'circle-arrow-right',
			},
			// margin
			childTopMargin : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-margin'
				}
			},
			childRightMargin : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-margin'
				}
			},
			childLeftMargin : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-margin'
				}
			},
			childBottomMargin : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-margin'
				}
			},
			childTopMarginTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-margin-tablet'
				}
			},
			childRightMarginTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-margin-tablet'
				}
			},
			childLeftMarginTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-margin-tablet'
				}
			},
			childBottomMarginTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-margin-tablet'
				}
			},
			childTopMarginMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-margin-mobile'
				}
			},
			childRightMarginMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-margin-mobile'
				}
			},
			childLeftMarginMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-margin-mobile'
				}
			},
			childBottomMarginMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-margin-mobile'
				}
			},
			childMarginUnit : {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-margin-unit'
				}
			},
			childMarginUnitTablet: {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-margin-unit-tablet'
				}
			},
			childMarginUnitMobile : {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-margin-unit-mobile'
				}
			},
			childMarginLink: {
				type: 'boolean',
				default: false,
				isUAGStyle: true,
			},
			// padding
			childTopPadding : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-padding'
				}
			},
			childRightPadding : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-padding'
				}
			},
			childLeftPadding : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-padding'
				}
			},
			childBottomPadding : {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-padding'
				}
			},
			childTopPaddingTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-padding-tablet'
				}
			},
			childRightPaddingTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-padding-tablet'
				}
			},
			childLeftPaddingTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-padding-tablet'
				}
			},
			childBottomPaddingTablet: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-padding-tablet'
				}
			},
			childTopPaddingMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-top-padding-mobile'
				}
			},
			childRightPaddingMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-right-padding-mobile'
				}
			},
			childLeftPaddingMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-left-padding-mobile'
				}
			},
			childBottomPaddingMobile: {
				type: 'number',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-bottom-padding-mobile'
				}
			},
			childPaddingUnit : {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-padding-unit'
				}
			},
			childPaddingUnitTablet: {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-padding-unit-tablet'
				}
			},
			childPaddingUnitMobile : {
				type: 'string',
				default: 'px',
				isUAGStyle: true,
				UAGCopyPaste: {
					styleType: 'child-padding-unit-mobile'
				}
			},
			childPaddingLink: {
				type: 'boolean',
				default: true,
				isUAGStyle: true,
			},
		},
		save( props ) {
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
				fromParentIcon
			} = attributes;

			const defaultedAlt = ( image && image?.alt ) ? image?.alt : '';

			let imageIconHtml = '';

			if ( image_icon === 'icon' ) {
				if( icon || fromParentIcon ){
					imageIconHtml = icon ? renderSVG( icon ) : renderSVG( fromParentIcon );
				}
			} else if ( image && image.url && image_icon !== 'none' ) {
				imageIconHtml = (
					<img
						className="uagb-icon-list__source-image"
						src={ image.url }
						alt={ defaultedAlt }
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
							aria-label={ label.replace( /(<([^>]+)>)/ig, '' ) }
							rel="noopener noreferrer"
							href={ linkUrl }
						>
							{ ' ' }
						</a>
					) }
					{
						imageIconHtml && (
							<span className="uagb-icon-list__source-wrap">
								{ imageIconHtml }
							</span>
						)
					}
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
	}
];

export default deprecated;
