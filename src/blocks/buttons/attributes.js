const itemCount = 2;

const buttons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const label = '#Click Here';
	const link = '#';
	buttons.push( {
		label,
		link,
		target: '_self',
		size: '',
		vPadding: '',
		hPadding: '',
		borderWidth: '',
		borderRadius: '',
		borderStyle: 'none',
		borderColor: '',
		borderHColor: '',
		color: '',
		background: '',
		hColor: '#333',
		hBackground: '',
		sizeType: 'px',
		sizeMobile: '',
		sizeTablet: '',
		lineHeight: '',
		lineHeightType: 'em',
		lineHeightMobile: '',
		lineHeightTablet: '',
	} );
}

const attributes = {
	block_id: {
		type: 'string',
	},
	btn_count: {
		type: 'number',
		default: itemCount,
	},
	buttons: {
		type: 'array',
		default: buttons,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	gap: {
		type: 'number',
		default: 10,
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	fontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	fontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	fontTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	fontDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
};

export default attributes;
