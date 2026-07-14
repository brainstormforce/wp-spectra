import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'uagb-post__image',
	} );
	return (
		<div { ...blockProps }>
			<img src={ `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/post-grid.png` } alt="" />
		</div>
	);
}