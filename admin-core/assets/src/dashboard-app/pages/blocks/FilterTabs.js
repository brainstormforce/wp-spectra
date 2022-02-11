import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

function classNames( ...classes ) {
return classes.filter( Boolean ).join( ' ' )
}

const FilterTabs = () => {

    const blocksInfo = uag_react.blocks_info;
    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );
    const [ categoriesBlocks, setcategoriesBlocks ] = useState( [] );

    const tabs = [
        { name: 'All', slug: 'all' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },
        { name: 'Extensions', slug: 'extensions' },
    ];

    useEffect( () => {

        const categoriesBlocksTemp = {
            ...categoriesBlocks
        };

		blocksInfo.map( ( block ) => {

            const blockCategories = block.admin_categories;

            blockCategories.map( ( category ) => {

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
		} );
	};

    return (
        <div className="max-w-3xl mx-auto p-[1.3rem] lg:max-w-[77rem] bg-white mt-[2.43rem] mb-[2.43rem] rounded-[0.2rem]">
            <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
                Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
                id="tabs"
                name="tabs"
                className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-[0.2rem]"
            >
                {tabs.map( ( tab ) => (
                <option key={tab.name}>{tab.name}</option>
                ) )}
            </select>
            </div>
            <div className="hidden justify-between sm:flex">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map( ( tab ) => (
                    <a // eslint-disable-line
                        key={tab.name}
                        className={classNames(
                        tab.slug === activeBlocksFilterTab ? 'bg-wphoverbgcolor text-wpcolor hover:text-wphovercolor' : ' hover:text-wphovercolor',
                        'px-3 py-2 font-medium text-sm rounded-[0.2rem] cursor-pointer'
                        )}
                        onClick={ () => dispatch( {type:'UPDATE_BLOCKS_ACTIVE_FILTER_TAB', payload: tab.slug} ) }
                    >
                        {tab.name}
                    </a>
                    ) )}
                </nav>
                <span className="z-0 flex shadow-sm rounded-[0.2rem] justify-center">
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none rounded-l-md"
                        onClick={activateAllBlocks}
                    >
                        Activate all
                    </button>
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none rounded-r-md"
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
