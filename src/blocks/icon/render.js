/**
 * Block Icon : Render.
 */
import { memo } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	const { attributes, setAttributes, deviceType } = props;
	const { icon, block_id } = attributes;

	const iconSvg = icon ? icon : 'circle-check';
	const iconHtml = renderSVG( iconSvg, setAttributes );

	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } uagb-icon-wrapper uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

	return (
		<div { ...blockProps }>
			<span className="uagb-svg-wrapper">{ iconHtml }</span>
		</div>
	);
};
export default memo( Render );
