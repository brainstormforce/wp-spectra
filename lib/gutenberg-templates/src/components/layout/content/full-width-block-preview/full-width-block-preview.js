import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

import './full-width-block-preview.scss';

const FullWidthBlockPreview = ( { blockPreview } ) => {
	const imageUrl =
		blockPreview[ 'featured-image-url' ] ||
		`${ ast_block_template_vars.uri }dist/placeholder.png`;
	return (
		<div className="ast-block-templates-full-preview">
			<img src={ imageUrl } alt="Preview" />
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFullWidthBlockPreview } = select( 'ast-block-templates' );
		return {
			blockPreview: getFullWidthBlockPreview(),
		};
	} )
)( memo( FullWidthBlockPreview ) );
