import { __ } from '@wordpress/i18n';

export const AnimationList = [
    // None.
    { value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },

    // Flip.
    { value: 'flip-down', label: __( 'Flip Down', 'ultimate-addons-for-gutenberg' ) },
    { value: 'flip-up', label: __( 'Flip Up', 'ultimate-addons-for-gutenberg' ) },
    { value: 'flip-left', label: __( 'Flip Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'flip-right', label: __( 'Flip Right', 'ultimate-addons-for-gutenberg' ) },

    // Slide.
    { value: 'slide-down', label: __( 'Slide Down', 'ultimate-addons-for-gutenberg' ) },
    { value: 'slide-up', label: __( 'Slide Up', 'ultimate-addons-for-gutenberg' ) },
    { value: 'slide-left', label: __( 'Slide Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'slide-right', label: __( 'Slide Right', 'ultimate-addons-for-gutenberg' ) },

    // Fade.
    { value: 'fade', label: __( 'Fade', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-down', label: __( 'Fade Down', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-up', label: __( 'Fade Up', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-left', label: __( 'Fade Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-right', label: __( 'Fade Right', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-up-right', label: __( 'Fade-Up Right', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-up-left', label: __( 'Fade-Up Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-down-left', label: __( 'Fade-Out Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'fade-down-right', label: __( 'Fade-Out Right', 'ultimate-addons-for-gutenberg' ) },

    // Zoom.
    { value: 'zoom-in', label: __( 'Zoom-In', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-in-down', label: __( 'Zoom-In Down', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-in-up', label: __( 'Zoom-In Up', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-in-left', label: __( 'Zoom-In Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-in-right', label: __( 'Zoom-In Right', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-out', label: __( 'Zoom-Out', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-out-down', label: __( 'Zoom-Out Down', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-out-up', label: __( 'Zoom-Out Up', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-out-left', label: __( 'Zoom-Out Left', 'ultimate-addons-for-gutenberg' ) },
    { value: 'zoom-out-right', label: __( 'Zoom-Out Right', 'ultimate-addons-for-gutenberg' ) },

];

export const AnimationEasingList = [
    
    { value: 'linear', label: __( 'Linear', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease', label: __( 'Ease', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in', label: __( 'Ease In', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out', label: __( 'Ease Out', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out', label: __( 'Ease In Out', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-back', label: __( 'Ease In Back', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out-back', label: __( 'Ease Out Back', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out-back', label: __( 'Ease In Out Back', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-sine', label: __( 'Ease In Sine', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out-sine', label: __( 'Ease Out Sine', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out-sine', label: __( 'Ease In Out Sine', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-quad', label: __( 'Ease In Quad', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out-quad', label: __( 'Ease Out Quad', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out-quad', label: __( 'Ease In Out Quad', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-cubic', label: __( 'Ease In Cubic', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out-cubic', label: __( 'Ease Out Cubic', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out-cubic', label: __( 'Ease In Out Cubic', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-quart', label: __( 'Ease In Quart', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-out-quart', label: __( 'Ease Out Quart', 'ultimate-addons-for-gutenberg' ) },
    { value: 'ease-in-out-quart', label: __( 'Ease In Out Quart', 'ultimate-addons-for-gutenberg' ) },

];

// Due to CSS conflicts across themes in the editor, we set the easing using JS.
export const AnimationEasingFunctions = {
    'linear': 'cubic-bezier(.250, .250, .750, .750)',

    'ease': 'cubic-bezier(.250, .100, .250, 1)',
    'ease-in': 'cubic-bezier(.420, 0, 1, 1)',
    'ease-out': 'cubic-bezier(.000, 0, .580, 1)',
    'ease-in-out': 'cubic-bezier(.420, 0, .580, 1)',
  
    'ease-in-back': 'cubic-bezier(.6, -.28, .735, .045)',
    'ease-out-back': 'cubic-bezier(.175, .885, .32, 1.275)',
    'ease-in-out-back': 'cubic-bezier(.68, -.55, .265, 1.55)',
  
    'ease-in-sine': 'cubic-bezier(.47, 0, .745, .715)',
    'ease-out-sine': 'cubic-bezier(.39, .575, .565, 1)',
    'ease-in-out-sine': 'cubic-bezier(.445, .05, .55, .95)',
  
    'ease-in-quad': 'cubic-bezier(.55, .085, .68, .53)',
    'ease-out-quad': 'cubic-bezier(.25, .46, .45, .94)',
    'ease-in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
  
    'ease-in-cubic': 'cubic-bezier(.55, .085, .68, .53)',
    'ease-out-cubic': 'cubic-bezier(.25, .46, .45, .94)',
    'ease-in-out-cubic': 'cubic-bezier(.455, .03, .515, .955)',
  
    'ease-in-quart': 'cubic-bezier(.55, .085, .68, .53)',
    'ease-out-quart': 'cubic-bezier(.25, .46, .45, .94)',
    'ease-in-out-quart': 'cubic-bezier(.455, .03, .515, .955)',
};
