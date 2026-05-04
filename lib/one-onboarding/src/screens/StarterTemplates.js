import { useState, useCallback } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Loader, Text, toast } from '@bsf/force-ui';
import { ArrowRight, ChevronLeft, Layers, WandSparkles } from 'lucide-react';
import { useRouterSync, useStore, ACTIONS } from '@/store';
import { Layout } from '@/components';
import {
	checkPluginStatus,
	installPlugin,
	activatePlugin,
	classnames,
	submitOnboardingCompletion,
} from '@/utils/functions';

const { screens, starterTemplates } = window.oneOnboardingData || {};
const screen = screens?.features || {};

// Configuration for available builder types
const builders = [
	{
		id: 'ai-builder',
		enabled: starterTemplates?.aiBuilder?.enabled,
		icon: WandSparkles,
		title: __( 'AI Starter Templates', 'one-onboarding' ),
		description: __(
			'Let AI generate a website tailored to your business, no design skills needed.',
			'one-onboarding'
		),
		cta: {
			variant: 'primary',
			label: __( 'Generate with AI', 'one-onboarding' ),
			url: starterTemplates?.aiBuilder?.url || '#',
		},
	},
	{
		id: 'classic',
		enabled: starterTemplates?.classic?.enabled,
		icon: Layers,
		title: __( 'Classic Starter Templates', 'one-onboarding' ),
		description: __(
			'Pick from 300+ hand-crafted designs for different niches and styles.',
			'one-onboarding'
		),
		cta: {
			label: __( 'Build with Templates', 'one-onboarding' ),
			url: starterTemplates?.classic?.url || '#',
		},
	},
];

// Filter to show only enabled builders
const activeBuilders = builders.filter( ( builder ) => builder.enabled );

// Plugin configuration - Priority order matters (Pro first, then Free)
const PLUGINS = [
	{ slug: 'astra-pro-sites', name: 'Premium Starter Templates' },
	{ slug: 'astra-sites', name: 'Starter Templates' },
];

