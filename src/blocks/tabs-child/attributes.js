const attributes = {
	block_id :{
		type : "string"
	},
	id: {
		type: 'number',
		default: 0
	},
	pid: {
		type: 'string',
	},
	header: {
		type: 'html',
	},
	tabActive: {
			type: 'number',
	},
	changed: {
		type: 'boolean',
		default: false,
	},
	tabHeaders: {
		type: 'array',
		default: [
			'Tab 1',
			'Tab 2',
			'Tab 3',
		]
	},
	uniqueID: {
		type: 'string',
		default: '',
	}
}
export default attributes