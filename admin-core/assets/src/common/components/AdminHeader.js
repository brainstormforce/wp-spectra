import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import ChangeLogPopup from './ChangeLogPopup';
import PluginStats from './PluginStats';
import { uagbClassNames } from '@Utils/Helpers';

const AdminHeader = ( props ) => {
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
						<ChangeLogPopup/>
					</div>
				</div>
			</div>
		</Disclosure>
	);
};

export default AdminHeader;