const StarterTemplates = () => {
	const { state, dispatch } = useStore();
	const { navigateToNextScreen, navigateToPreviousScreen, skipScreen } =
		useRouterSync();

	const [ loading, setLoading ] = useState( false );

	/**
	 * Redirects user to the selected builder with a delay for better UX
	 * Memoized to prevent unnecessary re-creations
	 *
	 * @param {Object} builder - Builder configuration object
	 * @param {number} delay   - Delay in milliseconds before redirect
	 */
	const redirectToBuilder = useCallback(
		async ( builder, delay = 0 ) => {
			const handleOnboardingCompletion = async () => {
				try {
					// Update state with selected builder
					dispatch( {
						type: ACTIONS.SET_STARTER_TEMPLATES_BUILDER,
						payload: builder?.id,
					} );

					await submitOnboardingCompletion( state );
				} catch ( error ) {
					console.error(
						'Failed to submit onboarding completion:',
						error
					);
				}
			};

			handleOnboardingCompletion();

			setTimeout( () => {
				window.location.href = builder?.cta?.url || '#';
			}, delay );
		},
		[ dispatch ]
	);

	/**
	 * Handles plugin activation and redirects user to builder
	 * Shows progress via toast notifications
	 * Memoized to prevent unnecessary re-creations
	 *
	 * @param {string} plugin  - Plugin slug to activate
	 * @param {string} name    - Human-readable plugin name for toasts
	 * @param {Object} builder - Builder configuration for redirect
	 */
	const activateAndRedirect = useCallback(
		async ( plugin, name, builder ) => {
			// Show activation progress toast
			toast.info( __( 'Activating…', 'one-onboarding' ), {
				description: sprintf(
					// translators: %s is the plugin name
					__( 'Activating %s…', 'one-onboarding' ),
					name
				),
			} );

			// Attempt to activate the plugin
			const activateResult = await activatePlugin( plugin );
			if ( ! activateResult.success ) {
				throw new Error( activateResult.error );
			}

			// Show success toast
			toast.success( __( 'Redirecting…', 'one-onboarding' ), {
				description: sprintf(
					// translators: %s is the plugin name
					__( 'Redirecting to %s…', 'one-onboarding' ),
					builder?.title
				),
			} );

			// Redirect with delay to show success message
			redirectToBuilder( builder, 1000 );
		},
		[ redirectToBuilder ]
	);

	/**
	 * Handles the Starter Template builder selection and plugin management
	 * Priority flow:
	 * 1. Check if any plugin is already active → redirect immediately
	 * 2. Try activating installed plugins (Pro first, then Free)
	 * 3. Install and activate free plugin as last resort
	 * Memoized to prevent unnecessary re-creations
	 *
	 * @param {Object} builder - Selected builder configuration
	 */
	const handleStarterTemplatesAction = useCallback(
		async ( builder ) => {
			// Prevent multiple simultaneous operations
			if ( loading ) {
				return;
			}

			// Set loading state to disable all builders
			setLoading( builder.id );

			try {
				// Step 1: Check if any plugin is already active
				// We check all plugins first to avoid unnecessary operations
				const pluginStatuses = {};
				for ( const { slug } of PLUGINS ) {
					pluginStatuses[ slug ] = await checkPluginStatus( slug );

					// If this plugin is active, redirect immediately
					if (
						pluginStatuses[ slug ].success &&
						pluginStatuses[ slug ].data?.active
					) {
						// Show success toast
						toast.success( __( 'Redirecting…', 'one-onboarding' ), {
							description: sprintf(
								// translators: %s is the plugin name
								__( 'Redirecting to %s…', 'one-onboarding' ),
								builder?.title
							),
						} );
						redirectToBuilder( builder );
						return;
					}
				}

				// Step 2: Try activating plugins (Pro first, then Free)
				// Priority ensures users with Pro plugin get Pro features
				for ( const { slug, name } of PLUGINS ) {
					const status = pluginStatuses[ slug ];

					// If plugin is installed but not active, activate it
					if ( status.success && status.data?.installed ) {
						await activateAndRedirect( slug, name, builder );
						return;
					}
				}

				// Step 3: Last resort - Install and activate free plugin
				// Only reached if no plugins are installed
				const freePlugin = PLUGINS[ 1 ]; // astra-sites (free plugin)

				// Show installation progress
				toast.info( __( 'Installing…', 'one-onboarding' ), {
					description: sprintf(
						// translators: %s is the plugin name
						__( 'Installing %s…', 'one-onboarding' ),
						freePlugin.name
					),
				} );

				// Attempt installation
				const installResult = await installPlugin( freePlugin.slug );
				if ( ! installResult.success ) {
					throw new Error( installResult.error );
				}

				// After successful installation, activate the plugin
				await activateAndRedirect(
					freePlugin.slug,
					freePlugin.name,
					builder
				);
			} catch ( error ) {
				// Show error toast with user-friendly message
				toast.error( __( 'Error!', 'one-onboarding' ), {
					description:
						error.message ||
						__(
							'Failed to setup Starter Templates',
							'one-onboarding'
						),
				} );
			} finally {
				// Always clear loading state
				setLoading( false );
			}
		},
		[ loading, setLoading, redirectToBuilder, activateAndRedirect ]
	);

	// Auto-skip if no builders are available
	if ( activeBuilders.length === 0 ) {
		navigateToNextScreen();
		return null;
	}

	return (
		<Layout>
			<Layout.Header
				title={
					screen?.heading ||
					__(
						'Build Your Site in Minutes Using Pre-Built Templates',
						'one-onboarding'
					)
				}
				description={
					screen?.description ||
					__(
						'Launch your site in minutes by importing a complete website, including pages, headers, footers, and global styles. Customize everything visually using Astra.',
						'one-onboarding'
					)
				}
			/>

			<div className="p-2 bg-background-secondary flex flex-col md:flex-row gap-2 rounded-lg overflow-auto">
				{ activeBuilders.map( ( builder, index ) => (
					<div
						key={ builder.id || index }
						className="md:w-1/2 p-3 bg-background-primary flex flex-col gap-2 rounded-lg shadow-sm"
					>
						{ /* Builder icon */ }
						{ builder?.icon && (
							<builder.icon
								className="h-6 w-6 text-brand-primary-600"
								strokeWidth={ 1.25 }
							/>
						) }

						{ /* Builder content */ }
						<div className="flex-1 mb-2">
							<Text as="h5" size={ 18 } className="mb-1">
								{ builder?.title }
							</Text>

							<Text as="p" size={ 14 } color="secondary">
								{ builder?.description }
							</Text>
						</div>

						{ /* CTA Button with loading state */ }
						<Button
							className={ classnames(
								'w-max',
								loading && 'cursor-not-allowed'
							) }
							size="sm"
							icon={
								loading === builder.id ? (
									<Loader
										size="sm"
										variant={
											builder?.cta?.variant === 'primary'
												? 'secondary'
												: 'primary'
										}
									/>
								) : (
									<ArrowRight />
								)
							}
							iconPosition="right"
							variant={ builder?.cta?.variant || 'outline' }
							onClick={ () =>
								handleStarterTemplatesAction( builder )
							}
						>
							{ builder?.cta?.label }
						</Button>
					</div>
				) ) }
			</div>

			{ /* Navigation footer */ }
			<div className="flex justify-between items-center pt-2 gap-4">
				<Button
					icon={ <ChevronLeft /> }
					variant="outline"
					onClick={ navigateToPreviousScreen }
				>
					{ __( 'Back', 'one-onboarding' ) }
				</Button>

				<div className="flex justify-end items-center gap-3">
					<Button
						className="text-text-tertiary"
						variant="ghost"
						onClick={ skipScreen }
					>
						{ __( 'Skip', 'one-onboarding' ) }
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default StarterTemplates;
