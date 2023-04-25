/**
 * BLOCK: Tabs - Deprecated Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/deprecatedRenderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';
import newAttributesV2_0_14 from './deprecated/v2_0_14/attributes';
import newSaveV2_0_14 from './deprecated/v2_0_14/save';

const borderAttributes = getBorderAttributes( 'tab' );

const attributes = {
	block_id: {
		type: 'string',
	},
	tabHeaders: {
		type: 'array',
		default: [
			__( 'Tab 1', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 2', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 3', 'ultimate-addons-for-gutenberg' ),
		],
	},
	tabActive: {
		type: 'number',
		default: 0,
	},
	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},
	tabsStyleD: {
		type: 'string',
		default: 'hstyle1',
		UAGCopyPaste: {
			styleType: 'tabs-style',
		},
	},
	tabsStyleT: {
		type: 'string',
		default: 'vstyle6',
		UAGCopyPaste: {
			styleType: 'tabs-style-tablet',
		},
	},
	tabsStyleM: {
		type: 'string',
		default: 'vstyle6',
		UAGCopyPaste: {
			styleType: 'tabs-style-mobile',
		},
	},
	headerBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	headerTextColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	bodyBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	bodyTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
		default: '#e0e0e0',
	},
	borderHoverColor: {
		type: 'string',
	},
	activeTabBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	activeTabTextColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	tabTitleLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin',
		},
	},
	tabTitleRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin',
		},
	},
	tabTitleTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin',
		},
	},
	tabTitleBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	tabTitleLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet',
		},
	},
	tabTitleRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet',
		},
	},
	tabTitleTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet',
		},
	},
	tabTitleBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	tabTitleLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile',
		},
	},
	tabTitleRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile',
		},
	},
	tabTitleTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile',
		},
	},
	tabTitleBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	tabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-unit-margin',
		},
	},
	mobiletabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile',
		},
	},
	tablettabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet',
		},
	},
	tabTitleMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin',
		},
	},
	tabBodyRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin',
		},
	},
	tabBodyTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin',
		},
	},
	tabBodyBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	tabBodyLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet',
		},
	},
	tabBodyRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet',
		},
	},
	tabBodyTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet',
		},
	},
	tabBodyBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	tabBodyLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile',
		},
	},
	tabBodyRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile',
		},
	},
	tabBodyTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile',
		},
	},
	tabBodyBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	tabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit',
		},
	},
	mobiletabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile',
		},
	},
	tablettabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet',
		},
	},
	tabBodyMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding',
		},
	},
	tabBodyHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding',
		},
	},
	tabTitleLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding',
		},
	},
	tabTitleRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding',
		},
	},
	tabTitleTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding',
		},
	},
	tabTitleBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding',
		},
	},
	tabTitleLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet',
		},
	},
	tabTitleRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding-tablet',
		},
	},
	tabTitleTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding-tablet',
		},
	},
	tabTitleBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet',
		},
	},
	tabTitleLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-mobile',
		},
	},
	tabTitleRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-padding-mobile',
		},
	},
	tabTitleTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-padding-mobile',
		},
	},
	tabTitleBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-mobile',
		},
	},
	tabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit',
		},
	},
	mobiletabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-mobile',
		},
	},
	tablettabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-tablet',
		},
	},
	tabTitlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	tabBodyRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	tabBodyTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	tabBodyBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	tabBodyLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	tabBodyRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	tabBodyTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	tabBodyBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	tabBodyLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	tabBodyRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	tabBodyTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	tabBodyBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	tabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
	},
	mobiletabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
	},
	tablettabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
	},
	tabBodyPaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabTitleVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding',
		},
	},
	tabTitleHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding',
		},
	},
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-unit-size',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
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
			styleType: 'main-title-load-google-fonts',
		},
	},
	titleTransform: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	tabAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	titleAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
	},
	iconPosition: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'tab-icon-position',
		},
	},
	iconSpacing: {
		type: 'string',
		default: 10,
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconSpacingTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconSpacingMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconSize: {
		type: 'number',
		default: 16,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	activeiconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	titleLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	...borderAttributes,
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const { className } = props;
			const {
				block_id,
				tabHeaders,
				tabActiveFrontend,
				tabsStyleD,
				tabsStyleT,
				tabsStyleM,
				icon,
				showIcon,
				iconPosition,
			} = props.attributes;

			return (
				<div
					className={ classnames(
						className,
						`uagb-block-${ block_id }`,
						`uagb-tabs__wrap`,
						`uagb-tabs__${ tabsStyleD }-desktop`,
						`uagb-tabs__${ tabsStyleT }-tablet`,
						`uagb-tabs__${ tabsStyleM }-mobile`
					) }
					data-tab-active={ tabActiveFrontend }
				>
					<ul className="uagb-tabs__panel">
						{ tabHeaders.map( ( header, index ) => (
							<li key={ index } className="uagb-tab">
								<a
									href={ `#uagb-tabs__tab${ index }` }
									className={ `uagb-tabs__icon-position-${ iconPosition }` }
								>
									{ showIcon && ( iconPosition === 'left' || iconPosition === 'top' ) && (
										<span className="uagb-tabs__icon">{ renderSVG( icon ) }</span>
									) }
									<RichText.Content tagName={ 'span' } value={ header } />
									{ showIcon && ( iconPosition === 'right' || iconPosition === 'bottom' ) && (
										<span className="uagb-tabs__icon">{ renderSVG( icon ) }</span>
									) }
								</a>
							</li>
						) ) }
					</ul>
					<div className="uagb-tabs__body-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;
			const {
				block_id,
				tabHeaders,
				tabActiveFrontend,
				tabsStyleD,
				tabsStyleT,
				tabsStyleM,
				icon,
				showIcon,
				iconPosition,
				tabAlign,
			} = attributes;

			return (
				<div
					className={ classnames(
						className,
						`uagb-block-${ block_id }`,
						'uagb-tabs__wrap',
						`uagb-tabs__${ tabsStyleD }-desktop`,
						`uagb-tabs__${ tabsStyleT }-tablet`,
						`uagb-tabs__${ tabsStyleM }-mobile`
					) }
					data-tab-active={ tabActiveFrontend }
				>
					<ul className={ `uagb-tabs__panel uagb-tabs__align-${ tabAlign }` }>
						{ tabHeaders.map( ( header, index ) => (
							<li
								key={ index }
								className={ `uagb-tab ${ tabActiveFrontend === index ? 'uagb-tabs__active' : '' }` }
							>
								<a
									href={ `#uagb-tabs__tab${ index }` }
									className={ `uagb-tabs-list uagb-tabs__icon-position-${ iconPosition }` }
									data-tab={ index }
								>
									{ showIcon && ( iconPosition === 'left' || iconPosition === 'top' ) && (
										<span className="uagb-tabs__icon">{ renderSVG( icon ) }</span>
									) }
									<RichText.Content tagName={ 'span' } value={ header } />
									{ showIcon && ( iconPosition === 'right' || iconPosition === 'bottom' ) && (
										<span className="uagb-tabs__icon">{ renderSVG( icon ) }</span>
									) }
								</a>
							</li>
						) ) }
					</ul>
					<div className="uagb-tabs__body-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes: newAttributesV2_0_14,
		save: newSaveV2_0_14,
	},
];

export default deprecated;
