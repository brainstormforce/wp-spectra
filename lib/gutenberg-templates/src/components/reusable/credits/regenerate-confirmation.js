import { useSelect } from '@wordpress/data';
import { classNames, formatNumber } from '../../../utils/helpers';
import Button from '../button/button';
import Dropdown from '../dropdown/dropdown';
import { STORE_KEY } from '../../../store';
import useCredits from '../../../hooks/use-credits';

const RegenerateConfirmation = ( { categoryName, onClick, disabled = false, boxText, children } ) => {
	const { remaining, pagesCategoryRate, patternsCategoryRate, currentBalanceStatus } = useCredits();
	const currentScreen = useSelect( ( select ) => {
		const { getCurrentScreen } = select( STORE_KEY );
		return getCurrentScreen();
	}, [] );
	const consumptionRate = currentScreen === 'all-block-pages-grid' ? pagesCategoryRate : patternsCategoryRate;
	const tabName = currentScreen === 'all-block-pages-grid' ? 'page' : 'pattern';
	const isDisabled = remaining < consumptionRate || remaining <= 0;

	const handleOnClick = ( close ) => ( event ) => {
		if ( isDisabled ) {
			return;
		}
		if ( typeof onClick !== 'function' ) {
			return;
		}
		onClick( event );
		if ( typeof close !== 'function' ) {
			return;
		}
		close();
	};

	const handleClickGetMoreCredits = ( close ) => () => {
		window.open( ast_block_template_vars.get_more_credits_url, '_blank' );
		if ( typeof close !== 'function' ) {
			return;
		}
		close();
	};

	return (
		<Dropdown
			trigger={ ( { open: active } ) => (
				<button className={ classNames( '[&:has(.animate-none)]:!visible group-hover:visible flex items-center justify-center group border-0 focus:outline-none bg-transparent rounded cursor-pointer', ! active && 'invisible' ) } disabled={ disabled }>
					{ children }
				</button>
			) }
			placement="right"
			width="w-[15.5rem]"
			contentClassName="border border-solid border-border-primary pt-3 pb-4 px-4 bg-white"
			offset={ [ 13, 5 ] }
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
						<p className="text-sm font-normal leading-[21px] text-body-text m-0 p-0">
							This will personalize the <span className="font-medium">{ categoryName }</span> { tabName }s again.
						</p>
						<div className="flex flex-col gap-2">
							<Button
								className={ classNames( 'w-full bg-background-tertiary text-accent-spectra !text-sm', isDisabled && 'bg-button-disabled text-secondary-text' ) }
								variant="blank"
								onClick={ handleOnClick( close ) }
								isSmall
								disabled={ isDisabled }
							>
								{ boxText } ({ formatNumber( consumptionRate ) } Credits)
							</Button>
							<p className={ classNames( 'w-full m-0 p-0 text-sm font-normal text-secondary-text text-center', currentBalanceStatus.warning && 'text-credit-warning', currentBalanceStatus.danger && 'text-credit-danger' ) }>
								{ ( remaining )?.toLocaleString() }  Credits remaining
							</p>
							<hr className="border-t-border-primary border-b-0 my-2" />
							<p
								onClick={ handleClickGetMoreCredits( close ) }
								className="m-0 block text-sm font-normal !text-accent-spectra underline text-center"
								aria-hidden="true"
							>
								Need more credits?
							</p>

						</div>
					</div>
				) }
			</Dropdown.Item>
		</Dropdown>
	);
};

export default RegenerateConfirmation;
