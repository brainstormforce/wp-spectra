const {
	RichText,
} = wp.editor

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
			
		const test_arr = attributes.rest_menu_item_arr[index_value]
		let description = ""
		if( test_arr && typeof test_arr !== "undefined"){
			description = test_arr["description"]			
		}
		
		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName='div'
	                value={ description }
	                className='uagb-rm__desc'
	                onChange={ ( value ) => { 

	                	const newItems = attributes.rest_menu_item_arr.map( ( item, thisIndex ) => {
							if ( thisIndex === index_value ) {
								item["description"] = value				
							}
							return item			
						} )
	                	setAttributes( {
							rest_menu_item_arr: newItems,
						} )	
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
