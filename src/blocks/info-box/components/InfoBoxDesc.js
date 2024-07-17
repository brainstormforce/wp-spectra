import { RichText, useInnerBlocksProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const InfoBoxDesc = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace, context, hasDescriptionDC } = props;
	let { headingDesc, enableMultilineParagraph } = attributes;


	const innerBlockOptions = {
        allowedBlocks: ['core/paragraph'],
        template: [
            [
                'core/paragraph',
                {
                    content: headingDesc,
                },
            ],
        ],
        templateLock: false,
        renderAppender: false
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: 'uagb-ifb-desc',
        },
        innerBlockOptions
    );

	if( 'not_set' === setAttributes && ! enableMultilineParagraph ){
		return <RichText.Content tagName="p" value={ headingDesc } className="uagb-ifb-desc" />
	}

	let allowedFormats = false;
	
	// Check if this has dynamic content.
	if ( hasDescriptionDC ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, headingDesc, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			headingDesc = renderedMarkup;
		}
	}
	
	const originalContent = (
		<>
			<RichText
				tagName="p"
				value={ headingDesc }
				placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
				className="uagb-ifb-desc"
				onChange={ ( value ) => setAttributes( { headingDesc: value, tempHeadingDesc: value } ) }
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
		</>
	);

	return (
		<>
			{ enableMultilineParagraph ? 
				<div {...innerBlocksProps} />
				: originalContent
			}
    	</>
	);
};

export default InfoBoxDesc;
