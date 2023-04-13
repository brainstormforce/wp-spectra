import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const Title = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, context } = props;
	let { infoBoxTitle } = attributes;
	let allowedFormats = false;
	
	// Check if this has dynamic content.
	if ( '' !== infoBoxTitle && -1 !== infoBoxTitle.indexOf( '<span data-spectra-dc-field="' ) ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, infoBoxTitle, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			infoBoxTitle = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName={ attributes.headingTag }
			placeholder={ __( 'Write a Title' ) }
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
