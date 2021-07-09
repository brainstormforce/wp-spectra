import React from 'react';
import './HomePage.scss';

import UserInfoBox from '@SettingsApp/components/home-page/UserInfoBox';

import { __ } from '@wordpress/i18n';

function HomePage() {
	return (
		<div className="uag-home-page-wrapper">
			<UserInfoBox></UserInfoBox>
		</div>
	);
}

export default HomePage;
