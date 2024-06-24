/**
 * BLOCK: FAQ Schema - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import { getBorderAttributes } from '@Controls/generateAttributes';
import save2_13_3 from './v2.13.3/save';
import attributes2_13_3 from './v2.13.3/attributes';

const borderAttributes = getBorderAttributes( 'overall' );

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
		default: false,
	},
	enableSchemaSupport: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'left',
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
	},
	rowsGap: {
		type: 'number',
		default: 10,
	},
	columnsGap: {
		type: 'number',
		default: 10,
	},
	boxBgColor: {
		type: 'string',
		default: '#FFFFFF',
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
		default: '#313131',
	},
	questionTextActiveColor: {
		type: 'string',
		default: '#656565',
	},
	questionPaddingTypeDesktop: {
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
	answerTextColor: {
		type: 'string',
		default: '#313131',
	},
	answerPaddingTypeDesktop: {
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
	iconColor: {
		type: 'string',
	},
	iconActiveColor: {
		type: 'string',
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
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
	icon: {
		type: 'string',
		default: 'fas fa-plus',
	},
	iconActive: {
		type: 'string',
		default: 'fas fa-minus',
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
		default: 12,
	},
	iconSizeMobile: {
		type: 'number',
		default: 12,
	},
	iconSizeType: {
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
	headingTag: {
		type: 'html',
		selector: 'span,p,h1,h2,h3,h4,h5,h6',
		default: 'span',
	},
	rowsGapUnit: {
		type: 'string',
		default: 'px',
	},
	...borderAttributes,
};

const deprecated = [
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
