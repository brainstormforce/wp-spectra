import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import RollBackConfirmPopup from './RollBackConfirmPopup';

const RollBack = () => {

    const previousVersions = uag_react.global_data.uag_previous_versions;

    const [ previousVersionSelect, setPreviousVersion ] = useState( previousVersions[0].value );
    const [ openPopup, setopenPopup ] = useState( false );
    const [ confirmPopup, setconfirmPopup ] = useState( false );

    const rollbackButtonClickHandler = () => {
        setopenPopup( true );
    };

    return (
        <>
            <section className='flex border-b border-solid border-slate-200 p-8 justify-between'>
                <div className='pr-16 w-[78%]'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                    <p className="mt-[0.6rem] text-sm ">
                        {
                            // eslint-disable-next-line @wordpress/i18n-no-variables
                            __( `Experiencing an issue with Spectra version ${uag_react.plugin_ver}? Roll back to a previous version to help troubleshoot the issue.`, 'ultimate-addons-for-gutenberg' )
                        }
                    </p>
                </div>
                <div className='flex justify-right'>
                    <select
                        id="location"
                        name="location"
                        className="block w-20 h-9 pl-3 pr-10 py-2 mr-3 text-base border-gray-300 focus:outline-none focus:ring-spectra focus:border-spectra sm:text-sm rounded-[0.2rem] spectra-admin__input-field"
                        onBlur={ ( e ) => { setPreviousVersion( e.target.value ); } }
                    >
                        {
                            previousVersions.map( ( version ) => {
                                return (
                                    <option key={version.value} value={version.value}>{version.label}</option>
                                );
                            } )
                        }
                    </select>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-spectra focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none h-9"
                        onClick={rollbackButtonClickHandler}
                    >
                        { confirmPopup &&
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                        {__( 'Rollback', 'ultimate-addons-for-gutenberg' )}
                    </button>
                </div>
            </section>
            <RollBackConfirmPopup openPopup={openPopup} setopenPopup={setopenPopup} previousVersionSelect={previousVersionSelect} setconfirmPopup={setconfirmPopup} />
        </>
    );
};

export default RollBack;
