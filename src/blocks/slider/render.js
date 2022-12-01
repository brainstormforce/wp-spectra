import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useEffect, useRef } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { useDeviceType } from '@Controls/getPreviewType';

import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Manipulation, EffectFlip } from 'swiper';

import { Swiper } from 'swiper/react';
const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const deviceType = useDeviceType();
	const swiperRef = useRef();

	const {
		isPreview,
		transitionSpeed,
		slideItem,
		block_id,
		transitionEffect,
		swiperInstance,
		displayArrows,
		displayDots
	} = attributes;

	const getSliderTemplate = useMemo( () => {
		const childSlide = [];

		for ( let i = 0; i < slideItem; i++ ) {
			childSlide.push( [
				'uagb/slider-child',
				slide_content[ i ],
			] );
		}
		return childSlide;
	}, [ slideItem, slide_content ] );

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-slider-has-children' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${hasChildrenClass} uagb-slider-container uagb-slider-editor-wrap uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

    const innerBlocksProps = useInnerBlocksProps(
        {
			className: `swiper-wrapper`,
			slot: 'container-start'
		},
        {
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate,
			renderAppender: false
		}
    );

	const setSwiperInstance = ( swiper ) => {
		props.setAttributes( { swiperInstance: swiper } );
	}

	useEffect( () => {
		
		const { getSelectedBlock } = select( 'core/block-editor' );
        const selectedBlockData = getSelectedBlock();

		if( selectedBlockData && 'uagb/slider-child' === selectedBlockData.name ) {
			const {getBlockIndex} = select( 'core/block-editor' );
			
			const slideIndex = getBlockIndex( selectedBlockData.clientId ); 

			if( swiperInstance ) {
				swiperInstance.slideTo( slideIndex, transitionSpeed, false );
			}
		}

		if( swiperInstance ) {
			swiperInstance.update();
		}
		
	}, [ props ] );

	const switchToNextSlide = () => {
		if( swiperInstance && 'Desktop' !== deviceType ) {
			swiperInstance.slideNext( transitionSpeed );
		}
	}

	const switchToPrevSlide = () => {
		if( swiperInstance && 'Desktop' !== deviceType ) {
			swiperInstance.slidePrev( transitionSpeed );
		}
	}

	return (
		isPreview ? '' :

		<div
			{ ...blockProps }
			key = { block_id }
		>
			<Swiper
				onSwiper={setSwiperInstance}
				modules={[Navigation, Pagination, Scrollbar,Autoplay,EffectFade, EffectFlip, Manipulation]}
				autoplay={false}
				speed={transitionSpeed}
				pagination={ 
					! displayDots ? false : {
						clickable: true,
					}
				}
				allowTouchMove={false}
				loop={false}
				effect={transitionEffect}
				navigation={ 
					displayArrows ? {
						nextEl: '.uagb-block-' + block_id + ' .swiper-button-next',
						prevEl: '.uagb-block-' + block_id + ' .swiper-button-prev',
					} : false  
				}
				fadeEffect={{
					crossFade: true
				}}
				flipEffect={{
					slideShadows: false,
				}}
				onBeforeInit={( swiper ) => {
					swiperRef.current = swiper;
				}}
			>
				<div 
					{ ...innerBlocksProps }
				/>
			</Swiper>
			{ displayArrows &&
			<>
				<button onClick={() => switchToPrevSlide()} className="swiper-button-prev"></button>
				<button onClick={() => switchToNextSlide()} className="swiper-button-next"></button>
			</>
			}
		</div>
	);
};
export default React.memo( Render );
