const { dateI18n, format, __experimentalGetSettings } = wp.date

class Meta extends React.Component {

	render() {

		const { post, attributes } = this.props

		const dateFormat = __experimentalGetSettings().formats.date

		return (

			<div className='uagb-post-grid-byline' style={{ color: attributes.metaColor, marginBottom: attributes.metaBottomSpace, fontSize: attributes.metaFontSize }}>
				{ attributes.displayPostAuthor && undefined !== post.author_info &&
					<div
						className='uagb-post__author'
						style={{ color: attributes.metaColor, fontSize: attributes.metaFontSize }}
					>
						<span className="dashicons-admin-users dashicons"></span>
						<a style={{ color: attributes.metaColor, fontSize: attributes.metaFontSize }} target="_blank" href={ post.author_info.author_link } rel ="noopener noreferrer">{ post.author_info.display_name }</a>
					</div>
				}

				{ attributes.displayPostDate && post.date_gmt &&
					<time dateTime={ format( "c", post.date_gmt ) } className='uagb-post__date'>
						<span className="dashicons-calendar dashicons"></span>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				}

				{ attributes.displayPostComment && undefined !== post.comment_info &&
					<div className='uagb-post__comment' >
						<span className="dashicons-admin-comments dashicons"></span>
						{ post.comment_info }
					</div>
				}
			</div>
		)
	}
}

export default Meta
