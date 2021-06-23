import React from 'react';

import './UserInfoBox.scss';

import { __ } from '@wordpress/i18n';
import { NormalButton } from '@Fields';


function UserInfoBox( props ) {

	const onJointheCommunityClick = () => {
		location.href = "https://ultimategutenberg.com/";
	}
	const onKnowledgebaseClick = () => {
		location.href = "https://ultimategutenberg.com/";
	}
	const onGetSupportClick = () => {
		location.href = "https://ultimategutenberg.com/";
	}

	return (
		<div className="uag-metabox uag-user-info">
			<div className="uag-metabox__header">
				<div className="uag-metabox__title">
					<h1>
						{ __( 'Welcome ', 'ultimate-addons-for-gutenberg' ) +
							uag_react.current_user +
							'!' }
					</h1>
				</div>
			</div>
			<div className="uag-metabox__body">
				<p>
					{ __(
						' Thank you for choosing Ultimate Addons for Gutenberg - the most comprehensive library of advanced and creative blocks to build a stunning website and blog faster than ever before!',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<div className="uag-metabox__elements">
					<div className="uag-metabox__element">
						<h3>
							{ __( 'Join the community ', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p>
							{ __(
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<NormalButton
							buttonText = { __( 'Join the community', 'ultimate-addons-for-gutenberg' ) }
							onClick = { onJointheCommunityClick }
							saving = { false }
						/>
					</div>
					<div className="uag-metabox__element">
						<h3>
							{ __( 'Knowledgebase', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p>
							{ __(
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<NormalButton
							buttonText = { __( 'Browse Documentation', 'ultimate-addons-for-gutenberg' ) }
							onClick = { onKnowledgebaseClick }
							saving = { false }
						/>
					</div>
					<div className="uag-metabox__element">
						<h3>
							{ __( 'Get 5-star Support ', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p>
							{ __(
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<NormalButton
							buttonText = { __( 'Get Support', 'ultimate-addons-for-gutenberg' ) }
							onClick = { onGetSupportClick }
							saving = { false }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserInfoBox;
