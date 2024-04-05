import { useState } from '@wordpress/element';
import Button from '../../reusable/button/button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';

const NavigationButtons = ( {
	continueButtonText = 'Continue',
	onClickContinue,
	onClickPrevious,
	onClickSkip,
	disableContinue,
	loading = false,
	className,
} ) => {
	const [ isLoading, setIsLoading ] = useState( false );

	const handleOnClick = async ( event, onClickFunction ) => {
		if ( isLoading ) {
			return;
		}
		setIsLoading( true );
		if ( typeof onClickFunction === 'function' ) {
			await onClickFunction( event );
		}
		setIsLoading( false );
	};

	const handleOnClickContinue = ( event ) =>
		handleOnClick( event, onClickContinue );
	const handleOnClickPrevious = ( event ) =>
		handleOnClick( event, onClickPrevious );
	const handleOnClickSkip = ( event ) => handleOnClick( event, onClickSkip );

	return (
		<div
			className={ classNames(
				'w-full flex items-center gap-4 flex-wrap md:flex-nowrap',
				className
			) }
		>
			<div className="flex gap-4">
				<Button
					type="submit"
					className="min-w-[9.375rem] h-[3.125rem]"
					onClick={ handleOnClickContinue }
					variant="ai-primary"
					hasSuffixIcon={ ! isLoading }
					disabled={ disableContinue }
				>
					{ isLoading || loading ? (
						<LoadingSpinner />
					) : (
						<>
							<span>{ continueButtonText }</span>
							<ChevronRightIcon className="w-6 h-6" />
						</>
					) }
				</Button>
				{ typeof onClickPrevious === 'function' && (
					<Button
						type="button"
						className="h-[3.125rem]"
						onClick={ handleOnClickPrevious }
						variant="ai-white"
					>
						<span>Previous Step</span>
					</Button>
				) }
			</div>
			{ typeof onClickSkip === 'function' && (
				<Button
					type="button"
					className="h-[3.125rem] mr-auto ml-0 md:mr-0 md:ml-auto text-secondary-text"
					onClick={ handleOnClickSkip }
					variant="blank"
				>
					Skip Step
				</Button>
			) }
		</div>
	);
};

export default NavigationButtons;
