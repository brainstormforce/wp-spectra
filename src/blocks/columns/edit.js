/**
 * BLOCK: UAGB - Columns Edit
 */

import styling from './styling';
import { __ } from '@wordpress/i18n';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useEffect, lazy, Suspense, useLayoutEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/columns/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/columns/render" */ './render' )
);

import { withSelect, useDispatch } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

import { withNotices } from '@wordpress/components';

import { createBlock } from '@wordpress/blocks';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

import styles from './editor.lazy.scss';

const ColumnsComponent = ( props ) => {
	const deviceType = useDeviceType();
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {

		const { attributes, setAttributes } = props;

		const {
			topMargin,
			bottomMargin,
			topMarginDesktop,
			bottomMarginDesktop,
			backgroundOpacity,
			align,
			vAlign,
			backgroundImageColor
		} = attributes

		if ( 'middle' === vAlign ) {
			setAttributes( { vAlign: 'center' } );
		}

		if ( undefined === align ){
			setAttributes( { align: '' } );
		}

		if ( undefined === vAlign ){
			setAttributes( { vAlign: '' } );
		}

		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );


		//Margin
		if ( topMargin ) {
			if ( ! topMarginDesktop ) {
				setAttributes( { topMarginDesktop: topMargin } );
			}
		}

		if ( bottomMargin ) {
			if ( ! bottomMarginDesktop ) {
				setAttributes( { bottomMarginDesktop: bottomMargin } );
			}
		}

		if ( 101 !== backgroundOpacity ) {
			const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
			setAttributes( { backgroundImageColor: color } );
			setAttributes( { backgroundOpacity: 101 } );
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-columns-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-columns-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	const blockVariationPickerOnSelect = (
		nextVariation = props.defaultVariation
	) => {
		if ( nextVariation.attributes ) {
			props.setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			props.replaceInnerBlocks(
				props.clientId,
				createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
			);
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map(
			( [ name, attributes, innerBlocks = [] ] ) =>
				createBlock(
					name,
					attributes,
					createBlocksFromInnerBlocksTemplate( innerBlocks )
				)
		);
	};

	const { variations, hasInnerBlocks } = props;
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/advanced-columns.png`;
	if ( ! hasInnerBlocks ) {

		return (
			props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<>
			<div className='uagb-columns-variation-picker'>
				<BlockVariationPicker
					icon={ '' }
					label={ uagb_blocks_info.blocks[ 'uagb/columns' ].title }
					instructions={ __(
						'Select a variation to start with.',
						'ultimate-addons-for-gutenberg'
					) }
					variations={ variations }
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
				/>
			</div>
			</>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

const applyWithSelect = withSelect( ( select, props ) => {
	const { getBlocks } = select( 'core/block-editor' );
	const {
		getBlockType,
		getBlockVariations,
		getDefaultBlockVariation,
	} = select( 'core/blocks' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		hasInnerBlocks:
			select( 'core/block-editor' ).getBlocks( props.clientId ).length >
			0,

		blockType: getBlockType( props.name ),
		defaultVariation:
			typeof getDefaultBlockVariation === 'undefined'
				? null
				: getDefaultBlockVariation( props.name ),
		variations:
			typeof getBlockVariations === 'undefined'
				? null
				: getBlockVariations( props.name ),
		replaceInnerBlocks,
	};
} );

export default compose( withNotices, applyWithSelect )( ColumnsComponent );
