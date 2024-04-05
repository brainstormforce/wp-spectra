import { __, sprintf } from '@wordpress/i18n';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Button from '../../../../reusable/button/button';
import apiFetch from '@wordpress/api-fetch';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../../../store';
import { generateContentForAllCategories } from '../../../../../utils/functions';
import useCredits from '../../../../../hooks/use-credits';
import { formatNumber } from '../../../../../utils/helpers';

const { images } = ast_block_template_vars;
const pagesOnboardingAPIEndpoint = '/gutenberg-templates/v1/pages-onboarding';

const GeneratePagesContent = () => {
	const {
		setShowPagesOnboarding,
		setCurrentCategory,
		setDynamicContent,
		dynamicContentFlagSet,
		dynamicContentSyncStart,
		dynamicContentFlagReset,
		dynamicContentSyncComplete,
		setCreditsDetails,
	} = useDispatch( STORE_KEY );

	const { remaining, pagesLibraryRate } = useCredits();
	const { allPagesCategories, credits } = useSelect( ( select ) => {
		const { getAllPagesCategories, getCreditsDetails } = select( STORE_KEY );
		return {
			allPagesCategories: getAllPagesCategories(),
			credits: getCreditsDetails(),
		};
	}, [] );

	const isDisabled = credits.free_user || remaining < pagesLibraryRate;

	const savePagesOnboardingStatus = async () => {
		try {
			await apiFetch( {
				path: pagesOnboardingAPIEndpoint,
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
		} catch ( error ) {
			// Do nothing
			console.error( error );
		}
	};

	const handleLetsGo = async () => {
		const type = 'pages';
		dynamicContentFlagReset( type );
		dynamicContentSyncStart( type );

		setShowPagesOnboarding();
		savePagesOnboardingStatus();

		let result = false;
		try {
			result = await generateContentForAllCategories(
				allPagesCategories,
				setDynamicContent,
				dynamicContentFlagSet,
				( catValue ) => setCurrentCategory( type, catValue ),
				setCreditsDetails,
				'page'
			);
		} catch ( error ) {
			result = error;
		}

		if (
			typeof result === 'object' &&
			result?.data?.code === 'api_throttle_error'
		) {
			result = {
				type: 'error',
				title: 'Check Back Soon',
				message: (
					<>
						We are currently experiencing exceptionally high demand. Please try again in 5 minutes. If the error persists, kindly contact us through the website:
						<a
							href="https://zipwp.com/contact"
							target="_blank"
							rel="noreferrer"
						>
							{ ' ' }
							https://zipwp.com/contact
						</a>
						.
					</>
				),
			};
		}

		dynamicContentSyncComplete(
			type,
			typeof result === 'object' ? result : null
		);
		setCurrentCategory( type, {} );
	};

	const handleSkip = () => {
		savePagesOnboardingStatus();
		setShowPagesOnboarding();
	};

	return (
		<div
			className="spectra-ai relative w-full h-full"
			style={ {
				backgroundImage: `url('${ images }background.png')`,
			} }
		>
			<div className="absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-center bg-background-tertiary/[0.85] backdrop-blur-[6px] z-[1]">
				<div className="w-full max-w-[504px] h-max px-8 pt-8 pb-6 shadow-small rounded-lg space-y-8 bg-white">
					{ /* Content */ }
					<div className="space-y-2">
						<SparklesIcon className="w-10 h-10 text-icon-primary stroke-[1]" />
						<h5 className="text-2xl font-semibold text-heading-text">
							{ __(
								'Generate Content for Pages',
								'ast-block-templates'
							) }
						</h5>
						<p className="text-body-text text-base">
							{ __(
								'Get the content for all your pages with just a click. You can generate content page by page by making use of the "Skip" option. We\'re here to make everything easy and tailored to suit your needs perfectly!',
								'ast-block-templates'
							) }
						</p>
					</div>

					{ /* Buttons */ }
					<div className="space-y-4">
						<Button
							className="w-full"
							variant="primary"
							onClick={ handleLetsGo }
							hasSuffixIcon
							disabled={ isDisabled }
						>
							<span>
								{ sprintf(
									/* translators: %s: Credits */ __(
										`Let’s Go (%s Credits)`,
										'ast-block-templates'
									),
									formatNumber( pagesLibraryRate )
								) }
							</span>
							<ArrowRightIcon className="w-5 h-5" />
						</Button>
						{ isDisabled && (
							<p className="text-credit-danger text-center">
								{ remaining } credits remaining
							</p>
						) }
						<button
							className="w-full border-0 bg-transparent outline-none focus:outline-none active:outline-none underline text-base font-normal leading-6 text-center text-secondary-text cursor-pointer"
							onClick={ handleSkip }
						>
							{ __( 'Skip', 'ast-block-templates' ) }
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeneratePagesContent;
