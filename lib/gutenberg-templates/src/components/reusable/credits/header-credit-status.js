import { useCallback, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import Dropdown from '../dropdown/dropdown';
import { BoltIcon } from '@heroicons/react/24/outline';
import Button from '../button/button';
import { classNames, formatNumber } from '../../../utils/helpers';
import useCredits from '../../../hooks/use-credits';
import ConfirmationPopup from '../confirmation-popup/confirmation-popup';
import { STORE_KEY } from '../../../store';

const HeaderCreditStatus = () => {
	const { resetOnboardingAISteps } = useDispatch( STORE_KEY );
	const { token } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	}, [] );
	const { status, remaining, currentBalanceStatus } = useCredits();
	const [ showRevokePopup, setShowRevokePopup ] = useState( false );

	const handleClickGetMoreCredits = ( close ) => () => {
		window.open( ast_block_template_vars.get_more_credits_url, '_blank' );
		if ( typeof close !== 'function' ) {
			return;
		}
		close();
	};

	// const handleClickRevokeAccess = ( event ) => {
	// 	event.preventDefault();
	// 	setShowRevokePopup( true );
	// };

	const handleConfirmRevokeAccess = useCallback( async () => {
		try {
			const response = await apiFetch(
				{
					path: '/gutenberg-templates/v1/revoke-access',
					method: 'POST',
					headers: {
						'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
					},
				}
			);
			if ( response.success ) {
				resetOnboardingAISteps();
			}
		} catch ( error ) {
			// TODO: Handle error
		} finally {
			setShowRevokePopup( false );
		}
	}, [] );

	return status === 'success' && !! token ? (
		<>
			<Dropdown
				trigger={ ( { open: active } ) => (
					<button className={ classNames( 'min-h-[36px] flex items-center justify-center group text-sm leading-[21px] font-normal text-body-text border border-solid border-border-primary focus:outline-none bg-transparent pl-3 rounded cursor-pointer', active && 'bg-background-secondary', currentBalanceStatus.danger && 'bg-credit-danger/5 text-credit-danger border-credit-danger/5', currentBalanceStatus.warning && 'bg-credit-warning/5 text-credit-warning border-credit-warning/5' ) }>
						<span>{ formatNumber( remaining ) }</span>
						<span className="p-2 flex items-center justify-center">
							<BoltIcon className={ classNames( 'w-5 h-5 text-nav-inactive group-active:text-nav-active transition-colors duration-150 ease-in-out', currentBalanceStatus.danger && 'text-credit-danger', currentBalanceStatus.warning && 'text-credit-warning' ) } />
						</span>
					</button>
				) }
				placement="right"
				width={ 'w-64' }
				contentClassName="border border-solid border-border-primary pt-3 pb-4 px-4 bg-white"
			>
				<Dropdown.Item>
					{ ( { close } ) => (
						<div
							className="w-full space-y-4"
							onClick={ ( event ) => {
								event.stopPropagation();
								event.preventDefault();
							} }
							aria-hidden="true"
						>
							<div className="w-full space-y-2">
								<div className="flex items-center justify-between w-">
									<span className="text-sm font-medium text-heading-text">{ remaining.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) } Credits in Your Account</span>
								</div>
								{ /* <div className="w-full h-1 bg-border-primary rounded-sm">
									<div className={ classNames( 'h-full bg-accent-spectra rounded-sm', currentBalanceStatus.warning && 'bg-credit-warning', currentBalanceStatus.danger && 'bg-credit-danger' ) } style={ { width: `${ percentage }%` } } />
								</div> */ }
							</div>
							<p className="m-0 text-border-secondary text-sm font-normal leading-5">Credits are used to personalize templates with AI.</p>
							<Button
								className="w-full bg-background-tertiary text-accent-spectra"
								variant="blank"
								onClick={ handleClickGetMoreCredits( close ) }
								isSmall
							>
								Get More Credits
							</Button>
						</div>
					) }
				</Dropdown.Item>
			</Dropdown>
			<ConfirmationPopup
				open={ showRevokePopup }
				setOpen={ setShowRevokePopup }
				title={ __( 'Revoke Access', 'ast-block-templates' ) }
				description={ `${ __( 'Are you sure you wish to revoke the authorization token?', 'ast-block-templates' ) }\n${ __( 'You will need to re-authorize Zip to use it again.', 'ast-block-templates' ) }` }
				confirmBtnTitle={ __( 'Revoke', 'ast-block-templates' ) }
				cancelBtnTitle={ __( 'Cancel', 'ast-block-templates' ) }
				onClickCancel={ () => setShowRevokePopup( false ) }
				onClickConfirm={ handleConfirmRevokeAccess }
			/>
		</>
	) : null;
};

export default HeaderCreditStatus;
