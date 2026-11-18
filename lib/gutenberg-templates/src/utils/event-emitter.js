const EventBus = ( () => {
	const events = {};

	const on = ( eventName, listener ) => {
		if ( ! events[ eventName ] ) {
			events[ eventName ] = [];
		}
		events[ eventName ].push( listener );
	};

	const emit = ( eventName, ...args ) => {
		const listeners = events[ eventName ];
		if ( listeners ) {
			listeners.forEach( ( listener ) => listener( ...args ) );
		}
	};

	const removeListener = ( eventName, listenerToRemove ) => {
		const listeners = events[ eventName ];
		if ( listeners ) {
			const index = listeners.findIndex( ( listener ) => listener === listenerToRemove );
			if ( index !== -1 ) {
				listeners.splice( index, 1 );
			}
		}
	};

	const removeAllListeners = ( eventName ) => {
		if ( events[ eventName ] ) {
			delete events[ eventName ];
		}
	};

	return Object.seal( {
		on,
		emit,
		removeListener,
		removeAllListeners,
	} );
} )();

export default EventBus;
