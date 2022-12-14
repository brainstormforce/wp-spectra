import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import React, { useMemo, useEffect, useRef } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { useDeviceType } from '@Controls/getPreviewType';
import { __ } from '@wordpress/i18n';

import Swiper, { Navigation, Pagination, Autoplay, EffectFade, EffectFlip, Manipulation } from 'swiper';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content },
	} = props;

	const deviceType = useDeviceType();
	const swiperRef = useRef();
	const sliderWrapRef = React.useRef();
	const sliderPaginationRef = useRef();
	const sliderNavPrevRef = useRef();
	const sliderNavNextRef = useRef();

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
		
		const sliderTemplate = [

			[ 'uagb/slider-child', {}, [
				[ 'uagb/container', { variationSelected: true }, [
						[ 'uagb/info-box', { 
							showIcon: false,
							ctaType: 'button',
							infoBoxTitle: __( 'Slide 1' , 'ultimate-addons-for-gutenberg' ),
							showCtaIcon: false,
							paddingBtnTop: 12,
							paddingBtnRight: 24,
							paddingBtnBottom: 12, 
							paddingBtnLeft: 24,
						} ],
					]		
				]
				]
			],
			[ 'uagb/slider-child', {}, [
				[ 'uagb/container', { variationSelected: true }, [
						[ 'uagb/info-box', { 
							showIcon: false,
							ctaType: 'button',
							infoBoxTitle: __( 'Slide 2' , 'ultimate-addons-for-gutenberg' ),
							showCtaIcon: false,
							paddingBtnTop: 12,
							paddingBtnRight: 24,
							paddingBtnBottom: 12, 
							paddingBtnLeft: 24,
						} ],
					]		
				]
			]
			],
			[ 'uagb/slider-child', {}, [
				[ 'uagb/container', { variationSelected: true }, [
						[ 'uagb/info-box', { 
							showIcon: false,
							ctaType: 'button',
							infoBoxTitle: __( 'Slide 3' , 'ultimate-addons-for-gutenberg' ),
							showCtaIcon: false,
							paddingBtnTop: 12,
							paddingBtnRight: 24,
							paddingBtnBottom: 12, 
							paddingBtnLeft: 24,
						} ],
					]		
				]
			]
			]	
		];

		return sliderTemplate;
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

	const initSlider = () => {

		const settings = {
			slidesPerView: 1,
			autoplay: false,
			speed: transitionSpeed,
			loop: false,
			effect: transitionEffect,
			pagination: displayDots ? {
				el: sliderPaginationRef.current,
				clickable: true,
			} : false, 
			allowTouchMove:false,
			navigation: displayArrows ? {
				nextEl: sliderNavNextRef.current,
				prevEl: sliderNavPrevRef.current,
			} : false,
			on: {
				beforeInit ( swiperInst ) {
					swiperRef.current = swiperInst;
					setSwiperInstance( swiperInst );
				},
			},
		}

		new Swiper( sliderWrapRef.current, {
			...settings,
			modules: [Navigation, Pagination,Autoplay,EffectFade, Manipulation, EffectFlip],
		} );
	}

	useEffect( () => {

		setTimeout( () => {
			
			if( sliderWrapRef.current ) {

				initSlider();
			}

		}, 500 );
		
	}, [] );

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

	useEffect( () => {

		if( swiperInstance ) {
			swiperInstance.destroy();
			initSlider();
		}

	}, [ transitionEffect, displayArrows, displayDots, transitionSpeed ] );
	

	return (
		isPreview ? '' :

		<div
			{ ...blockProps }
			key = { block_id }
		>
			<div className="swiper" ref={sliderWrapRef}>
				<div 
					{ ...innerBlocksProps }
				/>

				{ displayDots &&  
					<div className="swiper-pagination" ref={sliderPaginationRef}></div>
				}

				{ displayArrows &&
				<>
					<div className="swiper-button-prev" ref={sliderNavPrevRef}></div>
					<div className="swiper-button-next" ref={sliderNavNextRef}></div>
				</>
				}
			</div>
		</div>
	);
};
export default React.memo( Render );
