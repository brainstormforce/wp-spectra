/**
 * BLOCK: UAGB Tabs Block Attributes
 */

const attributes = {
	block_id :{
		type : "string"
	},
	tabHeaders: {
		type: 'array',
		default: ['Tab 1','Tab 2','Tab 3']
	},
	tabActive: {
		type: 'number',
		default: 0,
	},
	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},
	HorizontalStyle: {
		type: 'string',
	},
	tabsStyleD: {
		type: 'string',
		default: 'hstyle1'
	},
	tabsStyleT: {
		type: 'string',
		default: 'vstyle6'
	},
	tabsStyleM: {
		type: 'string',
		default: 'vstyle6'
	},
	headerBgColor: {
		type: 'string', 
	},
	headerTextColor: {
		type: 'string',
	},
	bodyBgColor: {
		type: 'string',
	},
	bodyTextColor: {
		type: 'string',
	},
	borderStyle: {
		type: 'string',
	},
	borderWidth: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	borderRadius: {
		type: 'number',
	},
	pid: {
		type: 'string',
	},
	activeTabBgColor: {
		type: 'string',
	},
	activeTabTextColor: {
		type: 'string',
	},
	changed: {
		type: 'boolean',
		default: false,
	},
	uniqueID: {
		type: 'string',
		default: ''
	},
	isTransform: {
		type: 'boolean',
		default: false
	},
	tabTitleLeftMargin :{
		type: "number",
	},
	tabTitleRightMargin :{
		type: "number",
	},
	tabTitleTopMargin :{
		type: "number",
	},
	tabTitleBottomMargin :{
		type: "number",
	},
	tabBodyLeftMargin :{
		type: "number",
	},
	tabBodyRightMargin :{
		type: "number",
	},
	tabBodyTopMargin :{
		type: "number",
	},
	tabBodyBottomMargin :{
		type: "number",
	},
	tabBodyVertPadding :{
		type: "number",
	},
	tabBodyHrPadding :{
		type: "number",
	},
	tabTitleVertPadding :{
		type: "number",
	},
	tabTitleHrPadding :{
		type: "number",
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	titleAlign: {
		type: "string",
		default: "center"
	},
	showIcon: {
		type: "boolean",
		default: false
	},
	Icon: {
		type: "string",
	},
	iconColor:{
		type: "string",
	},
	iconSize:{
		type: "number",
		default: 12,
	}
}

export default attributes
