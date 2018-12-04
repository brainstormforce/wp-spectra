const { Fragment } = wp.element
class Author extends React.Component {

	render() {

		const { post, attributes } = this.props

		let target ="_self"
		if( attributes.linkTarget ){
			target ="_blank"
		}
		return (
			<Fragment>
				{ attributes.displayPostAuthor && undefined !== post.author_info &&
					<div className='uagb-timeline__author' style= {{
						textAlign: attributes.align,
						marginBottom: attributes.authorSpace+"px"
					}}		>
						<span className="dashicons-admin-users dashicons" style= {{
							color: attributes.authorColor,
							fontSize: attributes.authorFontSize+"px",								
						}}></span>
						<a className="uagb-timeline__author-link" target= {target} href={ post.author_info.author_link } rel ="noopener noreferrer" 
							style= {{
								color: attributes.authorColor,
								fontSize: attributes.authorFontSize+"px",								
							}}
						>
							{ post.author_info.display_name }
						</a>
					</div>
				}				
			</Fragment>
		)
	}
}

export default Author
