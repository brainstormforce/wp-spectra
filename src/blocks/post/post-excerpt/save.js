import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'uagb-post__excerpt uagb-full_post',
	} );
	return (
		<div { ...blockProps }>
			{ __(
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'ultimate-addons-for-gutenberg'
			) }
		</div>
	);
}