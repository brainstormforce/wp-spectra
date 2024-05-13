import { RichText, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

const Description = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace } = props;
	const { enableMultilineParagraph, description  } = attributes;

	const innerBlockOptions = {
        allowedBlocks: ['core/paragraph'],
        template: [
            [
                'core/paragraph',
                {
                    content: description,
                },
            ],
        ],
        templateLock: false,
        renderAppender: false
    };

	if( 'not_set' === setAttributes && ! enableMultilineParagraph ) {
		return <RichText.Content tagName="p" value={ attributes.description } className="uagb-cta__desc" />
	}

	const originalContent =  (
		<>
			<RichText
				tagName="p"
				value={ attributes.description }
				placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
				className="uagb-cta__desc"
				onChange={ ( value ) => setAttributes( { description: value, tempDesc: value } ) }
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
			/>
		</>
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const innerBlocksProps = useInnerBlocksProps(
        {
            className: 'uagb-cta__desc',
        },
        innerBlockOptions
    );

	return (
		<>
			{ enableMultilineParagraph ? 
				<div { ...innerBlocksProps } />
				: originalContent
			}
    	</>
	);
};

export default Description;
