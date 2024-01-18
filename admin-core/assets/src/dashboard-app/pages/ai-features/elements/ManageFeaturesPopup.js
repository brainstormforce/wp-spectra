/**
 * The Manage Features Popup.
 */
import { Fragment, useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import getApiData from '@Controls/getApiData';

const ManageFeaturesPopup = ( props ) => {
	const {
		showPopup,
		setShowPopup,
	} = props;

	const cancelButtonRef = useRef( null );

	// State to check if any modules are being updated.
	const [ isUpdating, setIsUpdating ] = useState( {
		atLeastOneUpdate: false,
		ai_assistant: false,
		ai_design_copilot: false,
	} );

	// Disable the body scroll when the popup is open.
	useEffect( () => {
		if ( showPopup ) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [ showPopup ] );

	// Get the current Zip AI status.
    const dispatch = useDispatch();
    const currentZipAiStatus = useSelector( ( state ) => state.zipAiModules );
	const {
		ai_assistant: zipAiAssistant,
		ai_design_copilot: zipAiDesignCopilot,
	} = currentZipAiStatus;

	// Small function to check if a module exists, and if so whether it is enabled or not - Returns true, false or undefined.
	const checkModuleStatus = ( theModule ) => {
		switch ( theModule?.status ) {
			case 'enabled':
				return true;
			case 'disabled':
				return false;
			default:
				return undefined;
		}		
	};

	const zipAiAssistantStatus = checkModuleStatus( zipAiAssistant );
	const zipAiDesignCopilotStatus = checkModuleStatus( zipAiDesignCopilot );

	// Update the Zip AI status.
    const updateZipAiStatus = ( moduleName, value ) => {
		setIsUpdating( {
			...isUpdating,
			atLeastOneUpdate: true,
			[ moduleName ]: true,
		} );

		// Toggle the status.
        const updatedValue = value ? 'disabled' : 'enabled';

		// Update the status in the store.
		const updatedZipAiStatus = currentZipAiStatus;
		updatedZipAiStatus[ moduleName ].status = updatedValue;

		dispatch( { type: 'UPDATE_ZIP_AI_MODULES', payload: { ...updatedZipAiStatus } } );
        
		// Create an object with the security and value properties. Send the value as a string for easier sanitization.
        const data = {
            security: uag_react.zip_ai_module_status_nonce,
			module: moduleName,
            value: updatedValue,
        };

		// Send the data to the server.
        const getApiDataFetch = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_zip_ai_module_status',
            data,
        } );

		// Update the notification.
		getApiDataFetch.then( ( response ) => {
			if ( response?.success ) {
				// Update the success notification.
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: response?.data?.messsage || __( 'Successfully saved!' , 'ultimate-addons-for-gutenberg' ) } );
			} else {
				// Update the failed notification.
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: response?.data?.messsage || __( 'Failed to save setting', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
				dispatch( { type: 'UPDATE_ZIP_AI_MODULES', payload: { ...currentZipAiStatus } } );
			}
			setIsUpdating( {
				...isUpdating,
				atLeastOneUpdate: false,
				[ moduleName ]: false,
			} );
		} );

    };

	// Render the AI features table.
	const renderAiFeatures = () => {
		
		return(
			<div className='flex flex-col px-5 border border-slate-200 rounded-md'>
				<div className='flex py-5 justify-between items-center border-b border-b-slate-200'>
					<p className=' font-semibold text-sm text-slate-800'>
						{ __( 'AI Assistant', 'ultimate-addons-for-gutenberg' ) }
					</p>
					{ undefined === zipAiAssistantStatus ? (
						<p className='text-slate-400 cursor-default'>
							{ __( 'Coming Soon', 'ultimate-addons-for-gutenberg' ) }
						</p>
					) : (
						<button
							className='text-spectra hover:text-spectra-hover focus-visible:text-spectra-hover focus-visible:outline-none'
							onClick={ () => updateZipAiStatus( 'ai_assistant', zipAiAssistantStatus ) }
							disabled={ isUpdating?.atLeastOneUpdate }
						>
							{ isUpdating?.ai_assistant ? __( 'Updating', 'ultimate-addons-for-gutenberg' ) : (
								<>
									{ zipAiAssistantStatus ? __( 'Disable', 'ultimate-addons-for-gutenberg' ) : __( 'Enable', 'ultimate-addons-for-gutenberg' ) }
								</>
							) }
						</button>
					) }
				</div>
				<div className='flex py-5 justify-between items-center border-b border-b-slate-200'>
					<p className=' font-semibold text-sm text-slate-800'>
						{ __( 'AI Design Copilot', 'ultimate-addons-for-gutenberg' ) }
					</p>
					{ undefined === zipAiDesignCopilotStatus ? (
						<p className='text-slate-400 cursor-default'>
							{ __( 'Coming Soon', 'ultimate-addons-for-gutenberg' ) }
						</p>
					) : (
						<button
							className='text-spectra hover:text-spectra-hover focus-visible:text-spectra-hover focus-visible:outline-none'
							onClick={ () => updateZipAiStatus( 'ai_design_copilot', zipAiDesignCopilotStatus ) }
							disabled={ isUpdating?.atLeastOneUpdate }
						>
							{ isUpdating?.ai_design_copilot ? __( 'Updating', 'ultimate-addons-for-gutenberg' ) : (
								<>
									{ zipAiDesignCopilotStatus ? __( 'Disable', 'ultimate-addons-for-gutenberg' ) : __( 'Enable', 'ultimate-addons-for-gutenberg' ) }
								</>
							) }
						</button>
					) }
				</div>
			</div>
		);
	};

	return (
		<Transition.Root
			show={ showPopup }
			as={ Fragment }
		>
			<Dialog
				static
				as="div"
				className="fixed backdrop-blur-sm inset-0 z-[99999]"
				onClose={ () => setShowPopup( false ) }
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
						<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:p-6">
							<div className="mb-4 text-center sm:mt-0 sm:text-left">
								<Dialog.Title as="h3" className="text-xl font-semibold text-slate-800">
									{ __( 'Manage AI Features', 'ultimate-addons-for-gutenberg' ) }
								</Dialog.Title>
								<p className="mt-2 text-sm text-slate-500">
									{ __( 'Here you can enable/disable AI features from your website.', 'ultimate-addons-for-gutenberg' ) }
								</p>
							</div>
							{ renderAiFeatures() }
							<div className="mt-6 sm:flex sm:flex-row">
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg-spectra text-base font-medium text-white transition-colors focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none sm:mt-0 sm:text-sm"
									onClick={ () => setShowPopup( false ) }
									ref={ cancelButtonRef }
								>
									{ __( 'Go Back', 'ultimate-addons-for-gutenberg' ) }
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ManageFeaturesPopup;
