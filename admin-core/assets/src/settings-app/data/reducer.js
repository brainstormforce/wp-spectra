export const initialState = {
	is_cf_pro: true,
	admin_url: 'test_url',
	globaldata: [],
	options: [],
};

const reducer = ( state, data ) => {
	switch ( data.type ) {
		case 'SET_SETTINGS':
			return {
				...state,
				globaldata: data.commondata,
				options: data.commondata.options,
			};
		case 'SET_OPTION':
			let newOptions = state.options;
			newOptions[ data.name ] = data.value;
			return {
				...state,
				options: newOptions,
			};
		default:
			return state;
	}
};

export default reducer;
