import UAGB_Block_Icons from '@Common/block-icons';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import { __ } from '@wordpress/i18n';

const classNames = ( ...classes ) => ( classes.filter( Boolean ).join( ' ' ) );

const BlockCard = ( props ) => {

    const {
        admin_categories,
        link,
        slug,
        title,
        deprecated,
        pro_filler,
    } = props.blockInfo;

    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const coreBlocks = useSelector( ( state ) => state.coreBlocks );
    const isCoreBlock = coreBlocks.includes( slug );

    const blockActivationStatus = ( 'disabled' === blocksStatuses[slug] && ! isCoreBlock ) ? false : true;

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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
    };

    return (
        <div
        key={slug}
        className={ classNames(
            ( blockActivationStatus && ! pro_filler )
                ? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
                : 'border-slate-200 spectra-disabled-icon',
            'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition'
        ) }
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons[slug] }
            </div>
            <div className="uagb-admin-block-card__title flex-1 min-w-0">
                <p className="text-base font-medium text-slate-800">
                    { title }
                    { deprecated && (
                        <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-200 text-slate-400 rounded spectra-admin__block-label">
                            { __( 'Legacy', 'ultimate-addons-for-gutenberg' ) }
                        </div>
                    ) }
                    { ( ! pro_filler && admin_categories?.includes( 'pro' ) ) && (
                        <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
                            { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                        </div>
                    ) }
                </p>
                <a className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate" href={ `https://wpspectra.com/blocks/${ link }` } target="_blank"rel="noreferrer">{__( 'Live Demo', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            { pro_filler ? (
                <div className="inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label">
                    { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                </div>
            ) : (
                <div 
                    className={ isCoreBlock ? 'cursor-not-allowed' : '' }
                    title= { isCoreBlock ? __( 'This is a Core Spectra block & cannot be disabled.', 'ultimate-addons-for-gutenberg' ) : '' }
                >
                    <Switch
                        checked={blockActivationStatus}
                        onChange={updateBlockStatus}
                        className={classNames(
                            isCoreBlock ? 'pointer-events-none' : '',
                            blockActivationStatus ? 'bg-spectra' : 'bg-slate-200',
                            'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                        )}
                        >
                        <span
                            aria-hidden="true"
                            className={classNames(
                            blockActivationStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                        >
                        </span>
                    </Switch>
                </div>
            ) }
        </div>
    );
};

export default BlockCard;
