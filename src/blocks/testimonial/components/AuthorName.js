const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class AuthorName extends React.Component {

	render() {

		const {
			attributes,
			setAttributes ,
			props,
			index_value
		} = this.props

		const test_arr = attributes.test_block[index_value]
		let author_name = ""
		if( test_arr && typeof test_arr !== "undefined"){
			author_name = test_arr["name"]			
		}

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName="span"
	                value={ author_name }
	                className='uagb-tm__author-name'
	                onChange={ ( value ) => { 
	                	const newItems = attributes.test_block.map( ( item, thisIndex ) => {
							if ( thisIndex === index_value ) {
								item["name"] = value				
							}
							return item			
						} )
	                	setAttributes( {
							test_block: newItems,
						} )	
	                } }     
	                onMerge = { props.mergeBlocks }
	                onSplit = {
						props.insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								props.insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => props.onReplace( [] ) }
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
}

export default AuthorName
