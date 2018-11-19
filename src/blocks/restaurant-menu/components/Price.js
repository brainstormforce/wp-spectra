const {
	RichText,
} = wp.editor

const {
	createBlock
} = wp.blocks

const { __ } = wp.i18n

class Price extends React.Component {

	render() {

		const {	
			attributes, 
			setAttributes , 
			props,
			index_value	
		} = this.props

		const test_arr = attributes.test_block[index_value]
		let price = ""
		if( test_arr && typeof test_arr !== "undefined"){
			price = test_arr["price"]			
		}

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName= 'span'
	                value={ price }
	                className = 'uagb-rm__price'
	                onChange={ ( value ) => { 

	                	const newItems = attributes.test_block.map( ( item, thisIndex ) => {
							if ( thisIndex === index_value ) {
								item["price"] = value				
							}
							return item			
						} )
	                	setAttributes( {
							test_block: newItems,
						} )	
	                } }     
	                multiline={ false }
	                placeholder={ __( "Write a Heading" ) }
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
	                tagName= 'span'
	                value={ price }
	                className='uagb-rm__price'
	            />			
			)
		}
	}
}

export default Price
