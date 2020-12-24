const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { useEffect, useState, memo, Fragment } = wp.element;

import { __ } from '@wordpress/i18n';
import SingleSite from './single-site';

const AllSites = ({ allPages, allSites, currentScreen }) => {
	let items = Object.values(allSites);

	return (
		<Fragment>
			{items.length ? (
				items.map((item) => <SingleSite key={item.ID} item={item} />)
			) : (
				<div className="no-search-result">
					<h3>{__('No Sites Result Found')} </h3>
					<p>
						{__('The search result not found. Try another search.')}
					</p>
				</div>
			)}
		</Fragment>
	);
};

export default compose(
	withSelect((select) => {
		const { getAllPages, getCurrentScreen, getAllSites } = select(
			'gutenberg-templates'
		);
		return {
			currentScreen: getCurrentScreen(),
			allSites: getAllSites(),
			allPages: getAllPages(),
		};
	})
)(memo(AllSites));
