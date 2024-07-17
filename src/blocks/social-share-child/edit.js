/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
const SocialShareChildComponent = ( props ) => {
	const { isSelected, setAttributes, attributes, clientId, deviceType } = props;

	useEffect( () => {
		// Replacement for componentDidMount.

		if ( select( 'core/editor' ) ) {
			setAttributes( {
				current_url: select( 'core/editor' ).getPermalink(),
			} );
		}
	}, [] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( SocialShareChildComponent );
