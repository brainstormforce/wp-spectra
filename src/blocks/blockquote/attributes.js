/**
 * BLOCK: UAGB Quote Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	skinStyle: {
		type: 'string',
		default: 'border',
	},
	align: {
		type: 'string',
		default: 'left',
	},
	descriptionText: {
		selector: 'div.uagb-blockquote__content',
		default:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	descColor: {
		type: 'string',
	},
	descFontSize: {
		type: 'number',
		default: 18,
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
	},
	descFontSizeTablet: {
		type: 'number',
	},
	descFontSizeMobile: {
		type: 'number',
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
	},
	descFontStyle: {
		type: 'string',
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
	},
	descLineHeight: {
		type: 'number',
		default: 1.5,
	},
	descLineHeightTablet: {
		type: 'number',
	},
	descLineHeightMobile: {
		type: 'number',
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	descSpace: {
		type: 'number',
		default: 25,
	},
	descSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	author: {
		selector: '.uagb-blockquote__author',
		default: 'Author Name',
	},
	authorColor: {
		type: 'string',
		default: '#888888',
	},
	authorFontSize: {
		type: 'number',
	},
	authorFontSizeType: {
		type: 'string',
		default: 'px',
	},
	authorFontSizeTablet: {
		type: 'number',
	},
	authorFontSizeMobile: {
		type: 'number',
	},
	authorFontFamily: {
		type: 'string',
		default: 'Default',
	},
	authorFontWeight: {
		type: 'string',
	},
	authorFontStyle: {
		type: 'string',
	},
	authorLineHeightType: {
		type: 'string',
		default: 'em',
	},
	authorLineHeight: {
		type: 'number',
	},
	authorLineHeightTablet: {
		type: 'number',
	},
	authorLineHeightMobile: {
		type: 'number',
	},
	authorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	authorSpace: {
		type: 'number',
		default: 10,
	},
	authorSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	authorImage: {
		type: 'object',
		default: {
			url: '',
			alt: 'Author Image',
		},
	},
	authorImageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	authorImageWidth: {
		type: 'number',
		default: 40,
	},
	authorImageWidthUnit: {
		type: 'string',
		default: 'px',
	},
	authorImgBorderRadius: {
		type: 'number',
		default: 100,
	},
	authorImgBorderRadiusUnit: {
		type: 'string',
		default: '%',
	},
	authorImgPosition: {
		type: 'string',
		default: 'left',
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	enableTweet: {
		type: 'boolean',
		default: false,
	},
	iconView: {
		type: 'string',
		default: 'icon_text',
	},
	iconSkin: {
		type: 'string',
		default: 'classic',
	},
	iconLabel: {
		type: 'string',
		default: 'Tweet',
	},
	iconShareVia: {
		type: 'string',
		default: '',
	},
	iconTargetUrl: {
		type: 'string',
		default: 'current',
	},
	customUrl: {
		type: 'string',
	},
	tweetLinkColor: {
		type: 'string',
		default: '#1DA1F2',
	},
	tweetBtnColor: {
		type: 'string',
		default: '#fff',
	},
	tweetBtnBgColor: {
		type: 'string',
		default: '#1DA1F2',
	},
	tweetBtnHoverColor: {
		type: 'string',
	},
	tweetBtnBgHoverColor: {
		type: 'string',
		default: '#1DA1F2',
	},
	tweetBtnFontSize: {
		type: 'number',
		default: 15,
	},
	tweetBtnFontSizeType: {
		type: 'string',
		default: 'px',
	},
	tweetBtnFontSizeTablet: {
		type: 'number',
	},
	tweetBtnFontSizeMobile: {
		type: 'number',
	},
	tweetBtnFontFamily: {
		type: 'string',
		default: 'Default',
	},
	tweetBtnFontWeight: {
		type: 'string',
	},
	tweetBtnFontStyle: {
		type: 'string',
	},
	tweetBtnLineHeightType: {
		type: 'string',
		default: 'em',
	},
	tweetBtnLineHeight: {
		type: 'number',
	},
	tweetBtnLineHeightTablet: {
		type: 'number',
	},
	tweetBtnLineHeightMobile: {
		type: 'number',
	},
	tweetBtnLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	tweetBtnHrPadding: {
		type: 'number',
		default: 10,
	},
	tweetBtnVrPadding: {
		type: 'number',
		default: 10,
	},
	tweetIconSpacing: {
		type: 'number',
		default: 10,
	},
	tweetIconSpacingUnit: {
		type: 'string',
		default: 'px',
	},
	borderColor: {
		type: 'string',
		default: '#abb8c3',
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number',
		default: 4,
	},
	borderGap: {
		type: 'number',
		default: 15,
	},
	borderGapUnit: {
		type: 'string',
		default: 'px',
	},
	verticalPadding: {
		type: 'number',
	},
	verticalPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	quoteStyle: {
		type: 'string',
		default: 'style_2',
	},
	quoteColor: {
		type: 'string',
		default: '#3d3d3d',
	},
	quoteSize: {
		type: 'number',
		default: 25,
	},
	quoteSizeType: {
		type: 'string',
		default: 'px',
	},
	quoteSizeTablet: {
		type: 'number',
	},
	quoteSizeMobile: {
		type: 'number',
	},
	quotePadding: {
		type: 'number',
		default: 10,
	},
	quoteUnit: {
		type: 'string',
		default: 'px',
	},
	quotePaddingType: {
		type: 'string',
		default: 'px',
	},
	quotePaddingTablet: {
		type: 'number',
	},
	quotePaddingMobile: {
		type: 'number',
	},
	quoteBorderRadius: {
		type: 'number',
		default: 100,
	},
	quoteBorderRadiusUnit: {
		type: 'string',
		default: '%',
	},
	quoteBgColor: {
		type: 'string',
		default: '#f4f4f4',
	},
	quoteTopMargin: {
		type: 'number',
	},
	quoteBottomMargin: {
		type: 'number',
		default: 15,
	},
	quoteLeftMargin: {
		type: 'number',
	},
	quoteRightMargin: {
		type: 'number',
		default: 0,
	},
	quoteTopMarginTablet: {
		type: 'number',
	},
	quoteBottomMarginTablet: {
		type: 'number',
	},
	quoteLeftMarginTablet: {
		type: 'number',
	},
	quoteRightMarginTablet: {
		type: 'number',
	},
	quoteTopMarginMobile: {
		type: 'number',
	},
	quoteBottomMarginMobile: {
		type: 'number',
	},
	quoteLeftMarginMobile: {
		type: 'number',
	},
	quoteRightMarginMobile: {
		type: 'number',
	},
	quotemobileUnit: {
		type: 'string',
		default: 'px',
	},
	quotetabletUnit: {
		type: 'string',
		default: 'px',
	},
	quoteHoverColor: {
		type: 'string',
	},
	quoteBgHoverColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},
	borderWidthUnit: {
		type: 'string',
		default: 'px',
	},
	paddingBtnTop: {
		type: 'number',
	},
	paddingBtnBottom: {
		type: 'number',
	},
	paddingBtnLeft: {
		type: 'number',
	},
	paddingBtnRight: {
		type: 'number',
	},
	paddingBtnTopTablet: {
		type: 'number',
	},
	paddingBtnRightTablet: {
		type: 'number',
	},
	paddingBtnBottomTablet: {
		type: 'number',
	},
	paddingBtnLeftTablet: {
		type: 'number',
	},
	paddingBtnTopMobile: {
		type: 'number',
	},
	paddingBtnRightMobile: {
		type: 'number',
	},
	paddingBtnBottomMobile: {
		type: 'number',
	},
	paddingBtnLeftMobile: {
		type: 'number',
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	btnspacingLink: {
		type: 'boolean',
		default: false,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	descTransform:{
		type: 'string'
	},
	authorTransform:{
		type: 'string'
	},
	tweetBtnTransform:{
		type: 'string'
	},
	descDecoration:{
		type: 'string'
	},
	authorDecoration:{
		type: 'string'
	},
	tweetBtnDecoration:{
		type: 'string'
	},
};

export default attributes;
