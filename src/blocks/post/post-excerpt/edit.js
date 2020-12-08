import truncate from "lodash/truncate"

const {  select } = wp.data;

class Excerpt extends React.Component {

	render() {

		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId ); //Pass Child's Client Id.
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent parentAttributes
		if ( parentAttributes.postdata[0].uagb_excerpt == undefined ) {
			return null
		}

		const words = parentAttributes.postdata[0].uagb_excerpt.split(" ")

		let excerpt = parentAttributes.postdata[0].uagb_excerpt

		let exLen = ( parentAttributes.excerptLength ) ? parentAttributes.excerptLength : 25

		if ( exLen >= words.length ) {
			excerpt = parentAttributes.postdata[0].uagb_excerpt
		} else {
			const truncated = words.slice( 0, exLen )
			excerpt = truncated.join( " " )
			excerpt += " ..."
		}

		if ( parentAttributes.displayPostExcerpt && parentAttributes.displayPostContentRadio == "excerpt" ) {

			return (

				<div className='uagb-post__excerpt'>
					<div dangerouslySetInnerHTML={ { __html: excerpt } } />
				</div>
			)

		}else if(parentAttributes.displayPostExcerpt && parentAttributes.displayPostContentRadio == "full_post" ){
			
			return (

				<div className='uagb-post__excerpt uagb-full_post'>
						<div dangerouslySetInnerHTML={ { __html: parentAttributes.postdata[0].content.raw.trim() } } />
						
				</div>
			)
		
			
		} else {
			return null
		}
	}
}

export default Excerpt
