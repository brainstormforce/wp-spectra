/**
 * BLOCK: Countdown - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const boxBorderAttributes = getBorderAttributes( 'box' );

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	timerType: {
		type: 'string',
		default: 'date', // date, evergreen, recurring.
	},
	// This is intentionally set to an expired date by default, and shall be overridden by a dynamic default.
	endDateTime: {
		type: 'string',
		default: '2023-01-01T00:00:00Z',
	},
	// The following is a copy-attribute to fetch and display the end-time that has been set.
	displayEndDateTime: {
		type: 'string',
		default: '2023-01-01T00:00:00Z',
	},
	// This stores endDateTime's value so that it could be retrieved when switching between timer modes ( endDateTime is use across both modes - date and evergreen ).
	endDateTimeCopy: {
		type: 'string',
	},
	// This is a flag attribute which will dynamically help us set default for endDateTime.
	timeModified: {
		type: 'boolean',
		default: false,
	},
	showDays: {
		type: 'boolean',
		default: true,
	},
	showHours: {
		type: 'boolean',
		default: true,
	},
	showMinutes: {
		type: 'boolean',
		default: true,
	},
	// Labels.
	showLabels: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'countdown-show-labels',
		},
	},
	labelDays: {
		type: 'string',
		default: __( 'DAYS', 'ultimate-addons-for-gutenberg' ),
	},
	labelHours: {
		type: 'string',
		default: __( 'HOURS', 'ultimate-addons-for-gutenberg' ),
	},
	labelMinutes: {
		type: 'string',
		default: __( 'MINUTES', 'ultimate-addons-for-gutenberg' ),
	},
	labelSeconds: {
		type: 'string',
		default: __( 'SECONDS', 'ultimate-addons-for-gutenberg' ),
	},
	// Separator.
	showSeparator: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'countdown-show-separator',
		},
	},
	separatorType: {
		type: 'string',
		default: ':', // colon, line, slash
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-separator-type',
		},
	},
	ariaLiveType: {
		type: 'string',
		default: 'off',
	},

	// Countdown Expiry Settings.
	// zero - keep at zero
	// hide - hide timer
	// redirect - redirect to url
	// content - replace with innerblocks based content
	timerEndAction: {
		type: 'string',
		default: 'zero',
	},
	redirectURL: {
		type: 'object',
	},

	// <------------------ STYLE TAB ------------------>

	// Digit.
	digitLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	digitColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-color',
		},
	},
	digitFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-family',
		},
	},
	digitFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-weight',
		},
	},
	digitFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-style',
		},
	},
	digitTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-transform',
		},
	},
	digitDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-decoration',
		},
	},
	digitFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'digit-font-size-type',
		},
	},
	digitFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'digit-font-size-type-tablet',
		},
	},
	digitFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'digit-font-size-type-mobile',
		},
	},
	digitLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'digit-line-height-type',
		},
	},
	digitLetterSpacingType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'digit-letter-spacing-type',
		},
	},
	digitFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-size',
		},
	},
	digitFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-tablet',
		},
	},
	digitFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-font-size-mobile',
		},
	},
	digitLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height',
		},
	},
	digitLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height-tablet',
		},
	},
	digitLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-line-height-mobile',
		},
	},
	// Digit letter spacing.
	digitLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-letter-spacing',
		},
	},
	digitLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-letter-spacing-tablet',
		},
	},
	digitLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'digit-letter-spacing-mobile',
		},
	},

	// Label.
	labelLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	labelColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-color',
		},
	},
	labelFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-family',
		},
	},
	labelFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-weight',
		},
	},
	labelFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-style',
		},
	},
	labelTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-transform',
		},
	},
	labelDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-decoration',
		},
	},
	labelFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-font-size-type',
		},
	},
	labelFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-font-size-type-tablet',
		},
	},
	labelFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-font-size-type-mobile',
		},
	},
	labelLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'label-line-height-type',
		},
	},
	labelLetterSpacingType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type',
		},
	},
	labelFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-size',
		},
	},
	labelFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-tablet',
		},
	},
	labelFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-font-size-mobile',
		},
	},
	labelLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height',
		},
	},
	labelLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height-tablet',
		},
	},
	labelLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-line-height-mobile',
		},
	},
	labelLetterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-letter-spacing',
		},
	},
	labelLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet',
		},
	},
	labelLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile',
		},
	},

	// Separator Styles.
	separatorLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	separatorColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	separatorFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-family',
		},
	},
	separatorFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-weight',
		},
	},
	separatorFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-style',
		},
	},
	separatorFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-font-size-type',
		},
	},
	separatorFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-font-size-type-tablet',
		},
	},
	separatorFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-font-size-type-mobile',
		},
	},
	separatorLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'separator-line-height-type',
		},
	},
	separatorFontSize: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-size',
		},
	},
	separatorFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-tablet',
		},
	},
	separatorFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-font-size-mobile',
		},
	},
	separatorLineHeight: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height',
		},
	},
	separatorLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height-tablet',
		},
	},
	separatorLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-line-height-mobile',
		},
	},
	separatorRightSpacing: {
		type: 'number',
		default: 26,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing',
		},
	},
	separatorRightSpacingTablet: {
		type: 'number',
		default: 14,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing-tablet',
		},
	},
	separatorRightSpacingMobile: {
		type: 'number',
		default: 12,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-spacing-mobile',
		},
	},
	separatorTopSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing',
		},
	},
	separatorTopSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing-tablet',
		},
	},
	separatorTopSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-spacing-mobile',
		},
	},
	// Block Margin.
	blockTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-desktop',
		},
	},
	blockRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-desktop',
		},
	},
	blockLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-desktop',
		},
	},
	blockBottomMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-desktop',
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-desktop',
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet',
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet',
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet',
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile',
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile',
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile',
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-mobile',
		},
	},
	blockMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit',
		},
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-tablet',
		},
	},
	blockMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-mobile',
		},
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
	},
	// Block Padding.
	blockTopPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-top-padding-desktop',
		},
	},
	blockRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-right-padding-desktop',
		},
	},
	blockLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-left-padding-desktop',
		},
	},
	blockBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-desktop',
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
		default: false,
	},
	// Box Padding.
	boxTopPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-desktop',
		},
	},
	boxRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-desktop',
		},
	},
	boxLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-desktop',
		},
	},
	boxBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-desktop',
		},
	},
	boxTopPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-tablet',
		},
	},
	boxRightPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-tablet',
		},
	},
	boxLeftPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-tablet',
		},
	},
	boxBottomPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-tablet',
		},
	},
	boxTopPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-top-padding-mobile',
		},
	},
	boxRightPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-right-padding-mobile',
		},
	},
	boxLeftPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-left-padding-mobile',
		},
	},
	boxBottomPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bottom-padding-mobile',
		},
	},
	boxPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit',
		},
	},
	boxPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit-tablet',
		},
	},
	boxPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'countdown-box-padding-unit-mobile',
		},
	},
	boxPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// Overall Align.
	align: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	// Box Align.
	boxAlign: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-alignment',
		},
	},
	boxAlignTablet: {
		type: 'string',
		default: 'center', // Default value is necessary here for flex-based dynamic styling.
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-alignment-tablet',
		},
	},
	boxAlignMobile: {
		type: 'string',
		default: 'center', // Default value is necessary here for flex-based dynamic styling.
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-alignment-mobile',
		},
	},
	// Box Width.
	boxWidth: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-width',
		},
	},
	boxWidthTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-width-tablet',
		},
	},
	boxWidthMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-width-mobile',
		},
	},
	// Square Boxes?
	isSquareBox: {
		type: 'boolean',
		default: true,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-square',
		},
	},
	// Box Spacing.
	boxSpacing: {
		type: 'number',
		default: 38,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-gap',
		},
	},
	boxSpacingTablet: {
		type: 'number',
		default: 20,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-gap-tablet',
		},
	},
	boxSpacingMobile: {
		type: 'number',
		default: 18,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-gap-mobile',
		},
	},
	// Internal Box Spacing - Gap Between Digits & Labels.
	internalBoxSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-internal-box-gap',
		},
	},
	internalBoxSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-internal-box-gap-tablet',
		},
	},
	internalBoxSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-internal-box-gap-mobile',
		},
	},
	// Box Flex.
	boxFlex: {
		type: 'string',
		default: 'column',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction',
		},
	},
	boxFlexTablet: {
		type: 'string',
		default: 'column', // Default value is necessary here for flex-based dynamic styling.
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction-tablet',
		},
	},
	boxFlexMobile: {
		type: 'string',
		default: 'column', // Default value is necessary here for flex-based dynamic styling.
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-flex-direction-mobile',
		},
	},
	// Label vertical alignment.
	labelVerticalAlignment: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-label-vertical-alignment',
		},
	},
	labelVerticalAlignmentTablet: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-label-vertical-alignment-tablet',
		},
	},
	labelVerticalAlignmentMobile: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-label-vertical-alignment-mobile',
		},
	},
	// Box Background.
	boxBgType: {
		type: 'string',
		default: 'transparent',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bg-type',
		},
	},
	boxBgColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-bg-color',
		},
	},
	// Box Shadow for Boxes.
	useSeparateBoxShadows: {
		type: 'boolean',
		default: true,
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-color',
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-hoffset',
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-voffset',
		},
	},
	boxShadowBlur: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-blur',
		},
	},
	boxShadowSpread: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-spread',
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-position',
		},
	},

	boxShadowColorHover: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-color-hover',
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-hoffset-hover',
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-voffset-hover',
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-blur-hover',
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-spread-hover',
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'countdown-box-shadow-position-hover',
		},
	},
	// Box Border Attributes.
	...boxBorderAttributes,
	boxBorderStyle: {
		type: 'string',
		default: 'default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'box-border-style',
		},
	},
};

export default attributes;
