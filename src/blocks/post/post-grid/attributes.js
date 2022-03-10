import { __ } from '@wordpress/i18n';
const attributes = {
	equalHeight                 : {
		type    : 'boolean',
		default : true,
	},
	postPagination              : {
		type    : 'boolean',
		default : false,
	},
	pageLimit                   : {
		type    : 'number',
		default : 10,
	},
	paginationBgActiveColor     : {
		type    : 'string',
		default : '#e4e4e4',
		UAGCopyPaste: {
			styleType: 'pagination-bg-active-color'
		},
	},
	paginationActiveColor       : {
		type    : 'string',
		default : '#333333',
		UAGCopyPaste: {
			styleType: 'pagination-active-color'
		},
	},
	paginationBgColor           : {
		type    : 'string',
		default : '#e4e4e4',
		UAGCopyPaste: {
			styleType: 'pagination-bg-color'
		},
	},
	paginationColor             : {
		type    : 'string',
		default : '#777777',
		UAGCopyPaste: {
			styleType: 'pagination-color'
		},
	},
	paginationMarkup            : {
		type    : 'string',
		default : '',
	},
	paginationLayout            : {
		type    : 'string',
		default : 'filled',
		UAGCopyPaste: {
			styleType: 'pagination-layout'
		},
	},
	paginationBorderActiveColor : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'pagination-border-active-color'
		},
	},
	paginationBorderColor       : {
		type    : 'string',
		default : '#888686',
		UAGCopyPaste: {
			styleType: 'pagination-border-color'
		},
	},
	paginationBorderRadius      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'pagination-border-radius'
		},
	},
	paginationBorderSize        : {
		type    : 'number',
		default : 1,
		UAGCopyPaste: {
			styleType: 'pagination-border-size'
		},
	},
	paginationSpacing           : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'pagination-spacing'
		},
	},
	paginationAlignment         : {
		type    : 'string',
		default : 'left',
		UAGCopyPaste: {
			styleType: 'pagination-alignment'
		},
	},
	paginationPrevText          : {
		type    : 'string',
		default : '« Previous',
	},
	paginationNextText          : {
		type    : 'string',
		default : 'Next »',
	},
	layoutConfig                : {
		type    : 'array',
		default: [ 'uagb/post-image' ,'uagb/post-title' ,'uagb/post-meta' ,'uagb/post-excerpt' ,'uagb/post-button']
	},
	post_type                   : {
		type    : 'string',
		default : 'grid',
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
			styleType: 'bg-overlay-color'
		},
	},
	overlayOpacity          : {
		type    : 'number',
		default : '50',
		UAGCopyPaste: {
			styleType: 'overlay-opacity'
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
		UAGCopyPaste: {
			styleType: 'post-border-width'
		},
		default : 1,
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
			styleType: 'post-bottom-padding'
		},
	},
	width                   : {
		type    : 'string',
		default : 'wide',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
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
			styleType: 'post-bottom-padding'
		},
	},
	columnGap               : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	bgColor                 : {
		type    : 'string',
		default : '#f6f6f6',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},

	// Title Attributes.
	titleColor              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleTag                : {
		type    : 'string',
		default : 'h4',
	},
	titleFontSize           : {
		type    : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
		default : '',
	},
	titleFontSizeType       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleFontSizeMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleFontSizeTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleFontFamily         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleFontWeight         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleFontStyle          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleLineHeightType     : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleLineHeight         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleLineHeightTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleLineHeightMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleLoadGoogleFonts    : {
		type    : 'boolean',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
		default : false,
	},

	// Meta attributes.
	metaColor               : {
		type    : 'string',
		default : '#777777',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontSize            : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontSizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontSizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontSizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontFamily          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaLineHeightType      : {
		type    : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
		default : 'em',
	},
	metaLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},

	// Excerpt Attributes.
	excerptColor            : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontSize         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontSizeType     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontSizeMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontSizeTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontFamily       : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontWeight       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptFontStyle        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptLineHeightType   : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptLineHeight       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptLineHeightTablet : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptLineHeightMobile : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
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
			styleType: 'post-bottom-padding'
		},
	},
	ctaBgColor              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaHColor               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaBgHColor             : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontSize             : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontSizeType         : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontSizeMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontSizeTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontFamily           : {
		type    : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
		default : '',
	},
	ctaFontWeight           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaFontStyle            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaLineHeightType       : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaLineHeight           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaLineHeightTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaLineHeightMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaLoadGoogleFonts      : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},

	// Spacing Attributes.
	paddingTop              : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
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
			styleType: 'post-bottom-padding'
		},
	},
	paddingLeft             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingTopMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBottomMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingRightMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingLeftMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBtnTop           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBtnBottom        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBtnRight         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBtnLeft          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	contentPadding          : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	contentPaddingMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaBottomSpace          : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	imageBottomSpace        : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleBottomSpace        : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaBottomSpace         : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptBottomSpace      : {
		type    : 'number',
		default : 25,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
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
			styleType: 'post-bottom-padding'
		},
	},
	metaTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptTransform        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaTransform            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleDecoration         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptDecoration       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaDecoration           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	contentPaddingUnit           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	rowGapUnit                  : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	columnGapUnit           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	excerptBottomSpaceUnit  : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paginationSpacingUnit   : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	imageBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	titleBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	metaBottomSpaceUnit     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	ctaBottomSpaceUnit      : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	paddingBtnUnit          : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	mobilePaddingBtnUnit    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	tabletPaddingBtnUnit    : {
		type    : 'string',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
		default : 'px',
	},
	paddingUnit             : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	mobilePaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	tabletPaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding'
		},
	},
	postsOffset: {
		type    : 'number',
		default : 0,
	}
}

export default attributes;
