/**
 * BLOCK: Icon List
 */
import WebfontLoader from '@Components/typography/fontloader';
import styling from './styling';
import { useEffect } from '@wordpress/element';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

const UAGBIconList = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, loadGoogleFonts, fontFamily, fontWeight },
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
		setAttributes( { childMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			?.innerBlocks.forEach( function ( block ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					fromParentIcon: attributes.parentIcon,
					hideLabel: attributes.hideLabel,
					imageSizeChild: attributes.size,
				} );
			} );
	}, [ attributes.parentIcon, attributes.hideLabel, attributes.size ] );

	let googleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		googleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ googleFonts }
		</>
	);
};

export default UAGBIconList;
