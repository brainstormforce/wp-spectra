import React from 'react';

import {
	SpacerSkeleton,
	TextSkeleton
} from '@Skeleton';

import './SettingsPageSkeleton.scss';

function FlowRowSkeleton() {
	return (
		<>
			<div className="uag-settings-page-heading">
				<TextSkeleton fontSize="35px" width="225px" />
			</div>
			<div className="uag-settings-nav__contents">
				<div className="uag-settings-nav__content">
					<TextSkeleton fontSize="35px" width="225px" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="65%" />
					<SpacerSkeleton />
				</div>
				<div className="uag-settings-nav__content">
					<TextSkeleton fontSize="35px" width="225px" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="65%" />
					<SpacerSkeleton />
				</div>
			</div>
			<div className="uag-settings-page-heading">
				<TextSkeleton fontSize="35px" width="225px" />
			</div>
			<div className="uag-settings-nav__contents">
				<div className="uag-settings-nav__content">
					<TextSkeleton fontSize="35px" width="225px" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="65%" />
					<SpacerSkeleton />
				</div>
			</div>
		</>
	);
}

export default FlowRowSkeleton;
