import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const LegacyBlocks = () => {

    const dispatch = useDispatch();

    const enableLegacyBlocks = useSelector( ( state ) => state.enableLegacyBlocks );
    const enableLegacyBlocksStatus = 'no' === enableLegacyBlocks ? false : true;

    const updateEnableLegacyBlocks = () => {

        let assetStatus;
		if ( enableLegacyBlocks === 'no' ) {
            assetStatus = 'yes';
		} else {
            assetStatus = 'no';
		}

        dispatch( { type: 'UPDATE_LEGACY_BLOCKS', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_legacy_blocks' );
		formData.append( 'security', uag_react.enable_legacy_blocks_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Enable Legacy Blocks', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enableLegacyBlocks }
                    onChange={ updateEnableLegacyBlocks }
                    className={ classNames(
                        enableLegacyBlocksStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    ) }
                >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enableLegacyBlocksStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Enable this option to enable the support of our Legacy Blocks on the site.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default LegacyBlocks;
