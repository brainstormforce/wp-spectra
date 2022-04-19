import React, { useState, useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import UAGB_Block_Icons from "@Controls/block-icons";
import getMatrixAlignment from "@Controls/getMatrixAlignment";
import Masonry from "react-masonry-component";
import Slider from "react-slick";
import Isotope from "isotope-layout";
// import "/assets/js/isotope.min";
// import "/assets/js/imagesloaded.min";

const ImageGallery = ( { attributes, setAttributes, block_id } ) => {
	const {
		tileSize,
		focusList,

		mediaGallery,
		feedLayout,
		useLightbox,
		imageDisplayCaption,

		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,

		imageCaptionLength,
		captionDisplayType,
		imageCaptionAlignment,
		imageDefaultCaption,
		imageDefaultCaptionClickable,

		carouselStartAt,
		carouselLoop,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselPauseOnHover,
		carouselTransitionSpeed,
		gridPages,
		gridPageNumber,
		generateSpecialTiles,

		feedPagination,
		paginateUseArrows,
		paginateUseDots,
		paginateUseLoader,
		paginateLimit,
		paginateButtonText,

		columnsDesk,
		columnsTab,
		columnsMob,
	} = attributes;

	const isGridPagesNeeded = feedPagination && ( feedLayout === "grid" || feedLayout === "masonry" );
	const [ slickDotHeight, setSlickDotHeight ] = useState( 0 );
	const [ focusUpdate, setFocusUpdate ] = useState( false );
	const slickCarousel = useRef( null );
	const isotopeElement = useRef( null );
	const isotopeSpacer = useRef( null );
	const isotope = useRef( null );
	const isotopeChildren = useRef( [] );

	useEffect( () => {
		// First check if media items selected are less than the column count currently used.
		( mediaGallery.length < columnsDesk ) && setAttributes( { columnsDesk: mediaGallery.length } );
		( mediaGallery.length < columnsTab ) && setAttributes( { columnsTab: mediaGallery.length } );
		( mediaGallery.length < columnsMob ) && setAttributes( { columnsMob: mediaGallery.length } ); 
		// Next Check if this is a carousel that needs dots, and set the height of the dots wrapper.
		if ( ( mediaGallery && paginateUseDots ) && ( feedLayout === 'carousel' ) ){
			setSlickDotHeight( 
				( mediaGallery.length > columnsDesk )
				? slickCarousel.current.children[0].querySelector( '.slick-dots' ).clientHeight
				: 0
			);
		}
		// Else check if this is tiled and apply focus for the images that need it.
		else if ( feedLayout === 'tiled' ){
			// let emptyFocus = ( focusList.length === 0 ) ? true : false;
			mediaGallery.forEach( ( image ) => {
				// if ( emptyFocus ){
				// 	focusList[ image.id ] = false;
				// }
				if ( isotopeChildren.current[ image.id ] !== undefined && isotopeChildren.current[ image.id ] !== null ){
					if ( focusList[ image.id ] && ! isotopeChildren.current[ image.id ].classList.contains( 'uag-image-gallery-media-wrapper--focus' ) ){
						isotopeChildren.current[ image.id ].classList.add( 'uag-image-gallery-media-wrapper--focus' );
					}
				}
			} );
		}
	}, [ JSON.stringify( mediaGallery ) ] );

	useEffect( () => {
		setTimeout( () => {
			switch ( feedLayout ) {
				case 'tiled':
					const isotopeChild = isotopeElement.current.querySelector( '.uag-image-gallery__layout--tiled' );
					setAttributes( { tileSize: isotopeSpacer.current.getBoundingClientRect().width } );
					isotope.current = new Isotope( isotopeChild, {
						itemSelector: '.uag-image-gallery-media-wrapper',
						layoutMode: 'masonry',
						// percentPosition: true,
						masonry: {
							columnWidth: '.uag-image-gallery-media-spacer',
							// horizontalOrder: true,
						},
					} );
					imagesLoaded( isotopeChild ).on( 'progress', ( theInstance, theImage ) => {
						if ( generateSpecialTiles && theImage.isLoaded ){
							createSpecialTile( theImage.img );
							isotope.current.layout();
						}
					} );
					// isotope.current.layout();
					break;
				default:
					( isotope.current ) && isotope.current.destroy();
					// isotope.current.destroy();
					break;
			}
		}, 50 );
	}, [
		JSON.stringify( mediaGallery ),
		feedLayout,
		generateSpecialTiles,
		columnsDesk,
		columnsTab,
		columnsMob,
		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,
	] );

	useEffect ( () => {
		if ( feedLayout === 'tiled' ){
			( setFocusUpdate( true ) );
			if ( useLightbox ){
				for ( let i = 0; i < isotopeChildren.current.length; i++ ){
					if ( isotopeChildren.current[ i ] !== undefined && isotopeChildren.current[ i ] !== null ){
						isotopeChildren.current[ i ].classList.add( 'uag-image-gallery-media--clickable' );
					}
				}
			}
			else{
				for ( let i = 0; i < isotopeChildren.current.length; i++ ){
					if ( isotopeChildren.current[ i ] !== undefined && isotopeChildren.current[ i ] !== null ){
						isotopeChildren.current[ i ].classList.remove( 'uag-image-gallery-media--clickable' );
					}
				}
			}
		}
	}, [ useLightbox, feedLayout ] );

	useEffect ( () => {
		if( ! focusUpdate ){
			return;
		}
		// if ( focusList.length === 0 ){
		// 	focusList[ image.id ] = false;
		// }
		// isotopeChildren.current = isotopeChildren.current.slice( 0, focusList.length );
		for ( let i = 0; i < focusList.length; i++ ){
			if ( focusList[ i ] !== undefined && isotopeChildren.current[ i ] !== undefined && isotopeChildren.current[ i ] !== null ){
				focusList[ i ]
					? isotopeChildren.current[ i ].classList.add( 'uag-image-gallery-media-wrapper--focus' )
					: isotopeChildren.current[ i ].classList.remove( 'uag-image-gallery-media-wrapper--focus' );
			}
		}
		( isotope.current ) && isotope.current.layout();
		setFocusUpdate( false );
	}, [ focusUpdate ] );

	const SlickNextArrow = () => (
		<button
			type="button"
			data-role="none"
			className={ classnames(
				`uag-image-gallery__control-arrows`,
				`uag-image-gallery__control-arrows--${ feedLayout }`,
				{
					"slick-next": ( feedLayout === "carousel" || feedLayout === "tiled" ),
					"slick-arrow": ( feedLayout === "carousel" || feedLayout === "tiled" ),
				}
			) }
			aria-label="Next"
			tabIndex="0"
			data-direction="Next"
			onClick={ () =>
				feedLayout === "grid"
					? setAttributes( { gridPageNumber: gridPageNumber + 1 } )
					: ""
			}
			disabled={ feedLayout === "grid" && gridPageNumber === gridPages }
		>
			{ UAGB_Block_Icons.carousel_right }
		</button>
	);

	const SlickPrevArrow = () => (
		<button
			type="button"
			data-role="none"
			className={ classnames(
				`uag-image-gallery__control-arrows`,
				`uag-image-gallery__control-arrows--${ feedLayout }`,
				{
					"slick-prev": feedLayout === "carousel",
					"slick-arrow": feedLayout === "carousel",
				}
			) }
			aria-label="Prev"
			tabIndex="0"
			data-direction="Prev"
			onClick={ () =>
				feedLayout === "grid"
					? setAttributes( { gridPageNumber: gridPageNumber - 1 } )
					: ""
			}
			disabled={ feedLayout === "grid" && gridPageNumber === 1 }
		>
			{ UAGB_Block_Icons.carousel_left }
		</button>
	);

	const carouselSettings = {
		arrows: paginateUseArrows,
		dots: paginateUseDots,
		initialSlide: carouselStartAt,
		infinite: carouselLoop,
		autoplay: carouselAutoplay,
		autoplaySpeed: carouselAutoplaySpeed,
		pauseOnHover: carouselPauseOnHover,
		speed: carouselTransitionSpeed,
		slidesToShow: columnsDesk,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: columnsTab,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: columnsMob,
				},
			},
		],
	};

	const lightboxSettings = {
		arrows: false,
		dots: false,
		draggable: false,
		fade: true,
		infinite: false,
		lazyLoad: true,
		swipe: false,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
	};

	const lightboxNavSettings = {
		arrows: false,
		centerMode: true,
		dots: false,
		infinite: false,
		slidesToShow: 5,
		variableWidth: true,
	};

	const svgFocus = ( image ) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			className="uag-image-gallery__control-focus"
			onClick={ () => alterFocus( image, true ) }
		>
			<path d="M6,4C4.9,4,4,4.9,4,6v4.375h1.5V6c0-0.3,0.2-0.5,0.5-0.5h4.376V4H6z"/>
			<path d="M20,6c0-1.1-0.9-2-2-2h-4.375v1.5H18c0.299,0,0.5,0.2,0.5,0.5v4.376H20V6z"/>
			<path d="M6,20c-1.1,0-2-0.9-2-2v-4.375h1.5V18c0,0.3,0.2,0.5,0.5,0.5h4.376V20H6z"/>
			<path d="M20,18c0,1.1-0.9,2-2,2h-4.375v-1.5H18c0.299,0,0.5-0.199,0.5-0.5v-4.375H20V18z"/>
		</svg>
	);

	const svgUnfocus = ( image ) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="37 0.083 24 24"
			className="uag-image-gallery__control-focus"
			onClick={ () => alterFocus( image, false ) }
		>
			<path d="M45.791,10.375c1.1,0,2-0.9,2-2V4h-1.5v4.375c0,0.3-0.2,0.5-0.5,0.5h-4.376v1.5H45.791z"/>
			<path d="M51.041,8.376c0,1.1,0.9,2,2,2h4.375v-1.5h-4.375c-0.299,0-0.5-0.2-0.5-0.5V4h-1.5V8.376z"/>
			<path d="M45.791,13.625c1.1,0,2,0.9,2,2V20h-1.5v-4.375c0-0.3-0.2-0.5-0.5-0.5h-4.376v-1.5H45.791z"/>
			<path d="M51.041,15.625c0-1.1,0.9-2,2-2h4.375v1.5h-4.375c-0.299,0-0.5,0.199-0.5,0.5V20h-1.5V15.625z"/>
		</svg>
	);

	const getGridPageChunk = ( allMedia ) => allMedia.slice(
		( gridPageNumber - 1 ) * paginateLimit,
		gridPageNumber * paginateLimit
	);

	const alterFocus = ( image, needsFocus ) => {
		let updatedFocusPairs = focusList;
		updatedFocusPairs[ image.id ] = needsFocus;
		setAttributes( { focusList: updatedFocusPairs } );
		setFocusUpdate( true );
	}

	const createSpecialTile = ( imageElement ) => {
		// Check if one dimension is greater than 2 times - half of the other dimension.
		if ( imageElement.naturalWidth >= ( imageElement.naturalHeight * 2 ) - ( imageElement.naturalHeight / 2 ) ){
			imageElement.parentElement.parentElement.classList.add( 'uag-image-gallery-media-wrapper--wide');
			imageElement.parentElement.classList.add( 'uag-image-gallery-media--tiled-wide');
			// isotope.current.layout();
		}
		else if ( imageElement.naturalHeight >= ( imageElement.naturalWidth * 2 ) - ( imageElement.naturalWidth / 2 ) ){
			imageElement.parentElement.parentElement.classList.add( 'uag-image-gallery-media-wrapper--tall');
			imageElement.parentElement.classList.add( 'uag-image-gallery-media--tiled-tall');
			// isotope.current.layout();
		}
	};

	const renderGridPagintion = () => (
		<div className={ classnames( `uag-image-gallery__control-wrapper` ) }>
			<SlickPrevArrow />
			<ul className={ classnames( `uag-image-gallery__control-dots` ) }>
				{ [...Array( gridPages ) ].map( ( pageData, pageIndex ) => (
					<li
						key={ pageIndex }
						className={ classnames( "uag-image-gallery__control-dot", {
							"uag-image-gallery__control-dot--active":
								pageIndex === gridPageNumber - 1,
						} ) }
						data-go-to={ pageIndex + 1 }
					>
						<button
							onClick={ () => setAttributes( { gridPageNumber: pageIndex + 1 } ) }
							// 	setAttributes !== "inapplicable"
							// 		? setAttributes( {
							// 				gridPageNumber: pageIndex + 1,
							// 		  } )
							// 		: ""
							// }
						/>
					</li>
				) ) }
			</ul>
			<SlickNextArrow />
		</div>
	);

	const renderMasonryPagintion = () => (
		<>
			{ paginateUseLoader ? (
				<div className="uag-image-gallery__control-loader">
					<div className="uag-image-gallery__control-loader--1"></div>
					<div className="uag-image-gallery__control-loader--2"></div>
					<div className="uag-image-gallery__control-loader--3"></div>
				</div>
			) : (
				<div className="uag-image-gallery__control-wrapper">
					<div
						className={ classnames( `uag-image-gallery__control-button` ) }
						aria-label={ __(
							paginateButtonText,
							'ultimate-addons-for-gutenberg'
						) }
						tabIndex="0"
					>
						{ __(
							paginateButtonText,
							'ultimate-addons-for-gutenberg'
						) }
					</div>
				</div>
			) }
		</>
	);

	const renderLightbox = () => (
		<div className="uag-image-gallery__control-lightbox">
			<h1 className="doofTop">Hi!</h1>
			<h1 className="doofBottom">Bye!</h1>
			{/* <div className="uag-image-gallery__control-lightbox--preview">
				<Slider
					className="uagb-slick-carousel"
					asNavFor={ slickLightboxNav }
					ref={ ( lightbox ) => setSlickLightbox( lightbox ) }
					{ ...lightboxSettings }
				>
					{ mediaGallery.map( ( media ) => renderLightboxImage( media ) ) }
				</Slider>
			</div>
			<Slider
				className="uagb-slick-carousel"
				asNavFor={ slickLightbox }
				ref={ ( nav ) => setSlickLightboxNav( nav ) }
				{ ...lightboxNavSettings }
			>
				{ mediaGallery.map( ( media ) => renderLightboxImage( media ) ) }
			</Slider> */}
		</div>
	);

	const renderLightboxImage = ( media ) => (
		<div>
			<img
				className= "uag-image-gallery-media__lightbox"
				src={ media.url }
			/>
		</div>
	);

	
	const renderFocusControl = ( mediaObject ) => {
		return focusList[ mediaObject.id ] ? svgUnfocus( mediaObject ) : svgFocus( mediaObject );	
	}

	const renderIsoRef = () => (
		<div className="uag-image-gallery__iso-ref-wrapper" ref={ isotopeElement }>
			{ renderGallery() }
		</div>
	);

	const renderGallery = () => {
		switch ( feedLayout ) {
			case "grid":
				// const gridLayout =
				// 	feedPagination && setAttributes === "inapplicable"
				// 		? "isogrid"
				// 		: "grid";
				const gridLayout = 'grid'; 
				return (
					<>
						<div
							className={ classnames(
								`uag-image-gallery`,
								`uag-image-gallery__layout--${ gridLayout }`,
								`uag-image-gallery__layout--${ gridLayout }-col-${ columnsDesk }`,
								`uag-image-gallery__layout--${ gridLayout }-col-tab-${ columnsTab }`,
								`uag-image-gallery__layout--${ gridLayout }-col-mob-${ columnsMob }`
							) }
						>
							{ renderImageLooper() }
						</div>
						{ feedPagination && renderGridPagintion() }
					</>
				);
			case "masonry":
				return(
					<>
						<Masonry
							className={ classnames(
								`uag-image-gallery`,
								`uag-image-gallery__layout--${ feedLayout }`,
								`uag-image-gallery__layout--${ feedLayout }-col-${ columnsDesk }`,
								`uag-image-gallery__layout--${ feedLayout }-col-tab-${ columnsTab }`,
								`uag-image-gallery__layout--${ feedLayout }-col-mob-${ columnsMob }`
							) }
							updateOnEachImageLoad={ true }
						>
							{ renderImageLooper() }
						</Masonry>
						{ feedPagination && renderMasonryPagintion() }
					</>
				);
			case "tiled":
				return (
					<>
						<div
							className={ classnames(
								`uag-image-gallery`,
								`uag-image-gallery__layout--${ feedLayout }`,
								`uag-image-gallery__layout--${ feedLayout }-col-${ columnsDesk }`,
								`uag-image-gallery__layout--${ feedLayout }-col-tab-${ columnsTab }`,
								`uag-image-gallery__layout--${ feedLayout }-col-mob-${ columnsMob }`
							) }
						>
							<div className="uag-image-gallery-media-spacer" ref={ isotopeSpacer }></div>
							{ renderImageLooper() }
						</div>
						{/* { useLightbox && renderLightbox() } */}
					</>
				);
			case "carousel":
				return (
					<div
						className={ classnames(
							`uag-image-gallery`,
							`uag-image-gallery__layout--${ feedLayout }`
						)}
						ref={ slickCarousel }
						style={ { 'margin-bottom': `${ slickDotHeight }px` } }
					>
						<Slider
							className={ classnames( `uagb-slick-carousel` ) }
							{ ...carouselSettings }
						>
							{ renderImageLooper() }
						</Slider>
					</div>
				);
		}
	};

	const renderImageLooper = () => {
		isGridPagesNeeded && setAttributes( {
			gridPages: Math.ceil( mediaGallery.length / paginateLimit ),
		} );
		const paginatedMedia = isGridPagesNeeded
			? getGridPageChunk( mediaGallery )
			: mediaGallery;
		return paginatedMedia.map( ( media ) =>
			renderImage( media )
		);
	};

	const renderImage = ( mediaObject ) => (
		<div
			className={ classnames(
				'uag-image-gallery-media-wrapper',
				{ 'uag-image-gallery-media--clickable': ( feedLayout !== 'tiled' && useLightbox ) }
			) }
			key={ mediaObject.id }
			ref={ ( element ) => ( isotopeChildren.current[ mediaObject.id ] = element ) }
		>
			{ renderThumbnail( mediaObject ) }
			{ ( feedLayout === 'tiled' ) && renderFocusControl( mediaObject ) }
		</div>
	);

	const renderThumbnail = ( mediaObject ) => (
		<>
			{ captionDisplayType === "bar-outside" &&
				getMatrixAlignment( imageCaptionAlignment, 1 ) === "top" &&
				imageDisplayCaption && (
					<div
						className={ classnames(
							`uag-image-gallery-media__thumbnail-caption-wrapper`,
							`uag-image-gallery-media__thumbnail-caption-wrapper--${ captionDisplayType }`
						) }
					>
						{ renderCaption( mediaObject ) }
					</div>
				) }
			<div className={ classnames(
				"uag-image-gallery-media",
				`uag-image-gallery-media--${ feedLayout }`,
			) }>
				<img
					className={ classnames(
						"uag-image-gallery-media__thumbnail",
						`uag-image-gallery-media__thumbnail--${ feedLayout }`
					)}
					src={ mediaObject.url }
				/>
				<div className="uag-image-gallery-media__thumbnail-blurrer"></div>
				{ imageDisplayCaption
					? (
						captionDisplayType !== "bar-outside" && (
							<div
								className={ classnames(
									`uag-image-gallery-media__thumbnail-caption-wrapper`,
									`uag-image-gallery-media__thumbnail-caption-wrapper--${ captionDisplayType }`
								) }
							>
								{ renderCaption( mediaObject ) }
							</div>
						)
					)
					: (
						<div
							className={ classnames(
								`uag-image-gallery-media__thumbnail-caption-wrapper`,
								`uag-image-gallery-media__thumbnail-caption-wrapper--overlay`
							) }
						></div>
					)
				}
			</div>
			{ captionDisplayType === "bar-outside" &&
				getMatrixAlignment( imageCaptionAlignment, 1 ) !== "top" &&
				imageDisplayCaption && (
					<div
						className={ classnames(
							`uag-image-gallery-media__thumbnail-caption-wrapper`,
							`uag-image-gallery-media__thumbnail-caption-wrapper--${ captionDisplayType }`
						) }
					>
						{ renderCaption( mediaObject ) }
					</div>
				) }
		</>
	);

	const renderCaption = ( mediaObject ) => {
		// Utilizing Constant instead of Attribute for always active state.
		const imageCaptionOnlyWords = true;
		let needsEllipsis = mediaObject.caption ? true : false;
		let limitedCaption = mediaObject.caption
			? mediaObject.caption
			: ( mediaObject.url
				? ( useLightbox
					? imageDefaultCaptionClickable
					: imageDefaultCaption
				)
				: "Unable to load image"
			);
		if ( needsEllipsis && mediaObject.caption.length <= imageCaptionLength ) {
			// The caption is already below the limiter.
			needsEllipsis = false;
		} else if ( needsEllipsis ) {
			limitedCaption = limitedCaption.substr( 0, imageCaptionLength );
			if ( imageCaptionOnlyWords ) {
				if ( limitedCaption.lastIndexOf( " " ) === -1 ) {
					// There's only 1 word.
					if ( mediaObject.caption.lastIndexOf( " " ) === -1 ) {
						// There's only 1 word in the original caption.
						if (
							limitedCaption.length ===
							mediaObject.caption.split( " " )[ 0 ].length
						) {
							// The limited caption is the same as the original.
							needsEllipsis = false;
						} else {
							// The limited caption differs from the original.
							limitedCaption = "";
						}
					} else {
						// There's more than 1 word in the original caption.
						if (
							limitedCaption.length !==
							mediaObject.caption.split( " " )[ 0 ].length
						) {
							// The limited caption is smaller than 1 word in the original.
							limitedCaption = "";
						}
					}
				} else {
					// There is a space
					if ( limitedCaption.length === mediaObject.caption.length ) {
						// The limited caption is the same as the original.
						needsEllipsis = false;
					} else {
						// The limited caption differs from the original
						if (
							mediaObject.caption.charAt(
								limitedCaption.length
							) !== " "
						) {
							// The end of the limited text is not a word
							limitedCaption = limitedCaption.substr(
								0,
								Math.min(
									limitedCaption.length,
									limitedCaption.lastIndexOf( " " )
								)
							);
						}
					}
				}
			}
			// Remove Trailing Characters
			switch ( limitedCaption.charAt( limitedCaption.length - 1 ) ) {
				case ",":
				case ".":
				case " ":
				case "'":
					limitedCaption = limitedCaption.slice(
						0,
						limitedCaption.length - 1
					);
			}
		}
		return (
			<div
				className={ classnames(
					`uag-image-gallery-media__thumbnail-caption`,
					`uag-image-gallery-media__thumbnail-caption--${ captionDisplayType }`
				) }
			>
				{ `${
					__( limitedCaption, 'ultimate-addons-for-gutenberg' )
				}${
					needsEllipsis ? " ..." : ""
				}` }
			</div>
		);
	};

	const renderEmpty = () => (
		<div className="uag-image-gallery-init-wrapper">
			{ UAGB_Block_Icons.image_gallery }
			<h3>
				{ __(
					`Spectra - Image Gallery`,
					'ultimate-addons-for-gutenberg'
				) }
			</h3>
			<p>
				{ __( `No images to display...`, 'ultimate-addons-for-gutenberg' ) }
			</p>
		</div>
	);


	return ( mediaGallery ) ? renderIsoRef() : renderEmpty();
};

export default ImageGallery;
