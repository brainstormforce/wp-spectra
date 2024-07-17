import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const Prefix = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, context, hasPrefixTitleDC } = props;
	let { prefixTitle } = attributes;

	if( 'not_set' === setAttributes ){
		return <RichText.Content tagName={attributes.prefixHeadingTag} value={ prefixTitle } className="uagb-ifb-title-prefix" />
	}

	let allowedFormats = false;
	
	// Check if this has dynamic content.
	if ( hasPrefixTitleDC ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, prefixTitle, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			prefixTitle = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName={ attributes.prefixHeadingTag }
			value={ prefixTitle }
			placeholder={ __( 'Write a Prefix', 'ultimate-addons-for-gutenberg' ) }
			className="uagb-ifb-title-prefix"
			multiline={ false }
			onChange={ ( value ) => {
				setAttributes( { prefixTitle: value } );
			} }
			onMerge={ mergeBlocks }
			onSplit={
				insertBlocksAfter
					? ( before, after, ...blocks ) => {
							setAttributes( { content: before } );
							insertBlocksAfter( [
								...blocks,
								createBlock( 'core/paragraph', {
									content: after,
								} ),
							] );
						}
					: undefined
			}
			onRemove={ () => onReplace( [] ) }
			allowedFormats={ allowedFormats }
		/>
	);
};

export default Prefix;
