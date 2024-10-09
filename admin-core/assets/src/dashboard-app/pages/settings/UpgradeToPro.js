import { __ } from '@wordpress/i18n';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

const UpgradeNotices = ( { title, description } ) => {

	const dispatch = useDispatch();
	
	if ( uag_react.spectra_pro_ver ) {
		return '';
	}

	const onUpgradeLinkTrigger = () => {
		window.open(
			'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=setting',
			'_blank'
		);
	};
	
	const activatePro = ( e ) => {
		const isThisNull = uag_react.pro_plugin_status;
		
		if ( 'not-installed' !== isThisNull ) {

			// Create an object with the required data to activate the 'spectra' Pro feature
			const data = {
				security: uag_react.pro_activate_nonce,
				value: 'spectra',
			};
			e.target.innerText = uag_react.plugin_activating_text;
			// Call the getApiData function with the specified parameters
			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_pro_activate',
				data,
			} );

			// Wait for the API call to complete, update the state to show a notification, and reload the page
			getApiFetchData.then( () => {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Spectra Pro Activated!' } );
				setTimeout( () => {
					window.location.reload();
				}, 500 );
			} );
		} else {
			onUpgradeLinkTrigger();
		}
	};

	const getSpectraProTitle = () => {
		return 'not-installed' !== uag_react.pro_plugin_status ? __( 'Activate Now', 'ultimate-addons-for-gutenberg' ) : __( 'Upgrade to Pro', 'ultimate-addons-for-gutenberg' );
	}

	return (
		<section className='not-last-child block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
			<div className='mr-16 w-full flex flex-col sm:flex-row sm:items-center'>
				<h3 className="p-0 flex-1 justify-right inline-flex text-xl leading-8 font-medium text-slate-800">
					{title}
				</h3>
				<button
					type="button"
					className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none h-9"
					onClick={activatePro}
				>
					{getSpectraProTitle()}
				</button>
			</div>
			<p className="mt-2 w-full md:w-9/12 text-sm text-slate-500 tablet:w-full">
				{description}
			</p>
		</section>
	);
};

export default UpgradeNotices;