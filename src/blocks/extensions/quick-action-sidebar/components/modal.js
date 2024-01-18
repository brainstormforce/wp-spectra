/**
 * Creates a popover modal.
 */
import { useState } from '@wordpress/element';
import { Popover, SearchControl, Icon } from '@wordpress/components';
import { useDispatch, dispatch } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import getApiData from '@Controls/getApiData';
import { getBlockTypes } from '@wordpress/blocks';

const PopoverModal = ( { closePopover, updateDefaultAllowedQuickSidebarBlocks, getDefaultAllowedQuickSidebarBlocks } ) => {
	const [searchTerm, setSearchTerm] = useState( '' );
	const { createNotice } = useDispatch( 'core/notices' );
	const [uniqueId, setUniqueId] = useState( 0 );
	const addedNoticeID = `quick-action-sidebar/add-notices-flow/added-notice/${uniqueId}`;
	const blocks = getBlockTypes();

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

	const closePopup = () => {
		// Call the callback function in the parent
		closePopover( false );
	};

	const handleSearchChange = ( newSearchTerm ) => setSearchTerm( newSearchTerm );

	const handleBlockClick = ( selectedBlock ) => {
		// You can handle the selected block here, e.g., add it to the state or perform other actions
		const allowedBlocks = [
			...getDefaultAllowedQuickSidebarBlocks,
			selectedBlock.name
		];
		saveOptionToDatabase( allowedBlocks );
		// Increment uniqueId when removing a block
		setUniqueId( ( prevUniqueId ) => prevUniqueId + 1 );

		createNotice( 'success',
			sprintf( /* translators: abbreviation for units */ __( '%s Added to Quick Action Bar.', 'ultimate-addons-for-gutenberg' ), selectedBlock.title ), {
			type: 'snackbar',
			id: addedNoticeID,
			isDismissible: true,
		} );
		// Set a timeout to remove the notice after a specific duration (e.g., 600 milliseconds)
		setTimeout( () => {
			// Remove the notice by ID
			dispatch( 'core/notices' ).removeNotice( addedNoticeID );
		}, 1000 );
		closePopup();
	};

	const filteredBlocks = blocks.filter( ( block ) =>
		block.title.toLowerCase()?.includes( searchTerm.toLowerCase() )
	);

	// Separate arrays for used and unused items
	const usedArray = [];
	const unusedArray = [];

	// Iterate.
	filteredBlocks.forEach( item => {
		if ( getDefaultAllowedQuickSidebarBlocks?.includes( item.name ) ) {
			usedArray.push( item );
		} else {
			unusedArray.push( item );
		}
	} );

	const addToSidebar = () => {
		return (
			unusedArray.map( ( item, index ) => (
				item?.name?.includes( 'uagb/' ) && !item.parent &&
				<div
					key={index}
					className="spectra-block-wrap"
					onClick={() => handleBlockClick( item )}
					style={{ cursor: 'pointer' }}
				>
					<div
						className='spectra-ee-quick-access__sidebar--blocks--block--icon'
					>
						<Icon icon={item.icon?.src ? item.icon.src : item.icon} />
					</div>
					<div className='block-title'>
						{item.title}
					</div>
				</div>
			) )
		);
	};

	const alreadyPresentInSidebar = () => {
		return (
			usedArray.map( ( item, index ) => (
				item?.name?.includes( 'uagb/' ) && !item.parent &&
				<div
					key={index}
					className="spectra-block-wrap"
				>
					<div
						className='spectra-ee-quick-access__sidebar--blocks--block--icon'
					>
						<Icon icon={item.icon?.src ? item.icon.src : item.icon} />
					</div>
					<div className='block-title'>
						{item.title}
					</div>
				</div>
			) )
		);
	};

	return (
		<Popover
			onClose={closePopup}
			placement="right-start"
			className="spectra-quick-action-block-popover"
		>
			<SearchControl
				value={searchTerm}
				onChange={handleSearchChange}
				label="Search Blocks"
				className="spectra-quick-action-block-popover-search"
			/>
			<div className="spectra-block-container">
				{unusedArray.some( item => item?.name?.includes( 'uagb/' ) && !item.parent && item.title.toLowerCase().includes( searchTerm.toLowerCase() ) ) && (
				<div className="block-editor-inserter__panel-header spectra-quick-action-block-popover-header__add-to-quick-action-bar">
					<h2 className="block-editor-inserter__panel-title">
						{__( 'Add to Quick Action Bar', 'ultimate-addons-for-gutenberg' )}
					</h2>
				</div> 
				) }
				{addToSidebar()}
				{usedArray.some( item => item?.name?.includes( 'uagb/' ) && !item.parent && item.title.toLowerCase().includes( searchTerm.toLowerCase() ) ) && (
				<div className="block-editor-inserter__panel-header spectra-quick-action-block-popover-header__already-present-in-quick-action-bar">
					<h2 className="block-editor-inserter__panel-title">
						{__( 'Already Present in Quick Action Bar', 'ultimate-addons-for-gutenberg' )}
					</h2>
				</div>
				) }
				{alreadyPresentInSidebar()}
				{ ! unusedArray.some( item => item?.name?.includes( 'uagb/' ) && !item.parent && item.title.toLowerCase().includes( searchTerm.toLowerCase() ) ) && ! usedArray.some( item => item?.name?.includes( 'uagb/' ) && !item.parent && item.title.toLowerCase().includes( searchTerm.toLowerCase() ) ) && (
				<div className="block-editor-inserter__no-results">
					<p>{__( 'No results found.', 'ultimate-addons-for-gutenberg' )}</p>
				</div>
				)}
			</div>
		</Popover>
	);
};

export default PopoverModal;
