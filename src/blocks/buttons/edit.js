/**
 * BLOCK: Buttons
 */

import styling from './styling';
import { useEffect,useState } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import WebfontLoader from '@Components/typography/fontloader';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

let prevState;

const ButtonsComponent = ( props ) => {

	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, loadGoogleFonts, fontFamily, fontWeight },
		setAttributes,
		clientId
	} = props;

	const initialState = {
		isFocused: 'false',
		isHovered: 'false',
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		setAttributes( { classMigrate: true } );
		setAttributes( { childMigrate: true } );

		prevState = props.isSelected;
		
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if ( ! props.isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-buttons-' + clientId.substr( 0, 8 ), blockStyling );

		prevState = props.isSelected;
		
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	
	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadBtnGoogleFonts = (
			<WebfontLoader config={ btnconfig }></WebfontLoader>
		);
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadBtnGoogleFonts }
		</>
	);
};

export default ButtonsComponent;
