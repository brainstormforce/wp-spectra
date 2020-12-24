import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;

const CategoriesFilter = ({
	filterBlocksByCategory,
	setFilterBlocksByCategory,
}) => {
	return (
		<div className="blocks-category">
			<select
				onChange={(event) => {
					setFilterBlocksByCategory(event.target.value);
				}}
			>
				<option value="">{__('All')}</option>
				<option value="825"> {__('About')} </option>
				<option value="832"> {__('Call To Action')} </option>
				<option value="1091"> {__('Clients')} </option>
				<option value="1416"> {__('Contact')} </option>
				<option value="1001"> {__('FAQ')} </option>
				<option value="919"> {__('Features')} </option>
				<option value="1427"> {__('Footer')} </option>
				<option value="1440"> {__('Header')} </option>
				<option value="1094"> {__('Heading')} </option>
				<option value="831"> {__('Hero')} </option>
				<option value="1425"> {__('Portfolio')} </option>
				<option value="952"> {__('Services')} </option>
				<option value="1424"> {__('Single Quote')} </option>
				<option value="1096"> {__('Statistics')} </option>
				<option value="829"> {__('Team')} </option>
				<option value="830"> {__('Testimonial')} </option>
			</select>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getFilterBlocksByCategory } = select('gutenberg-templates');
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
		};
	}),
	withDispatch((dispatch) => {
		const { setFilterBlocksByCategory } = dispatch('gutenberg-templates');
		return {
			setFilterBlocksByCategory: setFilterBlocksByCategory,
		};
	})
)(memo(CategoriesFilter));
