import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import RollBackConfirmPopup from './RollBackConfirmPopup';
import { Button } from '@wordpress/components';

const RollBack = () => {

    const previousVersions = uag_react.global_data.uag_previous_versions;
    
	const [show, setshow] = useState( false );

    const [ previousVersionSelect, setPreviousVersion ] = useState( previousVersions[0].value );
    const [ openPopup, setopenPopup ] = useState( false );
    const [ confirmPopup, setconfirmPopup ] = useState( false );

    const rollbackButtonClickHandler = () => {
        setopenPopup( true );
    };

    return (
        <>
            <section className='block border-b border-solid border-slate-200 p-6 justify-between'>  
                <div className='mr-16 w-full flex items-center'>
                    <Button className='p-0 flex-1 justify-right inline-flex uag-accordion'
                        onClick={ () => setshow( ! show ) }
                    >
                        { ! show && ( <svg className="w-4 text-sm mr-4 transition" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> ) }
                        { show && ( <svg className="w-4 text-sm mr-4 transition" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> ) }
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' )}
                        </h3>
                    </Button>
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
                </div>
                { show && (
                    <p className="mt-2 pl-8 w-10/12 text-sm">
                        {
                            // eslint-disable-next-line @wordpress/i18n-no-variables
                            __( `Experiencing an issue with Spectra version ${uag_react.plugin_ver}? Roll back to a previous version to help troubleshoot the issue.`, 'ultimate-addons-for-gutenberg' )
                        }
                    </p>
                )}
            </section>
            <RollBackConfirmPopup openPopup={openPopup} setopenPopup={setopenPopup} previousVersionSelect={previousVersionSelect} setconfirmPopup={setconfirmPopup} />
        </>
    );
};

export default RollBack;
