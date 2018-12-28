import classnames from "classnames"
import Slider from "react-slick"
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
			autoplay,
			pauseOnHover,
			transitionSpeed,
			infiniteLoop,
			arrowSize,
			arrowBorderSize,
			arrowBorderRadius,
			arrowColor,
			arrowDots
		} = attributes

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts

		function NextArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" tabIndex="0" role="button" style={{ "borderColor" : arrowColor, "borderRadius" : arrowBorderRadius, "borderWidth" : arrowBorderSize }}><span className="fas fa-angle-right" style={{ "fontSize" : props.arrowSize, "width" : props.arrowSize, "height" : props.arrowSize, "color" : arrowColor }}></span></button>
			)
		}

		function PrevArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" tabIndex="0" role="button" style={{ "borderColor" : arrowColor, "borderRadius" : arrowBorderRadius, "borderWidth" : arrowBorderSize }}><span className="fas fa-angle-left" style={{ "fontSize" : props.arrowSize, "width" : props.arrowSize, "height" : props.arrowSize, "color" : arrowColor }}></span></button>
			)
		}

		let dots = ( "dots" == arrowDots || "arrows_dots" == arrowDots ) ? true : false
		let arrows = ( "arrows" == arrowDots || "arrows_dots" == arrowDots ) ? true : false

		const settings = {
			slidesToShow : columns,
			slidesToScroll : 1,
			autoplaySpeed : 2000,
			autoplay : autoplay,
			infinite : infiniteLoop,
			pauseOnHover : pauseOnHover,
			speed : transitionSpeed,
			arrows : arrows,
			dots : dots,
			rtl : false,
			nextArrow: <NextArrow arrowSize={arrowSize}/>,
			prevArrow: <PrevArrow arrowSize={arrowSize}/>,
			responsive : [
				{
					breakpoint : 1024,
					settings : {
						slidesToShow : tcolumns,
						slidesToScroll : 1,
					}
				},
				{
					breakpoint : 767,
					settings : {
						slidesToShow : mcolumns,
						slidesToScroll : 1,
					}
				}
			]
		}

		const all_posts = displayPosts.map( ( post, i ) =>
			<article key={ i }>
				<div className="uagb-post__inner-wrap">
					<FeaturedImage post={post} attributes={attributes} />
					<div className="uagb-post__text">
						<Title post={post} attributes={attributes} />
						<Meta post={post} attributes={attributes} />
						<Excerpt post={post} attributes={attributes} />
						<Button post={post} attributes={attributes} />
					</div>
				</div>
			</article>
		)

		if ( columns >= displayPosts.length ) {
			return (
				<div
					className={ classnames(
						className,
						"uagb-post-grid",
						"uagb-post__arrow-outside",
						`uagb-post__image-position-${ imgPosition }`
					) }
					data-blog-id={block_id}
					id={ `uagb-post__carousel-${ block_id }` }
				>
					<div
						className={ classnames(
							"is-carousel",
							`uagb-post__columns-${ columns }`,
							`uagb-post__columns-tablet-${ tcolumns }`,
							`uagb-post__columns-mobile-${ mcolumns }`,
							"uagb-post__items"
						) }
					>
						{ all_posts }
					</div>
				</div>
			)
		} else {

			let style_str = ""

			if ( "dots" == arrowDots ) { style_str = {padding:0} }

			return (

				<div
					className={ classnames(
						className,
						"uagb-post-grid",
						"uagb-post__arrow-outside",
						"uagb-slick-carousel",
						`uagb-post__image-position-${ imgPosition }`
					) }
					data-blog-id={block_id}
					id={ `uagb-post__carousel-${ block_id }` }
					style={ ( "dots" == arrowDots ) ? { padding: 0 } : {} }
				>
					<Slider
						className={ classnames(
							"is-carousel",
							`uagb-post__columns-${ columns }`,
							"uagb-post__items"
						) }
						{...settings}
					>
						{ all_posts }
					</Slider>
				</div>
			)
		}

	}
}

export default Blog
