import {
	ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Button from '../../reusable/button/button';
import Modal from '../../reusable/modal';
import { Fragment, useState } from '@wordpress/element';
import LoadingSpinner from '../../reusable/loading-spinner/loading-spinner';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../store';
import { classNames, formatNumber, setToSessionStorage } from '../../../utils/helpers';
import useCredits from '../../../hooks/use-credits';

const ConfirmationPopup = ( {
	open = false,
	setOpen = () => {},
	onClickGenerate,
	onClickSave,
} ) => {
	const [ isGenerating, setIsGenerating ] = useState( false );
	const [ isSaving, setIsSaving ] = useState( false );
	const {
		remaining,
		patternsLibraryRate,
		patternsCategoryRate,
		isFreeUser,
	} = useCredits();
	const {
		businessType: { name: businessType },
		businessName,
		businessDetails,
		allPatternsCategories,
		isNewUser,
	} = useSelect( ( select ) => {
		const { getAIStepData, getOnboardingAI, getAllPatternsCategories } =
			select( STORE_KEY );

		return {
			...getAIStepData(),
			allPatternsCategories: getAllPatternsCategories(),
			isNewUser: getOnboardingAI()?.isNewUser,
		};
	}, [] );

	const isDisabled =
			( isFreeUser && remaining < patternsCategoryRate * 2 ) ||
			( ! isFreeUser && remaining < patternsLibraryRate ) ||
			remaining <= 0,
		freeCategories = allPatternsCategories
			.slice( 0, 2 )
			.map( ( { name } ) => name )
			.join( ' and ' );

	const showStepData = [
		{
			key: businessType,
			label: 'Business Type',
		},
		{
			key: businessName,
			label: 'Business Name',
		},
		{
			key: businessDetails,
			label: 'Business Description',
		},
	];

	const handleClickGenerate = async ( event ) => {
		if ( isDisabled || isGenerating ) {
			return;
		}
		setIsGenerating( true );
		if ( typeof onClickGenerate !== 'function' ) {
			return;
		}
		if ( isFreeUser ) {
			setToSessionStorage( 'ast-free-ai-content', Math.random().toString( 36 ).substring( 2 ) );
		}
		await onClickGenerate( event );
		setIsGenerating( false );
		setOpen( false );
	};

	const handleClickSave = async ( event ) => {
		if ( isSaving ) {
			return;
		}
		setIsSaving( true );
		if ( typeof onClickSave !== 'function' ) {
			return;
		}
		await onClickSave( event );
		setIsSaving( false );
		setOpen( false );
	};

	const renderGenerateBtn = () => {
		if ( isGenerating ) {
			return <LoadingSpinner />;
		}

		if ( ! isNewUser ) {
			return (
				<>
					<span>Personalize</span>
				</>
			);
		}

		return (
			<>
				<span>
					Personalize Library (
					{ isFreeUser
						? patternsCategoryRate * 2
						: formatNumber( patternsLibraryRate ) }{ ' ' }
					Credits)
				</span>
				<ArrowRightIcon className="h-5 w-5" />
			</>
		);
	};

	const renderSaveBtn = () => {
		if ( isSaving ) {
			return <LoadingSpinner className="text-accent-ai" />;
		}

		return <span>Save & Exit</span>;
	};

	const handleClickGetMoreCredits = () => {
		window.open( ast_block_template_vars.get_more_credits_url, '_blank' );
	};

	const renderModalBody = () => {
		if ( isDisabled ) {
			return (
				<Fragment>
					<div className="space-y-2">
						<Modal.Title>
							Uh Oh, you're out of AI credits 😕
						</Modal.Title>
						<p className="text-body-text text-base font-normal m-0">
							With AI credits, you have the power to personalize the design library with unique copy and beautiful images specific to your website.
						</p>
						<p className="text-body-text text-base font-normal m-0">
							Your account has { remaining } credits left. If you want to personalize the entire design library with content and images tailored to your business and website project, you'll require { patternsLibraryRate } credits.
						</p>
					</div>

					<Button
						variant="ai-primary"
						className="w-full min-h-[45px]"
						hasSuffixIcon
						onClick={ handleClickGetMoreCredits }
					>
						<span>Unlock 200,000 Credits for Just $39</span>
						<ArrowRightIcon className="h-5 w-5" />
					</Button>
				</Fragment>
			);
		}

		if ( isFreeUser && remaining > 0 ) {
			return (
				<Fragment>
					<div className="space-y-7 p-4 lg:p-8 bg-background-tertiary rounded-lg">
						<div className="space-y-3">
							<Modal.Title>
								Yay, you're almost there! 😍
							</Modal.Title>
							<p className="text-body-text m-0 text-sm font-normal">
								With AI credits, you have the power to personalize the design library with unique copy and beautiful images specific to your website.
							</p>
							<p className="text-body-text m-0 text-sm font-normal">
								Your free account includes 1000 AI credits. If you want to personalize the entire design library with content and images tailored to your business and website project, you'll require { patternsLibraryRate } credits.
							</p>
						</div>
						<Button
							className="w-full min-h-[45px]"
							variant="ai-primary"
							onClick={ handleClickGetMoreCredits }
						>
							Unlock 200,000 Credits for Just $39
						</Button>
					</div>

					<div className="!-mb-2 !mt-0 px-4 lg:px-8 pt-4 lg:pt-8 pb-2 space-y-7">
						<div className="space-y-3">
							<h6 className="text-xl font-bold leading-7">Want to see how this works?</h6>
							<p className="text-body-text m-0 text-sm font-normal">
								Begin with the 1000 credits provided when you signed up for your free account. With this, you can personalize templates in the { freeCategories } categories.
							</p>
							<p className="text-body-text m-0 text-sm font-normal">
								You can easily purchase additional credits later anytime.
							</p>
						</div>

						<Button
							className="w-full min-h-[45px] text-body-text border-border-secondary border border-solid"
							variant="blank"
							onClick={ handleClickGenerate }
						>
							{
								isGenerating ? (
									<LoadingSpinner className="text-body-text" />
								) : (
									<>
										Try It Using Free 1000 Credits
									</>
								)
							}
						</Button>
					</div>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<div className="space-y-2">
					<Modal.Title>
						Yay, you're almost there! 😍
					</Modal.Title>
					<p className="text-body-text">
						This will personalize the entire design library, and it will consume { ! isFreeUser ? patternsLibraryRate : patternsCategoryRate * 2 } AI credits from your account.
					</p>
				</div>

				<div className="p-5 border border-solid border-border-primary rounded-md max-h-[248px] overflow-y-scroll">
					{ showStepData.map( ( { key, label }, idx ) => (
						<Fragment key={ idx }>
							<div className="text-heading-text text-base">
								<p className="font-semibold !m-0 !p-0">{ label }</p>
								<p className="font-normal !m-0 !p-0">{ key }</p>
							</div>
							{ idx < showStepData.length - 1 && (
								<hr className="border-t-border-primary my-4" />
							) }
						</Fragment>
					) ) }
				</div>

				<div className="space-y-3">
					<div className="flex items-center gap-3">
						<Button
							className={ classNames( 'w-full min-w-fit min-h-[45px]' ) }
							variant="ai-primary"
							hasSuffixIcon={ ! isNewUser && ! isGenerating }
							onClick={ handleClickGenerate }
						>
							{ renderGenerateBtn() }
						</Button>
						{ ! isNewUser && (
							<Button
								className={ classNames( 'w-full min-h-[45px]' ) }
								variant="ai-white"
								onClick={ handleClickSave }
							>
								{ renderSaveBtn() }
							</Button>
						) }
					</div>
					{ /* <p
						className={ classNames(
							'text-center text-body-text',
							currentBalanceStatus.warning && 'text-credit-warning',
							currentBalanceStatus.danger && 'text-credit-danger'
						) }
					>
						{ isDisabled ? (
							<span>
								You don't seem to have enough credits to generate
								this content. Get More Credits to continue.
							</span>
						) : (
							remaining?.toLocaleString() + ' credits remaining'
						) }{ ' ' }
					</p> */ }
				</div>

				{ /*  isFreeUser && remaining > 0 && (
					<Snackbar
						type="info"
						message={ `The free credits will generate content for only ${ freeCategories } categories.` }
						icon={ <ExclamationCircleIcon className="w-4 h-4" /> }
					/>
				) */ }
			</Fragment>
		);
	};

	return (
		<Modal open={ open } setOpen={ setOpen } width={ 520 } closeButton={ false }>
			{ /* Modal Body */ }
			{ renderModalBody() }

			{ /* Exit button */ }
			<button
				className="w-full text-base font-medium text-secondary-text text-center underline border-none cursor-pointer bg-transparent"
				onClick={ () => setOpen( false ) }
			>
				Back
			</button>
		</Modal>
	);
};

export default ConfirmationPopup;
