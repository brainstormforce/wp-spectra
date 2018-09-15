/**
 * BLOCK: Atomic Blocks Page Grid
 */

// Import block dependencies and components
import classnames from 'classnames';
import edit from './block';

// Import CSS
import './style.scss';
import './editor.scss';

// Components
const { __ } = wp.i18n; 

// Extend component
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

// Register block controls
const { 
    registerBlockType,
} = wp.blocks;

const {
    registerStore,
    withSelect,
} = wp.data;

export const name = 'core/latest-posts';

// Register alignments
const validAlignments = [ 'center', 'left', 'right' ];

// Register the block
registerBlockType( 'uagb/timeline', {
    title: __( 'Timeline' ),
    description: __( 'Add a timeline to your page.' ),
    icon: 'grid-view',
    category: 'common',
    keywords: [
        __( 'post' ),
        __( 'grid' ),
        __( 'atomic' ),
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