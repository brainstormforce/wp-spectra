const { decodeEntities } = wp.htmlEntities;

import classnames from 'classnames';

import Masonry from 'react-masonry-component';
import FeaturedImage from "./FeaturedImage";
import Title from "./Title";
import Meta from "./Meta";
import Excerpt from "./Excerpt";
import Button from "./Button";

class Blog extends React.Component {

	render() {

		const { attributes, className, latestPosts } = this.props;

		const {
			displayPostDate,
			displayPostComment,
			displayPostExcerpt,
			displayPostAuthor,
			displayPostImage,
			displayPostLink,
			align,
			postLayout,
			columns,
			order,
			orderBy,
			categories,
			postsToShow,
			width,
			imageCrop,
			rowGap,
			columnGap,
			bgColor,
			contentPadding,
			titleColor,
			titleTag,
			titleFontSize,
			metaColor,
			excerptColor,
			ctaColor,
			ctaBgColor
		} = attributes;

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;

		if( postLayout == 'masonry' ) {
			{/* Masonry Layout */}

			return (
				<div
					className={ classnames(
						className,
						'uagb-post-grid',
					) }
				>
					<Masonry
						className={ classnames( {
							'is-masonry': 'is-masonry',
							[ `uagb-post__columns-${ columns }` ]: postLayout !== 'list',
							'uagb-post__items' : 'uagb-post__items'
						} ) }
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
									className={ 'uagb-post__inner-wrap' }
									style={{ background: bgColor }}
								>
									<FeaturedImage post={post} attributes={attributes} />

									<div
										className={ 'uagb-post__text' }
										style={{
											padding: contentPadding
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
					</Masonry>
				</div>
			);
		} else {
			{/* Grid Layout */}

			return (
				<div
					className={ classnames(
						className,
						'uagb-post-grid',
					) }
				>
					<div
						className={ classnames( {
							'is-grid' : 'is-grid',
							[ `uagb-post__columns-${ columns }` ]: postLayout !== 'list',
							'uagb-post__items' : 'uagb-post__items'
						} ) }
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
									className={ 'uagb-post__inner-wrap' }
									style={{ background: bgColor }}
								>
									<FeaturedImage post={post} attributes={attributes} />

									<div
										className={ 'uagb-post__text' }
										style={{
											padding: contentPadding
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
}

export default Blog;
