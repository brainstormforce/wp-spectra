class Meta extends React.Component {

	render() {

		return (

			<div className='uagb-post-grid-byline' style={{ color: this.props.attributes.metaColor }}>
				{ this.props.attributes.displayPostAuthor && this.props.post.author_info.display_name &&
					<div
						className='uagb-post__author fa fa-user'
						style={{ color: this.props.attributes.metaColor }}
					>
						<a className='uagb-text-link' target="_blank" href={ this.props.post.author_info.author_link }>{ this.props.post.author_info.display_name }</a>
					</div>
				}

				{ this.props.attributes.displayPostDate && this.props.post.date_gmt &&
					<time dateTime={ moment( this.props.post.date_gmt ).utc().format() } className='uagb-post__date fa fa-clock'>
						{ moment( this.props.post.date_gmt ).local().format( 'MMMM DD, Y' ) }
					</time>
				}

				{ this.props.attributes.displayPostComment &&
					<div className='uagb-post__comment fa fa-comment' >{ this.props.post.author_info.comments }</div>
				}
			</div>
		);
	}
}

export default Meta;
