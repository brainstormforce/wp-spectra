/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useBlockProps } from '@wordpress/block-editor';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
const SocialShareChildComponent = ( props ) => {
	const { isSelected, attributes, clientId, deviceType } = props;

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId ), [ attributes, deviceType ] );

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</div>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( SocialShareChildComponent );
