/**
 * Creates sidebar blocks.
 */
import { useSelect } from '@wordpress/data';
import { createBlock, getBlockTypes } from '@wordpress/blocks';
import DraggableBlock from './draggable-block';
import { STORE_NAME as storeName } from '@Store/constants';
import DragAndDropComponent from './move-up-down';

const Blocks = ( props ) => {
	const { enableRearrange } = props;
	const getDefaultAllowedQuickSidebarBlocks = useSelect( ( select ) => select( storeName ).getDefaultAllowedQuickSidebarBlocks() );
	const blocks = getBlockTypes();
	const { blockInsertionPoint, getSelectedBlockClientId, getSelectedBlockAllowedBlocks, getBlockRootClientId } = useSelect( ( select ) => {
		const blockEditor = select( 'core/block-editor' );
		const { index } = blockEditor.getBlockInsertionPoint();
		const clientId = blockEditor.getSelectedBlockClientId();
		const allowedBlocks = blockEditor.getAllowedBlocks( clientId );
		const rootClientId = blockEditor.getBlockRootClientId( clientId );
		return {
			blockInsertionPoint: index,
			getSelectedBlockClientId: clientId,
			getSelectedBlockAllowedBlocks: allowedBlocks || [],
			getBlockRootClientId: rootClientId,
		};
	} );

	const uagbBlocks = blocks.filter( ( block ) => {
		return getDefaultAllowedQuickSidebarBlocks?.includes( block.name );
	} );

	const create = ( name ) => { return createBlock( name ); }

	// Loop through each object and add id
	uagbBlocks.forEach( ( item, index ) => {
		item.id = `${index + 1}`;
	} );

	const sortedY = getDefaultAllowedQuickSidebarBlocks.map( item => uagbBlocks.find( ( {name} ) => name === item ) );

	return (
		<>
			{!enableRearrange && sortedY.map( ( block, index ) => (
				<DraggableBlock
					key={index}
					id={index}
					{...{
						block,
						create,
						blockInsertionPoint,
						getSelectedBlockClientId,
						getSelectedBlockAllowedBlocks,
						getBlockRootClientId,
					}}
				/>
			) )}
			{ enableRearrange &&
				<DragAndDropComponent initialItems={sortedY} />
			}
		</>
	);

};

export default Blocks;