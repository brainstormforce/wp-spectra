import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const InfoBoxDesc = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, context } = props;
	let { headingDesc } = attributes;

	if( 'not_set' === setAttributes ){
		return <RichText.Content tagName="p" value={ headingDesc } className="uagb-ifb-desc" />
	}

	let allowedFormats = false;
	
	// Check if this has dynamic content.
	if ( '' !== headingDesc && -1 !== headingDesc.indexOf( '<span data-spectra-dc-field="' ) ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, headingDesc, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			headingDesc = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName="p"
			value={ headingDesc }
			placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
			className="uagb-ifb-desc"
			onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
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

export default InfoBoxDesc;
