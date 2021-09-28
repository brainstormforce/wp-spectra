import React, { useState } from 'react';
import './UserInfoBox.scss';
import { __ } from '@wordpress/i18n';
import { NormalButton } from '@Fields';
import apiFetch from '@wordpress/api-fetch';

function UserInfoBox() {
	const [ installingThemeText, setsinstallingThemeText ] = useState(
		'Install ASTRA Now!'
	);
	const [ activateThemeText, setsactivateThemeText ] = useState(
		'Activate ASTRA Now!'
	);
	const [ installingTheme, setsinstallingTheme ] = useState( false 
		);
	const [ activateTheme, setsactivateTheme ] = useState( false );
	const [ installingPluginText, setsinstallingPluginText ] = useState(
		'Import a Starter Template',
	);
	const [ activatePluginText, setsactivatePluginText ] = useState(
		'Activate Starter Template',
	);
	const [ installingPlugin, setsinstallingPlugin ] = useState( false );
	const [ activatePlugin, setsactivatePlugin ] = useState( false );

	const onJointheCommunityClick = () => {
		window.open( 'https://www.facebook.com/groups/wpastra/', '_blank' );
	};
	const onStarterTemplateLearnMore = () => {
		window.open( 'https://startertemplates.com/', '_blank' );
	};
	const onKnowledgebaseClick = () => {
		window.open(
			'https://ultimategutenberg.com/docs/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			'_blank'
		);
	};
	const getStarterClick = () => {
		window.open(
			'https://ultimategutenberg.com',
			'_blank'
		);
	};
	const onGetSupportClick = () => {
		window.open(
			'https://ultimategutenberg.com/support/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			'_blank'
		);
	};

	const activateAstraClick = () => {
		setsactivateTheme( true );
		setsactivateThemeText( 'Activating Astra' );
		setTimeout( function () {
			const formData = new window.FormData();
			formData.append( 'action', 'uag_theme_activate' );
			formData.append( 'security', uag_react.theme_activate_nonce );
			formData.append( 'slug', 'astra' );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				if ( data.success ) {
					setsactivateTheme( false );
					setsactivateThemeText( 'Astra Activated!' );
					window.location.reload();
				}
			} );
		}, 1200 );
	};
	const installAstraClick = () => {
		setsinstallingTheme( true );
		setsinstallingThemeText( 'Installing Astra' );

		if (
			wp.updates.shouldRequestFilesystemCredentials &&
			! wp.updates.ajaxLocked
		) {
			wp.updates.requestFilesystemCredentials();

			document.on( 'credential-modal-cancel', function () {
				wp.a11y.speak( wp.updates.l10n.updateCancel, 'polite' );
			} );
		}

		wp.updates
			.installTheme( {
				slug: 'astra',
			} )
			.then( function () {
				setsinstallingTheme( false );
				setsinstallingThemeText( 'Installed Astra!' );
				window.location.reload();
			} );
	};
	const learnMoreAstraClick = () => {
		window.open( 'https://wpastra.com/', '_blank' );
	};
	
	const astraThemeButton = () => {
		if ( ! uag_react.theme_file && uag_react.is_main_site ) {
			return (
				<NormalButton
					buttonText={ installingThemeText }
					saving={ installingTheme }
					onClick={ installAstraClick }
				/>
			);
		} else if (
			'Astra' !== uag_react.current_theme &&
			uag_react.theme_file
		) {
			return (
				<NormalButton
					buttonText={ activateThemeText}
					saving={ activateTheme }
					onClick={ activateAstraClick }
					data-slug="astra"
					data-init="astra/astra.php"
				/>
			);
		}
		return null;
	};

	const starterTemplateBtn = () => {
		if( uag_react.starter_template_activate ){
			return <NormalButton
						buttonText={ __(
							'Learn More',
							'ultimate-addons-for-gutenberg'
						) }
						saving={ false }
						classes="uag-button--secondary"
						onClick = { onStarterTemplateLearnMore }
					/>
		}
		if( !uag_react.starter_template_activate && uag_react.starter_template_path ){
			return <NormalButton
						buttonText={activatePluginText }
						saving={ activatePlugin }
						onClick={ onstarterTemapletActivate }
					/>
		}else if( uag_react.starter_template_activate ){
			return null;
		}else if( !uag_react.starter_template_path && uag_react.is_main_site ){
			return <NormalButton
						buttonText={ installingPluginText }
						saving={ installingPlugin }
						onClick={ onstarterTemapletinstall }
					/>
		}
	};

	const onstarterTemapletActivate = () => {
		setsactivatePlugin( true );
		setsactivatePluginText( 'Activating Starter Template' );
		setTimeout( function () {
			const formData = new window.FormData();
			formData.append( 'action', 'uag_starter_template_activate' );
			formData.append( 'security', uag_react.starter_template_activate_nonce );
			formData.append( 'slug', 'astra-sites' );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				if ( data.success ) {
					setsactivatePlugin( false );
					setsactivatePluginText( 'Plugin Activated!' );
					window.location.reload();
				}
			} );
		}, 1200 );
	};
	const onstarterTemapletinstall = () => {
		setsinstallingPlugin( true );
		setsinstallingPluginText( 'Installing Starter Template' );

		if (
			wp.updates.shouldRequestFilesystemCredentials &&
			! wp.updates.ajaxLocked
		) {
			wp.updates.requestFilesystemCredentials();

			document.on( 'credential-modal-cancel', function () {
				wp.a11y.speak( wp.updates.l10n.updateCancel, 'polite' );
			} );
		}

		wp.updates
			.installPlugin( {
				slug: 'astra-sites',
			} )
			.then( function () {
				setsinstallingPlugin( false );
				setsinstallingPluginText( 'Installed Starter Template!' );
				window.location.reload();
			} );
	};
	return (
		<div className="uag-user-info">
			<div className="uag-metabox uag-metabox__header">
				<h1>
					{ __( 'Welcome ', 'ultimate-addons-for-gutenberg' ) +
						uag_react.current_user }
				</h1>
				<p>
					{ __(
						'Thank you for choosing Ultimate Addons for Gutenberg! Power up the Gutenberg editor with advanced and powerful blocks that help you build websites in no time! UAG is the most popular addon for Gutenberg available on WordPress.org.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<NormalButton
					buttonText={ __(
						'Learn More',
						'ultimate-addons-for-gutenberg'
					) }
					saving={ false }
					onClick={ getStarterClick }
					classes="uag-button--secondary"
				/>
			</div>
			<div className="uag-metabox uag-metabox__element">
				<h3>
					{ __(
						'Knowledge Base',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<p>
					{ __(
						'Learn everything you need to know about the UAG plugin with our comprehensive documentation.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<NormalButton
					buttonText={ __(
						'Browse Now',
						'ultimate-addons-for-gutenberg'
					) }
					onClick={ onKnowledgebaseClick }
					saving={ false }
					classes="uag-button--secondary"
				/>
			</div>
			<div className="uag-metabox uag-theme__metabox">
				<h3>
					{ __(
						'Pair UAG With the Best Gutenberg WordPress Theme - Astra!',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<p>
					{ __(
						'With over 1+ million active installs, Astra is the fastest and most popular free WordPress theme. Pair UAG with the Astra theme to extend your website building experience with Gutenberg. With Astra, you can build blogs, business websites, eCommerce stores, offer online courses or build any type of website with ease.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<div className="uag-theme__cta">
					{ astraThemeButton() }
					<NormalButton
						buttonText={ __(
							'Learn More About Astra',
							'ultimate-addons-for-gutenberg'
						) }
						saving={ false }
						classes="uag-button--secondary"
						onClick={ learnMoreAstraClick }
					/>
				</div>
			</div>
			<div className="uag-metabox uag-metabox__element">
				<h3>
					{ __(
						'Get 5-star Support ',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<p>
					{ __(
						'Need some help? Our awesome support team is here to help you with any question you have.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<NormalButton
					buttonText={ __(
						'Get Support',
						'ultimate-addons-for-gutenberg'
					) }
					onClick={ onGetSupportClick }
					saving={ false }
					classes="uag-button--secondary"
				/>
			</div>
			<div className="uag-metabox uag-starter-site__elements">
				<div className="uag-starter-tmp__img">
				</div>
				<div className="uag-starter-tmp__details">
					<h3>
						{ __(
							'Get Readymade Website Templates for Free ',
							'ultimate-addons-for-gutenberg'
						) }
					</h3>
					<p>
						{ __(
							'Want to speed up the website design process? Get access to professionally designed pre-built Starter Templates, completely free! Our extensive library of resources provides full website templates, single page templates and block patterns. ',
							'ultimate-addons-for-gutenberg'
						) }
					</p>
					{ starterTemplateBtn() }
				</div>
			</div>
			<div className="uag-metabox uag-metabox__element">
				<h3>
					{ __(
						'Join the Community ',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<p>
					{ __(
						'Got a question about the plugin, want to share your awesome project or just say hi? Join our wonderful community!',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<NormalButton
					buttonText={ __(
						'Join Now',
						'ultimate-addons-for-gutenberg'
					) }
					onClick={ onJointheCommunityClick }
					saving={ false }
					classes="uag-button--secondary"
				/>
			</div>	
		</div>
	);
}

export default UserInfoBox;
