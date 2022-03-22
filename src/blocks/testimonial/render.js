import classnames from 'classnames';
import PositionClasses from './classes';
import UAGB_Block_Icons from '@Controls/block-icons';
import React, { lazy, Suspense, useLayoutEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TestimonialImage from './components/Image';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Slider = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/react-slick" */ 'react-slick'
	)
);
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const {
		isPreview,
		test_block,
		imagePosition,
		columns,
		tcolumns,
		mcolumns,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
		autoplaySpeed,
		arrowColor,
	} = attributes;

	const NextArrow = () => {
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
	};

	const PrevArrow = () => {
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
	};

	const dots =
		'dots' === arrowDots || 'arrows_dots' === arrowDots ? true : false;
	const arrows =
		'arrows' === arrowDots || 'arrows_dots' === arrowDots ? true : false;

	const settings = {
		accessibility: false,
		slidesToShow: columns,
		slidesToScroll: 1,
		autoplaySpeed,
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: transitionSpeed,
		arrows,
		dots,
		rtl: false,
		draggable: false,
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

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMTcuMTExLDEzOC44MjljMCwxLjg5Ni0xLjUzNSwzLjQzMi0zLjQzLDMuNDMySDM2LjMxN2MtMS44OTMsMC0zLjQzLTEuNTM2LTMuNDMtMy40MzJ2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzctMy40MywzLjQzLTMuNDNoMjc3LjM2NGMxLjg5NSwwLDMuNDMsMS41MzQsMy40MywzLjQzVjEzOC44Mjl6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk5Ljk0OSwxNTYuNDA4YzAsMS44OTMtMS41MzUsMy40MjktMy40MywzLjQyOUg1My40OGMtMS44OTUsMC0zLjQzMS0xLjUzNi0zLjQzMS0zLjQyOXYtMC40Mw0KCQkJCWMwLTEuODkzLDEuNTM2LTMuNDI5LDMuNDMxLTMuNDI5SDI5Ni41MmMxLjg5NSwwLDMuNDMsMS41MzYsMy40MywzLjQyOVYxNTYuNDA4eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI4Mi43ODcsMTczLjk4NWMwLDEuODk1LTEuNTM2LDMuNDI5LTMuNDMxLDMuNDI5SDcwLjY0M2MtMS44OTQsMC0zLjQzLTEuNTM0LTMuNDMtMy40Mjl2LTAuNDI3DQoJCQkJYzAtMS44OTYsMS41MzYtMy40MzIsMy40My0zLjQzMmgyMDguNzE0YzEuODk1LDAsMy40MzEsMS41MzYsMy40MzEsMy40MzJWMTczLjk4NXoiLz4NCgkJPC9nPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjA5LjUsMjAxLjMzNGMwLDIuMjA5LTEuNzkxLDQtNCw0aC02MWMtMi4yMDksMC00LTEuNzkxLTQtNFYyMDBjMC0yLjIwOSwxLjc5MS00LDQtNGg2MQ0KCQkJYzIuMjA5LDAsNCwxLjc5MSw0LDRWMjAxLjMzNHoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE5NS4wODMsMjE1LjU4M2MwLDEuMTUtMC45MzMsMi4wODMtMi4wODQsMi4wODNIMTU3Yy0xLjE1LDAtMi4wODMtMC45MzMtMi4wODMtMi4wODNsMCwwDQoJCQljMC0xLjE1MSwwLjkzMy0yLjA4NCwyLjA4My0yLjA4NGgzNS45OTlDMTk0LjE1LDIxMy40OTksMTk1LjA4MywyMTQuNDMyLDE5NS4wODMsMjE1LjU4M0wxOTUuMDgzLDIxNS41ODN6Ii8+DQoJCTxnPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTY5LjEyNSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCQk8Y2lyY2xlIGZpbGw9IiNEQkRDREUiIGN4PSIxNzUiIGN5PSIyMzMuMzc1IiByPSIxLjM3NSIvPg0KCQkJPGNpcmNsZSBmaWxsPSIjREJEQ0RFIiBjeD0iMTgwLjg3NSIgY3k9IjIzMy4zNzUiIHI9IjEuMzc1Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RCRENERSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMTcuNjc3LDE4MC4zNzUgMTIuOTgyLDE4NC42NzggDQoJCTE3LjY3NSwxODkuMzQ4IAkiLz4NCgk8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREJEQ0RFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIzMzIuMzIxLDE4MC4zNzUgMzM3LjAxNywxODQuNjc4IA0KCQkzMzIuMzIzLDE4OS4zNDggCSIvPg0KPC9nPg0KPC9zdmc+DQo=';

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<Suspense fallback={ lazyLoader() }>
				<Slider
					className={ classnames(
						'is-carousel',
						`uagb-tm__columns-${ columns }`,
						'uagb-tm__items'
					) }
					{ ...settings }
				>
					{ test_block.map( ( test, index ) => (
						<div
							className={ classnames(
								'uagb-testimonial__wrap',
								...PositionClasses( attributes )
							) }
							key={ 'wrap-' + index }
						>
							<div
								className="uagb-tm__content"
								key={ 'tm_content-' + index }
							>
								<div className="uagb-tm__overlay"></div>
								{ ( imagePosition === 'top' ||
									imagePosition === 'left' ) && (
									<TestimonialImage
										attributes={ attributes }
										index_value={ index }
									/>
								) }

								<div className="uagb-tm__text-wrap">
									{
										// Get description.
										<>
											<Description
												attributes={ attributes }
												setAttributes={ setAttributes }
												props={ props }
												index_value={ index }
											/>
										</>
									}
									<div className="uagb-tm__meta-inner">
										{ imagePosition === 'bottom' && (
											<TestimonialImage
												attributes={ attributes }
												index_value={ index }
											/>
										) }

										{
											<>
												<div
													className="uagb-testimonial-details"
													key={ 'tm_wraps-' + index }
												>
													<AuthorName
														attributes={
															attributes
														}
														setAttributes={
															setAttributes
														}
														props={ props }
														index_value={ index }
													/>
													<Company
														attributes={
															attributes
														}
														setAttributes={
															setAttributes
														}
														props={ props }
														index_value={ index }
													/>
												</div>
											</>
										}
									</div>
								</div>
								{ imagePosition === 'right' && (
									<TestimonialImage
										attributes={ attributes }
										index_value={ index }
									/>
								) }
							</div>
						</div>
					) ) }
				</Slider>
			</Suspense>
		</div>
	);
};
export default React.memo( Render );
