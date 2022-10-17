/**
 * BLOCK: Columns - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Prefix from './components/Prefix';
import Title from './components/Title';
import InfoBoxDesc from './components/InfoBoxDesc';
import InfoBoxIcon from './components/InfoBoxIcon';
import Icon from './components/Icon';
import InfoBoxPositionClasses from './classes';
import InfoBoxSeparator from './components/InfoBoxSeparator';
import InfoBoxCta from './components/InfoBoxCta';
import CallToAction from './components/CallToAction';
import InfoBoxIconImage from './components/InfoBoxIconImage';
import IconImage from './components/IconImage';
import { getBorderAttributes } from '@Controls/generateAttributes';
import DeprecatedIconImagesV_2_0_13 from './components/DeprecatedIconImagesV_2_0_13';

const borderAttributes = getBorderAttributes( 'btn' );

const imageWidthDefault = ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) ? 120 : '';

const attributes = {
	inheritFromTheme: {
		type: "boolean",
		default: false
	},
	prefixTitle: {
		source: "html",
		selector: "span.uagb-ifb-title-prefix",
		default: "Prefix",
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	infoBoxTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Info Box",
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	headingColor: {
		type: "string",
	},
	subHeadingColor: {
		type: "string",
	},
	prefixColor: {
		type: "string",
	},
	icon : {
		type : "string",
		default : "fa fa-star"
	},
	iconimgPosition: {
		type: "string",
		default: "above-title"
	},
	iconSize : {
		type: "number",
		default: 40,
	},
	iconHover : {
		type : "string",
		default : ""
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
	},
	iconMobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	iconTabletPaddingUnit: {
		type: 'string',
		default: 'px',
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
	prefixSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	headSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	seperatorSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	subHeadSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},
	iconBgHover : {
		type : "string",
		default : ""
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	prefixTag :{
		type: "string",
		default: "h3"
	},
	prefixFontSize: {
		type: "number",
	},
	prefixFontSizeType: {
		type: "string",
		default: "px"
	},
	prefixFontSizeTablet: {
		type: "number",
	},
	prefixFontSizeMobile: {
		type: "number",
	},
	prefixFontFamily: {
		type: "string",
		default: "Default",
	},
	prefixFontWeight: {
		type: "string",
	},
	prefixFontSubset: {
		type: "string",
	},
	prefixLineHeightType: {
		type: "string",
		default: "em"
	},
	prefixLineHeight: {
		type: "number",
	},
	prefixLineHeightTablet: {
		type: "number",
	},
	prefixLineHeightMobile: {
		type: "number",
	},
	prefixLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headingTag: {
		type: "string",
		default: "h3"
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	headFontFamily: {
		type: "string",
		default: "Default",
	},
	headFontWeight: {
		type: "string",
	},
	headFontSubset: {
		type: "string",
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headLineHeight: {
		type: "number",
	},
	headLineHeightTablet: {
		type: "number",
	},
	headLineHeightMobile: {
		type: "number",
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	subHeadFontFamily: {
		type: "string",
		default: "Default",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em"
	},
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	subHeadLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headSpace: {
		type: "number",
		default : 10,
	},
	subHeadSpace: {
		type: "number",
		default : 10,
	},
	seperatorSpace:{
		type: "number",
		default : 10,
	},
	iconimgBorderRadius: {
		type: "number",
		default : 0
	},
	source_type :{
		type: "string",
		default: "icon",
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	sourceAlign:{
		type : "string",
		default : "top"
	},
	ctaTarget: {
		type: "boolean",
		default: false,
	},
	ctaIcon : {
		type : "string",
		default : ""
	},
	ctaIconPosition: {
		type: "string",
		default: "after"
	},
	ctaIconSpace :{
		type: "number",
		default : 5
	},
	seperatorPosition: {
		type: "string",
		default: "after_title",
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	seperatorColor: {
		type: "string",
		default: "#333",
	},
	seperatorWidth :{
		type: "number",
		default : 30
	},
	separatorWidthType: {
		type: "string",
		default: "%"
	},
	seperatorThickness :{
		type: "number",
		default : 2
	},
	ctaType: {
		type: "string",
		default: "none",
	},
	ctaText: {
		type: "html",
		default: "Read More",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	ctaLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaFontSize :{
		type: "number",
	},
	ctaFontSizeType :{
		type: "string",
		default: "px"
	},
	ctaFontSizeMobile :{
		type: "number",
	},
	ctaFontSizeTablet :{
		type: "number",
	},
	ctaFontFamily: {
		type: "string",
		default: "Default",
	},
	ctaFontWeight: {
		type: "string",
	},
	ctaFontSubset: {
		type: "string",
	},
	ctaLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	ctaBtnLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaLinkHoverColor:{
		type: "string",
		default: "",
	},
	ctaBgColor :{
		type: "string",
		default:"transparent",
	},
	ctaBgHoverColor :{
		type: "string",
		default:"transparent",
	},
	ctaBorderColor: {
		type: "string",
		default: "#333",
	},
	ctaBorderhoverColor:{
		type: "string",
		default: "",
	},
	ctaBorderStyle: {
		type: "string",
		default: "solid",
	},
	ctaBtnVertPadding :{
		type: "number",
		default: 10,
	},
	ctaBtnHrPadding :{
		type: "number",
		default: 14,
	},
	ctaBorderWidth :{
		type: "number",
		default: 1,
	},
	ctaBorderRadius :{
		type: "number",
		default: 0,
	},
	prefixSpace :{
		type: "number",
		default: 5,
	},
	iconLeftMargin :{
		type: "number",
		default: 10,
	},
	iconRightMargin :{
		type: "number",
		default: 10,
	},
	iconTopMargin :{
		type: "number",
		default: 5,
	},
	iconBottomMargin :{
		type: "number",
		default: 5,
	},
	iconImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "InfoBox placeholder img",
		}
	},
	imageSize:{
		type: "string",
		default: "thumbnail",
	},
	imageWidth :{
		type: "number",
		default: 120,
	},
	imageWidthType : {
		type    : "boolean",
		default : true,
	},
	stack: {
		type: "string",
		default: "tablet"
	},
	showIcon: {
		type: 'boolean',
		default: true,
	},
	showPrefix: {
		type: "boolean",
		default: true,
	},
	showTitle: {
		type: "boolean",
		default: true,
	},
	showDesc: {
		type: "boolean",
		default: true,
	},
	iconView: {
		type: 'string',
		default: 'none',
	},
	...borderAttributes
}

const DeprecatedAttributesV_2_0_13 = {
	inheritFromTheme: {
		type: 'boolean',
		default: true,
	},
	prefixTitle: {
		source: 'html',
		selector: 'span.uagb-ifb-title-prefix',
		default: 'Prefix',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	infoBoxTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Info Box',
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	headingAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	headingAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	prefixColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		}
	},
	icon: {
		type: 'string',
		default: 'circle-check',
	},
	iconimgPosition: {
		type: 'string',
		default: 'above-title',
		UAGCopyPaste: {
			styleType: 'icon-img-position'
		}
	},
	iconSize: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	iconHover: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		}
	},
	iconBgHover: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		}
	},
	iconColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	prefixTag: {
		type: 'string',
		default: 'h3',
	},
	prefixFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		}
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		}
	},
	prefixFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		}
	},
	prefixFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		}
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		}
	},
	prefixFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		}
	},
	prefixFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		}
	},
	prefixLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		}
	},
	prefixLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		}
	},
	prefixTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		}
	},
	prefixDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		}
	},
	prefixLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		}
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-font'
		}
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		}
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		}
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		}
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		}
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	headFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	headLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing'
		}
	},
	headLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet'
		}
	},
	headLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile'
		}
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type'
		}
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		}
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		}
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		}
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		}
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		}
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		}
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		}
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		}
	},
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		}
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		}
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		}
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		}
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		}
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		}
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		}
	},
	subHeadLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing'
		}
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet'
		}
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile'
		}
	},
	subHeadLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type'
		}
	},
	headSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	subHeadSpace: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		}
	},
	seperatorSpace: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		}
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
	ctaIcon: {
		type: 'string',
		default: '',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type'
		}
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
		UAGCopyPaste: {
			styleType: 'seperator-position'
		}
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	seperatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 30,
	},
	seperatorWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	seperatorWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		}
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit'
		}
	},
	ctaType: {
		type: 'string',
		default: 'none',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		}
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		}
	},
	ctaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		}
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		}
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		}
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	ctaLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'cta-line-height-type'
		}
	},
	ctaLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-line-height'
		}
	},
    ctaLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-line-height-tablet'
		}
	},
    ctaLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-line-height-mobile'
		}
	},
	ctaLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing'
		}
	},
	ctaLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-tablet'
		}
	},
	ctaLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-mobile'
		}
	},
	ctaLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-type'
		}
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'cta-load-google-font'
		}
	},
	ctaBtnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	ctaBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	ctaBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		}
	},
	ctaBorderColor: {
		type: 'string',
		default: '#333',
	},
	ctaBorderhoverColor:{
		type: 'string',
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		}
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: 14,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		}
	},
	ctaBorderWidth :{
		type: 'number',
		default: 1,
	},
	ctaBorderRadius :{
		type: 'number',
		default: 0,
	},
	iconLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin'
		},
	},
	iconRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin'
		},
	},
	iconTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin'
		},
	},
	iconBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin'
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
			styleType: 'image-size'
		}
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
		default: imageWidthDefault,
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		}
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		}
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type'
		}
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
		UAGCopyPaste: {
			styleType: 'icon-top-margin-tablet'
		}
	},
	iconMarginRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-tablet'
		}
	},
	iconMarginBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet'
		}
	},
	iconMarginLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-tablet'
		}
	},
	iconMarginTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin-mobile'
		}
	},
	iconMarginRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-mobile'
		}
	},
	iconMarginBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile'
		}
	},
	iconMarginLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-mobile'
		}
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit'
		}
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-mobile'
		}
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-tablet'
		}
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
			styleType: 'btn-padding-unit'
		}
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-mobile-unit'
		}
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet-unit'
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
			styleType: 'btn-top-padding-tablet'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit'
		}
	},
	imageWidthUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-tablet'
		}
	},
	imageWidthUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-mobile'
		}
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit'
		}
	},

	prefixTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin'
		},
		default: 5,
	},
	prefixRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin'
		}
	},
	prefixSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
		default : 10
	},
	prefixLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin'
		}
	},
	prefixMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-tablet'
		}
	},
	prefixMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-tablet'
		}
	},
	prefixTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-tablet'
		}
	},
	prefixMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-tablet'
		}
	},
	prefixMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-mobile'
		}
	},
	prefixMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-mobile'
		}
	},
	prefixMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-mobile'
		}
	},
	prefixMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-mobile'
		}
	},
	prefixSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-unit'
		}
	},
	prefixMobileMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-mobile-unit'
		}
	},
	prefixTabletMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-tablet-unit'
		}
	},
	prefixLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing'
		}
	},
	prefixLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet'
		}
	},
	prefixLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile'
		}
	},
	prefixLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type'
		}
	},

	headTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin'
		}
	},
	headRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin'
		}
	},
	headLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin'
		}
	},
	headMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet'
		}
	},
	headMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet'
		}
	},
	headTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		}
	},
	headMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-mobile'
		}
	},
	headMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile'
		}
	},
	headMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile'
		}
	},
	headMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		}
	},
	headMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile'
		}
	},
	headSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit'
		},
		default: 'px',
	},
	headMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile'
		},
		default: 'px',
	},
	headTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet'
		},
		default: 'px',
	},

	// padding
	blockTopPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding'
		}
	},
	blockRightPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding'
		}
	},
	blockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding'
		}
	},
	blockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding'
		}
	},
	blockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet'
		}
	},
	blockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet'
		}
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet'
		}
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet'
		}
	},
	blockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile'
		}
	},
	blockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile'
		}
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile'
		}
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile'
		}
	},
	blockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit'
		}
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet'
		}
	},
	blockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile'
		}
	},
	blockPaddingLink: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
	},
	separatorTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin'
		}
	},
	separatorRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin'
		}
	},
	separatorLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin'
		}
	},
	separatorMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet'
		}
	},
	separatorMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet'
		}
	},
	seperatorTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet'
		}
	},
	separatorMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet'
		}
	},
	separatorMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile'
		}
	},
	separatorMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile'
		}
	},
	seperatorMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile'
		}
	},
	separatorMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile'
		}
	},
	seperatorSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit'
		}
	},
	separatorMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile'
		},
		default: 'px',
	},
	separatorTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet'
		},
		default: 'px',
	},

	subHeadTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin'
		}
	},
	subHeadRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin'
		}
	},
	subHeadLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin'
		}
	},
	subHeadMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet'
		}
	},
	subHeadMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet'
		}
	},
	subHeadTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		}
	},
	subHeadMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet'
		}
	},
	subHeadMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile'
		}
	},
	subHeadMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile'
		}
	},
	subHeadMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		}
	},
	subHeadMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile'
		}
	},
	subHeadSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit'
		},
		default: 'px',
	},
	subHeadMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile'
		},
		default: 'px',
	},
	subHeadTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet'
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
		UAGCopyPaste: {
			styleType: 'icon-bg-color'
		},
	},
	iconBackgroundHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		},
	},
	iconBorderWidth: {
		type: 'number',
		default: 3,
		UAGCopyPaste: {
			styleType: 'icon-border-width'
		},
	},
	...borderAttributes
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' ) {
				is_image = <InfoBoxIcon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						<InfoBoxDesc
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
						<InfoBoxCta attributes={ props.attributes } />
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <InfoBoxIcon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ ctaType !== 'none' && (
							<InfoBoxCta attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle && (
						<InfoBoxSeparator attributes={ props.attributes } />
					) }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' && is_image }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ is_image }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ is_image }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && is_image }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap"
									target={ target }
									rel="noopener noreferrer"
								>
									{ ' ' }
									{ output }
								</a>
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_prefix' &&
							seperator_html }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							ctaType == 'all'
								? ' uagb-infobox_cta-type-all'
								: '',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ icon_image_html }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ icon_image_html }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && icon_image_html }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap'
						) }
						id={ `uagb-infobox-${ block_id }` }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
									target={ target }
									rel="noopener noreferrer"
								></a>
								{ output }
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				backgroundType,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<>
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_prefix' &&
							seperator_html }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				</>
			);

			const output = (
				<>
					<div
						className={ classnames(
							'uagb-infobox__content-wrap',
							ctaType == 'all'
								? ' uagb-infobox_cta-type-all'
								: '',
							...InfoBoxPositionClasses( props.attributes )
						) }
					>
						<div className="uagb-ifb-left-right-wrap">
							{ iconimgPosition == 'left' && is_image }
							<div className="uagb-ifb-content">
								{ iconimgPosition == 'above-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									title_text }

								{ iconimgPosition == 'below-title' &&
									icon_image_html }

								{ ( iconimgPosition == 'above-title' ||
									iconimgPosition == 'below-title' ) &&
									desc }

								{ iconimgPosition === 'left-title' && (
									<>
										<div className="uagb-ifb-left-title-image">
											{ icon_image_html }
											{ title_text }
										</div>
										{ desc }
									</>
								) }

								{ iconimgPosition === 'right-title' && (
									<>
										<div className="uagb-ifb-right-title-image">
											{ title_text }
											{ icon_image_html }
										</div>
										{ desc }
									</>
								) }

								{ ( iconimgPosition == 'left' ||
									iconimgPosition == 'right' ) && (
									<>
										{ title_text }
										{ desc }
									</>
								) }
							</div>

							{ iconimgPosition == 'right' && icon_image_html }
						</div>
					</div>
				</>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<>
					<div
						className={ classnames(
							className,
							'uagb-infobox__outer-wrap',
							`uagb-block-${ block_id }`
						) }
					>
						{ ctaType == 'all' && (
							<>
								<a
									href={ ctaLink }
									className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
									target={ target }
									rel="noopener noreferrer"
								></a>
								{ output }
							</>
						) }
						{ ctaType !== 'all' && output }
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_prefix' &&
						seperator_html }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType == 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition == 'left' && is_image }
						<div className="uagb-ifb-content">
							{ iconimgPosition == 'above-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								title_text }

							{ iconimgPosition == 'below-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ icon_image_html }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ icon_image_html }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition == 'left' ||
								iconimgPosition == 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition == 'right' && icon_image_html }
					</div>
				</div>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType == 'all' && (
						<a
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let is_image = '';

			if ( source_type === 'icon' && icon !== '' ) {
				is_image = <Icon attributes={ props.attributes } />;
			} else {
				is_image = <InfoBoxIconImage attributes={ props.attributes } />;
			}

			let icon_image_html = is_image;
			let seperator_position = seperatorPosition;
			const seperator_html = (
				<InfoBoxSeparator attributes={ props.attributes } />
			);
			let show_seperator = true;

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition == 'above-title' ||
					iconimgPosition == 'below-title' )
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ is_image }
						{ 'none' !== seperatorStyle && seperator_html }
					</>
				);
			}

			if (
				seperatorPosition == 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				seperator_position = 'after_title';
			}

			if (
				iconimgPosition == 'below-title' &&
				seperatorPosition == 'after_title'
			) {
				show_seperator = false;
				icon_image_html = (
					<>
						{ 'none' !== seperatorStyle && seperator_html }
						{ is_image }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_title' &&
						show_seperator &&
						seperator_html }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							seperator_position == 'after_desc' &&
							seperator_html }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						seperator_position == 'after_prefix' &&
						seperator_html }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType == 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition == 'left' && is_image }
						<div className="uagb-ifb-content">
							{ iconimgPosition == 'above-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								title_text }

							{ iconimgPosition == 'below-title' &&
								icon_image_html }

							{ ( iconimgPosition == 'above-title' ||
								iconimgPosition == 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ icon_image_html }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ icon_image_html }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition == 'left' ||
								iconimgPosition == 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition == 'right' && icon_image_html }
					</div>
				</div>
			);

			let target = '';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType == 'all' && (
						<a
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		},
	},
	{

		attributes,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				className,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let isImage = '';

			if ( source_type === 'icon' && icon !== '' ) {
				isImage = <Icon attributes={ props.attributes } />;
			} else {
				isImage = <IconImage attributes={ props.attributes } />;
			}

			let iconImageHtml = isImage;
			let position = seperatorPosition;
			const seperatorHtml = <InfoBoxSeparator attributes={ props.attributes } />;
			let showSeperator = true;

			if (
				position === 'after_icon' &&
				( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' )
			) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ isImage }
						{ 'none' !== seperatorStyle && seperatorHtml }
					</>
				);
			}

			if (
				position === 'after_icon' &&
				( iconimgPosition !== 'above-title' ||
					iconimgPosition !== 'below-title' )
			) {
				position = 'after_title';
			}

			if ( iconimgPosition === 'below-title' && position === 'after_title' ) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ 'none' !== seperatorStyle && seperatorHtml }
						{ isImage }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						position === 'after_title' &&
						showSeperator &&
						seperatorHtml }
					<div className="uagb-ifb-text-wrap">
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							position === 'after_desc' &&
							seperatorHtml }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
					</div>
				</>
			);

			// Get Title and Prefix components.
			const title_text = (
				<div className="uagb-ifb-title-wrap">
					{ showPrefix && '' !== prefixTitle && (
						<Prefix
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
					{ 'none' !== seperatorStyle &&
						position === 'after_prefix' &&
						seperatorHtml }
					{ showTitle && '' !== infoBoxTitle && (
						<Title
							attributes={ props.attributes }
							setAttributes="not_set"
						/>
					) }
				</div>
			);

			const output = (
				<div
					className={ classnames(
						'uagb-infobox__content-wrap',
						ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					<div className="uagb-ifb-left-right-wrap">
						{ iconimgPosition === 'left' && isImage }
						<div className="uagb-ifb-content">
							{ iconimgPosition === 'above-title' && iconImageHtml }

							{ ( iconimgPosition === 'above-title' ||
								iconimgPosition === 'below-title' ) &&
								title_text }

							{ iconimgPosition === 'below-title' && iconImageHtml }

							{ ( iconimgPosition === 'above-title' ||
								iconimgPosition === 'below-title' ) &&
								desc }

							{ iconimgPosition === 'left-title' && (
								<>
									<div className="uagb-ifb-left-title-image">
										{ iconImageHtml }
										{ title_text }
									</div>
									{ desc }
								</>
							) }

							{ iconimgPosition === 'right-title' && (
								<>
									<div className="uagb-ifb-right-title-image">
										{ title_text }
										{ iconImageHtml }
									</div>
									{ desc }
								</>
							) }

							{ ( iconimgPosition === 'left' ||
								iconimgPosition === 'right' ) && (
								<>
									{ title_text }
									{ desc }
								</>
							) }
						</div>

						{ iconimgPosition === 'right' && iconImageHtml }
					</div>
				</div>
			);

			let target = '_self';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						className,
						'uagb-infobox__outer-wrap',
						`uagb-block-${ block_id }`
					) }
				>
					{ ctaType === 'all' && (
						<a // eslint-disable-line jsx-a11y/anchor-has-content
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		}
	},
	{
		attributes : DeprecatedAttributesV_2_0_13,
		save( props ) {
			const {
				iconimgPosition,
				block_id,
				source_type,
				seperatorStyle,
				ctaType,
				ctaLink,
				ctaTarget,
				prefixTitle,
				infoBoxTitle,
				headingDesc,
				showPrefix,
				showTitle,
				showDesc,
				icon,
				seperatorPosition,
			} = props.attributes;

			// Get icon/Image components.
			let isImage = '';

			if ( source_type === 'icon' && icon !== '' ) {
				isImage = <Icon attributes={ props.attributes } />;
			} else {
				isImage = <DeprecatedIconImagesV_2_0_13 attributes={ props.attributes } />;
			}

			let iconImageHtml = isImage;
			let position = seperatorPosition;
			const seperatorHtml = <InfoBoxSeparator attributes={ props.attributes } />
			let showSeperator = true;

			if (
				position === 'after_icon' &&
				( iconimgPosition === 'above-title' || iconimgPosition === 'below-title' )
			) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ isImage }
						{ 'none' !== seperatorStyle && seperatorHtml }
					</>
				);
			}

			if ( position === 'after_icon' && ( iconimgPosition === 'left-title' ||
			iconimgPosition === 'right-title' || iconimgPosition === 'left' ||
			iconimgPosition === 'right' ) ) {
				position = 'after_title';
			}


			if ( iconimgPosition === 'below-title' && position === 'after_title' ) {
				showSeperator = false;
				iconImageHtml = (
					<>
						{ 'none' !== seperatorStyle && seperatorHtml }
						{ isImage }
					</>
				);
			}
			// Get description and seperator components.
			const desc = (
				<>
					{ 'none' !== seperatorStyle &&
						position === 'after_title' &&
						showSeperator &&
						seperatorHtml }
						{ showDesc && '' !== headingDesc && (
							<InfoBoxDesc
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							position === 'after_desc' &&
							seperatorHtml }
						{ ctaType !== 'none' && (
							<CallToAction attributes={ props.attributes } />
						) }
				</>
			);

			// Get Title and Prefix components.
			const titleText = (
					<div className="uagb-ifb-title-wrap">
						{ showPrefix && '' !== prefixTitle && (
							<Prefix
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
						{ 'none' !== seperatorStyle &&
							position === 'after_prefix' &&
							seperatorHtml }
						{ showTitle && '' !== infoBoxTitle && (
							<Title
								attributes={ props.attributes }
								setAttributes="not_set"
							/>
						) }
					</div>
				);

			const output = (
				<>
					{ iconimgPosition === 'left' && iconImageHtml }
					<div className="uagb-ifb-content">
						{ iconimgPosition === 'above-title' && iconImageHtml }

						{ ( iconimgPosition === 'above-title' ||
							iconimgPosition === 'below-title' ) &&
							titleText }

						{ iconimgPosition === 'below-title' && iconImageHtml }

						{ ( iconimgPosition === 'above-title' ||
							iconimgPosition === 'below-title' ) &&
							desc }

						{ iconimgPosition === 'left-title' && (
							<>
								<div className="uagb-ifb-left-title-image">
									{ iconImageHtml }
									{ titleText }
								</div>
								{ desc }
							</>
						) }

						{ iconimgPosition === 'right-title' && (
							<>
								<div className="uagb-ifb-right-title-image">
									{ titleText }
									{ iconImageHtml }
								</div>
								{ desc }
							</>
						) }

						{ ( iconimgPosition === 'left' ||
							iconimgPosition === 'right' ) && (
							<>
								{ titleText }
								{ desc }
							</>
						) }
					</div>

					{ iconimgPosition === 'right' && iconImageHtml }
				</>
			);

			let target = '_self';
			if ( ctaTarget ) {
				target = '_blank';
			}

			return (
				<div
					className={ classnames(
						`uagb-block-${ block_id }`,
						'uagb-infobox__content-wrap',
						ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '',
						...InfoBoxPositionClasses( props.attributes )
					) }
				>
					{ ctaType === 'all' && (
						<a // eslint-disable-line jsx-a11y/anchor-has-content
							href={ ctaLink }
							className="uagb-infobox-link-wrap uagb-infbox__link-to-all"
							target={ target }
							aria-label={ 'Infobox Link' }
							rel="noopener noreferrer"
						></a>
					) }
					{ output }
				</div>
			);
		}
	}
];

export default deprecated;
