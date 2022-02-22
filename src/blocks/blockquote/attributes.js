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
		isUAGStyle: true,
	},
	descriptionText: {
		selector: 'div.uagb-blockquote__content',
		default:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	descColor: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontSize: {
		type: 'number',
		default: 18,
		isUAGStyle: true,
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	descFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	descFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	descLineHeight: {
		type: 'number',
		default: 1.5,
		isUAGStyle: true,
	},
	descLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	descSpace: {
		type: 'number',
		default: 25,
		isUAGStyle: true,
	},
	descSpaceUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	author: {
		selector: '.uagb-blockquote__author',
		default: 'Author Name',
	},
	authorColor: {
		type: 'string',
		default: '#888888',
		isUAGStyle: true,
	},
	authorFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	authorFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	authorFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	authorFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	authorFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	authorFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	authorFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	authorLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	authorLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	authorLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	authorLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	authorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	authorSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	authorSpaceUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	authorImageWidth: {
		type: 'number',
		default: 40,
		isUAGStyle: true,
	},
	authorImageWidthUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	authorImgBorderRadius: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	authorImgBorderRadiusUnit: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	authorImgPosition: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	stack: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
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
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	tweetBtnColor: {
		type: 'string',
		default: '#fff',
		isUAGStyle: true,
	},
	tweetBtnBgColor: {
		type: 'string',
		default: '#1DA1F2',
		isUAGStyle: true,
	},
	tweetBtnHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	tweetBtnBgHoverColor: {
		type: 'string',
		default: '#1DA1F2',
		isUAGStyle: true,
	},
	tweetBtnFontSize: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	tweetBtnFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tweetBtnFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tweetBtnFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tweetBtnFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	tweetBtnFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	tweetBtnFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	tweetBtnLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	tweetBtnLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	tweetBtnLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	tweetBtnLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tweetBtnLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	tweetBtnHrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	tweetBtnVrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	tweetIconSpacing: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	tweetIconSpacingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		default: '#abb8c3',
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		default: 4,
		isUAGStyle: true,
	},
	borderGap: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	borderGapUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	verticalPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	verticalPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quoteStyle: {
		type: 'string',
		default: 'style_2',
		isUAGStyle: true,
	},
	quoteColor: {
		type: 'string',
		default: '#3d3d3d',
		isUAGStyle: true,
	},
	quoteSize: {
		type: 'number',
		default: 25,
		isUAGStyle: true,
	},
	quoteSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quoteSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quotePadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	quoteUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quotePaddingType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quotePaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quotePaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteBorderRadius: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	quoteBorderRadiusUnit: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	quoteBgColor: {
		type: 'string',
		default: '#f4f4f4',
		isUAGStyle: true,
	},
	quoteTopMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteBottomMargin: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	quoteLeftMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteRightMargin: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	quoteTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quoteRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	quotemobileUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quotetabletUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	quoteHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	quoteBgHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderWidthUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingBtnTop: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRight: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
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
		type: 'string',
		isUAGStyle: true,
	},
	authorTransform:{
		type: 'string',
		isUAGStyle: true,
	},
	tweetBtnTransform:{
		type: 'string',
		isUAGStyle: true,
	},
	descDecoration:{
		type: 'string',
		isUAGStyle: true,
	},
	authorDecoration:{
		type: 'string',
		isUAGStyle: true,
	},
	tweetBtnDecoration:{
		type: 'string',
		isUAGStyle: true,
	},
};

export default attributes;
