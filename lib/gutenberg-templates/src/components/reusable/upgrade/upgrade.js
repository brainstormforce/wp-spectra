import { __ } from '@wordpress/i18n';
import Button from '../button/button';
import licensePopup from '../license/license-popup';
import { getSpectraStatus } from '../../../utils/helpers';
import Tooltip from '../tooltip/tooltip';

const { forwardRef } = wp.element;

const UpgradeButton = () => {
	const handleClick = () => {
		if ( getSpectraStatus()?.active ) {
			licensePopup.show();
			return;
		}

		window.open( ast_block_template_vars.getProURL, '_blank' );
	};

	return (
		<div className="no-underline flex justify-center max-w-[248px] [&>*]:w-full">
			<Tooltip
				content={
					! getSpectraStatus()?.active &&
					__(
						'Unlock all patterns and design kits with the Essentials or Business Toolkit package.',
						'ast-block-templates'
					)
				}
				placement="top"
			>
				<Button
					variant="secondary"
					className="w-full max-w-[216px] self-center border border-btn-active text-btn-active bg-white"
					onClick={ handleClick }
				>
					{ __( 'Upgrade Now', 'ast-block-templates' ) }
				</Button>
			</Tooltip>
		</div>
	);
};

export default forwardRef( UpgradeButton );
