import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import UAGSelectControl from '@Components/select-control';
import { ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { nameRequired, placeholder, autocomplete } = attributes;

	const nameInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGSelectControl
					label={ __(
						'Autocomplete',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: autocomplete,
						label: 'autocomplete',
					} }
					setAttributes={ setAttributes }
				>
					<option value="off">
						{ __(
						'Off',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<option value="name">
						{ __(
						'Full Name',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<optgroup label="Name Breakdown">
						<option value="honorific-prefix">
							{ __(
							'Prefix',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="given-name">
							{ __(
							'First Name',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="additional-name">
							{ __(
							'Middle Name',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="family-name">
							{ __(
							'Last Name',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="honorific-suffix">
							{ __(
							'Suffix',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
					</optgroup>
					<option value="username">
						{ __(
						'Username',
						'ultimate-addons-for-gutenberg'
						) }
						</option>
					<option value="nickname">
						{ __(
						'Nickname',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<option value="organization">
						{ __(
						'Company Name',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<option value="organization-title">
						{ __(
						'Job Title',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<optgroup label="Address Lines">
						<option value="address-line1">
							{ __(
							'Address Line 1',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="address-line2">
							{ __(
							'Address Line 2',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
						<option value="address-line3">
							{ __(
							'Address Line 3',
							'ultimate-addons-for-gutenberg'
							) }
						</option>
					</optgroup>
					<option value="country-name">
						{ __(
						'Country',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
					<option value="postal-code">
						{ __(
						'Postal / ZIP Code',
						'ultimate-addons-for-gutenberg'
						) }
					</option>
				</UAGSelectControl>
				<UAGTextControl
					label="Placeholder"
					value={ placeholder }
					data={{
						value: placeholder,
						label: 'placeholder',
					}}
					setAttributes={ setAttributes }
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
export default memo( Settings );
