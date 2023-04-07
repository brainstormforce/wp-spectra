import { useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';

const Render = ( props ) => {
	props = props.parentProps;

	const { slideIndex } = props;

	// Only parent blocks.
	const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
		return ! item.parent;
	} );

	const TEMPLATE = [
		[
			'uagb/container',
			{ variationSelected: true },
			[
				[
					'uagb/info-box',
					{
						showIcon: false,
						ctaType: 'button',
						infoBoxTitle: __( 'Slide ', 'ultimate-addons-for-gutenberg' ) + parseInt( slideIndex + 1 ),
						showCtaIcon: false,
						paddingBtnTop: 12,
						paddingBtnRight: 24,
						paddingBtnBottom: 12,
						paddingBtnLeft: 24,
					},
				],
			],
		],
	];

	// Hide slider block.
	const ALLOWED_BLOCKS = parentBlocks
		.map( ( block ) => block.name )
		.filter(
			( blockName ) => [ 'uagb/slider', 'uagb/post-carousel', 'uagb/testimonial' ].indexOf( blockName ) === -1
		);

	const innerBlockOptions = {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
	};

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `swiper-content`,
			slot: 'container-start',
		},
		innerBlockOptions
	);

	return <div { ...innerBlocksProps } />;
};

export default memo( Render );
