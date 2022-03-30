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
			styleType: 'overall-alignment'
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
			styleType: 'author-color'
		}
	},
	authorFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size'
		}
	},
	authorFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-font-size-type'
		}
	},
	authorFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-tablet'
		}
	},
	authorFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-mobile'
		}
	},
	authorFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-family'
		},
		default: 'Default',
	},
	authorFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-weight'
		}
	},
	authorFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-style'
		}
	},
	authorLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'author-line-height-type'
		}
	},
	authorLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height'
		}
	},
	authorLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height-tablet'
		}
	},
	authorLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height-mobile'
		}
	},
	authorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'author-load-google-fonts'
		}
	},
	authorSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin'
		}
	},
	authorSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-type'
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
			styleType: 'author-image-size'
		}
	},
	authorImageWidth: {
		type: 'number',
		default: 40,
		UAGCopyPaste: {
			styleType: 'author-image-width'
		}
	},
	authorImageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-image-width-unit'
		}
	},
	authorImgBorderRadius: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'author-image-border-radius'
		}
	},
	authorImgBorderRadiusUnit: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'author-image-border-radius-unit'
		}
	},
	authorImgPosition: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'author-image-position'
		}
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
		default: 'classic'
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
			styleType: 'btn-color'
		}
	},
	tweetBtnColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	tweetBtnBgColor: {
		type: 'string',
		default: '#1DA1F2',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	tweetBtnHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	tweetBtnBgHoverColor: {
		type: 'string',
		default: '#1DA1F2',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		}
	},
	tweetBtnFontSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	tweetBtnFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-unit'
		}
	},
	tweetBtnFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		}
	},
	tweetBtnFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		}
	},
	tweetBtnFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
		default: 'Default',
	},
	tweetBtnFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-fonr-weight'
		}
	},
	tweetBtnFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	tweetBtnLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		}
	},
	tweetBtnLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		}
	},
	tweetBtnLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		}
	},
	tweetBtnLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		}
	},
	tweetBtnLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		}
	},
	tweetBtnHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-hr-padding'
		}
	},
	tweetBtnVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-vr-padding'
		}
	},
	tweetIconSpacing: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'tweet-icon-spacing'
		}
	},
	tweetIconSpacingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'tweet-icon-spacing-unit'
		}
	},
	borderColor: {
		type: 'string',
		default: '#abb8c3',
		UAGCopyPaste: {
			styleType: 'desc-border-color'
		}
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'desc-border-style'
		}
	},
	borderWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'desc-border-width'
		}
	},
	borderGap: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-border-gap'
		}
	},
	borderGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-border-gap-unit'
		}
	},
	verticalPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding'
		}
	},
	verticalPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-unit'
		}
	},
	quoteStyle: {
		type: 'string',
		default: 'style_2',
	},
	quoteColor: {
		type: 'string',
		default: '#3d3d3d',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	quoteSize: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	quoteSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	quoteSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		}
	},
	quoteSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		}
	},
	quotePadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-padding'
		}
	},
	quoteUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit'
		}
	},
	quotePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit'
		}
	},
	quotePaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-padding-tablet'
		}
	},
	quotePaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-padding-mobile'
		}
	},
	quoteBorderRadius: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'desc-border-radius'
		}
	},
	quoteBorderRadiusUnit: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'desc-border-radius-unit'
		}
	},
	quoteBgColor: {
		type: 'string',
		default: '#f4f4f4',
		UAGCopyPaste: {
			styleType: 'desc-bg-color'
		}
	},
	quoteTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin'
		}
	},
	quoteBottomMargin: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		}
	},
	quoteLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin'
		}
	},
	quoteRightMargin: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'desc-right-margin'
		}
	},
	quoteTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet'
		}
	},
	quoteBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		}
	},
	quoteLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet'
		}
	},
	quoteRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet'
		}
	},
	quoteTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile'
		}
	},
	quoteBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		}
	},
	quoteLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile'
		}
	},
	quoteRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile'
		}
	},
	quotemobileUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile'
		}
	},
	quotetabletUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet'
		}
	},
	quoteHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-hover-color'
		}
	},
	quoteBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-bg-hover-color'
		}
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-border-hover-color'
		}
	},
	borderWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-border-width-unit'
		}
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-top-padding-tablet'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-right-padding-tablet'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-bottom-padding-tablet'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-left-padding-tablet'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-top-padding-mobile'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-right-padding-mobile'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-bottom-padding-mobile'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType:  'btn-left-padding-mobile'
		}
	},
	paddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
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
			styleType: 'desc-transform'
		}
	},
	authorTransform:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-transform'
		}
	},
	tweetBtnTransform:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		}
	},
	descDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		}
	},
	authorDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-decoration'
		}
	},
	tweetBtnDecoration:{
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
