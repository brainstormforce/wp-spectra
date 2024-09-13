import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

const Navigation = () => {

	const menus = [
		{
			name: __( 'Blocks', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'blocks',
		},
		{
			name: __( 'Settings', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'settings',
		},
	];

	// Conditionally add the Free vs Pro menu item
	if ( 'not-installed' === uag_react.pro_plugin_status || 'inactive' === uag_react.pro_plugin_status ) {
		menus.push( {
			name: __( 'Free vs Pro', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'free-vs-pro',
		} );
	}

	// Only add the AI Features tab before settings if Zip AI data was successfully localized.
	if ( uag_react?.zip_ai_admin_nonce ) {
		menus.splice( 2, 0, {
			name: __( 'AI Features', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'ai-features',
		} );
	}

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