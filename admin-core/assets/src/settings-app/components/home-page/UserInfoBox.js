import React from 'react';

import './UserInfoBox.scss';

import { __ } from '@wordpress/i18n';

function UserInfoBox( props ) {
	return (
		<div className="uag-metabox uag-user-info">
			<div className="uag-metabox__header">
				<div className="uag-metabox__title">
					<h1>
						{ __( 'Hello ', 'ultimate-addons-for-gutenberg' ) +
							uag_react.current_user +
							',' }
					</h1>
				</div>
			</div>
			<div class="uag-metabox__body">
				<p>
					<b>{ __(
						'Welcome to the Ultimate Addons for Gutenberg!',
						'ultimate-addons-for-gutenberg'
					) }</b>
					{ __(
						' Thank you for choosing Ultimate Addons for Gutenberg - the most comprehensive library of advanced and creative blocks to build a stunning website and blog faster than ever before!',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<p>
					<a href="https://www.ultimategutenberg.com/getting-started-with-gutenberg-blocks/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard" target="_blank" rel="noopener">
						{ __( 'How to use the Ultimate Addons for Gutenberg Blocks »', 'ultimate-addons-for-gutenberg' ) }
					</a>
				</p>
				<p>
					{ __(
						'Ready-to-use Full Demo Websites - Get professionally designed 20+ pre-built FREE starter sites built using Gutenberg, Ultimate Addons for Gutenberg and the Astra theme. These can be imported in just a few clicks. Tweak them easily and build awesome websites in minutes!',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<p>
					<a href="https://www.ultimategutenberg.com/ready-websites-for-gutenberg/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard" target="_blank" rel="noopener">
						{ __( 'Know More »', 'ultimate-addons-for-gutenberg' ) }
					</a>
				</p>

			</div>
		</div>
	);
}

export default UserInfoBox;
