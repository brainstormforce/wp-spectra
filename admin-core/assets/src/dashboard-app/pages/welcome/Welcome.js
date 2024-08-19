import { __ } from '@wordpress/i18n';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
	// Created Localized variable to hide and unhide admin video
	const isAdminVideoVisible = uag_react.spectra_admin_video;

	const query = new URLSearchParams( useLocation()?.search );

	const allowAutoPlay = '1' === query.get( 'spectra-activation-redirect' ) ? 1 : 0;

	const onCreateNewPageClick = () => {
		window.open( uag_react.wp_pages_url, '_blank' );
	};

	const onReadFullGuideClick = () => {
		window.open( 'https://wpspectra.com/', '_blank' );
	};

	const onUpgradeNowClick = () => {
		window.open( 'https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=dashboard-widget', '_blank' );
	};

	
	const onFreeVsProClick = () => {
		window.open( 'admin.php?page=spectra&path=free-vs-pro', '_blank' );
	};

	const renderchecks = () => (
		<svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
			<g clipPath="url(#clip0_6404_1763)">
				<path d="M12.9955 5.64817L7.93251 12.4574L4.99665 10.2744" stroke="#5A03EF" strokeWidth="1.5" />
			</g>
			<defs>
				<clipPath id="clip0_6404_1763">
					<rect width="18" height="18" rx="9" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);

	return (
		<main className="py-[2.43rem]">
			<div className="max-w-3xl mx-auto px-6 lg:max-w-7xl">
				<h1 className="sr-only">Page title</h1>
				{ /* Main 3 column grid */ }
				<div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-5 xl:gap-10">
					{ /* Left column */ }
					<div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
						<section aria-labelledby="section-1-title h-full">
							<h2 className="sr-only" id="section-1-title">
								Section title
							</h2>
							<div className="rounded-md overflow-hidden flex flex-col justify-top h-full">
								<div className="p-12 pt-[2.2rem] bg-white shadow-sm">
									<h2 className="text-slate-800 text-[1.8rem] leading-[2.4rem] pb-3 font-medium text-left">
										{ __( 'Welcome to Spectra!', 'ultimate-addons-for-gutenberg' ) }
									</h2>
									<p className="text-slate-500 pb-7">
										{ __(
											'We designed Spectra to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Spectra!',
											'ultimate-addons-for-gutenberg'
										) }
									</p>
									<div className="mr-[80px] spectra-video-container">
										{ /* Added rel=0 query paramter at the end to disable YouTube recommendations */ }
										{ /* Added privacy=1 to make video GDPR compliant */ }
										{ isAdminVideoVisible && (
											<iframe
												className="spectra-video"
												src={ `https://www.youtube-nocookie.com/embed/GLNzTxArR6Y?showinfo=0&autoplay=${ allowAutoPlay }&mute=${ allowAutoPlay }&rel=0&privacy=1` }
												allow="autoplay"
												title="YouTube video player"
												frameBorder="0"
												allowFullScreen
											></iframe>
										) }
									</div>
									<span className="relative z-0 inline-flex pt-6 justify-start w-full">
										<button
											type="button"
											className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra focus-visible:bg-spectra-hover hover:bg-spectra-hover focus:outline-none mr-4"
											onClick={ onCreateNewPageClick }
										>
											{ __( 'Create New Page', 'ultimate-addons-for-gutenberg' ) }
										</button>
										<button
											type="button"
											className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium border-spectra text-spectra rounded-md text-slate-500 bg-white focus-visible:bg-slate-50 hover:bg-slate-50 focus:outline-none"
											onClick={ onReadFullGuideClick }
										>
											{ __( 'Read Full Guide', 'ultimate-addons-for-gutenberg' ) }
										</button>
									</span>
								</div>
							</div>
						</section>
					</div>

					{ /* Right column */ }
					<div className="space-y-4 flex h-full w-fit flex-col">
						{ 'not-installed' === uag_react.pro_plugin_status && (
						<section aria-labelledby="section-2-title">
							<h2 className="sr-only" id="section-2-title">
								Section title
							</h2>
							<div className="box-border border border-slate-400 border-spectra rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
							<div className="px-8 py-8">
										<h3 className="text-slate-800 text-xl font-medium pb-2 whitespace-nowrap font-semibold">{__( 'Design Without Limits with Spectra Pro!', 'ultimate-addons-for-gutenberg' )}</h3>
										<p className="text-slate-500 text-sm pb-2 pr-2 leading-5">{__( 'Experience design freedom with Spectra Pro. Utilize advanced blocks, extensions, and premium features to create a websites that stands out!', 'ultimate-addons-for-gutenberg' )}</p>
								<ul className="list-disc mt-4 text-gray-700 mb-6">
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' )}</span></li>
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Advanced Popup Builder', 'ultimate-addons-for-gutenberg' )}</span></li>
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Loop Builder', 'ultimate-addons-for-gutenberg' )}</span></li>
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Instagram Feed Block', 'ultimate-addons-for-gutenberg' )}</span></li>
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Global Block Styles', 'ultimate-addons-for-gutenberg' )}</span></li>
											<li className="flex items-center mb-3">{renderchecks()}<span className="ml-2 leading-[18px]">{__( 'Advanced Animations', 'ultimate-addons-for-gutenberg' )}</span></li>
								</ul>
								<div className="flex justify-center">
											<button type='button' onClick={onUpgradeNowClick} className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra focus-visible:bg-spectra-hover hover:bg-spectra-hover focus:outline-none mr-4">{__( 'Upgrade Now', 'ultimate-addons-for-gutenberg' )}</button>
											<button type='button' onClick={onFreeVsProClick} className="w-full px-4 py-2 border border-slate-400 shadow-sm text-sm font-medium rounded-md border-spectra text-spectra bg-white focus-visible:bg-slate-50 hover:bg-slate-50 focus:outline-none">{__( 'Free vs Pro', 'ultimate-addons-for-gutenberg' )}</button>
								</div>
							</div>
							</div>
						</section>
						)}
						<section aria-labelledby="section-2-title">
							<h2 className="sr-only" id="section-2-title">
								Section title
							</h2>
							<div className="box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
								<div className="p-8 pr-10">
									<h3 className="text-slate-800 text-xl font-medium pb-2">
										{ __( 'Get 5-star Support', 'ultimate-addons-for-gutenberg' ) }
									</h3>
									<p className="text-slate-500 text-sm pb-2 pr-2">
										{ __(
											'Need some help? Our awesome support team is here to help you with any question you have.',
											'ultimate-addons-for-gutenberg'
										) }
									</p>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
										href="https://wpspectra.com/support/"
										target="_blank"
										rel="noreferrer"
									>
										{ __( 'Get Support', 'ultimate-addons-for-gutenberg' ) }
									</a>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
										href="https://wpspectra.com/support/"
										target="_blank"
										rel="noreferrer"
									>
										{ ' → ' }
									</a>
								</div>
							</div>
						</section>
						<section aria-labelledby="section-2-title">
							<h2 className="sr-only" id="section-2-title">
								Section title
							</h2>
							<div className="box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
								<div className="p-8 pr-10">
									<h3 className="text-slate-800 text-xl font-medium pb-2">
										{ __( 'Join the Community', 'ultimate-addons-for-gutenberg' ) }
									</h3>
									<p className="text-slate-500 text-sm pb-2 pr-2">
										{ __(
											'Got a question about the plugin, want to share your awesome project or just say hi? Join our wonderful community!',
											'ultimate-addons-for-gutenberg'
										) }
									</p>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
										href="https://www.facebook.com/groups/wpspectra"
										target="_blank"
										rel="noreferrer"
									>
										{ __( 'Join Now', 'ultimate-addons-for-gutenberg' ) }
									</a>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
										href="https://www.facebook.com/groups/wpspectra"
										target="_blank"
										rel="noreferrer"
									>
										{ ' → ' }
									</a>
								</div>
							</div>
						</section>
						{/* { 'not-installed' !== uag_react.pro_plugin_status && (
						<section>
							<div className="box-border rounded-md bg-white shadow-sm overflow-hidden transition hover:shadow-hover">
								<div className="p-8 pr-10">
									<h3 className="text-slate-800 text-xl font-medium pb-2">
										{ __( 'Rate Us', 'ultimate-addons-for-gutenberg' ) }
									</h3>
									<p className="text-slate-500 text-sm pb-2.5 pr-12 flex items-center">
										<span className="text-xl text-slate-800 flex mr-2">
											{ [ 1, 2, 3, 4, 5 ].map( ( item, key ) => (
												<svg
													key={ key }
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<defs>
														<linearGradient
															id={ `half-color-gradient-${ key }` }
															x1="0%"
															x2="100%"
															y1="0%"
															y2="0%"
														>
															<stop
																offset="50%"
																style={ {
																	stopColor: '#1e293b', //slate-800
																	stopOpacity: 1,
																} }
															/>
															<stop
																offset="50%"
																style={ { stopColor: '#64748b', stopOpacity: 1 } }
															/>
														</linearGradient>
													</defs>
													<g clipPath="url(#clip0_2358_55923)">
														<path
															d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z"
															fill={
																key === 4
																	? `url(#half-color-gradient-${ key })`
																	: '#334155'
															}
														/>
													</g>
													<defs>
														<clipPath id="clip0_2358_55923">
															<rect width="20" height="20" fill="white" />
														</clipPath>
													</defs>
												</svg>
											) ) }
										</span>

										<span className="text-xs leading-4 align-text-bottom text-slate-400">
											{ __( 'Based on 1k+ reviews', 'ultimate-addons-for-gutenberg' ) }
										</span>
									</p>
									<p className="text-slate-500 text-sm pb-5">
										{ __(
											'We love to hear from you, we would appreciate every single review.',
											'ultimate-addons-for-gutenberg'
										) }
									</p>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover underline"
										href="https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?rate=5#new-post"
										target="_blank"
										rel="noreferrer"
									>
										{ __( 'Submit a Review', 'ultimate-addons-for-gutenberg' ) }
									</a>
									<a
										className="text-base text-spectra focus:text-spectra focus-visible:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover no-underline"
										href="https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?rate=5#new-post"
										target="_blank"
										rel="noreferrer"
									>
										{ ' → ' }
									</a>
								</div>
							</div>
						</section>
						)} */}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Welcome;
