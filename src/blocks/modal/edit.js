import { useEffect, useMemo } from '@wordpress/element';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { applyFilters } from '@wordpress/hooks';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBModalEdit = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, 
					  UAGHideTab, 
					  UAGHideMob, 
					  block_id, 
					  modalWidthType, 
					  modalWidthTypeTablet, 
					  modalWidthTypeMobile, 
					  modalHeightType, 
					  modalHeightTypeTablet, 
					  modalHeightTypeMobile,
					},
		clientId,
		setAttributes,
		name,
		deviceType
	} = props;

	const { modalTrigger, } = attributes;
	
	useEffect( () => {
		// Select the default option if pro is deactivated 
		if(	! uagb_blocks_info.spectra_pro_status && ( 'custom-class' === modalTrigger ||'custom-id' === modalTrigger || 'automatic' === modalTrigger ) ) {
			setAttributes( { modalTrigger: 'button' } )
		}
	}, [ ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockDetails = applyFilters(
			`spectra.modal.edit.jsdetails`,
			{
				block_id,
				device_type: deviceType,
			},
			attributes
		);
		const loadModalBlockEditor = new CustomEvent( 'UAGModalEditor', {
			// eslint-disable-line no-undef
			detail: blockDetails,
		} );

		document.dispatchEvent( loadModalBlockEditor );
	}, [ attributes, deviceType ] );

	// handle backward case 
	useEffect( () => {
		if( undefined === modalWidthTypeTablet ){
			setAttributes( { modalWidthTypeTablet: modalWidthType } )
		}
		if( undefined === modalWidthTypeMobile ){
			setAttributes( { modalWidthTypeMobile: modalWidthType } )
		}

		if( undefined ===modalHeightTypeTablet ){
			setAttributes( { modalHeightTypeTablet: modalHeightType } )
		}
		if( undefined ===modalHeightTypeMobile ){
			setAttributes( { modalHeightTypeMobile: modalHeightType } )
		}

	}, [  ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

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
	addInitialAttr,
	AddStaticStyles,
)( UAGBModalEdit );
