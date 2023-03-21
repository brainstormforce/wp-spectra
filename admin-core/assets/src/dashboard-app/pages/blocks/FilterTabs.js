import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilterTabs = () => {

	const query = new URLSearchParams( useLocation()?.search );
	const blocksInfo = uag_react.blocks_info;
    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const coreBlocks = useSelector( ( state ) => state.coreBlocks );
    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );
    const [ categoriesBlocks, setcategoriesBlocks ] = useState( [] );

    const tabs = [
        { name: 'All', slug: 'all' },
		{ name: 'Core Blocks', slug: 'core' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },
        { name: 'Extensions', slug: 'extensions' },
		// This Object will be used once Spectra Pro is Released.
        // { name: 'Pro', slug: 'pro' },
    ];

    useEffect( () => {

		// Activate Block Filter Tab from "filterTab" Hash in the URl is present.
		const activePath = query.get( 'path' );
		const activeHash = query.get( 'filterTab' );
		const activeFilterTabFromHash = ( activeHash && 'blocks' === activePath ) ? activeHash : 'all';
		dispatch( {type:'UPDATE_BLOCKS_ACTIVE_FILTER_TAB', payload: activeFilterTabFromHash} )

        const categoriesBlocksTemp = {
            ...categoriesBlocks
        };

		blocksInfo.map( ( block ) => {

            const blockCategories = block.admin_categories;

            blockCategories?.map( ( category ) => {

                if ( ! categoriesBlocksTemp [ category ] ) {
                    categoriesBlocksTemp [ category ] = [];
                }

                categoriesBlocksTemp [ category ].push( block.slug );

                return category;
            } );

            return block;
        } );

        setcategoriesBlocks( categoriesBlocksTemp )

	}, [] );

    const activateAllBlocks = () => {

		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
            if ( 'all' !== activeBlocksFilterTab && ( ! categoriesBlocks[activeBlocksFilterTab] || ! categoriesBlocks[activeBlocksFilterTab].includes( block ) ) ) {
                continue;
            }
			value[ block ] = 'block';
		}
        // Update Blocks Statuses.
        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

        if ( 'extensions' === activeBlocksFilterTab || 'all' === activeBlocksFilterTab ) {
            // Update Extensions Statuses.
            dispatch( {type: 'UPDATE_ENABLE_MASONRY_EXTENSION', payload: 'enabled' } );
            dispatch( {type: 'UPDATE_ENABLE_DISPLAY_CONDITIONS', payload: 'enabled' } );
			dispatch( {type: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS', payload: 'enabled' } );
			dispatch( {type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'enabled' } );
        }

        if ( 'pro' === activeBlocksFilterTab ) {
            // Update Extensions Statuses.
			dispatch( { type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'enabled' } );            
        }

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const deactivateAllBlocks = () => {

		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
            if ( coreBlocks.includes( block ) || ( 'all' !== activeBlocksFilterTab && ( ! categoriesBlocks[activeBlocksFilterTab] || ! categoriesBlocks[activeBlocksFilterTab].includes( block ) ) ) ) {
                continue;
            }
			value[ block ] = 'disabled';
		}

        // Update Blocks Statuses.
        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

        if ( 'extensions' === activeBlocksFilterTab || 'all' === activeBlocksFilterTab ) {
            // Update Extensions Statuses.
            dispatch( {type: 'UPDATE_ENABLE_MASONRY_EXTENSION', payload: 'disabled' } );
            dispatch( {type: 'UPDATE_ENABLE_DISPLAY_CONDITIONS', payload: 'disabled' } );
			dispatch( {type: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS', payload: 'disabled' } );
			dispatch( {type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'disabled' } );
        }

        if ( 'pro' === activeBlocksFilterTab ) {
            // Update Extensions Statuses.
			dispatch( { type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'disabled' } );            
        }

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

    // This method concatinates all the required classes for Active and Normal states for Free and Pro Tabs.
    const renderTabClassNames = ( tabName ) => {
        let tabClasses = '';
        if ( tabName === activeBlocksFilterTab ) {
            tabClasses += ( 'pro' === tabName ) ? 'text-spectra active:text-spectra focus:text-spectra hover:text-spectra' : 'text-slate-800 active:text-slate-800 focus:text-slate-800 hover:text-slate-800';
            tabClasses += ' bg-white border-transparent shadow shadow-focused';
        } 
        else {
            tabClasses += ( 'pro' === tabName ) ? 'text-spectra border-indigo-100 bg-indigo-50 focus:text-spectra active:text-spectra hover:text-spectra' : 'text-slate-500 border-slate-200 focus:text-slate-500 active:text-slate-500 hover:text-slate-500';
            tabClasses += ' focus-visible:bg-white hover:bg-white';
        }
        tabClasses += ' px-4 py-1 ml-4 my-1 font-medium text-sm rounded-2xl cursor-pointer border transition';
        return tabClasses;
    };

    return (
        <div className="mx-auto mb-6 px-6 lg:max-w-[80rem]">
            <div className="w-full sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="w-full spectra-admin__input-field spectra-admin__dropdown"
                    style={ {
                        maxWidth: '100%',
                    } }
                >
                    {tabs.map( ( tab ) => (
                    <option key={tab.name}>{tab.name}</option>
                    ) )}
                </select>
            </div>
            <div className="hidden justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row">
                <nav className="flex -ml-4 flex-wrap justify-center lg:justify-start" aria-label="Tabs">
                    {tabs.map( ( tab ) => (
                    <Link // eslint-disable-line
						to={ {
							pathname: 'admin.php',
							search: `?page=spectra&path=blocks&filterTab=${tab.slug}`,
						} }
                        key={tab.name}
                        className={ renderTabClassNames( tab.slug ) }
                        onClick={ () => {
							dispatch( {type:'UPDATE_BLOCKS_ACTIVE_FILTER_TAB', payload: tab.slug} )
						}}
                    >
                        {tab.name}
					</Link>
                    ) )}
                </nav>
                <span className="z-0 flex shadow-sm rounded-[0.2rem] justify-center">
                    <button
                        type="button"
                        className="focus:bg-indigo-50 focus:text-slate-500 focus-visible:text-spectra hover:bg-indigo-50 hover:text-spectra -ml-px relative inline-flex items-center px-4 py-2 border border-slate-200 bg-white text-sm font-medium text-slate-500 focus:z-10 focus:outline-none rounded-l-md transition"
                        onClick={activateAllBlocks}
                    >
                        Activate all
                    </button>
                    <button
                        type="button"
                        className="focus:bg-indigo-50 focus:text-slate-500 focus-visible:text-spectra hover:bg-indigo-50 hover:text-spectra -ml-px relative inline-flex items-center px-4 py-2 border border-slate-200 bg-white text-sm font-medium text-slate-500 focus:z-10 focus:outline-none rounded-r-md transition"
                        onClick={deactivateAllBlocks}
                    >
                        Deactivate all
                    </button>
                </span>
            </div>
        </div>
    );
};

export default FilterTabs;
