import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import selectors from './selectors';
import actions from './actions';
import controls from './controls';

export const STORE_KEY = 'ast-block-templates';

const store = createReduxStore( STORE_KEY, {
	reducer,
	actions,
	selectors,
	controls,
} );

register( store );
