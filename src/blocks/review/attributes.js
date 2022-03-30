/**
 * BLOCK: UAGB Review Block Attributes
 */
import { __ } from '@wordpress/i18n';

const attributes = {
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
		default: 'Spectra: Gutenberg Blocks',
	},
	rContent: {
		type: 'string',
		default: 'Whether you’re a beginner, marketer, web designer or developer, Spectra includes all the tools and resources you can trust to succeed online.',
	},
	rAuthor: {
		type: 'string',
		default: '– Brainstorm Force',
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
			url:`${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`
		},
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
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
		default: '[{"label":"Feature #1","value":5},{"label":"Feature #2","value":5},{"label":"Feature #3","value":5}]',
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
		default: 'Whether you’re a beginner, marketer, web designer or developer, Spectra includes all the tools and resources you can trust to succeed online.',
	},
	callToActionText: {
		type: 'string',
		default: '',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	inactiveStarColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'icon-unmarked-color'
		},
	},
	activeStarColor: {
		type: 'string',
		default: '#eeee00',
		UAGCopyPaste: {
			styleType: 'icon-marked-color'
		},
	},
	authorColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'author-color'
		},
	},
	summaryColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	titleAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
	},
	authorAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'author-align'
		},
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
		UAGCopyPaste: {
			styleType: 'icon-outline-color'
		},
		default: '#000000',
	},
	starActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
		default: '#ccd6df',
	},
	imageSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
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
		default: true,
	},
	showAuthor: {
		type: 'boolean',
		default: true,
	},
	starSize: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
	},
	starColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
		default: '#f0ad4e',
	},
	selectedStars: {
		type: 'number',
		default: 0,
	},
	starAlign: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-align'
		},
		default: 'left',
	},
	descColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
		default: '',
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
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
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding'
		},
		default: 15,
	},
	contentHrPadding: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding'
		},
	},
	topPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-top-padding'
		},
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-bottom-padding'
		},
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-right-padding'
		},
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-left-padding'
		},
	},
	//Mobile
	paddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-top-padding-mobile'
		},
	},
	paddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-bottom-padding-mobile'
		},
	},
	paddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-right-padding-mobile'
		},
	},
	paddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-left-padding-mobile'
		},
	},
	//Tablet
	paddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-top-padding-tablet'
		},
	},
	paddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-bottom-padding-tablet'
		},
	},
	paddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-right-padding-tablet'
		},
	},
	paddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-left-padding-tablet'
		},
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'overall-padding-unit'
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'overall-padding-unit-mobile'
		},
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'overall-padding-unit-tablet'
		},
	},
	star_gap: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	contentColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	author: {
		type: 'string',
		default: '',
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	headFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	subHeadFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: '',
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
		default: 'normal',
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	separatorSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		},
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},
	contentFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	contentLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	contentFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	contentFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
		default: 'normal',
	},
	contentTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	contentDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	contentFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	contentFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	contentFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	contentFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	contentLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	contentLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	contentLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	contentLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
