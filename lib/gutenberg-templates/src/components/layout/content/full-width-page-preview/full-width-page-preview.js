import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

import './full-width-page-preview.scss';

const FullWidthPagePreview = ( { pagePreview } ) => {
	const imageUrl = pagePreview[ 'featured-image-url' ] || '';

	return (
		<div className="ast-block-templates-full-preview">
			<img src={ imageUrl } alt="Preview" />
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFullWidthPagePreview } = select( 'ast-block-templates' );
		return {
			pagePreview: getFullWidthPagePreview(),
		};
	} )
)( memo( FullWidthPagePreview ) );
