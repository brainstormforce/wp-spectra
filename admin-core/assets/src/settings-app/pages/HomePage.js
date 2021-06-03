import React from 'react';
import './HomePage.scss';

import StatsMetaBox from '@SettingsApp/components/home-page/StatsMetaBox';
import UserInfoBox from '@SettingsApp/components/home-page/UserInfoBox';

import { __ } from '@wordpress/i18n';

function HomePage() {
	return (
		<div className="wcf-home-page-wrapper">
			<div className="wcf-col--row">
				<div className="wcf-col wcf-col--100">
					<UserInfoBox></UserInfoBox>
				</div>
			</div>
			{ 'active' === uag_react.woocommerce_status && (
				<div className="wcf-col--row">
					<div className="wcf-col wcf-col--100">
						<StatsMetaBox />
					</div>
				</div>
			) }
		</div>
	);
}

export default HomePage;
