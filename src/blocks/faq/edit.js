/**
 * BLOCK: FAQ
 */

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const FaqComponent = ( props ) => {
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
		},
		clientId,
		name,
		deviceType
	} = props;

	useEffect( () => {
		
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

	}, [] );

	// A list of all the valid heading tags.
	const validHeadingTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p' ];

	useEffect( () => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		// Set all the FAQ child heading types based on the current heading type if it's valid, else set to span.
		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.headingTag = validHeadingTags.includes( attributes.headingTag ) ? attributes.headingTag : 'span';
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

	}, [ attributes ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicFontLoader { ...{ attributes } } />
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
)( FaqComponent );