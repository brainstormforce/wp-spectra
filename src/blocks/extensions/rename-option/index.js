/**
 * Spectra Rename Options build.
 */
import { useSelect, useDispatch } from '@wordpress/data';
import {
	MenuItem
} from '@wordpress/components';
import { BlockSettingsMenuControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import SpectraRenameModal from './rename-modal';
const { is_gutenberg_activated } = uagb_blocks_info;

/**
 * Component for handling the renaming of a specific block in the block editor.
 * This component provides a menu option to rename a block and a modal for entering the new block name.
 * It uses the `useDispatch` and `useSelect` hooks from the 'core/block-editor' namespace to interact with the block editor state.
 *
 * TODO: Once Gutenberg merged the rename functionality code in WP then we need to remove entire index file. 
 * */
const SpectraRenameOption = () => {

	// Destructuring the useDispatch function from the 'core/block-editor' namespace.
	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	// Destructuring the useSelect function from the 'core/block-editor' namespace.
	const { getBlock } = useSelect( 'core/block-editor' );

	// State variables for controlling the modal.
	const [isOpen, setOpen] = useState( false );
	const [block, setBlock] = useState( null );

	// Function to close the modal.
	const closeModal = () => setOpen( false );

	// Function to open the modal and set initial values.
	const openModal = ( blockData ) => {
		setBlock( blockData );
		setOpen( true );
	};

	// Checking if the Gutenberg editor is active.
	if ( '1' === is_gutenberg_activated ) {
		return null;
	}

	return (
		<>
			{/* BlockSettingsMenuControls component for rendering block settings menu controls. */}
			<BlockSettingsMenuControls>
				{( props ) => { // eslint-disable-line no-shadow
					const { selectedClientIds, selectedBlocks, onClose } = props;

					// Checking if only one block is selected and it belongs to the 'uagb/' namespace.
					if ( selectedClientIds.length !== 1 || !selectedBlocks[0].includes( 'uagb/' ) ) {
						return null;
					}

					// Rendering the 'Rename' menu item.
					return (
						<>
							<MenuItem
								onClick={() => {
									openModal( getBlock( selectedClientIds[0] ) );
									onClose();
								}}
								label={'Rename'}
							>
								Rename
							</MenuItem>
						</>
					);
				}}
			</BlockSettingsMenuControls>

			{/* Modal for renaming the block, rendered conditionally based on the isOpen state. */}
			{isOpen && (
				<SpectraRenameModal
					closeModal={closeModal}
					block={block}
					updateBlockAttributes={updateBlockAttributes}
				/>
			)}
		</>
	);
};

export default SpectraRenameOption;

