import React from 'react';
import { Container, Label } from '@bsf/force-ui';

const SettingsItem = ( { title, settingText, currentSetting, children } ) => {
	return (
		<Container align="center" className="mb-0.5 w-full flex lg:items-center items-start justify-between lg:flex-row flex-col">
			<Container.Item className="space-y-1 lg:max-w-[480px]">
				<Label className="font-semibold" htmlFor="default-width" size="md">
					{ title }
				</Label>
				<Label className="m-0" size="sm" tag="p" variant="help">
					{ settingText }
				</Label>
				{ currentSetting && (
					<Label className="m-0 italic" size="sm" tag="p" variant="help">
						{ currentSetting }
					</Label>
				) }
			</Container.Item>

			{ children }
		</Container>
	);
};

export const SettingsItemDisabled = ( { title, settingText, currentSetting, children } ) => {
	return (
		<Container align="center" className="mb-0.5 w-full flex lg:items-center items-start justify-between lg:flex-row flex-col">
			<Container.Item className="space-y-1 lg:max-w-[480px]">
				<Label className="font-semibold text-text-tertiary" htmlFor="default-width" size="md">
					{ title }
				</Label>
				<Label className="m-0 text-text-tertiary" size="sm" tag="p" variant="help">
					{ settingText }
				</Label>
				{ currentSetting && (
					<Label className="m-0 italic text-text-tertiary" size="sm" tag="p" variant="help">
						{ currentSetting }
					</Label>
				) }
			</Container.Item>

			{ children }
		</Container>
	);
};

export default SettingsItem;
