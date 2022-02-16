const getUAGEditorStateLocalStorage = ( key = false ) => {
	if ( ! window.localStorage ) {
		return null;
	}

	if ( ! key ) {
		return localStorage;
	}

	const uagLastOpenedState = localStorage.getItem( 'uagLastOpenedState' );

	if ( uagLastOpenedState ) {

		return JSON.parse( uagLastOpenedState )
	}

	return null;
};

export default getUAGEditorStateLocalStorage;
