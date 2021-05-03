const { decodeEntities } = wp.htmlEntities
import { __ } from '@wordpress/i18n';

const Title = props => {

	const Tag = props.attributes.headingTag

	const { post, attributes } = props

	let target ="_self"
	if( attributes.linkTarget ){
		target ="_blank"
	}
	return (			
		<div className="uagb-timeline__heading-text"> 
			<Tag  className='uagb-timeline__heading'>
				<a href={ post.link } target= { target} rel ="noopener noreferrer" >   
					{ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }                                                                    
				</a>
			</Tag>
		</div>
	)
}

export default Title
