import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { ToggleControl, TextControl, SelectControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { nameRequired, placeholder, autocomplete } = attributes;

	const nameInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<SelectControl
					label={ __( 'Autocomplete', 'ultimate-addons-for-gutenberg' ) }
					value={ autocomplete }
					onChange={ ( value ) =>
						setAttributes( { autocomplete: value } )
					}
				>
					<option value="off">Off</option>
					<option value="name">Full Name</option>
					<optgroup label="Name Breakdown">
						<option value="honorific-prefix">Prefix</option>
						<option value="given-name">First Name</option>
						<option value="additional-name">Middle Name</option>
						<option value="family-name">Last Name</option>
						<option value="honorific-suffix">Suffix</option>
					</optgroup>
					<option value="username">Username</option>
					<option value="nickname">Nickname</option>
					<option value="organization">Company Name</option>
					<option value="organization-title">Job Title</option>
					<optgroup label="Address Lines">
						<option value="address-line1">Address Line 1</option>
						<option value="address-line2">Address Line 2</option>
						<option value="address-line3">Address Line 3</option>
					</optgroup>
					<option value="country-name">Country</option>
					<option value="postal-code">Postal / ZIP Code</option>
				</SelectControl>
				<TextControl
					label="Placeholder"
					value={ placeholder }
					onChange={ ( value ) =>
						setAttributes( { placeholder: value } )
					}
					placeholder={ __(
						'Placeholder',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ nameRequired }
					onChange={ () =>
						setAttributes( { nameRequired: ! nameRequired } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>
					{ nameInspectorControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default React.memo( Settings );
