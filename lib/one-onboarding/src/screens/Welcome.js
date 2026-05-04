import { useState } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Text } from '@bsf/force-ui';
import { Check, ChevronRight, Play } from 'lucide-react';
import { useRouterSync } from '@/store';
import { Layout, Logo } from '@/components';

const { product, screens } = window.oneOnboardingData || {};
const screen = screens?.welcome || {};

const Welcome = () => {
	const { navigateToNextScreen } = useRouterSync();

	const isImage = screen?.banner?.type === 'image';
	const isVideo = screen?.banner?.type === 'video';
	const isVideoThumbnail = screen?.banner?.thumbnail;

	const [ showVideo, setShowVideo ] = useState(
		isVideo && ! isVideoThumbnail
	);

	return (
		<Layout className="w-[35rem]">
			<div className="space-y-1.5">
				<Text as="h2" size={ 30 } weight={ 600 }>
					{ screen?.heading ||
						sprintf(
							// translators: %s is the product name
							__( 'Welcome to %s', 'one-onboarding' ),
							product?.name
						) }
				</Text>
				<Text size={ 16 } weight={ 500 }>
					{ screen?.description }
				</Text>
			</div>

			{ screen?.banner?.url && (
				<div className="relative">
					{ isImage && (
						<img
							alt={
								screen?.banner?.title ||
								sprintf(
									// translators: %s is the product name
									__( '%s Welcome Banner', 'one-onboarding' ),
									product?.name
								)
							}
							className="w-full"
							src={ screen.banner.url }
						/>
					) }

					{ isVideo && showVideo && (
						<iframe
							className="w-full aspect-video border-none rounded-lg bg-blend-multiply"
							src={ screen?.banner?.url }
							title={
								screen?.banner?.title ||
								__( 'Welcome Video', 'one-onboarding' )
							}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
							allowFullScreen
							style={ {
								background: `#4F4E7C1A url('${ screen?.banner?.thumbnail }') center / cover no-repeat`,
							} }
						></iframe>
					) }

					{ /* Video Thumbnail */ }
					{ isVideo && ! showVideo && (
						<div
							className="relative w-full h-full aspect-video rounded-lg cursor-pointer overflow-hidden group"
							onKeyUp={ ( e ) => {
								if ( e.key === 'Enter' || e.key === ' ' ) {
									setShowVideo( true );
								}
							} }
							onClick={ () => setShowVideo( true ) }
							role="button"
							tabIndex={ 0 }
							aria-label={ __(
								'Play Welcome Onboarding Video',
								'one-onboarding'
							) }
						>
							<img
								className="w-full h-full object-cover rounded-xl"
								src={ screen?.banner?.thumbnail }
								alt={ __(
									'Starter Templates Banner',
									'one-onboarding'
								) }
							/>
							<div className="absolute inset-0 bg-[#4F4E7C1A]" />
							<div className="absolute inset-8 flex flex-col justify-between items-start">
								<div className="my-2 w-12 h-12 flex items-center justify-center bg-[#14133880] bg-opacity-90 group-hover:bg-brand-primary-600 group-hover:bg-opacity-100 transition-all duration-300 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110">
									<Play
										size={ 24 }
										className="fill-white"
										strokeWidth={ 0 }
									/>
								</div>
								{ screen?.banner?.title && (
									<Text
										className="mt-4 hidden sm:block w-[52%] text-3xl uppercase"
										as="h3"
										color="secondary"
										weight={ 700 }
									>
										{ screen?.banner?.title }
									</Text>
								) }
								<Logo className="h-10 opacity-90" />
							</div>
						</div>
					) }
				</div>
			) }

			<ul className="divide-y divide-gray-200 list-none pl-0 space-y-2">
				{ screen.items.map( ( item, index ) => (
					<li
						key={ index }
						className="flex items-start space-x-2 text-field-label text-sm font-medium"
					>
						<Check className="mt-0.5 size-4 text-brand-primary-600" />
						<span>{ item }</span>
					</li>
				) ) }
			</ul>

			<div className="flex justify-between items-center pt-2 gap-4">
				<Button
					className="px-4 w-max"
					icon={ <ChevronRight /> }
					iconPosition="right"
					onClick={ navigateToNextScreen }
				>
					{ screen?.nextLabel ||
						__( 'Let’s Get Started', 'one-onboarding' ) }
				</Button>
			</div>
		</Layout>
	);
};

export default Welcome;
