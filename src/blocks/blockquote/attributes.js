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
		UAGCopyPaste: {
			styleType: 'desc-align'
		}
	},
	descriptionText: {
		selector: 'div.uagb-blockquote__content',
		default:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	descColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	descFontSize: {
		type: 'number',
		default: 18,
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		}
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		}
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		}
	},
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		}
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		}
	},
	descFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		}
	},
	descFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		}
	},
	descLineHeight: {
		type: 'number',
		default: 1.5,
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		}
	},
	descLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		}
	},
	descLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		}
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		}
	},
	descSpace: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		}
	},
	descSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit'
		}
	},
	author: {
		selector: '.uagb-blockquote__author',
		default: 'Author Name',
	},
	authorColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		}
	},
	authorFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		}
	},
	authorFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		}
	},
	authorFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		}
	},
	authorFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		}
	},
	authorFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
		default: 'Default',
	},
	authorFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		}
	},
	authorFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		}
	},
	authorLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		}
	},
	authorLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		}
	},
	authorLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		}
	},
	authorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts'
		}
	},
	authorSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		}
	},
	authorSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-unit'
		}
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
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorImageWidth: {
		type: 'number',
		default: 40,
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorImageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorImgBorderRadius: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorImgBorderRadiusUnit: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	authorImgPosition: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	stack: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
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
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
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
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnBgColor: {
		type: 'string',
		default: '#1DA1F2',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnBgHoverColor: {
		type: 'string',
		default: '#1DA1F2',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'Default',
	},
	tweetBtnFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetIconSpacing: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetIconSpacingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderColor: {
		type: 'string',
		default: '#abb8c3',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderGap: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	verticalPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	verticalPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteStyle: {
		type: 'string',
		default: 'style_2',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteColor: {
		type: 'string',
		default: '#3d3d3d',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteSize: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotePadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotePaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotePaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBorderRadius: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBorderRadiusUnit: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBgColor: {
		type: 'string',
		default: '#f4f4f4',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBottomMargin: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteRightMargin: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotemobileUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quotetabletUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	quoteBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	borderWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	paddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
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
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	authorTransform:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnTransform:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	descDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	authorDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	tweetBtnDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
};

export default attributes;
