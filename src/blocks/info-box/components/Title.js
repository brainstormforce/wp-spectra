import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const Title = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, context, hasTitleDC } = props;
	let { infoBoxTitle } = attributes;

	if( 'not_set' === setAttributes ){
		return <RichText.Content
			tagName={attributes.headingTag}
			value={ infoBoxTitle }
			className="uagb-ifb-title"
		/>
	}

	let allowedFormats = false;
	
	// Check if this has dynamic content.
	if ( hasTitleDC ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, infoBoxTitle, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			infoBoxTitle = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName={ attributes.headingTag }
			placeholder={ __( 'Write a Title', 'ultimate-addons-for-gutenberg' ) }
			value={ infoBoxTitle }
			className="uagb-ifb-title"
			onChange={ ( value ) => setAttributes( { infoBoxTitle: value } ) }
			multiline={ false }
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

export default Title;
