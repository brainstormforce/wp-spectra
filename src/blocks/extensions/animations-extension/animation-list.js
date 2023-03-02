import { __ } from '@wordpress/i18n';

const AnimationList = [
    // None.
    { value: '', label: __( 'None' ) },

    // Bounce.
    { value: 'bounceIn', label: __( 'Bounce In' ) },
    { value: 'bounceInDown', label: __( 'Bounce In Down' ) },
    { value: 'bounceInUp', label: __( 'Bounce In Up' ) },
    { value: 'bounceInLeft', label: __( 'Bounce In Left' ) },
    { value: 'bounceInRight', label: __( 'Bounce In Right' ) },

    // Fade.
    { value: 'fadeInDown', label: __( 'Fade In Down' ) },
    { value: 'fadeInUp', label: __( 'Fade In Up' ) },
    { value: 'fadeInLeft', label: __( 'Fade In Left' ) },
    { value: 'fadeInRight', label: __( 'Fade In Right' ) },

    // Zoom.
    { value: 'zoomInDown', label: __( 'Zoom In Down' ) },
    { value: 'zoomInUp', label: __( 'Zoom In Up' ) },
    { value: 'zoomInLeft', label: __( 'Zoom In Left' ) },
    { value: 'zoomInRight', label: __( 'Zoom In Right' ) },

    // Flip.
    { value: 'flipInX', label: __( 'Flip In X' ) },
    { value: 'flipInY', label: __( 'Flip In Y' ) },
];

export default AnimationList;
