/**
 * BLOCK: WP Search
 */

import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';

const UAGBWpSearchEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			borderStyle,
			borderWidth,
			borderColor,
			borderHColor,
			borderRadius,
		},
		clientId,
		setAttributes,
		name,
	} = props;

	const initState = {
		isFocused: 'false',
	};

	const [ state, setState ] = useState( initState );

	// componentDidMount.
	useEffect( () => {
		// Assigning block_id in the attribute.

		setAttributes( {
			block_id: clientId.substr( 0, 8 ),
		} );

		// border
		if ( borderWidth || borderRadius || borderColor || borderHColor || borderStyle ) {
			migrateBorderAttributes(
				'input',
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

	// componentDidUpdate.
	useEffect( () => {
		if ( ! isSelected && state.isFocused ) {
			setState( {
				isFocused: 'false',
			} );
		}
		if ( isSelected ) {
			setState( {
				isFocused: true,
			} );
		}
	}, [ props ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ deviceType, attributes ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBWpSearchEdit;
