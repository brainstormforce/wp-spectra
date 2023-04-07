/**
 * BLOCK: FAQ
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import WebfontLoader from '@Components/typography/fontloader';

const FaqComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: {
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
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			questionloadGoogleFonts,
			questionFontFamily,
			questionFontWeight,
			answerloadGoogleFonts,
			answerFontFamily,
			answerFontWeight,
		},
		clientId,
	} = props;

	const updatePageSchema = () => {
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

		allBlocks.forEach( ( block ) => {
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

		setAttributes( { schema: JSON.stringify( jsonData ) } );
	};

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		if ( 10 === questionBottomPaddingDesktop && 10 !== vquestionPaddingDesktop ) {
			setAttributes( {
				questionBottomPaddingDesktop: vquestionPaddingDesktop,
			} );
		}
		if ( 10 === questionLeftPaddingDesktop && 10 !== hquestionPaddingDesktop ) {
			setAttributes( {
				questionLeftPaddingDesktop: hquestionPaddingDesktop,
			} );
		}

		if ( 10 === questionBottomPaddingTablet && 10 !== vquestionPaddingTablet ) {
			setAttributes( {
				questionBottomPaddingTablet: vquestionPaddingTablet,
			} );
		}
		if ( 10 === questionLeftPaddingTablet && 10 !== hquestionPaddingTablet ) {
			setAttributes( {
				questionLeftPaddingTablet: hquestionPaddingTablet,
			} );
		}

		if ( 10 === questionBottomPaddingMobile && 10 !== vquestionPaddingMobile ) {
			setAttributes( {
				questionBottomPaddingMobile: vquestionPaddingMobile,
			} );
		}
		if ( 10 === questionLeftPaddingMobile && 10 !== hquestionPaddingMobile ) {
			setAttributes( {
				questionLeftPaddingMobile: hquestionPaddingMobile,
			} );
		}

		// border migration
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'overall',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[ 0 ];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
		}
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + clientId.substr( 0, 8 ), blockStyling );

		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.headingTag = attributes.headingTag;
		} );

		// Use Effect Case to Update the Defaults for Backward Compatible Attributes that don't have a Default.
		// Used when Resetting Preset to Default.
		if ( attributes.vanswerPaddingDesktop ) {
			if ( '' === attributes.answerTopPadding ) {
				setAttributes( { answerTopPadding: attributes.vanswerPaddingDesktop } );
			}
			if ( '' === attributes.answerBottomPadding ) {
				setAttributes( { answerBottomPadding: attributes.vanswerPaddingDesktop } );
			}
		}
		if ( attributes.hanswerPaddingDesktop ) {
			if ( '' === attributes.answerRightPadding ) {
				setAttributes( { answerRightPadding: attributes.hanswerPaddingDesktop } );
			}
			if ( '' === attributes.answerLeftPadding ) {
				setAttributes( { answerLeftPadding: attributes.hanswerPaddingDesktop } );
			}
		}

		if ( attributes.vanswerPaddingTablet ) {
			if ( '' === attributes.answerTopPaddingTablet ) {
				setAttributes( {
					answerTopPaddingTablet: attributes.vanswerPaddingTablet,
				} );
			}
			if ( '' === attributes.answerBottomPaddingTablet ) {
				setAttributes( {
					answerBottomPaddingTablet: attributes.vanswerPaddingTablet,
				} );
			}
		}
		if ( attributes.hanswerPaddingTablet ) {
			if ( '' === attributes.answerRightPaddingTablet ) {
				setAttributes( {
					answerRightPaddingTablet: attributes.hanswerPaddingTablet,
				} );
			}
			if ( '' === attributes.answerLeftPaddingTablet ) {
				setAttributes( {
					answerLeftPaddingTablet: attributes.hanswerPaddingTablet,
				} );
			}
		}

		if ( attributes.vanswerPaddingMobile ) {
			if ( '' === attributes.answerTopPaddingMobile ) {
				setAttributes( {
					answerTopPaddingMobile: attributes.vanswerPaddingMobile,
				} );
			}
			if ( '' === attributes.answerBottomPaddingMobile ) {
				setAttributes( {
					answerBottomPaddingMobile: attributes.vanswerPaddingMobile,
				} );
			}
		}
		if ( attributes.hanswerPaddingMobile ) {
			if ( '' === attributes.answerRightPaddingMobile ) {
				setAttributes( {
					answerRightPaddingMobile: attributes.hanswerPaddingMobile,
				} );
			}
			if ( '' === attributes.answerLeftPaddingMobile ) {
				setAttributes( {
					answerLeftPaddingMobile: attributes.hanswerPaddingMobile,
				} );
			}
		}

		const postSaveButton = document.getElementsByClassName( 'editor-post-publish-button' )?.[ 0 ];

		if ( postSaveButton ) {
			postSaveButton.addEventListener( 'click', updatePageSchema );
			return () => {
				postSaveButton?.removeEventListener( 'click', updatePageSchema );
			};
		}
	}, [ attributes ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Load all the Google Fonts for The FAQ Block.
	let loadQuestionGoogleFonts;
	let loadAnswerGoogleFonts;

	if ( questionloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ questionFontFamily + ( questionFontWeight ? ':' + questionFontWeight : '' ) ],
			},
		};
		loadQuestionGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	if ( answerloadGoogleFonts === true ) {
		const aconfig = {
			google: {
				families: [ answerFontFamily + ( answerFontWeight ? ':' + answerFontWeight : '' ) ],
			},
		};
		loadAnswerGoogleFonts = <WebfontLoader config={ aconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } deviceType={ deviceType } /> }
			<Render parentProps={ props } />
			{ loadQuestionGoogleFonts }
			{ loadAnswerGoogleFonts }
		</>
	);
};

export default FaqComponent;
