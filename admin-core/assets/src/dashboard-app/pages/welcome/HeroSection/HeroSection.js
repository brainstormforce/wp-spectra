import { __, sprintf } from '@wordpress/i18n';

import { Container, Title, Button } from '@bsf/force-ui';
import { Plus, ExternalLink, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
	const proVideoUrl = `https://www.youtube-nocookie.com/embed/3zDGUBaDwiU`;
	const proVideoThumbnailUrl = 'https://img.youtube.com/vi/3zDGUBaDwiU/hqdefault.jpg';

	const freeVideoUrl = `https://www.youtube-nocookie.com/embed/GLNzTxArR6Y`;
	const freeVideoThumbnailUrl = 'https://img.youtube.com/vi/GLNzTxArR6Y/hqdefault.jpg';

	const [ popupVideo, setPopupVideo ] = useState( null );

	useEffect( () => {
		const handleKeyDown = ( e ) => {
			if ( e.key === 'Escape' ) {
				setPopupVideo( null );
			}
		};

		window.addEventListener( 'keydown', handleKeyDown );
		return () => window.removeEventListener( 'keydown', handleKeyDown );
	}, [] );

	const onCreateNewPageClick = () => {
		window.open( uag_react.wp_pages_url, '_blank' );
	};

	const onReadFullGuideClick = () => {
		window.open( 'https://wpspectra.com/', '_blank' );
	};

	const translatedString = sprintf(
		/* translators: abbreviation for units */ __( 'Hi %s. 👋', 'ultimate-addons-for-gutenberg' ),
		uagb_user_data.displayName
	);

	return (
		<Container
			className="bg-white p-6 shadow-sm rounded-xl border border-solid border-border-subtle"
			cols={ 8 }
			containerType="grid"
			gap="2xl"
		>
			<Container.Item className="flex flex-col gap-6" colSpan={ { lg: 5, md: 8, sm: 8 } }>
				<div>
					<Title
						className="text-text-primary mb-1"
						size="lg"
						tag="h3"
						title={
							'Activated' === uag_react.pro_plugin_status
								? translatedString
								: __( 'Welcome to Spectra', 'ultimate-addons-for-gutenberg' )
						}
					/>
					<p className="text-sm text-text-secondary m-0">
						{ 'Activated' === uag_react.pro_plugin_status
							? __(
									"Thanks for choosing Spectra Pro! You're now part of an exclusive community of website builders. Enjoy exploring the new features and creating something amazing. Let's take your site to the next level together.",
									'ultimate-addons-for-gutenberg'
							  )
							: __(
									'We designed Spectra to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Spectra!',
									'ultimate-addons-for-gutenberg'
							  ) }
					</p>
				</div>

				<div className="flex gap-3">
					<Button
						icon={ <Plus /> }
						iconPosition="left"
						variant="primary"
						onClick={ onCreateNewPageClick }
						className="uagb-remove-ring"
					>
						{ __( 'Create new page', 'ultimate-addons-for-gutenberg' ) }
					</Button>
					<Button
						icon={ <ExternalLink /> }
						iconPosition="right"
						variant="ghost"
						onClick={ onReadFullGuideClick }
						className="uagb-remove-ring"
					>
						{ __( 'Read full guide', 'ultimate-addons-for-gutenberg' ) }
					</Button>
				</div>
			</Container.Item>

			<Container.Item
				colSpan={ { lg: 3, md: 8, sm: 8 } }
				className="relative"
				onClick={ () => setPopupVideo(
					'Activated' === uag_react.pro_plugin_status ? proVideoUrl : freeVideoUrl
				) }
			>
				<img
					src={ 'Activated' === uag_react.pro_plugin_status ? proVideoThumbnailUrl : freeVideoThumbnailUrl }
					className="w-full h-full object-cover rounded-lg aspect-video cursor-pointer"
					alt='Video Thumbnail'
				/>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full">
					<PlayFilledIcon className="w-6 h-6 text-white" />
				</div>
			</Container.Item>

			{ /* Video Popup */ }
			{ popupVideo && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 cursor-pointer w-screen z-999999"
					onClick={ () => setPopupVideo( null ) }
				>
					<div className="text-text-inverse absolute top-4 right-4 flex items-center gap-2">
						<div className="text-sm font-medium">Esc</div>
						<X
							size={ 20 }
							onClick={ ( e ) => {
								e.stopPropagation();
								setPopupVideo( null );
							} }
						/>
					</div>
					<div
						className="relative rounded-lg shadow-lg w-4/5 cursor-default"
						onClick={ ( e ) => e.stopPropagation() }
					>
						<iframe
							className="w-full lg:h-188 sm:h-120 h-60"
							src={ `${ popupVideo }?autoplay=1` }
							title="Video Popup"
							frameBorder="0"
							allow="autoplay; encrypted-media"
							allowFullScreen
						></iframe>
					</div>
				</div>
			) }
		</Container>
	);
};

const PlayFilledIcon = ( props ) => (
	<svg { ...props } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
		<path d="M8 5v14l11-7L8 5z" />
	</svg>
);

export default HeroSection;
