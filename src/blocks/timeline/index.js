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

// Register block controls
const { 
    registerBlockType,
} = wp.blocks;

export const name = 'core/latest-posts';

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

    edit,

    // Render via PHP
    save() {
        //console.log(props);
        return null;
    },
} );