import { __ } from '@wordpress/i18n';
const { memo, useState, useEffect } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

import SingleSitePage from './single-site-page';

import './all-single-site-pages.scss';

function AllSignleSitePages({ sitePreview, pagePreview }) {
	
	let items = Object.values(sitePreview.pages) || [];

	let imageURL = pagePreview['thumbnail-image-url'];

	return (
		<div className="gutenberg-templates-single-site-preview">
			<div className="gutenberg-templates-single-page-preview">
				<h2 className="gutenberg-templates-site-title">
					{sitePreview.title}
				</h2>
				<div className="screenshot">
					<img src={imageURL} />
				</div>
			</div>

			<div className="gutenberg-templates-grid-preview">
				<h2 className="gutenberg-templates-pages-title">
					Page Templates
				</h2>

				<div className="gutenberg-templates-grid">
					{items.length ? (
						items.map((item) => (
							<SingleSitePage key={item.ID} item={item} />
						))
					) : (
						<div className="no-search-result">
							<h3>{__('No Result Found')} </h3>
							<p>
								{__(
									'The search result not found. Try another search.'
								)}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default compose(
	withSelect((select) => {
		const { getPagePreview, getSitePreview } = select(
			'gutenberg-templates'
		);
		return {
			sitePreview: getSitePreview(),
			pagePreview: getPagePreview(),
		};
	})
)(memo(AllSignleSitePages));
