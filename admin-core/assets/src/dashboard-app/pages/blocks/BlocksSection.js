import { __ } from '@wordpress/i18n';
import React, { useEffect, useState } from 'react';
import { Container, Input, DropdownMenu, Button } from '@bsf/force-ui';

import BlockItem from '@Common/components/BlockItem';
import UAGB_Block_Icons from '@Common/block-icons';
import getApiData from '@Controls/getApiData';

import CustomRadioGroup from './CustomRadioGroup';
import NoBlocksFound from './NoBlocksFound';

import { proBlocks } from './UtilityFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { Search, X, ListFilter, Box } from 'lucide-react';

const BlocksSection = () => {
	const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
	const coreBlocks = useSelector( ( state ) => state.coreBlocks );
	const dispatch = useDispatch();

	const [ formattedBlocks, setFormattedBlocks ] = useState( [] );
	const [ searchInput, setSearchInput ] = useState( '' );
	const [ filteredBlocks, setFilteredBlocks ] = useState( [] );
	const [ isDropOpen, setIsDropOpen ] = useState( false );
	const [ filterCount, setFilterCount ] = useState( 0 );
	const [ filterState, setFilterState ] = useState( {
		type: null,
		category: null,
		status: null,
	} );
	const [ activeExtensions, setActiveExtensions ] = useState( {
		'animations': null,
		'display-conditions': null,
		'dynamic-content': null,
		'global-block-styles': null,
		'masonry-gallery': null,
		'responsive-conditions': null,
		'motion-effects': null,
	} );
	const [ extensionStatuses, setExtensionStatuses ] = useState( {
		'animations': blocksStatuses.animations,
		'display-conditions': blocksStatuses[ 'display-conditions' ],
		'dynamic-content': blocksStatuses[ 'dynamic-content' ],
		'global-block-styles': blocksStatuses[ 'global-block-styles' ],
		'masonry-gallery': blocksStatuses[ 'masonry-gallery' ],
		'responsive-conditions': blocksStatuses[ 'responsive-conditions' ],
		'motion-effects': blocksStatuses[ 'motion-effects' ],
	} );


	function convertToWidgetsArray( data ) {
		const blocksArray = [];

		for ( const key in data ) {
			if ( data.hasOwnProperty( key ) ) {
				const block = data[ key ];

				const IconElement = UAGB_Block_Icons[ block.slug ];
				const icon = IconElement ? (
					React.cloneElement( IconElement, { className: 'w-5 h-5' } )
				) : (
					<Box className="custom-icon-class" />
				);

				blocksArray.push( {
					id: key,
					slug: block.slug,
					title: block.title,
					icon,
					is_pro: block.pro_filler ? true : false,
					is_active: block.is_activate !== undefined ? block.is_activate : true,
					is_core: block.priority <= 8,
					link: block.link,
					is_extension: false,
				} );
			}
		}

		return blocksArray;
	}

	useEffect( () => {
		const newBlocksArray = convertToWidgetsArray( uag_react.blocks_info );
		setFormattedBlocks( newBlocksArray );
	}, [ uag_react.blocks_info ] );

	// Remove the label element associated with the input field
	useEffect( () => {
		const labelElement = document.querySelector( 'label[for="input-element"]' );
		if ( labelElement ) {
			labelElement.remove();
		}
	}, [ formattedBlocks ] );

	// Update filtered blocks when filters or search input change
	useEffect( () => {
		let filtered = convertToWidgetsArray( uag_react.blocks_info );

		let extesions = [
			{
				icon: React.cloneElement( UAGB_Block_Icons[ 'animations-extension' ], { className: 'w-5 h-5' } ),
				id: '39',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: false,
				link: 'animations',
				slug: 'animations',
				title: __( 'Animations', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableAnimationsExtension',
				nonce: uag_react.enable_animations_extension_nonce,
				action: 'uag_enable_animations_extension',
				actionType: 'UPDATE_ENABLE_ANIMATIONS_EXTENSION',
				onChange: setActiveExtensions,
				trigger: extensionStatuses.animations,
				setTrigger: setExtensionStatuses,
			},
			{
				icon: React.cloneElement( UAGB_Block_Icons[ 'display-conditions' ], { className: 'w-5 h-5' } ),
				id: '40',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: false,
				link: 'display-conditions',
				slug: 'display-conditions',
				title: __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableDisplayConditions',
				nonce: uag_react.enable_block_condition_nonce,
				action: 'uag_enable_block_condition',
				actionType: 'UPDATE_ENABLE_DISPLAY_CONDITIONS',
				onChange: setActiveExtensions,
				trigger: extensionStatuses[ 'display-conditions' ],
				setTrigger: setExtensionStatuses,
			},
		];

		if ( filterState.type !== 'free' || filterState.type !== null ) {
			extesions.push( {
				icon: React.cloneElement( UAGB_Block_Icons[ 'dynamic-content' ], { className: 'w-5 h-5' } ),
				id: '41',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: true,
				link: 'dynamic-content',
				slug: 'dynamic-content',
				title: __( 'Dynamic Content', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableDynamicContentExtension',
				nonce: uag_react.enable_dynamic_content_nonce,
				action: 'uag_enable_dynamic_content',
				actionType: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION',
				onChange: setActiveExtensions,
				trigger: extensionStatuses[ 'dynamic-content' ],
				setTrigger: setExtensionStatuses,
			} );
		}

		if ( filterState.type !== 'free' || filterState.type !== null ) {
			extesions.push( {
				icon: React.cloneElement( UAGB_Block_Icons[ 'global-block-styles' ], { className: 'w-5 h-5' } ),
				id: '42',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: true,
				link: 'global-block-style',
				slug: 'global-block-styles',
				title: __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableGBSExtension',
				nonce: uag_react.enable_gbs_extension_nonce,
				action: 'uag_enable_gbs_extension',
				actionType: 'UPDATE_GBS_EXTENSION',
				onChange: setActiveExtensions,
				trigger: extensionStatuses[ 'global-block-styles' ],
				setTrigger: setExtensionStatuses,
			} );
		}

		extesions = [
			...extesions,
			{
				icon: React.cloneElement( UAGB_Block_Icons[ 'masonry-gallery' ], { className: 'w-5 h-5' } ),
				id: '43',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: false,
				link: 'masonry-image-gallery',
				slug: 'masonry-gallery',
				title: __( 'Masonry Gallery', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableMasonryExtension',
				nonce: uag_react.enable_masonry_gallery_nonce,
				action: 'uag_enable_masonry_gallery',
				actionType: 'UPDATE_ENABLE_MASONRY_EXTENSION',
				onChange: setActiveExtensions,
				trigger: extensionStatuses[ 'masonry-gallery' ],
				setTrigger: setExtensionStatuses,
			},
			{
				icon: React.cloneElement( UAGB_Block_Icons[ 'responsive-conditions' ], { className: 'w-5 h-5' } ),
				id: '44',
				is_active: true,
				is_core: false,
				is_extension: true,
				is_pro: false,
				link: 'responsive-conditions',
				slug: 'responsive-conditions',
				title: __( 'Responsive Conditions', 'ultimate-addons-for-gutenberg' ),
				extensionKey: 'enableResponsiveConditions',
				nonce: uag_react.enable_block_responsive_nonce,
				action: 'uag_enable_block_responsive',
				actionType: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS',
				onChange: setActiveExtensions,
				trigger: extensionStatuses[ 'responsive-conditions' ],
				setTrigger: setExtensionStatuses,
			},
		];

		if ( filterState.type !== 'free' || filterState.type !== null ) {
			extesions.push(
				{
					icon: React.cloneElement( UAGB_Block_Icons[ 'motion-effects-extension' ], { className: 'w-5 h-5' } ),
					id: '45',
					is_active: true,
					is_core: false,
					is_extension: true,
					is_pro: true,
					link: 'motion-effects',
					slug: 'motion-effects',
					title: __( 'Motion Effects', 'ultimate-addons-for-gutenberg' ),
					extensionKey: 'enableMotionEffectsExtension',
					nonce: uag_react.enable_motion_effects_extension_nonce,
					action: 'uag_enable_motion_effects_extension',
					actionType: 'UPDATE_ENABLE_MOTION_EFFECTS_EXTENSION',
					onChange: setActiveExtensions,
					trigger: extensionStatuses[ 'motion-effects' ],
					setTrigger: setExtensionStatuses,
				},
			)
		}

		filtered = [ ...filtered, ...extesions ];

		if ( uag_react.pro_plugin_status !== 'Activated' ) {
			filtered = filtered.filter( ( block ) => ! block.is_pro );
			filtered = [ ...proBlocks, ...filtered ];
		}

		// Apply text search
		if ( searchInput ) {
			filtered = filtered.filter( ( block ) => block.title.toLowerCase().includes( searchInput.toLowerCase() ) );
		}

		// Apply type filter (free/pro)
		if ( filterState.type ) {
			filtered = filtered.filter( ( block ) => ( filterState.type === 'free' ? ! block.is_pro : block.is_pro ) );
		}

		// Apply category filter (blocks/extensions)
		if ( filterState.category ) {
			filtered = filtered.filter( ( block ) =>
				filterState.category === 'extensions' ? block.is_extension : ! block.is_extension
			);
		}

		// Apply status filter (active/inactive)
		if ( filterState.status ) {
			filtered = filtered.filter( ( block ) => {
				if ( ! block.is_extension ) {
					if ( uag_react.pro_plugin_status !== 'Activated' ) {
						return filterState.status === 'active'
							? blocksStatuses[ block.slug ] === block.slug && ! block.is_pro
							: blocksStatuses[ block.slug ] === 'disabled';
					}
					return filterState.status === 'active'
						? blocksStatuses[ block.slug ] === block.slug
						: blocksStatuses[ block.slug ] === 'disabled';
				}
				return filterState.status === 'active'
					? activeExtensions[ block.slug ] === true
					: activeExtensions[ block.slug ] === false;
			} );
		}

		setFilteredBlocks( filtered );
	}, [ searchInput, filterState, blocksStatuses, activeExtensions ] );

	// Update filter state
	const updateFilterState = ( filterType, value ) => {
		setFilterState( ( prevState ) => ( {
			...prevState,
			[ filterType ]: value,
		} ) );
	};

	// Activate or Deactivate all visible blocks
	const toggleAllBlocks = ( activate ) => {
		const updatedStatuses = { ...blocksStatuses };

		filteredBlocks.forEach( ( block ) => {
			const isCoreBlock = coreBlocks.includes( block.slug );

			if ( ! isCoreBlock ) {
				if ( ! block.is_extension ) {
					updatedStatuses[ block.slug ] = activate ? block.slug : 'disabled';
				}

				if ( block.is_extension ) {
					setExtensionStatuses( ( prev ) => ( { ...prev, [ block.slug ]: activate } ) );
				}
			}
		} );

		dispatch( { type: 'UPDATE_BLOCK_STATUSES', payload: updatedStatuses } );

		const data = {
			security: uag_react.blocks_activation_and_deactivation_nonce,
			value: JSON.stringify( updatedStatuses ),
			status: '',
		};

		getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_blocks_activation_and_deactivation',
			data,
		} ).then( () => {
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
		} );
	};

	const clearFilters = () => {
		setSearchInput( '' );
		setFilterState( {
			type: null,
			category: null,
			status: null,
		} );
	};

	useEffect( () => {
		let currentCount = 0;

		if ( filterState.status ) currentCount++;
		if ( filterState.category ) currentCount++;
		if ( filterState.type ) currentCount++;

		setFilterCount( currentCount );
	}, [ searchInput, filterState ] );

	return (
		<Container.Item className="flex flex-col gap-8" colSpan={ { lg: 8, md: 12, sm: 12 } }>
			<div className="rounded-lg bg-white w-full border border-solid border-border-subtle">
				<div className="flex flex-col sm:flex-row sm:items-center items-start justify-between gap-4 p-4">
					<div className="m-0 text-lg font-semibold text-text-primary">
						{ __( 'Blocks', 'ultimate-addons-for-gutenberg' ) }
					</div>

					<div className="flex items-center gap-3">
						<Input
							className="search-input uagb-input bg-[#F9FAFB]"
							aria-label="Text Input"
							value={ searchInput }
							onChange={ ( value ) => setSearchInput( value ) }
							id="input-element"
							prefix={ <Search className='text-icon-secondary' /> }
							size="sm"
							type="text"
							placeholder="Search…"
						/>

						<div
							className={ `flex justify-center items-center rounded-sm overflow-hidden ${
								! filteredBlocks || ! filteredBlocks.length > 0
									? 'cursor-not-allowed text-text-tertiary'
									: 'cursor-pointer text-text-primary'
							}` }
							style={ { border: '1.5px solid #e5e7eb', borderRadius: '0.25rem' } }
						>
							<div
								className="font-medium p-2 hover:bg-button-tertiary-hover hover:outline-border-subtle transition-all duration-300"
								style={ { border: 'none', borderRight: '1.5px solid #e5e7eb' } }
								onClick={ () => toggleAllBlocks( true ) }
							>
								{ __( 'Activate All', 'ultimate-addons-for-gutenberg' ) }
							</div>
							<div
								className="font-medium p-2 hover:bg-button-tertiary-hover hover:outline-border-subtle transition-all duration-300"
								style={ { border: 'none' } }
								onClick={ () => toggleAllBlocks( false ) }
							>
								{ __( 'Deactivate All', 'ultimate-addons-for-gutenberg' ) }
							</div>
						</div>

						<DropdownMenu placement="bottom-end" isOpen={ isDropOpen } onOpenChange={ setIsDropOpen }>
							<DropdownMenu.Trigger>
								<Button
									className="flex justify-center items-center relative uagb-input-border"
									size="sm"
									tag="button"
									type="button"
									variant="outline"
								>
									{ filterCount > 0 && (
										<div className="bg-background-important w-4 h-4 rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xxs text-white flex justify-center items-center">
											{ filterCount }
										</div>
									) }
									<ListFilter size={ 16 } />
								</Button>
								<span className="sr-only">{ __( 'Open Menu', 'ultimate-addons-for-gutenberg' ) }</span>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.List>
									<CustomRadioGroup
										options={ [
											{
												label: 'Free',
												value: 'free',
												description: 'All the free blocks and extensions',
											},
											{
												label: 'Pro',
												value: 'pro',
												description: 'All the pro blocks and extensions',
											},
										] }
										name="typeFilter"
										selectedValue={ filterState.type }
										onChange={ ( value ) => updateFilterState( 'type', value ) }
									/>

									<CustomRadioGroup
										options={ [
											{
												label: 'Active',
												value: 'active',
												description: 'All the active blocks and extensions',
											},
											{
												label: 'Inactive',
												value: 'inactive',
												description: 'All the inactive blocks and extensions',
											},
										] }
										name="statusFilter"
										selectedValue={ filterState.status }
										onChange={ ( value ) => updateFilterState( 'status', value ) }
									/>

									<CustomRadioGroup
										options={ [
											{
												label: 'Blocks',
												value: 'blocks',
												description: 'All the blocks in free and pro',
											},
											{
												label: 'Extensions',
												value: 'extensions',
												description: 'All the extensions in free and pro',
											},
										] }
										name="categoryFilter"
										selectedValue={ filterState.category }
										onChange={ ( value ) => updateFilterState( 'category', value ) }
									/>
								</DropdownMenu.List>
							</DropdownMenu.Content>
						</DropdownMenu>
					</div>
				</div>

				{ ( searchInput || filterState.type || filterState.status || filterState.category ) && (
					<div className="text-sm flex items-center w-full justify-start gap-2 p-4 pt-0">
						{ searchInput && (
							<Button
								className="uagb-input-border"
								icon={ <X aria-label="icon" role="img" size={ 14 } /> }
								iconPosition="right"
								size="sm"
								tag="button"
								type="button"
								variant="outline"
								onClick={ () => setSearchInput( '' ) }
							>
								Search: { searchInput }
							</Button>
						) }
						{ filterState.type && (
							<Button
								className="uagb-input-border"
								icon={ <X aria-label="icon" role="img" size={ 14 } /> }
								iconPosition="right"
								size="sm"
								tag="button"
								type="button"
								variant="outline"
								onClick={ () => updateFilterState( 'type', null ) }
							>
								{ filterState.type === 'free' ? 'Free' : 'Pro' }
							</Button>
						) }
						{ filterState.status && (
							<Button
								className="uagb-input-border"
								icon={ <X aria-label="icon" role="img" size={ 14 } /> }
								iconPosition="right"
								size="sm"
								tag="button"
								type="button"
								variant="outline"
								onClick={ () => updateFilterState( 'status', null ) }
							>
								{ filterState.status === 'active' ? 'Active' : 'Inactive' }
							</Button>
						) }
						{ filterState.category && (
							<Button
								className="uagb-input-border"
								icon={ <X aria-label="icon" role="img" size={ 14 } /> }
								iconPosition="right"
								size="sm"
								tag="button"
								type="button"
								variant="outline"
								onClick={ () => updateFilterState( 'category', null ) }
							>
								{ filterState.category === 'blocks' ? 'Blocks' : 'Extensions' }
							</Button>
						) }

						<div className="cursor-pointer" onClick={ () => clearFilters() }>
							Clear all
						</div>
					</div>
				) }

				<div className="flex flex-col rounded-lg p-4 pt-0">
					<Container
						align="stretch"
						className="p-1 gap-1 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 bg-field-primary-background rounded-lg"
						containerType="grid"
						gap=""
						justify="start"
					>
						{ filteredBlocks &&
							filteredBlocks.length > 0 &&
							filteredBlocks.map( ( block ) => {
								return (
									<Container.Item
										key={ block.id }
										alignSelf="auto"
										className="text-wrap rounded-md bg-background-primary p-2 block-item"
									>
										<BlockItem block={ block } is_extension={ block.is_extension } />
									</Container.Item>
								);
							} ) }
					</Container>

					{ ( ! filteredBlocks || ! filteredBlocks.length > 0 ) && (
						<Container className="p-2 bg-field-primary-background rounded-lg">
							<NoBlocksFound handleClearFilters={ clearFilters } />
						</Container>
					) }
				</div>
			</div>
		</Container.Item>
	);
};

export default BlocksSection;
