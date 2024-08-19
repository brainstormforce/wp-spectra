import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import PluginStats from './PluginStats';
import { uagbClassNames } from '@Utils/Helpers';
import { __ } from '@wordpress/i18n';
import useWhatsNewRSS from '@Utils/whats-new-library/useWhatsNewRSS';

const AdminHeader = ( props ) => {
	// Initialize RSS library hook.
	useWhatsNewRSS( {
		rssFeedURL: 'https://wpspectra.com/whats-new/feed/',
		selector: '#spectra-whats-new',
		triggerButton: {
			beforeBtn: '<div class="w-8 sm:w-10 h-8 sm:h-10 flex items-center whitespace-nowrap justify-center cursor-pointer rounded-full border border-slate-200">',
			icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z" stroke="#475569" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
			afterBtn: '</div>'
		},
		flyout: {
			title: __( 'What\'s New?', 'ultimate-addons-for-gutenberg' ),
			formatDate: ( date ) => {
				const dayOfWeek = date.toLocaleDateString( 'en-US', { weekday: 'long' } );
				const month = date.toLocaleDateString( 'en-US', { month: 'long' } );
				const day = date.getDate();
				const year = date.getFullYear();

				// Format the date string
				const formattedDate = `${dayOfWeek} ${month} ${day}, ${year}`;

				return formattedDate;
			}
		}
	} );

	const {
		iconLogo,
		title,
		children,
	} = props;

	return (
		<Disclosure as='nav' className='bg-white shadow'>
			{ 'not-installed' === uag_react.pro_plugin_status && (
				<div className="py-3 px-12 bg-spectra text-white text-center h-10 flex items-center justify-center">
					<p className="no-line-height text-base text-white flex items-center justify-center gap-2 leading-[16px] font-normal">
					{__( 'Ready to go beyond free plan?', 'ultimate-addons-for-gutenberg' )}
						<a className='text-base underline text-white leading-[16px]' style={{ color: 'rgb(255, 254, 255)', textDecoration: 'underline' }} onMouseOver={() => { this.style.textDecoration = 'underline'; }} onFocus={() => { this.style.textDecoration = 'underline'; }} href="https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=banner" target='_blank' rel="noreferrer"> {__( 'Upgrade Now ', 'ultimate-addons-for-gutenberg' )} </a>
					{__( 'and unlock the full power of Spectra!', 'ultimate-addons-for-gutenberg' )}
				</p>
			</div>
			) }
			<div className='max-w-3xl mx-auto px-3 sm:px-6 lg:max-w-full'>
				<div className='relative flex flex-col lg:flex-row justify-between h-28 lg:h-16 py-3 lg:py-0'>
					<div className='lg:flex-1 flex items-start justify-center sm:items-stretch sm:justify-start'>
						{ iconLogo ? (
							<>
								<div className='flex-shrink-0 flex items-center'>
									<img
										className={ uagbClassNames( [
											'h-10',
											title && 'mr-6',
										] ) }
										src={ uag_react.plugin_dir && `${ uag_react.plugin_dir }admin-core/assets/images/uag-logo.svg` }
										alt='Spectra'
									/>
									{ title && (
										<h1 className='h-6 pl-6 m-0 border-l border-l-slate-200 text-xl leading-6 font-semibold text-slate-800'>
											{ title }
										</h1>
									) }
								</div>
							</>
						) : (
							<Link
								to={ {
									pathname: 'admin.php',
									search: `?page=${ uag_react.home_slug }`,
								} }
								className='flex-shrink-0 flex items-center justify-start'
							>
								{
										<svg className='lg:block h-8' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
											<g clipPath="url(#clip0_6369_24859)">
												<path d="M19.8988 0C16.0098 0 12.208 1.17298 8.97441 3.37061C5.74076 5.56824 3.22044 8.69181 1.73216 12.3464C0.243874 16.0008 -0.145532 20.0222 0.613187 23.9018C1.37191 27.7814 3.24467 31.3451 5.99465 34.1421C8.74462 36.9392 12.2483 38.844 16.0626 39.6157C19.877 40.3874 23.8307 39.9913 27.4237 38.4776C31.0168 36.9639 34.0877 34.4004 36.2484 31.1114C38.409 27.8224 39.5623 23.9556 39.5623 20C39.5601 14.6964 37.4877 9.61059 33.8005 5.86038C30.1134 2.11013 25.1132 0.00226409 19.8988 0ZM27.3073 23.0671C27.3073 23.1183 27.3073 23.1696 27.3073 23.2208V23.3661V23.46C27.2076 24.0403 26.9964 24.5948 26.6857 25.0918L26.5009 25.3567L26.2321 25.6728C26.1404 25.7921 26.0362 25.901 25.9213 25.9974V26.0401L25.8626 26.0829L25.745 26.1768C25.7059 26.2121 25.6637 26.2435 25.619 26.2708L25.493 26.3563L16.3794 32.4989C16.305 32.5498 16.2171 32.5766 16.1274 32.5758H16.035C15.9751 32.5632 15.9183 32.5385 15.8678 32.5033C15.8173 32.4681 15.7742 32.4231 15.741 32.3708C15.741 32.3708 15.531 31.9949 15.5142 31.9693V31.8838V31.8411V31.7898V31.73V31.6617C15.1537 30.7115 15.1237 29.6645 15.4293 28.6946C15.7349 27.7248 16.3578 26.8905 17.1942 26.3306L21.4443 23.4686C21.5107 23.4237 21.5625 23.3599 21.5931 23.2851C21.6238 23.2104 21.632 23.128 21.6168 23.0485C21.6015 22.969 21.5634 22.8959 21.5073 22.8384C21.4512 22.7808 21.3796 22.7415 21.3016 22.7253L16.3122 21.7001H16.1694H16.1274H15.993H15.8502H15.7914H15.7158H15.6738L15.5394 21.6488H15.4974H15.4134L15.2791 21.5805L15.1447 21.5122L15.0186 21.4353L14.8927 21.3584C14.4961 21.1069 14.1417 20.7925 13.8427 20.4272L13.7335 20.2734L13.6075 20.0769C13.2848 19.5896 13.0612 19.0414 12.9501 18.4647C12.839 17.888 12.8426 17.2946 12.9608 16.7193C13.0485 16.324 13.1869 15.9419 13.3723 15.5831C13.4227 15.4891 13.4647 15.4037 13.5151 15.3268L13.5907 15.2072C13.6447 15.1156 13.7035 15.0272 13.7671 14.9424L13.8427 14.8484L13.9351 14.7373L14.0275 14.6348L14.0863 14.575L14.1871 14.4725L14.2711 14.3956L14.3635 14.3187L14.4643 14.2332H14.5063L14.5735 14.1734H14.6155L14.7247 14.0965L23.7878 7.98805C23.8459 7.9488 23.9113 7.92179 23.9798 7.90871C24.0484 7.89562 24.1188 7.89666 24.187 7.91181C24.2552 7.92696 24.3196 7.95586 24.3766 7.99685C24.4336 8.03784 24.4818 8.09002 24.5186 8.15035L24.5942 8.27849L24.653 8.39812C24.653 8.44085 24.695 8.47501 24.7118 8.50918C24.7118 8.50918 24.7118 8.50918 24.7118 8.56047C24.7172 8.58 24.7172 8.60071 24.7118 8.62024L24.7622 8.74842C24.7667 8.77096 24.7667 8.79421 24.7622 8.81675C24.7622 8.81675 24.7622 8.81675 24.7622 8.868C25.096 9.80259 25.1118 10.824 24.8073 11.7689C24.5027 12.7137 23.8953 13.5273 23.0823 14.0794L18.8825 16.9159C18.8162 16.9607 18.7644 17.0246 18.7337 17.0993C18.703 17.1741 18.6948 17.2564 18.7101 17.336C18.7253 17.4154 18.7634 17.4886 18.8195 17.5461C18.8756 17.6036 18.9472 17.6429 19.0253 17.6591L23.9726 18.6758C24.9628 18.8838 25.8523 19.4322 26.4917 20.2288C27.1312 21.0254 27.4814 22.0216 27.4837 23.05C27.3241 22.7766 27.3073 23.05 27.3073 23.05V23.0671Z" fill="url(#paint0_linear_6369_24859)" />
											</g>
											<defs>
												<linearGradient id="paint0_linear_6369_24859" x1="0.235357" y1="6.22314e-07" x2="39.7742" y2="33.581" gradientUnits="userSpaceOnUse">
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
						) }
						{ children && (
							<div className='sm:ml-8 sm:flex sm:space-x-8'>
								{ children }
							</div>
						) }
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<PluginStats/>
						<div id="spectra-whats-new"></div>
					</div>
				</div>
			</div>
		</Disclosure>
	);
};

export default AdminHeader;
