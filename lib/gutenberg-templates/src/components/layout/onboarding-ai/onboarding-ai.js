import ConnectOpenAI from './connect-open-ai';
import Type from './type';
import BusinessName from './business-name';
import { DesignLibraryLogo, StDesignLibraryLogo } from '../../ui/icons';
import DescribeBusiness from './describe-business';
import BusinessContact from './business-contact';
import Images from './images';
import { memo, useEffect } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import ExitConfirmationPopover from '../../reusable/exit-confirmation-popover';
import { classNames } from '../../../utils/helpers';

const steps = [
	{
		name: 'Authorization',
		description: 'Connect your Zip AI account',
		screen: 'api-key',
		component: <ConnectOpenAI />,
	},
	{
		name: 'Type',
		description: 'Select who this website is for',
		screen: 'type',
		component: <Type />,
	},
	{
		name: 'Name',
		description: 'What is the name?',
		screen: 'name',
		component: <BusinessName />,
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

	const dynamicStepClass = function ( step, stepIndex ) {
		if ( step === stepIndex + 1 ) {
			return 'border-white border-solid';
		}
		if ( step > stepIndex + 1 ) {
			return 'bg-transparent border-white border-solid';
		}
		return 'border-solid border-nav-inactive';
	};

	const dynamicClass = function ( cStep, sIndex ) {
		if ( cStep === sIndex + 1 ) {
			return 'bg-gradient-to-b from-white to-transparent';
		}
		if ( cStep > sIndex + 1 ) {
			return 'bg-white';
		}
		return 'bg-gradient-to-b from-gray-700 to-transparent';
	};

	const conditionalLogo = () => {
		if ( 'active' === ast_block_template_vars.astra_sites_status || 'active' === ast_block_template_vars.astra_sites_pro_status ) {
			return <StDesignLibraryLogo />;
		}
		return <DesignLibraryLogo />;
	};

	return (
		<div
			id="spectra-onboarding-ai"
			className="font-sans grid grid-cols-1 lg:grid-cols-[360px_1fr]"
		>
			<div className="hidden lg:!flex lg:w-full lg:flex-col z-10">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-nav-active px-6">
					<div className="relative flex h-16 shrink-0 items-center">
						{ conditionalLogo() }
						<div className="absolute top-4 right-0">
							<ExitConfirmationPopover
								onExit={ handleClosePopup }
							/>
						</div>
					</div>
					<nav className="flex flex-1 flex-col gap-y-1 ">
						{ steps.map( ( { name, description }, stepIdx ) => (
							<div className="flex gap-3" key={ stepIdx }>
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
											'rounded-full border text-white text-xs font-semibold flex items-center justify-center w-6 h-6',
											dynamicStepClass(
												currentStep,
												stepIdx
											)
										) }
									>
										<span>{ stepIdx + 1 }</span>
									</div>
									{ steps.length - 1 > stepIdx && (
										<div
											className={ classNames(
												'h-8 w-[1px]',
												dynamicClass(
													currentStep,
													stepIdx
												)
											) }
										/>
									) }
								</div>
								<div className="flex flex-col gap-y-1 items-start justify-start ">
									<div
										className={ classNames(
											'sp-text-sm font-semibold',
											currentStep >= stepIdx + 1
												? 'text-white'
												: 'text-border-secondary'
										) }
									>
										{ name }
									</div>
									<div
										className={ classNames(
											'sp-text-sm font-normal',
											currentStep >= stepIdx + 1
												? 'text-secondary-text'
												: 'text-border-secondary'
										) }
									>
										{ description }
									</div>
								</div>
							</div>
						) ) }
					</nav>
				</div>
			</div>
			<main
				id="sp-onboarding-content-wrapper"
				className="flex-1 overflow-x-hidden h-[calc(100vh_-_5rem)] bg-white"
			>
				<div className="h-full w-full relative flex">
					<div className={ classNames(
						'w-full max-h-full flex flex-col flex-auto items-center px-5 pt-5 md:px-10 md:pt-10 lg:px-14 lg:pt-14 xl:px-20 xl:pt-20',
						steps[ currentStep - 1 ]?.classNames
					) }>
						{ /* Step component will go here */ }
						{ steps[ currentStep - 1 ].component }
					</div>
				</div>
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
		const { toggleOnboardingAIStep } = dispatch( 'ast-block-templates' );
		return {
			toggleOnboardingAIStep,
		};
	} )
)( memo( OnboardingAI ) );
