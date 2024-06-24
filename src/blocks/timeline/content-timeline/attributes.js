/**
 * BLOCK: UAGB Timeline Attributes
 */

import { __ } from '@wordpress/i18n';

const itemCount = 5;

const item = [];
const dateArr = [];

for ( let i = 1; i <= itemCount; i++ ) {
	item.push( {
		time_heading: __( 'Timeline Heading ', 'ultimate-addons-for-gutenberg' ) + i,
		time_desc: __(
			'This is timeline description. Please click here to change this description.',
			'ultimate-addons-for-gutenberg'
		),
	} );

	const j = i - 1;
	let today = new Date( '1/1/2019' );
	let dd = today.getDate();
	let mm = today.getMonth() + 1; //January is 0!
	const yyyy = today.getFullYear() - j;

	if ( dd < 10 ) {
		dd = '0' + dd;
	}

	if ( mm < 10 ) {
		mm = '0' + mm;
	}

	today = mm + '/' + dd + '/' + yyyy;

	dateArr.push( {
		title: today,
	} );
}

const attributes = {
	content_class: {
		type: 'string',
	},
	tm_content: {
		type: 'array',
		default: item,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	dateFormat: {
		type: 'string',
		default: 'F j, Y',
	},
	blockName: {
		type: 'string',
		default: 'content-timeline',
	},
	align: {
		type: 'string',
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
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
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
		UAGCopyPaste: {
			styleType: 'post-bg-color',
		},
		default: '#eee',
	},
	separatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'connector-color',
		},
		default: '#eee',
	},
	separatorFillColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'connector-fill-color',
		},
		default: '#0693e3',
	},
	separatorBorder: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'connector-border-color',
		},
		default: '#eee',
	},
	borderFocus: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-border-focus-color',
		},
		default: '#0693e3',
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	horizontalSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
		default: 10,
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
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
		default: 15,
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
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
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
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
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
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
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
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	timelinAlignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
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
		UAGCopyPaste: {
			styleType: 'arrowline-alignment',
		},
		default: 'center',
	},
	subHeadFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
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
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
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
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
		default: 'em',
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
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
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
	separatorwidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'connector-width',
		},
		default: 3,
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
		UAGCopyPaste: {
			styleType: 'icon-focus-color',
		},
		default: '#fff',
	},
	iconBgFocus: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-focus-color',
		},
		default: '#0693e3',
	},
	dateColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
		default: '#333',
	},
	dateFontsizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
		default: 'px',
	},
	dateFontsize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	dateFontsizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	dateFontsizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	dateFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
	},
	dateFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	dateFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	dateFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	dateFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
		default: 'Default',
	},
	dateFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	dateFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	dateTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
	},
	dateDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	dateLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
		default: 'em',
	},
	dateLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	dateLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	dateLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	dateLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
	},
	connectorBgsize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'connector-bg-size',
		},
		default: 35,
	},
	connectorBgsizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'connector-bg-size-tablet',
		},
	},
	connectorBgsizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'connector-bg-size-mobile',
		},
	},
	subHeadSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-space',
		},
		default: 5,
	},
	dateBottomspace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-space',
		},
		default: 5,
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
	block_id: {
		type: 'string',
		default: '0',
	},
	timelineItem: {
		type: 'number',
		default: itemCount,
	},
	tm_client_id: {
		type: 'string',
		default: 'not_set',
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
		UAGCopyPaste: {
			styleType: 'post-bg-padding',
		},
		default: 20,
	},
	iconSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
		default: 12,
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	icon: {
		type: 'string',
		default: 'calendar-days',
	},
	t_date: {
		type: 'array',
		default: dateArr,
	},
	displayPostDate: {
		type: 'boolean',
		default: true,
	},
	stack: {
		type: 'string',
		default: 'tablet',
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
};

export default attributes;
