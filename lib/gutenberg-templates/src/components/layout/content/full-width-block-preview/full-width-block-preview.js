import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;

import './full-width-block-preview.scss';

const FullWidthBlockPreview = ({ blockPreview }) => {
	let imageUrl =
		blockPreview['featured-image-url'] ||
		`${GutenbergTemplatesVars.uri}dist/placeholder.png`;
	return (
		<div className="gutenberg-templates-full-preview">
			<img src={imageUrl} />
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getFullWidthBlockPreview } = select('gutenberg-templates');
		return {
			blockPreview: getFullWidthBlockPreview(),
		};
	})
)(memo(FullWidthBlockPreview));
