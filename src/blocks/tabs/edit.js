/**
 * BLOCK: Tabs Block
 */
import styling from './styling';
import { useEffect } from '@wordpress/element';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';

import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

import { compose } from '@wordpress/compose';

import { withDispatch, dispatch, select } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTabsEdit = ( props ) => {

	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
			tabHeaders,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		clientId,
	} = props;

	useEffect( () => {
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Backward Border Migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'tab', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			setAttributes,
			attributes
			);
		}

	}, [] );

	const updateTabTitle = () => {
		const { updateBlockAttributes } = ! wp.blockEditor
			? dispatch( 'core/editor' )
			: dispatch( 'core/block-editor' );
		const { getBlockOrder } = ! wp.blockEditor
			? select( 'core/editor' )
			: select( 'core/block-editor' );
		const childBlocks = getBlockOrder( clientId );
		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, { tabHeaders } )
		);
	};

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles( 'uagb-style-tab-' + clientId.substr( 0, 8 ), blockStyling );
		updateTabTitle();
		props.resetTabOrder();
	}, [ deviceType, props ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			{ isSelected && (
				<Settings parentProps={ props } deviceType={ deviceType } />
			) }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(

	withDispatch( ( dispatch, { clientId }, { select } ) => { // eslint-disable-line no-shadow
		const { getBlock } = select( 'core/block-editor' );
		const { updateBlockAttributes, moveBlockToPosition } = dispatch(
			'core/block-editor'
		);

		const block = getBlock( clientId );

		return {
			resetTabOrder() {
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						id: i,
					} );
				}
			},
			updateActiveTab( tabActive ) {
				updateBlockAttributes( block.clientId, {
					tabActive,
				} );
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						tabActive,
					} );
				}
				this.resetTabOrder();
			},
			moveTab( tabId, newIndex ) {
				moveBlockToPosition(
					tabId,
					clientId,
					clientId,
					parseInt( newIndex )
				);
			},
		};
	} )
)( UAGBTabsEdit );
