/**
 * BLOCK: Advanced Heading - Deprecated Block
 */

import classnames from 'classnames';
import { Stars } from './deprecatedComponent';
import { __ } from '@wordpress/i18n';
import DeprecatedStars from './deprecatedStars';
import attributes from './attributes';
import DeprecatedStarsV_2_0_13 from './deprecatedStarsV_2_0_13';

import { RichText } from '@wordpress/block-editor';

const blockAttributes = {
	ID: {
		type: 'string',
		default: '',
	},
	itemType: {
		type: 'string',
		default: __( 'Product' ),
	},
	itemSubtype: {
		type: 'string',
		default: '',
	},
	reviewPublisher: {
		type: 'string',
		default: '',
	},
	bookAuthorName: {
		type: 'string',
		default: '',
	},
	isbn: {
		type: 'string',
		default: '',
	},
	provider: {
		type: 'string',
		default: '',
	},
	appCategory: {
		type: 'string',
		default: '',
	},
	operatingSystem: {
		type: 'string',
		default: '',
	},
	datecreated: {
		type: 'string',
		default: 'Dec 19 2020',
	},
	directorname: {
		type: 'string',
		default: '',
	},
	overallAlignment: {
		type: 'string',
		default: 'left',
	},
	schema: {
		type: 'string',
		default: '',
	},
	rTitle: {
		type: 'string',
		default: '',
	},
	rContent: {
		type: 'string',
		default: '',
	},
	rAuthor: {
		type: 'string',
		default: '',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	block_id: {
		type: 'string',
		default: '',
	},
	mainimage: {
		type: 'object',
		default: {
			url: '',
		},
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
	},
	authorName: {
		type: 'string',
		default: '',
	},
	itemName: {
		type: 'string',
		default: '',
	},
	items: {
		type: 'string',
		default: '[{"label":"","value":0}]',
	},
	description: {
		type: 'string',
		default: '',
	},
	descriptionAlign: {
		type: 'string',
		default: 'left',
	},
	imgURL: {
		type: 'string',
		default: '',
	},
	imgID: {
		type: 'number',
	},
	imgAlt: {
		type: 'string',
		default: '',
	},
	parts: {
		type: 'array',
		default: [ { label: '', value: 0 } ],
	},
	starCount: {
		type: 'number',
		default: 5,
	},
	summaryTitle: {
		type: 'string',
		default: __( 'Summary' ),
	},
	summaryDescription: {
		type: 'string',
		default: '',
	},
	callToActionText: {
		type: 'string',
		default: '',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	callToActionBackColor: {
		type: 'string',
		default: '#f63d3d',
	},
	callToActionForeColor: {
		type: 'string',
		default: '#ffffff',
	},
	inactiveStarColor: {
		type: 'string',
		default: '#888888',
	},
	activeStarColor: {
		type: 'string',
		default: '#eeee00',
	},
	authorColor: {
		type: 'string',
		default: '',
	},
	summaryColor: {
		type: 'string',
		default: '',
	},
	titleAlign: {
		type: 'string',
		default: 'left',
	},
	authorAlign: {
		type: 'string',
		default: 'left',
	},
	enableCTA: {
		type: 'boolean',
		default: true,
	},
	ctaNoFollow: {
		type: 'boolean',
		default: true,
	},
	ctaOpenInNewTab: {
		type: 'boolean',
		default: true,
	},
	enableReviewSchema: {
		type: 'boolean',
		default: true,
	},
	enableImage: {
		type: 'boolean',
		default: true,
	},
	enableDescription: {
		type: 'boolean',
		default: true,
	},
	enableSchema: {
		type: 'boolean',
		default: true,
	},
	starOutlineColor: {
		type: 'string',
		default: '#000000',
	},
	starActiveColor: {
		type: 'string',
		default: '#000000',
	},
	imageSize: {
		type: 'number',
		default: 100, //range: 0-200
	},
	brand: {
		type: 'string',
		default: '',
	},
	sku: {
		type: 'string',
		default: '',
	},
	identifier: {
		type: 'string',
		default: '',
	},
	identifierType: {
		type: 'string',
		default: 'gtin',
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	offerType: {
		type: 'string',
		default: 'Offer',
	},
	offerStatus: {
		type: 'string',
		default: '',
	},
	offerPrice: {
		type: 'string',
		default: 0,
	},
	offerCurrency: {
		type: 'string',
		default: 'USD',
	},
	offerExpiry: {
		type: 'string',
		default: 'Dec 19 2020',
	},
	datepublish: {
		type: 'string',
		default: 'Dec 19 2020',
	},
	featuresTitle: {
		type: 'string',
		default: __( 'List Of Features:' ),
	},
	featuresAvgText: {
		type: 'string',
		default: __( 'Average Ratings' ),
	},
	feature_count: {
		type: 'number',
		default: 1,
	},
	showFeature: {
		type: 'boolean',
		default: false,
	},
	showAuthor: {
		type: 'boolean',
		default: true,
	},
	starSize: {
		type: 'number',
		default: 20,
	},
	starColor: {
		type: 'string',
		default: '#ffff00',
	},
	selectedStars: {
		type: 'number',
		default: 0,
	},
	starAlign: {
		type: 'string',
		default: 'left',
	},
	descColor: {
		type: 'string',
		default: '',
	},
	titleColor: {
		type: 'string',
		default: '',
	},
	pricevalue: {
		type: 'string',
		default: 'US$65',
	},
	pricetext: {
		type: 'string',
		default: 'Price',
	},
	availabilityvalue: {
		type: 'string',
		default: __( 'Instock' ),
	},
	availabilitytext: {
		type: 'string',
		default: __( 'Availability' ),
	},
	contentVrPadding: {
		type: 'number',
		default: 15,
	},
	contentHrPadding: {
		type: 'number',
		default: 50,
	},
	star_gap: {
		type: 'number',
		default: 100,
	},
	contentColor: {
		type: 'string',
		default: '',
	},
	author: {
		type: 'string',
		default: '',
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',
	},
	headFontSubset: {
		type: 'string',
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
	},
	headFontSize: {
		type: 'number',
	},
	headFontSizeTablet: {
		type: 'number',
	},
	headFontSizeMobile: {
		type: 'number',
	},
	headLineHeight: {
		type: 'number',
	},
	headLineHeightTablet: {
		type: 'number',
	},
	headLineHeightMobile: {
		type: 'number',
	},
	subHeadFontFamily: {
		type: 'string',
		default: '',
	},
	subHeadFontWeight: {
		type: 'string',
	},
	subHeadFontSubset: {
		type: 'string',
	},
	subHeadFontSize: {
		type: 'number',
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
	},
	subHeadFontSizeMobile: {
		type: 'number',
	},
	subHeadLineHeight: {
		type: 'number',
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
	},
	subHeadLineHeightTablet: {
		type: 'number',
	},
	subHeadLineHeightMobile: {
		type: 'number',
	},
	separatorSpace: {
		type: 'number',
		default: 15,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	contentFontFamily: {
		type: 'string',
		default: 'Default',
	},
	contentLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	contentFontWeight: {
		type: 'string',
	},
	contentFontSubset: {
		type: 'string',
	},
	contentFontSize: {
		type: 'number',
	},
	contentFontSizeType: {
		type: 'string',
		default: 'px',
	},
	contentFontSizeTablet: {
		type: 'number',
	},
	contentFontSizeMobile: {
		type: 'number',
	},
	contentLineHeight: {
		type: 'number',
	},
	contentLineHeightType: {
		type: 'string',
		default: 'em',
	},
	contentLineHeightTablet: {
		type: 'number',
	},
	contentLineHeightMobile: {
		type: 'number',
	},
	deviceType: {
		type: 'string',
		default: 'Desktop',
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
	},
};

const deprecated = [
	{
		attributes: blockAttributes,
		save: function save( props ) {
			const { attributes, className } = props;

			const {
				enableSchema,
				rTitle,
				rContent,
				mainimage,
				rAuthor,
				headingTag,
				starCount,
				ID,
				parts,
				summaryTitle,
				summaryDescription,
				inactiveStarColor,
				activeStarColor,
				selectedStarColor,
				starOutlineColor,
				schema,
				block_id,
				showAuthor,
				showFeature,
				enableDescription,
				enableImage,
				ctaTarget,
				ctaLink,
			} = attributes;

			const newAverage = parts.map( ( i ) => i.value ).reduce( ( total, v ) => total + v ) / parts.length;

			let url_chk = '';
			let title = '';
			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				url_chk = attributes.mainimage.url;
				title = attributes.mainimage.title;
			}

			let url = '';
			if ( '' !== url_chk ) {
				let size = attributes.mainimage.sizes;
				let imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = url_chk;
				}
			}

			let image_icon_html = '';

			if ( mainimage && mainimage.url ) {
				image_icon_html = <img className="uagb-howto__source-image" src={ url } title={ title } />;
			}

			let rel = 'noopener noreferrer';
			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-ratings__outer-wrap',
						`uagb-block-${ block_id.substr( 0, 8 ) }`
					) }
				>
					{ enableSchema && <script type="application/ld+json">{ schema }</script> }
					<div className="uagb_review_block">
						<a
							href={ ctaLink }
							className={ classnames( 'uagb-rating-link-wrapper' ) }
							target={ target }
							rel={ rel }
						>
							<RichText.Content value={ rTitle } className="uagb-rating-title" tagName={ headingTag } />
						</a>
						{ enableDescription === true && (
							<RichText.Content tagName="p" value={ rContent } className="uagb-rating-desc" />
						) }
						{ showAuthor === true && (
							<RichText.Content tagName="p" value={ rAuthor } className="uagb-rating-author" />
						) }
						{ enableImage === true && <div className="uagb-rating__source-wrap">{ image_icon_html }</div> }
						{ parts.map(
							( j, i ) =>
								showFeature === true && (
									<div className="uagb_review_entry">
										<RichText.Content tagName="div" value={ j.label } />
										<div
											key={ i }
											style={ {
												marginLeft: 'auto',
												minWidth: parts.length > 1 ? 120 : 100,
											} }
										>
											<Stars
												id={ `${ i }` }
												key={ i }
												value={ j.value }
												limit={ starCount }
												inactiveStarColor={ inactiveStarColor }
												activeStarColor={ activeStarColor }
												selectedStarColor={ selectedStarColor }
												starOutlineColor={ starOutlineColor }
											/>
										</div>
									</div>
								)
						) }
						<div className="uagb_review_summary">
							<RichText.Content
								className="uagb_review_summary_title"
								tagName="p"
								value={ summaryTitle }
							/>
							<div className="uagb_review_overall_value">
								<RichText.Content
									className="uagb_review_summary_desc"
									tagName="p"
									value={ summaryDescription }
								/>
								<div className="uagb_review_average">
									<span className="uagb_review_rating">{ Math.round( newAverage * 10 ) / 10 }</span>
									<Stars
										id={ `${ ID }-average` }
										className="uagb_review_average_stars"
										onHover={ () => null }
										onClick={ () => null }
										value={ newAverage }
										limit={ starCount }
										inactiveStarColor={ inactiveStarColor }
										activeStarColor={ activeStarColor }
										selectedStarColor={ selectedStarColor }
										starOutlineColor={ starOutlineColor }
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save: function save( props ) {
			const { attributes, className } = props;

			const {
				enableSchema,
				rTitle,
				rContent,
				mainimage,
				rAuthor,
				headingTag,
				starCount,
				ID,
				parts,
				summaryTitle,
				summaryDescription,
				inactiveStarColor,
				activeStarColor,
				selectedStarColor,
				starOutlineColor,
				schema,
				block_id,
				showAuthor,
				showFeature,
				enableDescription,
				enableImage,
				ctaTarget,
				ctaLink,
			} = attributes;

			const newAverage = parts.map( ( i ) => i.value ).reduce( ( total, v ) => total + v ) / parts.length;

			let urlChk = '';
			let title = '';
			let defaultedAlt = '';

			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
				title = attributes.mainimage.title;
				defaultedAlt = props.attributes.mainimage?.alt ? props.attributes.mainimage?.alt : '';
			}

			let url = '';
			if ( '' !== urlChk ) {
				const size = attributes.mainimage.sizes;
				const imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = urlChk;
				}
			}

			let imageIconHtml = '';

			if ( mainimage && mainimage.url ) {
				imageIconHtml = (
					<img className="uagb-howto__source-image" src={ url } title={ title } alt={ defaultedAlt } />
				);
			}

			const rel = 'noopener noreferrer';
			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-ratings__outer-wrap',
						`uagb-block-${ block_id.substr( 0, 8 ) }`
					) }
				>
					{ enableSchema && <script type="application/ld+json">{ schema }</script> }
					<div className="uagb_review_block">
						<a
							href={ ctaLink }
							className={ classnames( 'uagb-rating-link-wrapper' ) }
							target={ target }
							rel={ rel }
						>
							<RichText.Content value={ rTitle } className="uagb-rating-title" tagName={ headingTag } />
						</a>
						{ enableDescription === true && (
							<RichText.Content tagName="p" value={ rContent } className="uagb-rating-desc" />
						) }
						{ showAuthor === true && (
							<RichText.Content tagName="p" value={ rAuthor } className="uagb-rating-author" />
						) }
						{ enableImage === true && <div className="uagb-rating__source-wrap">{ imageIconHtml }</div> }
						{ parts.map(
							( j, i ) =>
								showFeature === true && (
									<div className="uagb_review_entry">
										<RichText.Content tagName="div" value={ j.label } />
										<div
											key={ i }
											style={ {
												marginLeft: 'auto',
												minWidth: parts.length > 1 ? 120 : 100,
											} }
										>
											<DeprecatedStars
												id={ `${ i }` }
												key={ i }
												value={ j.value }
												limit={ starCount }
												inactiveStarColor={ inactiveStarColor }
												activeStarColor={ activeStarColor }
												selectedStarColor={ selectedStarColor }
												starOutlineColor={ starOutlineColor }
											/>
										</div>
									</div>
								)
						) }
						<div className="uagb_review_summary">
							<RichText.Content
								className="uagb_review_summary_title"
								tagName="p"
								value={ summaryTitle }
							/>
							<div className="uagb_review_overall_value">
								<RichText.Content
									className="uagb_review_summary_desc"
									tagName="p"
									value={ summaryDescription }
								/>
								<div className="uagb_review_average">
									<span className="uagb_review_rating">{ Math.round( newAverage * 10 ) / 10 }</span>
									<DeprecatedStars
										id={ `${ ID }-average` }
										className="uagb_review_average_stars"
										onHover={ () => null }
										onClick={ () => null }
										value={ newAverage }
										limit={ starCount }
										inactiveStarColor={ inactiveStarColor }
										activeStarColor={ activeStarColor }
										selectedStarColor={ selectedStarColor }
										starOutlineColor={ starOutlineColor }
									/>
								</div>
							</div>
						</div>
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
				enableSchema,
				rTitle,
				rContent,
				mainimage,
				rAuthor,
				headingTag,
				starCount,
				parts,
				summaryTitle,
				summaryDescription,
				inactiveStarColor,
				activeStarColor,
				selectedStarColor,
				starOutlineColor,
				schema,
				block_id,
				showAuthor,
				showFeature,
				enableDescription,
				enableImage,
				ctaTarget,
				ctaLink,
			} = attributes;

			const newAverage = parts.map( ( i ) => i.value ).reduce( ( total, v ) => total + v ) / parts.length;

			let urlChk = '';
			let title = '';
			let defaultedAlt = '';

			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
				title = attributes.mainimage.title;
				defaultedAlt = props.attributes.mainimage?.alt ? props.attributes.mainimage?.alt : '';
			}

			let url = '';
			if ( '' !== urlChk ) {
				const size = attributes.mainimage.sizes;
				const imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = urlChk;
				}
			}

			let imageIconHtml = '';

			if ( mainimage && mainimage.url ) {
				imageIconHtml = (
					<img className="uagb-howto__source-image" src={ url } title={ title } alt={ defaultedAlt } />
				);
			}

			const rel = 'noopener noreferrer';
			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-ratings__outer-wrap',
						`uagb-block-${ block_id.substr( 0, 8 ) }`
					) }
				>
					{ enableSchema && <script type="application/ld+json">{ schema }</script> }
					<div className="uagb_review_block">
						<a
							href={ ctaLink }
							className={ classnames( 'uagb-rating-link-wrapper' ) }
							target={ target }
							rel={ rel }
						>
							<RichText.Content value={ rTitle } className="uagb-rating-title" tagName={ headingTag } />
						</a>
						{ enableDescription === true && (
							<RichText.Content tagName="p" value={ rContent } className="uagb-rating-desc" />
						) }
						{ showAuthor === true && (
							<RichText.Content tagName="p" value={ rAuthor } className="uagb-rating-author" />
						) }
						{ enableImage === true && <div className="uagb-rating__source-wrap">{ imageIconHtml }</div> }
						{ parts.map(
							( j, i ) =>
								showFeature === true && (
									<div className="uagb_review_entry">
										<RichText.Content tagName="div" value={ j.label } />
										<div
											key={ i }
											style={ {
												marginLeft: 'auto',
												minWidth: parts.length > 1 ? 120 : 100,
											} }
										>
											<DeprecatedStarsV_2_0_13
												id={ `${ block_id.substr( 0, 8 ) }-${ i }` }
												key={ i }
												value={ j.value }
												limit={ starCount }
												inactiveStarColor={ inactiveStarColor }
												activeStarColor={ activeStarColor }
												selectedStarColor={ selectedStarColor }
												starOutlineColor={ starOutlineColor }
											/>
										</div>
									</div>
								)
						) }
						<div className="uagb_review_summary">
							<RichText.Content
								className="uagb_review_summary_title"
								tagName="p"
								value={ summaryTitle }
							/>
							<div className="uagb_review_overall_value">
								<RichText.Content
									className="uagb_review_summary_desc"
									tagName="p"
									value={ summaryDescription }
								/>
								<div className="uagb_review_average">
									<span className="uagb_review_rating">{ Math.round( newAverage * 10 ) / 10 }</span>
									<DeprecatedStarsV_2_0_13
										id={ `${ block_id.substr( 0, 8 ) }-average` }
										className="uagb_review_average_stars"
										onHover={ () => null }
										onClick={ () => null }
										value={ newAverage }
										limit={ starCount }
										inactiveStarColor={ inactiveStarColor }
										activeStarColor={ activeStarColor }
										selectedStarColor={ selectedStarColor }
										starOutlineColor={ starOutlineColor }
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
