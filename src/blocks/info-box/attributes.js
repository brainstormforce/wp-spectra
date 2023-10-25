/**
 * BLOCK: Info Box - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const imageWidthDefault = 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ? 120 : '';

const borderAttributes = getBorderAttributes( 'btn' );

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.btn_inherit_from_theme,
	},
	prefixTitle: {
		source: 'html',
		selector: '.uagb-ifb-title-prefix',
		default: __( 'Prefix', 'ultimate-addons-for-gutenberg' ),
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	infoBoxTitle: {
		source: 'html',
		selector: '.uagb-ifb-title',
		default: __( 'Info Box', 'ultimate-addons-for-gutenberg' ),
	},
	headingDesc: {
		source: 'html',
		selector: '.uagb-ifb-desc',
		default: __(
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			'ultimate-addons-for-gutenberg'
		),
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	headingAlignTablet: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	headingAlignMobile: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	headingColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	subHeadingColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	prefixColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	icon: {
		type: 'string',
		default: 'circle-check',
	},
	iconimgPosition: {
		type: 'string',
		default: 'above-title',
		UAGCopyPaste: {
			styleType: 'icon-img-position',
		},
	},
	iconSize: {
		type: 'number',
		default: 30,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	iconHover: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	iconBgHover: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	iconColor: {
		type: 'string',
		default: '#333',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	prefixTag: {
		type: 'string',
		default: 'h3',
	},
	prefixFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
	},
	prefixFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type-tablet',
		},
	},
	prefixFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type-mobile',
		},
	},
	prefixFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	prefixFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
	},
	prefixFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	prefixFontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
	},
	prefixLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	prefixLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	prefixTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	prefixDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	prefixLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-font',
		},
	},
	prefixHeadingTag:{
		type: 'string',
		default: 'span',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	headFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-tablet',
		},
	},
	headFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-mobile',
		},
	},
	headFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	headFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	headFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	headFontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	headTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	headLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	headLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	subHeadTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	subHeadDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	headLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	subHeadFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	subHeadFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-tablet',
		},
	},
	subHeadFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-mobile',
		},
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	subHeadFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	subHeadFontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	subHeadLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	subHeadLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	subHeadLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	headSpace: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	subHeadSpace: {
		type: 'number',
		default: 20,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	seperatorSpace: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-border-radius',
		},
	},
	source_type: {
		type: 'string',
		default: 'icon',
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	sourceAlign: {
		type: 'string',
		default: 'top',
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	showCtaIcon: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'btn-show-icon',
		},
	},
	ctaIcon: {
		type: 'string',
		default: 'right-long',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 5,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type',
		},
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
		UAGCopyPaste: {
			styleType: 'seperator-position',
		},
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	seperatorColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
		default: 30,
	},
	seperatorWidthTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	seperatorWidthMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-thickness',
		},
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit',
		},
	},
	ctaType: {
		type: 'string',
		default: 'none',
	},
	ctaBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-background-type',
		},
	},
	ctaBgHoverType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-hbackground-type',
		},
	},
	ctaText: {
		type: 'html',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	ctaLink: {
		type: 'string',
		default: '',
	},
	ctaLinkColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	ctaDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	ctaFontSize: {
		type: 'number',
		isGBSStyle: true,
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
	ctaFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-tablet',
		},
	},
	ctaFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-mobile',
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	ctaFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	ctaFontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	ctaLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'cta-line-height-type',
		},
	},
	ctaLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-line-height',
		},
	},
	ctaLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-line-height-tablet',
		},
	},
	ctaLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-line-height-mobile',
		},
	},
	ctaLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing',
		},
	},
	ctaLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-tablet',
		},
	},
	ctaLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
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
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-load-google-font',
		},
	},
	ctaBtnLinkColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	ctaBgColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	ctaBgHoverColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},
	ctaBorderColor: {
		type: 'string',
		default: '#333',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-btn-border-color',
		},
	},
	ctaBorderhoverColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-btn-border-hover-color',
		},
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'solid',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-btn-border-style',
		},
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: 14,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
	},
	ctaBorderWidth: {
		type: 'number',
		default: 1,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-btn-border-width',
		},
	},
	ctaBorderRadius: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-btn-border-radius',
		},
	},
	iconLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin',
		},
	},
	iconRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin',
		},
	},
	iconTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin',
		},
	},
	iconBottomMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin',
		},
	},
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: 'InfoBox placeholder img',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width',
		},
		default: imageWidthDefault,
	},
	imageWidthMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	imageWidthTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'image-width-tablet',
		},
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type',
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	showPrefix: {
		type: 'boolean',
		default: false,
	},
	showTitle: {
		type: 'boolean',
		default: true,
	},
	showIcon: {
		type: 'boolean',
		default: true,
	},
	showDesc: {
		type: 'boolean',
		default: true,
	},
	iconMarginTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin-tablet',
		},
	},
	iconMarginRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin-tablet',
		},
	},
	iconMarginBottomTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet',
		},
	},
	iconMarginLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin-tablet',
		},
	},
	iconMarginTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin-mobile',
		},
	},
	iconMarginRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin-mobile',
		},
	},
	iconMarginBottomMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile',
		},
	},
	iconMarginLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin-mobile',
		},
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit',
		},
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-mobile',
		},
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-tablet',
		},
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
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
			styleType: 'btn-padding-mobile-unit',
		},
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet-unit',
		},
	},
	paddingBtnTop: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paddingBtnBottom: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paddingBtnLeft: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	paddingBtnRight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paddingBtnTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	paddingBtnRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet',
		},
	},
	paddingBtnTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	paddingBtnRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit',
		},
	},
	imageWidthUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-tablet',
		},
	},
	imageWidthUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-mobile',
		},
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit',
		},
	},

	prefixTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-top-margin',
		},
		default: 5,
	},
	prefixRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-right-margin',
		},
	},
	prefixSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
		default: 10,
	},
	prefixLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-left-margin',
		},
	},
	prefixMarginTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-tablet',
		},
	},
	prefixMarginRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-tablet',
		},
	},
	prefixTabletSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-tablet',
		},
	},
	prefixMarginLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-tablet',
		},
	},
	prefixMarginTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-mobile',
		},
	},
	prefixMarginRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-mobile',
		},
	},
	prefixMobileSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-mobile',
		},
	},
	prefixMarginLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-mobile',
		},
	},
	prefixSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-unit',
		},
	},
	prefixMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-mobile-unit',
		},
	},
	prefixTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-tablet-unit',
		},
	},
	prefixLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	prefixLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	prefixLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	prefixLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},

	headTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin',
		},
	},
	headRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin',
		},
	},
	headLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin',
		},
	},
	headMarginTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet',
		},
	},
	headMarginRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet',
		},
	},
	headTabletSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	headMarginLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-mobile',
		},
	},
	headMarginTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile',
		},
	},
	headMarginRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile',
		},
	},
	headMobileSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	headMarginLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile',
		},
	},
	headSpaceUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit',
		},
		default: 'px',
	},
	headMobileMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile',
		},
		default: 'px',
	},
	headTabletMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet',
		},
		default: 'px',
	},

	// padding
	blockTopPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	blockRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	blockLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	blockBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile',
		},
	},
	blockPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit',
		},
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet',
		},
	},
	blockPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile',
		},
	},
	blockPaddingLink: {
		type: 'boolean',
		default: true,
	},
	separatorTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin',
		},
	},
	separatorRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin',
		},
	},
	separatorLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin',
		},
	},
	separatorMarginTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet',
		},
	},
	separatorMarginRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet',
		},
	},
	seperatorTabletSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet',
		},
	},
	separatorMarginLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet',
		},
	},
	separatorMarginTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile',
		},
	},
	separatorMarginRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile',
		},
	},
	seperatorMobileSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile',
		},
	},
	separatorMarginLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile',
		},
	},
	seperatorSpaceUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit',
		},
	},
	separatorMobileMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile',
		},
		default: 'px',
	},
	separatorTabletMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet',
		},
		default: 'px',
	},

	subHeadTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin',
		},
	},
	subHeadRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin',
		},
	},
	subHeadLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin',
		},
	},
	subHeadMarginTopTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet',
		},
	},
	subHeadMarginRightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet',
		},
	},
	subHeadTabletSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	subHeadMarginLeftTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet',
		},
	},
	subHeadMarginTopMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile',
		},
	},
	subHeadMarginRightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile',
		},
	},
	subHeadMobileSpace: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	subHeadMarginLeftMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile',
		},
	},
	subHeadSpaceUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit',
		},
		default: 'px',
	},
	subHeadMobileMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile',
		},
		default: 'px',
	},
	subHeadTabletMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet',
		},
		default: 'px',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	//
	iconView: {
		type: 'string',
		default: 'none',
	},
	iconShape: {
		type: 'string',
		default: 'Circle',
	},
	iconBackgroundColor: {
		type: 'string',
		default: '#6EC1E3',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
	},
	iconBackgroundHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	iconBorderWidth: {
		type: 'number',
		default: 3,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-border-width',
		},
	},
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
	...borderAttributes,
};

export default attributes;
