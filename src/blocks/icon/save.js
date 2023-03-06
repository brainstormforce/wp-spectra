/**
 * Block Icon : Save.
 */
import renderSVG from '@Controls/renderIcon';
import { useBlockProps } from '@wordpress/block-editor';
import { getProtocol, prependHTTP } from '@wordpress/url';

export default function save( props ){

	const { attributes } = props;
	const {
		icon,
		block_id,
		link,
		target,
		disableLink,
	} = attributes;

	let iconHtml = '';

	const targetVal = target ? '_blank' : '_self';
	let linkUrl = disableLink ? link : '#';

	if( '#' !== linkUrl ) {
		linkUrl = getProtocol( linkUrl ) ? linkUrl : prependHTTP( linkUrl )
	}

	if( disableLink && linkUrl ) {
		iconHtml = (
			<a // eslint-disable-line jsx-a11y/anchor-has-content
				rel="noopener noreferrer"
				href={ linkUrl || '#' }
				target = { targetVal }
			>
				{ renderSVG( icon ? icon : 'circle-check' ) }
			</a> )
	} else {
		iconHtml = ( renderSVG( icon ? icon : 'circle-check' ) )
	}

	const blockProps = useBlockProps.save( {
		className: `uagb-block-${ block_id } uagb-icon-wrapper`
	} );

	return (
		<div { ...blockProps }>
			<span className='uagb-svg-wrapper' >{ iconHtml }</span>
		</div>
	);
};
