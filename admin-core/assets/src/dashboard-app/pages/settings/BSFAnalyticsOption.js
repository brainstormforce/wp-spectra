import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import { Container, Label, Switch } from '@bsf/force-ui';

const BSFAnalyticsOption = () => {

	const dispatch = useDispatch();

	const enableBSFAnalyticsOption = useSelector( ( state ) => state.enableBSFAnalyticsOption );
	const enableBSFAnalyticsOptionStatus = 'no' === enableBSFAnalyticsOption ? false : true;

	const updateEnableBSFAnalyticsOptionStatus = () => {

		let assetStatus;
		if ( enableBSFAnalyticsOption === 'no' ) {
			assetStatus = 'yes';
		} else {
			assetStatus = 'no';
		}

		dispatch( { type: 'UPDATE_ENABLE_BSF_ANALYTICS_OPTION', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.enable_bsf_analytics_option_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_enable_bsf_analytics_option',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
		} );
	};

	const renderText = () => (
		<p className='m-0'>
			{__( 'Allow Brainstorm Force products to track non-sensitive usage tracking data. Please read ', 'ultimate-addons-for-gutenberg' )}

			<a
				href={'https://store.brainstormforce.com/usage-tracking/?utm_source=uag_dashboard&utm_medium=general_settings&utm_campaign=usage_tracking'}
				target="_blank"
				rel="noreferrer"
				className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover"
			>
				{__( 'this article', 'ultimate-addons-for-gutenberg' )}
			</a>

			{__(
				' to learn more.',
				'ultimate-addons-for-gutenberg'
			)}
		</p>
	);

	return (
		<SettingsItem
			title={__( 'Usage Tracking', 'ultimate-addons-for-gutenberg' )}
			settingText={renderText}
		>
			<Switch
				value={enableBSFAnalyticsOptionStatus}
				onChange={updateEnableBSFAnalyticsOptionStatus}
				size="md"
				className="uagb-remove-ring border-none"
			/>
		</SettingsItem>
	);
};
const SettingsItem = ( { title, settingText, children } ) => {
	return (
		<Container
			align="center"
			className="mb-0.5 w-full flex justify-between lg:flex-row flex-col lg:items-center items-start"
		>
			<Container.Item className="space-y-1 lg:max-w-[480px]">
				<Label className="font-semibold mb-1" htmlFor="default-width" size="md">
					{title}
				</Label>
				{settingText && (
				<Label className="m-0 font-normal" size="sm" tag="p" variant="help">
					{settingText()}
				</Label>
				)}
			</Container.Item>

			{children}
		</Container>
	);
};
export default BSFAnalyticsOption;
