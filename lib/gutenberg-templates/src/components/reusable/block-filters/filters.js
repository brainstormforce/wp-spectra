const { memo } = wp.element;

import CategoriesFilter from './categories';
import ColorsFilter from './colors';

const Filters = () => {
	return (
		<div className="filter-wrap ast-block-templates-block-grid-filters">
			<div className="filters">
				<ColorsFilter />
				<CategoriesFilter />
			</div>
		</div>
	);
};

export default memo( Filters );
