import { ErrorIconFilled, SuccessIconFilled, SyncIconFilled } from '../../ui/icons';
import Toaster from './toaster';
import { ArrowDownTrayIcon, BoltIcon } from '@heroicons/react/24/outline';

const toasterBody = ( { title, message, showProgress = false, progress = 0 } ) => {
	return <Toaster title={ title } message={ message } progress={ progress } progressBar={ showProgress } />;
};

const getAnimatedSyncIcon = () => {
	return (
		<SyncIconFilled className="animate-spin w-10 h-10" />
	);
};

const getPersonalizedIcon = () => {
	return (
		<BoltIcon className="text-accent-spectra" />
	);
};

const insertingIcon = () => {
	return (
		<ArrowDownTrayIcon className="w-6 h-6 text-accent-spectra" />
	);
};

const AUTO_CLOSE_DURATION = 5000;

toasterBody.getOptions = ( { type = 'success' } ) => {
	switch ( type ) {
		case 'success':
			return {
				icon: SuccessIconFilled,
				autoClose: AUTO_CLOSE_DURATION,
			};
		// Creating a new case for error-import without autoClose for manual removal of popup.
		case 'error-import':
			return {
				icon: ErrorIconFilled,
			};
		case 'error':
			return {
				icon: ErrorIconFilled,
				autoClose: AUTO_CLOSE_DURATION,
			};
		case 'sync':
			return {
				icon: getAnimatedSyncIcon,
			};
		case 'personalize':
			return {
				icon: getPersonalizedIcon,
			};
		case 'sync-lib-start':
			return {
				icon: getAnimatedSyncIcon,
				closeButton: false,
			};
		case 'sync-lib-success':
			return {
				icon: SuccessIconFilled,
				closeButton: true,
				autoClose: AUTO_CLOSE_DURATION,
			};
		case 'sync-lib-error':
			return {
				icon: ErrorIconFilled,
				closeButton: true,
				autoClose: AUTO_CLOSE_DURATION,
			};
		case 'importing-site':
			return {
				icon: insertingIcon,
				closeButton: false,
			};
		default:
			return {
				icon: SuccessIconFilled,
			};
	}
};

const toaster = new Proxy( toasterBody, {
	get: ( target, prop ) => {
		if ( prop in target ) {
			return target[ prop ];
		}
		return toasterBody;
	},
} );

export default toaster;
