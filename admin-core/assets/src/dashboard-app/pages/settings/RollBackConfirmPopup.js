/* This popup appears to confirm whether or not the user wishes to rollback to their selected version. */
import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Button } from '@bsf/force-ui';

const RollBackConfirmPopup = ( props ) => {
	const { openPopup, setopenPopup, previousVersionSelect, setconfirmPopup, popupContent, popupAccept, popupCancel } = props;

	const [ open, setOpen ] = useState( openPopup );

	const cancelButtonRef = useRef( null );

	useEffect( () => {
		setOpen( openPopup );
	}, [ openPopup ] );

	const onCancelClick = () => {
		setopenPopup( ! openPopup );
	};

	const onContinueClick = () => {
		const rollbackUrl = uag_react.rollback_url.replace( 'VERSION', previousVersionSelect );
		setopenPopup( false );
		setconfirmPopup( true );
		window.location.href = rollbackUrl;
	};

	return (
		<Transition.Root show={ open } as={ Fragment }>
			<Dialog
				as="div"
				className="fixed backdrop-blur-sm inset-0 overflow-y-auto"
				style={ { zIndex: 99999 } }
				initialFocus={ cancelButtonRef }
				onClose={ setOpen }
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
						<div className="inline-block p-3 rounded-lg bg-background-primary w-120 font-[Figtree]">
							<div className="mb-2 p-2">
								<div className="flex w-full justify-between items-center mb-2">
									<div className="text-base font-semibold text-text-primary">
										{ popupContent.title }
									</div>

									<X size={ 16 } onClick={ onCancelClick } className="cursor-pointer" />
								</div>

								<div className="text-sm text-text-secondary font-normal w-full text-left">
									{ popupContent.description }
								</div>
							</div>

							<div className="p-2">
								<div className="flex justify-end items-center w-full gap-3">
									<Button
										className="uagb-outline-button"
										size="md"
										tag="button"
										type="button"
										variant="outline"
										onClick={ onCancelClick }
										ref={ cancelButtonRef }
									>
										{ popupCancel.label }
									</Button>

									<Button
										className="bg-button-primary text-text-on-color uagb-remove-ring hover:bg-button-primary-hover"
										size="md"
										tag="button"
										type="button"
										variant="primary"
										onClick={ onContinueClick }
									>
										{ popupAccept.label }
									</Button>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default RollBackConfirmPopup;
