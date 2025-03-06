import { __ } from '@wordpress/i18n';

const UpsellImage = () => {
	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/upsell/globalBanner.svg';

	return (
		<img
			src={ imgUrl }
			alt="Upsell Cover"
			className="max-w-full h-auto"
		/>
	);
};

export const spectraProFeatures = {
	'advanced-animations': {
		image: <UpsellImage />,
		title: __( 'Unlock Advanced Animations', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Make your pages visually stunning with advanced animations that capture attention.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Take your website’s visual appeal to the next level with smooth, highly customizable animations. Control pacing, delays, and effects effortlessly.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Smooth animations with precise control.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Set delay and duration for animations', 'ultimate-addons-for-gutenberg' ),
			__( 'Customize animation pacing and easing', 'ultimate-addons-for-gutenberg' ),
			__( 'Repeat animations on scroll', 'ultimate-addons-for-gutenberg' ),
			__( 'Animate nested blocks seamlessly', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'modal': {
		image: <UpsellImage />,
		title: __( 'Get Modal Pro', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Boost engagement with highly customizable modals that demand attention. Create modals with triggers, transitions, and animations.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Add professional, high-converting modals with advanced triggers, seamless animations, and flexible customization.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Customizable modals with dynamic triggers.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Advanced triggers like exit intent and delay', 'ultimate-addons-for-gutenberg' ),
			__( 'Off-canvas and full-screen display options', 'ultimate-addons-for-gutenberg' ),
			__( 'Smooth entrance and exit effects', 'ultimate-addons-for-gutenberg' ),
			__( 'Cookie-based automatic triggering for conversions', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'countdown': {
		image: <UpsellImage />,
		title: __( 'Get Countdown Pro', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Increase urgency and boost conversions with advanced countdown timers. Perfect for sales, events, and promotions.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Create real-time urgency with highly customizable countdown timers, evergreen deadlines, and smart expiry options.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Advanced countdown timers with smart options.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Evergreen countdown with auto-reset', 'ultimate-addons-for-gutenberg' ),
			__( 'Fixed date and time countdowns', 'ultimate-addons-for-gutenberg' ),
			__( 'Customizable expiry actions', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'image-gallery': {
		image: <UpsellImage />,
		title: __( 'Get Image Gallery Pro', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Transform your image galleries into interactive experiences with custom click actions and animations.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Engage your audience with interactive image galleries featuring custom redirections, lightboxes, and effects.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Clickable images with custom actions.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Redirect users with custom click actions', 'ultimate-addons-for-gutenberg' ),
			__( 'Built-in lightbox and modal options', 'ultimate-addons-for-gutenberg' ),
			__( 'Multiple layout styles and hover effects', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'post-grid': {
		image: <UpsellImage />,
		title: __( 'Unlock Loop Builder', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Customize post layouts like never before with powerful loop builder options.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Design stunning post grids with dynamic content, flexible layouts, and seamless integrations.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Fully customizable post loops with Loop Builder.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Drag-and-drop design with Spectra blocks', 'ultimate-addons-for-gutenberg' ),
			__( 'ACF, Custom Fields, and Taxonomy integration', 'ultimate-addons-for-gutenberg' ),
			__( 'Advanced filtering and sorting', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'dynamic-content': {
		image: <UpsellImage />,
		title: __( 'Unlock Dynamic Content Pro', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Deliver personalized content dynamically based on user behavior. Make your pages more relevant and engaging.', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Tailor content dynamically for users based on preferences, interactions, and data sources. Create truly personalized experiences.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Experience dynamic content with Spectra Pro. No more static displays.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Dynamic text and images from any source', 'ultimate-addons-for-gutenberg' ),
			__( 'Global updates: Change once, reflect everywhere', 'ultimate-addons-for-gutenberg' ),
			__( 'Smart fallback options for dynamic content', 'ultimate-addons-for-gutenberg' ),
		],
	},
	'slider': {
		image: <UpsellImage />,
		title: __( 'Get Slider Pro', 'ultimate-addons-for-gutenberg' ),
		header: __( 'Create Stunning Sliders with Enhanced Customization', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Take full control over your slider designs with advanced settings.', 'ultimate-addons-for-gutenberg' ),
		shortDesc: __( 'Fully customizable sliders.', 'ultimate-addons-for-gutenberg' ),
		features: [
			__( 'Slide-per-view option', 'ultimate-addons-for-gutenberg' ),
			__( 'Custom navigation styles', 'ultimate-addons-for-gutenberg' ),
			__( 'Unique navigation slugs', 'ultimate-addons-for-gutenberg' ),
		],
	}
};
