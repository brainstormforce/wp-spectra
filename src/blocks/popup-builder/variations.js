/**
 * BLOCK: Popup Builder - Variant Picker.
 */
import { __ } from '@wordpress/i18n';
import variantIcons from './variant-icons';

/**
 * Template option choices for predefined popup layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'banner',
		title: __( 'Info Bar', 'ultimate-addons-for-gutenberg' ),
		icon: variantIcons.banner,
		attributes: {
			variationSelected: true,
			variantType: 'banner',
			popupPositionV: 'flex-start',
			popupHeight: 50,
			popupHeightUnit: 'px',
			hasFixedHeight: false,
			hasOverlay: false,
			backgroundType: 'color',
			backgroundColor: '#6104ff',
			closeIconSize: 20,
			closeIconColor:'#ffffff',
			closePaddingTop: 12,
			closePaddingRight: 12,
			closePaddingBottom: 12,
			closePaddingLeft: 12,
			popupPaddingTop: 8,
			popupPaddingRight: 8,
			popupPaddingBottom: 8,
			popupPaddingLeft: 8,
			contentBorderStyle: 'default',
		},
		scope: [ 'block' ],
		innerBlocks: [
			[ 'uagb/container', {
				widthDesktop: 100,
				directionDesktop: 'row',
				directionTablet: 'column',
				backgroundType: 'color',
				backgroundSizeTablet: 'cover',
				backgroundSizeMobile: 'cover',
				backgroundColor: '',
				topPaddingDesktop: 0,
				bottomPaddingDesktop: 0,
				leftPaddingDesktop: 0,
				rightPaddingDesktop: 0,
				topPaddingTablet: 0,
				bottomPaddingTablet: 0,
				leftPaddingTablet: 0,
				rightPaddingTablet: 0,
				topPaddingMobile: 0,
				bottomPaddingMobile: 0,
				leftPaddingMobile: 0,
				rightPaddingMobile: 0,
				variationSelected: true,
				widthSetByUser: true,
				rowGapDesktop: 20,
				rowGapTablet: 25,
				rowGapMobile: 20,
				columnGapDesktop: 30,
			}, [
				[ 'uagb/container', {
					widthDesktop: 25,
					topPaddingDesktop: 0,
					bottomPaddingDesktop: 0,
					leftPaddingDesktop: 0,
					rightPaddingDesktop: 0,
					topPaddingTablet: 0,
					bottomPaddingTablet: 0,
					leftPaddingTablet: 0,
					rightPaddingTablet: 0,
					topPaddingMobile: 0,
					bottomPaddingMobile: 0,
					leftPaddingMobile: 0,
					rightPaddingMobile: 0,
					variationSelected: true,
					widthSetByUser: true,
				}, [
					[ 'uagb/countdown', {
						showSeparator: false,
						digitColor: '#1e293b',
						digitFontWeight: 600,
						digitFontSize: 21,
						digitFontSizeTablet: 24,
						digitFontSizeMobile: 20,
						labelColor: '#1e293b',
						labelFontWeight: 400,
						labelFontSize: 9,
						labelFontSizeTablet: 8,
						labelFontSizeMobile: 8,
						separatorRightSpacing: 40,
						separatorRightSpacingTablet: 27,
						separatorRightSpacingMobile: 16,
						boxTopPadding: 0,
						boxRightPadding: 0,
						boxLeftPadding: 0,
						boxBottomPadding: 0,
						boxTopPaddingMobile: 5,
						boxRightPaddingMobile: 5,
						boxLeftPaddingMobile: 5,
						boxBottomPaddingMobile: 5,
						boxWidth: 60,
						boxWidthMobile: 40,
						boxSpacing: 15,
						internalBoxSpacing: 4,
						internalBoxSpacingTablet: 4,
						internalBoxSpacingMobile: 2,
						labelVerticalAlignment: 'end',
						labelVerticalAlignmentTablet: 'end',
						labelVerticalAlignmentMobile: 'end',
						boxBgType: 'color',
						boxBgColor: '#ffffff',
						boxShadowColor: 'rgb(0 0 0 / 15%)',
						boxShadowBlur: 0,
						boxShadowSpread: 0,
						boxBorderTopWidth: 2,
						boxBorderLeftWidth: 2,
						boxBorderRightWidth: 2,
						boxBorderBottomWidth: 2,
						boxBorderTopLeftRadius: 6,
						boxBorderTopRightRadius: 6,
						boxBorderBottomLeftRadius: 6,
						boxBorderBottomRightRadius: 6,
						boxBorderRadiusUnit: '%',
						boxBorderTopWidthTablet: 2,
						boxBorderLeftWidthTablet: 2,
						boxBorderRightWidthTablet: 2,
						boxBorderBottomWidthTablet: 2,
						boxBorderTopLeftRadiusTablet: 6,
						boxBorderTopRightRadiusTablet: 6,
						boxBorderBottomLeftRadiusTablet: 6,
						boxBorderBottomRightRadiusTablet: 6,
						boxBorderRadiusUnitTablet: '%',
						boxBorderTopWidthMobile: 2,
						boxBorderLeftWidthMobile: 2,
						boxBorderRightWidthMobile: 2,
						boxBorderBottomWidthMobile: 2,
						boxBorderTopLeftRadiusMobile: 6,
						boxBorderTopRightRadiusMobile: 6,
						boxBorderBottomLeftRadiusMobile: 6,
						boxBorderBottomRightRadiusMobile: 6,
						boxBorderRadiusUnitMobile: '%',
						boxBorderStyle: 'none',
						boxBorderColor: 'rgba(33,33,33,0.67)',
						blockTopPadding: 0,
						blockRightPadding: 0,
						blockBottomPadding: 0,
						blockLeftPadding: 0,						
					} ],
				] ],
				[ 'uagb/container', {
					widthDesktop: 45,
					widthTablet: 100,
					topPaddingDesktop: 0,
					bottomPaddingDesktop: 0,
					leftPaddingDesktop: 0,
					rightPaddingDesktop: 0,
					topPaddingTablet: 0,
					bottomPaddingTablet: 0,
					leftPaddingTablet: 0,
					rightPaddingTablet: 0,
					topPaddingMobile: 0,
					bottomPaddingMobile: 0,
					leftPaddingMobile: 0,
					rightPaddingMobile: 0,
					variationSelected: true,
					widthSetByUser: true,
				}, [
					[ 'uagb/advanced-heading', {
						classMigrate: true,
						headingDescToggle: false,
						headingAlign: 'left',
						headingAlignTablet: 'center',
						headingAlignMobile: 'center',
						headingColor: '#ffffff',
						headingTag: 'h3',
						headingTitle: __( 'Engage your visitors!', 'ultimate-addons-for-gutenberg' ),
					} ],
				] ],
				[ 'uagb/container', {
					widthDesktop: 20,
					widthTablet: 100,
					topPaddingDesktop: 0,
					bottomPaddingDesktop: 0,
					leftPaddingDesktop: 0,
					rightPaddingDesktop: 0,
					topPaddingTablet: 0,
					bottomPaddingTablet: 0,
					leftPaddingTablet: 0,
					rightPaddingTablet: 0,
					topPaddingMobile: 0,
					bottomPaddingMobile: 0,
					leftPaddingMobile: 0,
					rightPaddingMobile: 0,
					variationSelected: true,
					widthSetByUser: true,
				}, [
					[ 'uagb/buttons', { classMigrate: true, childMigrate: true, align: 'right' }, [
						[ 'uagb/buttons-child', {
							link: '#',
							color: '#1e293b',
							hColor: '',
							background: '#ffffff',
							hBackground: '#f2f2f2',
							borderStyle: '',
							borderColor: '',
							borderHColor: '',
							btnBorderTopWidth: 1,
							btnBorderLeftWidth: 1,
							btnBorderRightWidth: 1,
							btnBorderBottomWidth: 1,
							btnBorderTopLeftRadius: 30,
							btnBorderTopRightRadius: 30,
							btnBorderBottomLeftRadius: 30,
							btnBorderBottomRightRadius: 30,
							btnBorderStyle: 'none',
							btnBorderHColor: '#333',
						} ]
					] ],
				] ],
			] ],
		],
	},
	{
		name: 'popup',
		title: __( 'Popup', 'ultimate-addons-for-gutenberg' ),
		icon: variantIcons.popup,
		attributes: {
			variationSelected: true,
			variantType: 'popup',
			popupPositionH: 'center',
			popupPositionV: 'center',
			popupHeight: 400,
			popupHeightUnit: 'px',
			hasFixedHeight: false,
			contentBorderStyle: 'none',
			contentBorderTopLeftRadius: 4,
			contentBorderTopRightRadius: 4,
			contentBorderBottomLeftRadius: 4,
			contentBorderBottomRightRadius: 4,
		},
		isDefault: true,
		scope: [ 'block' ],
		innerBlocks: [
			[ 'uagb/info-box', {
				icon: 'circle-check',
				iconBottomMargin: 15,
				infoBoxTitle: __( 'Engage Your Visitors!', 'ultimate-addons-for-gutenberg' ),
				subHeadSpace: 30,
				ctaType: 'button',
				showCtaIcon: false,
				ctaText: __( 'Call To Action', 'ultimate-addons-for-gutenberg' ),
				paddingBtnTop: 14,
				paddingBtnRight: 28,
				paddingBtnBottom: 14,
				paddingBtnLeft: 28,
				btnBorderStyle: 'default',
			} ],
		],
	},
];

export default variations;
