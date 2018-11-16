const {
    RichText,
} = wp.editor;

const { __ } = wp.i18n;

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
		} = this.props;

		const test_arr = attributes.test_block[index_value];
		let author_title = '';
		if( test_arr && typeof test_arr !== 'undefined'){
			author_title = test_arr['title']			
		}

		if( setAttributes !== 'not_set' ){
			return (
				<RichText
	                tagName= {attributes.headingTag}
	                value={ author_title }
	                className='uagb-rm__title'
	                onChange={ ( value ) => { 
	                	const newItems = attributes.test_block.map( ( item, thisIndex ) => {
							if ( thisIndex === index_value ) {
								item['title'] = value				
							}
							return item			
						} )
	                	setAttributes( {
							test_block: newItems,
						} )	
	                } }     
	                onMerge = { props.mergeBlocks }
	                unstableOnSplit = {
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
	                tagName={attributes.headingTag}
	                value={ author_title }
	                className='uagb-rm__title'
	            />
			)
		}
	}
}

export default Title
