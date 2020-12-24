const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useEffect } = wp.element;

import { __ } from '@wordpress/i18n';
import SingleSites from './all-sites/all-sites';
import SinglePages from './all-pages/all-pages';

function AllSites({ filterPagesBySearchTerm }) {

	return (
		<div className="gutenberg-templates-grid-pages active">
			<div
				id="gutenberg-templates-sites"
				className={`gutenberg-templates-grid ${
					filterPagesBySearchTerm.length
						? 'gutenberg-templates-pages-grid'
						: 'gutenberg-templates-sites-grid'
				}`}
			>
				{filterPagesBySearchTerm.length ? (
					<SinglePages />
				) : (
					<SingleSites />
				)}
			</div>
		</div>
	);
}

export default compose(
	withDispatch((dispatch) => {
		const { setFilterPagesBySearchTerm } = dispatch('gutenberg-templates');
		return {
			setFilterPagesBySearchTerm: setFilterPagesBySearchTerm,
		};
	}),
	withSelect((select) => {
		const { getFilterPagesBySearchTerm } = select('gutenberg-templates');
		return {
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
		};
	})
)(memo(AllSites));
