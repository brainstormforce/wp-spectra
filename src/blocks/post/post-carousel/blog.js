import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';
import { useDeviceType } from '@Controls/getPreviewType';
import { useRef, useEffect, memo } from '@wordpress/element';

import { getFallbackNumber } from '@Controls/getAttributeFallback';

import Slider from 'react-slick';

function Blog( props ) {
	const blockName = props.name.replace( 'uagb/', '' );
	const article = useRef();
	const { attributes, className, latestPosts, block_id, setAttributes } = props;
	const deviceType = useDeviceType();

	const {
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		autoplay,
		pauseOnHover,
		autoplaySpeed,
		transitionSpeed,
		infiniteLoop,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		arrowColor,
		arrowDots,
		equalHeight,
		layoutConfig,
		rowGap,
	} = attributes;

	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', blockName );
	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const tcolumnsFallback = getFallbackNumber( tcolumns, 'tcolumns', blockName );
	const mcolumnsFallback = getFallbackNumber( mcolumns, 'mcolumns', blockName );
	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );
	const autoplaySpeedFallback = getFallbackNumber( autoplaySpeed, 'autoplaySpeed', blockName );
	const transitionSpeedFallback = getFallbackNumber( transitionSpeed, 'transitionSpeed', blockName );
	const arrowSizeFallback = getFallbackNumber( arrowSize, 'arrowSize', blockName );
	const arrowBorderSizeFallback = getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName );
	const isImageEnabled = ( attributes.displayPostImage === true ) ? 'uagb-post__image-enabled' : 'uagb-post__image-disabled';


	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){
				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGapFallback / articleWidth ) * 100;
				const parent = article?.current?.closest( '.uagb-post__image-position-background' );

				if ( parent ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGapFallback / 2 + 'px';

						}
					}
				}
			}

		}, 100 )
	};
	useEffect( () => {
		updateImageBgWidth();
    }, [ ] );

	useEffect( () => {
		updateImageBgWidth();
    }, [ props ] );

	useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShowFallback
			? latestPosts.slice( 0, postsToShowFallback )
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
					borderWidth: arrowBorderSizeFallback,
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
					borderWidth: arrowBorderSizeFallback,
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
		slidesToShow: columnsFallback,
		slidesToScroll: 1,
		autoplaySpeed: autoplaySpeedFallback,
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: transitionSpeedFallback,
		arrows,
		dots,
		rtl: false,
		afterChange: () => {
			if ( equalHeight ) {
				uagb_carousel_height( block_id ); // eslint-disable-line no-undef
			}
		},
		nextArrow: <NextArrow arrowSize={ arrowSizeFallback } />,
		prevArrow: <PrevArrow arrowSize={ arrowSizeFallback } />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: tcolumnsFallback,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: mcolumnsFallback,
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
				props.categoriesList,
				setAttributes
			) }
		</article>
	) );

	if ( columnsFallback >= displayPosts.length ) {
		return (
			<div
				className={ classnames(
					'is-carousel',
					`uagb-post__columns-${ columnsFallback }`,
					`uagb-post__columns-tablet-${ tcolumnsFallback }`,
					`uagb-post__columns-mobile-${ mcolumnsFallback }`,
					'uagb-post__items',
					className,
					'uagb-post-grid',
					'uagb-post__arrow-outside',
					`uagb-post__image-position-${ imgPosition }`,
					`${ equalHeightClass }`,
					isImageEnabled,
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

	return (
		<Slider
			className={ classnames(
				'is-carousel',
				`uagb-post__columns-${ columnsFallback }`,
				'uagb-post__items',
				className,
				'uagb-post-grid',
				'uagb-post__arrow-outside',
				'uagb-slick-carousel',
				`uagb-post__image-position-${ imgPosition }`,
				`${ equalHeightClass }`,
				isImageEnabled,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
			data-blog-id={ block_id }
			style={ 'dots' === arrowDots ? { padding: '0 0 35px 0' } : {} }
			{ ...settings }
		>
			{ all_posts }
		</Slider>
	);
}

export default memo( Blog );
