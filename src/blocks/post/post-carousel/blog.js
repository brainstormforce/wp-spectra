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
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRjFGMUYyIiBkPSJNMTY3LjgzLDI0OC4wNTdjMCw0LjU4NC0zLjcxNyw4LjMwMi04LjMwMiw4LjMwMkgyOS40NjVjLTQuNTg1LDAtOC4zMDItMy43MTgtOC4zMDItOC4zMDJWMTAxLjk0Mw0KCQkJYzAtNC41ODUsMy43MTYtOC4zMDIsOC4zMDItOC4zMDJoMTMwLjA2M2M0LjU4NCwwLDguMzAyLDMuNzE2LDguMzAyLDguMzAyVjI0OC4wNTdMMTY3LjgzLDI0OC4wNTd6Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzOC4zMywxMzUuODg3YzAsMi44MDctMi4yNzUsNS4wODItNS4wODIsNS4wODJINTUuNzQ2Yy0yLjgwNywwLTUuMDgyLTIuMjc1LTUuMDgyLTUuMDgydjAuMzA4DQoJCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTAyYzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTM1Ljg4N3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMjAuMDEyLDE0OS45ODhjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0Nkg3MS42MjdjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNDUuNzM4QzExOC44MjksMTQ3LjM0LDEyMC4wMTIsMTQ4LjUyNSwxMjAuMDEyLDE0OS45ODhMMTIwLjAxMiwxNDkuOTg4eiIvPg0KCQkJPGc+DQoJCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTEzNS4wMjQsMTY2LjUyNWMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2SDU2LjYxNmMtMS40NjMsMC0yLjY0Ni0xLjE4NC0yLjY0Ni0yLjY0NmwwLDANCgkJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNzUuNzYyQzEzMy44NCwxNjMuODc3LDEzNS4wMjQsMTY1LjA2MiwxMzUuMDI0LDE2Ni41MjVMMTM1LjAyNCwxNjYuNTI1eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzUuMDI0LDE3Ni4xOTFjMCwxLjQ2MS0xLjE4NCwyLjY0NS0yLjY0NiwyLjY0NUg1Ni42MTZjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDVsMCwwDQoJCQkJCWMwLTEuNDYzLDEuMTg0LTIuNjQ4LDIuNjQ2LTIuNjQ4aDc1Ljc2MkMxMzMuODQsMTczLjU0MywxMzUuMDI0LDE3NC43MjgsMTM1LjAyNCwxNzYuMTkxTDEzNS4wMjQsMTc2LjE5MXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTM1LjAyNCwxODYuODU3YzAsMS40NjMtMS4xODQsMi42NDYtMi42NDYsMi42NDZINTYuNjE2Yy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NiwyLjY0Ni0yLjY0Nmg3NS43NjJDMTMzLjg0LDE4NC4yMTEsMTM1LjAyNCwxODUuMzk1LDEzNS4wMjQsMTg2Ljg1N0wxMzUuMDI0LDE4Ni44NTd6Ii8+DQoJCQk8L2c+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTMzLjY1NCwyMTEuNTA4YzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzlINjIuNzJjLTQuMDc2LDAtNy4zODEtMy4zMDMtNy4zODEtNy4zNzlsMCwwDQoJCQkJYzAtNC4wNzYsMy4zMDUtNy4zODEsNy4zODEtNy4zODFoNjMuNTUzQzEzMC4zNDksMjA0LjEyNywxMzMuNjU0LDIwNy40MzIsMTMzLjY1NCwyMTEuNTA4TDEzMy42NTQsMjExLjUwOHoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMyOC44MzcsMjQ4LjA1N2MwLDQuNTg0LTMuNzE4LDguMzAyLTguMzAyLDguMzAySDE5MC40NzJjLTQuNTg1LDAtOC4zMDItMy43MTgtOC4zMDItOC4zMDJWMTAxLjk0Mw0KCQkJYzAtNC41ODUsMy43MTctOC4zMDIsOC4zMDItOC4zMDJoMTMwLjA2M2M0LjU4NCwwLDguMzAyLDMuNzE2LDguMzAyLDguMzAyVjI0OC4wNTdMMzI4LjgzNywyNDguMDU3eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTkuMzM2LDEzNS44ODhjMCwyLjgwNy0yLjI3NSw1LjA4Mi01LjA4Miw1LjA4MmgtNzcuNTAyYy0yLjgwNywwLTUuMDgyLTIuMjc1LTUuMDgyLTUuMDgydjAuMzA4DQoJCQkJYzAtMi44MDYsMi4yNzUtNS4wODIsNS4wODItNS4wODJoNzcuNTAyYzIuODA3LDAsNS4wODIsMi4yNzYsNS4wODIsNS4wODJWMTM1Ljg4OHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODEuMDIsMTQ5Ljk4OGMwLDEuNDYyLTEuMTg0LDIuNjQ2LTIuNjQ2LDIuNjQ2aC00NS43MzhjLTEuNDYzLDAtMi42NDYtMS4xODQtMi42NDYtMi42NDZsMCwwDQoJCQkJYzAtMS40NjMsMS4xODQtMi42NDcsMi42NDYtMi42NDdoNDUuNzM4QzI3OS44MzYsMTQ3LjM0MSwyODEuMDIsMTQ4LjUyNSwyODEuMDIsMTQ5Ljk4OEwyODEuMDIsMTQ5Ljk4OHoiLz4NCgkJCTxnPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE2Ni41MjVjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxNjMuODc4LDI5Ni4wMzEsMTY1LjA2MywyOTYuMDMxLDE2Ni41MjVMMjk2LjAzMSwxNjYuNTI1eiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE3Ni4xOTFjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxNzMuNTQ0LDI5Ni4wMzEsMTc0LjcyOSwyOTYuMDMxLDE3Ni4xOTFMMjk2LjAzMSwxNzYuMTkxeiIvPg0KCQkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTYuMDMxLDE4Ni44NThjMCwxLjQ2Mi0xLjE4NCwyLjY0Ni0yLjY0NiwyLjY0NmgtNzUuNzYyYy0xLjQ2MywwLTIuNjQ2LTEuMTg0LTIuNjQ2LTIuNjQ2bDAsMA0KCQkJCQljMC0xLjQ2MywxLjE4NC0yLjY0NywyLjY0Ni0yLjY0N2g3NS43NjJDMjk0Ljg0OCwxODQuMjExLDI5Ni4wMzEsMTg1LjM5NiwyOTYuMDMxLDE4Ni44NThMMjk2LjAzMSwxODYuODU4eiIvPg0KCQkJPC9nPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5NC42NiwyMTEuNTA4YzAsNC4wNzYtMy4zMDUsNy4zNzktNy4zODEsNy4zNzloLTYzLjU1M2MtNC4wNzYsMC03LjM4MS0zLjMwMy03LjM4MS03LjM3OWwwLDANCgkJCQljMC00LjA3NiwzLjMwNS03LjM4MSw3LjM4MS03LjM4MWg2My41NTNDMjkxLjM1NSwyMDQuMTI3LDI5NC42NiwyMDcuNDMyLDI5NC42NiwyMTEuNTA4TDI5NC42NiwyMTEuNTA4eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
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
