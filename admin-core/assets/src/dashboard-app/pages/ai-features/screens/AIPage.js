/**
 * The Authorization Page.
 */
import { useState, useEffect, useRef, Fragment } from '@wordpress/element';
import { useDispatch, useSelector } from 'react-redux';
import { __, sprintf } from '@wordpress/i18n';
import {
	WandIcon,
	BlocksIcon,
	WordPressLogo,
	LayoutIcon,
	CodeBlockIcon,
	PageIcon,
} from '@DashboardApp/pages/ai-features/elements/IconComponents';

import getApiData from '@Controls/getApiData';

import { Container, Button, Badge, Switch, DropdownMenu, Skeleton } from '@bsf/force-ui';
import ExtendYourWebsite from '@Common/components/ExtendYourWebsite';
import QuickAccess from '@Common/components/QuickAccess';
import VideoTutorials from '@Common/components/VideoTutorials';

import {
	Rocket,
	Sparkles,
	WandSparkles,
	Link2,
	CheckCheck,
	Unlink,
	Ellipsis,
	Zap,
	ArrowUpRight,
	Layers,
	ChartNoAxesColumn,
	X,
} from 'lucide-react';

const AIPage = () => {
	// Set the default message based on whether the user is new or has linked before.
	const buttonText =
		'disconnected' === uag_react?.zip_ai_status
			? __( 'Reconnect and Continue Using AI Features', 'ultimate-addons-for-gutenberg' )
			: __( 'Get Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' );
	// Set the required states.
	const [ showPopup, setShowPopup ] = useState( false );
	const [ buttonLabel, setButtonLabel ] = useState( buttonText );
	const [ isLoading, setIsLoading ] = useState( true );

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
		const authWindow = window.open(
			uag_react.zip_ai_auth_middleware,
			'SpectraAiFeaturesAuthorization',
			`width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0`
		);

		// Create an object with the security property.
		const data = {
			security: uag_react.zip_ai_verify_authenticity_nonce,
		};

		// Set a counter for timeout.
		let iterations = 0;

		// Update the texts.
		setButtonLabel(
			'disconnected' === uag_react?.zip_ai_status
				? __( 'Reconnecting to Use AI Features', 'ultimate-addons-for-gutenberg' )
				: __( 'Getting Started with 1000 Free Monthly Credits', 'ultimate-addons-for-gutenberg' )
		);

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
				setButtonLabel( buttonText );
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
					setButtonLabel( buttonText );
				}
			} );
			iterations++;
		}, 500 );
	};

	// State to check if any modules are being updated.
	const [ isUpdating, setIsUpdating ] = useState( {
		atLeastOneUpdate: false,
		ai_assistant: false,
		ai_design_copilot: false,
	} );

	// Disable the body scroll when the popup is open.
	useEffect( () => {
		if ( showPopup ) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [ showPopup ] );

	// Get the current Zip AI status.
	const dispatch = useDispatch();
	const currentZipAiStatus = useSelector( ( state ) => state.zipAiModules );
	const { ai_assistant: zipAiAssistant, ai_design_copilot: zipAiDesignCopilot } = currentZipAiStatus;

	const [ showDisconnectionPopup, setShowDisconnectionPopup ] = useState( false );
	const [ showReconnectionPopup, setShowReconnectionPopup ] = useState( false );

	// Small function to check if a module exists, and if so whether it is enabled or not - Returns true, false or undefined.
	const checkModuleStatus = ( theModule ) => {
		switch ( theModule?.status ) {
			case 'enabled':
				return true;
			case 'disabled':
				return false;
			default:
				return undefined;
		}
	};

	const zipAiAssistantStatus = checkModuleStatus( zipAiAssistant );
	const zipAiDesignCopilotStatus = checkModuleStatus( zipAiDesignCopilot );

	// Update the Zip AI status.
	const updateZipAiStatus = ( moduleName, value ) => {
		setIsUpdating( {
			...isUpdating,
			atLeastOneUpdate: true,
			[ moduleName ]: true,
		} );

		// Toggle the status.
		const updatedValue = value ? 'disabled' : 'enabled';

		// Update the status in the store.
		const updatedZipAiStatus = currentZipAiStatus;
		updatedZipAiStatus[ moduleName ].status = updatedValue;

		dispatch( { type: 'UPDATE_ZIP_AI_MODULES', payload: { ...updatedZipAiStatus } } );

		// Create an object with the security and value properties. Send the value as a string for easier sanitization.
		const data = {
			security: uag_react.zip_ai_module_status_nonce,
			module: moduleName,
			value: updatedValue,
		};

		// Send the data to the server.
		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_zip_ai_module_status',
			data,
		} );

		// Update the notification.
		getApiDataFetch.then( ( response ) => {
			if ( response?.success ) {
				// Update the success notification.
				dispatch( {
					type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
					payload: response.data.messsage || __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
				} );
			} else {
				// Update the failed notification.
				dispatch( {
					type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
					payload: {
						message:
							response.data.messsage || __( 'Failed to save setting', 'ultimate-addons-for-gutenberg' ),
						messageType: 'error',
					},
				} );
				dispatch( { type: 'UPDATE_ZIP_AI_MODULES', payload: { ...currentZipAiStatus } } );
			}
			setIsUpdating( {
				...isUpdating,
				atLeastOneUpdate: false,
				[ moduleName ]: false,
			} );
		} );
	};

	useEffect( () => {
		if ( zipAiAssistantStatus !== undefined && zipAiDesignCopilotStatus !== undefined ) {
			setIsLoading( false );
		}
	}, [ zipAiAssistantStatus, zipAiDesignCopilotStatus ] );

	// Mini-Render: The Info Card.
	const renderInfoCard = ( cardDetails ) => (
		<div className="flex gap-2 items-start p-3">
			<div className="h-full text-brand-primary-600 p-1">{ cardDetails?.icon }</div>
			<div className="flex flex-col h-full">
				<h4 className="text-base font-semibold text-text-primary m-0">{ cardDetails?.title }</h4>
				<div className="text-sm font-normal text-text-secondary">{ cardDetails?.description }</div>
			</div>
		</div>
	);

	// Render: The Details Section.
	const renderDetailsSection = () => (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
			{ renderInfoCard( {
				icon: <WandIcon />,
				title: __( 'Craft Compelling Content', 'ultimate-addons-for-gutenberg' ),
				description: __(
					'With our AI, you can effortlessly create persuasive and engaging copy that resonates with your audience.',
					'ultimate-addons-for-gutenberg'
				),
			} ) }
			{ renderInfoCard( {
				icon: <BlocksIcon />,
				title: __( 'AI-Powered Block Patterns', 'ultimate-addons-for-gutenberg' ),
				description: __(
					"Personalize the block patterns and section templates to tailor them to your website's unique needs.",
					'ultimate-addons-for-gutenberg'
				),
			} ) }
			{ renderInfoCard( {
				icon: <WordPressLogo />,
				title: __( 'WordPress Wizardry', 'ultimate-addons-for-gutenberg' ),
				description: __(
					"Got questions? Our AI has the answers. Whether it's troubleshooting or customizing your site.",
					'ultimate-addons-for-gutenberg'
				),
			} ) }
			{ renderInfoCard( {
				icon: <LayoutIcon />,
				title: __( 'Personalized Templates', 'ultimate-addons-for-gutenberg' ),
				description: __(
					'Say goodbye to generic designs and say hello to our AI-personalized page templates, tailored just for you.',
					'ultimate-addons-for-gutenberg'
				),
			} ) }
			{ renderInfoCard( {
				icon: <CodeBlockIcon />,
				title: __( 'Generate Custom Code', 'ultimate-addons-for-gutenberg' ),
				description: __(
					'No more struggling with complex coding issues. Generate custom code, functions, and CSS with AI.',
					'ultimate-addons-for-gutenberg'
				),
			} ) }
			{ renderInfoCard( {
				icon: <PageIcon />,
				title: __( 'Custom Pages with AI', 'ultimate-addons-for-gutenberg' ),
				description: sprintf(
					/* translators: %s: Percentage Ascii Code */
					__(
						'You can create beautiful, 100%s custom web pages without the need for any design or coding skills.',
						'ultimate-addons-for-gutenberg'
					),
					'%'
				),
			} ) }
		</section>
	);

	// Set the credit details and the team name.
	const creditDetails = uag_react.zip_ai_credit_details;
	const teamName = uag_react?.zip_ai_current_plan?.team_name;

	const connectionBadge = () => {
		if ( uag_react?.zip_ai_is_authorized )
			return (
				<div className="flex items-center gap-3">
					<Badge
						icon={ <CheckCheck size={ 12 } /> }
						label={ __( 'Connected', 'ultimate-addons-for-gutenberg' ) }
						size="sm"
						type="pill"
						variant="green"
					/>

					{ aiSettings() }
				</div>
			);
		else if ( 'disconnected' === uag_react?.zip_ai_status )
			return (
				<div className="flex items-center gap-3">
					<Badge
						icon={ <Unlink size={ 12 } /> }
						label={ __( 'Disconnected', 'ultimate-addons-for-gutenberg' ) }
						size="sm"
						type="pill"
						variant="red"
					/>

					{ aiSettings() }
				</div>
			);
		return (
			<Badge
				label={ __( 'Inactive', 'ultimate-addons-for-gutenberg' ) }
				size="sm"
				type="pill"
				variant="primary"
			/>
		);
	};

	// Function to disconnect the AI features.
	const disconnectAI = () => {
		setShowDisconnectionPopup( true );
	};

	const reconnectAI = () => {
		setShowReconnectionPopup( true );
	};

	const openLink = ( link ) => {
		if ( ! link ) return;
		window.open( link, '_blank' );
	};

	const aiSettings = () => (
		<DropdownMenu placement="bottom-start" className="font-[Figtree]">
			<DropdownMenu.Trigger>
				<div className="flex items-center justify-center h-full w-full">
					<Ellipsis size={ 20 } />
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className="w-60">
				<DropdownMenu.List className="font-[Figtree]">
					{ uag_react?.zip_ai_is_authorized && (
						<>
							<DropdownMenu.Item>
								<div className="w-full h-full flex justify-between font-[Figtree]">
									<div>
										<div className="text-text-secondary text-base font-medium">
											{ uagb_user_data.firstName + ' ' + uagb_user_data.lastName }
										</div>
										<div className="text-text-tertiary text-sm">{ teamName }</div>
									</div>

									<div className="h-full p-[2px]">
										<Badge
											label={
												uag_react.spectra_pro_installed && uag_react.spectra_pro_ver
													? __( 'Pro', 'ultimate-addons-for-gutenberg' )
													: __( 'Free', 'ultimate-addons-for-gutenberg' )
											}
											size="xs"
											variant="neutral"
											closable={ false }
											className={ `m-1 ${
												uag_react.spectra_pro_installed &&
												uag_react.spectra_pro_ver &&
												'bg-gradient-to-b from-[#A78BFA] to-[#6005FF] text-white'
											}` }
										/>
									</div>
								</div>
							</DropdownMenu.Item>

							<hr className="w-60 -translate-x-2 border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
						</>
					) }

					<DropdownMenu.Item onClick={ () => openLink( 'https://app.zipwp.com/org/billing' ) }>
						<div className="flex justify-start items-center gap-3 w-full text-text-primary font-[Figtree]">
							<Layers size={ 16 } />

							<a
								href="https://app.zipwp.com/org/billing"
								target="_blank"
								rel="noreferrer"
								className="text-sm no-underline text-text-primary font-normal uagb-remove-ring"
							>
								{ __( 'Manage Plan', 'ultimate-addons-for-gutenberg' ) }
							</a>
						</div>
					</DropdownMenu.Item>

					<DropdownMenu.Item onClick={ () => openLink( 'https://app.zipwp.com/pricing' ) }>
						<div className="flex justify-start items-center gap-3 w-full text-text-primary font-[Figtree]">
							<ChartNoAxesColumn size={ 16 } />

							<a
								href="https://app.zipwp.com/pricing"
								target="_blank"
								rel="noreferrer"
								className="text-sm no-underline text-text-primary font-normal uagb-remove-ring"
							>
								{ __( 'Plan Usage & Limit', 'ultimate-addons-for-gutenberg' ) }
							</a>
						</div>
					</DropdownMenu.Item>

					{ uag_react.zip_ai_is_authorized && (
						<DropdownMenu.Item onClick={ disconnectAI }>
							<div
								onClick={ disconnectAI }
								className="flex justify-start items-center gap-3 w-full font-normal text-support-error font-[Figtree]"
							>
								<Unlink size={ 16 } />

								<div className="text-sm">
									{ __( 'Disconnect AI', 'ultimate-addons-for-gutenberg' ) }
								</div>
							</div>
						</DropdownMenu.Item>
					) }

					{ ! uag_react.zip_ai_is_authorized && (
						<DropdownMenu.Item onClick={ reconnectAI }>
							<div
								onClick={ reconnectAI }
								className="flex justify-start items-center gap-3 w-full font-normal text-text-primary font-[Figtree]"
							>
								<Unlink size={ 16 } />

								<div className="text-sm">{ __( 'Reconnect AI', 'ultimate-addons-for-gutenberg' ) }</div>
							</div>
						</DropdownMenu.Item>
					) }
				</DropdownMenu.List>
			</DropdownMenu.Content>
		</DropdownMenu>
	);

	const RenderCredits = () => {
		const [ isMobile, setIsMobile ] = useState( window.innerWidth < 768 );

		useEffect( () => {
			const handleResize = () => {
				setIsMobile( window.innerWidth < 768 );
			};

			window.addEventListener( 'resize', handleResize );

			return () => {
				window.removeEventListener( 'resize', handleResize );
			};
		}, [] );

		return uag_react?.zip_ai_is_authorized ? (
			<div className="flex items-start gap-2 text-link-primary">
				<Zap className="size-4" />

				<div className="flex flex-col gap-0 items-start">
					<div className="text-base text-text-primary font-semibold mb-1">
						{ creditDetails?.used.toLocaleString( 'en-US' ) }{ ' ' }
						<span className="text-text-tertiary font-normal">
							/ { creditDetails?.total.toLocaleString( 'en-US' ) }
						</span>
					</div>

					<a
						href="https://app.zipwp.com/credits-pricing?source=spectra"
						target="_blank"
						rel="noreferrer"
						className="no-underline text-link-primary text-sm font-semibold"
					>
						{ __( 'Get More Credits', 'ultimate-addons-for-gutenberg' ) } <ArrowUpRight size={ 12 } />
					</a>
				</div>
			</div>
		) : (
			<Button
				className={ `uagb-remove-ring ${ isMobile && 'rounded-lg' }` }
				icon={
					! buttonLabel.toLowerCase().startsWith( 'reconnect' ) ? (
						<Rocket aria-label="icon" role="img" />
					) : (
						<Link2 aria-label="icon" role="img" />
					)
				}
				iconPosition="left"
				// size={ isMobile ? 'sm' : 'lg' }
				variant="primary"
				onClick={ authorizeZipAI }
			>
				{ ! buttonLabel.toLowerCase().startsWith( 'reconnect' )
					? __( 'Get Started', 'ultimate-addons-for-gutenberg' )
					: __( 'Reconnect', 'ultimate-addons-for-gutenberg' ) }
			</Button>
		);
	};

	return (
		<div className="bg-background-secondary">
			<Container className="md:p-8 sm:p-6 p-[0.7rem]" cols={ 12 } containerType="grid" gap="2xl">
				<Container.Item className="flex flex-col gap-8" colSpan={ { lg: 8, md: 12, sm: 12 } }>
					<div className="rounded-lg bg-white border border-solid border-border-subtle p-4">
						<div className="flex items-start sm:items-center justify-between mb-4 flex-col sm:flex-row sm:gap-0 gap-4">
							<div>
								<div className="flex items-start sm:items-center justify-between sm:justify-start gap-3 mb-3 sm:mb-1">
									<div className="text-xl font-semibold">
										{ __( 'AI Features', 'ultimate-addons-for-gutenberg' ) }
									</div>

									{ connectionBadge() }
								</div>

								<div className="text-text-secondary text-sm">
									{ __(
										'This setting allows you to enabled or disable the AI features on your website.',
										'ultimate-addons-for-gutenberg'
									) }
								</div>
							</div>

							<RenderCredits />
						</div>

						<Container
							align="stretch"
							className="p-2 gap-1.5 grid sm:grid-cols-2 grid-cols-1 bg-field-primary-background rounded-lg"
							containerType="grid"
							gap=""
							justify="start"
						>
							{ isLoading ? (
								<>
									<Skeleton className="w-12 h-2 rounded-md mb-2" />
									<Skeleton className="w-16 h-2 rounded-md mb-2" />
									<Skeleton className="w-12 h-2 rounded-md mb-2" />
								</>
							) : (
								<Container.Item
									alignSelf="auto"
									className="text-wrap rounded-md bg-background-primary p-2"
								>
									<div className="p-3 flex flex-col gap-2 items-center w-full">
										<div className="w-full flex items-center justify-between text-brand-primary-600">
											<Sparkles />

											<Switch
												size="md"
												className="uagb-remove-ring border-none"
												value={ zipAiAssistantStatus }
												onChange={ () =>
													updateZipAiStatus( 'ai_assistant', zipAiAssistantStatus )
												}
											/>
										</div>

										<div>
											<div className="m-0 mb-[2px] font-semibold text-base">
												{ __( 'AI Assistant', 'ultimate-addons-for-gutenberg' ) }
											</div>
											<div className="text-sm">
												{ __(
													'It’s like ChatGPT but for WordPress, designed to revolutionize your WordPress experience.',
													'ultimate-addons-for-gutenberg'
												) }
											</div>
										</div>
									</div>
								</Container.Item>
							) }

							{ isLoading ? (
								<>
									<Skeleton className="w-12 h-2 rounded-md mb-2" />
									<Skeleton className="w-16 h-2 rounded-md mb-2" />
									<Skeleton className="w-12 h-2 rounded-md mb-2" />
								</>
							) : (
								<Container.Item
									alignSelf="auto"
									className="text-wrap rounded-md bg-background-primary p-2"
								>
									<div className="p-3 flex flex-col gap-2 items-center w-full">
										<div className="w-full flex items-center justify-between text-brand-primary-600">
											<WandSparkles />

											<Switch
												size="md"
												className="uagb-remove-ring border-none"
												value={ zipAiDesignCopilotStatus }
												onChange={ () =>
													updateZipAiStatus( 'ai_design_copilot', zipAiDesignCopilotStatus )
												}
											/>
										</div>

										<div>
											<div className="m-0 mb-[2px] font-semibold text-base">
												{ __( 'AI Design Copilot', 'ultimate-addons-for-gutenberg' ) }
											</div>
											<div className="text-sm">
												{ __(
													'Generate personalized content inside Design Library based on your input prompts.',
													'ultimate-addons-for-gutenberg'
												) }
											</div>
										</div>
									</div>
								</Container.Item>
							) }
						</Container>
					</div>

					<div className="rounded-lg bg-white border border-solid border-border-subtle p-5 flex flex-col items-center gap-4">
						<div className="w-full">
							<div className="flex items-center gap-2 mb-4">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 40 40"
									fill="none"
								>
									<g clipPath="url(#clip0_6369_24859)">
										<path
											d="M19.8988 0C16.0098 0 12.208 1.17298 8.97441 3.37061C5.74076 5.56824 3.22044 8.69181 1.73216 12.3464C0.243874 16.0008 -0.145532 20.0222 0.613187 23.9018C1.37191 27.7814 3.24467 31.3451 5.99465 34.1421C8.74462 36.9392 12.2483 38.844 16.0626 39.6157C19.877 40.3874 23.8307 39.9913 27.4237 38.4776C31.0168 36.9639 34.0877 34.4004 36.2484 31.1114C38.409 27.8224 39.5623 23.9556 39.5623 20C39.5601 14.6964 37.4877 9.61059 33.8005 5.86038C30.1134 2.11013 25.1132 0.00226409 19.8988 0ZM27.3073 23.0671C27.3073 23.1183 27.3073 23.1696 27.3073 23.2208V23.3661V23.46C27.2076 24.0403 26.9964 24.5948 26.6857 25.0918L26.5009 25.3567L26.2321 25.6728C26.1404 25.7921 26.0362 25.901 25.9213 25.9974V26.0401L25.8626 26.0829L25.745 26.1768C25.7059 26.2121 25.6637 26.2435 25.619 26.2708L25.493 26.3563L16.3794 32.4989C16.305 32.5498 16.2171 32.5766 16.1274 32.5758H16.035C15.9751 32.5632 15.9183 32.5385 15.8678 32.5033C15.8173 32.4681 15.7742 32.4231 15.741 32.3708C15.741 32.3708 15.531 31.9949 15.5142 31.9693V31.8838V31.8411V31.7898V31.73V31.6617C15.1537 30.7115 15.1237 29.6645 15.4293 28.6946C15.7349 27.7248 16.3578 26.8905 17.1942 26.3306L21.4443 23.4686C21.5107 23.4237 21.5625 23.3599 21.5931 23.2851C21.6238 23.2104 21.632 23.128 21.6168 23.0485C21.6015 22.969 21.5634 22.8959 21.5073 22.8384C21.4512 22.7808 21.3796 22.7415 21.3016 22.7253L16.3122 21.7001H16.1694H16.1274H15.993H15.8502H15.7914H15.7158H15.6738L15.5394 21.6488H15.4974H15.4134L15.2791 21.5805L15.1447 21.5122L15.0186 21.4353L14.8927 21.3584C14.4961 21.1069 14.1417 20.7925 13.8427 20.4272L13.7335 20.2734L13.6075 20.0769C13.2848 19.5896 13.0612 19.0414 12.9501 18.4647C12.839 17.888 12.8426 17.2946 12.9608 16.7193C13.0485 16.324 13.1869 15.9419 13.3723 15.5831C13.4227 15.4891 13.4647 15.4037 13.5151 15.3268L13.5907 15.2072C13.6447 15.1156 13.7035 15.0272 13.7671 14.9424L13.8427 14.8484L13.9351 14.7373L14.0275 14.6348L14.0863 14.575L14.1871 14.4725L14.2711 14.3956L14.3635 14.3187L14.4643 14.2332H14.5063L14.5735 14.1734H14.6155L14.7247 14.0965L23.7878 7.98805C23.8459 7.9488 23.9113 7.92179 23.9798 7.90871C24.0484 7.89562 24.1188 7.89666 24.187 7.91181C24.2552 7.92696 24.3196 7.95586 24.3766 7.99685C24.4336 8.03784 24.4818 8.09002 24.5186 8.15035L24.5942 8.27849L24.653 8.39812C24.653 8.44085 24.695 8.47501 24.7118 8.50918C24.7118 8.50918 24.7118 8.50918 24.7118 8.56047C24.7172 8.58 24.7172 8.60071 24.7118 8.62024L24.7622 8.74842C24.7667 8.77096 24.7667 8.79421 24.7622 8.81675C24.7622 8.81675 24.7622 8.81675 24.7622 8.868C25.096 9.80259 25.1118 10.824 24.8073 11.7689C24.5027 12.7137 23.8953 13.5273 23.0823 14.0794L18.8825 16.9159C18.8162 16.9607 18.7644 17.0246 18.7337 17.0993C18.703 17.1741 18.6948 17.2564 18.7101 17.336C18.7253 17.4154 18.7634 17.4886 18.8195 17.5461C18.8756 17.6036 18.9472 17.6429 19.0253 17.6591L23.9726 18.6758C24.9628 18.8838 25.8523 19.4322 26.4917 20.2288C27.1312 21.0254 27.4814 22.0216 27.4837 23.05C27.3241 22.7766 27.3073 23.05 27.3073 23.05V23.0671Z"
											fill="url(#paint0_linear_6369_24859)"
										/>
									</g>
									<defs>
										<linearGradient
											id="paint0_linear_6369_24859"
											x1="0.235357"
											y1="6.22314e-07"
											x2="39.7742"
											y2="33.581"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#4E01D1" />
											<stop offset="1" stopColor="#6104FF" />
										</linearGradient>
										<clipPath id="clip0_6369_24859">
											<rect width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span className="text-text-secondary text-lg">+</span>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
								>
									<rect width="24.0001" height="24.0001" rx="5" fill="#FF580E" />
									<path
										d="M20.9213 8.58031C17.5329 8.93907 15.399 8.91298 14.7609 8.88035C14.6951 8.88546 14.6735 8.77761 14.724 8.74631C16.5637 7.37142 17.242 6.38783 17.4294 6.0721C17.4657 6.02821 17.4209 5.96323 17.3683 5.96732C16.4922 5.93946 10.9888 5.83258 7.70625 6.36109C4.80226 6.81917 3.07969 9.02009 3.08999 11.8806C3.1003 14.7411 4.87315 17.1089 7.43522 17.7041C13.9336 19.1987 18.3468 14.4753 19.0753 13.6247C19.1247 13.5798 19.0789 13.5012 19.012 13.4927L15.6741 13.4779C15.5951 13.4841 15.5725 13.3626 15.6493 13.3293C19.6222 11.4603 20.7725 9.22162 20.9955 8.68407C21.0176 8.62759 20.9739 8.57622 20.9081 8.58133L20.9213 8.58031Z"
										fill="white"
									/>
								</svg>
							</div>

							<div className="text-text-primary text-2xl font-semibold">
								{ __( 'Build 10x Faster with Spectra AI', 'ultimate-addons-for-gutenberg' ) }
							</div>
						</div>

						<div>{ renderDetailsSection() }</div>
					</div>

					<VideoTutorials />
				</Container.Item>

				<Container.Item className="flex flex-col gap-8" colSpan={ { lg: 4, md: 12, sm: 12 } }>
					<ExtendYourWebsite />

					<QuickAccess />
				</Container.Item>
			</Container>

			<ConfirmationPopup
				{ ...{
					showPopup: showDisconnectionPopup,
					popupContent: {
						title: __( 'Disconnect AI', 'ultimate-addons-for-gutenberg' ),
						description: `${ __(
							'Disconnecting will turn off the AI features. You will need to reconnect to use the features again. Are you sure you want to continue?',
							'ultimate-addons-for-gutenberg'
						) }`,
					},
					popupAccept: {
						label: __( 'Disconnect', 'ultimate-addons-for-gutenberg' ),
						callback: () => {
							localStorage.removeItem( 'zipAiAuthorizationStatus' );
							window.location.assign( uag_react.zip_ai_auth_revoke_url );
						},
					},
					popupCancel: {
						label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
						callback: () => {
							setShowDisconnectionPopup( false );
						},
					},
				} }
			/>

			<ConfirmationPopup
				{ ...{
					showPopup: showReconnectionPopup,
					popupContent: {
						title: __( 'Reconnect AI', 'ultimate-addons-for-gutenberg' ),
						description: `${ __(
							'Reconnecting will turn the AI features back on. Are you sure you want to continue?',
							'ultimate-addons-for-gutenberg'
						) }`,
					},
					popupAccept: {
						label: __( 'Reconnect', 'ultimate-addons-for-gutenberg' ),
						callback: ( e ) => {
							authorizeZipAI( e );
						},
					},
					popupCancel: {
						label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
						callback: () => {
							setShowReconnectionPopup( false );
						},
					},
				} }
			/>
		</div>
	);
};

