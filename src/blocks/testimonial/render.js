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

	const previewImageData = 'data:image/png;base64,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';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
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
