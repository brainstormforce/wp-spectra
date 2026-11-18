const EventEmitter = ( () => {
	const events = {};

	const on = ( eventName, listener ) => {
		const prefixedEventName = `ast:${ eventName }`;
		if ( ! events[ prefixedEventName ] ) {
			events[ prefixedEventName ] = listener;
		}
		document.addEventListener( prefixedEventName, listener );
	};

	const emit = ( eventName, detail ) => {
		const prefixedEventName = `ast:${ eventName }`;
		const event = new CustomEvent( prefixedEventName, { detail } );
		document.dispatchEvent( event );
	};

	const off = ( eventName, listenerToRemove ) => {
		const prefixedEventName = `ast:${ eventName }`;
		const listener = events[ prefixedEventName ];
		if ( listener ) {
			document.removeEventListener( prefixedEventName, listenerToRemove );
		}
	};

	return Object.seal( {
		on,
		emit,
		off,
	} );
} )();

export default EventEmitter;
