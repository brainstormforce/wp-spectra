/**
 * BLOCK: Content Timeline.
 */

import contentTimelineStyle from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { dispatch, select } from '@wordpress/data';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
    import (
        /* webpackChunkName: "chunks/content-timeline/settings" */
        './settings'
    )
);
const Render = lazy( () =>
    import (
        /* webpackChunkName: "chunks/content-timeline/render" */
        './render'
    )
);

const ContentTimelineComponent = ( props ) => {
    const deviceType = useDeviceType();
    useEffect( () => {
        const { setAttributes, clientId, attributes } = props;
        // Replacement for componentDidMount.
        //Store client id.
        setAttributes( { block_id: clientId } );
        setAttributes( { classMigrate: true } );
        setAttributes( { childMigrate: true } );


        const {
            verticalSpace,
            horizontalSpace,
            topMargin,
            rightMargin,
            bottomMargin,
            leftMargin,
            bgPadding,
            topPadding,
            rightPadding,
            bottomPadding,
            leftPadding,
        } = attributes;

        if ( bgPadding ) {
            if ( undefined === topPadding ) {
                setAttributes( { topPadding: bgPadding } );
            }
            if ( undefined === bottomPadding ) {
                setAttributes( { bottomPadding: bgPadding } );
            }
            if ( undefined === rightPadding ) {
                setAttributes( { rightPadding: bgPadding } );
            }
            if ( undefined === leftPadding ) {
                setAttributes( { leftPadding: bgPadding } );
            }
        }

        if ( verticalSpace ) {
            if ( undefined === topMargin ) {
                setAttributes( { topMargin: verticalSpace } );
            }
            if ( undefined === bottomMargin ) {
                setAttributes( { bottomMargin: verticalSpace } );
            }
        }
        if ( horizontalSpace ) {
            if ( undefined === rightMargin ) {
                setAttributes( { rightMargin: horizontalSpace } );
            }
            if ( undefined === leftMargin ) {
                setAttributes( { leftMargin: horizontalSpace } );
            }
        }
    }, [] );

    useEffect( () => {
        // Replacement for componentDidUpdate.
        const blockStyling = contentTimelineStyle( props );

        addBlockEditorDynamicStyles( 'uagb-content-timeline-style-' + props.clientId.substr( 0, 8 ), blockStyling );
        if (
            null ===
            select( 'core/block-editor' ).getBlocksByClientId(
                props.clientId
            )[0]
        ) {
            return;
        }
        select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            .innerBlocks.forEach( function( block, key ) {
                let alignClass = '';
                if ( 'left' === block.attributes.timelinAlignment ) {
                    alignClass = 'uagb-timeline__left';
                } else if ( 'right' === block.attributes.timelinAlignment ) {
                    alignClass = 'uagb-timeline__right';
                } else if ( 'center' === block.attributes.timelinAlignment ) {
                    if ( key % 2 === 0 ) {
                        alignClass =
                            'uagb-timeline__right';
                    } else {
                        alignClass =
                            'uagb-timeline__left';
                    }
                }

                let dayAlignClass = '';
                if ( 'left' === block.attributes.timelinAlignment ) {
                    dayAlignClass =
                        'uagb-timeline__day-new uagb-timeline__day-left';
                } else if ( 'right' === block.attributes.timelinAlignment ) {
                    dayAlignClass =
                        'uagb-timeline__day-new uagb-timeline__day-right';
                } else if ( 'center' === block.attributes.timelinAlignment ) {
                    if ( key % 2 === 0 ) {
                        dayAlignClass =
                            'uagb-timeline__day-new uagb-timeline__day-right';
                    } else {
                        dayAlignClass =
                            'uagb-timeline__day-new uagb-timeline__day-left';
                    }
                }

                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        content_class: alignClass,
                    }
                );
                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        dayalign_class: dayAlignClass,
                    }
                );
            } );
        const getChildBlocks = select( 'core/block-editor' ).getBlocks(
            props.clientId
        );
        getChildBlocks.forEach( ( ctChild ) => {
            ctChild.attributes.headingTag = props.attributes.headingTag;
            ctChild.attributes.dateFormat = props.attributes.dateFormat;
        } );
    }, [props] );


    useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = contentTimelineStyle( props );

        addBlockEditorDynamicStyles( 'uagb-content-timeline-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

    return (
		<Suspense fallback = { lazyLoader() }>
            <Settings parentProps = { props }/>
		    <Render parentProps = { props }/>
		</Suspense>
    );
};

export default ContentTimelineComponent;
