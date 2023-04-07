import { __ } from '@wordpress/i18n';

// when click for first time on button this defaultContent will get loaded.
export const defaultContent = [
	[
		'uagb/info-box',
		{
			icon: 'circle-check',
			iconBottomMargin: 15,
			infoBoxTitle: __( 'Engage Your Visitors!', 'ultimate-addons-for-gutenberg' ),
			headFontWeight: 500,
			headSpace: 10,
			headingDesc: __(
				'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar dapibus.',
				'ultimate-addons-for-gutenberg'
			),
			subHeadSpace: 30,
			ctaType: 'button',
			btnBorderStyle: 'none',
			showCtaIcon: false,
			ctaText: __( 'Call To Action', 'ultimate-addons-for-gutenberg' ),
			paddingBtnTop: 14,
			paddingBtnRight: 28,
			paddingBtnBottom: 14,
			paddingBtnLeft: 28,
			btnBorderTopLeftRadius: 3,
			btnBorderTopRightRadius: 3,
			btnBorderBottomLeftRadius: 3,
			btnBorderBottomRightRadius: 3,
		},
	],
];

// excludeBlocks are blocks that restricted to use as child block inside Modal.
export const excludeBlocks = [
	'uagb/how-to-step',
	'uagb/buttons-child',
	'uagb/faq-child',
	'uagb/content-timeline-child',
	'uagb/icon-list-child',
	'uagb/social-share-child',
	'uagb/restaurant-menu-child',
	'uagb/tabs-child',
	'uagb/post-image',
	'uagb/post-taxonomy',
	'uagb/post-title',
	'uagb/post-meta',
	'uagb/post-excerpt',
	'uagb/post-button',
	'uagb/forms-name',
	'uagb/forms-email',
	'uagb/forms-hidden',
	'uagb/forms-phone',
	'uagb/forms-textarea',
	'uagb/forms-url',
	'uagb/forms-select',
	'uagb/forms-radio',
	'uagb/forms-checkbox',
	'uagb/forms-toggle',
	'uagb/forms-date',
	'uagb/forms-accept',
	'uagb/modal',
	'uagb/slider-child',
];
