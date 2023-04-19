/**
 * BLOCK: Tabs Block
 */
import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import AddStaticStyles from '@Controls/AddStaticStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import { withDispatch, dispatch, select } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

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
		name,
	} = props;

	useEffect( () => {
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Backward Border Migration
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'tab',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
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
		const { getBlockOrder } = ! wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder( clientId );
		childBlocks.forEach( ( childBlockId ) => updateBlockAttributes( childBlockId, { tabHeaders } ) );
	};

	useEffect( () => {
		// Replacement for componentDidUpdate.
		updateTabTitle();
		props.resetTabOrder();
	}, [ deviceType, props ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } deviceType={ deviceType } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	// eslint-disable-next-line no-shadow
	withDispatch( ( dispatch, { clientId }, { select } ) => {
		const { getBlock } = select( 'core/block-editor' );
		const { updateBlockAttributes, moveBlockToPosition } = dispatch( 'core/block-editor' );

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
				moveBlockToPosition( tabId, clientId, clientId, parseInt( newIndex ) );
			},
		};
	} ),
	AddStaticStyles,
)( UAGBTabsEdit );
