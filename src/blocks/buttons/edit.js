/**
 * BLOCK: Buttons
 */

import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddGBSStyles from '@Controls/AddGBSStyles';
import addInitialAttr from '@Controls/addInitialAttr';

let prevState;

const ButtonsComponent = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		clientId,
		name,
		deviceType,
	} = props;

	const initialState = {
		isFocused: 'false',
		isHovered: 'false',
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		prevState = isSelected;
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if ( ! isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}
		prevState = isSelected;
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

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
	AddGBSStyles,
	addInitialAttr,
	AddStaticStyles,
)( ButtonsComponent );
