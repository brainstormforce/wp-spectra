import React, { useState } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import RollBackConfirmPopup from './RollBackConfirmPopup';
import { Container, Label } from '@bsf/force-ui';
// import ConfirmationPopup from '@Common/components/ConfirmationPopup';

const RollBack = () => {
	const previousVersions = uag_react.global_data.uag_previous_versions;

	const [ previousVersionSelect, setPreviousVersion ] = useState( previousVersions[ 0 ].value );
	const [ openPopup, setopenPopup ] = useState( false );
	const [ confirmPopup, setconfirmPopup ] = useState( false );

	const rollbackButtonClickHandler = () => {
		setopenPopup( true );
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ) }
				settingText={ sprintf(
					/* translators: abbreviation for units */
					__(
						'Experiencing an issue with Spectra version %s? Roll back to a previous version to help troubleshoot the issue.',
						'ultimate-addons-for-gutenberg'
					),
					uag_react.plugin_ver
				) }
			>
				<div className="flex items-center">
					<select
						id="location"
						name="location"
						className="block h-9 mr-2 sm:text-sm spectra-admin__input-field spectra-admin__dropdown"
						onBlur={ ( e ) => {
							setPreviousVersion( e.target.value );
						} }
					>
						{ previousVersions.map( ( version ) => {
							return (
								<option key={ version.value } value={ version.value }>
									{ version.label }
								</option>
							);
						} ) }
					</select>
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none h-9 cursor-pointer"
						onClick={ rollbackButtonClickHandler }
					>
						{ confirmPopup && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						) }
						{ __( 'Rollback', 'ultimate-addons-for-gutenberg' ) }
					</button>
				</div>
			</SettingsItem>

			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

			<RollBackConfirmPopup
				{ ...{
					openPopup,
					setopenPopup,
					previousVersionSelect,
					setconfirmPopup,
					popupContent: {
						title: __( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
						description: sprintf(
							// translators: %1$s: selected version of Spectra.
							__(
								'Are you sure you want to rollback to Spectra v%1$s?',
								'ultimate-addons-for-gutenberg'
							),
							previousVersionSelect
						),
					},
					popupAccept: {
						label: __( 'Rollback', 'ultimate-addons-for-gutenberg' ),
					},
					popupCancel: {
						label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
					},
				} }
			/>
		</>
	);
};

const SettingsItem = ( { title, settingText, currentSetting, children } ) => {
	return (
		<Container
			align="center"
			className="mb-0.5 w-full flex justify-between flex-col lg:flex-row lg:items-center items-start"
		>
			<Container.Item className="space-y-1 max-w-[360px]">
				<Label className="font-semibold mb-1" htmlFor="default-width" size="md">
					{ title }
				</Label>
				<Label className="m-0 font-normal" size="sm" tag="p" variant="help">
					{ settingText }
				</Label>
				{ currentSetting && (
					<Label className="m-0 italic font-normal" size="sm" tag="p" variant="help">
						{ currentSetting }
					</Label>
				) }
			</Container.Item>

			{ children }
		</Container>
	);
};

export default RollBack;
