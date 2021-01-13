const { dateI18n, format, __experimentalGetSettings } = wp.date

export const PostMeta = (props) =>  {
		
		const { post, attributes, categoriesList } = props

		const dateFormat = __experimentalGetSettings().formats.date

		let categoryObject = ''

		categoriesList.map( ( item, thisIndex ) => {
			if ( post.categories && item.id == post.categories[0] ) {
				categoryObject = item
			}
		})

		return (
			<div className=' uagb-post__text '>
			<div className='uagb-post-grid-byline'>
				{ attributes.displayPostAuthor && undefined !== post.uagb_author_info &&
					<span className='uagb-post__author'>
						<span className="dashicons-admin-users dashicons"></span>
						<a target="_blank" href={ post.uagb_author_info.author_link } rel ="noopener noreferrer">{ post.uagb_author_info.display_name }</a>
					</span>
				}

				{ attributes.displayPostDate && post.date_gmt &&
					<time dateTime={ format( "c", post.date_gmt ) } className='uagb-post__date'>
						<span className="dashicons-calendar dashicons"></span>
						{ dateI18n( dateFormat, post.date_gmt ) }
					</time>
				}

				{ attributes.displayPostComment && undefined !== post.uagb_comment_info &&
					<span className='uagb-post__comment' >
						<span className="dashicons-admin-comments dashicons"></span>
						{ post.uagb_comment_info }
					</span>
				}

				{ attributes.displayPostTaxonomy && '' !== categoryObject &&
					<span className='uagb-post__taxonomy' >
						<span className="dashicons-tag dashicons"></span>
						{ categoryObject.name }
					</span>
				}
			</div>
			</div>
		)
}

