const { Fragment } = wp.element;
class Author extends React.Component {

	render() {

		const { post, attributes } = this.props

		return (
			<Fragment>
				{ attributes.displayPostAuthor && undefined !== post.author_info &&
					<div className='uagb-timaline__author' >
						<a className="uagb-timaline__author-link" target="_blank" href={ post.author_info.author_link } rel ="noopener noreferrer" 
							style= {{
								color: attributes.authorColor
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
