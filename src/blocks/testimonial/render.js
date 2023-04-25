import classnames from 'classnames';
import PositionClasses from './classes';
import UAGB_Block_Icons from '@Controls/block-icons';
import TestimonialImage from './components/newImage';
import { useEffect, useLayoutEffect, memo, useRef } from '@wordpress/element';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import Slider from 'react-slick';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

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
	const blockName = props.name.replace( 'uagb/', '' );
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const {
		block_id,
		test_block,
		imagePosition,
		columns,
		tcolumns,
		mcolumns,
		test_item_count,
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
		equalHeight,
		imageWidth,
	} = attributes;

	const sliderRef = useRef();

	const NextArrow = ( { onClick } ) => {
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
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick={ onClick }
			>
				{ UAGB_Block_Icons.carousel_right }
			</button>
		);
	};

	const PrevArrow = ( { onClick } ) => {
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
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick={ onClick }
			>
				{ UAGB_Block_Icons.carousel_left }
			</button>
		);
	};

	const dots = 'dots' === arrowDots || 'arrows_dots' === arrowDots ? true : false;
	const arrows = 'arrows' === arrowDots || 'arrows_dots' === arrowDots ? true : false;

	const equalHeightClass = equalHeight ? 'uagb-post__carousel_equal-height' : '';

	const settings = {
		accessibility: false,
		slidesToShow:
			// eslint-disable-next-line no-nested-ternary
			deviceType === 'Desktop'
				? getFallbackNumber( columns, 'columns', blockName )
				: deviceType === 'Tablet'
				? getFallbackNumber( tcolumns, 'columns', blockName )
				: getFallbackNumber( mcolumns, 'columns', blockName ),
		slidesToScroll: 1,
		autoplaySpeed: getFallbackNumber( autoplaySpeed, 'autoplaySpeed', blockName ),
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: getFallbackNumber( transitionSpeed, 'transitionSpeed', blockName ),
		arrows,
		dots,
		rtl: false,
		afterChange: () => {
			if ( equalHeight ) {
				uagb_carousel_height( block_id ); // eslint-disable-line no-undef
			}
		},
		draggable: false,
		nextArrow: <NextArrow arrowSize={ arrowSize } onClick={ sliderRef.slickNext } />,
		prevArrow: <PrevArrow arrowSize={ arrowSize } onClick={ sliderRef.slickPrev } />,
	};

	const isGridLayout = test_item_count === columns ? 'uagb-post__carousel_notset' : '';
	const isGridLayoutTablet = test_item_count === tcolumns ? 'uagb-post__carousel_notset-tablet' : '';
	const isGridLayoutMobile = test_item_count === mcolumns ? 'uagb-post__carousel_notset-mobile' : '';

	// image size.
	const imageArray =
		attributes.test_block[ 0 ]?.image || attributes.test_block[ 1 ]?.image || attributes.test_block[ 2 ]?.image;
	let url = '';
	let urlCheck = '';

	if ( imageArray ) {
		const image = imageArray;

		if ( typeof image !== 'undefined' && image !== null && image !== '' ) {
			urlCheck = image.url;
		}

		if ( urlCheck !== '' ) {
			const size = image.sizes;
			const imageSize = attributes.imageSize;
			if ( typeof size !== 'undefined' && typeof size[ imageSize ] !== 'undefined' ) {
				url = size[ imageSize ].url;
			} else {
				url = urlCheck;
			}
		}
	}

	useEffect( () => {
		getImageHeightWidth( url, setAttributes, { type: 'width', value: imageWidth } );
	}, [ imageWidth, url ] );

	return (
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`${ equalHeightClass }`,
				isGridLayout,
				isGridLayoutTablet,
				isGridLayoutMobile
			) }
		>
			<Slider
				className={ classnames(
					'is-carousel',
					`uagb-tm__columns-${ getFallbackNumber( columns, 'columns', blockName ) }`,
					'uagb-tm__items'
				) }
				{ ...settings }
				ref={ sliderRef }
			>
				{ test_block.map( ( test, index ) => (
					<div
						className={ classnames( 'uagb-testimonial__wrap', ...PositionClasses( attributes ) ) }
						key={ 'wrap-' + index }
					>
						<div className="uagb-tm__content" key={ 'tm_content-' + index }>
							<div className="uagb-tm__overlay"></div>
							{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
								<TestimonialImage attributes={ attributes } index_value={ index } />
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
										<TestimonialImage attributes={ attributes } index_value={ index } />
									) }

									{
										<>
											<div className="uagb-testimonial-details" key={ 'tm_wraps-' + index }>
												<AuthorName
													attributes={ attributes }
													setAttributes={ setAttributes }
													props={ props }
													index_value={ index }
												/>
												<Company
													attributes={ attributes }
													setAttributes={ setAttributes }
													props={ props }
													index_value={ index }
												/>
											</div>
										</>
									}
								</div>
							</div>
							{ imagePosition === 'right' && (
								<TestimonialImage attributes={ attributes } index_value={ index } />
							) }
						</div>
					</div>
				) ) }
			</Slider>
		</div>
	);
};
export default memo( Render );
