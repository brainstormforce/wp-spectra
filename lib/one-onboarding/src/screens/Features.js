import { useState, useEffect, useCallback } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Alert, Badge, Button, Checkbox, toast, Tooltip } from '@bsf/force-ui';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ACTIONS, useRouterSync, useStore } from '@/store';
import { Layout } from '@/components';
import {
	activatePlugin,
	checkPluginStatus,
	classnames,
} from '@/utils/functions';

const { screens, proSlug } = window.oneOnboardingData || {};
const screen = screens?.features || {};

const Features = () => {
	const { navigateToNextScreen, navigateToPreviousScreen, skipScreen } =
		useRouterSync();
	const {
		state: { proFeatures, proStatus },
		dispatch,
	} = useStore();
	const [ hasClickedUpgrade, setHasClickedUpgrade ] = useState( false );

	const isProUnavailable = proStatus !== 'active' && proStatus !== 'inactive';

	// Function to check and update pro status
	const checkAndUpdateProStatus = useCallback( async () => {
		if ( ! proSlug ) {
			return;
		}

		const result = await checkPluginStatus( proSlug );
		if ( result.success && result.data ) {
			// Determine status based on the response
			let status = 'not-installed';
			if ( result.data.installed && result.data.active ) {
				status = 'active';
			} else if ( result.data.installed && ! result.data.active ) {
				status = 'inactive';
			}

			dispatch( {
				type: ACTIONS.SET_PRO_STATUS,
				payload: status,
			} );
		}
	}, [ dispatch ] );

	// Check pro status on component mount
	useEffect( () => {
		checkAndUpdateProStatus();
	}, [ checkAndUpdateProStatus ] );

	// Check pro status when user returns to tab
	useEffect( () => {
		const handleVisibilityChange = () => {
			if ( ! document.hidden ) {
				checkAndUpdateProStatus();
			}
		};

		document.addEventListener( 'visibilitychange', handleVisibilityChange );

		return () => {
			document.removeEventListener(
				'visibilitychange',
				handleVisibilityChange
			);
		};
	}, [ checkAndUpdateProStatus ] );

	const handleFeatureToggle = ( feature, value ) => {
		const selectedFeatures = value
			? [ ...proFeatures, feature?.id ]
			: proFeatures.filter( ( f ) => f !== feature?.id );

		dispatch( {
			type: ACTIONS.SET_PRO_FEATURES,
			payload: selectedFeatures,
		} );
	};

	const handleContinueClick = async () => {
		if ( isProUnavailable ) {
			window.open( screen?.upgradeUrl || '#', '_blank' );
			setHasClickedUpgrade( true );
			return;
		}

		navigateToNextScreen();

		// If the pro addon is already active, we can skip
		if ( proStatus === 'active' ) {
			return;
		}

		// If the pro addon is inactive, we need to activate it
		try {
			// Use the helper function to activate the pro plugin
			const result = await activatePlugin( proSlug );

			if ( result.success ) {
				toast.success( __( 'Pro Activated', 'one-onboarding' ), {
					description: __(
						'The pro addon has been successfully activated…',
						'one-onboarding'
					),
				} );
				dispatch( {
					type: ACTIONS.SET_PRO_STATUS,
					payload: 'active',
				} );
			} else {
				toast.error( __( 'Activation Failed!', 'one-onboarding' ), {
					description: __(
						'Failed to activate the pro addon. Please try again or activate it manually from the plugins page.',
						'one-onboarding'
					),
				} );
			}
		} catch ( error ) {
			console.error( 'Error activating plugin:', error );
		}
	};

	// Tags text
	const tags = {
		pro: __( 'Pro', 'one-onboarding' ),
		free: __( 'Free', 'one-onboarding' ),
	};

	const isProFeaturesSelected = proFeatures.length > 0;

	const getTooltipContent = ( isPro ) => {
		if ( isPro ) {
			return '';
		}

		return __(
			'Feature is available by default in Free version',
			'one-onboarding'
		);
	};

	const getBadgeLabel = ( isPro ) => {
		return (
			<span className="flex items-center gap-1">
				{ isPro && proStatus === 'active' && <Check size={ 12 } /> }
				{ isPro ? tags.pro : tags.free }
			</span>
		);
	};

	const isFeatureChecked = ( feature ) => {
		return feature?.isPro ? proFeatures?.includes( feature.id ) : true;
	};

	return (
		<Layout>
			<form onSubmit={ ( e ) => e.preventDefault() }>
				<Layout.Header
					title={
						screen?.heading ||
						__( 'Select Your Features', 'one-onboarding' )
					}
					description={ screen?.description || '' }
				/>

				<div className="grid grid-cols-1 mt-2">
					{ screen?.featureList?.map( ( feature, index ) => (
						<Tooltip
							key={ index }
							arrow
							placement="top"
							content={ getTooltipContent( feature?.isPro ) }
							className={ classnames(
								feature?.isPro && 'hidden'
							) }
						>
							<div
								className={ classnames(
									'py-4 [&>div]:flex-row-reverse [&>div]:w-full [&>div]:justify-between border-0 border-b border-solid border-border-subtle',
									! feature?.isPro &&
										'[&>div]:pointer-events-none'
								) }
							>
								<Checkbox
									label={ {
										description: feature?.description,
										heading: (
											<span className="flex items-center gap-3 cursor-pointer">
												{ feature?.title }
												<Badge
													size="xs"
													variant={
														feature?.isPro &&
														proStatus !== 'active'
															? 'inverse'
															: 'green'
													}
													label={ getBadgeLabel(
														feature?.isPro
													) }
												/>
											</span>
										),
									} }
									size="sm"
									checked={ isFeatureChecked( feature ) }
									onChange={ ( value ) =>
										handleFeatureToggle( feature, value )
									}
									onKeyDown={ ( event ) => {
										if (
											event.key === 'Enter' &&
											feature?.isPro
										) {
											event.preventDefault();
											handleFeatureToggle(
												feature,
												! isFeatureChecked( feature )
											);
										}
									} }
									tabIndex={ feature?.isPro ? 0 : -1 }
									className={ classnames(
										'focus:border-border-interactive',
										! feature?.isPro &&
											'checked:bg-[#E5E7EB] checked:border-[#E5E7EB] shadow-none'
									) }
								/>
							</div>
						</Tooltip>
					) ) }
				</div>

				<div className="flex justify-between items-center gap-6 mt-6">
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
						<Button
							icon={ <ChevronRight /> }
							iconPosition="right"
							onClick={
								isProFeaturesSelected
									? handleContinueClick
									: navigateToNextScreen
							}
						>
							{ isProFeaturesSelected && isProUnavailable
								? __( 'Upgrade', 'one-onboarding' )
								: __( 'Continue', 'one-onboarding' ) }
						</Button>
					</div>
				</div>

				{ isProFeaturesSelected && proStatus !== 'active' && (
					<Alert
						className="mt-8 bg-gray-50 shadow-none [&_p]:mr-0"
						content={
							<ProAlertContent
								status={ proStatus }
								upgrading={ hasClickedUpgrade }
							/>
						}
					/>
				) }
			</form>
		</Layout>
	);
};

const ProAlertContent = ( { status, upgrading } ) => {
	if ( upgrading ) {
		return (
			<span
				dangerouslySetInnerHTML={ {
					__html:
						sprintf(
							/* translators: %s: upload plugins page link */
							__(
								'If you completed the purchase, please update the pro plugin zip manually from the %s.',
								'one-onboarding'
							),
							`<a href="/wp-admin/plugin-install.php?tab=upload" target="_blank" rel="noopener noreferrer" class="focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary-600">${ __(
								'upload plugins page',
								'one-onboarding'
							) }</a>`
						) +
						' ' +
						__(
							'Once uploaded, refresh the page to reflect the changes.',
							'one-onboarding'
						),
				} }
			/>
		);
	}

	// Generate message based on pro plugin status
	switch ( status ) {
		case 'inactive':
			return __(
				'Pro addon is found but inactive. Click continue to activate it and unlock premium features.',
				'one-onboarding'
			);
		case 'active':
			return __(
				'Pro addon is active. You can use all premium features.',
				'one-onboarding'
			);
		default: // not-installed or any other state
			return __(
				"Heads up! You've selected premium features. To use them, you'll need to upgrade.",
				'one-onboarding'
			);
	}
};

export default Features;
