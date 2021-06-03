import React from 'react';

import './StatSkeleton.scss';
import { __ } from '@wordpress/i18n';

import Skeleton, {
	SpacerSkeleton,
	TextSkeleton,
	RectSkeleton,
	CircleSkeleton,
} from '@Skeleton';

function StatSkeleton() {
	return (
		<div class="wcf-home-page-wrapper">
			<div className="wcf-col--row">
				<div class="wcf-col wcf-col--100">
					<div className="wcf-metabox wcf-user-info">
						<div className="wcf-metabox__header">
							<div className="wcf-metabox__title">
								<h1>
									<RectSkeleton height="45px" width="40%" />
								</h1>
							</div>
						</div>
						<div class="wcf-metabox__body">
							<p>
								<TextSkeleton width="70%" />
							</p>
							<p>
								<TextSkeleton width="50%" />
							</p>
						</div>
					</div>
				</div>
			</div>

			{ /* <div className={ row_class }>
				<div class="wcf-col wcf-col--100 wcf-display--popup">
					<WelcomeMetaBox></WelcomeMetaBox>
				</div>
			</div> */ }

			<div className="wcf-col--row">
				<div class="wcf-col wcf-col--100">
					<div class="wcf-metabox wcf-stats">
						<div class="wcf-metabox__header">
							<h2> { __( 'Stats Overview', 'ultimate-addons-for-gutenberg' ) }</h2>
							<div class="wcf-stats--action-buttons">
								<TextSkeleton width="50%" />
							</div>
						</div>
						<div class="wcf-metabox__body">
							<form className="wcf-stats__form">
								<div class="wcf-stats--row wcf-col--flex wcf-col--row">
									<div class="wcf-stats-box wcf-col--20">
										<div class="wcf-sb-title">
											<h3>
												{ __(
													'Total Revenue',
													'ultimate-addons-for-gutenberg'
												) }
											</h3>
										</div>
										<div class="wcf-sb-content">
											<span className="wcf-stats-number">
												<RectSkeleton height="45px" />
											</span>
											<TextSkeleton width="50%" />
										</div>
									</div>

									<div class="wcf-stats-box wcf-col--20">
										<div class="wcf-sb-title">
											<h3>
												{ ' ' }
												{ __(
													'Order Bump Revenue',
													'ultimate-addons-for-gutenberg'
												) }{ ' ' }
											</h3>
										</div>
										<div class="wcf-sb-content">
											<span className="wcf-stats-number">
												<RectSkeleton height="45px" />
											</span>
											<TextSkeleton width="50%" />
										</div>
									</div>

									<div class="wcf-stats-box wcf-col--20">
										<div class="wcf-sb-title">
											<h3>
												{ ' ' }
												{ __(
													'Offers Revenue',
													'ultimate-addons-for-gutenberg'
												) }{ ' ' }
											</h3>
										</div>
										<div class="wcf-sb-content">
											<span className="wcf-stats-number">
												<RectSkeleton height="45px" />
											</span>
											<TextSkeleton width="50%" />
										</div>
									</div>

									<div class="wcf-stats-box wcf-col--20">
										<div class="wcf-sb-title">
											<h3>
												{ ' ' }
												{ __(
													'Total Orders',
													'ultimate-addons-for-gutenberg'
												) }{ ' ' }
											</h3>
										</div>
										<div class="wcf-sb-content">
											<span className="wcf-stats-number">
												<RectSkeleton height="45px" />
											</span>
											<TextSkeleton width="50%" />
										</div>
									</div>
									<div class="wcf-stats-box wcf-col--20">
										<div class="wcf-sb-title">
											<h3>
												{ ' ' }
												{ __(
													'Total Visits',
													'ultimate-addons-for-gutenberg'
												) }{ ' ' }
											</h3>
										</div>
										<div class="wcf-sb-content">
											<span className="wcf-stats-number">
												<RectSkeleton height="45px" />
											</span>
											<TextSkeleton width="50%" />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StatSkeleton;
