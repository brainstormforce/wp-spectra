const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class Price extends React.Component {

	render() {

		const {	
			attributes, 
			setAttributes , 
			props,
			index_value	
		} = this.props

		const rest_arr = attributes.rest_menu_item_arr
		let price = ""
		if( rest_arr && typeof rest_arr !== "undefined"){
			rest_arr.forEach( element => {
				price = element["price"];
			});			
		}else{
			price = attributes.price
		}


		// let price = attributes.price
		// if(price == ""){
		// 	const rest_arr = attributes.rest_menu_item_arr[index_value]
		// 	price = rest_arr["price"]
		// }else{
		// 	price = attributes.price
		// }

		console.log(price);

		// var data_copy = [...attributes.rest_menu_item_arr]

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName= 'div'
	                value={ price }
	                className = 'uagb-rm__price'
	                placeholder={ __( "Price" ) }
	                onChange={ ( value ) => { 
	                	// var new_content = { "description" : data_copy[index_value]["description"], "title":data_copy[index_value]["title"], "price" : value, "image" : data_copy[index_value]["image"]  }
						// data_copy[index_value] = new_content
						setAttributes( { "price": value } )	                	
	                } }     
	                // multiline={ false }
	                // onMerge = { props.mergeBlocks }		
	                // unstableOnSplit = {
					// 	props.insertBlocksAfter ?
					// 		( before, after, ...blocks ) => {
					// 			setAttributes( { content: before } )
					// 			props.insertBlocksAfter( [
					// 				...blocks,
					// 				createBlock( "core/paragraph", { content: after } ),
					// 			] )
					// 		} :
					// 		undefined
					// }			
					// onRemove={ () => props.onReplace( [] ) }              
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
