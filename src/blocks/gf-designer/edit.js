import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SelectControl, Placeholder } from '@wordpress/components';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import { useSelect } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import getApiData from '@Controls/getApiData';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBGF = ( props ) => {
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
			formId,
			isHtml,
			msgVrPadding,
			msgHrPadding,
			buttonVrPadding,
			buttonHrPadding,
			fieldVrPadding,
			fieldHrPadding,
			buttontopPadding,
			buttonrightPadding,
			buttonbottomPadding,
			buttonleftPadding,
			fieldtopPadding,
			fieldrightPadding,
			fieldbottomPadding,
			fieldleftPadding,
			msgtopPadding,
			msgrightPadding,
			msgbottomPadding,
			msgleftPadding,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		clientId,
		name,
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
					action: 'uagb_gf_shortcode',
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
		if ( buttonVrPadding ) {
			if ( undefined === buttontopPadding ) {
				setAttributes( { buttontopPadding: buttonVrPadding } );
			}
			if ( undefined === buttonbottomPadding ) {
				setAttributes( { buttonbottomPadding: buttonVrPadding } );
			}
		}

		if ( buttonHrPadding ) {
			if ( undefined === buttonrightPadding ) {
				setAttributes( { buttonrightPadding: buttonHrPadding } );
			}
			if ( undefined === buttonleftPadding ) {
				setAttributes( { buttonleftPadding: buttonHrPadding } );
			}
		}

		if ( msgVrPadding ) {
			if ( ! msgtopPadding ) {
				setAttributes( { msgtopPadding: msgVrPadding } );
			}
			if ( ! msgbottomPadding ) {
				setAttributes( { msgbottomPadding: msgVrPadding } );
			}
		}

		if ( msgHrPadding ) {
			if ( ! msgrightPadding ) {
				setAttributes( { msgrightPadding: msgHrPadding } );
			}
			if ( ! msgleftPadding ) {
				setAttributes( { msgleftPadding: msgHrPadding } );
			}
		}

		if ( fieldVrPadding ) {
			if ( undefined === fieldtopPadding ) {
				setAttributes( { fieldtopPadding: fieldVrPadding } );
			}
			if ( undefined === fieldbottomPadding ) {
				setAttributes( { fieldbottomPadding: fieldVrPadding } );
			}
		}

		if ( fieldHrPadding ) {
			if ( undefined === fieldrightPadding ) {
				setAttributes( { fieldrightPadding: fieldHrPadding } );
			}
			if ( undefined === fieldleftPadding ) {
				setAttributes( { fieldleftPadding: fieldHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		const submitButton = document.querySelector( '.wpgf-submit' );
		if ( submitButton !== null ) {
			submitButton.addEventListener( 'click', function ( event ) {
				event.preventDefault();
			} );
		}
	}, [ attributes ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = ( id ) => {
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}

		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};
	if ( formId === 0 ) {
		return (
			<Placeholder icon="admin-post" label={ __( 'Select a Gravity Form', 'ultimate-addons-for-gutenberg' ) }>
				<SelectControl value={ formId } onChange={ onSelectForm } options={ uagb_blocks_info.gf_forms } />
			</Placeholder>
		);
	}

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
)( UAGBGF );
