const { decodeEntities } = wp.htmlEntities

import classnames from "classnames"
import FeaturedImage from ".././components/FeaturedImage"
import Title from ".././components/Title"
import Meta from ".././components/Meta"
import Excerpt from ".././components/Excerpt"
import Button from ".././components/Button"

class Blog extends React.Component {

	render() {

		const { attributes, className, latestPosts, block_id } = this.props

		const {
			displayPostImage,
			columns,
			tcolumns,
			mcolumns,
			imgPosition,
			postsToShow,
			rowGap,
			columnGap,
			bgColor,
			contentPadding,
			equalHeight
		} = attributes

		const equalHeightClass = equalHeight ? "uagb-post__equal-height" : ""

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts

		return (

			<div
				className={ classnames(
					className,
					"uagb-post-grid",
					`uagb-post__image-position-${ imgPosition }`
				) }
				id={ `uagb-post__grid-${ block_id }` }
			>
				<div
					className={ classnames(
						"is-grid",
						`uagb-post__columns-${ columns }`,
						`uagb-post__columns-tablet-${ tcolumns }`,
						`uagb-post__columns-mobile-${ mcolumns }`,
						"uagb-post__items",
						`${ equalHeightClass }`
					) }
				>
					{ displayPosts.map( ( post, i ) =>
						<article key={ i } >
							<div className="uagb-post__inner-wrap" >
								<FeaturedImage post={post} attributes={attributes} />

								<div className="uagb-post__text">
									<Title post={post} attributes={attributes} />
									<Meta post={post} attributes={attributes} />
									<Excerpt post={post} attributes={attributes} />
									<Button post={post} attributes={attributes} />
								</div>
							</div>
						</article>
					) }
				</div>
			</div>
		)
	}
}

export default Blog
