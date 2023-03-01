/**
 * Block Icon : Render.
 */
import { memo } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import { useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { attributes, setAttributes, deviceType } = props;
	const {
		icon,
		block_id,
	} = attributes;

	const iconSvg = icon ? icon : 'circle-check';
	const iconHtml = (
			( renderSVG( iconSvg, setAttributes ) )
		)

	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id }`
	} );

	return (
		<div { ...blockProps }>
			<div className={`uagb-icon-wrapper uagb-editor-preview-mode-${ deviceType.toLowerCase() }` }>
				<span className='uagb-svg-wrapper' >{ iconHtml }</span>
			</div>
		</div>
	);
};
export default memo( Render );
