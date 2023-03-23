/* This popup handles all the setting update notifications */
import { Fragment, useEffect } from '@wordpress/element';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { useSelector, useDispatch } from 'react-redux';

export default function SettingsSavedNotification() {

	const dispatch = useDispatch();

	let settingsSavedNotification = useSelector( ( state ) => state.settingsSavedNotification );
	let messageType;

	// To render a warning or error icon, send the payload as an Object with two KV pairs.
	// message: The Settings Saved Notification String.
	// messageType: The Icon Type.
	if ( 'object' === typeof settingsSavedNotification ) {
		messageType = settingsSavedNotification.messageType;
		settingsSavedNotification = settingsSavedNotification.message;
	}

	useEffect( () => {
		if ( '' !== settingsSavedNotification ) {
			setTimeout( () => {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: '' } );
			}, 2000 );
		}
	}, [ settingsSavedNotification ] );

	// Render the required Icon.
	const renderIcon = () => {
		switch ( messageType ) {
			case 'warning':
				return ( <ExclamationCircleIcon className="h-6 w-6 text-amber-400" aria-hidden="true" /> );
			case 'error':
				return ( <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" /> );
			default:
				return ( '' === settingsSavedNotification ) ? '' : ( <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" /> );
		}
	}

	return (
		<>
			{/* Global notification live region, render this permanently at the end of the document */}
			<div
				aria-live="assertive"
				className="fixed inset-10 z-10 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
			>
				<div className="w-full flex flex-col items-center space-y-4 sm:items-end">
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={ '' === settingsSavedNotification ? false : true }
						as={ Fragment }
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										{ renderIcon() }
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900">{ settingsSavedNotification }</p>
									</div>
									<div className="ml-4 flex-shrink-0 flex">
									<button
											className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={ () => {
												dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: '' } );
											} }
										>
											<span className="sr-only">Close</span>
											<XIcon className="h-5 w-5" aria-hidden="true" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
}
