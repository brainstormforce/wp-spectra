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
			props		
		} = this.props;

		if( setAttributes !== 'not_set' ){
			return (
				<RichText
	                tagName= 'span'
	                value={ attributes.headingTitle }
	                className = 'uagb-testinomial-designation'
	                onChange = { ( value ) => setAttributes( { headingTitle: value } ) }
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
	                value={ attributes.headingTitle }
	                className='uagb-testinomial-designation'
	            />			
			)
		}
	}
}

export default Designation
