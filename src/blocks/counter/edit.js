import { useEffect, useMemo } from '@wordpress/element';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
//  Import CSS.
import './style.scss';

const UAGBCounterEdit = ( props ) => {
	const {
		isSelected,
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		name,
		deviceType
	} = props;

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicFontLoader { ...{ attributes } } />
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
}

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBCounterEdit );
