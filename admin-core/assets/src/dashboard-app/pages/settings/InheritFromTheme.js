import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const InheritFromThemeRender = () => {
	const dispatch = useDispatch();
	const inheritFromTheme = useSelector( ( state ) => state.btnInheritFromTheme );
	const enableInheritTheme = 'enabled' === inheritFromTheme;

	const updateEnableInheritFromTheme = () => {
		const status = inheritFromTheme === 'disabled' ? 'enabled' : 'disabled';

		dispatch( { type: 'UPDATE_BTN_INHERIT_FROM_THEME', payload: status } );

		const data = {
			security: uag_react.btn_inherit_from_theme_nonce,
			value: status,
		};

		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_btn_inherit_from_theme',
			data,
		} );

		getApiDataFetch.then( () => {
			dispatch( {
				type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
				payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ),
			} );
		} );
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Button - Inherit From Theme', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable the "Inherit From Theme" option to make all buttons in Spectra blocks across your website inherit their styles from the theme.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableInheritTheme }
					onChange={ updateEnableInheritFromTheme }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default InheritFromThemeRender;
