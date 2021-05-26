import { __ } from '@wordpress/i18n';

import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, TextControl } from '@wordpress/components';

export default function contentTimelineChildSettings( props ) {
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
			<PanelBody
				title={ __( 'Timeline Item', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TextControl
					label={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
					value={ t_date }
					onChange={ ( value ) => setAttributes( { t_date: value } ) }
				/>
			</PanelBody>
		);
	};
	return <InspectorControls>{ timelineItemSettings() }</InspectorControls>;
}
