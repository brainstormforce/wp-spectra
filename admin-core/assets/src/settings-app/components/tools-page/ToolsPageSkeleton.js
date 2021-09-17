import React from 'react';

import { SpacerSkeleton, TextSkeleton } from '@Skeleton';

import './ToolsPageSkeleton.scss';

function FlowRowSkeleton() {
	return (
		<>
			<div className="uag-tools-page-heading">
				<TextSkeleton fontSize="35px" width="225px" />
			</div>
			<div className="uag-tools-nav__contents">
				<div className="uag-tools-nav__content">
					<TextSkeleton fontSize="35px" width="225px" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="80%" />
					<TextSkeleton width="65%" />
					<SpacerSkeleton />
				</div>
				<div className="uag-tools-nav__content">
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
