/**
 * The Confirmation Popup.
 */
import { Fragment, useRef } from '@wordpress/element';
import { Dialog, Transition } from '@headlessui/react';

const ConfirmationPopup = ( props ) => {
	const {
		showPopup,
		setShowPopup,
		popupContent,
		popupAccept,
		popupCancel,
	} = props;

	const cancelButtonRef = useRef( null );

	return (
		<Transition.Root
			show={ showPopup }
			as={ Fragment }
		>
			<Dialog
				as="div"
				className="fixed backdrop-blur-sm inset-0 overflow-y-auto"
				style={ { zIndex: 99999 } }
				initialFocus={ cancelButtonRef }
				onClose={ setShowPopup }
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={ Fragment }
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{ /* This element is to trick the browser into centering the modal contents. */ }
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={ Fragment }
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-50 sm:mx-0 sm:h-16 sm:w-16">
									<svg className="h-8 w-8 stroke-red-600" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M17 9.83333V16.5M17 23.1667H17.0167M32 16.5C32 24.7843 25.2843 31.5 17 31.5C8.71573 31.5 2 24.7843 2 16.5C2 8.21573 8.71573 1.5 17 1.5C25.2843 1.5 32 8.21573 32 16.5Z"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<Dialog.Title as="h3" className="text-2xl font-semibold text-slate-800">
										{ popupContent.title }
									</Dialog.Title>
									<p className="mt-2 text-sm text-slate-500">
										{ popupContent.description }
									</p>
								</div>
							</div>
							<div className="mt-6 sm:flex sm:flex-row sm:ml-20">
								<button
									type="button"
									className="w-full inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white focus:bg-red-700 hover:bg-red-700 focus:outline-none sm:mr-3 sm:w-auto sm:text-sm"
									onClick={ popupAccept.callback }
								>
									{ popupAccept.label }
								</button>
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded border border-slate-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-800 focus:bg-gray-50 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
									onClick={ popupCancel.callback }
									ref={ cancelButtonRef }
								>
									{ popupCancel.label }
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ConfirmationPopup;
