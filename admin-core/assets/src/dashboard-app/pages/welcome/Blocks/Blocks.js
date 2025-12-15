import { __ } from '@wordpress/i18n';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { Container } from '@bsf/force-ui';
import UAGB_Block_Icons from '@Common/block-icons';
import BlockItem from '@Common/components/BlockItem';

const Blocks = () => {
	const [ allBlocksData, setAllBlocksData ] = useState( null ); // Initialize state.

	useEffect( () => {
		const blocksData = convertToWidgetsArray( blocks );
		setAllBlocksData( blocksData );
	}, [] );

	const blocks = [
		{
			title: __( 'Login Form', 'ultimate-addons-for-gutenberg' ),
			slug: 'login',
			icon: UAGB_Block_Icons.login,
			is_pro: true,
			is_active: false,
			link: 'login'
		},
		{
			title: __( 'Registration Form', 'ultimate-addons-for-gutenberg' ),
			slug: 'register',
			icon: UAGB_Block_Icons.register,
			is_pro: true,
			is_active: false,
			link: 'registration-form-legacy'
		},
		{
			title: __( 'Instagram Feed', 'ultimate-addons-for-gutenberg' ),
			slug: 'instagram-feed',
			icon: UAGB_Block_Icons[ 'instagram-feed' ],
			is_pro: true,
			is_active: false,
			link: 'instagram-feed-legacy'
		},
		{
			title: __( 'Loop Builder', 'ultimate-addons-for-gutenberg' ),
			slug: 'loop-builder',
			icon: UAGB_Block_Icons[ 'loop-builder' ],
			is_pro: true,
			is_active: false,
			link: 'advanced-loop-builder-legacy'
		},
		{
			title: __( 'Dynamic Content', 'ultimate-addons-for-gutenberg' ),
			slug: 'dynamic-content',
			icon: UAGB_Block_Icons[ 'dynamic-content' ],
			is_pro: true,
			is_active: false,
			link: 'dynamic-content-legacy'
		},
		{
			title: __( 'FAQ', 'ultimate-addons-for-gutenberg' ),
			slug: 'faq',
			icon: UAGB_Block_Icons.faq,
			is_pro: false,
			is_active: true,
			link: 'faq-schema-legacy'
		},
		{
			title: __( 'Counter', 'ultimate-addons-for-gutenberg' ),
			slug: 'counter',
			icon: UAGB_Block_Icons.counter,
			is_pro: false,
			is_active: true,
			link: 'counter-legacy'
		},
		{
			title: __( 'Slider', 'ultimate-addons-for-gutenberg' ),
			slug: 'slider',
			icon: UAGB_Block_Icons.slider,
			is_pro: false,
			is_active: true,
			link: 'slider-legacy'
		},
		{
			title: __( 'Modal', 'ultimate-addons-for-gutenberg' ),
			slug: 'modal',
			icon: UAGB_Block_Icons.modal,
			is_pro: false,
			is_active: true,
			link: 'modal-legacy'
		},
		{
			title: __( 'Tabs', 'ultimate-addons-for-gutenberg' ),
			slug: 'tabs',
			icon: UAGB_Block_Icons.tabs,
			is_pro: false,
			is_active: true,
			link: 'tabs-legacy'
		},
		{
			title: __( 'Image Gallery', 'ultimate-addons-for-gutenberg' ),
			slug: 'image-gallery',
			icon: UAGB_Block_Icons[ 'image-gallery' ],
			is_pro: false,
			is_active: true,
			link: 'image-gallery-legacy'
		},
		{
			title: __( 'Animations', 'ultimate-addons-for-gutenberg' ),
			slug: 'animations-extension',
			icon: UAGB_Block_Icons[ 'animations-extension' ],
			is_pro: false,
			is_active: true,
			link: 'animations-legacy'
		},
	];

	function convertToWidgetsArray( data ) {
		const blocksArray = [];

		for ( const key in data ) {
			if ( data.hasOwnProperty( key ) ) {
				const block = data[ key ];

				const IconElement = block.icon;
				const icon = IconElement ? (
					React.cloneElement( IconElement, { className: 'w-5 h-5' } )
				) : (
					<Box className="custom-icon-class" />
				);

				blocksArray.push( {
					id: key, // Using the key as 'widgetTitle'
					slug: block.slug,
					title: block.title,
					icon,
					is_pro: block.is_pro,
					is_active: block.is_active !== undefined ? block.is_active : true, // Check if is_activate is set
					link: block.link
				} );
			}
		}

		return blocksArray;
	}

	return (
		<div className="rounded-lg bg-white w-full border border-solid border-border-subtle">
			<div
				className="flex items-center justify-between p-4"
				style={ {
					paddingBottom: '0',
				} }
			>
				<p className="m-0 text-sm font-semibold text-text-primary">
						{ __( 'Blocks', 'ultimate-addons-for-gutenberg' ) }
				</p>

				<Link
					to={ {
						pathname: 'admin.php',
						search: '?page=spectra&path=blocks',
					} }
					className='text-text-primary no-underline'
				>
					<div className="flex items-center gap-2">
						{ __( 'View All', 'ultimate-addons-for-gutenberg' ) }
						<ArrowUpRight size={ 16 } />
					</div>
				</Link>
			</div>
			<div className="flex flex-col rounded-lg p-4">
				<Container
					align="stretch"
					className="p-1 gap-1 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 bg-field-primary-background rounded-lg"
					containerType="grid"
					gap=""
					justify="start"
				>
					{ allBlocksData?.slice( 0, 16 ).map( ( block ) => (
						<Container.Item
							key={ block.id }
							alignSelf="auto"
							className="text-wrap rounded-md bg-background-primary p-2 block-item"
						>
							<BlockItem block={ block } key={ block.id } updateCounter={ 0 } />
						</Container.Item>
					) ) }
				</Container>
			</div>
		</div>
	);
};

export default Blocks;
