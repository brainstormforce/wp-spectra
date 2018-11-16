/**
 * BLOCK: Timeline Js.
 */

import classnames from "classnames"
import times from "lodash/times"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"
//  Import CSS.
import ".././style.scss"
import edit from "./edit"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"

// Components.
const { __ } = wp.i18n; 

// Extend component.
const { Component } = wp.element;

const {
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText,
    BlockAlignmentToolbar,
    BlockControls,
} = wp.editor;

const { decodeEntities } = wp.htmlEntities;

// Register block controls.
const { 
    registerBlockType,
} = wp.blocks;

const {
    registerStore,
    withSelect,
} = wp.data;

export const name = 'core/latest-posts';

// Register alignments.
const validAlignments = [ 'center', 'left', 'right' ];

// Register the block.
registerBlockType( 'uagb/post-timeline', {
    title: __( 'Post Timeline - UAGB' ),
    description: __( 'Add a post timeline to your page.' ),
    icon: UAGB_Block_Icons.content_timeline,
    category: uagb_blocks_info.category,
    keywords: [
        __( 'post' ),
        __( 'timeline' ),
        __( 'uagb' ),
    ],   

    getEditWrapperProps( attributes ) {
        const { align } = attributes;
        if ( -1 !== validAlignments.indexOf( align ) ) {
            //return { 'data-align': align };
        }
    },

    edit,

    // Render via PHP
    save() {
    return null; 
    },
    
} );
