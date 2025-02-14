import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';
const btnBorderAttributes = getBorderAttributes( 'btn' );

const attributes = {
	blockName: {
		type: 'string',
		default: 'post-carousel',
	},
	inheritFromThemeBtn: {
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
	pauseOnHover: {
		type: 'boolean',
		default: true,
	},
	enableOffset: {
		type: 'boolean',
		default: false,
	},
	infiniteLoop: {
		type: 'boolean',
		default: true,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	arrowDots: {
		type: 'string',
		default: 'arrows_dots',
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	arrowSize: {
		type: 'number',
		default: 24,
		UAGCopyPaste: {
			styleType: 'arrow-size',
		},
	},
	arrowBorderSize: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'arrow-border-size',
		},
	},
	arrowBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'arrow-border-radius',
		},
	},
	arrowDistance: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-distance',
		},
	},
	arrowDistanceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-distance-tablet',
		},
	},
	arrowDistanceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'arrow-distance-mobile',
		},
	},
	arrowColor: {
		type: 'string',
		default: '#000',
		UAGCopyPaste: {
			styleType: 'arrow-color',
		},
	},
	equalHeight: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'post-equal-height',
		},
	},
	layoutConfig: {
		type: 'array',
		default: [
			'uagb/post-image',
			'uagb/post-taxonomy',
			'uagb/post-title',
			'uagb/post-meta',
			'uagb/post-excerpt',
			'uagb/post-button',
		],
	},
	post_type: {
		type: 'string',
		default: 'carousel',
	},

	inheritFromTheme: {
		type: 'boolean',
		default: true,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	categories: {
		type: 'string',
	},
	postType: {
		type: 'string',
		default: 'post',
	},
	postDisplaytext: {
		type: 'string',
		default: 'No post found!',
	},
	taxonomyType: {
		type: 'string',
		default: 'category',
	},
	postsToShow: {
		type: 'number',
		default: 6,
	},
	displayPostDate: {
		type: 'boolean',
		default: true,
	},
	displayPostExcerpt: {
		type: 'boolean',
		default: true,
	},
	excerptLength: {
		type: 'number',
		default: 15,
	},
	displayPostAuthor: {
		type: 'boolean',
		default: false,
	},
	displayPostTitle: {
		type: 'boolean',
		default: true,
	},
	displayPostComment: {
		type: 'boolean',
		default: true,
	},
	displayPostTaxonomy: {
		type: 'boolean',
		default: false,
	},
	displayPostImage: {
		type: 'boolean',
		default: true,
	},
	imgSize: {
		type: 'string',
		default: 'large',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	imgPosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
	},
	linkBox: {
		type: 'boolean',
	},
	bgOverlayColor: {
		type: 'string',
		default: '#ffffff',
		UAGCopyPaste: {
			styleType: 'post-bg-overlay-color',
		},
	},
	overlayOpacity: {
		type: 'number',
		default: '50',
		UAGCopyPaste: {
			styleType: 'post-overlay-opacity',
		},
	},
	displayPostLink: {
		type: 'boolean',
		default: true,
	},
	newTab: {
		type: 'boolean',
		default: false,
	},
	ctaText: {
		type: 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	btnHPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
	},
	btnVPadding: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
	},
	btnBorderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-border-width',
		},
		default: 1,
	},
	btnBorderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-border-style',
		},
	},
	btnBorderColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-color',
		},
	},
	btnBorderHColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color',
		},
	},
	btnBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-border-radius',
		},
	},
	columns: {
		type: 'number',
		default: 3,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'post-align',
		},
	},
	width: {
		type: 'string',
		default: 'wide',
		UAGCopyPaste: {
			styleType: 'post-width',
		},
	},
	order: {
		type: 'string',
		default: 'desc',
	},
	orderBy: {
		type: 'string',
		default: 'date',
	},
	rowGap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	columnGap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	bgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'post-bg-type',
		},
	},
	bgColor: {
		type: 'string',
		default: '#f6f6f6',
		UAGCopyPaste: {
			styleType: 'post-bg-color',
		},
	},

	// Title Attributes.
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
		default: '',
	},
	titleTag: {
		type: 'string',
		default: 'h4',
	},
	titleFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-loads-google-fonts',
		},
	},

	// Meta attributes.
	metaColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	metaFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	metaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
	},
	metaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	metaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	metaFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
	},
	metaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	metaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	metaLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
	},
	metaLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	metaLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	metaLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	metaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
	},

	// Excerpt Attributes.
	excerptColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	excerptFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	excerptFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	excerptFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	excerptFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	excerptFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: '',
	},
	excerptFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	excerptFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	excerptLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	excerptLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	excerptLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	excerptLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	excerptLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	displayPostContentRadio: {
		type: 'string',
		default: 'excerpt',
	},

	// CTA attributes.
	ctaColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-bg-type',
		},
	},
	ctaBgHType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-type',
		},
	},
	ctaBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	ctaHColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	ctaBgHColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},
	ctaFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
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
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},

	// Spacing Attributes.
	paddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding',
		},
	},
	paddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding',
		},
	},
	paddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding',
		},
	},
	paddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding',
		},
	},
	paddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding-mobile',
		},
	},
	paddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding-mobile',
		},
	},
	paddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding-mobile',
		},
	},
	paddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding-mobile',
		},
	},
	paddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-top-padding-tablet',
		},
	},
	paddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-bottom-padding-tablet',
		},
	},
	paddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-right-padding-tablet',
		},
	},
	paddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-left-padding-tablet',
		},
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	contentPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'post-content-padding',
		},
	},
	contentPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'post-content-padding-mobile',
		},
	},
	ctaBottomSpace: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	ctaBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	ctaBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	imageBottomSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
	},
	imageBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
	},
	imageBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
	},
	taxonomyBottomSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-taxonomy-bottom-margin',
		},
	},
	taxonomyBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-taxonomy-bottom-margin',
		},
	},
	taxonomyBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-taxonomy-bottom-margin',
		},
	},
	titleBottomSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	metaBottomSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
	},
	metaBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
	},
	metaBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
	},
	excerptBottomSpace: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	excerptBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	excerptBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	// Exclude Current Post.
	excludeCurrentPost: {
		type: 'boolean',
		default: false,
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	metaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	excerptTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	metaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	excerptDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	contentPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'post-content-padding-unit',
		},
	},
	rowGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-unit',
		},
	},
	columnGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-unit',
		},
	},
	excerptBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit',
		},
	},
	paginationSpacingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'pagination-spacing-unit',
		},
	},
	imageBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-unit',
		},
	},
	taxonomyBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-taxonomy-bottom-margin-unit',
		},
	},
	titleBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-unit',
		},
	},
	metaBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-unit',
		},
	},
	ctaBottomSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-unit',
		},
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
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
	isPreview: {
		type: 'boolean',
		default: false,
	},
	postsOffset: {
		type: 'number',
		default: 0,
	},
	taxStyle: {
		type: 'string',
		default: 'default',
	},
	taxDivider: {
		type: 'string',
		default: ' , ',
	},
	displayPostTaxonomyAboveTitle: {
		type: 'string',
		default: 'withMeta',
	},
	hideTaxonomyIcon: {
		type: 'boolean',
		default: true,
	},
	highlightedTextColor: {
		type: 'string',
		default: '',
	},
	highlightedTextBgColor: {
		type: 'string',
		default: '',
	},
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing',
		},
	},
	titleLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-mobile',
		},
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-type',
		},
	},
	metaLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'meta-letter-spacing',
		},
	},
	metaLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'meta-letter-spacing-tablet',
		},
	},
	metaLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'meta-letter-spacing-mobile',
		},
	},
	metaLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'meta-letter-spacing-type',
		},
	},
	excerptLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'excerpt-letter-spacing',
		},
	},
	excerptLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'excerpt-letter-spacing-tablet',
		},
	},
	excerptLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'excerpt-letter-spacing-mobile',
		},
	},
	excerptLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'excerpt-letter-spacing-type',
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
	...btnBorderAttributes,

	// margin top for dots
	dotsMarginTop: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	dotsMarginTopTablet: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	dotsMarginTopMobile: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'dots-margin-top',
		},
	},
	dotsMarginTopUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'dots-margin-top-unit',
		},
	},
	allTaxonomyStore: {
		type: 'object',
	},
};

export default attributes;
