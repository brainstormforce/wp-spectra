import { __ } from '@wordpress/i18n';
import Modal from '../modal';
import { useModal } from '@ebay/nice-modal-react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import License from './license';
import withModals from '../../../hoc/withModals';
import Button from '../button/button';
import Tooltip from '../tooltip/tooltip';

const LICENSE_POPUP = 'LICENSE_POPUP';

const LicensePopup = () => {
	const modalRef = useModal( LICENSE_POPUP );

	const handleClose = () => {
		modalRef.resolve( '' );
		modalRef.hide();
		modalRef.remove();
	};

	return (
		<Modal
			open={ modalRef.visible }
			setOpen={ handleClose }
			width={ 520 }
			closeButton={ true }
			className="p-0 [&>div>button]:bg-transparent"
			overlayClassName="bg-black/30"
		>
			<div>
				{ /* Modal Body */ }
				<License onFormSubmit={ handleClose } />

				{ /* Action buttons */ }
				<div className="min-w-min flex flex-wrap xl:flex-nowrap gap-6 items-center justify-center [&>div]:grow">
					<Tooltip
						content={ __(
							'Unlock all patterns and design kits with the Essentials or Business Toolkit package.',
							'ast-block-templates'
						) }
						placement="top"
					>
						<Button
							variant="primary"
							className="w-full rounded-none"
							onClick={ () => {
								window.open(
									ast_block_template_vars.getProURL,
									'_blank'
								);
							} }
							hasSuffixIcon
						>
							<span>
								{ __(
									"Don't have a license key? Get one here",
									'ast-block-templates'
								) }
							</span>
							<ArrowRightIcon className="w-5 h-5" />
						</Button>
					</Tooltip>
				</div>
			</div>
		</Modal>
	);
};

export default withModals( LicensePopup, LICENSE_POPUP );
