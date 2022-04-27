import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const ResponsiveConditionsExtention = () => {

    const enableResponsiveConditions = useSelector( ( state ) => state.enableResponsiveConditions );
    const dispatch = useDispatch();

    const displayResponsiveStatus = 'disabled' === enableResponsiveConditions ? false : true;

    useEffect( () => {

        const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_block_responsive' );
		formData.append( 'security', uag_react.enable_block_responsive_nonce );
		formData.append( 'value', enableResponsiveConditions );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );

    }, [enableResponsiveConditions] );

    const updateResponsiveConditionsStatus = () => {

        let assetStatus;
		if ( enableResponsiveConditions === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_RESPONSIVE_CONDITIONS', payload: assetStatus } );
    };

    return (
        <div
        key={'display-responsive-conditons'}
        className="relative rounded-[0.2rem] border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3"
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons['responsive-conditions'] }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-[0.1875rem]">{__( 'Responsive Conditions', 'ultimate-addons-for-gutenberg' )}</p>
                <a className="text-sm text-gray-900 hover:text-gray-700 truncate underline" href='https://ultimategutenberg.com/docs/display-conditions-blocks/' target="_blank"rel="noreferrer">{__( 'Documentation', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            <Switch
                checked={displayResponsiveStatus}
                onChange={updateResponsiveConditionsStatus}
                className={classNames(
                    displayResponsiveStatus ? 'bg-wpcolor' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                )}
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    displayResponsiveStatus ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
        </div>
    );
};

export default ResponsiveConditionsExtention;
