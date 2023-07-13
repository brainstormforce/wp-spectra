import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

const Navigation = () => {

	const menus = [
		{
			name: __( 'Welcome', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: '',
		},
		{
			name: __( 'Blocks / Extensions', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'blocks',
		},
		{
			name: __( 'Settings', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'settings',
		},
	];

	const query = new URLSearchParams( useLocation()?.search );
	const activePage = query.get( 'page' )
		? query.get( 'page' )
		: uag_react.home_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

	return (
		<>
			{ menus.map( ( menu , key ) => (
				<Link
					index = {key}
					key={ `?page=${ menu.slug }&path=${ menu.path }` }
					to={ {
						pathname: 'admin.php',
						search: `?page=${ menu.slug }${
							'' !== menu.path ? '&path=' + menu.path : ''
						}`,
					} }
					className={ `${
						activePage === menu.slug && activePath === menu.path
							? 'border-spectra text-spectra active:text-spectra focus:text-spectra focus-visible:text-spectra-hover hover:text-spectra-hover inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
							: 'border-transparent text-slate-500 active:text-spectra focus-visible:border-slate-300 focus-visible:text-slate-800 hover:border-slate-300 hover:text-slate-800 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
					}` }
				>
					{ menu.name }
				</Link>
			) ) }
		</>
	)
};

export default Navigation;