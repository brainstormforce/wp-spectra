/**
 * The Quick Access Sidebar.
 */
import { useLayoutEffect, useState } from '@wordpress/element';
import style from '../editor.lazy.scss';
import Blocks from './blocks'
import { store as spectraStore } from '@Store';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import PopoverModal from './modal';
import { STORE_NAME as storeName } from '@Store/constants';

const Sidebar = ( props ) => {
	const { getEnableQuickActionSidebar, updateDefaultAllowedQuickSidebarBlocks, getDefaultAllowedQuickSidebarBlocks, getFullscreenMode, getDistractionFreeMode } = props;
	const [ isPopoverVisible, setPopoverVisible ] = useState( false );

	useLayoutEffect( () => {
		style.use();
		return () => style.unuse();
	}, [] );
	// Return null when getEnableQuickActionSidebar is disabled or we are not in fullscreenMode or distractionFree is enabled.
	if ( 'disabled' === getEnableQuickActionSidebar || ( 'site-editor' !== uagb_blocks_info.is_site_editor && !getFullscreenMode ) || getDistractionFreeMode ) {
		return null;
	}

	const openPopover = () => setPopoverVisible( true );

	const closePopover = () => setPopoverVisible( false );

	return (
		<>
		<div className='spectra-ee-quick-access'>
		<div className='spectra-ee-quick-access__sidebar'>
			{/* The block selection buttons will come here. */}
			<div className='spectra-ee-quick-access__sidebar--blocks'>
				<Blocks />
			</div>
			{/* The sidebar actions will come here - like the plus sign. */}
				<div className='spectra-ee-quick-access__sidebar--actions' >
					<div className='spectra-ee-quick-access__sidebar--actions--plus'>
						<div className='spectra-quick-action-sidebar-wrap'>
							<div id="plus-icon" onClick={openPopover}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#fff" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
						</div>
						{isPopoverVisible && <PopoverModal closePopover={closePopover} updateDefaultAllowedQuickSidebarBlocks={updateDefaultAllowedQuickSidebarBlocks} getDefaultAllowedQuickSidebarBlocks={getDefaultAllowedQuickSidebarBlocks} /> }
					</div>
				</div>
			</div>
		</div>
		</div>
		</>
	);
}

export default compose(
	withSelect( ( spectraQuickActionSelect ) => {
		const getEnableQuickActionSidebar = spectraQuickActionSelect( spectraStore ).getEnableQuickActionSidebar();
		const getDefaultAllowedQuickSidebarBlocks = spectraQuickActionSelect( spectraStore ).getDefaultAllowedQuickSidebarBlocks();
		const getFullscreenMode = spectraQuickActionSelect( 'core/edit-post' )?.isFeatureActive( 'fullscreenMode' );
		const getBlockEditorStore = spectraQuickActionSelect( 'core/block-editor' );
		const getDistractionFreeMode = getBlockEditorStore?.getSettings()?.isDistractionFree;
	
		return {
			getEnableQuickActionSidebar,
			getDefaultAllowedQuickSidebarBlocks,
			getFullscreenMode,
			getDistractionFreeMode,
		};
	} ),
	withDispatch( ( spectraQuickActionDispatch ) => {
		return {
			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
			updateEnableQuickActionSidebar: ( value ) => spectraQuickActionDispatch( storeName ).updateEnableQuickActionSidebar( value ),
		};
	} ),
)( Sidebar );
