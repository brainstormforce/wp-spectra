import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { lazy, Suspense, useRef, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Slider = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-carousel/react-slick" */ 'react-slick'
	)
);

function Blog( props ) {
	const article = useRef();
	const { attributes, className, latestPosts, block_id } = props;
	const deviceType = useDeviceType();

	const {
		isPreview,
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		autoplay,
		pauseOnHover,
		transitionSpeed,
		infiniteLoop,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		arrowColor,
		arrowDots,
		equalHeight,
		layoutConfig,
		rowGap
	} = attributes;

	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){
				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGap / articleWidth ) * 100;
				const parent = article?.current?.closest( '.uagb-post__image-position-background' );

				if ( parent ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGap / 2 + 'px';

						}
					}
				}
			}

		}, 100 )
	};

	useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShow
			? latestPosts.slice( 0, postsToShow )
			: latestPosts;

	function NextArrow() {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-next slick-arrow"
				aria-label="Next"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: arrowBorderSize,
				} }
			>
				{ UAGB_Block_Icons.carousel_right }
			</button>
		);
	}

	function PrevArrow() {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-prev slick-arrow"
				aria-label="Previous"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: arrowBorderSize,
				} }
			>
				{ UAGB_Block_Icons.carousel_left }
			</button>
		);
	}

	const dots =
		'dots' === arrowDots || 'arrows_dots' === arrowDots ? true : false;
	const arrows =
		'arrows' === arrowDots || 'arrows_dots' === arrowDots ? true : false;

	const equalHeightClass = equalHeight
		? 'uagb-post__carousel_equal-height'
		: '';

	const settings = {
		slidesToShow: columns,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: transitionSpeed,
		arrows,
		dots,
		rtl: false,
		afterChange: () => {
			if ( equalHeight ) {
				uagb_carousel_height( block_id ); // eslint-disable-line no-undef
			}
		},
		nextArrow: <NextArrow arrowSize={ arrowSize } />,
		prevArrow: <PrevArrow arrowSize={ arrowSize } />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: tcolumns,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: mcolumns,
					slidesToScroll: 1,
				},
			},
		],
	};

	const all_posts = displayPosts.map( ( post, i ) => (
		<article ref={article} key={ i } className="uagb-post__inner-wrap">
			{ renderPostLayout(
				'uagb/post-carousel',
				post,
				layoutConfig,
				props.attributes,
				props.categoriesList
			) }
		</article>
	) );

	if ( columns >= displayPosts.length ) {
		return (
			<div
				className={ classnames(
					'is-carousel',
					`uagb-post__columns-${ columns }`,
					`uagb-post__columns-tablet-${ tcolumns }`,
					`uagb-post__columns-mobile-${ mcolumns }`,
					'uagb-post__items',
					className,
					'uagb-post-grid',
					'uagb-post__arrow-outside',
					`uagb-post__image-position-${ imgPosition }`,
					`${ equalHeightClass }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ block_id }`
				) }
				data-blog-id={ block_id }
			>
				<InnerBlockLayoutContextProvider
					parentName="uagb/post-carousel"
					parentClassName="uagb-block-grid"
				>
					{ all_posts }
				</InnerBlockLayoutContextProvider>
			</div>
		);
	}
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/post-carousel.png`;
	return (
		<Suspense fallback={ lazyLoader() }>
			{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<>
			<Slider
				className={ classnames(
					'is-carousel',
					`uagb-post__columns-${ columns }`,
					'uagb-post__items',
					className,
					'uagb-post-grid',
					'uagb-post__arrow-outside',
					'uagb-slick-carousel',
					`uagb-post__image-position-${ imgPosition }`,
					`${ equalHeightClass }`,
					`uagb-block-${ block_id }`
				) }
				data-blog-id={ block_id }
				style={ 'dots' === arrowDots ? { padding: '0 0 35px 0' } : {} }
				{ ...settings }
			>
				{ all_posts }
			</Slider>
			</>
			}
		</Suspense>
	);
}

export default React.memo( Blog );
