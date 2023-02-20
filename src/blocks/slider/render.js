import { useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import React, { useMemo, useEffect, useRef } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];
import { useDeviceType } from '@Controls/getPreviewType';
import { __ } from '@wordpress/i18n';

import { Navigation, Pagination, Autoplay, Manipulation } from 'swiper';
import { Swiper } from 'swiper/react';

const Render = ( props ) => {

	props = props.parentProps;

	const {
		attributes,
		clientId,
		block,
		blockParents,
		attributes: { slide_content },
	} = props;

	const deviceType = useDeviceType();
	const swiperRef = useRef();
	const sliderPaginationRef = useRef();
	const sliderNavPrevRef = useRef();
	const sliderNavNextRef = useRef();
	const { selectBlock } = useDispatch( blockEditorStore );

	const {
		isListViewOpen,
		hasChildren,
	} = useSelect( ( select ) => {

		const { isListViewOpened } =
			select( 'core/edit-post' );

		return {
			isListViewOpen: isListViewOpened(),
			hasChildren: 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length
		}

	}, [] );

	const {
		isPreview,
		transitionSpeed,
		slideItem,
		block_id,
		swiperInstance,
		displayArrows,
		displayDots,
		extraClasses
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

	const hasChildrenClass = hasChildren ? 'uagb-slider-has-children' : '';
	const listViewClass = isListViewOpen ? 'uagb-list-view-enabled' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${hasChildrenClass} ${listViewClass} uagb-slider-container uagb-slider-editor-wrap uagb-editor-preview-mode-${ deviceType.toLowerCase() } ${extraClasses}`,
	} );

    const innerBlocksProps = useInnerBlocksProps(
        {
			className: `swiper-wrapper`,
			slot: 'container-start'
		},
        {
			allowedBlocks: ALLOWED_BLOCKS,
			template : getSliderTemplate,
			renderAppender: false,
			orientation: 'horizontal'
		}
    );

	const setSwiperInstance = ( swiper ) => {
		props.setAttributes( { swiperInstance: swiper } );
	}

	const settings = {
		slidesPerView: 1,
		autoplay: false,
		speed: transitionSpeed,
		loop: false,
		effect: 'slide',
		allowTouchMove:false,
		onBeforeInit ( swiperInst ) {
			swiperRef.current = swiperInst;
			setSwiperInstance( swiperInst );
		}, 
		onAfterInit ( swiperInst ) {
			setTimeout( () => {

				if( swiperInst?.params?.navigation ) {
					swiperInst.params.navigation.prevEl = sliderNavPrevRef.current;
					swiperInst.params.navigation.nextEl = sliderNavNextRef.current;

					// Re-init navigation
					swiperInst.navigation.destroy()
					swiperInst.navigation.init()
					swiperInst.navigation.update()
				}
				
				if( swiperInst?.params?.pagination ) {

					swiperInst.params.pagination.el = sliderPaginationRef.current;
					swiperInst.params.pagination.clickable = true;
					
					// Re-init pagination
					swiperInst.pagination.init()
					swiperInst.pagination.render()
					swiperInst.pagination.update()
				}
			} )
		}
	}

	useEffect( () => {

		if( swiperInstance ) {
			swiperInstance.update();
		}
		
	}, [ props ] );

	useEffect( () => {

		if( swiperInstance && swiperInstance.slides ) {

			const slidesCount = swiperInstance.slides.length;

			// Slide to the slide index more than number of slides, this will reset slider UI.  
			swiperInstance.slideTo( slidesCount + 1, transitionSpeed, false );

			setTimeout( () => {
				// Reset Slider to first slide to avoid UI break.
				swiperInstance.slideTo( 0, 0, false );		
			}, 100 );

			const sliderBlocks = [ 'uagb/slider', 'uagb/slider-child' ];
			let hasSliderParent = false;

			for ( let index = 0; index < blockParents.length; index++ ) {
				if( sliderBlocks.includes( blockParents[index].name ) ) {
					hasSliderParent = true;
					break;
				}
			}

			if( hasSliderParent ) {
				selectBlock( block.clientId );
			}
		}
	
	}, [ isListViewOpen ] );
	
	return (
		isPreview ? '' :

		<div
			{ ...blockProps }
			key = { block_id }
		>
			<Swiper
			ref={swiperRef}
			{...settings}
			modules={[Navigation, Pagination, Autoplay, Manipulation]}
			navigation={ displayArrows ? {
					nextEl: '#block-' + clientId + ' .swiper-button-next',
					prevEl: '#block-' + clientId + ' .swiper-button-prev',
				} : false
			}
			pagination={ displayDots ? {
					el: '#block-' + clientId + ' .swiper-pagination',
					clickable: true,
				} : false 
			}
			>
				<div 
					{ ...innerBlocksProps }
				/>
			</Swiper>

			{ displayDots &&  
				<div className="swiper-pagination" ref={sliderPaginationRef}></div>
			}

			{ displayArrows &&
			<>
				<div className="swiper-button-prev" ref={sliderNavPrevRef} ></div>
				<div className="swiper-button-next" ref={sliderNavNextRef} ></div>
			</>
			}

		</div>
	);
};
export default React.memo( Render );
