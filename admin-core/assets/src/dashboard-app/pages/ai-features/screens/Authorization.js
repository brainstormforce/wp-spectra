/**
 * The Authorization Page.
 */
import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	ZipWPLogo,
	WandIcon,
	BlocksIcon,
	WordPressLogo,
	LayoutIcon,
	CodeBlockIcon,
	PageIcon,
} from '@DashboardApp/pages/ai-features/elements/IconComponents';
import {
	SpectraLogo,
	AstraLogo,
	CartFlowsLogo,
	StarterTemplatesLogo,
	PrestoPlayerLogo,
	SureFeedbackLogo,
} from '@DashboardApp/pages/ai-features/elements/ProductLogos';
import ManageFeaturesPopup from '@DashboardApp/pages/ai-features/elements/ManageFeaturesPopup';
import getApiData from '@Controls/getApiData';

const Authorization = () => {
	// Set the required states.
	const [ showPopup, setShowPopup ] = useState( false );
	const [ buttonLabel, setButtonLabel ] = useState(  __( 'Get Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' ) );

	// If the page is openend with the 'manage-features' query param, open the popup.
	useEffect( () => {
		const urlParams = new URLSearchParams( window.location.search );
		const manageFeatures = urlParams.get( 'manage-features' );
		if ( 'yes' === manageFeatures ) {
			setShowPopup( true );
		}
	}, [] );

	// Function: Authorize Zip AI.
	const authorizeZipAI = ( event ) => {
		event.preventDefault();
		// window.location.assign( uag_react.zip_ai_auth_middleware );

		// Get all the auth buttons and disable them.
		const authButtons = document.querySelectorAll( '.spectra-ai-features-authorization' );
		authButtons.forEach( ( authButton ) => {
			authButton.disabled = true;
		} );

		// Create the window positioning to be centered.
		const positioning = {
			left: ( window.screen.width - 480 ) / 2,
			top: ( window.screen.height - 720 ) / 2,
		};

		// Redirect to the Zip AI Authorization URL.
		const authWindow = window.open( uag_react.zip_ai_auth_middleware, 'SpectraAiFeaturesAuthorization', `width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0` );

		// Create an object with the security property.
        const data = {
            security: uag_react.zip_ai_verify_authenticity_nonce,
        };

		// Set a counter for timeout.
		let iterations = 0;

		// Update the texts.
		setButtonLabel( __( 'Getting Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' ) );

		// Set an interval to check if the option was updated.
		const authVerificationInterval = setInterval( () => {
			// Clear the interval if the window was closed, or automatically after 5 minutes.
			if ( authWindow.closed || 300 === iterations ) {
				// Close the auth window if it wasn't closed.
				if ( ! authWindow.closed ) {
					authWindow.close();
				}
				// Reset the texts and enable the button.
				clearInterval( authVerificationInterval );
				setButtonLabel( __( 'Get Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' ) );
				authButtons.forEach( ( authButton ) => {
					authButton.disabled = false;
				} );
			}

			// Call the getApiData function with the required parameters.
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_zip_ai_verify_authenticity',
				data,
			} );

			// Make the AJAX request to check if the option was updated.
			getApiFetchData.then( ( response ) => {
				if ( response?.success && response?.data?.is_authorized ) {
					authWindow.close();
					localStorage.setItem( 'zipAiAuthorizationStatus', true );
					clearInterval( authVerificationInterval );
					window.location.reload();
					setButtonLabel( __( 'Get Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' ) );
				}
			} );
			iterations++;
		}, 500 );
	};

	// Mini-Render: The Button Group.
	const renderButtonGroup = ( usePopup = false ) => (
		<div className="flex flex-col items-center gap-4">
			<button
				className="spectra-ai-features-authorization flex items-center justify-center w-fit gap-4 px-8 py-4 rounded text-base text-white bg-spectra hover:bg-spectra-hover focus-visible:bg-spectra-hover disabled:bg-spectra-hover transition-colors"
				onClick={ authorizeZipAI }
			>
				{ buttonLabel }
				<span>{ '→' }</span>
			</button>
			{ usePopup && (
				<div className="flex items-center justify-center gap-2 text-slate-500">
					<button className="text-sm underline hover:text-slate-700 transition-colors" onClick={ () => setShowPopup( true ) }>
						{ __( 'Manage AI Features', 'ultimate-addons-for-gutenberg' ) }
					</button>
				</div>
			) }
		</div>
	);

	// Mini-Render: The Info Card.
	const renderInfoCard = ( cardDetails ) => (
		<div className="flex gap-3">
			<div className="w-7 text-slate-900">
				{ cardDetails?.icon( { width: 28, height: 28 } ) }
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base leading-7 font-semibold text-slate-900">
					{ cardDetails?.title }
				</h4>
				<p className="text-sm font-normal text-slate-500">
					{ cardDetails?.description }
				</p>
			</div>
		</div>
	);

	// Render: The Header Section.
	const renderHeaderSection = () => (
		<section className="flex flex-col items-center gap-8 w-full px-12 py-10">
			<div className="flex gap-3 items-center">
				{ uag_react?.plugin_dir && (
					<>
						<img
							className="h-10"
							src={ `${ uag_react.plugin_dir }assets/images/logos/spectra.svg` }
							alt='Spectra'
						/>
						<svg className="text-slate-500" width="14" height="14" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.3125 5.75C12.3125 6.24219 11.9023 6.65234 11.4375 6.65234H7.5V10.5898C7.5 11.0547 7.08984 11.4375 6.625 11.4375C6.13281 11.4375 5.75 11.0547 5.75 10.5898V6.65234H1.8125C1.32031 6.65234 0.9375 6.24219 0.9375 5.75C0.9375 5.28516 1.32031 4.90234 1.8125 4.90234H5.75V0.964844C5.75 0.472656 6.13281 0.0625 6.625 0.0625C7.08984 0.0625 7.5 0.472656 7.5 0.964844V4.90234H11.4375C11.9023 4.875 12.3125 5.28516 12.3125 5.75Z" fill="currentColor"/>
						</svg>
					</>
				) }
				{ ZipWPLogo( { width: 40, height: 40, color: '#ff580e' } ) }
			</div>
			{ /* The Info-box Section */ }
			<section className="flex flex-col items-center gap-6">
				<h1 className="text-2xl leading-7 font-bold text-center text-slate-900">
					{ __( 'Build 10x faster with Spectra AI', 'ultimate-addons-for-gutenberg' ) }
				</h1>
				<p className="text-sm font-normal text-center text-slate-500">
					{ __( 'Spectra offers AI features powered by ZipWP to help you build your website 10x faster. Design beautiful pages, create persuasive content, and generate custom code in seconds. The possibilities are endless!', 'ultimate-addons-for-gutenberg' ) }
				</p>
				{ renderButtonGroup() }
			</section>
		</section>
	);

	// Render: The Details Section.
	const renderDetailsSection = () => (
		<section className="grid grid-cols-2 gap-6 w-full px-12 py-10 bg-violet-50">
			{ renderInfoCard( {
				icon: WandIcon,
				title: __( 'Craft Compelling Content', 'ultimate-addons-for-gutenberg' ),
				description: __( 'With our AI, you can effortlessly create persuasive and engaging copy that resonates with your audience.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: BlocksIcon,
				title: __( 'AI-Powered Block Patterns', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Our AI can personalize and customize the block patterns and section templates to tailor them to your website\'s unique needs.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: WordPressLogo,
				title: __( 'WordPress Wizardry', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Got questions? Our AI has the answers. Whether it\'s troubleshooting or customizing your site, we got your back.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: LayoutIcon,
				title: __( 'Personalized Templates', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Say goodbye to generic designs and say hello to our AI-personalized page templates, tailored just for you.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: CodeBlockIcon,
				title: __( 'Generate Custom Code', 'ultimate-addons-for-gutenberg' ),
				description: __( 'No more struggling with complex coding issues. Our AI can generate custom code, functions, and CSS tailored to your needs.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: PageIcon,
				title: __( 'Custom Pages with AI', 'ultimate-addons-for-gutenberg' ),
				description: sprintf(
					/* translators: %s: Percentage Ascii Code */
					__( 'With our AI by your side, you can create beautiful, 100%s custom web pages without the need for any design or coding skills.', 'ultimate-addons-for-gutenberg' ),
					'%',
				),
			} ) }
		</section>
	);

	// Render: The Products Section.
	const renderProductsSection = () => (
		<section className="flex flex-col items-center gap-12 w-full px-12 py-10">
			<h3 className="text-2xl leading-6 font-bold text-center text-slate-900">
				{ __( 'From the Team Behind Some Iconic WordPress Products', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<div className="grid grid-cols-3 items-center gap-16 w-full text-slate-700 opacity-50">
				<div className="flex justify-end">{ AstraLogo }</div>
				<div className="flex justify-center">{ CartFlowsLogo }</div>
				<div className="flex justify-start">{ StarterTemplatesLogo }</div>
				<div className="flex justify-end">{ PrestoPlayerLogo }</div>
				<div className="flex justify-center">{ SureFeedbackLogo }</div>
				<div className="flex justify-start">{ SpectraLogo }</div>
			</div>
			{ renderButtonGroup( true ) }
		</section>
	);

	return (
		<>
			<main className="relative overflow-hidden flex items-center justify-center w-full min-h-screen p-16">
				{ /* The Centered Box */ }
				<article className="flex flex-col items-center justify-center overflow-hidden w-full max-w-3xl p-0 rounded bg-white shadow-overlay">
					{ renderHeaderSection() }
					{ renderDetailsSection() }
					{ renderProductsSection() }
					{ /* The Manage Features Popup */ }
					<ManageFeaturesPopup { ...{
						showPopup,
						setShowPopup,
					} } />
				</article>
			</main>
		</>
	);
};

export default Authorization;
