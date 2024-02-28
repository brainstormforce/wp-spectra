/**
 * The Settings Page.
 */
import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
	ZipWPLogo,
	WandIcon,
	BlocksIcon,
	WordPressLogo,
	LayoutIcon,
	CodeBlockIcon,
	PageIcon,
	ExternalLinkIcon,
	CheckmarkBadgeIcon,
} from '@DashboardApp/pages/ai-features/elements/IconComponents';
import ManageFeaturesPopup from '@DashboardApp/pages/ai-features/elements/ManageFeaturesPopup';
import { uagbClassNames, displayInThousands } from '@Utils/Helpers';
import ConfirmationPopup from '@Common/components/ConfirmationPopup';
import ReactHtmlParser from 'react-html-parser';

const Settings = () => {
	// Set the required states.
	const [ showRevokePopup, setShowRevokePopup ] = useState( false );
	const [ showFeaturesPopup, setShowFeaturesPopup ] = useState( false );

	// If the page is openend with the 'manage-features' query param, open the popup.
	useEffect( () => {
		const urlParams = new URLSearchParams( window.location.search );
		const manageFeatures = urlParams.get( 'manage-features' );
		if ( 'yes' === manageFeatures ) {
			setShowFeaturesPopup( true );
		}
	}, [] );

	// Set the credit details and the team name.
	const creditDetails = uag_react.zip_ai_credit_details;
	const teamName = uag_react?.zip_ai_current_plan?.team_name;

	// Set the credit level to low, and then compare the credit percentage with the credit threshold medium and high values using a switch case.
	let creditClass = 'bg-green-500';
	switch ( true ) {
		case creditDetails?.percentage >= creditDetails.threshold.high:
			creditClass = 'bg-red-500';
			break;
		case creditDetails?.percentage >= creditDetails.threshold.medium:
			creditClass = 'bg-amber-500';
			break;
	}

	// Render the grid item with details.
	const renderGridDetail = ( gridItemDetails ) => (
		<div className="flex gap-3">
			<div className="w-6">
				{ gridItemDetails?.icon( { className: 'text-spectra', width: 24, height: 24 } ) }
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-base font-semibold text-slate-900">
					{ gridItemDetails?.title }
				</h4>
				<p className="text-sm font-normal text-slate-500">
					{ gridItemDetails?.description }
				</p>
			</div>
		</div>
	);

	// Render the welcome card.
	const renderWelcomeCard = () => (
		<>
			{ applyFilters( 'zip_ai_render_welcome_card', true ) &&
				<section className="rounded-lg bg-white p-12 gap-12 overflow-hidden shadow-sm flex flex-col justify-start h-auto min-h-full">
					{/* The header area with the logos and title. */}
					<div className="flex flex-col gap-4">
						<div className="flex gap-2 items-center justify-start">
							<img
								className="h-6"
								src={ `${ uag_react.plugin_dir }assets/images/logos/spectra.svg` }
								alt='Spectra'
							/>
							<svg className="text-slate-500" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" fill="currentColor"/>
							</svg>
							{ ZipWPLogo( { className: 'h-6', width: 24, height: 24, color: '#ff580e' } ) }
						</div>
						<h1 className="text-slate-800 text-2xl font-semibold text-left">
							{ __( 'Build 10x Faster with Spectra & ZipWP', 'ultimate-addons-for-gutenberg' ) }
						</h1>
					</div>
					{/* The 2 column grid, with lines dividing each row */}
					<div className='flex-1 flex flex-col justify-end'>
						<div className="grid grid-cols-2 gap-x-12 pb-8 border-b border-b-slate-200">
							{ renderGridDetail( {
								icon: WandIcon,
								title: __( 'Craft Compelling Content', 'ultimate-addons-for-gutenberg' ),
								description: __( 'With our AI, you can effortlessly create persuasive and engaging copy that resonates with your audience.', 'ultimate-addons-for-gutenberg' ),
							} ) }
							{ renderGridDetail( {
								icon: BlocksIcon,
								title: __( 'AI-Powered Block Patterns', 'ultimate-addons-for-gutenberg' ),
								description: __( 'Our AI can personalize and customize the block patterns and section templates to tailor them to your website\'s unique needs.', 'ultimate-addons-for-gutenberg' ),
							} ) }
						</div>
						<div className="grid grid-cols-2 gap-x-12 py-8 border-b border-b-slate-200">
							{ renderGridDetail( {
								icon: WordPressLogo,
								title: __( 'WordPress Wizardry', 'ultimate-addons-for-gutenberg' ),
								description: __( 'Got questions? Our AI has the answers. Whether it\'s troubleshooting or customizing your site, we got your back.', 'ultimate-addons-for-gutenberg' ),
							} ) }
							{ renderGridDetail( {
								icon: LayoutIcon,
								title: __( 'Personalized Templates', 'ultimate-addons-for-gutenberg' ),
								description: __( 'Say goodbye to generic designs and say hello to our AI-personalized page templates, tailored just for you.', 'ultimate-addons-for-gutenberg' ),
							} ) }
						</div>
						<div className="grid grid-cols-2 gap-x-12 pt-8">
							{ renderGridDetail( {
								icon: CodeBlockIcon,
								title: __( 'Generate Custom Code', 'ultimate-addons-for-gutenberg' ),
								description: __( 'No more struggling with complex coding issues. Our AI can generate custom code, functions, and CSS tailored to your needs.', 'ultimate-addons-for-gutenberg' ),
							} ) }
							{ renderGridDetail( {
								icon: PageIcon,
								title: __( 'Custom Pages with AI', 'ultimate-addons-for-gutenberg' ),
								description: sprintf(
									/* translators: %s: Percentage Ascii Code */
									__( 'With our AI by your side, you can create beautiful, 100%s custom web pages without the need for any design or coding skills.', 'ultimate-addons-for-gutenberg' ),
									'%',
								),
							} ) }
						</div>
					</div>
					{/* This entire section can be replaced with the contents from renderWelcomeVideo once the video is out. */}
				</section>
			}
		</>
	);

	// Render the credits card.
	const renderCreditsCard = () => (
		<>
			{ applyFilters( 'zip_ai_render_credits_card', true ) &&
				<section className="box-border flex flex-col gap-4 p-8 rounded-lg bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
					<div className="flex gap-2 items-start justify-between w-full">
						<h3 className="text-slate-800 text-xl font-medium">
							{ applyFilters( 'zip_ai_credits_card_header', __( 'Credit Usage', 'ultimate-addons-for-gutenberg' ) ) }
						</h3>
						<a
							className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-violet-50 text-slate-500"
							href={ uag_react?.zip_ai_credit_topup_url }
							target="_blank"
							rel="noreferrer noopener"
						>
							{ applyFilters( 'zip_ai_credits_card_link_content', __( 'Get more Credits', 'ultimate-addons-for-gutenberg' ) ) }
							{ ExternalLinkIcon( {
								width: 12,
								height: 12,
							} ) }
						</a>
					</div>
					<div className="flex gap-2 items-center justify-between w-full">
						<div className="flex items-end gap-1">
							<span className="text-2xl leading-7 font-semibold text-slate-800">
								{ displayInThousands( creditDetails.used ) }
							</span>
							<span className="text-sm font-semibold text-slate-500">
								{ sprintf(
									/* translators: %s: number of words */
									__( 'of %s', 'ultimate-addons-for-gutenberg' ),
									displayInThousands( creditDetails.total )
								) }
							</span>
						</div>
					</div>
					<div className="spectra-progress-bar bg-slate-200">
						<div
							className={ uagbClassNames( [
								'spectra-progress-bar__progress',
								creditClass,
							] ) }
							style={ {
								width: `${ creditDetails.percentage }%`,
							} }
						/>
					</div>
				</section>
			}
		</>
	);

	// Render the community card.
	const renderRevokeCard = () => {
		// Function to revoke access.
		const revokeAccess = () => {
			setShowRevokePopup( true );
		};

		return (
			<section className="box-border rounded-lg flex flex-col items-start gap-4 p-8 bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
				<div>
					<div className='flex items-center gap-2'>
						<h3 className="text-slate-800 text-xl font-medium">
							{ __(
								'ZipWP is Connected',
								'ultimate-addons-for-gutenberg'
							) }
						</h3>
						{ CheckmarkBadgeIcon( { width: 24, height: 24, color: '#16a34a'} ) }
					</div>
					{ teamName && (
						<p className="text-slate-700 mt-2 text-lg font-medium">
							{ ReactHtmlParser(
								sprintf(
									/* translators: %1$s: The opening span tag, %2$s: The team name, %3$s: The closing span tag */
									__( 'Organization: %1$s%2$s%3$s', 'ultimate-addons-for-gutenberg' ),
									'<span class="font-normal">',
									teamName,
									'</span>',
								)
							) }
						</p>
					) }
				</div>
				<p className="text-slate-500 text-sm">
					{ __(
						'Your website is connected with ZipWP. You can revoke this connection at any time.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<button
					className="w-fit text-base transition-colors text-red-600 focus-visible:text-red-700 hover:text-red-700"
					onClick={ revokeAccess }
				>
					{ applyFilters( 'zip_ai_render_revoke_card_button', __(
						'Revoke Access',
						'ultimate-addons-for-gutenberg'
					) ) }
				</button>
			</section>
		);
	};

	// Render the manage features card.
	const renderFeaturesCard = () => (
		<>
			{ applyFilters( 'zip_ai_render_features_card', true ) &&
				<section className="box-border rounded-lg flex flex-col gap-4 p-8 bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
					<div className="flex w-full items-center justify-between">
						<h3 className="text-slate-800 text-xl font-medium">
							{ applyFilters( 'zip_ai_render_features_card_header', __( 'Manage AI Features', 'ultimate-addons-for-gutenberg' ) ) }
						</h3>
					</div>
					<p className="text-slate-500 text-sm">
						{ applyFilters( 'zip_ai_render_features_card_description', __(
							'This setting allows you to enable or disable the AI features on your website. ',
							'ultimate-addons-for-gutenberg'
						) ) }
					</p>
					<button
						className="w-fit text-base transition-colors text-spectra focus-visible:text-spectra-hover hover:text-spectra-hover"
						onClick={ () => setShowFeaturesPopup( true ) }
					>
						{ applyFilters( 'zip_ai_render_features_card_button', __(
							'Manage AI Features',
							'ultimate-addons-for-gutenberg'
						) ) }
					</button>
				</section>
			}
		</>
	);

	// Return the Welcome Page.
	return (
		<>
			<main className="py-10">
				<div className="max-w-3xl mx-auto px-6 lg:max-w-7xl">
					<div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-5 xl:gap-10">
						{ /* Left column */ }
						<div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
							{ applyFilters( 'zip_ai_before_welcome_card' ) }
							{ renderWelcomeCard() }
							{ applyFilters( 'zip_ai_after_welcome_card' ) }
						</div>
						{ /* Right column */ }
						<div className="space-y-4 flex h-full flex-col justify-start lg:space-y-5 xl:space-y-10">
							{ applyFilters( 'zip_ai_before_welcome_sidebar' ) }
							{ renderCreditsCard() }
							{ renderFeaturesCard() }
							{ renderRevokeCard() }
							{ applyFilters( 'zip_ai_after_welcome_sidebar' ) }
						</div>
					</div>
				</div>
			</main>
			{ /* The Revoke Access Confirmation Popup */ }
			<ConfirmationPopup { ...{
				showPopup: showRevokePopup,
				setShowPopup: setShowRevokePopup,
				popupContent: {
					title: __( 'Revoke Access', 'ultimate-addons-for-gutenberg' ),
					description: `${
						__( 'Are you sure you wish to revoke the authorization token?', 'ultimate-addons-for-gutenberg' )
					}\n${
						__( 'You will need to re-authorize ZipWP to use it again.', 'ultimate-addons-for-gutenberg' )
					}`,
				},
				popupAccept: {
					label: __( 'Revoke', 'ultimate-addons-for-gutenberg' ),
					callback: () => {
						localStorage.removeItem( 'zipAiAuthorizationStatus' );
						window.location.assign( uag_react.zip_ai_auth_revoke_url );
					},
				},
				popupCancel: {
					label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
					callback: () => {
						setShowRevokePopup( false );
					},
				},
			} } />
			{ /* The Manage Features Popup */ }
			<ManageFeaturesPopup { ...{
				showPopup: showFeaturesPopup,
				setShowPopup: setShowFeaturesPopup,
			} } />
		</>
	);
};

export default Settings;
