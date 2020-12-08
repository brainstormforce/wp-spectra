const { dateI18n, format, __experimentalGetSettings } = wp.date
const {  select } = wp.data;
class Meta extends React.Component {
	constructor() {
		super( ...arguments )
	}
	render() {
		console.log(this.props)
		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId ); //Pass Child's Client Id.
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId ); //Pass the Parents CLient Id from above and get all Parent parentAttributes
	
		const { post, attributes, categoriesList } = this.props

		const dateFormat = __experimentalGetSettings().formats.date

		let categoryObject = ''

		// this.props.categoriesList.map( ( item, thisIndex ) => {
		// 	if ( parentAttributes.postdata[0].categories && item.id == parentAttributes.postdata[0].categories[0] ) {
		// 		categoryObject = item
		// 	}
		// })

		return (

			<div className='uagb-post-grid-byline'>
				{ parentAttributes.displayPostAuthor && undefined !== parentAttributes.postdata[0].uagb_author_info &&
					<span className='uagb-post__author'>
						<span className="dashicons-admin-users dashicons"></span>
						<a target="_blank" href={ parentAttributes.postdata[0].uagb_author_info.author_link } rel ="noopener noreferrer">{ parentAttributes.postdata[0].uagb_author_info.display_name }</a>
					</span>
				}

				{ parentAttributes.displayPostDate && parentAttributes.postdata[0].date_gmt &&
					<time dateTime={ format( "c", parentAttributes.postdata[0].date_gmt ) } className='uagb-post__date'>
						<span className="dashicons-calendar dashicons"></span>
						{ dateI18n( dateFormat, parentAttributes.postdata[0].date_gmt ) }
					</time>
				}

				{ parentAttributes.displayPostComment && undefined !== parentAttributes.postdata[0].uagb_comment_info &&
					<span className='uagb-post__comment' >
						<span className="dashicons-admin-comments dashicons"></span>
						{ parentAttributes.postdata[0].uagb_comment_info }
					</span>
				}

				{ parentAttributes.displayPostTaxonomy && '' !== categoryObject &&
					<span className='uagb-post__taxonomy' >
						<span className="dashicons-tag dashicons"></span>
						{ categoryObject.name }
					</span>
				}
			</div>
		)
	}
}

export default Meta
