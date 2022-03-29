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
		isUAGStyle: true,
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
	callToActionBackColor: {
		type: 'string',
		default: '#f63d3d',
		isUAGStyle: true,
	},
	callToActionForeColor: {
		type: 'string',
		default: '#ffffff',
		isUAGStyle: true,
	},
	inactiveStarColor: {
		type: 'string',
		default: '#888888',
		isUAGStyle: true,
	},
	activeStarColor: {
		type: 'string',
		default: '#eeee00',
		isUAGStyle: true,
	},
	authorColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	summaryColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	titleAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	authorAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: '#000000',
	},
	starActiveColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#000000',
	},
	imageSize: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	starColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#ffff00',
	},
	selectedStars: {
		type: 'number',
		default: 0,
	},
	starAlign: {
		type: 'string',
		isUAGStyle: true,
		default: 'left',
	},
	descColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	titleColor: {
		type: 'string',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: 15,
	},
	contentHrPadding: {
		type: 'number',
		default: 50,
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	//Mobile
	paddingTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	//Tablet
	paddingTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	star_gap: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	contentColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	author: {
		type: 'string',
		default: '',
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	contentFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	contentLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	contentFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	contentFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	contentTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	contentDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	contentFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	contentFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	contentFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	contentLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
