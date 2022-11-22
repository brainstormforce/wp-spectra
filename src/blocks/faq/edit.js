/**
 * BLOCK: FAQ
 */

import styling from './styling';
import React, { useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import {migrateBorderAttributes} from '@Controls/generateAttributes';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const FaqComponent = ( props ) => {

	const deviceType = useDeviceType();

	const updatePageSchema = () => {

		const { setAttributes, clientId } = props;
		const allBlocks = select( 'core/block-editor' ).getBlocks( clientId );
		let pageURL = '';
		if ( select( 'core/editor' ) ) {
			pageURL = select( 'core/editor' ).getPermalink();
		}
		const jsonData = {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			'@id': pageURL,
			'mainEntity': [],
		};

		allBlocks.forEach( ( block )=> {
			let faqData = {};

			faqData = {
				'@type': 'Question',
				'name': block.attributes.question,
				'acceptedAnswer': {
					'@type': 'Answer',
					'text': block.attributes.answer,
				},
			};
			jsonData.mainEntity.push( faqData );
		} );

		setAttributes( {schema: JSON.stringify( jsonData )} );
	};

	useEffect( () => {
		// Replacement for componentDidMount.

		const { attributes, setAttributes } = props;

		const {
			questionBottomPaddingDesktop,
			vquestionPaddingDesktop,
			questionLeftPaddingDesktop,
			hquestionPaddingDesktop,
			questionBottomPaddingTablet,
			vquestionPaddingTablet,
			questionLeftPaddingTablet,
			hquestionPaddingTablet,
			questionBottomPaddingMobile,
			vquestionPaddingMobile,
			questionLeftPaddingMobile,
			hquestionPaddingMobile,
			answerTopPadding,
			answerBottomPadding,
			answerRightPadding,
			answerLeftPadding,
			answerTopPaddingTablet,
			answerBottomPaddingTablet,
			answerRightPaddingTablet,
			answerLeftPaddingTablet,
			answerTopPaddingMobile,
			answerBottomPaddingMobile,
			answerRightPaddingMobile,
			answerLeftPaddingMobile,
			vanswerPaddingDesktop,
			hanswerPaddingDesktop,
			vanswerPaddingTablet,
			hanswerPaddingTablet,
			vanswerPaddingMobile,
			hanswerPaddingMobile,
		} = attributes;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		if (
			10 === questionBottomPaddingDesktop &&
			10 !== vquestionPaddingDesktop
		) {
			setAttributes( {
				questionBottomPaddingDesktop: vquestionPaddingDesktop,
			} );
		}
		if (
			10 === questionLeftPaddingDesktop &&
			10 !== hquestionPaddingDesktop
		) {
			setAttributes( {
				questionLeftPaddingDesktop: hquestionPaddingDesktop,
			} );
		}

		if (
			10 === questionBottomPaddingTablet &&
			10 !== vquestionPaddingTablet
		) {
			setAttributes( {
				questionBottomPaddingTablet: vquestionPaddingTablet,
			} );
		}
		if (
			10 === questionLeftPaddingTablet &&
			10 !== hquestionPaddingTablet
		) {
			setAttributes( {
				questionLeftPaddingTablet: hquestionPaddingTablet,
			} );
		}

		if (
			10 === questionBottomPaddingMobile &&
			10 !== vquestionPaddingMobile
		) {
			setAttributes( {
				questionBottomPaddingMobile: vquestionPaddingMobile,
			} );
		}
		if (
			10 === questionLeftPaddingMobile &&
			10 !== hquestionPaddingMobile
		) {
			setAttributes( {
				questionLeftPaddingMobile: hquestionPaddingMobile,
			} );
		}

		if ( vanswerPaddingDesktop ) {
			if ( undefined === answerTopPadding ) {
				setAttributes( { answerTopPadding: vanswerPaddingDesktop } );
			}
			if ( undefined === answerBottomPadding ) {
				setAttributes( { answerBottomPadding: vanswerPaddingDesktop } );
			}
		}
		if ( hanswerPaddingDesktop ) {
			if ( undefined === answerRightPadding ) {
				setAttributes( { answerRightPadding: hanswerPaddingDesktop } );
			}
			if ( undefined === answerLeftPadding ) {
				setAttributes( { answerLeftPadding: hanswerPaddingDesktop } );
			}
		}

		if ( vanswerPaddingTablet ) {
			if ( undefined === answerTopPaddingTablet ) {
				setAttributes( {
					answerTopPaddingTablet: vanswerPaddingTablet,
				} );
			}
			if ( undefined === answerBottomPaddingTablet ) {
				setAttributes( {
					answerBottomPaddingTablet: vanswerPaddingTablet,
				} );
			}
		}
		if ( hanswerPaddingTablet ) {
			if ( undefined === answerRightPaddingTablet ) {
				setAttributes( {
					answerRightPaddingTablet: hanswerPaddingTablet,
				} );
			}
			if ( undefined === answerLeftPaddingTablet ) {
				setAttributes( {
					answerLeftPaddingTablet: hanswerPaddingTablet,
				} );
			}
		}

		if ( vanswerPaddingMobile ) {
			if ( undefined === answerTopPaddingMobile ) {
				setAttributes( {
					answerTopPaddingMobile: vanswerPaddingMobile,
				} );
			}
			if ( undefined === answerBottomPaddingMobile ) {
				setAttributes( {
					answerBottomPaddingMobile: vanswerPaddingMobile,
				} );
			}
		}
		if ( hanswerPaddingMobile ) {
			if ( undefined === answerRightPaddingMobile ) {
				setAttributes( {
					answerRightPaddingMobile: hanswerPaddingMobile,
				} );
			}
			if ( undefined === answerLeftPaddingMobile ) {
				setAttributes( {
					answerLeftPaddingMobile: hanswerPaddingMobile,
				} );
			}
		}
		const {borderStyle,borderWidth,borderRadius,borderColor,borderHoverColor} = props.attributes
		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'overall', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[0];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
		}
		
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + props.clientId.substr( 0, 8 ), blockStyling );

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.headingTag = props.attributes.headingTag;
		} );

		// Use Effect Case to Update the Defaults for Backward Compatible Attributes that don't have a Default.
		// Used when Resetting Preset to Default.
		if ( props.attributes.vanswerPaddingDesktop ) {
			if ( '' === props.attributes.answerTopPadding ) {
				props.setAttributes( { answerTopPadding: props.attributes.vanswerPaddingDesktop } );
			}
			if ( '' === props.attributes.answerBottomPadding ) {
				props.setAttributes( { answerBottomPadding: props.attributes.vanswerPaddingDesktop } );
			}
		}
		if ( props.attributes.hanswerPaddingDesktop ) {
			if ( '' === props.attributes.answerRightPadding ) {
				props.setAttributes( { answerRightPadding: props.attributes.hanswerPaddingDesktop } );
			}
			if ( '' === props.attributes.answerLeftPadding ) {
				props.setAttributes( { answerLeftPadding: props.attributes.hanswerPaddingDesktop } );
			}
		}

		if ( props.attributes.vanswerPaddingTablet ) {
			if ( '' === props.attributes.answerTopPaddingTablet ) {
				props.setAttributes( {
					answerTopPaddingTablet: props.attributes.vanswerPaddingTablet,
				} );
			}
			if ( '' === props.attributes.answerBottomPaddingTablet ) {
				props.setAttributes( {
					answerBottomPaddingTablet: props.attributes.vanswerPaddingTablet,
				} );
			}
		}
		if ( props.attributes.hanswerPaddingTablet ) {
			if ( '' === props.attributes.answerRightPaddingTablet ) {
				props.setAttributes( {
					answerRightPaddingTablet: props.attributes.hanswerPaddingTablet,
				} );
			}
			if ( '' === props.attributes.answerLeftPaddingTablet ) {
				props.setAttributes( {
					answerLeftPaddingTablet: props.attributes.hanswerPaddingTablet,
				} );
			}
		}

		if ( props.attributes.vanswerPaddingMobile ) {
			if ( '' === props.attributes.answerTopPaddingMobile ) {
				props.setAttributes( {
					answerTopPaddingMobile: props.attributes.vanswerPaddingMobile,
				} );
			}
			if ( '' === props.attributes.answerBottomPaddingMobile ) {
				props.setAttributes( {
					answerBottomPaddingMobile: props.attributes.vanswerPaddingMobile,
				} );
			}
		}
		if ( props.attributes.hanswerPaddingMobile ) {
			if ( '' === props.attributes.answerRightPaddingMobile ) {
				props.setAttributes( {
					answerRightPaddingMobile: props.attributes.hanswerPaddingMobile,
				} );
			}
			if ( '' === props.attributes.answerLeftPaddingMobile ) {
				props.setAttributes( {
					answerLeftPaddingMobile: props.attributes.hanswerPaddingMobile,
				} );
			}
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[0];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
			return () => { postSaveButton?.removeEventListener( 'click', updatePageSchema ); }
		}
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
			<>
			<Settings parentProps={ props } deviceType = { deviceType } />
			<Render parentProps={ props } />
			</>

	);
};

export default FaqComponent;
