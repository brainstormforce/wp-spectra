import React,  { useState }  from 'react';
import './UserInfoBox.scss';
import { __ } from '@wordpress/i18n';
import { NormalButton } from '@Fields';
import apiFetch from '@wordpress/api-fetch';

function UserInfoBox( ) {
	
	const [ installingThemeText, setsinstallingThemeText ] = useState( 'Install ASTRA Now!' );
	const [ activateThemeText, setsactivateThemeText ] = useState( 'Activate ASTRA Now!' );
	const [ installingTheme, setsinstallingTheme ] = useState( false );
	const [ activateTheme, setsactivateTheme ] = useState( false );

	const onJointheCommunityClick = () => {
		window.open(
			'https://ultimategutenberg.com/',
			'_blank' 
		);
	};
	const onKnowledgebaseClick = () => {
		window.open(
			'https://ultimategutenberg.com/docs/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
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
		setsactivateThemeText('Activating Astra');
		setTimeout( function() {
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
					setsactivateThemeText('Astra Activated!');
					window.location.reload();
				} 
			} );
		}, 1200 )
	};		
	const installAstraClick = ( ) => {
			setsinstallingTheme( true );
			setsinstallingThemeText( 'Installing Astra' );

			if ( wp.updates.shouldRequestFilesystemCredentials && ! wp.updates.ajaxLocked ) {
				wp.updates.requestFilesystemCredentials( event )

				$document.on( "credential-modal-cancel", function() {
					wp.a11y.speak( wp.updates.l10n.updateCancel, "polite" )
				} )
			}
			
			wp.updates.installTheme( {
				slug:   'astra'
			}).then(function(e){
				setsinstallingTheme( false );
				setsinstallingThemeText( 'Installed Astra!' );
				window.location.reload();
			})
	};
	const learnMoreAstraClick = () => {
		window.open(
			'https://wpastra.com/',
			'_blank' 
		);
	};
	const astraThemeButton = () => {
		if(!uag_react.theme_file){
			return <NormalButton
					buttonText={ __(
						installingThemeText,
						'ultimate-addons-for-gutenberg'
					) }
					saving={ installingTheme }
					onClick={  installAstraClick }
					/>
		}else if('Astra' !== uag_react.current_theme && uag_react.theme_file ){
			return <NormalButton
						buttonText={ __(
							activateThemeText,
							'ultimate-addons-for-gutenberg'
						) }
						saving={ activateTheme }
						onClick={ activateAstraClick }
						data-slug="astra" data-init="astra/astra.php"
					/>
		}
		return null;
	};

	return (
		<div className="uag-metabox uag-user-info">
			<div className="uag-metabox__header">
				<div className="uag-metabox__title">
					<h1>
						{ __( 'Welcome ', 'ultimate-addons-for-gutenberg' ) +
							uag_react.current_user }
					</h1>
				</div>
				<p>
					{ __(
						'Thank you for choosing Ultimate Addons for Gutenberg! Start building stunning websites faster than ever before with the most comprehensive library of advanced and creative blocks.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
			</div>
			<div className="uag-metabox__body">
				<div className="uag-metabox__elements">
					<div className="uag-metabox__element">
						<h3>
							{ __(
								'Join the community ',
								'ultimate-addons-for-gutenberg'
							) }
						</h3>
						<p>
							{ __(
								'Got a question about the plugin, want to share your awesome project or just say hi? Join our wonderful community. Get the latest news, updates, tutorials and tips and participate in discussions. We/\'d love it if you joined the conversation! ',
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
					<div className="uag-metabox__element">
						<h3>
							{ __(
								'Knowledge Base',
								'ultimate-addons-for-gutenberg'
							) }
						</h3>
						<p>
							{ __(
								'Learn everything you need to know about the UAG plugin! Our comprehensive documentation includes information about installation, blocks, core filters, functions, and more.',
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
					<div className="uag-metabox__element">
						<h3>
							{ __(
								'Get 5-star Support ',
								'ultimate-addons-for-gutenberg'
							) }
						</h3>
						<p>
							{ __(
								'Need some help? Our awesome support team is here to help you with any question you have about Ultimate Addons for Gutenberg. Just send us your query to get fast answers from plugin experts.',
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
				</div>
				<div className="uag-starter-site__elements">
					<div className="uag-starter-tmp__img">
						<img
							src={
								uag_react.plugin_dir +
								'admin-core/assets/images/astra-starter-sites.png'
							}
						/>
					</div>
					<div className="uag-starter-tmp__details">
						<h2>
							{ __(
								'Get Readymade Website Templates for Free ',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<p>
							{ __(
								'Want to speed up the website design process? Get access to professionally designed pre-built Starter Templates, completely free! Our extensive library of resources provides full website templates, single page templates and block patterns. These templates are easy to customize and are optimized for conversion. Just import, tweak and deliver projects faster than ever before!',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<NormalButton
							buttonText={ __(
								'Import a Starter Template',
								'ultimate-addons-for-gutenberg'
							) }
							saving={ false }
						/>
					</div>
				</div>
				<div className="uag-theme__metabox">
					<div className="uag-theme__content">
						<h2>
							{ __(
								'Pair UAG With the Best Gutenberg WordPress Theme - Astra!',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<p>
							{ __(
								'With over 1 million+ active installs, Astra is the fastest and most popular free WordPress theme. It is a fully Gutenberg compatible theme and empowers your website with lots of customizations, features and functions without affecting the speed and performance! With Astra you can build blogs, business websites, ecommerce stores or offer online courses with ease.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
					</div>
					<div className="uag-theme__cta">
						{astraThemeButton()}
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
			</div>
		</div>
	);
}

export default UserInfoBox;
