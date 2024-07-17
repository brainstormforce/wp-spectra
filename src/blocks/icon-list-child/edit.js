/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

let hideLabel;

const UAGBIconListChild = ( props ) => {

	const { isSelected, clientId, attributes, deviceType } = props;

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } hideLabel={ hideLabel } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBIconListChild );
