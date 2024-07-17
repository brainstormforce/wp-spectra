import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddInitialAttr from '@Controls/addInitialAttr';

const UAGBBlockQuote = ( props ) => {
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, authorImageWidthUnit, authorImgBorderRadiusUnit },
		isSelected,
		setAttributes,
		clientId,
		name,
		deviceType
	} = props;

	useEffect( () => {
		if ( undefined === authorImageWidthUnit ) {
			setAttributes( { authorImageWidthUnit: 'px' } );
		}
		if ( undefined === authorImgBorderRadiusUnit ) {
			setAttributes( { authorImgBorderRadiusUnit: '%' } );
		}
	}, [] );

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
	AddInitialAttr,
	AddStaticStyles,
)( UAGBBlockQuote );
