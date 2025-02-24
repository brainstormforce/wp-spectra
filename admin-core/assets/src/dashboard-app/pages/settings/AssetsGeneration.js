import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import { Container, Label, Switch } from '@bsf/force-ui';

const AssetsGeneration = () => {
	const dispatch = useDispatch();

	const enableFileGeneration = useSelector( ( state ) => state.enableFileGeneration );
	const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;

	const updateFileGenerationStatus = () => {
		let assetStatus;
		if ( enableFileGeneration === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

		const action = 'uag_enable_file_generation',
			nonce = uag_react.enable_file_generation_nonce;
		// Create an object with the security and value properties
		const data = {
			security: nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action,
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const renderText = () => (
		<p className='m-0'>
			{ __( 'Please read ', 'ultimate-addons-for-gutenberg' ) }

			<a
				href={uag_admin_react.spectra_website?.docsCategoryDynamicUrl?.replace( '#category#', 'file-generation' )}
				target="_blank"
				rel="noreferrer"
				className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover"
			>
				this article
			</a>

			{ __(
				' to learn the difference between generating CSS and JS inline and in a separate file.',
				'ultimate-addons-for-gutenberg'
			) }
		</p>
	);

	return (
		<>
			<SettingsItem
				title={ __( 'File Generation', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Spectra loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for Spectra blocks, enable this option. ',
					'ultimate-addons-for-gutenberg'
				) }
				currentSetting={ renderText }
			>
				<Switch
					value={ fileGenerationStatus }
					onChange={ updateFileGenerationStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

const SettingsItem = ( { title, settingText, currentSetting, children } ) => {
	return (
		<Container
			align="center"
			className="mb-0.5 w-full flex justify-between lg:flex-row flex-col lg:items-center items-start"
		>
			<Container.Item className="space-y-1 lg:max-w-[480px]">
				<Label className="font-semibold mb-1" htmlFor="default-width" size="md">
					{ title }
				</Label>
				<Label className="m-0 font-normal" size="sm" tag="p" variant="help">
					{ settingText }
				</Label>
				{ currentSetting && (
					<Label className="m-0 italic font-normal" size="sm" tag="p" variant="help">
						{ currentSetting() }
					</Label>
				) }
			</Container.Item>

			{ children }
		</Container>
	);
};

export default AssetsGeneration;
