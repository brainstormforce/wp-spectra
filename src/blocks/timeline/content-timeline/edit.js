/**
 * BLOCK: Content Timeline.
 */

import contentTimelineStyle from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import { dispatch, select } from '@wordpress/data';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddInitialAttr from '@Controls/addInitialAttr';

const ContentTimelineComponent = ( props ) => {
	const {
		setAttributes,
		clientId,
		attributes,
		attributes: { 
			timelinAlignmentTablet, 
			timelinAlignmentMobile, 
			stack, 
			UAGHideDesktop, 
			UAGHideTab, 
			UAGHideMob,
			dateFontSizeType,
			dateFontSize,
			dateFontSizeTablet,
			dateFontSizeMobile,
			dateFontsizeType,
			dateFontsize,
			dateFontsizeTablet,
			dateFontsizeMobile,
		},
		isSelected,
		name,
		deviceType
	} = props;

	useEffect( () => {
		if ( attributes.timelinAlignment ) {
			if ( 'none' === stack ) {
				if ( undefined === timelinAlignmentTablet ) {
					setAttributes( { timelinAlignmentTablet: attributes.timelinAlignment } );
				}
				if ( undefined === timelinAlignmentMobile ) {
					setAttributes( { timelinAlignmentMobile: attributes.timelinAlignment } );
				}
			} else {
				if ( undefined === timelinAlignmentTablet && 'tablet' === stack ) {
					setAttributes( { timelinAlignmentTablet: 'left' } );
					setAttributes( { timelinAlignmentMobile: 'left' } );
				}

				if ( undefined === timelinAlignmentMobile && 'mobile' === stack ) {
					setAttributes( { timelinAlignmentMobile: 'left' } );
					setAttributes( { timelinAlignmentTablet: attributes.timelinAlignment } );
				}
			}
		}
	}, [] );

	// Migrate Attributes 
	useEffect( () => {
		if ( undefined === dateFontSizeType ) {
			setAttributes( { dateFontSizeType: dateFontsizeType } );
		}
		if ( undefined === dateFontSize ) {
			setAttributes( { dateFontSize: dateFontsize } );
		}
		if ( undefined === dateFontSizeTablet ) {
			setAttributes( { dateFontSizeTablet: dateFontsizeTablet } );
		}
		if ( undefined === dateFontSizeMobile ) {
			setAttributes( { dateFontSizeMobile: dateFontsizeMobile } );
		}
		
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if ( null === select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ] ) {
			return;
		}

		let device = deviceType;

		// For desktop, attribute name does not have `desktop` suffix to support backward compatibility.
		if ( 'Desktop' === deviceType ) {
			device = '';
		}

		const timelinAlignment =
			'undefined' !== typeof attributes[ 'timelinAlignment' + device ]
				? attributes[ 'timelinAlignment' + device ]
				: attributes.timelinAlignment;

		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			.innerBlocks.forEach( function ( block, key ) {
				let alignClass = '';
				if ( 'left' === timelinAlignment ) {
					alignClass = 'uagb-timeline__left';
				} else if ( 'right' === timelinAlignment ) {
					alignClass = 'uagb-timeline__right';
				} else if ( 'center' === timelinAlignment ) {
					if ( key % 2 === 0 ) {
						alignClass = 'uagb-timeline__right';
					} else {
						alignClass = 'uagb-timeline__left';
					}
				}

				let dayAlignClass = '';
				if ( 'left' === timelinAlignment ) {
					dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-left';
				} else if ( 'right' === timelinAlignment ) {
					dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-right';
				} else if ( 'center' === timelinAlignment ) {
					if ( key % 2 === 0 ) {
						dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-right';
					} else {
						dayAlignClass = 'uagb-timeline__day-new uagb-timeline__day-left';
					}
				}

				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					content_class: alignClass,
				} );
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					dayalign_class: dayAlignClass,
				} );
			} );
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );
		getChildBlocks.forEach( ( ctChild ) => {
			ctChild.attributes.headingTag = attributes.headingTag;
			ctChild.attributes.dateFormat = attributes.dateFormat;
		} );
	}, [ props, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => contentTimelineStyle( attributes, clientId, name, deviceType ), [
		attributes,
		deviceType,
	] );

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
	AddInitialAttr,
	AddStaticStyles,
)( ContentTimelineComponent );