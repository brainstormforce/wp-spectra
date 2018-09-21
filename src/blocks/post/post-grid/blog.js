const { decodeEntities } = wp.htmlEntities;

import classnames from 'classnames';
import FeaturedImage from ".././components/FeaturedImage";
import Title from ".././components/Title";
import Meta from ".././components/Meta";
import Excerpt from ".././components/Excerpt";
import Button from ".././components/Button";

class Blog extends React.Component {

	render() {

		console.log(this);

		const { attributes, className, latestPosts, block_id } = this.props;

		const {
			displayPostImage,
			columns,
			postsToShow,
			rowGap,
			columnGap,
			bgColor,
			contentPadding,
			equalHeight
		} = attributes;

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;

		return (

			<div
				className={ classnames(
					className,
					'uagb-post-grid',
					'uagb-post__arrow-outside'
				) }
				data-block-id={block_id}
				id={ `uagb-post__grid-${ block_id }` }
			>
				<div
					className={ classnames(
						'is-grid',
						`uagb-post__columns-${ columns }`,
						'uagb-post__items',
						`uagb-post__equal-height-${ equalHeight }`
					) }
					style={{
						marginRight: -rowGap/2,
						marginLeft: -rowGap/2,
					}}
				>
					{ displayPosts.map( ( post, i ) =>
						<article
							key={ i }
							className={ classnames(
								post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
							) }
							style={{
								paddingRight: rowGap/2,
								paddingLeft: rowGap/2,
								marginBottom: columnGap
							}}
						>
							<div
								className="uagb-post__inner-wrap"
								style={{
									background: bgColor,
								}}
							>
								<FeaturedImage post={post} attributes={attributes} />

								<div
									className={ 'uagb-post__text' }
									style={{
										padding: contentPadding,
									}}
								>
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
		);
	}
}

export default Blog;
