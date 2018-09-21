const { decodeEntities } = wp.htmlEntities;

import classnames from 'classnames';
import Slider from 'react-slick';
import FeaturedImage from ".././components/FeaturedImage";
import Title from ".././components/Title";
import Meta from ".././components/Meta";
import Excerpt from ".././components/Excerpt";
import Button from ".././components/Button";

class Blog extends React.Component {

	render() {

		const { attributes, className, latestPosts, blogID } = this.props;

		const {
			displayPostImage,
			columns,
			imgPosition,
			postsToShow,
			rowGap,
			columnGap,
			bgColor,
			contentPadding,
			autoplay,
			pauseOnHover,
			transitionSpeed,
			infiniteLoop,
			arrowSize,
			arrowColor
		} = attributes;

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;

		function NextArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" tabIndex="0" role="button" style={{ 'borderColor' : arrowColor }}><i className="dashicons-arrow-right-alt2 dashicons" style={{ 'fontSize' : props.arrowSize, 'color' : arrowColor }}></i></button>
			);
		}

		function PrevArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" tabIndex="0" role="button" style={{ 'borderColor' : arrowColor }}><i className="dashicons-arrow-left-alt2 dashicons" style={{ 'fontSize' : props.arrowSize, 'color' : arrowColor }}></i></button>
			);
		}

		const settings = {
			slidesToShow : columns,
			slidesToScroll : 1,
			autoplaySpeed : 2000,
			autoplay : autoplay,
			infinite : infiniteLoop,
			pauseOnHover : pauseOnHover,
			speed : transitionSpeed,
			arrows : true,
			dots : true,
			rtl : false,
			nextArrow: <NextArrow arrowSize={arrowSize}/>,
			prevArrow: <PrevArrow arrowSize={arrowSize}/>,
			responsive : [
				{
					breakpoint : 1024,
					settings : {
						slidesToShow : 2,
						slidesToScroll : 1,
					}
				},
				{
					breakpoint : 767,
					settings : {
						slidesToShow : 1,
						slidesToScroll : 1,
					}
				}
			]
		}

		return (

			<div
				className={ classnames(
					className,
					'uagb-post-grid',
					'uagb-post__arrow-outside',
					`uagb-post__image-position-${ imgPosition }`
				) }
				data-blog-id={blogID}
			>
				<Slider
					className={ classnames(
						'is-carousel',
						`uagb-post__columns-${ columns }`,
						'uagb-post__items'
					) }
					style={{
						marginRight: -rowGap/2,
						marginLeft: -rowGap/2,
					}}
					{...settings}
				>
					{ displayPosts.map( ( post, i ) =>
						<article
							key={ i }
							className={ classnames(
								post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
							) }
						>
							<div
								className={ 'uagb-post__inner-wrap' }
								style={{
									paddingRight: rowGap/2,
									paddingLeft: rowGap/2,
									marginBottom: columnGap,
									background: bgColor,
								}}
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
				</Slider>
			</div>
		);
	}
}

export default Blog;
