import { __ } from '@wordpress/i18n';

export const AnimationList = [
    // None.
    { value: '', label: __( 'None' ) },

    // Flip.
    { value: 'flip-down', label: __( 'Flip Down' ) },
    { value: 'flip-up', label: __( 'Flip Up' ) },
    { value: 'flip-left', label: __( 'Flip Left' ) },
    { value: 'flip-right', label: __( 'Flip Right' ) },

    // Slide.
    { value: 'slide-down', label: __( 'Slide Down' ) },
    { value: 'slide-up', label: __( 'Slide Up' ) },
    { value: 'slide-left', label: __( 'Slide Left' ) },
    { value: 'slide-right', label: __( 'Slide Right' ) },

    // Fade.
    { value: 'fade', label: __( 'Fade' ) },
    { value: 'fade-down', label: __( 'Fade Down' ) },
    { value: 'fade-up', label: __( 'Fade Up' ) },
    { value: 'fade-left', label: __( 'Fade Left' ) },
    { value: 'fade-right', label: __( 'Fade Right' ) },
    { value: 'fade-up-right', label: __( 'Fade-Up Right' ) },
    { value: 'fade-up-left', label: __( 'Fade-Up Left' ) },
    { value: 'fade-down-left', label: __( 'Fade-Out Left' ) },
    { value: 'fade-down-right', label: __( 'Fade-Out Right' ) },

    // Zoom.
    { value: 'zoom-in', label: __( 'Zoom-In' ) },
    { value: 'zoom-in-down', label: __( 'Zoom-In Down' ) },
    { value: 'zoom-in-up', label: __( 'Zoom-In Up' ) },
    { value: 'zoom-in-left', label: __( 'Zoom-In Left' ) },
    { value: 'zoom-in-right', label: __( 'Zoom-In Right' ) },
    { value: 'zoom-out', label: __( 'Zoom-Out' ) },
    { value: 'zoom-out-down', label: __( 'Zoom-Out Down' ) },
    { value: 'zoom-out-up', label: __( 'Zoom-Out Up' ) },
    { value: 'zoom-out-left', label: __( 'Zoom-Out Left' ) },
    { value: 'zoom-out-right', label: __( 'Zoom-Out Right' ) },

];

export const AnimationEasingList = [
    
    { value: 'linear', label: __( 'Linear' ) },
    { value: 'ease', label: __( 'Ease' ) },
    { value: 'ease-in', label: __( 'Ease In' ) },
    { value: 'ease-out', label: __( 'Ease Out' ) },
    { value: 'ease-in-out', label: __( 'Ease In Out' ) },

];
