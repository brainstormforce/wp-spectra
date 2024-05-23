/**
 * Creates sidebar blocks.
 */
import { useState } from '@wordpress/element';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Icon } from '@wordpress/components';
import getApiData from '@Controls/getApiData';
import { compose } from '@wordpress/compose';
import { STORE_NAME as storeName } from '@Store/constants';
import { withDispatch } from '@wordpress/data';

function DragAndDropComponent( { initialItems, updateDefaultAllowedQuickSidebarBlocks } ) {
	const [items, setItems] = useState( initialItems );

	const onDragEnd = ( result ) => {
		if ( !result.destination ) return;
		const reorderedItems = Array.from( items );
		const [removed] = reorderedItems.splice( result.source.index, 1 );
		reorderedItems.splice( result.destination.index, 0, removed );
		const namesArray = reorderedItems.map( item => item.name );
		saveOptionToDatabase( namesArray );
		setItems( reorderedItems );
	};

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

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{( provided ) => (
					<div className='spectra-ee-quick-access__sidebar--blocks' {...provided.droppableProps} ref={provided.innerRef}>
						{items.map( ( item, index ) => (
							<Draggable key={item.id} draggableId={item.id} index={index}>
								{( provided ) => ( // eslint-disable-line no-shadow
									<div
										className='spectra-ee-quick-access__sidebar--blocks--block'
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<div className={`spectra-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]} spectra-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]}--${item?.name?.split( '/' )[1]} spectra-ee-quick-access__sidebar--blocks--block--icon`}>
											<Icon icon={ item.icon.src ? item.icon.src : item.icon } />
										</div>
									</div>
								)}
							</Draggable>
						) )}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default compose(
	withDispatch( ( spectraQuickActionDispatch ) => {
		return {
			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
		};
	} ),
)( DragAndDropComponent );
