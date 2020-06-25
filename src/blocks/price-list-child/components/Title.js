const {
	RichText,
} = wp.blockEditor

const { __ } = wp.i18n
const {
	createBlock
} = wp.blocks

class Title extends React.Component {
	
	render() {

		const {
			attributes,
			setAttributes ,
			props,
			index_value
		} = this.props

		// const test_arr = attributes.rest_menu_item_arr
		// let author_title = ""
		// if( test_arr && typeof test_arr !== "undefined"){
		// 	author_title = test_arr["title"]			
		// }
		let author_title = attributes.title
		
		if( setAttributes !== "not_set" ){
		// 	var data_copy = [...attributes.rest_menu_item_arr]
			return (
				<RichText
	                tagName= {attributes.headingTag}
	                value={ author_title }
	                 placeholder={ __( "Write a Title" ) }
	                className='uagb-rm__title'
	                onChange={ ( value ) => { 
						setAttributes( { "title": value } )	                	
	                } }     
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
	                tagName={attributes.headingTag}
	                value={ author_title }
	                className='uagb-rm__title'
	            />
			)
		}
	}
}

export default Title
