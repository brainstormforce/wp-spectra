/**
 * Creates a single draggable block.
 */
import { useState, useRef } from '@wordpress/element';
import { Icon, Draggable, Popover } from '@wordpress/components';
import { dispatch, withSelect, withDispatch, useDispatch, select } from '@wordpress/data';
import { STORE_NAME as storeName } from '@Store/constants';
import { store as spectraStore } from '@Store';
import { __, sprintf } from '@wordpress/i18n';
import getApiData from '@Controls/getApiData';
import { compose } from '@wordpress/compose';

const DraggableBlock = ( props ) => {
	const { updateDefaultAllowedQuickSidebarBlocks, getDefaultAllowedQuickSidebarBlocks } = props;
	const { block, id, create, blockInsertionPoint, getSelectedBlockClientId, getSelectedBlockAllowedBlocks, getBlockRootClientId } = props;
	const [ hovering, setHovering ] = useState( false );
	const isDragging = useRef( false );
	const { createNotice } = useDispatch( 'core/notices' );
	const [uniqueId, setUniqueId] = useState( 0 );
	const removedNoticeID = `quick-action-sidebar/remove-notices-flow/removed-notice/${uniqueId}`;
	
	const handleMouseOver = () => setHovering( true );

	const handleMouseOut = () => setHovering( false );

	// Saving the allowed blocks to the database.
	const saveOptionToDatabase = ( allowedBlocks ) => {
		// update allowedBlocks.
		updateDefaultAllowedQuickSidebarBlocks( allowedBlocks );
		// Create an object with the uagb_ajax_nonce and confirmation properties.
		const data = {
			security: uagb_blocks_info.uagb_ajax_nonce,
			defaultAllowedQuickSidebarBlocks: JSON.stringify( allowedBlocks ),
		};
		// Call the getApiData function with the specified parameters.
		getApiData( {
			url: uagb_blocks_info.ajax_url,
			action: 'uag_global_update_allowed_block',
			data,
		} );
	};

	// Removes the specified element from an array.
	const removeElementFromArray = ( arrayFromWhichElementNeedToRemove, elementToRemove ) => arrayFromWhichElementNeedToRemove.filter( ( element ) => element !== elementToRemove );

	const handleRemoveBlock = ( elementToRemove ) => {
		const updatedArray = removeElementFromArray( getDefaultAllowedQuickSidebarBlocks, elementToRemove.name );
		saveOptionToDatabase( updatedArray );
		// Increment uniqueId when removing a block
		setUniqueId( ( prevUniqueId ) => prevUniqueId + 1 );
		createNotice( 'success', sprintf( /* translators: abbreviation for units */ __( '%s Removed from Quick Action Bar.', 'ultimate-addons-for-gutenberg' ), elementToRemove.title ), {
			type: 'snackbar',
			id: removedNoticeID,
			isDismissible: true,
		} );
		// Set a timeout to remove the notice after a specific duration (e.g., 600 milliseconds)
		setTimeout( () => {
			// Remove the notice by ID
			dispatch( 'core/notices' ).removeNotice( removedNoticeID );
		}, 1000 );
	};

	const handleOnClick = ( e, selectedBlock ) => {
		let clientId = getBlockRootClientId || '';
		let insertionPoint = blockInsertionPoint;
		if( getSelectedBlockAllowedBlocks && getSelectedBlockAllowedBlocks.includes( selectedBlock ) ) {
			insertionPoint = select( 'core/block-editor' ).getSelectedBlock().innerBlocks.length ;
			clientId = getSelectedBlockClientId;
		}
		if ( e?.target?.classList?.contains( 'block-title-svg' ) ) {
			isDragging.current = false;
			return;
		}
		dispatch( 'core/block-editor' ).insertBlocks( create( selectedBlock.name ), insertionPoint, clientId );
	}

	const hoverPopover = (
		<Popover placement="right" key={id} className='spectra-ee-quick-access__sidebar--blocks--block--icon--name'>
			<div className='block-title'>
				<div onClick={() => { handleRemoveBlock( block ) }} className='spectra-ee-quick-access__sidebar--blocks--block--name'>
					<svg className='block-title-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
						<path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
					</svg>
				</div>
				{block.title}
			</div>
		</Popover>
	);

	return (
		<>
			<Draggable elementId="draggable-panel"
			__experimentalTransferDataType="wp-blocks"
			transferData={ {
				type: 'inserter',
				blocks: [ create( block.name ) ],
			} }>
				{ ( { onDraggableStart } ) => (
				<div
					className='spectra-ee-quick-access__sidebar--blocks--block'
					key={id}
					onClick = { ( e ) => {
						handleOnClick( e, block );
					} }
					draggable
					onDragStart={ ( event ) => {
						isDragging.current = true;
						if( onDraggableStart ) {
							onDraggableStart( event );
						}
					} }
					onDragEnd={ () => {
					}  }
					onMouseOver={ handleMouseOver }
					onMouseOut={ handleMouseOut }
					onFocus={ handleMouseOver }
					onBlur={ handleMouseOut }
				>
					<div className='spectra-ee-quick-access__sidebar--blocks--block--icon'>
							<Icon icon={ block.icon?.src ? block.icon.src : block.icon } />
					</div>
					{ hovering && hoverPopover }
				</div>
				)}
			</Draggable>

		</>
	);
};

// export default DraggableBlock;
export default compose(
	withSelect( ( spectraQuickActionSelect ) => {
		const getDefaultAllowedQuickSidebarBlocks = spectraQuickActionSelect( spectraStore ).getDefaultAllowedQuickSidebarBlocks();
		return {
			getDefaultAllowedQuickSidebarBlocks
		};
	} ),
	withDispatch( ( spectraQuickActionDispatch ) => {
		return {
			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
		};
	} ),
)( DraggableBlock );