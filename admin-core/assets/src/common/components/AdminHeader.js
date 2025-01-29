import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { __, sprintf } from '@wordpress/i18n';
import useWhatsNewRSS from '@Utils/whats-new-library/useWhatsNewRSS';
import { Container, Topbar, Badge, DropdownMenu } from '@bsf/force-ui';
import { X, CircleHelp, SquareArrowOutUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const AdminHeader = ( props ) => {
	// Initialize RSS library hook.
	useWhatsNewRSS( {
		rssFeedURL: 'https://wpspectra.com/whats-new/feed/',
		selector: '#spectra-whats-new',
		triggerButton: {
			beforeBtn:
				'<div class="w-8 sm:w-10 h-8 sm:h-10 flex items-center whitespace-nowrap justify-center cursor-pointer rounded-full border border-slate-200">',
			icon:
				'<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z" stroke="#475569" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>',
			afterBtn: '</div>',
		},
		flyout: {
			title: __( "What's New?", 'ultimate-addons-for-gutenberg' ),
			formatDate: ( date ) => {
				const dayOfWeek = date.toLocaleDateString( 'en-US', { weekday: 'long' } );
				const month = date.toLocaleDateString( 'en-US', { month: 'long' } );
				const day = date.getDate();
				const year = date.getFullYear();

				// Format the date string
				const formattedDate = `${ dayOfWeek } ${ month } ${ day }, ${ year }`;

				return formattedDate;
			},
		},
	} );

	const { children } = props;

	const [ clicked, setClicked ] = useState( false );
	const [ isDropOpen1, setIsDropOpen1 ] = useState( false );
	const [ isDropOpen2, setIsDropOpen2 ] = useState( false );
	const [ showHeader, setShowHeader ] = useState( true );

	const creditDetails = uag_react.zip_ai_credit_details;

	useEffect( () => {
		// Function to handle the Esc key press
		const handleEscKeyPress = ( event ) => {
			if ( event.key === 'Escape' && clicked ) {
				setClicked( false );
			}
		};

		// Add event listener on component mount
		document.addEventListener( 'keydown', handleEscKeyPress );

		// Cleanup event listener on component unmount
		return () => {
			document.removeEventListener( 'keydown', handleEscKeyPress );
		};
	}, [ clicked ] );

	const license = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18.0001 5.33337L16.6667 6.66671M16.6667 6.66671L18.6667 8.66671L16.3334 11L14.3334 9.00004M16.6667 6.66671L14.3334 9.00004M11.5934 11.74C11.9376 12.0797 12.2113 12.4841 12.3986 12.9299C12.5859 13.3757 12.6831 13.8542 12.6847 14.3378C12.6864 14.8214 12.5923 15.3005 12.408 15.7476C12.2237 16.1947 11.9528 16.6009 11.6108 16.9428C11.2689 17.2847 10.8627 17.5557 10.4156 17.74C9.96852 17.9243 9.48939 18.0183 9.00582 18.0167C8.52224 18.0151 8.04376 17.9178 7.59792 17.7305C7.15209 17.5432 6.74771 17.2696 6.40806 16.9254C5.74015 16.2338 5.37057 15.3076 5.37892 14.3462C5.38728 13.3848 5.7729 12.4652 6.45273 11.7854C7.13256 11.1055 8.0522 10.7199 9.01359 10.7116C9.97498 10.7032 10.9012 11.0728 11.5927 11.7407L11.5934 11.74ZM11.5934 11.74L14.3334 9.00004"
				stroke="#111827"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const ai = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_10419_2311)">
				<path
					d="M10.6247 14.3333C10.5651 14.1026 10.4449 13.892 10.2764 13.7236C10.1079 13.5551 9.89738 13.4348 9.66667 13.3753L5.57667 12.3206C5.50689 12.3008 5.44547 12.2588 5.40174 12.2009C5.35801 12.1431 5.33435 12.0725 5.33435 12C5.33435 11.9274 5.35801 11.8569 5.40174 11.799C5.44547 11.7411 5.50689 11.6991 5.57667 11.6793L9.66667 10.624C9.8973 10.5645 10.1078 10.4443 10.2763 10.276C10.4447 10.1076 10.565 9.89722 10.6247 9.66663L11.6793 5.57663C11.6989 5.50657 11.7409 5.44486 11.7989 5.40089C11.8568 5.35693 11.9276 5.33313 12.0003 5.33313C12.0731 5.33313 12.1438 5.35693 12.2018 5.40089C12.2597 5.44486 12.3017 5.50657 12.3213 5.57663L13.3753 9.66663C13.4349 9.89734 13.5551 10.1079 13.7236 10.2764C13.8921 10.4449 14.1026 10.5651 14.3333 10.6246L18.4233 11.6786C18.4937 11.698 18.5557 11.74 18.5999 11.798C18.6441 11.8561 18.668 11.927 18.668 12C18.668 12.0729 18.6441 12.1439 18.5999 12.2019C18.5557 12.26 18.4937 12.3019 18.4233 12.3213L14.3333 13.3753C14.1026 13.4348 13.8921 13.5551 13.7236 13.7236C13.5551 13.892 13.4349 14.1026 13.3753 14.3333L12.3207 18.4233C12.3011 18.4934 12.2591 18.5551 12.2011 18.599C12.1432 18.643 12.0724 18.6668 11.9997 18.6668C11.9269 18.6668 11.8562 18.643 11.7982 18.599C11.7403 18.5551 11.6983 18.4934 11.6787 18.4233L10.6247 14.3333Z"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.3334 6V8.66667"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.6667 7.33337H16"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.66663 15.3334V16.6667"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.33333 16H6"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_10419_2311">
					<rect width="16" height="16" fill="white" transform="translate(4 4)" />
				</clipPath>
			</defs>
		</svg>
	);

	const plan = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_10419_2330)">
				<path
					d="M12 5.33337L5.33337 8.66671L12 12L18.6667 8.66671L12 5.33337Z"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.33337 15.3334L12 18.6667L18.6667 15.3334"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.33337 12L12 15.3333L18.6667 12"
					stroke="#111827"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_10419_2330">
					<rect width="16" height="16" fill="white" transform="translate(4 4)" />
				</clipPath>
			</defs>
		</svg>
	);

	const formattedCredits = () => {
		const num = creditDetails?.used;
		if ( num === 0 ) {
			return '0';
		} else if ( num >= 1000 ) {
			return `${ ( num / 1000 ).toFixed( 1 ).replace( /\.0$/, '' ) }k`;
		}
		return num.toLocaleString( 'en-US' );
	};

	const openLink = ( link ) => {
		if ( ! link ) return;
		window.open( link, '_blank' );
	};

	return (
		<Disclosure as="nav" className="bg-white shadow border border-solid border-border-subtle">
			{ 'Install' === uag_react.pro_plugin_status && showHeader && (
				<Container align="center" justify="center" className="py-2 relative bg-brand-background-hover-100">
					<div className="space-x-1 text-text-primary text-xs">
						<span className="font-semibold">
							{ __( "Unlock Spectra's Full Potential!", 'ultimate-addons-for-gutenberg' ) }
						</span>
						<span className="font-normal">
							{ __(
								'Get exclusive features and unbeatable performance.',
								'ultimate-addons-for-gutenberg'
							) }
						</span>
						<a
							className='"content-center text-inherit font-normal underline"'
							onMouseOver={ () => {
								this.style.textDecoration = 'underline';
							} }
							onFocus={ () => {
								this.style.textDecoration = 'underline';
							} }
							href="https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=banner"
							target="_self"
							rel="noreferrer"
						>
							{ __( 'Upgrade now', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
					<button
						onClick={ () => setShowHeader( false ) }
						className="inline-flex items-center justify-center absolute right-2 p-0 bg-transparent shadow-none border-0 outline-none focus:outline-none cursor-pointer"
					>
						<X className="size-4" />
					</button>
				</Container>
			) }
			{ /* Navigation Topbar */ }
			<Topbar gap={ 0 } className="p-0 shadow-sm w-full">
				<Topbar.Left className="py-4 lg:px-4 md:px-2 sm:px-1 px-0">
					<Topbar.Item>
						<Link
							to={ {
								pathname: 'admin.php',
								search: `?page=${ uag_react.home_slug }`,
							} }
							className="flex-shrink-0 flex items-center justify-start"
						>
							{
								<svg
									className="h-8"
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
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
							}
						</Link>
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle align="left" className="h-full">
					<Topbar.Item>
						{ children && (
							<div className="flex items-center [&>svg]:block h-full lg:gap-4 md:gap-2 gap-1 flex-wrap">
								{ children }
							</div>
						) }
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right gap="md" className="lg:px-4 md:px-2 px-1">
					<Topbar.Item>
						<DropdownMenu placement="bottom-end" isOpen={ isDropOpen1 } onOpenChange={ setIsDropOpen1 }>
							<DropdownMenu.Trigger>
								<Badge
									label={
										uag_react.spectra_pro_installed && uag_react.spectra_pro_ver
											? __( 'Pro', 'ultimate-addons-for-gutenberg' )
											: __( 'Free', 'ultimate-addons-for-gutenberg' )
									}
									size="xs"
									variant="neutral"
									closable={ false }
									className={ `m-1 font-[Figtree] ${
										uag_react.spectra_pro_installed &&
										uag_react.spectra_pro_ver &&
										'bg-gradient-to-b from-[#A78BFA] to-[#6005FF] text-white'
									}` }
								/>
								<span className="sr-only">{ __( 'Open Menu', 'ultimate-addons-for-gutenberg' ) }</span>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content className="w-60">
								<DropdownMenu.List>
									<DropdownMenu.Item>
										<div className="text-text-tertiary font-[Figtree]">
											{ __( 'Version', 'ultimate-addons-for-gutenberg' ) }
										</div>
									</DropdownMenu.Item>
									<DropdownMenu.Item>
										<div className="flex justify-between w-full font-[Figtree]">
											{ `${ uag_react.plugin_ver }` }
											<Badge
												label={ __( 'Core', 'ultimate-addons-for-gutenberg' ) }
												size="xs"
												variant="neutral"
												className="font-[Figtree]"
											/>
										</div>
									</DropdownMenu.Item>
									{ uag_react.spectra_pro_status && (
										<DropdownMenu.Item>
											<div className="flex justify-between w-full font-[Figtree]">
												{ `${ uag_react.spectra_pro_ver }` }
												<Badge
													label={ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
													size="xs"
													variant="inverse"
													className="font-[Figtree]"
												/>
											</div>
										</DropdownMenu.Item>
									) }
								</DropdownMenu.List>
							</DropdownMenu.Content>
						</DropdownMenu>
					</Topbar.Item>

					<Topbar.Item>
						<a
							href="https://wpspectra.com/docs/"
							target="_blank"
							rel="noreferrer"
							className="text-slate-600 m-0 p-0 flex items-center justify-center"
						>
							<CircleHelp strokeWidth="1.5" className="size-4 m-1" />
						</a>
					</Topbar.Item>

					<Topbar.Item className="relative after:content-[''] after:inline-block after:size-1.5 after:bg-background-important after:rounded-full after:absolute after:-top-0.5 after:left-5">
						<div id="spectra-whats-new" className="size-4 m-1"></div>
					</Topbar.Item>

					<Topbar.Item className="relative after:content-[''] after:inline-block after:size-1.5 after:bg-background-important after:rounded-full after:absolute after:-top-0.5 after:left-5">
						<DropdownMenu placement="bottom-end" isOpen={ isDropOpen2 } onOpenChange={ setIsDropOpen2 }>
							<DropdownMenu.Trigger>
								{ /* <Avatar size="xs"> */ }
								{ uag_react.spectra_pro_installed &&
								uag_react.spectra_pro_ver &&
								typeof ( uagb_user_data.firstName[ 0 ] + uagb_user_data.lastName[ 0 ] ) === 'string' ? (
									<div className="bg-[#f3f0ff] text-black p-1 rounded-full font-[Figtree]">
										{ uagb_user_data.firstName[ 0 ] + uagb_user_data.lastName[ 0 ] }
									</div>
								) : (
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
											fill="#F3F0FF"
										/>
										<path
											d="M16.6667 18V16.6667C16.6667 15.9594 16.3858 15.2811 15.8857 14.781C15.3856 14.281 14.7073 14 14 14H10C9.2928 14 8.61452 14.281 8.11442 14.781C7.61433 15.2811 7.33337 15.9594 7.33337 16.6667V18"
											stroke="#111827"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 11.3333C13.4728 11.3333 14.6667 10.1394 14.6667 8.66667C14.6667 7.19391 13.4728 6 12 6C10.5273 6 9.33337 7.19391 9.33337 8.66667C9.33337 10.1394 10.5273 11.3333 12 11.3333Z"
											stroke="#111827"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) }
								{ /* </Avatar> */ }
								<span className="sr-only">{ __( 'Open Menu', 'ultimate-addons-for-gutenberg' ) }</span>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content className="w-60">
								<DropdownMenu.List>
									<DropdownMenu.Item>
										<div className="flex w-full justify-between items-center font-[Figtree]">
											<div className="flex gap-1 font-[Figtree]">
												{ license() }
												{ __( 'License Status', 'ultimate-addons-for-gutenberg' ) }
											</div>

											<Badge
												label={ sprintf(
													/* translators: credits in k format */
													__( ' %s', 'ultimate-addons-for-gutenberg' ),
													uag_react.license_status ? 'Active' : 'Inactive'
												) }
												size="xxs"
												variant={ uag_react.license_status ? 'green' : 'yellow' }
											/>
										</div>
									</DropdownMenu.Item>

									<DropdownMenu.Item>
										<div className="flex w-full justify-between items-center font-[Figtree]">
											<div className="flex gap-1">
												{ ai() }

												<div>{ __( 'AI Credits', 'ultimate-addons-for-gutenberg' ) }</div>
											</div>

											<Badge
												label={ sprintf(
													/* translators: credits in k format */
													__( ' %s', 'ultimate-addons-for-gutenberg' ),
													formattedCredits()
												) }
												size="xxs"
												variant="green"
											/>
										</div>
									</DropdownMenu.Item>
									<DropdownMenu.Item
										onClick={ () => openLink( 'https://app.zipwp.com/org/billing' ) }
									>
										<div className="flex w-full justify-between items-center font-[Figtree]">
											<div className="flex gap-1">
												{ plan() }

												{ __( 'Manage Plan', 'ultimate-addons-for-gutenberg' ) }
											</div>

											<SquareArrowOutUpRight size={ 16 } className="text-text-tertiary" />
										</div>
									</DropdownMenu.Item>
								</DropdownMenu.List>
							</DropdownMenu.Content>
						</DropdownMenu>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
		</Disclosure>
	);
};

export default AdminHeader;
