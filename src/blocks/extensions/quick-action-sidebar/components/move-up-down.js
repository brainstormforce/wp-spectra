/**
 * Creates sidebar blocks.
 */
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@wordpress/components';
import getApiData from '@Controls/getApiData';
import { compose } from '@wordpress/compose';
import { STORE_NAME as storeName } from '@Store/constants';
import { withDispatch } from '@wordpress/data';

// Component to handle individual sortable items
export const SortableItem = ( { id, item } ) => {
	// Use useSortable hook to enable dragging functionality
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable( { id } );

	// Apply transform and transition styles for drag animation
	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
	};

	return (
		<div
			ref={setNodeRef} // Reference for the sortable item
			style={style}
			{...attributes} // Attributes required for accessibility
			{...listeners} // Event listeners for drag events
			className='spectra-ee-quick-access__sidebar--blocks--block'
		>
			<div className={`spectra-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]} spectra-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]}--${item?.name?.split( '/' )[1]} spectra-ee-quick-access__sidebar--blocks--block--icon`}>
				<Icon icon={item.icon.src ? item.icon.src : item.icon} />
			</div>
		</div>
	);
}

// Main drag and drop component
const DragAndDropComponent = ( { initialItems, updateDefaultAllowedQuickSidebarBlocks } ) => {
	const [items, setItems] = useState( initialItems );

	// Function to handle the start of a drag event
	const onDragStart = () => {
		const contentDiv = document.querySelector( '.interface-interface-skeleton__content' );
		if ( contentDiv ) {
			contentDiv.classList.add( 'spectra-ee-quick-access__sidebar--prevent-editor-interactions' );
		}
	};

	// Function to handle the end of a drag event
	const onDragEnd = ( { active, over } ) => {
		const contentDiv = document.querySelector( '.interface-interface-skeleton__content' );
		if ( contentDiv ) {
			contentDiv.classList.remove( 'spectra-ee-quick-access__sidebar--prevent-editor-interactions' );
		}
		if ( active.id !== over.id ) {
			const oldIndex = items.findIndex( item => item.id === active.id );
			const newIndex = items.findIndex( item => item.id === over.id );
			const reorderedItems = arrayMove( items, oldIndex, newIndex );
			const namesArray = reorderedItems.map( item => item.name );
			saveOptionToDatabase( namesArray );
			setItems( reorderedItems );
		}
	};

	// Function to save the reordered items to the database
	const saveOptionToDatabase = ( allowedBlocks ) => {
		updateDefaultAllowedQuickSidebarBlocks( allowedBlocks );
		const data = {
			security: uagb_blocks_info.uagb_ajax_nonce,
			defaultAllowedQuickSidebarBlocks: JSON.stringify( allowedBlocks ),
		};
		getApiData( {
			url: uagb_blocks_info.ajax_url,
			action: 'uag_global_update_allowed_block',
			data,
		} );
	};

	return (
		<DndContext
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			modifiers={[
				restrictToVerticalAxis,
				restrictToParentElement
			]}
		>
			
			<SortableContext
				items={items.map( item => item.id )}
				strategy={verticalListSortingStrategy} // Use vertical list sorting strategy
			>
				<div className='spectra-ee-quick-access__sidebar--blocks-sortable'> 
					{items.map( ( item, index ) => (
						<SortableItem key={item.id} id={item.id} item={item} isLast={index === items.length - 1} />
					) )}
				</div>
				
			</SortableContext>
		</DndContext>
	);
}

// Connect the component with the Redux store to dispatch actions
export default compose(
	withDispatch( ( spectraQuickActionDispatch ) => {
		return {
			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
		};
	} ),
)( DragAndDropComponent );
