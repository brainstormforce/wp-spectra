import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const classNames = ( ...classes ) => ( classes.filter( Boolean ).join( ' ' ) );

const FilterTabs = () => {

	const query = new URLSearchParams( useLocation()?.search );
	const blocksInfo = uag_react.blocks_info;
    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );
    const [ categoriesBlocks, setcategoriesBlocks ] = useState( [] );

    const tabs = [
        { name: 'All', slug: 'all' },
		{ name: 'Core', slug: 'core' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },
        { name: 'Extensions', slug: 'extensions' },
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
            if ( 'all' !== activeBlocksFilterTab && ( ! categoriesBlocks[activeBlocksFilterTab] || ! categoriesBlocks[activeBlocksFilterTab].includes( block ) ) ) {
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
							pathname: 'options-general.php',
							search: `?page=spectra&path=blocks&filterTab=${tab.slug}`,
						} }
                        key={tab.name}
                        className={ classNames(
                            ( tab.slug === activeBlocksFilterTab )
                                ? 'bg-white border-transparent text-slate-800 active:text-slate-800 focus:text-slate-800 hover:text-slate-800 shadow shadow-focused'
                                : 'text-slate-500 border-slate-200 focus:text-slate-500 focus-visible:bg-white active:text-slate-500 hover:text-slate-500 hover:bg-white',
                            'px-4 py-1 ml-4 my-1 font-medium text-sm rounded-2xl cursor-pointer border transition'
                        ) }
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
