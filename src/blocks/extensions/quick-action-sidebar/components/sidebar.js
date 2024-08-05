/**
 * The Quick Access Sidebar.
 */
import { useLayoutEffect, useState, useEffect } from '@wordpress/element';
import style from '../editor.lazy.scss';
import Blocks from './blocks'
import { store as spectraStore } from '@Store';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import PopoverModal from './modal';
import { STORE_NAME as storeName } from '@Store/constants';
import { __ } from '@wordpress/i18n';
import { Popover } from '@wordpress/components';

const Sidebar = ( props ) => {
	const {
		getEnableQuickActionSidebar,
		updateDefaultAllowedQuickSidebarBlocks,
		getDefaultAllowedQuickSidebarBlocks,
		getFullscreenMode,
		getDistractionFreeMode,
	} = props;
	const [ isPopoverVisible, setPopoverVisible ] = useState( false );
	// State to track the sorting status
	const [ isSorting, setSorting ] = useState( false );
	const [ hovering, setHovering ] = useState( null );
	// State to track the active tab
	const [ activeTab, setActiveTab ] = useState( 0 );
	const handleMouseOver = ( button ) => setHovering( button );

	const handleMouseOut = () => setHovering( false );
	// Function to handle outside click
	useEffect( () => {
		const handleOutsideClick = ( event ) => {
			// Check if the click is outside the QAB sidebar
			if ( !event.target.closest( '.spectra-ee-quick-access__sidebar' ) ) {
				setSorting( false );
				setActiveTab( 0 );
			}
		};

		// Add event listener when component mounts
		const currentUrl = new URL( window.location.href ) ;
		if ( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
			const getAllIframes = document.querySelectorAll( 'iframe' );
			getAllIframes.forEach( function ( iframe ) {
				// Skip the iframe with the specific name.
				if ( uagb_blocks_info.exclude_crops_iframes.includes( iframe.name ) ) {
					return;
				}

				// Safely add event listener
				try {
					iframe.contentWindow.addEventListener( 'click', handleOutsideClick );
				} catch ( e ) {
					// Ignore cross-origin access errors.
				}
			} );
		} else {
			document.body.addEventListener( 'click', handleOutsideClick );
		}

		// Remove event listener when component unmounts
		return () => {
			if ( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
				const getAllIframes = document.querySelectorAll( 'iframe' );
				getAllIframes.forEach( function ( iframe ) {
					const iframeDocument = iframe.contentWindow;
					// Skip the iframe with the specific name.
					if ( uagb_blocks_info.exclude_crops_iframes.includes( iframeDocument.name ) ) {
						return;
					}

					// Safely add event listener
					try {
						iframeDocument.removeEventListener( 'click', handleOutsideClick );
					} catch ( e ) {
						// Ignore cross-origin access errors.
					}
				} );
			} else {
				document.body.removeEventListener( 'click', handleOutsideClick );
			}
		};
	}, [] ); // Empty array ensures this effect runs only once when the component mounts

	// Function to handle tab click
	const handleTabClick = ( index ) => {
		setActiveTab( index );
	};

	useLayoutEffect( () => {
		style.use();
		return () => style.unuse();
	}, [] );

	// Return null when getEnableQuickActionSidebar is disabled or we are not in fullscreenMode or distractionFree is enabled.
	if ( 'disabled' === getEnableQuickActionSidebar || ( 'site-editor' !== uagb_blocks_info.is_site_editor && !getFullscreenMode ) || getDistractionFreeMode ) {
		return null;
	}

	// Function to open the popover
	const openPopover = () => { 
		setPopoverVisible( true );
		setSorting( false )
	}
	// Function to close the popover
	const closePopover = () => { 
		setPopoverVisible( false );
		setSorting( false )
	}
	// Function to enable re-arrange
	const enableRearrange = () => { 
		setSorting( true );
	}
	
	return (
		<>
		<div className='spectra-ee-quick-access'>
		<div className='spectra-ee-quick-access__sidebar'>
			{/* The block selection buttons will come here. */}
			<div className='spectra-ee-quick-access__sidebar--blocks'>
				<Blocks enableRearrange={isSorting} />
			</div>
			{/* The sidebar actions will come here - like the plus sign. */}
				<div className="spectra-ee-quick-access__sidebar--tabs-container">
					<div className="spectra-ee-quick-access__sidebar--tabs">
					{/* Map over your tab items */}
					{['add', 'sort'].map( ( tab, index ) => (
						<div
							key={index}
							className={`tab ${activeTab === index ? 'active' : ''}`}
							onClick={() => handleTabClick( index )}
						>
							{ 'add' === tab &&
								<div className='spectra-ee-quick-access__sidebar--actions' >
									<div className='spectra-ee-quick-access__sidebar--actions--plus'>
										<div className='spectra-quick-action-sidebar-wrap'>
											<div
												id="plus-icon"
												onClick={ openPopover }
												onMouseOver={ () => handleMouseOver( 'add' ) }
												onMouseOut={ handleMouseOut }
												onFocus={ () => handleMouseOver( 'add' ) }
												onBlur={ handleMouseOut }
											>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#fff" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
											</div>
											{ isPopoverVisible && <PopoverModal closePopover={closePopover} updateDefaultAllowedQuickSidebarBlocks={updateDefaultAllowedQuickSidebarBlocks} getDefaultAllowedQuickSidebarBlocks={getDefaultAllowedQuickSidebarBlocks} />}
											{ hovering === 'add' &&
												<Popover placement="right" className='spectra-ee-quick-access__sidebar--blocks--block--icon--name'>
													<div className='block-title'>
														{ __( 'Add blocks to Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
													</div>
												</Popover>
											}
										</div>
									</div>
								</div>
							}
							{ 'sort' === tab &&
								<div className='spectra-ee-quick-access__sidebar--actions' >
									<div className='spectra-ee-quick-access__sidebar--actions--plus rearrange'>
										<div className='spectra-quick-action-sidebar-wrap'>
											<div
												id="rearrange-icon"
												onClick={ enableRearrange }
												onMouseOver={ () => handleMouseOver( 'sort' ) }
												onMouseOut={ handleMouseOut }
												onFocus={ () => handleMouseOver( 'sort' ) }
												onBlur={ handleMouseOut }
											>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#fff" focusable="false"><path d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"></path></svg>
												{ hovering === 'sort' &&
													<Popover placement="right" className='spectra-ee-quick-access__sidebar--blocks--block--icon--name'>
														<div className='block-title'>
															{ __( 'Re-arrange block inside Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
														</div>
													</Popover>
												}
											</div>
										</div>
									</div>
								</div>
							}
						</div>
					) )}
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
