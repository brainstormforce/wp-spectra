import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGTextControl from '@Components/text-control';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	// Setup the attributes.
	const {
		setAttributes,
		attributes: { t_date, displayPostDate },
	} = props;

	const timelineItemSettings = () => {
		if ( displayPostDate ) {
			return '';
		}

		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGTextControl
					label={ __( 'Date (mm/dd/yyyy)', 'ultimate-addons-for-gutenberg' ) }
					value={ t_date }
					data={ {
						value: t_date,
						label: 't_date',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { t_date: value } ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>{ timelineItemSettings() }</InspectorTab>
				<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default memo( Settings );
