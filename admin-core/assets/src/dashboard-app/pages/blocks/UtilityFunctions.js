import { __ } from '@wordpress/i18n';
import React from 'react';
import UAGB_Block_Icons from '@Common/block-icons';

export const proBlocks = [
	{
		title: __( 'Login Form', 'ultimate-addons-for-gutenberg' ),
		slug: 'login',
		link: 'login-forms',
		icon: React.cloneElement( UAGB_Block_Icons.login, { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: false,
	},

	{
		title: __( 'Registration Form', 'ultimate-addons-for-gutenberg' ),
		slug: 'register',
		link: 'registration-form',
		icon: React.cloneElement( UAGB_Block_Icons.register, { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: false,
	},

	{
		title: __( 'Instagram Feed', 'ultimate-addons-for-gutenberg' ),
		slug: 'instagram-feed',
		link: 'instagram-feed',
		icon: React.cloneElement( UAGB_Block_Icons[ 'instagram-feed' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: false,
	},

	{
		title: __( 'Loop Builder', 'ultimate-addons-for-gutenberg' ),
		slug: 'loop-builder',
		link: 'loop-builder',
		icon: React.cloneElement( UAGB_Block_Icons[ 'loop-builder' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: false,
	},
	{
		title: __( 'Dynamic content', 'ultimate-addons-for-gutenberg' ),
		slug: 'dynamic-content',
		link: 'how-to-use-dynamic-content',
		icon: React.cloneElement( UAGB_Block_Icons[ 'dynamic-content' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Global Block Style', 'ultimate-addons-for-gutenberg' ),
		slug: 'global-block-styles',
		link: 'global-block-style-extension',
		icon: React.cloneElement( UAGB_Block_Icons[ 'global-block-styles' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Popup Builder Pro', 'ultimate-addons-for-gutenberg' ),
		slug: 'popup-builder',
		link: 'create-popups',
		icon: React.cloneElement(
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.29035 1.22673C6.45181 1.38793 6.71354 1.38793 6.875 1.22673C7.0364 1.06553 7.0364 0.804171 6.875 0.642971L6.29035 1.22673ZM15.5 9.14329C15.5 8.91532 15.3149 8.73051 15.0866 8.73051C14.8583 8.73051 14.6732 8.91532 14.6732 9.14329H15.5ZM8.72402 7.77659C8.72402 7.54861 8.53894 7.36381 8.31063 7.36381H4.59015C4.36184 7.36381 4.17677 7.54861 4.17677 7.77659C4.17677 8.00456 4.36184 8.18936 4.59015 8.18936H7.89724V11.4916C7.89724 11.7196 8.08232 11.9044 8.31063 11.9044C8.53894 11.9044 8.72402 11.7196 8.72402 11.4916V7.77659ZM6.875 0.642971C6.82522 0.593304 6.77502 0.568709 6.75547 0.559661C6.73096 0.548307 6.71012 0.54155 6.69795 0.537922C6.67356 0.53066 6.65313 0.526918 6.64315 0.525207C6.62142 0.521495 6.6011 0.519481 6.58787 0.518317C6.55929 0.515793 6.5248 0.513982 6.48884 0.512535C6.4152 0.509571 6.31321 0.507297 6.18998 0.505533C5.94251 0.501989 5.5974 0.500343 5.19616 0.500049C4.3931 0.499461 3.35862 0.504293 2.41584 0.5105L2.42129 1.33604C3.36342 1.32983 4.39553 1.32501 5.19556 1.3256C5.59587 1.32589 5.93644 1.32754 6.17813 1.331C6.29951 1.33274 6.39293 1.3349 6.45553 1.33742C6.48772 1.33871 6.5065 1.33991 6.51518 1.34067C6.52061 1.34115 6.51488 1.34085 6.5036 1.33892C6.49882 1.3381 6.48252 1.33527 6.46132 1.32894C6.45069 1.32577 6.43114 1.31948 6.40764 1.3086C6.38909 1.30003 6.33961 1.27591 6.29035 1.22673L6.875 0.642971ZM0.5 2.4382V13.5704H1.32677V2.4382H0.5ZM2.43242 15.5H13.5676V14.6744H2.43242V15.5ZM15.5 13.5704V9.14329H14.6732V13.5704H15.5ZM13.5676 15.5C14.6348 15.5 15.5 14.6361 15.5 13.5704H14.6732C14.6732 14.1801 14.1782 14.6744 13.5676 14.6744V15.5ZM0.5 13.5704C0.5 14.6361 1.36518 15.5 2.43242 15.5V14.6744C1.82179 14.6744 1.32677 14.1801 1.32677 13.5704H0.5ZM2.41584 0.5105C1.35424 0.517489 0.5 1.37958 0.5 2.4382H1.32677C1.32677 1.83195 1.8156 1.34002 2.42129 1.33604L2.41584 0.5105ZM1.69486 14.9663L8.60295 8.06842L8.01831 7.48469L1.11024 14.3826L1.69486 14.9663ZM10.6355 1.32556H13.5674V0.5H10.6355V1.32556ZM14.6731 2.42958V4.97822H15.4998V2.42958H14.6731ZM13.5674 6.08224H10.6355V6.90781H13.5674V6.08224ZM9.52976 4.97822V2.42958H8.70299V4.97822H9.52976ZM10.6355 6.08224C10.0248 6.08224 9.52976 5.58796 9.52976 4.97822H8.70299C8.70299 6.0439 9.56821 6.90781 10.6355 6.90781V6.08224ZM14.6731 4.97822C14.6731 5.58796 14.1781 6.08224 13.5674 6.08224V6.90781C14.6347 6.90781 15.4998 6.0439 15.4998 4.97822H14.6731ZM13.5674 1.32556C14.1781 1.32556 14.6731 1.81984 14.6731 2.42958H15.4998C15.4998 1.3639 14.6347 0.5 13.5674 0.5V1.32556ZM10.6355 0.5C9.56821 0.5 8.70299 1.3639 8.70299 2.42958H9.52976C9.52976 1.81984 10.0248 1.32556 10.6355 1.32556V0.5Z"
					fill="#111827"
				/>
				<path
					d="M6.29035 1.22673C6.45181 1.38793 6.71354 1.38793 6.875 1.22673C7.0364 1.06553 7.0364 0.804171 6.875 0.642971M6.29035 1.22673L6.875 0.642971M6.29035 1.22673C6.33961 1.27591 6.38909 1.30003 6.40764 1.3086C6.43114 1.31948 6.45069 1.32577 6.46132 1.32894C6.48252 1.33527 6.49882 1.3381 6.5036 1.33892C6.51488 1.34085 6.52061 1.34115 6.51518 1.34067C6.5065 1.33991 6.48772 1.33871 6.45553 1.33742C6.39293 1.3349 6.29951 1.33274 6.17813 1.331C5.93644 1.32754 5.59587 1.32589 5.19556 1.3256C4.39553 1.32501 3.36342 1.32983 2.42129 1.33604M6.875 0.642971C6.82522 0.593304 6.77502 0.568709 6.75547 0.559661C6.73096 0.548307 6.71012 0.54155 6.69795 0.537922C6.67356 0.53066 6.65313 0.526918 6.64315 0.525207C6.62142 0.521495 6.6011 0.519481 6.58787 0.518317C6.55929 0.515793 6.5248 0.513982 6.48884 0.512535C6.4152 0.509571 6.31321 0.507297 6.18998 0.505533C5.94251 0.501989 5.5974 0.500343 5.19616 0.500049C4.3931 0.499461 3.35862 0.504293 2.41584 0.5105M2.41856 0.923268L2.42129 1.33604M2.42129 1.33604L2.41584 0.5105M2.42129 1.33604C1.8156 1.34002 1.32677 1.83195 1.32677 2.4382M15.5 9.14329C15.5 8.91532 15.3149 8.73051 15.0866 8.73051C14.8583 8.73051 14.6732 8.91532 14.6732 9.14329M15.5 9.14329H14.6732M15.5 9.14329V13.5704M14.6732 9.14329V13.5704M2.41584 0.5105C1.35424 0.517489 0.5 1.37958 0.5 2.4382M0.5 2.4382V13.5704M0.5 2.4382H1.32677M0.5 13.5704H1.32677M0.5 13.5704C0.5 14.6361 1.36518 15.5 2.43242 15.5M1.32677 13.5704V2.4382M1.32677 13.5704C1.32677 14.1801 1.82179 14.6744 2.43242 14.6744M2.43242 15.5H13.5676M2.43242 15.5V14.6744M13.5676 15.5V14.6744M13.5676 15.5C14.6348 15.5 15.5 14.6361 15.5 13.5704M13.5676 14.6744H2.43242M13.5676 14.6744C14.1782 14.6744 14.6732 14.1801 14.6732 13.5704M15.5 13.5704H14.6732M10.6355 1.32556H13.5674M10.6355 1.32556V0.5M10.6355 1.32556C10.0248 1.32556 9.52976 1.81984 9.52976 2.42958M13.5674 1.32556V0.5M13.5674 1.32556C14.1781 1.32556 14.6731 1.81984 14.6731 2.42958M13.5674 0.5H10.6355M13.5674 0.5C14.6347 0.5 15.4998 1.3639 15.4998 2.42958M10.6355 0.5C9.56821 0.5 8.70299 1.3639 8.70299 2.42958M14.6731 2.42958V4.97822M14.6731 2.42958H15.4998M14.6731 4.97822H15.4998M14.6731 4.97822C14.6731 5.58796 14.1781 6.08224 13.5674 6.08224M15.4998 4.97822V2.42958M15.4998 4.97822C15.4998 6.0439 14.6347 6.90781 13.5674 6.90781M13.5674 6.08224H10.6355M13.5674 6.08224V6.90781M10.6355 6.08224V6.90781M10.6355 6.08224C10.0248 6.08224 9.52976 5.58796 9.52976 4.97822M10.6355 6.90781H13.5674M10.6355 6.90781C9.56821 6.90781 8.70299 6.0439 8.70299 4.97822M9.52976 4.97822V2.42958M9.52976 4.97822H8.70299M9.52976 2.42958H8.70299M8.70299 2.42958V4.97822M8.72401 7.77659C8.72401 7.54861 8.53894 7.36381 8.31063 7.36381H4.59015C4.36184 7.36381 4.17677 7.54861 4.17677 7.77659C4.17677 8.00456 4.36184 8.18936 4.59015 8.18936H7.89724V11.4916C7.89724 11.7196 8.08232 11.9044 8.31063 11.9044C8.53894 11.9044 8.72401 11.7196 8.72401 11.4916V7.77659ZM1.69486 14.9663L8.60295 8.06842L8.01831 7.48469L1.11024 14.3826L1.69486 14.9663Z"
					stroke="#111827"
					strokeWidth="0.25"
				/>
			</svg>,
			{ className: 'w-5 h-5' }
		),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Modal Pro', 'ultimate-addons-for-gutenberg' ),
		slug: 'modal',
		link: 'modal-block',
		icon: React.cloneElement( UAGB_Block_Icons.modal, { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Advanced Animations', 'ultimate-addons-for-gutenberg' ),
		slug: 'animations-extension',
		link: 'animations',
		icon: React.cloneElement( UAGB_Block_Icons[ 'animations-extension' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Countdown Pro', 'ultimate-addons-for-gutenberg' ),
		slug: 'countdown',
		link: 'countdown-pro',
		icon: React.cloneElement( UAGB_Block_Icons.countdown, { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Slider Pro', 'ultimate-addons-for-gutenberg' ),
		slug: 'slider',
		link: 'slider-block',
		icon: React.cloneElement( UAGB_Block_Icons.slider, { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
	{
		title: __( 'Image Gallery Pro', 'ultimate-addons-for-gutenberg' ),
		slug: 'image-gallery',
		link: 'image-gallery',
		icon: React.cloneElement( UAGB_Block_Icons[ 'image-gallery' ], { className: 'w-5 h-5' } ),
		is_pro: true,
		is_active: null,
		is_core: false,
		is_extension: true,
	},
];
