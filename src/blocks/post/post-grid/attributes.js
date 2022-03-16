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
		isUAGStyle: true,
	},
	paginationActiveColor       : {
		type    : 'string',
		default : '#333333',
		isUAGStyle: true,
	},
	paginationBgColor           : {
		type    : 'string',
		default : '#e4e4e4',
		isUAGStyle: true,
	},
	paginationColor             : {
		type    : 'string',
		default : '#777777',
		isUAGStyle: true,
	},
	paginationMarkup            : {
		type    : 'string',
		default : '',
	},
	paginationLayout            : {
		type    : 'string',
		default : 'filled',
		isUAGStyle: true,
	},
	paginationBorderActiveColor : {
		type : 'string',
		isUAGStyle: true,
	},
	paginationBorderColor       : {
		type    : 'string',
		default : '#888686',
		isUAGStyle: true,
	},
	paginationBorderRadius      : {
		type : 'number',
		isUAGStyle: true,
	},
	paginationBorderSize        : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	paginationSpacing           : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,
	},
	paginationAlignment         : {
		type    : 'string',
		default : 'left',
		isUAGStyle: true,
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
		default: [ 'uagb/post-image' ,'uagb/post-taxonomy' ,'uagb/post-title' ,'uagb/post-meta' ,'uagb/post-excerpt' ,'uagb/post-button']
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
		isUAGStyle: true,
	},
	imgPosition             : {
		type    : 'string',
		default : 'top',
		isUAGStyle: true,
	},
	linkBox                 : {
		type : 'boolean',
	},
	bgOverlayColor          : {
		type    : 'string',
		default : '#ffffff',
		isUAGStyle: true,
	},
	overlayOpacity          : {
		type    : 'number',
		default : '50',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default : 1,
	},
	btnHPadding             : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},
	btnVPadding             : {
		type    : 'number',
		default : 5,
		isUAGStyle: true,
	},
	borderStyle             : {
		type    : 'string',
		default : 'none',
		isUAGStyle: true,
	},
	borderColor             : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},
	borderHColor            : {
		type : 'string',
		isUAGStyle: true,
	},
	borderRadius            : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	width                   : {
		type    : 'string',
		default : 'wide',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	columnGap               : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,
	},
	bgColor                 : {
		type    : 'string',
		default : '#f6f6f6',
		isUAGStyle: true,
	},

	// Title Attributes.
	titleColor              : {
		type : 'string',
		isUAGStyle: true,
	},
	titleTag                : {
		type    : 'string',
		default : 'h4',
	},
	titleFontSize           : {
		type    : 'number',
		isUAGStyle: true,
		default : '',
	},
	titleFontSizeType       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	titleFontSizeMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	titleFontFamily         : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	titleFontWeight         : {
		type : 'string',
		isUAGStyle: true,
	},
	titleFontStyle          : {
		type : 'string',
		isUAGStyle: true,
	},
	titleLineHeightType     : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	titleLineHeight         : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLineHeightTablet   : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLineHeightMobile   : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLoadGoogleFonts    : {
		type    : 'boolean',
		isUAGStyle: true,
		default : false,
	},

	// Meta attributes.
	metaColor               : {
		type    : 'string',
		default : '#777777',
		isUAGStyle: true,
	},
	metaFontSize            : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	metaFontSizeType        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	metaFontSizeMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	metaFontSizeTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	metaFontFamily          : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	metaFontWeight          : {
		type : 'string',
		isUAGStyle: true,
	},
	metaFontStyle           : {
		type : 'string',
		isUAGStyle: true,
	},
	metaLineHeightType      : {
		type    : 'string',
		isUAGStyle: true,
		default : 'em',
	},
	metaLineHeight          : {
		type : 'number',
		isUAGStyle: true,
	},
	metaLineHeightTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	metaLineHeightMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	metaLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},

	// Excerpt Attributes.
	excerptColor            : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	excerptFontSize         : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	excerptFontSizeType     : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	excerptFontSizeMobile   : {
		type : 'number',
		isUAGStyle: true,
	},
	excerptFontSizeTablet   : {
		type : 'number',
		isUAGStyle: true,
	},
	excerptFontFamily       : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	excerptFontWeight       : {
		type : 'string',
		isUAGStyle: true,
	},
	excerptFontStyle        : {
		type : 'string',
		isUAGStyle: true,
	},
	excerptLineHeightType   : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	excerptLineHeight       : {
		type : 'number',
		isUAGStyle: true,
	},
	excerptLineHeightTablet : {
		type : 'number',
		isUAGStyle: true,
	},
	excerptLineHeightMobile : {
		type : 'number',
		isUAGStyle: true,
	},
	excerptLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	displayPostContentRadio : {
		type    : 'string',
		default : 'excerpt',
	},

	// CTA attributes.
	ctaColor                : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaBgColor              : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaHColor               : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaBgHColor             : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaFontSize             : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	ctaFontSizeType         : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	ctaFontSizeMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaFontSizeTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaFontFamily           : {
		type    : 'string',
		isUAGStyle: true,
		default : '',
	},
	ctaFontWeight           : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaFontStyle            : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaLineHeightType       : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	ctaLineHeight           : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLineHeightTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLineHeightMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLoadGoogleFonts      : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},

	// Spacing Attributes.
	paddingTop              : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBottom           : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingRight            : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingLeft             : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingTopMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBottomMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingRightMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingLeftMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBtnTop           : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBtnBottom        : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBtnRight         : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingBtnLeft          : {
		type : 'number',
		isUAGStyle: true,
	},
	contentPadding          : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,
	},
	contentPaddingMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaBottomSpace          : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	imageBottomSpace        : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	titleBottomSpace        : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	metaBottomSpace         : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	excerptBottomSpace      : {
		type    : 'number',
		default : 25,
		isUAGStyle: true,
	},
	// Exclude Current Post.
	excludeCurrentPost      : {
		type    : 'boolean',
		default : false,
	},
	titleTransform          : {
		type : 'string',
		isUAGStyle: true,
	},
	metaTransform           : {
		type : 'string',
		isUAGStyle: true,
	},
	excerptTransform        : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaTransform            : {
		type : 'string',
		isUAGStyle: true,
	},
	titleDecoration         : {
		type : 'string',
		isUAGStyle: true,
	},
	metaDecoration          : {
		type : 'string',
		isUAGStyle: true,
	},
	excerptDecoration       : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaDecoration           : {
		type : 'string',
		isUAGStyle: true,
	},
	contentPaddingUnit           : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	rowGapUnit                  : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	columnGapUnit           : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	excerptBottomSpaceUnit  : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	paginationSpacingUnit   : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	imageBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	titleBottomSpaceUnit    : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	metaBottomSpaceUnit     : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	ctaBottomSpaceUnit      : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	paddingBtnUnit          : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	mobilePaddingBtnUnit    : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	tabletPaddingBtnUnit    : {
		type    : 'string',
		isUAGStyle: true,
		default : 'px',
	},
	paddingUnit             : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	mobilePaddingUnit       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	tabletPaddingUnit       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	postsOffset: {
		type    : 'number',
		default : 0,
	},
	taxStyle: {
		type    : 'string',
		default : 'default',
	},
	displayPostTaxonomyAboveTitle                : {
		type    : 'boolean',
		default : true,
	},
	highlightedTextColor: {
		type    : 'string',
		default : '',
	},
	highlightedTextBgColor: {
		type    : 'string',
		default : '',
	}
}

export default attributes;
