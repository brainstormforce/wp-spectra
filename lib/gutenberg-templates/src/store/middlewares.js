/**
 * External dependencies
 */
import { flowRight } from 'lodash';
import { saveCurrentState } from './custom-middlewares';

function applyMiddlewares( store ) {
	const middlewares = [ saveCurrentState ];

	if ( process.env.NODE_ENV === 'development' ) {
		const { logger } = require( 'redux-logger' );

		middlewares.push( logger );
	}

	let enhancedDispatch = () => {
		throw new Error(
			'Dispatching while constructing your middleware is not allowed. ' +
				'Other middleware would not be applied to this dispatch.',
		);
	};
	let chain = [];

	const middlewareAPI = {
		getState: store.getState,
		dispatch: ( ...args ) => enhancedDispatch( ...args ),
	};
	chain = middlewares.map( ( middleware ) => middleware( middlewareAPI ) );
	enhancedDispatch = flowRight( ...chain )( store.dispatch );

	store.dispatch = enhancedDispatch;
	return store;
}

export default applyMiddlewares;
