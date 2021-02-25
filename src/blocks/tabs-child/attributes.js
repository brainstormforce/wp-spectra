const attributes = {
	block_id :{
		type : "string"
	},
	id: {
		type: 'number',
		default: 0
	},
	header: {
		type: 'html',
	},
	tabActive: {
			type: 'number',
	},
	tabHeaders: {
		type: 'array',
		default: [
			'Tab 1',
			'Tab 2',
			'Tab 3',
		]
	}
}
export default attributes