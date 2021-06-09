import React from 'react';
import './HomePage.scss';

import UserInfoBox from '@SettingsApp/components/home-page/UserInfoBox';

import { __ } from '@wordpress/i18n';

function HomePage() {
	return (
		<div className="uag-home-page-wrapper">
			<div className="uag-col--row">
				<div className="uag-col uag-col--100">
					<UserInfoBox></UserInfoBox>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
