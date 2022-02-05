import UAGB_Block_Icons from '@Common/block-icons';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import { __ } from '@wordpress/i18n';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const BlockCard = ( props ) => {

    const {
        link,
        slug,
        title,
    } = props.blockInfo;

    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses ); 

    const blockActivationStatus = 'disabled' === blocksStatuses[slug] ? false : true;

    const updateBlockStatus = () => {

        let status = 'disabled';

        if ( ! blockActivationStatus ) {
            status = slug;
        }

        const optionsClone = { ...blocksStatuses };
        optionsClone[ slug ] = status;

        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: optionsClone} );
       
        const formData = new window.FormData();

        formData.append(
            'action',
            'uag_blocks_activation_and_deactivation'
        );
        formData.append(
            'security',
            uag_react.blocks_activation_and_deactivation_nonce
        );
        formData.append( 'value', JSON.stringify( optionsClone ) );

        apiFetch( {
            url: uag_react.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( () => {
        } );
    };

    return (
        <div
        key={slug}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-4"
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons[slug] }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-0">{title}</p>
                <a className="text-sm  text-wpcolor hover:text-wphovercolor truncate" href={ `https://ultimategutenberg.com/blocks/${ link }` } target="_blank"rel="noreferrer">{__( 'Live Demo', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            <Switch
                checked={blockActivationStatus}
                onChange={updateBlockStatus}
                className={classNames(
                    blockActivationStatus ? 'bg-wpcolor' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                )}
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    blockActivationStatus ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
        </div>
    );
};

export default BlockCard;