import { __ } from '@wordpress/i18n';
export default function save() {
	return (
		<>
			<span className="uagb-post__taxonomy">
				<span className="dashicons-tag dashicons"></span>
				{ __( 'Category' ) }
			</span>
		</>
	);
}
