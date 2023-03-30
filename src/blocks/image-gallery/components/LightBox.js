import { useState, useEffect, useRef } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import renderSVG from '@Controls/renderIcon';
import Swiper, { Lazy, Navigation, Thumbs } from 'swiper';

const Lightbox = ( { attributes, setAttributes, setLightboxPreview } ) => {
	const {
		mediaGallery,
		lightboxDisplayCaptions,
		lightboxThumbnails,
		lightboxDisplayCount,
		lightboxCloseIcon,
		imageDefaultCaption,
	} = attributes;

	const lightboxRef = useRef();
	const thumbnailRef = useRef();
	const [ lightboxSwiper, setLightboxSwiper ] = useState( null );
	const [ thumbnailSwiper, setThumbnailSwiper ] = useState( null );
	const [ lightboxTotal, setLightboxTotal ] = useState( 0 );
	const [ CurrentSlide, setCurrentSlide ] = useState( 0 );

	// Set the Lightbox Slider once the Ref is in use.
	useEffect( () => {
		const lightboxTimeout = setTimeout( () => {
			if ( lightboxRef.current ) {
				initLightboxSwiper();
			}
		}, 500 );
		return () => {
			clearTimeout( lightboxTimeout );
		};
	}, [ lightboxRef ] );

	// Set the Thumbnail Slider once the Ref is in use.
	useEffect( () => {
		const thumbnailTimeout = setTimeout( () => {
			if ( thumbnailRef.current ) {
				initThumbnailSwiper();
				if ( lightboxSwiper ) {
					lightboxSwiper.destroy();
					initLightboxSwiper();
				}
			}
		}, 500 );
		return () => {
			clearTimeout( thumbnailTimeout );
		};
	}, [ thumbnailRef ] );

	// Update the Sliders when the gallery is updated.
	useEffect( () => {
		setLightboxTotal( mediaGallery.length );
		if ( lightboxThumbnails && thumbnailSwiper ) {
			thumbnailSwiper.update();
		}
		if ( lightboxSwiper ) {
			lightboxSwiper.update();
		}
	}, [ mediaGallery ] );

	// Destroy and Recreate the Lightbox Slider when Thumbnails are created.
	useEffect( () => {
		if ( lightboxSwiper ) {
			lightboxSwiper.destroy();
			initLightboxSwiper();
		}
	}, [ thumbnailSwiper ] );

	// Initialize the Lightbox Slider.
	const initLightboxSwiper = () => {
		// Lightbox Swiper Settings.
		const settings = {
			lazy: true,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				beforeInit( swiperInstance ) {
					setLightboxSwiper( swiperInstance );
				},
				activeIndexChange( swiperInstance ) {
					setCurrentSlide( swiperInstance.activeIndex );
					if ( thumbnailSwiper ) {
						thumbnailSwiper.slideTo( swiperInstance.activeIndex );
					}
				},
			},
			thumbs: {
				swiper: thumbnailSwiper,
			},
		};

		// Lightbox Swiper Creation with Modules.
		new Swiper( lightboxRef.current, {
			...settings,
			modules: [ Lazy, Navigation, Thumbs ],
		} );
	};

	// Initialize the Thumbnail Slider.
	const initThumbnailSwiper = () => {
		// Thumbnail Swiper Settings.
		const settings = {
			centeredSlides: true,
			slidesPerView: 7,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			on: {
				beforeInit( swiperInstance ) {
					setThumbnailSwiper( swiperInstance );
				},
			},
		};

		// Thumbnail Swiper Creation with Modules.
		new Swiper( thumbnailRef.current, {
			...settings,
		} );
	};

	// Render the Lightbox Slider.
	const renderLightbox = () => (
		<div className="swiper spectra-image-gallery__control-lightbox--main" ref={ lightboxRef }>
			<div className="swiper-wrapper">
				{ mediaGallery.map( ( media ) => (
					<div className="swiper-slide" key={ media.id }>
						<img className="swiper-lazy" data-src={ media.url } alt={ media.alt } />
						<div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
						{ lightboxDisplayCaptions && (
							<div
								className={ applyFilters(
									'spectra.image-gallery.render.lightboxCaptionClasses',
									'spectra-image-gallery__control-lightbox--caption',
									media.id,
									attributes
								) }
							>
								{ media.caption ? media.caption : imageDefaultCaption }
							</div>
						) }
					</div>
				) ) }
			</div>
			<div className="swiper-button-next" />
			<div className="swiper-button-prev" />
		</div>
	);

	// Render the Thumbnail Slider.
	const renderThumbnails = () => (
		<div
			className="spectra-image-gallery__control-lightbox--thumbnails-wrapper"
			style={ {
				display: lightboxThumbnails ? undefined : 'none',
			} }
		>
			<div className="swiper spectra-image-gallery__control-lightbox--thumbnails" ref={ thumbnailRef }>
				<div className="swiper-wrapper">
					{ mediaGallery.map( ( media ) => (
						<div className="swiper-slide" key={ media.id }>
							<img src={ media.sizes.thumbnail.url } alt={ media.alt } />
						</div>
					) ) }
				</div>
			</div>
		</div>
	);

	return (
		<div className="spectra-image-gallery__control-lightbox">
			{ renderLightbox() }
			{ renderThumbnails() }
			{ lightboxDisplayCount && (
				<div className="spectra-image-gallery__control-lightbox--count">
					{ `${ CurrentSlide + 1 } / ${ lightboxTotal }` }
				</div>
			) }
			{ lightboxCloseIcon && (
				<button
					className="spectra-image-gallery__control-lightbox--close"
					onClick={ () => setLightboxPreview( false ) }
				>
					{ renderSVG( lightboxCloseIcon, setAttributes ) }
				</button>
			) }
		</div>
	);
};

export default Lightbox;
