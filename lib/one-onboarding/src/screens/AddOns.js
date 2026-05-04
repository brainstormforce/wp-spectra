import { useState, useEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Checkbox, Badge, toast, Loader } from '@bsf/force-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout } from '@/components';
import { useRouterSync, useStore, ACTIONS } from '@/store';
import {
	checkPluginStatus,
	installPlugin,
	activatePlugin,
	classnames,
} from '@/utils/functions';

const { screens } = window.oneOnboardingData || {};
const screen = screens?.[ 'add-ons' ] || {};

const AddonItem = ( { addon, status, isSelected, onToggle, processing } ) => {
	// Status text mapping
	const statusLabels = {
		active: __( 'Active', 'one-onboarding' ),
		inactive: processing
			? __( 'Activating…', 'one-onboarding' )
			: __( 'Inactive', 'one-onboarding' ),
		default: processing ? __( 'Installing…', 'one-onboarding' ) : '',
	};

	const statusVariants = {
		active: 'green',
		inactive: 'yellow',
		default: 'neutral',
	};

	const loaderClasses = {
		active: 'text-badge-color-green',
		inactive: 'text-badge-color-yellow',
		default: 'text-badge-color-gray',
	};

	const showLoader = isSelected && processing;

	return (
		<div className="p-3 bg-background-primary flex gap-2 rounded-md shadow-sm [&>div]:flex-row-reverse [&>div]:w-full [&>div]:justify-between">
			<span className="w-6 h-6 mt-1">
				{ addon?.logo && (
					<img
						className="w-full h-full"
						src={ addon?.logo }
						alt={ sprintf(
							// translators: %s is the addon title
							__( '%s logo', 'one-onboarding' ),
							addon?.title
						) }
					/>
				) }
				{ ! addon?.logo && addon?.logoSvg && (
					<div
						className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
						role="img"
						aria-label={ sprintf(
							// translators: %s is the addon title
							__( '%s logo', 'one-onboarding' ),
							addon?.title
						) }
						dangerouslySetInnerHTML={ {
							__html: addon?.logoSvg,
						} }
					/>
				) }
			</span>

			<Checkbox
				label={ {
					description: addon.description,
					heading: (
						<span className="flex items-center gap-2">
							<span className="cursor-pointer">
								{ addon.title }
							</span>
							{ ( status || showLoader ) && (
								<Badge
									size="xs"
									icon={
										showLoader && (
											<Loader
												className={ classnames(
													'[&>svg]:size-3.5',
													loaderClasses?.[ status ] ||
														loaderClasses?.default
												) }
											/>
										)
									}
									variant={
										statusVariants?.[ status ] ||
										statusVariants?.default
									}
									label={
										statusLabels?.[ status ] ||
										statusLabels?.default
									}
								/>
							) }
						</span>
					),
				} }
				size="sm"
				checked={ isSelected }
				onChange={ ( checked ) => onToggle( addon?.slug, checked ) }
				onKeyDown={ ( event ) => {
					if ( event.key === 'Enter' ) {
						event.preventDefault();
						onToggle( addon?.slug, ! isSelected );
					}
				} }
				className="focus:border-border-interactive"
			/>
		</div>
	);
};