const ConfirmationPopup = ( props ) => {
	const { showPopup, popupContent, popupAccept, popupCancel } = props;

	const cancelButtonRef = useRef( null );

	if ( ! showPopup ) return null;

	return (
		<div
			className="w-full h-screen fixed top-0 left-0 flex items-end sm:items-center p-4 justify-center bg-black bg-opacity-30"
			onClick={ () => popupCancel.callback() }
		>
			<div
				className="inline-block p-3 rounded-lg bg-background-primary w-120 font-[Figtree]"
				onClick={ ( e ) => e.stopPropagation() }
			>
				<div className="mb-2 p-2">
					<div className="flex w-full justify-between items-center mb-2">
						<div className="text-base font-semibold text-text-primary">{ popupContent.title }</div>

						<X size={ 16 } onClick={ popupCancel.callback } className="cursor-pointer" />
					</div>

					<div className="text-sm text-text-secondary font-normal w-full text-left">
						{ popupContent.description }
					</div>
				</div>

				<div className="p-2">
					<div className="flex justify-end items-center w-full gap-3">
						<Button
							className="uagb-outline-button"
							size="md"
							tag="button"
							type="button"
							variant="outline"
							onClick={ popupCancel.callback }
							ref={ cancelButtonRef }
						>
							{ popupCancel.label }
						</Button>

						<Button
							className={ `${
								popupAccept.label === 'Reconnect'
									? 'bg-button-primary hover:bg-button-primary-hover'
									: 'bg-button-danger hover:bg-button-danger-hover'
							} text-text-on-color uagb-remove-ring ` }
							size="md"
							tag="button"
							type="button"
							variant="primary"
							onClick={ popupAccept.callback }
						>
							{ popupAccept.label }
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AIPage;
