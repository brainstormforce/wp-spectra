import { CheckIcon } from '@heroicons/react/24/outline';
import { SpectraLogo, StLogo } from '../../ui/icons';

import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { Fragment, memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { classNames } from '../../../utils/helpers';
import ExitConfirmationPopover from '../../reusable/exit-confirmation-popover';
import BusinessContact from './business-contact';
import BusinessDetails from './business-details';
import ConnectOpenAI from './connect-open-ai';
import DescribeBusiness from './describe-business';
import ErrorBoundary from './error-boundary';
import Images from './images';

const steps = [
	{
		name: __( 'Connect', 'ast-block-templates' ),
		description: __( 'Connect your account', 'ast-block-templates' ),
		screen: 'api-key',
		component: <ConnectOpenAI />,
	},
	{
		name: __( `Let's Start`, 'ast-block-templates' ),
		description: __( 'Name, language & type', 'ast-block-templates' ),
		screen: 'type',
		component: <BusinessDetails />,
	},
	{
		name: 'Describe',
		description: 'Some details please',
		screen: 'details',
		component: <DescribeBusiness />,
	},
	{
		name: 'Contact',
		description: 'How can people get in touch',
		screen: 'contact-details',
		component: <BusinessContact />,
	},
	{
		name: 'Images',
		description: 'Select relevant images',
		screen: 'images',
		component: <Images />,
		classNames: 'p-0 md:p-0 lg:p-0 xl:p-0',
	},
];

const OnboardingAI = ( {
	togglePopup,
	currentScreen,
	sitePreview,
	toggleOnboardingAIStep,
	currentStep,
	setCurrentAIStep,
} ) => {
	const handleClosePopup = ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();
		toggleOnboardingAIStep();
	};
	useEffect( () => {
		if ( togglePopup ) {
			document.body.classList.add( 'ast-block-templates-modal-open' );
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.add( 'open' );
		} else {
			document.body.classList.remove( 'ast-block-templates-modal-open' );
			document
				.getElementById( 'ast-block-templates-modal-wrap' )
				.classList.remove( 'open' );
		}
	}, [ togglePopup, currentScreen, sitePreview ] );

	const dynamicStepClassNames = ( step, stepIndex ) => {
		if ( step === stepIndex + 1 ) {
			return 'border-accent-st bg-white text-accent-st border-solid';
		}
		if ( step > stepIndex + 1 ) {
			return 'bg-secondary-text text-white border-secondary-text border-solid';
		}
		return 'border-solid border-step-connector text-secondary-text';
	};

	const dynamicClass = function ( cStep, sIndex ) {
		if ( cStep === sIndex + 1 ) {
			return 'bg-border-primary';
		}
		if ( cStep > sIndex + 1 ) {
			return 'bg-border-primary';
		}
		return 'bg-border-primary';
	};

	const conditionalLogo = () => {
		if (
			'active' === ast_block_template_vars.astra_sites_status ||
			'active' === ast_block_template_vars.astra_sites_pro_status
		) {
			return <StLogo className="size-10" />;
		}
		return <SpectraLogo className="size-10" />;
	};

	const handleStepClick = ( stepIndex ) => {
		if ( stepIndex === 1 ) {
			return;
		}
		if ( stepIndex <= currentStep ) {
			setCurrentAIStep( stepIndex );
		}
	};

	const isAuthScreen = currentStep === 1;

	return (
		<div
			id="spectra-onboarding-ai"
			className="h-[calc(100vh_-_5rem)] font-sans grid grid-cols-1 shadow-medium grid-rows-[4.5rem_1fr]"
		>
			<header className="grid grid-cols-[4rem_1fr_4rem] items-center justify-between md:justify-start w-full h-full z-10 bg-white shadow-md">
				<div className="relative flex size-10 shrink-0 items-center mx-auto">
					{ conditionalLogo() }
				</div>
				<nav className="w-full h-full hidden md:flex items-center justify-center gap-4 flex-1">
					{ steps.map( ( { name }, stepIdx ) =>
						! isAuthScreen && stepIdx === 0 ? (
							<Fragment key={ stepIdx } />
						) : (
							<Fragment key={ stepIdx }>
								<div
									className={ classNames(
										'flex gap-3',
										stepIdx + 1 < currentStep &&
											stepIdx !== 0
											? 'cursor-pointer'
											: 'cursor-default'
									) }
									onClick={ () =>
										handleStepClick( stepIdx + 1 )
									}
									role="button"
									tabIndex="0"
									onKeyDown={ ( e ) =>
										e.key === 'Enter'
											? handleStepClick( stepIdx + 1 )
											: null
									}
								>
									<div
										className={ classNames(
											'flex flex-col gap-y-1 items-center',
											stepIdx === steps.length - 1
												? 'justify-start'
												: 'justify-center'
										) }
									>
										<div
											className={ classNames(
												'rounded-full border border-border-primary text-xs font-semibold flex items-center justify-center w-6 h-6',
												dynamicStepClassNames(
													currentStep,
													stepIdx
												)
											) }
										>
											{ currentStep > stepIdx + 1 ? (
												<CheckIcon className="h-3 w-3" />
											) : (
												<span>
													{ stepIdx +
														Number( isAuthScreen ) }
												</span>
											) }
										</div>
									</div>
									<div
										className={ classNames(
											'text-sm font-medium text-secondary-text pt-0.5',
											currentStep === stepIdx + 1 &&
												'text-accent-st'
										) }
									>
										{ name }
									</div>
								</div>
								{ steps.length - 1 > stepIdx && (
									<div
										className={ classNames(
											'w-8 h-px self-center',
											dynamicClass( currentStep, stepIdx )
										) }
									/>
								) }
							</Fragment>
						)
					) }
				</nav>
				<div className="[grid-area:1/3] flex items-center justify-center mx-auto">
					<ExitConfirmationPopover onExit={ handleClosePopup } />
				</div>
			</header>
			<main
				id="sp-onboarding-content-wrapper"
				className="flex-1 overflow-x-hidden h-full bg-gt-container-background"
			>
				<ErrorBoundary>
					<div className="h-full w-full relative flex">
						<div
							className={ classNames(
								'w-full max-h-full flex flex-col flex-auto items-center overflow-y-auto',
								! isAuthScreen &&
									'px-5 pt-5 [&:has(.max-w-container)]:pb-4 md:px-10 md:pt-10 md:[&:has(.max-w-container)]:pb-6 lg:px-14 lg:pt-14 lg:[&:has(.max-w-container)]:pb-8 xl:px-20 xl:pt-12 xl:[&:has(.max-w-container)]:pb-10',
								steps[ currentStep - 1 ]?.classNames
							) }
						>
							{ /* Step component will go here */ }
							{ steps[ currentStep - 1 ]?.component }
						</div>
					</div>
				</ErrorBoundary>
			</main>
		</div>
	);
};

// export default OnboardingAI

export default compose(
	withSelect( ( select ) => {
		const {
			getTogglePopup,
			getSitePreview,
			getCurrentScreen,
			setCurrentScreen,
			getCurrentAIStep,
		} = select( 'ast-block-templates' );
		return {
			togglePopup: getTogglePopup(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			setCurrentScreen,
			currentStep: getCurrentAIStep(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { toggleOnboardingAIStep, setCurrentAIStep } = dispatch(
			'ast-block-templates'
		);
		return {
			toggleOnboardingAIStep,
			setCurrentAIStep,
		};
	} )
)( memo( OnboardingAI ) );
