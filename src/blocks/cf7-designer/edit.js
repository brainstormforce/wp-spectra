import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';

import getApiData from '@Controls/getApiData';

import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { useSelect } from '@wordpress/data';

const UAGBCF7 = ( props ) => {
	const {
		isSelected,
		setAttributes,
		clientId,
		attributes,
		attributes: {
			formId,
			isHtml,
			msgVrPadding,
			msgHrPadding,
			messageTopPaddingDesktop,
			messageBottomPaddingDesktop,
			messageRightPaddingDesktop,
			messageLeftPaddingDesktop,
			buttonVrPadding,
			buttonHrPadding,
			buttonTopPaddingDesktop,
			buttonBottomPaddingDesktop,
			buttonRightPaddingDesktop,
			buttonLeftPaddingDesktop,
			fieldVrPadding,
			fieldHrPadding,
			fieldTopPaddingDesktop,
			fieldBottomPaddingDesktop,
			fieldRightPaddingDesktop,
			fieldLeftPaddingDesktop,

			fieldBorderStyle,
			fieldBorderWidth,
			fieldBorderColor,
			fieldBorderHColor,
			fieldBorderRadius,
			inputBorderTopWidth,
			inputBorderLeftWidth,
			inputBorderRightWidth,
			inputBorderBottomWidth,
			inputBorderTopLeftRadius,
			inputBorderTopRightRadius,
			inputBorderBottomLeftRadius,
			inputBorderBottomRightRadius,
			inputBorderColor,
			inputBorderHColor,
			inputBorderStyle,

			buttonBorderWidth,
			buttonBorderRadius,
			buttonBorderColor,
			buttonBorderHColor,
			buttonBorderStyle,
			btnBorderTopWidth,
			btnBorderLeftWidth,
			btnBorderRightWidth,
			btnBorderBottomWidth,
			btnBorderTopLeftRadius,
			btnBorderTopRightRadius,
			btnBorderBottomLeftRadius,
			btnBorderBottomRightRadius,
			btnBorderColor,
			btnBorderHColor,
			btnBorderStyle,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		deviceType
	} = props;

	useSelect(
		( select ) => { // eslint-disable-line  no-unused-vars
			let jsonData = '';

			if ( formId && -1 !== formId && 0 !== formId && ! isHtml ) {
				// Create an object with the nonce and formId properties
				const data = {
					nonce: uagb_blocks_info.uagb_ajax_nonce,
					formId,
				};
				// Call the getApiData function with the specified parameters
				const getApiFetchData = getApiData( {
					url: uagb_blocks_info.ajax_url,
					action: 'uagb_cf7_shortcode',
					data,
				} );
				// Wait for the API call to complete, then update attributes and jsonData variable
				getApiFetchData.then( ( _data ) => {
					setAttributes( { isHtml: true } );
					setAttributes( { formJson: _data } );
					jsonData = _data;
				} );
			}

			return {
				formHTML: jsonData,
			};
		},
	);

	useEffect( () => {

		if ( msgVrPadding ) {
			if ( ! messageTopPaddingDesktop ) {
				setAttributes( { messageTopPaddingDesktop: msgVrPadding } );
			}
			if ( ! messageBottomPaddingDesktop ) {
				setAttributes( { messageBottomPaddingDesktop: msgVrPadding } );
			}
		}
		if ( msgHrPadding ) {
			if ( ! messageRightPaddingDesktop ) {
				setAttributes( { messageRightPaddingDesktop: msgHrPadding } );
			}
			if ( ! messageLeftPaddingDesktop ) {
				setAttributes( { messageLeftPaddingDesktop: msgHrPadding } );
			}
		}

		if ( buttonVrPadding ) {
			if ( undefined === buttonTopPaddingDesktop ) {
				setAttributes( { buttonTopPaddingDesktop: buttonVrPadding } );
			}
			if ( undefined === buttonBottomPaddingDesktop ) {
				setAttributes( {
					buttonBottomPaddingDesktop: buttonVrPadding,
				} );
			}
		}
		if ( buttonHrPadding ) {
			if ( undefined === buttonRightPaddingDesktop ) {
				setAttributes( { buttonRightPaddingDesktop: buttonHrPadding } );
			}
			if ( undefined === buttonLeftPaddingDesktop ) {
				setAttributes( { buttonLeftPaddingDesktop: buttonHrPadding } );
			}
		}

		if ( fieldVrPadding ) {
			if ( undefined === fieldTopPaddingDesktop ) {
				setAttributes( { fieldTopPaddingDesktop: fieldVrPadding } );
			}
			if ( undefined === fieldBottomPaddingDesktop ) {
				setAttributes( { fieldBottomPaddingDesktop: fieldVrPadding } );
			}
		}
		if ( fieldHrPadding ) {
			if ( undefined === fieldRightPaddingDesktop ) {
				setAttributes( { fieldRightPaddingDesktop: fieldHrPadding } );
			}
			if ( undefined === fieldLeftPaddingDesktop ) {
				setAttributes( { fieldLeftPaddingDesktop: fieldHrPadding } );
			}
		}

		if ( fieldBorderWidth ) {
			if ( undefined === inputBorderTopWidth ) {
				setAttributes( {
					inputBorderTopWidth: fieldBorderWidth,
				} );
			}
			if ( undefined === inputBorderLeftWidth ) {
				setAttributes( { inputBorderLeftWidth: fieldBorderWidth } );
			}
			if ( undefined === inputBorderRightWidth ) {
				setAttributes( { inputBorderRightWidth: fieldBorderWidth } );
			}
			if ( undefined === inputBorderBottomWidth ) {
				setAttributes( { inputBorderBottomWidth: fieldBorderWidth } );
			}
		}

		if ( fieldBorderRadius ) {
			if ( undefined === inputBorderTopLeftRadius ) {
				setAttributes( { inputBorderTopLeftRadius: fieldBorderRadius } );
			}
			if ( undefined === inputBorderTopRightRadius ) {
				setAttributes( { inputBorderTopRightRadius: fieldBorderRadius } );
			}
			if ( undefined === inputBorderBottomLeftRadius ) {
				setAttributes( { inputBorderBottomLeftRadius: fieldBorderRadius } );
			}
			if ( undefined === inputBorderBottomRightRadius ) {
				setAttributes( { inputBorderBottomRightRadius: fieldBorderRadius } );
			}
		}

		if ( fieldBorderColor ) {
			if ( undefined === inputBorderColor ) {
				setAttributes( { inputBorderColor: fieldBorderColor } );
			}
		}

		if ( fieldBorderHColor ) {
			if ( undefined === inputBorderHColor ) {
				setAttributes( { inputBorderHColor: fieldBorderHColor } );
			}
		}

		if ( fieldBorderStyle ) {
			if ( undefined === inputBorderStyle ) {
				setAttributes( { inputBorderStyle: fieldBorderStyle } );
			}
		}

		if ( buttonBorderWidth ) {
			if ( undefined === btnBorderTopWidth ) {
				setAttributes( {
					btnBorderTopWidth: buttonBorderWidth,
				} );
			}
			if ( undefined === btnBorderLeftWidth ) {
				setAttributes( { btnBorderLeftWidth: buttonBorderWidth } );
			}
			if ( undefined === btnBorderRightWidth ) {
				setAttributes( { btnBorderRightWidth: buttonBorderWidth } );
			}
			if ( undefined === btnBorderBottomWidth ) {
				setAttributes( { btnBorderBottomWidth: buttonBorderWidth } );
			}
		}

		if ( buttonBorderRadius ) {
			if ( undefined === btnBorderTopLeftRadius ) {
				setAttributes( { btnBorderTopLeftRadius: buttonBorderRadius } );
			}
			if ( undefined === btnBorderTopRightRadius ) {
				setAttributes( { btnBorderTopRightRadius: buttonBorderRadius } );
			}
			if ( undefined === btnBorderBottomLeftRadius ) {
				setAttributes( { btnBorderBottomLeftRadius: buttonBorderRadius } );
			}
			if ( undefined === btnBorderBottomRightRadius ) {
				setAttributes( { btnBorderBottomRightRadius: buttonBorderRadius } );
			}
		}

		if ( buttonBorderColor ) {
			if ( undefined === btnBorderColor ) {
				setAttributes( { btnBorderColor: buttonBorderColor } );
			}
		}

		if ( buttonBorderHColor ) {
			if ( undefined === btnBorderHColor ) {
				setAttributes( { btnBorderHColor: buttonBorderHColor } );
			}
		}

		if ( buttonBorderStyle ) {
			if ( undefined === btnBorderStyle ) {
				setAttributes( { btnBorderStyle: buttonBorderStyle } );
			}
		}
	}, [] );

	useEffect( () => {
		const submitButton = document.querySelector( '.wpcf7-submit' );
		if ( submitButton !== null ) {
			submitButton.addEventListener( 'click', function ( event ) {
				event.preventDefault();
			} );
		}
	}, [ props ] );


	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, deviceType ), [ attributes, deviceType ] );

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
)( UAGBCF7 );
