import { __ } from '@wordpress/i18n';

const attributes = {
	// eslint-disable-line no-unused-vars
	blockName: {
		type: 'string',
		default: 'post-timeline',
	},
	inheritFromTheme: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.btn_inherit_from_theme_fallback,
	},
	buttonType: {
		type: 'string',
		default: 'primary',
		UAGCopyPaste: {
			styleType: 'btn-type',
		},
	},
	align: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	readMoreText: {
		type: 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	headingColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	subHeadingColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	separatorBg: {
		type: 'string',
		default: '#eee',
		UAGCopyPaste: {
			styleType: 'connector-bg-color',
		},
	},
	backgroundColor: {
		type: 'string',
		default: '#eee',
		UAGCopyPaste: {
			styleType: 'timeline-bg-color',
		},
	},
	separatorColor: {
		type: 'string',
		default: '#eee',
		UAGCopyPaste: {
			styleType: 'connector-color',
		},
	},
	separatorFillColor: {
		type: 'string',
		default: '#0693e3',
		UAGCopyPaste: {
			styleType: 'connector-fill-color',
		},
	},
	separatorBorder: {
		type: 'string',
		default: '#eee',
		UAGCopyPaste: {
			styleType: 'connector-border-color',
		},
	},
	borderFocus: {
		type: 'string',
		default: '#5cb85c',
		UAGCopyPaste: {
			styleType: 'overall-border-focus-color',
		},
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	horizontalSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	horizontalSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	horizontalSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	horizontalSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	horizontalSpaceUnitTablet: {
		type: 'string',
		default: 'px',
	},
	horizontalSpaceUnitMobile: {
		type: 'string',
		default: 'px',
	},
	verticalSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	verticalSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	verticalSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	verticalSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	verticalSpaceUnitTablet: {
		type: 'string',
		default: 'px',
	},
	verticalSpaceUnitMobile: {
		type: 'string',
		default: 'px',
	},
	timelinAlignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment-desktop',
		},
	},
	timelinAlignmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	timelinAlignmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	arrowlinAlignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'arrowline-alignment',
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	subHeadFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	authorSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	authorSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	authorSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	contentSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	separatorwidth: {
		type: 'number',
		default: 3,
		UAGCopyPaste: {
			styleType: 'connector-width',
		},
	},
	borderwidth: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'overall-border-width',
		},
	},
	iconColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconFocus: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	iconBgFocus: {
		type: 'string',
		default: '#0693e3',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	authorColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	authorFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
	},
	authorFontSize: {
		type: 'number',
		default: 11,
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	authorFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	authorFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	authorFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
	},
	authorFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	authorFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	authorLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
	},
	authorLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	authorLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	authorLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	authorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	ctaFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	ctaFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	ctaLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	ctaLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	ctaLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	ctaLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	dateColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'date-color',
		},
	},
	dateFontsizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'date-font-size-type',
		},
	},
	dateFontsize: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'date-font-size',
		},
	},
	dateFontsizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-tablet',
		},
	},
	dateFontsizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-mobile',
		},
	},
	dateFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'date-font-family',
		},
	},
	dateFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-weight',
		},
	},
	dateFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-style',
		},
	},
	dateLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'date-line-height-type',
		},
	},
	dateLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height',
		},
	},
	dateLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-tablet',
		},
	},
	dateLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-mobile',
		},
	},
	dateLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	connectorBgsize: {
		type: 'number',
		default: 35,
		UAGCopyPaste: {
			styleType: 'connector-bg-size',
		},
	},
	dateBottomspace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'date-bottom-space',
		},
	},
	dateBottomspaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-bottom-space',
		},
	},
	dateBottomspaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-bottom-space',
		},
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	headFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	headFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	categories: {
		type: 'string',
	},
	postType: {
		type: 'string',
		default: 'post',
	},
	taxonomyType: {
		type: 'string',
		default: 'category',
	},
	postsToShow: {
		type: 'number',
		default: 6,
	},
	postsOffset: {
		type: 'number',
		default: 0,
	},
	displayPostDate: {
		type: 'boolean',
		default: true,
	},
	dateFormat: {
		type: 'string',
		default: 'F j, Y',
	},
	displayPostExcerpt: {
		type: 'boolean',
		default: true,
	},
	displayPostAuthor: {
		type: 'boolean',
		default: true,
	},
	displayPostImage: {
		type: 'boolean',
		default: true,
	},
	displayPostLink: {
		type: 'boolean',
		default: true,
	},
	exerptLength: {
		type: 'number',
		default: 15,
	},
	postLayout: {
		type: 'string',
		default: 'grid',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	width: {
		type: 'string',
		default: 'wide',
	},
	order: {
		type: 'string',
		default: 'desc',
	},
	orderBy: {
		type: 'string',
		default: 'date',
	},
	imageSize: {
		type: 'string',
		default: 'large',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	icon: {
		type: 'string',
		default: 'calendar-days',
	},
	borderRadius: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'overall-border-radius',
		},
	},
	borderRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-border-radius',
		},
	},
	borderRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-border-radius',
		},
	},
	bgPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'timeline-bg-padding',
		},
	},
	contentPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-padding',
		},
	},
	iconSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	ctaColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaBackground: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	linkTarget: {
		type: 'boolean',
		default: false,
	},
	// Exclude Current Post.
	excludeCurrentPost: {
		type: 'boolean',
		default: false,
	},
	leftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-margin',
		},
	},
	rightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-margin',
		},
	},
	topMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-margin',
		},
	},
	bottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-margin',
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-margin-tablet',
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-margin-tablet',
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-margin-mobile',
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-margin-mobile',
		},
	},
	marginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-margin-unit',
		},
	},
	mobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-margin-unit-mobile',
		},
	},
	tabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-margin-unit-tablet',
		},
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding',
		},
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding',
		},
	},
	topPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding',
		},
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding-tablet',
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding-tablet',
		},
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding-tablet',
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding-tablet',
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding-mobile',
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding-mobile',
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding-mobile',
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding-mobile',
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit',
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit-mobile',
		},
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit-tablet',
		},
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	authorTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-transform',
		},
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	dateTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-transform',
		},
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	authorDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-decoration',
		},
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	dateDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-decoration',
		},
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	ctaBottomSpacing: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'cta-bottom-spacing',
		},
	},
	ctaBottomSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-bottom-spacing',
		},
	},
	ctaBottomSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-bottom-spacing',
		},
	},
	headTopSpacing: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-top-spacing',
		},
	},
	headTopSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-spacing',
		},
	},
	headTopSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-spacing',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	headLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'head-letter-spacing',
		},
	},
	headLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'head-letter-spacing-tablet',
		},
	},
	headLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'head-letter-spacing-mobile',
		},
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'head-letter-spacing-type',
		},
	},
	subHeadLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'subHead-letter-spacing',
		},
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'subHead-letter-spacing-tablet',
		},
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'subHead-letter-spacing-mobile',
		},
	},
	subHeadLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'subHead-letter-spacing-type',
		},
	},
	dateLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-letter-spacing',
		},
	},
	dateLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-letter-spacing-tablet',
		},
	},
	dateLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-letter-spacing-mobile',
		},
	},
	dateLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'date-letter-spacing-type',
		},
	},
	ctaLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing',
		},
	},
	ctaLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-tablet',
		},
	},
	ctaLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-mobile',
		},
	},
	ctaLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-type',
		},
	},
	authorLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-letter-spacing',
		},
	},
	authorLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-letter-spacing-tablet',
		},
	},
	authorLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-letter-spacing-mobile',
		},
	},
	authorLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-letter-spacing-type',
		},
	},
	allTaxonomyStore: {
		type: 'object',
	},
};

export default attributes;
