const {
    RichText,
} = wp.editor;

const {
	createBlock
} = wp.blocks

const { __ } = wp.i18n;

class Designation extends React.Component {

	render() {

		const {	
			attributes, 
			setAttributes , 
			props,
			index_value	
		} = this.props;

		const test_arr = attributes.test_block[index_value];
		let company = '';
		if( test_arr && typeof test_arr !== 'undefined'){
			company = test_arr['company']			
		}

		if( setAttributes !== 'not_set' ){
			return (
				<RichText
	                tagName= 'span'
	                value={ company }
	                className = 'uagb-tm__company'
	                onChange={ ( value ) => { 

	                	const newItems = attributes.test_block.map( ( item, thisIndex ) => {
							if ( thisIndex === index_value ) {
								item['company'] = value				
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
	                onSplit = {
							props.insertBlocksAfter ?
								( before, after, ...blocks ) => {
									setAttributes( { content: before } );
									props.insertBlocksAfter( [
										...blocks,
										createBlock( 'core/paragraph', { content: after } ),
									] );
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
	                value={ company }
	                className='uagb-tm__company'
	            />			
			)
		}
	}
}

export default Designation
