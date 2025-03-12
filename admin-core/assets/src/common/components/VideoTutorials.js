import { __ } from '@wordpress/i18n';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const PlayFilledIcon = ( props ) => (
	<svg { ...props } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
		<path d="M8 5v14l11-7L8 5z" />
	</svg>
);

const VideoTutorials = () => {
	const videos = [
		'https://www.youtube-nocookie.com/embed/-Ksf984Tcgw',
		'https://www.youtube-nocookie.com/embed/3TYf_v-T7n8',
		'https://www.youtube-nocookie.com/embed/DKgGid221_U',
		'https://www.youtube-nocookie.com/embed/m2uVrKWPnbA',
		'https://www.youtube-nocookie.com/embed/0PKYbB2XbFE',
		'',
	];

	const [ currentIndex, setCurrentIndex ] = useState( 0 );
	const [ popupVideo, setPopupVideo ] = useState( null );

	useEffect( () => {
		const handleKeyDown = ( e ) => {
			if ( e.key === 'Escape' ) {
				setPopupVideo( null );
			}
		};

		window.addEventListener( 'keydown', handleKeyDown );

		return () => {
			window.removeEventListener( 'keydown', handleKeyDown );
		};
	}, [] );

	const maxIndex = Math.max( 0, videos.length - 3 );

	const handleNext = () => {
		setCurrentIndex( ( prevIndex ) => Math.min( prevIndex + 1, maxIndex ) );
	};

	const handlePrev = () => {
		setCurrentIndex( ( prevIndex ) => Math.max( prevIndex - 1, 0 ) );
	};

	const getThumbnailUrl = ( videoUrl ) => {
		const videoId = videoUrl.split( '/embed/' )[ 1 ];
		return `https://img.youtube.com/vi/${ videoId }/hqdefault.jpg`;
	};

	return (
		<div className="rounded-lg bg-white w-full border border-solid border-border-subtle">
			<div className="flex items-center justify-between p-4 pb-2">
				<p className="m-0 text-sm font-semibold text-text-primary">
					{ __( 'Video Tutorials', 'ultimate-addons-for-gutenberg' ) }
				</p>
				<div className="flex items-center gap-2">
					<ChevronLeft
						onClick={ handlePrev }
						className={ `${
							currentIndex === 0 ? 'text-text-disabled' : 'text-text-secondary'
						} cursor-pointer` }
					/>
					<ChevronRight
						onClick={ handleNext }
						className={ `${
							currentIndex === maxIndex ? 'text-text-disabled' : 'text-text-secondary'
						} cursor-pointer` }
					/>
				</div>
			</div>

			<div className="relative overflow-hidden rounded-lg px-3 pb-2">
				<div
					className="flex transition-transform duration-500"
					style={ {
						transform: `translateX(-${ ( currentIndex * 100 ) / 3 }%)`,
					} }
				>
					{ videos.map( ( video, index ) => {
						return video !== '' ? (
							<div
								key={ index }
								className="flex-none w-1/3 text-wrap rounded-md bg-background-primary p-1 sm:p-3 relative cursor-pointer"
								onClick={ () => setPopupVideo( video ) }
							>
								<img
									src={ getThumbnailUrl( video ) }
									alt={ `Video ${ index + 1 }` }
									className="w-full h-full object-cover rounded-lg aspect-video"
								/>

								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
									<PlayFilledIcon className="w-6 h-6 text-white" />
								</div>
							</div>
						) : (
							<div
								className="flex-none w-1/3 text-wrap rounded-md bg-background-primary p-1 sm:p-3 relative cursor-pointer"
								onClick={ () =>
									window.open(
										'https://youtube.com/playlist?list=PL1kzJGWGPrW_tpwr6g4i_wiGegpq7qibx&si=-nZHuyhFclqFRSGi',
										'_blank'
									)
								}
							>
								<img
									src={ getThumbnailUrl( 'https://www.youtube-nocookie.com/embed/ywLPlWqhM0Y' ) }
									alt="See More Playlist"
									className="w-full h-full object-cover rounded-lg aspect-video"
								/>

								{ /* Overlay */ }
								<div className="w-full h-full p-1 sm:p-3 absolute top-0 left-0">
									<div className="w-full h-full bg-black bg-opacity-50 hover:bg-opacity-30 transition-all duration-100 text-text-on-color rounded-md">
										<p className="text-sm font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
											{ __( 'See More', 'ultimate-addons-for-gutenberg' ) } &hellip;
										</p>
									</div>
								</div>
							</div>
						);
					} ) }
				</div>
			</div>

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
					<div className="relative rounded-lg shadow-lg w-4/5 cursor-default">
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
		</div>
	);
};

export default VideoTutorials;
