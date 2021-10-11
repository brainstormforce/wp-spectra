import React from 'react';
import './UserInfoBox.scss';
import { __ } from '@wordpress/i18n';
import { NormalButton } from '@Fields';

function UserInfoBox() {

	const getStarterClick = () => {
		window.open(
			'https://ultimategutenberg.com',
			'_blank'
		);
	};

	const stars = [ ...Array( 5 ).keys() ].map( ( i ) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			key={ i }
			height="13"
			width="13"
			viewBox="0 0 150 150"
		>
			<defs>
				<mask>
					<rect
						height="150"
						width={ '150' }
						y="0"
						x="0"
						fill="#E3B84A"
					/>
				</mask>
			</defs>
			<path
				fill="#E3B84A"
				strokeWidth="2.5"
				d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
			/>
			<path
				className="star"
				fill="#E3B84A"
				strokeWidth="2.5"
				d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
			/>
		</svg>
	) );
	return (
		<div className="uag-user-info">
			<div className="uag-main-metabox">
				<div className="uag-metabox">
					<h2>{__( 'Powerful Blocks & Beautiful Templates for any kind of website.', 'ultimate-addons-for-gutenberg' )}</h2>
					<iframe width="100%" height="380px" src="https://www.youtube.com/embed/N-MLUplUoZc?showinfo=0&controls=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
					<div className="uag-metabox__buttons">
						<NormalButton
							buttonText={ __(
								'Create New Page',
								'ultimate-addons-for-gutenberg'
							) }
							saving={ false }
							onClick={ getStarterClick }
						/>
						<NormalButton
							buttonText={ __(
								'Read Full Guide',
								'ultimate-addons-for-gutenberg'
							) }
							saving={ false }
							onClick={ getStarterClick }
							classes="uag-button--secondary"
						/>
					</div>
				</div>
				<div className="uag-metabox__elements">
					<div className="uag-metabox__element">
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
						<a href='https://ultimategutenberg.com/docs/' target='_blank' rel="noreferrer">
							{ __(
								'Browse Now',
								'ultimate-addons-for-gutenberg'
							) }
						</a>
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
								'Need some help? Our awesome support team is here to help you with any question you have.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<a href='https://ultimategutenberg.com/support/' target='_blank' rel="noreferrer">
							{ __(
								'Get Support',
								'ultimate-addons-for-gutenberg'
							) }
						</a>
					</div>
					<div className="uag-metabox__element">
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
					<a href='https://www.facebook.com/groups/wpastra/' target='_blank' rel="noreferrer">
						{ __(
							'Join Now',
							'ultimate-addons-for-gutenberg'
						) }
					</a>
				</div>
				</div>
			</div>
			<div className="uag-metabox__wp-themes">
				<div className="uag-metabox__wp-theme-img"></div>
				<div className="uag-metabox__wp-theme-info">
					<h2>{__( 'Looking for a Customizable Wordpress theme?', 'ultimate-addons-for-gutenberg' )}</h2>
					<p>
					{__( 'With 1 million+ installs, Astra is the most popular free WordPress theme. It is a Gutenberg compatible and offers plenty of customization options & features without affecting the speed and performance!',
					'ultimate-addons-for-gutenberg' )}
					</p>
					<div className="uag-metabox__stats">
						<div className="uag-metabox__stat">
							<span>{__( '1,000,000+','ultimate-addons-for-gutenberg' )}</span> <br/>
							<span>{__( 'Websites Powered','ultimate-addons-for-gutenberg' )}</span>
						</div>
						<div className="uag-metabox__stat">
							<span>{__( '5,102+','ultimate-addons-for-gutenberg' )}</span><br/>
							{stars}
						</div>
						<div className="uag-metabox__stat">
							<span>{__( '5000+','ultimate-addons-for-gutenberg' )}</span><br/>
							<span>{__( 'Daily Downloads','ultimate-addons-for-gutenberg' )}</span>
						</div>
					</div>
					<NormalButton
						buttonText={ __(
							'Read More',
							'ultimate-addons-for-gutenberg'
						) }
						saving={ false }
						onClick={ getStarterClick }
						classes="uag-button--secondary"
					/>
				</div>
			</div>
		</div>
	);
}

export default UserInfoBox;
