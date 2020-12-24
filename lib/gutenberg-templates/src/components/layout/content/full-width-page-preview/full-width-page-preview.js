import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;

import './full-width-page-preview.scss';

const FullWidthPagePreview = ({ pagePreview }) => {
	let imageUrl = pagePreview['featured-image-url'] || '';

	return (
		<div className="gutenberg-templates-full-preview">
			<img src={imageUrl} />
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getFullWidthPagePreview } = select('gutenberg-templates');
		return {
			pagePreview: getFullWidthPagePreview(),
		};
	})
)(memo(FullWidthPagePreview));
