import React,  { useState }  from 'react';

import './UserInfoBox.scss';

import { __ } from '@wordpress/i18n';
import { NormalButton } from '@Fields';
import apiFetch from '@wordpress/api-fetch';
function UserInfoBox( ) {
	
	const [ savingState, setssavingState ] = useState( false );

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

	let astraThemeButton = '';
	if('' !== uag_react.astra_theme_root){
		astraThemeButton = 	<NormalButton
								buttonText={ __(
									'Activate ASTRA Now!',
									'ultimate-addons-for-gutenberg'
								) }
								saving={ savingState }
								onClick={ activateAstraClick }
							/>
	}
	if(!uag_react.wp_theme.astra){
		astraThemeButton = 	<NormalButton
								buttonText={ __(
									'Install ASTRA Now!',
									'ultimate-addons-for-gutenberg'
								) }
								onClick={ installAstraClick }
							/>
	}
	const activateAstraClick = () => {
		const formData = new window.FormData();

		setssavingState( true );

		formData.append( 'action', 'uag_theme_activate' );
		formData.append( 'security', uag_react.uag_theme_activate_nonce );
		formData.append( 'value', 'astra' );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setssavingState( false );
			} 
		} );
	}		
	const installAstraClick = () => {

	}
	const learnMoreAstraClick = () => {
		window.open(
			'https://wpastra.com/',
			'_blank' 
		);
	}
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
						'Thank you for choosing Ultimate Addons for Gutenberg (UAG)! Start building stunning websites faster than ever before with the most comprehensive library of advanced and creative blocks.',
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
								'Browse Documentation',
								'ultimate-addons-for-gutenberg'
							) }
							onClick={ onKnowledgebaseClick }
							saving={ false }
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
								'Ask Us!',
								'ultimate-addons-for-gutenberg'
							) }
							onClick={ onGetSupportClick }
							saving={ false }
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
								'Get Expert-built Readymade Website Templates for Free ',
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
					<NormalButton
								buttonText={ __(
									'Activate ASTRA Now!',
									'ultimate-addons-for-gutenberg'
								) }
								saving={ savingState }
								onClick={ activateAstraClick }
							/>
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
