import reducer from './reducer';
import applyMiddlewares from './middlewares';
import selectors from './selectors';
import actions from './actions';

const { registerStore } = wp.data;

const store = registerStore('gutenberg-templates', {
	reducer,
	actions,
	selectors,
});

applyMiddlewares(store);
