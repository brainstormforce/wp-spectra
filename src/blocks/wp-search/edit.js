/**
 * BLOCK: WP Search
 */

import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
const UAGBWpSearchEdit = ( props ) => {
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
		setAttributes,
		name,
		deviceType
	} = props;

	const initState = {
		isFocused: 'false',
	};

	const [ state, setState ] = useState( initState );

	// componentDidMount.
	useEffect( () => {
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
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBWpSearchEdit );
