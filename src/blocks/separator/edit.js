/**
 * BLOCK: Separator
 */
import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import scrollBlockToView from '@Controls/scrollBlockToView';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import AddInitialAttr from '@Controls/addInitialAttr';

const UAGBSeparator = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		name,
		clientId,
		deviceType,
	} = props;

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

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
	AddStaticStyles,
	AddInitialAttr 
)( UAGBSeparator );
