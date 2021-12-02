import React from 'react';
import { __ } from '@wordpress/i18n';
import { ToggleControl, TextControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { InspectorControls } from '@wordpress/block-editor';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		toggleRequired,
		toggleStatus,
		layout,
		trueValue,
		falseValue,
	} = attributes;

	const toggleInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<p className="uagb-settings-notice">
					{ __(
						'Leaving the toggle in On/Off state will set it as a default value on page load for the user.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>

				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ toggleRequired }
					onChange={ () =>
						setAttributes( { toggleRequired: ! toggleRequired } )
					}
				/>
				<ToggleControl
					label={
						toggleStatus
							? __( 'ON State', 'ultimate-addons-for-gutenberg' )
							: __( 'OFF State', 'ultimate-addons-for-gutenberg' )
					}
					checked={ toggleStatus }
					onChange={ () =>
						setAttributes( { toggleStatus: ! toggleStatus } )
					}
				/>
				<TextControl
					label={ __(
						'True State',
						'ultimate-addons-for-gutenberg'
					) }
					value={ trueValue }
					onChange={ ( value ) =>
						setAttributes( { trueValue: value } )
					}
				/>
				<TextControl
					label={ __(
						'False State',
						'ultimate-addons-for-gutenberg'
					) }
					value={ falseValue }
					onChange={ ( value ) =>
						setAttributes( { falseValue: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: layout,
						label: 'layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: '',
							label: 'Square',
						},
						{
							value: 'round',
							label: 'Round',
						},
					] }
					showIcons={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>
					{ toggleInspectorControls() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default React.memo( Settings );
