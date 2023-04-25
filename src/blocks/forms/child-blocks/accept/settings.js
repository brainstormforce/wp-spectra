import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';

import { ToggleControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';
import UAGTextControl from '@Components/text-control';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { acceptRequired, acceptText, showLink, linkLabel, link, linkInNewTab } = attributes;

	const acceptInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<UAGTextControl
					variant="textarea"
					label={ __( 'Acceptance Text', 'ultimate-addons-for-gutenberg' ) }
					help={ __( 'Label to display as acceptance message.', 'ultimate-addons-for-gutenberg' ) }
					value={ acceptText }
					data={ {
						value: acceptText,
						label: 'acceptText',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { acceptText: value } ) }
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ acceptRequired }
					onChange={ () => setAttributes( { acceptRequired: ! acceptRequired } ) }
				/>
				<ToggleControl
					label={ __( 'Enable Privacy Link', 'ultimate-addons-for-gutenberg' ) }
					checked={ showLink }
					onChange={ () => setAttributes( { showLink: ! showLink } ) }
				/>

				{ showLink && (
					<>
						<UAGTextControl
							label={ __( 'Link Label', 'ultimate-addons-for-gutenberg' ) }
							value={ linkLabel }
							data={ {
								value: linkLabel,
								label: 'linkLabel',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { linkLabel: value } ) }
						/>
						<UAGTextControl
							className="uagb-forms-editor-privacy-link"
							label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
							value={ link }
							data={ {
								value: link,
								label: 'link',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { link: value } ) }
							help={ '' === link ? __( 'Enter a valid link.', 'ultimate-addons-for-gutenberg' ) : '' }
						/>
						<ToggleControl
							label={ __( 'Open in new tab', 'ultimate-addons-for-gutenberg' ) }
							checked={ linkInNewTab }
							onChange={ () =>
								setAttributes( {
									linkInNewTab: ! linkInNewTab,
								} )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>{ acceptInspectorControls() }</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
