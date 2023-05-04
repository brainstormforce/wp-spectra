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
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		setAttributes( { classMigrate: true } );

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
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( UAGBBlockQuote );
