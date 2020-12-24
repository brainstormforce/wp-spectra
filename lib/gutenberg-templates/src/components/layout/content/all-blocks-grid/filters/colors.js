import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;

import { info } from '../../../../../utils/logger';

const ColorsFilter = ({ filterBlocksByColor, setFilterBlocksByColor }) => {
	return (
		<div className="blocks-color">
			<select
				onChange={(event) => {
					info(event.target.value);
					setFilterBlocksByColor(event.target.value);
				}}
			>
				<option value="">{__('Filter by Color')}</option>
				<option value="light">{__('Light')}</option>
				<option value="dark">{__('Dark')}</option>
			</select>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getFilterBlocksByColor } = select('gutenberg-templates');
		return {
			filterBlocksByColor: getFilterBlocksByColor(),
		};
	}),
	withDispatch((dispatch) => {
		const { setFilterBlocksByColor } = dispatch('gutenberg-templates');
		return {
			setFilterBlocksByColor: setFilterBlocksByColor,
		};
	})
)(memo(ColorsFilter));

// // Filter blocks by:
// filterBlocksByCategory: '',
// filterBlocksByColor: '',
// filterBlocksBySearchTerm: '',
