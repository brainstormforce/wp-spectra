/* This Popup Appears when the unlink button of an Instagram Account is clicked. */
import { Fragment, useRef } from '@wordpress/element';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Button } from '@bsf/force-ui';
import { __, sprintf } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import getApiData from '@Controls/getApiData';

const InstagramUnlinkPopup = ( props ) => {
	const { openPopup, poppedUser, setOpenPopup, setPoppedUser } = props;

	const dispatch = useDispatch();
	const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );
	const cancelButtonRef = useRef( null );

	const onCancelClick = () => {
		setOpenPopup( ! openPopup );
	};

	const onContinueClick = () => {
		const updatedUserMatrix = [];
		instaLinkedAccounts.forEach( ( user ) => {
			if ( user.userName !== poppedUser ) {
				updatedUserMatrix.push( user );
			}
		} );
		dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: updatedUserMatrix } );

		const data = {
			security: uag_react.insta_linked_accounts_nonce,
			value: JSON.stringify( updatedUserMatrix ),
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_insta_linked_accounts',
			data,
		} );

		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Account Unlinked!' } );
			setPoppedUser( '' );
		} );
		setOpenPopup( false );
	};

	return (
		<Transition.Root show={ openPopup } as={ Fragment }>
			<Dialog
				as="div"
				className="spectra-admin__dialog fixed backdrop-blur-sm inset-0 overflow-y-auto"
				initialFocus={ cancelButtonRef }
				onClose={ setOpenPopup }
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
										{ __( 'Unlink User', 'ultimate-addons-for-gutenberg' ) }
									</div>

									<X size={ 16 } onClick={ onCancelClick } className="cursor-pointer" />
								</div>

								<div className="text-sm text-text-secondary font-normal w-full text-left">
									{ ReactHtmlParser(
										sprintf(
											// translators: %1$s: span tag start, %2$s: Instagram account name, %3$s: span tag end.
											__(
												'Are you sure you wish to unlink %1$s@%2$s%3$s?',
												'ultimate-addons-for-gutenberg'
											),
											'<span class="font-bold">',
											poppedUser,
											'</span>'
										)
									) }
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
										{ __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
									</Button>

									<Button
										className="bg-button-primary text-text-on-color uagb-remove-ring hover:bg-button-primary-hover"
										size="md"
										tag="button"
										type="button"
										variant="primary"
										onClick={ onContinueClick }
									>
										{ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
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

export default InstagramUnlinkPopup;
