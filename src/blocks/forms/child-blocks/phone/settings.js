import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGSelectControl from '@Components/select-control';
import { ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { phoneRequired, pattern, autocomplete } = attributes;

	const phoneInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGSelectControl
					label={ __( 'Autocomplete', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: autocomplete,
						label: 'autocomplete',
					} }
					setAttributes={ setAttributes }
					options={ [
						{ label: __( 'Off', 'ultimate-addons-for-gutenberg' ), value: 'off' },
						{ label: __( 'Phone', 'ultimate-addons-for-gutenberg' ), value: 'tel-national' },
					] }
				/>
				<UAGSelectControl
					label={ __( 'Pattern', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: pattern,
						label: 'pattern',
					} }
					setAttributes={ setAttributes }
					options={ [
						{ label: 'None', value: '' },
						{
							label: '123-45-678',
							value: __( '[0-9]{3}-?[0-9]{2}-?[0-9]{3}', 'ultimate-addons-for-gutenberg' ),
						},
						{
							label: '123-456-7890',
							value: __( '[0-9]{3}-?[0-9]{3}-?[0-9]{4}', 'ultimate-addons-for-gutenberg' ),
						},
						{
							label: '123 456 7890',
							value: __( '[0-9]{3}s?[0-9]{3}s?[0-9]{4}', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ phoneRequired }
					onChange={ () => setAttributes( { phoneRequired: ! phoneRequired } ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>{ phoneInspectorControls() }</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
