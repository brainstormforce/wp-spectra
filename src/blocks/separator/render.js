import { memo } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import renderCustomSVG from './separator-svg';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { uagbClassNames } from '@Utils/Helpers';
import './style.scss';
import './attributes';
import { __ } from '@wordpress/i18n';
const Render = ( props ) => {

	const {
		attributes: { block_id, elementType, separatorText, separatorTextTag, separatorStyle, separatorIcon },
		className,
		deviceType,
		onReplace,
		mergeBlocks,
		setAttributes,
	} = props;

	const customSVG = renderCustomSVG( separatorStyle );
	const CustomTag = separatorTextTag || 'div';

	const hasElement = `${ elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : '' }`;

	const blockProps = useBlockProps( {
		className: uagbClassNames( [
			className,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ block_id }`,
			'wp-block-uagb-separator',
			hasElement
		] ),
	} );

	return (
		<div { ...blockProps }>
			<div className='uagb-separator-spacing-wrapper'>
				<div className="wp-block-uagb-separator__inner" style={ { '--my-background-image': `${ customSVG }` } }>
					{ elementType !== 'none' && (
						<div className="wp-block-uagb-separator-element">
							{ elementType === 'icon' ? (
								renderSVG( separatorIcon )
							) : (
								<RichText
									tagName={ CustomTag }
									value={ separatorText }
									className="uagb-html-tag"
									onChange={ ( value ) => {
										setAttributes( { separatorText: value } );
									} }
									placeholder={ __( 'Divider', 'ultimate-addons-for-gutenberg' ) }
									onMerge={ mergeBlocks }
									onReplace={ onReplace }
									onRemove={ () => onReplace( [] ) }
								/>
							) }
						</div>
					) }
				</div>
			</div>
		</div>
	);
};
export default memo( Render );
