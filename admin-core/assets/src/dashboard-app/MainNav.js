import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import { ArrowUpRight } from 'lucide-react';

const Navigation = () => {
	const menus = [
		{
			name: __( 'Dashboard', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: '',
		},
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
	if ( uag_react.pro_plugin_status === 'Install' ) {
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
	const activePage = query.get( 'page' ) ? query.get( 'page' ) : uag_react.home_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

	return (
		<>
			{ menus.map( ( menu, key ) => (
				<Link
					index={ key }
					key={ `?page=${ menu.slug }&path=${ menu.path }` }
					to={ {
						pathname: 'admin.php',
						search: `?page=${ menu.slug }${ '' !== menu.path ? '&path=' + menu.path : '' }`,
					} }
					className={ `content-center no-underline relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none ${
						activePage === menu.slug && activePath === menu.path ? 'text-text-primary' : 'text-[#4B5563]'
					} text-sm font-medium cursor-pointer` }
				>
					{ menu.name }
					{ activePage === menu.slug && activePath === menu.path && (
						<span className="absolute md:bottom-0 -bottom-6 left-0 w-full h-px bg-brand-primary-600 lg:block hidden"></span>
					) }
				</Link>
			) ) }
			{ uag_react.pro_plugin_status === 'Install' && (
				<a
					className="content-center no-underline h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-primary-600"
					href={uag_admin_react.spectra_website?.topBar}
					target="_blank"
					rel="noreferrer"
				>
					<span>Unlock Pro Features</span>
					<ArrowUpRight className="size-5" strokeWidth="1.5" />
				</a>
			) }
		</>
	);
};

export default Navigation;
