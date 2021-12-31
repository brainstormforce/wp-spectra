/**
 * BLOCK: UAGB Timeline Attributes
 */

import { __ } from '@wordpress/i18n';

const itemCount = 5;

const item = [];
const dateArr = [];

for ( let i = 1; i <= itemCount; i++ ) {
	item.push( {
		time_heading:
			__( 'Timeline Heading ', 'ultimate-addons-for-gutenberg' ) + i,
		time_desc: __(
			'This is Timeline description, you can change me anytime click here ',
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
	align: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	separatorBg: {
		type: 'string',
		default: '#eee',
		isUAGStyle: true,
	},
	backgroundColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#eee',
	},
	separatorColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#eee',
	},
	separatorFillColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#0693e3',
	},
	separatorBorder: {
		type: 'string',
		isUAGStyle: true,
		default: '#eee',
	},
	borderFocus: {
		type: 'string',
		isUAGStyle: true,
		default: '#0693e3',
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	horizontalSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	verticalSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
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
	headLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	timelinAlignment: {
		type: 'string',
		isUAGStyle: true,
		default: 'center',
	},
	arrowlinAlignment: {
		type: 'string',
		isUAGStyle: true,
		default: 'center',
	},
	subHeadFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	headSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	separatorwidth: {
		type: 'number',
		isUAGStyle: true,
		default: 3,
	},
	borderwidth: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	iconFocus: {
		type: 'string',
		isUAGStyle: true,
		default: '#fff',
	},
	iconBgFocus: {
		type: 'string',
		isUAGStyle: true,
		default: '#0693e3',
	},
	dateColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#333',
	},
	dateFontsizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	dateFontsize: {
		type: 'number',
		isUAGStyle: true,
	},
	dateFontsizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	dateFontsizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	dateFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	dateFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	dateFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	dateTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	dateDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	dateLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	dateLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	dateLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	dateLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	dateLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	connectorBgsize: {
		type: 'number',
		isUAGStyle: true,
		default: 35,
	},
	subHeadSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},
	dateBottomspace: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
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
		isUAGStyle: true,
	},
	bgPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	iconSize: {
		type: 'number',
		isUAGStyle: true,
		default: 12,
	},
	icon: {
		type: 'string',
		default: 'fab fa fa-calendar-alt',
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
		isUAGStyle: true,
	},
	rightMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	topMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	marginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobileMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	leftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
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
	leftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
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
	paddingLink: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
