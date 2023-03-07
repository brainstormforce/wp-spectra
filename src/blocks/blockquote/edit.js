import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

const UAGBBlockQuote = ( props ) => {

	const deviceType = useDeviceType();
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, authorImageWidthUnit, authorImgBorderRadiusUnit },
		isSelected,
		setAttributes,
		clientId
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		setAttributes( { classMigrate: true } );

		if( undefined ===  authorImageWidthUnit ){
			setAttributes( { authorImageWidthUnit: 'px' } );
		}
		if( undefined ===  authorImgBorderRadiusUnit ){
			setAttributes( { authorImgBorderRadiusUnit: '%' } );
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-blockquote-style-' + clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBBlockQuote;