const AddOns = () => {
	const [ addonStatus, setAddonStatus ] = useState( {} );
	const [ processing, setProcessing ] = useState( false );
	const { navigateToNextScreen, navigateToPreviousScreen, skipScreen } =
		useRouterSync();
	const {
		state: { selectedAddons, activatedAddons },
		dispatch,
	} = useStore();

	useEffect( () => {
		const fetchAddonStatuses = async () => {
			if ( ! screen?.addonList?.length ) {
				return;
			}

			const statusPromises = screen.addonList
				.filter( ( addon ) => addon?.slug )
				.map( async ( addon ) => {
					try {
						const result = await checkPluginStatus( addon.slug );
						if ( ! result.success ) {
							return null;
						}

						let { installed, active } = result.data;
						active = active ? 'active' : '';
						installed = installed ? 'inactive' : '';
						return {
							slug: addon.slug,
							status: active || installed,
						};
					} catch ( error ) {
						console.error(
							`Error checking status for ${ addon.slug }:`,
							error
						);
						return null;
					}
				} );

			const results = await Promise.all( statusPromises );
			const newStatuses = {};
			results.forEach( ( result ) => {
				if ( result ) {
					newStatuses[ result.slug ] = result.status;
				}
			} );

			setAddonStatus( newStatuses );
		};

		fetchAddonStatuses();
	}, [] );

	// Handle addon selection toggle
	const handleAddonToggle = ( addonSlug, checked ) => {
		let updatedSelectedAddons;

		if ( checked ) {
			// Add to array if not already present
			updatedSelectedAddons = selectedAddons.includes( addonSlug )
				? selectedAddons
				: [ ...selectedAddons, addonSlug ];
		} else {
			// Remove from array
			updatedSelectedAddons = selectedAddons.filter(
				( slug ) => slug !== addonSlug
			);
		}

		dispatch( {
			type: ACTIONS.SET_SELECTED_ADDONS,
			payload: updatedSelectedAddons,
		} );
	};

	// Install/Activate selected addons
	const handleContinue = async () => {
		if ( processing ) {
			return;
		}

		const allActive = selectedAddons.every(
			( slug ) => addonStatus[ slug ] === 'active'
		);

		if ( selectedAddons.length === 0 || allActive ) {
			navigateToNextScreen();
			return;
		}

		setProcessing( true );

		try {
			const newlyActivatedAddons = [];

			// Process each selected addon
			for ( const addon of screen?.addonList ) {
				const addonSlug = addon?.slug;

				const isSelected = selectedAddons.find(
					( slug ) => slug === addonSlug
				);

				if ( ! isSelected ) {
					continue;
				}

				setProcessing( addonSlug );

				const currentStatus = addonStatus[ addonSlug ];

				// Skip if already active
				if ( currentStatus === 'active' ) {
					continue;
				}

				try {
					// If not installed, install first
					if ( ! currentStatus ) {
						const installResult = await installPlugin( addonSlug );
						if ( ! installResult.success ) {
							throw new Error( installResult.error );
						}
					}

					// If installed but not active, activate it
					if ( currentStatus === 'inactive' || ! currentStatus ) {
						const activateResult = await activatePlugin(
							addonSlug
						);
						if ( ! activateResult.success ) {
							throw new Error( activateResult.error );
						}
					}

					// Update status to active
					setAddonStatus( ( prev ) => ( {
						...prev,
						[ addonSlug ]: 'active',
					} ) );

					// Collect newly activated addon
					if ( ! activatedAddons.includes( addonSlug ) ) {
						newlyActivatedAddons.push( addonSlug );
					}
				} catch ( error ) {
					// Show individual error toast for each failed addon
					toast.error( __( 'Error!', 'one-onboarding' ), {
						description: sprintf(
							// translators: %s is the addon title
							__( 'Failed to set up %s.', 'one-onboarding' ),
							addon.title
						),
					} );
				}
			}

			// Update activated addons array with all newly activated addons
			if ( newlyActivatedAddons.length > 0 ) {
				dispatch( {
					type: ACTIONS.SET_ACTIVATED_ADDONS,
					payload: [ ...activatedAddons, ...newlyActivatedAddons ],
				} );
			}

			// Navigate to next screen after 500 milliseconds
			setTimeout( navigateToNextScreen, 500 );
		} catch ( error ) {
			// General error toast
			toast.error( __( 'Error!', 'one-onboarding' ), {
				description:
					error.message ||
					__( 'Failed to setup addons', 'one-onboarding' ),
			} );
		} finally {
			setProcessing( false );
		}
	};

	return (
		<Layout>
			<Layout.Header
				title={
					screen?.heading ||
					__( 'Recommended Essentials', 'one-onboarding' )
				}
				description={
					screen?.description ||
					__(
						'These free plugins add essential features to your website and help speed up your workflow. The selected plugins below will be installed on this site.',
						'one-onboarding'
					)
				}
			/>

			<div className="p-2 bg-background-secondary flex flex-col gap-1 rounded-lg overflow-auto">
				{ screen?.addonList?.map( ( addon, index ) => (
					<AddonItem
						key={ addon?.slug || index }
						addon={ addon }
						status={ addonStatus[ addon?.slug ] || '' }
						isSelected={ selectedAddons.includes( addon?.slug ) }
						onToggle={ handleAddonToggle }
						processing={ processing === addon?.slug }
					/>
				) ) }
			</div>

			<div className="flex justify-between items-center pt-2 gap-4">
				<Button
					icon={ <ChevronLeft /> }
					variant="outline"
					onClick={ navigateToPreviousScreen }
					disabled={ processing }
				>
					{ __( 'Back', 'one-onboarding' ) }
				</Button>

				<div className="flex justify-end items-center gap-3">
					<Button
						className="text-text-tertiary"
						variant="ghost"
						onClick={ skipScreen }
						disabled={ processing }
					>
						{ __( 'Skip', 'one-onboarding' ) }
					</Button>
					<Button
						className={ classnames(
							processing && 'cursor-not-allowed'
						) }
						icon={
							processing ? (
								<Loader size="sm" variant="secondary" />
							) : (
								<ChevronRight />
							)
						}
						iconPosition="right"
						onClick={ handleContinue }
					>
						{ processing
							? __( 'Setting up…', 'one-onboarding' )
							: __( 'Continue', 'one-onboarding' ) }
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default AddOns;
