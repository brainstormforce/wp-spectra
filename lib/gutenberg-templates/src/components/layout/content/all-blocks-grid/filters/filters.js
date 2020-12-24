const { memo } = wp.element;

import CategoriesFilter from './categories';


const Filters = () => {
	return (
		<div className="filter-wrap gutenberg-templates-block-grid-filters">
			<div className="filters">
				<CategoriesFilter />
			</div>
		</div>
	);
};

export default memo(Filters);
