import { memo } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import renderCustomSVG from './separator-svg';
import { useBlockProps } from '@wordpress/block-editor';
import { uagbClassNames } from '@Utils/Helpers';
import './style.scss';

const Render = ( props ) => {

	const {
		attributes: { block_id, elementType, separatorText, separatorTextTag, separatorStyle, separatorIcon },
		className,
		deviceType,
	} = props;

	const customSVG = renderCustomSVG( separatorStyle );
	const CustomTag = `${ separatorTextTag }`;

	const hasElement = `${ elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : '' }`;

	const blockProps = useBlockProps( {
		className: uagbClassNames( [
			className,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ block_id }`,
			hasElement
		] ),
	} );

	return (
		<div { ...blockProps }>
			<div
				className={ uagbClassNames( [
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ block_id }`,
					'wp-block-uagb-separator',
					`${ elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : '' }`
				] ) }
			>
				<div className="wp-block-uagb-separator__inner" style={ { '--my-background-image': `${ customSVG }` } }>
					{ elementType !== 'none' && (
						<div className="wp-block-uagb-separator-element">
							{ elementType === 'icon' ? (
								renderSVG( separatorIcon )
							) : (
								<CustomTag className="uagb-html-tag">{ separatorText }</CustomTag>
							) }
						</div>
					) }
				</div>
			</div>
		</div>
	);
};
export default memo( Render );
