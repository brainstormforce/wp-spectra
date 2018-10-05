/**
 * BLOCK: Timeline Js.
 */

// Import block dependencies and components.
import classnames from 'classnames';
import edit from './block';

// Import CSS.
import './style.scss';
import './editor.scss';

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

const el = wp.element.createElement;

//Icon
const iconEl = el('svg', { width: 20, height: 20 },
  el('path', { d: "M1.661 5.463v3.706h13.448l1.16-1.159c0.365-0.365 0.962-0.365 1.327 0l1.16 1.159h1.245v1.661h-1.246l-1.158 1.158c-0.365 0.365-0.962 0.365-1.327 0l-1.159-1.158h-13.449v3.706h1.18l1.16-1.16c0.365-0.365 0.962-0.365 1.327 0l1.16 1.16h13.512v1.661h-13.514l-1.159 1.158c-0.365 0.365-0.961 0.365-1.326 0l-1.159-1.158h-1.181v3.77h-1.661v-19.936h1.661v3.77h5.78l1.16-1.16c0.365-0.365 0.962-0.365 1.327 0l1.16 1.16h8.912v1.661h-8.913l-1.159 1.158c-0.365 0.365-0.961 0.365-1.326 0l-1.16-1.158h-5.781z" } )
);

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
registerBlockType( 'uagb/timeline', {
    title: __( 'Timeline - UAGB' ),
    description: __( 'Add a timeline to your page.' ),
    icon: iconEl,
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