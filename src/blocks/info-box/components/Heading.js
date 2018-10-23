const {
	RichText,
} = wp.editor

const {
	createBlock
} = wp.blocks

const { __ } = wp.i18n

class Heading extends React.Component {

	render() {

		//const { attributes, setAttributes , props } = this.props;
		const {	
			attributes, 
			setAttributes , 
			props		
		} = this.props

		console.log(attributes)
		//if( setAttributes !== 'not_set' ){
		console.log("1")
		return (
			<RichText
	                tagName= { attributes.headingTag }
	                value={ attributes.headingTitle }
	                className = 'uagb-infobox-title entry-title'
	                onChange = { ( head_value ) => setAttributes( { headingTitle: head_value } ) }	                        
	            />			
		)
		//}
	}
}

export default Heading
