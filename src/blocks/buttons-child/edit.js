/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';

const ButtonsChildComponent = ( props ) => {
	const deviceType = useDeviceType();

	const {
		isSelected,
		clientId,
		attributes,
		attributes: { borderStyle, borderWidth, borderRadius, borderHColor, borderColor },
		setAttributes,
		name,
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
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && (
				<Settings
					parentProps={ props }
					state={ state }
					setStateValue={ setStateValue }
					deviceType={ deviceType }
				/>
			) }
			<Render parentProps={ props } />
		</>
	);
};
export default ButtonsChildComponent;
