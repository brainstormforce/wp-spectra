import { __ } from '@wordpress/i18n';
const attributes = {
	pauseOnHover            : {
		type    : 'boolean',
		default : true,
	},
	infiniteLoop            : {
		type    : 'boolean',
		default : true,
	},
	transitionSpeed         : {
		type    : 'number',
		default : 500,
	},
	arrowDots               : {
		type    : 'string',
		default : 'arrows_dots',
	},
	autoplay                : {
		type    : 'boolean',
		default : true,
	},
	autoplaySpeed           : {
		type    : 'number',
		default : 2000,
	},
	arrowSize               : {
		type    : 'number',
		default : 24,
		UAGCopyPaste: {
			styleType: 'arrow-size'
		},
	},
	arrowBorderSize         : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'arrow-border-size'
		},
	},
	arrowBorderRadius       : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'arrow-border-radius'
		},
	},
	arrowColor              : {
		type    : 'string',
		default : '#000',
		UAGCopyPaste: {
			styleType: 'arrow-color'
		},
	},
	equalHeight             : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'post-equal-height'
		},
	},
	layoutConfig            : {
		type    : 'array',
		default : ['uagb/post-image','uagb/post-title','uagb/post-meta','uagb/post-excerpt','uagb/post-button']
	},
	post_type               : {
		type    : 'string',
		default : 'carousel',
	},

	inheritFromTheme        : {
		type    : 'boolean',
		default : true,
	},
	block_id                : {
		type    : 'string',
		default : 'not_set',
	},
	categories              : {
		type : 'string',
	},
	postType                : {
		type    : 'string',
		default : 'post',
	},
	postDisplaytext         : {
		type    : 'string',
		default : 'No post found!',
	},
	taxonomyType            : {
		type    : 'string',
		default : 'category',
	},
	postsToShow             : {
		type    : 'number',
		default : 6,
	},
	displayPostDate         : {
		type    : 'boolean',
		default : true,
	},
	displayPostExcerpt      : {
		type    : 'boolean',
		default : true,
	},
	excerptLength           : {
		type    : 'number',
		default : 15,
	},
	displayPostAuthor       : {
		type    : 'boolean',
		default : false,
	},
	displayPostTitle        : {
		type    : 'boolean',
		default : true,
	},
	displayPostComment      : {
		type    : 'boolean',
		default : true,
	},
	displayPostTaxonomy     : {
		type    : 'boolean',
		default : false,
	},
	displayPostImage        : {
		type    : 'boolean',
		default : true,
	},
	imgSize                 : {
		type    : 'string',
		default : 'large',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
	},
	imgPosition             : {
		type    : 'string',
		default : 'top',
		UAGCopyPaste: {
			styleType: 'image-position'
		},
	},
	linkBox                 : {
		type : 'boolean',
	},
	bgOverlayColor          : {
		type    : 'string',
		default : '#ffffff',
		UAGCopyPaste: {
			styleType: 'post-bg-overlay-color'
		},
	},
	overlayOpacity          : {
		type    : 'number',
		default : '50',
		UAGCopyPaste: {
			styleType: 'post-overlay-opacity'
		},
	},
	displayPostLink         : {
		type    : 'boolean',
		default : true,
	},
	newTab                  : {
		type    : 'boolean',
		default : false,
	},
	ctaText                 : {
		type    : 'string',
		default : __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	borderWidth             : {
		type    : 'number',
		default : 1,
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		},
	},
	btnHPadding             : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'btn-h-padding'
		},
	},
	btnVPadding             : {
		type    : 'number',
		default : 5,
		UAGCopyPaste: {
			styleType: 'btn-v-padding'
		},
	},
	borderStyle             : {
		type    : 'string',
		default : 'none',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		},
	},
	borderColor             : {
		type    : 'string',
		default : '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
	},
	borderHColor            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		},
	},
	borderRadius            : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		},
	},
	columns                 : {
		type    : 'number',
		default : 3,
	},
	tcolumns                : {
		type    : 'number',
		default : 2,
	},
	mcolumns                : {
		type    : 'number',
		default : 1,
	},
	align                   : {
		type    : 'string',
		default : 'left',
		UAGCopyPaste: {
			styleType: 'post-align'
		},
	},
	width                   : {
		type    : 'string',
		default : 'wide',
		UAGCopyPaste: {
			styleType: 'post-width'
		},
	},
	order                   : {
		type    : 'string',
		default : 'desc',
	},
	orderBy                 : {
		type    : 'string',
		default : 'date',
	},
	rowGap                  : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	columnGap               : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	bgColor                 : {
		type    : 'string',
		default : '#f6f6f6',
		UAGCopyPaste: {
			styleType: 'post-bg-color'
		},
	},

	// Title Attributes.
	titleColor              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
		default: '',
	},
	titleTag                : {
		type    : 'string',
		default : 'h4',
	},
	titleFontSize           : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	titleFontSizeType       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	titleFontSizeMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	titleFontSizeTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	titleFontFamily         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	titleFontWeight         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	titleFontStyle          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	titleLineHeightType     : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	titleLineHeight         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	titleLineHeightTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	titleLineHeightMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	titleLoadGoogleFonts    : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'main-title-loads-google-fonts'
		},
	},

	// Meta attributes.
	metaColor               : {
		type    : 'string',
		default : '#777777',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	metaFontSize            : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		},
	},
	metaFontSizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
	},
	metaFontSizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		},
	},
	metaFontSizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		},
	},
	metaFontFamily          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
	},
	metaFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		},
	},
	metaFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		},
	},
	metaLineHeightType      : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		},
	},
	metaLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	metaLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	metaLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		},
	},
	metaLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts'
		},
	},

	// Excerpt Attributes.
	excerptColor            : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	excerptFontSize         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	excerptFontSizeType     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
	},
	excerptFontSizeMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	excerptFontSizeTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	excerptFontFamily       : {
		type    : 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default : '',
	},
	excerptFontWeight       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	excerptFontStyle        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	excerptLineHeightType   : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
	},
	excerptLineHeight       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	excerptLineHeightTablet : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	excerptLineHeightMobile : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	excerptLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'lottie-bg-hover-color'
		},
	},
	displayPostContentRadio : {
		type    : 'string',
		default : 'excerpt',
	},

	// CTA attributes.
	ctaColor                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	ctaBgColor              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
	},
	ctaHColor               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	ctaBgHColor             : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		},
	},
	ctaFontSize             : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
	},
	ctaFontSizeType         : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	ctaFontSizeMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
	},
	ctaFontSizeTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
	},
	ctaFontFamily           : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
	},
	ctaFontWeight           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	ctaFontStyle            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
	},
	ctaLineHeightType       : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
	},
	ctaLineHeight           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
	},
	ctaLineHeightTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		},
	},
	ctaLineHeightMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		},
	},
	ctaLoadGoogleFonts      : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		},
	},

	// Spacing Attributes.
	paddingTop              : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding'
		},
	},
	paddingBottom           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingRight            : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding'
		},
	},
	paddingLeft             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding'
		},
	},
	paddingTopMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding-mobile'
		},
	},
	paddingBottomMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding-mobile'
		},
	},
	paddingRightMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding-mobile'
		},
	},
	paddingLeftMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding-mobile'
		},
	},
	paddingBtnTop           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		},
	},
	paddingBtnBottom        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		},
	},
	paddingBtnRight         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		},
	},
	paddingBtnLeft          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		},
	},
	contentPadding          : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'post-content-padding'
		},
	},
	contentPaddingMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-content-padding-mobile'
		},
	},
	ctaBottomSpace          : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin'
		},
	},
	imageBottomSpace        : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin'
		},
	},
	titleBottomSpace        : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'title-bottom-margin'
		},
	},
	metaBottomSpace         : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
	},
	excerptBottomSpace      : {
		type    : 'number',
		default : 25,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
	},
	// Exclude Current Post.
	excludeCurrentPost      : {
		type    : 'boolean',
		default : false,
	},
	titleTransform          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	metaTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	excerptTransform        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-trasnsform'
		},
	},
	ctaTransform            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	titleDecoration         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	metaDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		},
	},
	excerptDecoration       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	ctaDecoration           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	contentPaddingUnit           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-content-padding-unit'
		},
	},
	rowGapUnit                  : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-unit'
		},
	},
	columnGapUnit           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-unit'
		},
	},
	excerptBottomSpaceUnit  : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit'
		},
	},
	paginationSpacingUnit   : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'pagination-bottom-margin-unit'
		},
	},
	imageBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-unit'
		},
	},
	titleBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-unit'
		},
	},
	metaBottomSpaceUnit     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-unit'
		},
	},
	ctaBottomSpaceUnit      : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-unit'
		},
	},
	paddingBtnUnit          : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
	},
	mobilePaddingBtnUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
	},
	tabletPaddingBtnUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		},
	},
	paddingUnit             : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit'
		},
	},
	mobilePaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit-mobile'
		},
	},
	tabletPaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-padding-unit-tablet'
		},
	},
	postsOffset: {
		type    : 'number',
		default : 0,
	}
}

export default attributes;
