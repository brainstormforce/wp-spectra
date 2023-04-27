/**
 * BLOCK: How To Schema - Deprecated Block
 */
// Import block dependencies and components.
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import newAttributesV2_0_13 from './attributes';

const attributes = {
	block_id: {
		type: 'string',
	},
	name: {
		type: 'string',
		default: __( 'Step', 'ultimate-addons-for-gutenberg' ),
	},
	description: {
		type: 'string',
		default: __(
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
		),
	},
	url: {
		type: 'string',
		default: '#',
	},
	urlType: {
		type: 'string',
		default: 'all',
	},
	urlText: {
		type: 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	urlTarget: {
		type: 'boolean',
		default: false,
	},
	image: {
		type: 'object',
		default: {
			url: '',
			alt: 'Image Placeholder',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	urlFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	urlFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
		default: 'px',
	},
	urlFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	urlFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	urlFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
		default: 'Default',
	},
	urlFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	urlFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	urlTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	urlDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	urlLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
	},

	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},

	descriptionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	descriptionFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	descriptionFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	descriptionFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	descriptionFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	descriptionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	descriptionFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	descriptionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	descriptionDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	descriptionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},

	imgPosition: {
		type: 'string',
		default: 'above-title',
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	descriptionColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	urlColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	titleLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	titleLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
	},
	descriptionLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	descriptionLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	descriptionLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	descriptionLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	descriptionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	descriptionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	descriptionLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	descriptionLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	urlLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	urlLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	urlLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	urlLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	urlLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	urlLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	urlLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	urlLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes } = props;

			const {
				block_id,
				name,
				description,
				url,
				urlType,
				image,
				imageSize,
				urlText,
				urlTarget,
				imgPosition,
			} = attributes;

			let urlCheck = '';
			if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
				urlCheck = image.url;
			}

			let imageUrl = '';
			if ( urlCheck !== '' ) {
				const size = image.sizes;

				if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
					imageUrl = size[ imageSize ].url;
				} else {
					imageUrl = urlCheck;
				}
			}

			let target = '_self';
			if ( urlTarget ) {
				target = '_blank';
			}

			const imageMarkup = <img className="uagb-how-to-step-image" src={ imageUrl } alt={ image.alt } />;
			const contentMarkup = (
				<div className="uagb-step-content-wrap">
					<RichText.Content tagName="div" className="uagb-how-to-step-name" value={ name } />
					<RichText.Content tagName="p" className="uagb-how-to-step-description" value={ description } />
					{ 'text' === urlType && (
						<a href={ url } target={ target } className="uagb-step-link" rel="noopener noreferrer">
							<span className="uagb-step-link-text">{ urlText }</span>
						</a>
					) }
				</div>
			);
			return (
				<div className={ classnames( 'uagb-how-to-step-wrap', `uagb-block-${ block_id }` ) }>
					{ 'all' === urlType && (
						<>
							<a // eslint-disable-line jsx-a11y/anchor-has-content
								href={ url }
								target={ target }
								className="uagb-step-link-all"
								rel="noopener noreferrer"
							></a>
							<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
								{ imageUrl && imageMarkup }
								{ contentMarkup }
							</div>
						</>
					) }
					{ 'text' === urlType && (
						<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
							{ imageUrl && imageMarkup }
							{ contentMarkup }
						</div>
					) }
				</div>
			);
		},
	},
	{
		attributes: newAttributesV2_0_13,
		save( props ) {
			const { attributes } = props;

			const {
				block_id,
				name,
				description,
				url,
				urlType,
				image,
				imageSize,
				urlText,
				urlTarget,
				imgPosition,
			} = attributes;

			let urlCheck = '';
			if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
				urlCheck = image.url;
			}

			let imageUrl = '';
			if ( urlCheck !== '' ) {
				const size = image.sizes;

				if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
					imageUrl = size[ imageSize ].url;
				} else {
					imageUrl = urlCheck;
				}
			}

			let target = '_self';
			if ( urlTarget ) {
				target = '_blank';
			}

			const imageMarkup = <img className="uagb-how-to-step-image" src={ imageUrl } alt={ image.alt } />;
			const contentMarkup = (
				<div className="uagb-step-content-wrap">
					<RichText.Content tagName="div" className="uagb-how-to-step-name" value={ name } />
					<RichText.Content tagName="p" className="uagb-how-to-step-description" value={ description } />
					{ 'text' === urlType && (
						<>
							{ '' !== url ? (
								<a href={ url } target={ target } className="uagb-step-link" rel="noopener noreferrer">
									<span className="uagb-step-link-text">{ urlText }</span>
								</a>
							) : (
								<span className="uagb-step-link-text">{ urlText }</span>
							) }
						</>
					) }
				</div>
			);
			return (
				<div className={ classnames( 'uagb-how-to-step-wrap', `uagb-block-${ block_id }` ) }>
					{ ( 'all' === urlType || 'none' === urlType ) && (
						<>
							{ '' !== url && 'all' === urlType && (
								<a // eslint-disable-line jsx-a11y/anchor-has-content
									href={ url }
									target={ target }
									className="uagb-step-link-all"
									rel="noopener noreferrer"
								></a>
							) }
							<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
								{ imageUrl && imageMarkup }
								{ contentMarkup }
							</div>
						</>
					) }
					{ 'text' === urlType && (
						<div className={ `uagb-step-image-content-wrap uag-image-position-${ imgPosition }` }>
							{ imageUrl && imageMarkup }
							{ contentMarkup }
						</div>
					) }
				</div>
			);
		},
	},
];

export default deprecated;
