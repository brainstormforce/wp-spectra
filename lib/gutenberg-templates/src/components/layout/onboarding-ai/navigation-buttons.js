import { useEffect } from '@wordpress/element';
import Button from '../../reusable/button/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../store';

const NavigationButtons = ( {
	continueButtonText = 'Next',
	previousButtonText = 'Back',
	onClickContinue,
	onClickPrevious,
	onClickSkip,
	disableContinue,
	loading = false,
	className,
} ) => {
	const { setLoadingNextStep } = useDispatch( STORE_KEY );
	const { loadingNextStep } = useSelect( ( select ) => {
		const { getLoadingNextStep } = select( STORE_KEY );

		return {
			loadingNextStep: getLoadingNextStep(),
		};
	}, [] );

	const handleOnClick = async ( event, onClickFunction ) => {
		if ( loadingNextStep ) {
			return;
		}
		setLoadingNextStep( true );
		if ( typeof onClickFunction === 'function' ) {
			await onClickFunction( event );
		}
		setLoadingNextStep( false );
	};

	const handleOnClickContinue = ( event ) =>
		handleOnClick( event, onClickContinue );
	const handleOnClickPrevious = ( event ) =>
		handleOnClick( event, onClickPrevious );
	const handleOnClickSkip = ( event ) => handleOnClick( event, onClickSkip );

	useEffect( () => {
		if ( loadingNextStep === loading ) {
			return;
		}
		setLoadingNextStep( loading );
	}, [ loading ] );

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
					className="relative !px-4.5 !leading-4 h-auto"
					onClick={ handleOnClickContinue }
					variant="ai-primary"
					disabled={ disableContinue }
					hasSuffixIcon
				>
					<span
						className={ classNames(
							( loadingNextStep || loading ) && 'invisible'
						) }
					>
						{ continueButtonText }
					</span>
					<ArrowRightIcon
						className={ classNames(
							'w-4 h-4',
							( loadingNextStep || loading ) && 'invisible'
						) }
					/>
					{ ( loadingNextStep || loading ) && (
						<span className="absolute inset-0 flex items-center justify-center">
							<LoadingSpinner />
						</span>
					) }
				</Button>
				{ typeof onClickPrevious === 'function' && (
					<Button
						type="button"
						className="!px-4.5 !leading-4 h-auto"
						onClick={ handleOnClickPrevious }
						variant="ai-white"
					>
						<span>{ previousButtonText }</span>
					</Button>
				) }
			</div>
			{ typeof onClickSkip === 'function' && (
				<Button
					type="button"
					className="mr-auto ml-0 md:mr-0 md:ml-auto text-secondary-text !px-4.5 !leading-4 h-auto"
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
