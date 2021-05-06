const { RichText } = wp.blockEditor;

const { createBlock } = wp.blocks;

import { __ } from '@wordpress/i18n';

const Company = ( props ) => {
	const {
		attributes,
		setAttributes,
		index_value,
		mergeBlocks,
		insertBlocksAfter,
		onReplace,
	} = props;

	const test_arr = attributes.test_block[ index_value ];
	let company = '';
	if ( test_arr && typeof test_arr !== 'undefined' ) {
		company = test_arr.company;
	}

	const data_copy = [ ...attributes.test_block ];

	if ( setAttributes !== 'not_set' ) {
		return (
			<RichText
				tagName="div"
				value={ company }
				className="uagb-tm__company"
				onChange={ ( value ) => {
					const new_content = {
						description: data_copy[ index_value ].description,
						name: data_copy[ index_value ].name,
						company: value,
						image: data_copy[ index_value ].image,
					};
					data_copy[ index_value ] = new_content;
					setAttributes( { test_block: data_copy } );
				} }
				multiline={ false }
				placeholder={ __(
					'Company Name',
					'ultimate-addons-for-gutenberg'
				) }
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
	return (
		<RichText.Content
			tagName="span"
			value={ company }
			className="uagb-tm__company"
		/>
	);
};

export default Company;
