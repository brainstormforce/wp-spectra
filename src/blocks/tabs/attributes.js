/**
 * BLOCK: UAGB Tabs Block Attributes
 */

const attributes = {
	block_id :{
		type : "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
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
	tabsStyleD: {
		type: 'string',
		default: 'horz'
	},
	tabsStyleT: {
		type: 'string',
		default: 'vert'
	},
	tabsStyleM: {
		type: 'string',
		default: 'vert'
	},
	headerBgColor: {
		type: 'string', 
		default: '#e0e0e0',
	},
	headerTextColor: {
		type: 'string',
		default: '#fff',
	},
	bodyBgColor: {
		type: 'string',
	},
	bodyTextColor: {
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
	borderColor: {
		type: 'string',
		default: '#000000',
	},
	borderRadius: {
		type: 'number',
		default: 10,
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
	isPreview: {
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
	}
}

export default attributes
