class Meta extends React.Component {

	render() {

		const { post, attributes } = this.props

		return (

			<div className='uagb-post-grid-byline' style={{ color: attributes.metaColor, marginBottom: attributes.metaBottomSpace }}>
				{ attributes.displayPostAuthor && undefined !== post.author_info &&
					<div
						className='uagb-post__author'
						style={{ color: attributes.metaColor }}
					>
						<i className="dashicons-admin-users dashicons"></i>
						<a style={{ color: attributes.metaColor }} target="_blank" href={ post.author_info.author_link } rel ="noopener noreferrer">{ post.author_info.display_name }</a>
					</div>
				}

				{ attributes.displayPostDate && post.date_gmt &&
					<time dateTime={ moment( post.date_gmt ).utc().format() } className='uagb-post__date'>
						<i className="dashicons-calendar dashicons"></i>
						{ moment( post.date_gmt ).local().format( "MMMM DD, Y" ) }
					</time>
				}

				{ attributes.displayPostComment && undefined !== post.comment_info &&
					<div className='uagb-post__comment' >
						<i className="dashicons-admin-comments dashicons"></i>
						{ post.comment_info }
					</div>
				}
			</div>
		)
	}
}

export default Meta
