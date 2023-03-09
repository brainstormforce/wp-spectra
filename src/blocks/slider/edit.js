/**
 * BLOCK: Slider
 */
import { useEffect, useLayoutEffect } from '@wordpress/element';
import { withSelect, useDispatch } from '@wordpress/data';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
//  Import CSS.
import './style.scss';
import { compose } from '@wordpress/compose';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';
import { SwiperSlide } from 'swiper/react';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBSlider = ( props ) => {
	const deviceType = useDeviceType();
    const {
		isSelected,
		setAttributes,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;
	
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-slider-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );
    	
	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => { // eslint-disable-line no-shadow
	const { insertBlock } = useDispatch( 'core/block-editor' );

	const { getSelectedBlock, getBlockParents } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock();
	const parentBlockIds = getBlockParents( selectedBlock?.clientId );
	const blockParents = select( 'core/block-editor' ).getBlocksByClientId( parentBlockIds );

	return {
		insertBlock,
		block: ( select( 'core/block-editor' ) || select( 'core/editor' ) ).getBlock(
			props.clientId
		),
		blockParents
	};
} );
export default compose( applyWithSelect )( UAGBSlider );

const { createHigherOrderComponent } = wp.compose;

const uagbSlideClass = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

		const deviceType = useDeviceType();

		const onSwiperChildClick = ( e ) => {

			const isBlockAppender = e.target.closest( 'div' ).classList.contains( 'block-editor-inserter' );
			const closestBlock = e.target.closest( '.block-editor-block-list__block' );

			if( !isBlockAppender && closestBlock && closestBlock.hasAttribute( 'data-block' ) ) {
				const closestBlockClientId = closestBlock.dataset.block;
				const isBlockSelected = wp.data.select( 'core/block-editor' ).isBlockSelected( closestBlockClientId );
				if( ! isBlockSelected ) {
					wp.data.dispatch( 'core/block-editor' ).selectBlock( closestBlockClientId );
				}
			}
		};

		if( 'uagb/slider-child' === props.name ) {

			const wrapperProps = {
				className: `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				...props.wrapperProps
			};

			return <SwiperSlide
			onClick={( e ) => onSwiperChildClick( e )}
			aria-hidden="true"
			><BlockListBlock
			{ ...props } 
			wrapperProps={ wrapperProps } /></SwiperSlide>;
		}

		return <BlockListBlock
			{ ...props }
		/>;

    };
}, 'uagbSlideClass' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'uagb/slider-child',
    uagbSlideClass
);
