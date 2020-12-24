const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, Fragment } = wp.element;

import SinglePage from './single-page';

import NoSearchResult from '../../../../reusable/no-search-result/no-search-result';
import BackToTemplates from '../../../../reusable/back-to-templates/back-to-templates';

const AllPages = ({ setPagePreview, setFilterPagesBySearchTerm, allPages }) => {
	let items = Object.values(allPages);
	const onClickBackToTemplates = (event) => {
		setPagePreview({});
		setFilterPagesBySearchTerm('');
	};

	return (
		<Fragment>
			{items.length ? (
				items.map((item) => {
					return <SinglePage key={item.ID} item={item} />;
				})
			) : (
				<NoSearchResult>
					<BackToTemplates afterClick={onClickBackToTemplates} />
				</NoSearchResult>
			)}
		</Fragment>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setPagePreview, setFilterPagesBySearchTerm } = dispatch(
			'gutenberg-templates'
		);
		return {
			setPagePreview: setPagePreview,
			setFilterPagesBySearchTerm: setFilterPagesBySearchTerm,
		};
	}),
	withSelect((select) => {
		const { getAllPages, getFilterPagesBySearchTerm } = select(
			'gutenberg-templates'
		);
		return {
			allPages: getAllPages(),
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
		};
	})
)(memo(AllPages));
