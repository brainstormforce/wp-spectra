import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

import './NavMenu.scss';

function NavMenu() {
	const menus = [
		{
			name: __( 'Welcome', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: '',
		},
		{
			name: __( 'Blocks', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'blocks',
		},
		{
			name: __( 'Tools', 'ultimate-addons-for-gutenberg' ),
			slug: uag_react.home_slug,
			path: 'tools',
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
		<div className="uag-global-nav-menu">
			<div className="uag-global-nav__title">
				<Link
					key={ `?page=${ uag_react.home_slug }&path=''` }
					to={ {
						pathname: 'options-general.php',
						search: `?page=${ uag_react.home_slug }`,
					} }
				>
					<span className="screen-reader-text">
						{ __( 'UAG', 'ultimate-addons-for-gutenberg' ) }
					</span>
					<img
						className="uag-logo"
						src={ uag_react.logo_url }
						alt=""
					/>
					<span className="uagb-plugin-version">
						{ uag_react.plugin_ver }
					</span>
				</Link>
			</div>
			<div className="uag-global-nav__items">
				{ menus.map( ( menu ) => (
					<Link
						key={ `?page=${ menu.slug }&path=${ menu.path }` }
						to={ {
							pathname: 'options-general.php',
							search: `?page=${ menu.slug }${
								'' !== menu.path ? '&path=' + menu.path : ''
							}`,
						} }
						className={ `uag-global-nav-menu__tab ${
							activePage === menu.slug && activePath === menu.path
								? ' uag-global-nav-menu__tab--active'
								: ''
						}` }
					>
						{ menu.name }
					</Link>
				) ) }
			</div>
		</div>
	);
}

export default NavMenu;
