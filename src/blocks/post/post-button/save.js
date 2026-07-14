import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {
		className: 'uagb-post__cta wp-block-button',
	} );
	return (
		<div { ...blockProps }>
			<a // eslint-disable-line jsx-a11y/anchor-is-valid
				className="uagb-text-link wp-block-button__link"
			>
				Read More
			</a>
		</div>
	);
}