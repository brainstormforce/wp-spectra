/* This popup appears to confirm whether or not to delete the selected font family. */

import { Fragment, useRef, useState, useEffect } from '@wordpress/element';
import { Dialog, Transition } from '@headlessui/react';
import { __, sprintf } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import { X } from 'lucide-react';
import { Button } from '@bsf/force-ui';

const FSEDeleteFontConfirmPopup = ( props ) => {
	const { openPopup, setOpenPopup, fontFamily, fontWeight, fontStyle, setShowLoader } = props;

	const dispatch = useDispatch();

	const [ open, setOpen ] = useState( openPopup );
	const cancelButtonRef = useRef( null );

	useEffect( () => {
		setOpen( openPopup );
	}, [ openPopup ] );

	const onCancelClick = () => {
		setOpenPopup( ! openPopup );
	};

	const onRemoveClick = () => {
		setShowLoader( true );
		const fontToDelete = {
			fontFamily,
			fontWeight,
			fontStyle,
		};

		const data = {
			security: uag_react.fse_font_globally_delete_nonce,
			value: JSON.stringify( fontToDelete ),
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_fse_font_globally_delete',
			data,
		} );

		getApiFetchData.then( ( responseData ) => {
			setOpenPopup( false );
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: responseData?.data?.messsage } );
			location.reload();
		} );
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
										{ __( 'Remove Font Family', 'ultimate-addons-for-gutenberg' ) }
									</div>

									<X size={ 16 } onClick={ onCancelClick } className="cursor-pointer" />
								</div>

								<div className="text-sm text-text-secondary font-normal w-full text-left">
									{ ReactHtmlParser(
										sprintf(
											// translators: %1$s: Strong Tag,  %2$s: selected font family of Spectra, %3$s Strong Closing Tag.
											__(
												'Are you sure you want to remove %1$s%2$s%3$s font family?',
												'ultimate-addons-for-gutenberg'
											),
											'<strong>',
											fontFamily,
											'</strong>'
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
										onClick={ onRemoveClick }
									>
										{ __( 'Remove', 'ultimate-addons-for-gutenberg' ) }
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

export default FSEDeleteFontConfirmPopup;
