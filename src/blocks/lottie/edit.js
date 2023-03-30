/**
 * BLOCK: Lottie Edit
 */

import styling from './styling';
import { useEffect, useState, useRef } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBLottie = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, loop, reverse },
		clientId,
	} = props;
	const lottieplayer = useRef();
	const [ state, setState ] = useState( { direction: 1, loopState: true } );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-lottie-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

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
			<Render lottieplayer={ lottieplayer } parentProps={ props } />
			<Settings parentProps={ props } loopLottie={ loopLottie } reverseDirection={ reverseDirection } />
		</>
	);
};

export default UAGBLottie;
