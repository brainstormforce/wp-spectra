import { Button, Modal } from '@wordpress/components';
import { useLayoutEffect, useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';

const UAGConfirmPopup = ( props ) => {
	const {
		isOpen,
		setOpen,
		onConfirm,
		title,
		description,
		confirmLabel = __( 'Confirm', 'ultimate-addons-for-gutenberg' ),
		cancelLabel = __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
		processingLabel = __( 'Processing…', 'ultimate-addons-for-gutenberg' ),
		icon = '',
		executable = false,
	} = props;

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const [ isProcessing, setProcessing ] = useState( false );
	const closeModal = () => {
		setOpen( false );
		setProcessing( false );
	};

	const handleConfirmation = () => {
		setProcessing( true );
		// If a custom function needs to be processed or a parameter needs to be passed on confirmation can be passed here.
		if ( executable ) {
			onConfirm( executable );
		} else {
			onConfirm();
		}
	};

	return (
		<>
			{ isOpen && (
				<Modal
					onRequestClose={ closeModal }
					className="uag-confirm-popup-wrapper"
					overlayClassName="uag-confirm-popup-overlay"
				>
					<div className="uag-confirm-popup-icon">
						{ icon !== '' ? (
							renderSVG( icon )
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
						) }
					</div>
					<div className="uag-confirm-popup-content">
						<div className="uag-confirm-popup-text">
							<span className="uag-confirm-popup-title">{ title }</span>
							<span className="uag-confirm-popup-description">{ description }</span>
						</div>
						<div className="uag-confirm-popup-controls">
							{ isProcessing === false ? (
								<>
									<Button
										className="uag-confirm-popup-buttons uag-popup-confirmation-button"
										onClick={ handleConfirmation }
									>
										{ confirmLabel }
									</Button>
									<Button
										className="uag-confirm-popup-buttons uag-popup-cancellation-button"
										onClick={ closeModal }
									>
										{ cancelLabel }
									</Button>
								</>
							) : (
								<Button
									isBusy={ true }
									className="uag-confirm-popup-buttons uag-popup-confirmation-button"
								>
									{ processingLabel }
								</Button>
							) }
						</div>
					</div>
				</Modal>
			) }
		</>
	);
};

UAGConfirmPopup.defaultProps = {};

export default UAGConfirmPopup;
