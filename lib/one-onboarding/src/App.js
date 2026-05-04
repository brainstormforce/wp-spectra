import { Toaster } from '@bsf/force-ui';
import { Routes } from './components';
import { StoreProvider } from './store';

const App = () => {
	return (
		<StoreProvider>
			<div className="font-figtree bg-background-secondary min-h-screen">
				<Routes />
			</div>
			<Toaster />
		</StoreProvider>
	);
};

export default App;
