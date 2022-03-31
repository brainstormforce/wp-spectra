import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import {
	SelectControl
} from '@wordpress/components';

import { Switch } from '@headlessui/react'

const BlockSettings = () => {

	// const dispatch = useDispatch();

    // const contentWidth = useSelector( ( state ) => state.contentWidth );
	console.log(uag_react.enable_recaptcha);

    // const enableCollapsePanelsStatus = 'disabled' === enableCollapsePanels ? false : true;
	// const updateContentWidth = ( e ) => {
	// 	const value = e.target.value;

	// 	dispatch( {type: 'UPDATE_CONTENT_WIDTH', payload: value } );

	// 	const formData = new window.FormData();

	// 	formData.append( 'action', 'uag_content_width' );
	// 	formData.append( 'security', uag_react.content_width_nonce );
	// 	formData.append( 'value', value );

	// 	apiFetch( {
	// 		url: uag_react.ajax_url,
	// 		method: 'POST',
	// 		body: formData,
	// 	} ).then( () => {
	// 	} );
	// };
	return '';
    // return (
    //     <>
    //         <section className='flex border-b border-solid border-slate-200'>
    //             <div className='pr-16 pb-8 w-[78%]'>
    //                 <h3 className="text-lg leading-6 font-medium text-gray-900">
    //                     {__( 'Google Recaptcha', 'ultimate-addons-for-gutenberg' )}
    //                 </h3>
	// 				<SelectControl
	// 					label={ __(
	// 						'Select Version',
	// 						'ultimate-addons-for-gutenberg'
	// 					) }
	// 					value={ selectVersion }
	// 					onChange={ ( value ) =>
	// 						setAttributes( { selectVersion: value } )
	// 					}
	// 					options={ [
	// 						{
	// 							value: 'v2',
	// 							label: 'V2',
	// 							tooltip: __(
	// 								'V2',
	// 								'ultimate-addons-for-gutenberg'
	// 							),
	// 						},
	// 						{
	// 							value: 'v3',
	// 							label: 'V3',
	// 							tooltip: __(
	// 								'V3',
	// 								'ultimate-addons-for-gutenberg'
	// 							),
	// 						},
	// 					] }
	// 				/>
	// 				{ selectVersion == 'v2' && (
	// 					<>
	// 						<p className="mt-[0.6rem] text-sm ">
	// 							{
	// 								// eslint-disable-next-line @wordpress/i18n-no-variables
	// 								__( `Site Key`, 'ultimate-addons-for-gutenberg' )
	// 							}
	// 						</p>
	// 						<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1200" min={0} max={1600} />
	// 						<p className="mt-[0.6rem] text-sm ">
	// 							{
	// 								// eslint-disable-next-line @wordpress/i18n-no-variables
	// 								__( `Secret Key`, 'ultimate-addons-for-gutenberg' )
	// 							}
	// 						</p>
	// 						<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1200" min={0} max={1600} />
	// 					</>
	// 				)}
	// 				{ selectVersion == 'v3' && (
	// 					<>
	// 						<p className="mt-[0.6rem] text-sm ">
	// 							{
	// 								// eslint-disable-next-line @wordpress/i18n-no-variables
	// 								__( `Site Key`, 'ultimate-addons-for-gutenberg' )
	// 							}
	// 						</p>
	// 						<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1200" min={0} max={1600} />
	// 						<p className="mt-[0.6rem] text-sm ">
	// 							{
	// 								// eslint-disable-next-line @wordpress/i18n-no-variables
	// 								__( `Secret Key`, 'ultimate-addons-for-gutenberg' )
	// 							}
	// 						</p>
	// 						<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1200" min={0} max={1600} />
	// 					</>
	// 				)}
	// 			</div>
    //             <div className='flex'>
	// 				<ToggleControl
	// 					label={ __(
	// 						'Enable reCAPTCHA ',
	// 						'ultimate-addons-for-gutenberg'
	// 					) }
	// 					checked={ reCaptchaEnable }
	// 					onChange={ () =>
	// 						setAttributes( {
	// 							reCaptchaEnable: ! reCaptchaEnable,
	// 						} )
	// 					}
	// 				/>
	// 				<Switch
	// 					checked={enableCollapsePanelsStatus}
	// 					onChange={updateContentWidth}
	// 					className={classNames(
	// 						enableCollapsePanelsStatus ? 'bg-wpcolor' : 'bg-gray-200',
	// 						'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
	// 					)}
	// 					>
	// 					<span
	// 						aria-hidden="true"
	// 						className={classNames(
	// 						enableCollapsePanelsStatus ? 'translate-x-5' : 'translate-x-0',
	// 						'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
	// 						)}
	// 					/>
	// 				</Switch>
	// 			</div>
    //         </section>
    //     </>
    // );
};

export default BlockSettings;
