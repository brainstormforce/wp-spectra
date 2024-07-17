import { __ } from '@wordpress/i18n';
export default function save() {
	return (
		<>
			<span className="uagb-post__taxonomy uagb-post__text">
				<span className="dashicons-tag dashicons"></span>
				{ __( 'Category', 'ultimate-addons-for-gutenberg' ) }
			</span>
		</>
	);
}
