import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

import './NavMenu.scss';

function NavMenu() {
	let menus = [
		{
			name: __('Home', 'cartflow'),
			slug: uag_react.home_slug,
			path: '',
		},
		{
			name: __('Tools', 'ultimate-addons-for-gutenberg'),
			slug: uag_react.home_slug,
			path: 'tools',
		},
		{
			name: __('Settings', 'ultimate-addons-for-gutenberg'),
			slug: uag_react.home_slug,
			path: 'settings',
		},
	];

	let query = new URLSearchParams(useLocation()?.search);
	let activePage = query.get('page')
		? query.get('page')
		: uag_react.home_slug;
	let activePath = query.get('path') ? query.get('path') : '';

	return (
		<div className="wcf-global-nav-menu">
			<div class="wcf-title">
				<Link
					key={`?page=${uag_react.home_slug}&path=''`}
					to={{
						pathname: 'options-general.php',
						search: `?page=${uag_react.home_slug}`,
					}}
				>
					<span class="screen-reader-text">
						{__('UAG', 'ultimate-addons-for-gutenberg')}
					</span>
					<img
						class="wcf-logo"
						src={uag_react.logo_url}
						alt=""
					/>
				</Link>
			</div>
			<div className="wcf-global-nav__items">
				{menus.map((menu, i) => (
					<Link
						key={`?page=${menu.slug}&path=${menu.path}`}
						to={{
							pathname: 'options-general.php',
							search: `?page=${menu.slug}${
								'' !== menu.path ? '&path=' + menu.path : ''
							}`,
						}}
						className={`wcf-global-nav-menu__tab ${
							activePage === menu.slug && activePath === menu.path
								? ' wcf-global-nav-menu__tab--active'
								: ''
						}`}
					>
						{menu.name}
					</Link>
				))}
			</div>
			<div class="wcf-top-links">
				<Link
					to="//ultimategutenberg.com/docs/"
					target="_blank"
					className="wcf-top-links__item"
					title="Knowledge Base"
				>
					<span class="dashicons dashicons-book"></span>
				</Link>

				<Link
					to="//youtube.com/"
					target="_blank"
					className="wcf-top-links__item"
					title="Community"
				>
					<span class="dashicons dashicons-youtube"></span>
				</Link>

				<Link
					to="//ultimategutenberg.com/support/"
					target="_blank"
					className="wcf-top-links__item"
					title="Support"
				>
					<span class="dashicons dashicons-sos"></span>
				</Link>
			</div>
		</div>
	);
}

export default NavMenu;
