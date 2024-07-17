import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import { InspectorControls } from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';
import { ToggleControl } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {

	const {
		setAttributes,
		attributes: { height, heightTablet, heightMobile, zoom, address, language, enableSatelliteView },
	} = props;


	const maxZoomRange = enableSatelliteView ? 21 : 22;
	return (
		<InspectorControls>
			<InspectorTabs tabs={ [ 'general', 'advance' ] }>
				<InspectorTab { ...UAGTabs.general }>
					<UAGAdvancedPanelBody initialOpen={ true }>
						<p className="uagb-settings-notice">
							{ __(
								"This block uses Spectra's API key to display the map. You don't need to create your own API key or worry about renewing it.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>

						<UAGTextControl
							label={ __( 'Address', 'ultimate-addons-for-gutenberg' ) }
							enableDynamicContent={ true }
							dynamicContentType="text"
							value={ address }
							name="address"
							data={ {
								value: address,
								label: 'address',
							} }
							setAttributes={ setAttributes }
							placeholder={ __( 'Type the address', 'ultimate-addons-for-gutenberg' ) }
						/>
						<ToggleControl
							label={ __( 'Enable Satellite View', 'ultimate-addons-for-gutenberg' ) }
							checked={ enableSatelliteView }
							onChange={ () => setAttributes( { enableSatelliteView: ! enableSatelliteView } ) }
						/>
						<Range
							label={ __( 'Zoom', 'ultimate-addons-for-gutenberg' ) }
							value={ zoom }
							setAttributes={ setAttributes }
							data={ {
								value: zoom,
								label: 'zoom',
							} }
							min={ 1 }
							max={ maxZoomRange }
							displayUnit={ false }
						/>
						<ResponsiveSlider
							label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: height,
									label: 'height',
								},
								tablet: {
									value: heightTablet,
									label: 'heightTablet',
								},
								mobile: {
									value: heightMobile,
									label: 'heightMobile',
								},
							} }
							min={ 0 }
							max={ 1000 }
							displayUnit={ false }
							setAttributes={ setAttributes }
							responsive={ true }
						/>
						<UAGSelectControl
							label={ __( 'Language', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: language,
								label: 'language',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'af',
									label: __( 'Afrikaans', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sq',
									label: __( 'Albanian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'am',
									label: __( 'Amharic', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ar',
									label: __( 'Arabic', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'hy',
									label: __( 'Armenian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'az',
									label: __( 'Azerbaijani', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'eu',
									label: __( 'Basque', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'be',
									label: __( 'Belarusian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'bn',
									label: __( 'Bengali', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'bs',
									label: __( 'Bosnian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'bg',
									label: __( 'Bulgarian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'my',
									label: __( 'Burmese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ca',
									label: __( 'Catalan', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'zh',
									label: __( 'Chinese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'hr',
									label: __( 'Croatian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'cs',
									label: __( 'Czech', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'da',
									label: __( 'Danish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'nl',
									label: __( 'Dutch', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'en',
									label: __( 'English', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'et',
									label: __( 'Estonian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'fa',
									label: __( 'Farsi', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'fi',
									label: __( 'Finnish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'fr',
									label: __( 'French', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'gl',
									label: __( 'Galician', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ka',
									label: __( 'Georgian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'de',
									label: __( 'German', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'el',
									label: __( 'Greek', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'gu',
									label: __( 'Gujarati', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'iw',
									label: __( 'Hebrew', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'hi',
									label: __( 'Hindi', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'hu',
									label: __( 'Hungarian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'is',
									label: __( 'Icelandic', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'id',
									label: __( 'Indonesian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'it',
									label: __( 'Italian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ja',
									label: __( 'Japanese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'kn',
									label: __( 'Kannada', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'kk',
									label: __( 'Kazakh', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'km',
									label: __( 'Khmer', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ko',
									label: __( 'Korean', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ky',
									label: __( 'Kyrgyz', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'lo',
									label: __( 'Lao', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'lv',
									label: __( 'Latvian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'lt',
									label: __( 'Lithuanian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'mk',
									label: __( 'Macedonian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ms',
									label: __( 'Malay', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ml',
									label: __( 'Malayalam', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'mr',
									label: __( 'Marathi', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'mn',
									label: __( 'Mongolian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ne',
									label: __( 'Nepali', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'no',
									label: __( 'Norwegian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'pl',
									label: __( 'Polish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'pt',
									label: __( 'Portuguese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'pa',
									label: __( 'Punjabi', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ro',
									label: __( 'Romanian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ru',
									label: __( 'Russian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sr',
									label: __( 'Serbian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'si',
									label: __( 'Sinhalese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sk',
									label: __( 'Slovak', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sl',
									label: __( 'Slovenian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'es',
									label: __( 'Spanish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sw',
									label: __( 'Swahili', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'sv',
									label: __( 'Swedish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ta',
									label: __( 'Tamil', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'te',
									label: __( 'Telugu', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'th',
									label: __( 'Thai', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'tr',
									label: __( 'Turkish', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'uk',
									label: __( 'Ukrainian', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'ur',
									label: __( 'Urdu', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'uz',
									label: __( 'Uzbek', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'vi',
									label: __( 'Vietnamese', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'zu',
									label: __( 'Zulu', 'ultimate-addons-for-gutenberg' ),
								},
							] }
						/>
					</UAGAdvancedPanelBody>
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};

export default memo( Settings );
