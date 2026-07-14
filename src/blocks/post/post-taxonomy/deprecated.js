import { __ } from '@wordpress/i18n';

const deprecated = [
	{
		save() {
			return (
				<>
					<span className="uagb-post__taxonomy uagb-post__text">
						<span className="dashicons-tag dashicons"></span>
						{ __( 'Category', 'ultimate-addons-for-gutenberg' ) }
					</span>
				</>
			);
		},
	},
];

export default deprecated;