const {
	RichText,
} = wp.blockEditor

import { __ } from '@wordpress/i18n';

const {
	createBlock
} = wp.blocks

const AuthorName = props => {

	const {
		attributes,
		setAttributes,
		index_value,
		mergeBlocks,
		insertBlocksAfter,
		onReplace
	} = props

	const test_arr = attributes.test_block[index_value]
	let author_name = ""
	if( test_arr && typeof test_arr !== "undefined"){
		author_name = test_arr["name"]			
	}

	var data_copy = [...attributes.test_block]

	if( setAttributes !== "not_set" ){
		return (
			<RichText
				tagName="div"
				value={ author_name }
				placeholder={ __( "Author Name",'ultimate-addons-for-gutenberg' ) }
				className='uagb-tm__author-name'
				onChange={ ( value ) => { 
					var new_content = { "description" : data_copy[index_value]["description"], "name":value, "company" : data_copy[index_value]["company"], "image" : data_copy[index_value]["image"]  }
					data_copy[index_value] = new_content
					setAttributes( { "test_block": data_copy } )	                	
				} }     
				onMerge = { mergeBlocks }
				onSplit = {
					insertBlocksAfter ?
						( before, after, ...blocks ) => {
							setAttributes( { content: before } )
							insertBlocksAfter( [
								...blocks,
								createBlock( "core/paragraph", { content: after } ),
							] )
						} :
						undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
		)
	}else{
		return (
			<RichText.Content
				tagName="span"
				value={ author_name }
				className='uagb-tm__author-name'
			/>
		)
	}
}

export default AuthorName
