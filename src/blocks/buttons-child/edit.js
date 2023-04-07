/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';
import { useEffect, useState } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import WebfontLoader from '@Components/typography/fontloader';

import Settings from './settings';
import Render from './render';

const ButtonsChildComponent = ( props ) => {
	const deviceType = useDeviceType();

	const {
		isSelected,
		clientId,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHColor,
			loadGoogleFonts,
			fontFamily,
			fontWeight,
		},
		setAttributes,
	} = props;

	const initialState = {
		isURLPickerOpen: false,
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// border migration
		if ( borderWidth || borderRadius || borderColor || borderHColor || borderStyle ) {
			migrateBorderAttributes(
				'btn',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHColor',
					value: borderHColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-button-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadBtnGoogleFonts = <WebfontLoader config={ btnconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && (
				<Settings
					parentProps={ props }
					state={ state }
					setStateValue={ setStateValue }
					deviceType={ deviceType }
				/>
			) }
			<Render parentProps={ props } />
			{ loadBtnGoogleFonts }
		</>
	);
};
export default ButtonsChildComponent;
