import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<span className="uagb-post__taxonomy uagb-post__text">
				<span className="dashicons-tag dashicons"></span>
				{ __( 'Category', 'ultimate-addons-for-gutenberg' ) }
			</span>
		</div>
	);
}