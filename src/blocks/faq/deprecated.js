/**
 * BLOCK: FAQ Schema - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getBorderAttributes } from '@Controls/generateAttributes';
import save2_13_3 from './v2.13.3/save';
import attributes2_13_3 from './v2.13.3/attributes';

const borderAttributes = getBorderAttributes( 'overall' );
const iconBorderAttributes = getBorderAttributes( 'icon' );

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'accordion',
	},
	inactiveOtherItems: {
		type: 'boolean',
		default: true,
	},
	expandFirstItem: {
		type: 'boolean',
		default: true,
	},
	enableSchemaSupport: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'left',
	},
	anchor: {
		type: 'string',
		default: '',
	},
	blockTopPadding: {
		type: 'number',
	},
	blockRightPadding: {
		type: 'number',
	},
	blockLeftPadding: {
		type: 'number',
	},
	blockBottomPadding: {
		type: 'number',
	},
	blockTopPaddingTablet: {
		type: 'number',
	},
	blockRightPaddingTablet: {
		type: 'number',
	},
	blockLeftPaddingTablet: {
		type: 'number',
	},
	blockBottomPaddingTablet: {
		type: 'number',
	},
	blockTopPaddingMobile: {
		type: 'number',
	},
	blockRightPaddingMobile: {
		type: 'number',
	},
	blockLeftPaddingMobile: {
		type: 'number',
	},
	blockBottomPaddingMobile: {
		type: 'number',
	},
	blockPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
	},
	blockPaddingUnitMobile: {
		type: 'string',
		default: 'px',
	},
	blockPaddingLink: {
		type: 'boolean',
		default: true,
	},
	blockTopMargin: {
		type: 'number',
	},
	blockRightMargin: {
		type: 'number',
	},
	blockLeftMargin: {
		type: 'number',
	},
	blockBottomMargin: {
		type: 'number',
	},
	blockTopMarginTablet: {
		type: 'number',
	},
	blockRightMarginTablet: {
		type: 'number',
	},
	blockLeftMarginTablet: {
		type: 'number',
	},
	blockBottomMarginTablet: {
		type: 'number',
	},
	blockTopMarginMobile: {
		type: 'number',
	},
	blockRightMarginMobile: {
		type: 'number',
	},
	blockLeftMarginMobile: {
		type: 'number',
	},
	blockBottomMarginMobile: {
		type: 'number',
	},
	blockMarginUnit: {
		type: 'string',
		default: 'px',
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
	},
	blockMarginUnitMobile: {
		type: 'string',
		default: 'px',
	},
	blockMarginLink: {
		type: 'boolean',
		default: true,
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
	},
	rowsGap: {
		type: 'number',
		default: 10,
	},
	rowsGapTablet: {
		type: 'number',
	},
	rowsGapMobile: {
		type: 'number',
	},
	rowsGapUnit: {
		type: 'string',
		default: 'px',
	},
	columnsGap: {
		type: 'number',
		default: 10,
	},
	columnsGapTablet: {
		type: 'number',
	},
	columnsGapMobile: {
		type: 'number',
	},
	columnsGapUnit: {
		type: 'string',
		default: 'px',
	},
	boxBgType: {
		type: 'string',
		default: 'color',
	},
	boxBgHoverType: {
		type: 'string',
		default: 'color',
	},
	boxBgColor: {
		type: 'string',
		default: '',
	},
	boxBgHoverColor: {
		type: 'string',
		default: '',
	},
	boxPaddingTypeMobile: {
		type: 'string',
		default: 'px',
	},
	boxPaddingTypeTablet: {
		type: 'string',
		default: 'px',
	},
	boxPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	vBoxPaddingMobile: {
		type: 'number',
		default: 10,
	},
	hBoxPaddingMobile: {
		type: 'number',
		default: 10,
	},
	vBoxPaddingTablet: {
		type: 'number',
		default: 10,
	},
	hBoxPaddingTablet: {
		type: 'number',
		default: 10,
	},
	vBoxPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	hBoxPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	borderHoverColor: {
		type: 'string',
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
		default: 2,
	},
	borderColor: {
		type: 'string',
		default: '#D2D2D2',
	},
	questionTextColor: {
		type: 'string',
	},
	questionTextActiveColor: {
		type: 'string',
	},
	questionTextBgColor: {
		type: 'string',
	},
	questionTextActiveBgColor: {
		type: 'string',
	},
	questionPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	questionPaddingTypeTablet: {
		type: 'string',
		default: 'px',
	},
	questionPaddingTypeMobile: {
		type: 'string',
		default: 'px',
	},
	vquestionPaddingMobile: {
		type: 'number',
		default: 10,
	},
	vquestionPaddingTablet: {
		type: 'number',
		default: 10,
	},
	vquestionPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	hquestionPaddingMobile: {
		type: 'number',
		default: 10,
	},
	hquestionPaddingTablet: {
		type: 'number',
		default: 10,
	},
	hquestionPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	questionSpacingLink: {
		type: 'boolean',
		default: false,
	},
	questionLeftPaddingTablet: {
		type: 'number',
		default: 10,
	},
	questionBottomPaddingTablet: {
		type: 'number',
		default: 10,
	},
	questionLeftPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	questionBottomPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	questionLeftPaddingMobile: {
		type: 'number',
		default: 10,
	},
	questionBottomPaddingMobile: {
		type: 'number',
		default: 10,
	},
	answerTextColor: {
		type: 'string',
	},
	answerPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	answerPaddingTypeTablet: {
		type: 'string',
		default: 'px',
	},
	answerPaddingTypeMobile: {
		type: 'string',
		default: 'px',
	},
	vanswerPaddingMobile: {
		type: 'number',
		default: 10,
	},
	vanswerPaddingTablet: {
		type: 'number',
		default: 10,
	},
	vanswerPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	hanswerPaddingMobile: {
		type: 'number',
		default: 10,
	},
	hanswerPaddingTablet: {
		type: 'number',
		default: 10,
	},
	hanswerPaddingDesktop: {
		type: 'number',
		default: 10,
	},
	answerSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerTopPadding: {
		type: 'number',
		default: 10,
	},
	answerRightPadding: {
		type: 'number',
		default: 10,
	},
	answerBottomPadding: {
		type: 'number',
		default: 10,
	},
	answerLeftPadding: {
		type: 'number',
		default: 10,
	},
	answerTopPaddingTablet: {
		type: 'number',
		default: 10,
	},
	answerRightPaddingTablet: {
		type: 'number',
		default: 10,
	},
	answerBottomPaddingTablet: {
		type: 'number',
		default: 10,
	},
	answerLeftPaddingTablet: {
		type: 'number',
		default: 10,
	},
	answerTopPaddingMobile: {
		type: 'number',
		default: 10,
	},
	answerRightPaddingMobile: {
		type: 'number',
		default: 10,
	},
	answerBottomPaddingMobile: {
		type: 'number',
		default: 10,
	},
	answerLeftPaddingMobile: {
		type: 'number',
		default: 10,
	},
	iconColor: {
		type: 'string',
	},
	iconActiveColor: {
		type: 'string',
	},
	iconBgColor: {
		type: 'string',
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
	},
	gapBtwIconQUestionTablet: {
		type: 'number',
	},
	gapBtwIconQUestionMobile: {
		type: 'number',
	},
	questionloadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	answerloadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	questionFontFamily: {
		type: 'string',
		default: 'Default',
	},
	questionFontWeight: {
		type: 'string',
	},
	questionFontSubset: {
		type: 'string',
	},
	questionFontStyle: {
		type: 'string',
		default: 'normal',
	},
	questionTransform: {
		type: 'string',
	},
	questionDecoration: {
		type: 'string',
	},
	questionFontSize: {
		type: 'number',
	},
	questionFontSizeType: {
		type: 'string',
		default: 'px',
	},
	questionFontSizeTablet: {
		type: 'number',
	},
	questionFontSizeMobile: {
		type: 'number',
	},
	questionLineHeight: {
		type: 'number',
	},
	questionLineHeightType: {
		type: 'string',
		default: 'em',
	},
	questionLineHeightTablet: {
		type: 'number',
	},
	questionLineHeightMobile: {
		type: 'number',
	},
	questionLetterSpacing: {
		type: 'number',
	},
	questionLetterSpacingTablet: {
		type: 'number',
	},
	questionLetterSpacingMobile: {
		type: 'number',
	},
	questionLetterSpacingType: {
		type: 'string',
		default: 'px',
	},
	answerFontFamily: {
		type: 'string',
		default: 'Default',
	},
	answerFontWeight: {
		type: 'string',
	},
	answerFontSubset: {
		type: 'string',
	},
	answerFontStyle: {
		type: 'string',
		default: 'normal',
	},
	answerTransform: {
		type: 'string',
	},
	answerDecoration: {
		type: 'string',
	},
	answerFontSize: {
		type: 'number',
	},
	answerFontSizeType: {
		type: 'string',
		default: 'px',
	},
	answerFontSizeTablet: {
		type: 'number',
	},
	answerFontSizeMobile: {
		type: 'number',
	},
	answerLineHeight: {
		type: 'number',
	},
	answerLineHeightType: {
		type: 'string',
		default: 'em',
	},
	answerLineHeightTablet: {
		type: 'number',
	},
	answerLineHeightMobile: {
		type: 'number',
	},
	answerLetterSpacing: {
		type: 'number',
	},
	answerLetterSpacingTablet: {
		type: 'number',
	},
	answerLetterSpacingMobile: {
		type: 'number',
	},
	answerLetterSpacingType: {
		type: 'string',
		default: 'px',
	},
	icon: {
		type: 'string',
		default: 'plus',
	},
	iconActive: {
		type: 'string',
		default: 'minus',
	},
	iconAlign: {
		type: 'string',
		default: 'row',
	},
	iconSize: {
		type: 'number',
		default: 12,
	},
	iconSizeTablet: {
		type: 'number',
	},
	iconSizeMobile: {
		type: 'number',
	},
	iconSizeType: {
		type: 'string',
		default: 'px',
	},
	iconBgSize: {
		type: 'number',
	},
	iconBgSizeTablet: {
		type: 'number',
	},
	iconBgSizeMobile: {
		type: 'number',
	},
	iconBgSizeType: {
		type: 'string',
		default: 'px',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	schema: {
		type: 'string',
		default: '',
	},
	enableToggle: {
		type: 'boolean',
		default: true,
	},
	equalHeight: {
		type: 'boolean',
		default: true,
	},
	headingTag: {
		type: 'html',
		selector: 'span,p,h1,h2,h3,h4,h5,h6',
		default: 'span',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
	...iconBorderAttributes,
};

const deprecated = [
	{
		attributes,
		save() {
			const blockProps = useBlockProps.save();
			return (
				<div { ...blockProps }>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
	{
		attributes,
		save() {
			return <InnerBlocks.Content />;
		},
	},
	{
		attributes,
		save( props ) {
			const { className } = props;
			const { block_id, schema, enableSchemaSupport, equalHeight } = props.attributes;

			const renderSchema = () => {
				if ( true === enableSchemaSupport ) {
					return <script type="application/ld+json">{ schema }</script>;
				}

				return '';
			};

			const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

			return (
				<div
					className={ classnames(
						className,
						'uagb-faq__outer-wrap',
						`uagb-block-${ block_id }`,
						`uagb-faq-icon-${ props.attributes.iconAlign }`,
						`uagb-faq-layout-${ props.attributes.layout }`,
						`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
						`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
						equalHeightClass
					) }
					data-faqtoggle={ props.attributes.enableToggle }
				>
					{ renderSchema() }
					<div className="uagb-faq__wrap uagb-buttons-layout-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { className } = props;
			const { block_id, schema, enableSchemaSupport, equalHeight } = props.attributes;

			const renderSchema = () => {
				if ( true === enableSchemaSupport ) {
					return <script type="application/ld+json">{ schema }</script>;
				}

				return '';
			};

			const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

			return (
				<div
					className={ classnames(
						className,
						'uagb-faq__outer-wrap',
						`uagb-block-${ block_id }`,
						`uagb-faq-icon-${ props.attributes.iconAlign }`,
						`uagb-faq-layout-${ props.attributes.layout }`,
						`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
						`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
						equalHeightClass
					) }
					data-faqtoggle={ props.attributes.enableToggle }
					role="tablist"
				>
					{ renderSchema() }
					<div className="uagb-faq__wrap uagb-buttons-layout-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { className } = props;
			const { block_id, schema, enableSchemaSupport, equalHeight } = props.attributes;

			const renderSchema = () => {
				if ( true === enableSchemaSupport ) {
					return <script type="application/ld+json">{ schema }</script>;
				}

				return '';
			};

			const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';

			return (
				<div
					className={ classnames(
						className,
						'uagb-faq__outer-wrap',
						`uagb-block-${ block_id }`,
						`uagb-faq-icon-${ props.attributes.iconAlign }`,
						`uagb-faq-layout-${ props.attributes.layout }`,
						`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
						`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
						equalHeightClass
					) }
					data-faqtoggle={ props.attributes.enableToggle }
					role="tablist"
				>
					{ renderSchema() }
					<div className="uagb-faq__wrap uagb-buttons-layout-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes: attributes2_13_3,
		save: save2_13_3,
	}
];

export default deprecated;
