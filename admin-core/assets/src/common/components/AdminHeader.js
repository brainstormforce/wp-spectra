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
								<img
									className='lg:block h-8'
									src={ uag_react.plugin_dir && `${ uag_react.plugin_dir }admin-core/assets/images/dashboard-uag-logo.svg` }
									alt='Spectra'
								/>
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
