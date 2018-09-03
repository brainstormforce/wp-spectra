class Meta extends React.Component {

	render() {

		const { post, attributes } = this.props;

		return (

			<div className='uagb-post-grid-byline' style={{ color: attributes.metaColor }}>
				{ attributes.displayPostAuthor && post.author_info.display_name &&
					<div
						className='uagb-post__author fa fa-user'
						style={{ color: attributes.metaColor }}
					>
						<a className='uagb-text-link' target="_blank" href={ post.author_info.author_link }>{ post.author_info.display_name }</a>
					</div>
				}

				{ attributes.displayPostDate && post.date_gmt &&
					<time dateTime={ moment( post.date_gmt ).utc().format() } className='uagb-post__date fa fa-clock'>
						{ moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
					</time>
				}

				{ attributes.displayPostComment &&
					<div className='uagb-post__comment fa fa-comment' >{ post.author_info.comments }</div>
				}
			</div>
		);
	}
}

export default Meta;
