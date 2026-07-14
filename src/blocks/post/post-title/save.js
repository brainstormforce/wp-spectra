import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'uagb-post__text uagb-post__title',
	} );
	return (
		<h3 { ...blockProps }>
			<a href="/" target="_blank" rel="noopener noreferrer" alt="">
				{ ' ' }
				{ __( 'WordPress Post Title', 'ultimate-addons-for-gutenberg' ) }
			</a>
		</h3>
	);
}