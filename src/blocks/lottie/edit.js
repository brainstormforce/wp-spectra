/**
 * BLOCK: Lottie Edit
 */

import styling from './styling';
import { useEffect, useState, useRef, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBLottie = ( props ) => {

	const { setAttributes, attributes, isSelected, clientId, deviceType } = props;

	const { UAGHideDesktop, UAGHideTab, UAGHideMob, loop, reverse } = attributes;
	const lottieplayer = useRef();
	const [ state, setState ] = useState( { direction: 1, loopState: true } );

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );


	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const loopLottie = () => {
		const { loopState } = state;
		setAttributes( { loop: ! loop } );
		setState( { loopState: ! loopState } );
	};

	const reverseDirection = () => {
		const { direction } = state;
		setAttributes( { reverse: ! reverse } );
		setState( { direction: direction * -1 } );
	};

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<Render lottieplayer={ lottieplayer } { ...props } />
			{ isSelected && (
				<Settings { ...props } loopLottie={ loopLottie } reverseDirection={ reverseDirection } />
			) }
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( UAGBLottie );
