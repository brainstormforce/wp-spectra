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
		isUAGStyle: true,
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
	},
	rowsGap: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	columnsGap: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	boxBgColor: {
		type: 'string',
		isUAGStyle: true,
		default: ''
	},
	boxPaddingTypeMobile: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	boxPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	boxPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	vBoxPaddingMobile: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	hBoxPaddingMobile: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	vBoxPaddingTablet: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	hBoxPaddingTablet: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	vBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	hBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	questionTextColor: {
		type: 'string',
		isUAGStyle: true,
	},
	questionTextActiveColor: {
		type: 'string',
		isUAGStyle: true,
	},
	questionPaddingTypeDesktop: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	questionPaddingTypeTablet: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	questionPaddingTypeMobile: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	vquestionPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	vquestionPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	vquestionPaddingDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hquestionPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hquestionPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hquestionPaddingDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	answerTextColor: {
		type: 'string',
		isUAGStyle: true,
	},
	answerPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	answerPaddingTypeTablet: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	answerPaddingTypeMobile: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	vanswerPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	vanswerPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	vanswerPaddingDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hanswerPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hanswerPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	hanswerPaddingDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	iconColor: {
		type: 'string',
		isUAGStyle: true,
	},
	iconActiveColor: {
		type: 'string',
		isUAGStyle: true,
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionloadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	answerloadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	questionFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	questionFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	questionFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	questionTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	questionDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	questionFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	questionFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	questionFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	questionFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	questionLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	questionLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	questionLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	questionLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	answerFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	answerFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	answerFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	answerTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	answerDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	answerFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	answerFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	answerFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	answerLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	iconSize: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	iconSizeTablet: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	iconSizeMobile: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	iconSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	columns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	tcolumns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	mcolumns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	questionLeftPaddingTablet: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionBottomPaddingTablet: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionLeftPaddingDesktop: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionBottomPaddingDesktop: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionLeftPaddingMobile: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	questionBottomPaddingMobile: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	headingTag: {
		type: 'html',
		selector: 'span,p,h1,h2,h3,h4,h5,h6',
		default: 'span',
	},
	questionSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	answerRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	answerBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	answerTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	answerTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	answerRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	answerBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	answerLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
};
export default attributes;
