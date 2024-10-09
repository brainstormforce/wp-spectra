import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';

import getApiData from '@Controls/getApiData';

const FilterTabs = () => {

	const blocksInfo = uag_react.blocks_info;
    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const coreBlocks = useSelector( ( state ) => state.coreBlocks );
    const [ categoriesBlocks, setcategoriesBlocks ] = useState( [] );

    useEffect( () => {

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
			value[ block ] = 'block';
		}
        // Update Blocks Statuses.
        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

		// Update Extensions Statuses.
		dispatch( { type: 'UPDATE_ENABLE_MASONRY_EXTENSION', payload: 'enabled' } );
		dispatch( { type: 'UPDATE_ENABLE_DISPLAY_CONDITIONS', payload: 'enabled' } );
		dispatch( { type: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS', payload: 'enabled' } );
		dispatch( { type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'enabled' } );
		dispatch( { type: 'UPDATE_ENABLE_ANIMATIONS_EXTENSION', payload: 'enabled' } );
		dispatch( { type: 'UPDATE_GBS_EXTENSION', payload: 'enabled' } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.blocks_activation_and_deactivation_nonce,
            value: JSON.stringify( value ),
			status: 'enabled',
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_blocks_activation_and_deactivation',
            data,
        } );
        // Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
	};

	const deactivateAllBlocks = () => {

		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
            if ( coreBlocks.includes( block ) ) {
                continue;
            }
			value[ block ] = 'disabled';
		}

        // Update Blocks Statuses.
        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

		// Update Extensions Statuses.
		dispatch( { type: 'UPDATE_ENABLE_MASONRY_EXTENSION', payload: 'disabled' } );
		dispatch( { type: 'UPDATE_ENABLE_DISPLAY_CONDITIONS', payload: 'disabled' } );
		dispatch( { type: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS', payload: 'disabled' } );
		dispatch( { type: 'UPDATE_ENABLE_DYNAMIC_CONTENT_EXTENSION', payload: 'disabled' } );
		dispatch( { type: 'UPDATE_ENABLE_ANIMATIONS_EXTENSION', payload: 'disabled' } );
		dispatch( { type: 'UPDATE_GBS_EXTENSION', payload: 'disabled' } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.blocks_activation_and_deactivation_nonce,
            value: JSON.stringify( value ),
			status: 'disabled',
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_blocks_activation_and_deactivation',
            data,
        } );
        // Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
	};

    return (
        <div className="mx-auto mb-6 px-6 lg:max-w-[80rem]">
            <div className="hidden justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row">
				<div className="mr-96 mt-10 mb-8 font-semibold text-2xl lg:max-w-[80rem]">{__( 'Blocks / Extensions', 'ultimate-addons-for-gutenberg' )}</div>
                <span className="z-0 flex shadow-sm rounded-[0.2rem] justify-center">
                    <button
                        type="button"
                        className="focus:bg-indigo-50 focus:text-slate-500 focus-visible:text-spectra hover:bg-indigo-50 hover:text-spectra -ml-px relative inline-flex items-center px-4 py-2 border border-slate-200 bg-white text-sm font-medium text-slate-500 focus:z-10 focus:outline-none rounded-l-md transition"
                        onClick={activateAllBlocks}
                    >
                        { __( 'Activate all', 'ultimate-addons-for-gutenberg' ) }
                    </button>
                    <button
                        type="button"
                        className="focus:bg-indigo-50 focus:text-slate-500 focus-visible:text-spectra hover:bg-indigo-50 hover:text-spectra -ml-px relative inline-flex items-center px-4 py-2 border border-slate-200 bg-white text-sm font-medium text-slate-500 focus:z-10 focus:outline-none rounded-r-md transition"
                        onClick={deactivateAllBlocks}
                    >
                        { __( 'Deactivate all', 'ultimate-addons-for-gutenberg' ) }
                    </button>
                </span>
            </div>
        </div>
    );
};

export default FilterTabs;
