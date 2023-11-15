import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import styling from './styling';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import { getLoopImage } from './getLoopImage';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddGBSStyles from '@Controls/AddGBSStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { migrateHttp } from './utils';

function UAGBImageEdit( props ) {
	const {
		isSelected,
		attributes,
		name,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, id },
		deviceType,
		context,
		setAttributes,
		clientId,
		hasDynamicContent,
	} = props;

	useEffect( () => {
		if ( hasDynamicContent && ! attributes?.context ) {
			setAttributes( { context } );
		}
	}, [ context ] )

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Migrate image urls with current http protocol.
	if( id ){
		props.attributes = migrateHttp( attributes );
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
}
export default compose( 
	getLoopImage, 
	addInitialAttr, 
	AddStaticStyles,
	AddGBSStyles,
	)( UAGBImageEdit );