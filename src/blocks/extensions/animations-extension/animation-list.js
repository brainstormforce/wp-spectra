/**
 * EXTENSION: Animations Extension - List of animations available.
 */

import { __ } from '@wordpress/i18n';

export const AnimationList = [
	// None.
	{ value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },

	// Fade.
	{
		label: __( 'Fade', 'ultimate-addons-for-gutenberg' ),
		options: [
			{ value: 'fade', label: __( 'Fade', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'fade-down', label: __( 'Fade Down', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'fade-up', label: __( 'Fade Up', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'fade-left', label: __( 'Fade Left', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'fade-right', label: __( 'Fade Right', 'ultimate-addons-for-gutenberg' ) },
		],
	},
	
	// Flip.
	{
		label: __( 'Flip', 'ultimate-addons-for-gutenberg' ),
		options: [
			{ value: 'flip-down', label: __( 'Flip Down', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'flip-up', label: __( 'Flip Up', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'flip-left', label: __( 'Flip Left', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'flip-right', label: __( 'Flip Right', 'ultimate-addons-for-gutenberg' ) },
		],
	},

	// Slide.
	{
		label: __( 'Slide', 'ultimate-addons-for-gutenberg' ),
		options: [
			{ value: 'slide-down', label: __( 'Slide Down', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'slide-up', label: __( 'Slide Up', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'slide-left', label: __( 'Slide Left', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'slide-right', label: __( 'Slide Right', 'ultimate-addons-for-gutenberg' ) },
		],
	},

	// Zoom-In.
	{
		label: __( 'Zoom-In', 'ultimate-addons-for-gutenberg' ),
		options: [
			{ value: 'zoom-in', label: __( 'Zoom-In', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-in-down', label: __( 'Zoom-In Down', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-in-up', label: __( 'Zoom-In Up', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-in-left', label: __( 'Zoom-In Left', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-in-right', label: __( 'Zoom-In Right', 'ultimate-addons-for-gutenberg' ) },
		],
	},

	// Zoom-Out.
	{
		label: __( 'Zoom-Out', 'ultimate-addons-for-gutenberg' ),
		options: [
			{ value: 'zoom-out', label: __( 'Zoom-Out', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-out-down', label: __( 'Zoom-Out Down', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-out-up', label: __( 'Zoom-Out Up', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-out-left', label: __( 'Zoom-Out Left', 'ultimate-addons-for-gutenberg' ) },
			{ value: 'zoom-out-right', label: __( 'Zoom-Out Right', 'ultimate-addons-for-gutenberg' ) },
		],
	},

];

export const AnimationSelectControlObject = {
	// None.
	'none': { value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },

	// Fade.
	'fade': { value: 'fade', label: __( 'Fade', 'ultimate-addons-for-gutenberg' ) },
	'fade-down': { value: 'fade-down', label: __( 'Fade Down', 'ultimate-addons-for-gutenberg' ) },
	'fade-up': { value: 'fade-up', label: __( 'Fade Up', 'ultimate-addons-for-gutenberg' ) },
	'fade-left': { value: 'fade-left', label: __( 'Fade Left', 'ultimate-addons-for-gutenberg' ) },
	'fade-right': { value: 'fade-right', label: __( 'Fade Right', 'ultimate-addons-for-gutenberg' ) },	

	// Flip.
	'flip-down': { value: 'flip-down', label: __( 'Flip Down', 'ultimate-addons-for-gutenberg' ) },
	'flip-up': { value: 'flip-up', label: __( 'Flip Up', 'ultimate-addons-for-gutenberg' ) },
	'flip-left': { value: 'flip-left', label: __( 'Flip Left', 'ultimate-addons-for-gutenberg' ) },
	'flip-right': { value: 'flip-right', label: __( 'Flip Right', 'ultimate-addons-for-gutenberg' ) },

	// Slide.
	'slide-down': { value: 'slide-down', label: __( 'Slide Down', 'ultimate-addons-for-gutenberg' ) },
	'slide-up': { value: 'slide-up', label: __( 'Slide Up', 'ultimate-addons-for-gutenberg' ) },
	'slide-left': { value: 'slide-left', label: __( 'Slide Left', 'ultimate-addons-for-gutenberg' ) },
	'slide-right': { value: 'slide-right', label: __( 'Slide Right', 'ultimate-addons-for-gutenberg' ) },

	// Zoom.
	'zoom-in': { value: 'zoom-in', label: __( 'Zoom-In', 'ultimate-addons-for-gutenberg' ) },
	'zoom-in-down': { value: 'zoom-in-down', label: __( 'Zoom-In Down', 'ultimate-addons-for-gutenberg' ) },
	'zoom-in-up': { value: 'zoom-in-up', label: __( 'Zoom-In Up', 'ultimate-addons-for-gutenberg' ) },
	'zoom-in-left': { value: 'zoom-in-left', label: __( 'Zoom-In Left', 'ultimate-addons-for-gutenberg' ) },
	'zoom-in-right': { value: 'zoom-in-right', label: __( 'Zoom-In Right', 'ultimate-addons-for-gutenberg' ) },

	'zoom-out': { value: 'zoom-out', label: __( 'Zoom-Out', 'ultimate-addons-for-gutenberg' ) },
	'zoom-out-down': { value: 'zoom-out-down', label: __( 'Zoom-Out Down', 'ultimate-addons-for-gutenberg' ) },
	'zoom-out-up': { value: 'zoom-out-up', label: __( 'Zoom-Out Up', 'ultimate-addons-for-gutenberg' ) },
	'zoom-out-left': { value: 'zoom-out-left', label: __( 'Zoom-Out Left', 'ultimate-addons-for-gutenberg' ) },
	'zoom-out-right': { value: 'zoom-out-right', label: __( 'Zoom-Out Right', 'ultimate-addons-for-gutenberg' ) },
};
