/**
 * BLOCK: Content Timeline child.
 */

import { useEffect } from '@wordpress/element';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import AddInitialAttr from '@Controls/addInitialAttr';

const ContentTimelineChildComponent = ( props ) => {
	const { isSelected, deviceType } = props;

	useEffect( () => {
		const loadContentTimelineEditor = new CustomEvent( 'UAGTimelineEditor', {
			// eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadContentTimelineEditor );
	}, [ props, deviceType ] );

	return (
		<>
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	AddInitialAttr,
)( ContentTimelineChildComponent );
