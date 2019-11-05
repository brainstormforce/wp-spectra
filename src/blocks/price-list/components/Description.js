const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class Description extends React.Component {

	render() {

		const {	
			attributes, 
			setAttributes , 
			props,
			index_value		
		} = this.props
			
		const rest_arr = attributes.rest_menu_item_arr[index_value]
		let description = ""
		if( rest_arr && typeof rest_arr !== "undefined"){
			description = rest_arr["description"]			
		}
		var data_copy = [...attributes.rest_menu_item_arr]
		
		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName='div'
	                value={ description }
	                placeholder={ __( "Write a Description" ) }
	                className='uagb-rm__desc'
	                onChange={ ( value ) => { 
	                	var new_content = { "description" : value, "title":data_copy[index_value]["title"], "price" : data_copy[index_value]["price"], "image" : data_copy[index_value]["image"]  }
						data_copy[index_value] = new_content
						setAttributes( { "rest_menu_item_arr": data_copy } )
	                } }     
	                onMerge = { props.mergeBlocks }		
	                unstableOnSplit = {
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
	                tagName='div'
	                value={ description }
	                className='uagb-rm__desc'
	            />			
			)
		}
	}
}

export default Description
