import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

const Description = ( props ) => {
	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter, onReplace } = props;

	if ( setAttributes !== 'not_set' ) {
		return (
			<RichText
				tagName="p"
				value={ attributes.description }
				placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
				className="uagb-cta__desc"
				onChange={ ( value ) => setAttributes( { description: value } ) }
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
		);
	}
	return <RichText.Content tagName="p" value={ attributes.description } className="uagb-cta__desc" />;
};

export default Description;
