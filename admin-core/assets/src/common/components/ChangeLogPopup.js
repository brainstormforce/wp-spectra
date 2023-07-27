/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { __ } from '@wordpress/i18n';

const ChangeLogPopup = () =>{

const dynamicUAGChangelogRSSFeed = uag_react.global_data.changelog_data;
const [open, setOpen] = useState( false )

return (
	<>
		<button
			onClick={() => setOpen( true )}
			title = { __( 'What\'s New?', 'ultimate-addons-for-gutenberg' ) }
			className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border border-slate-200"
		>
			{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none"> */}
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z"
					stroke="#475569"
					strokeWidth="1.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
				<div className="absolute inset-0 overflow-hidden">
				<Dialog.Overlay className="absolute inset-0" />

				<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:mt-[2rem]">
					<Transition.Child
					as={Fragment}
					enter="transform transition ease-in-out duration-150 sm:duration-150"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-300 sm:duration-300"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
					>
					<div className="w-screen max-w-md shadow-overlay-left">
						<div className="h-full flex flex-col bg-white shadow-xl">
							<div className="px-4 sm:px-6 h-16 shadow flex items-center justify-between z-50">
								<Dialog.Title className="text-lg font-medium text-gray-900"> { __( 'What\'s New?', 'ultimate-addons-for-gutenberg' ) } </Dialog.Title>
								<div className="flex items-center">
									<button
									type="button"
									className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
									onClick={() => setOpen( false )}
									>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
							</div>
							<div className="relative flex-1 overflow-y-auto">
								<div className="relative grid bg-white divide-y divide-gray-200">
									{dynamicUAGChangelogRSSFeed.map( ( item, index ) => {
										const title = dynamicUAGChangelogRSSFeed[index].title;
										const description = dynamicUAGChangelogRSSFeed[index].description;
										const link = 'https://wpspectra.com/changelog/';
										const pubDate = dynamicUAGChangelogRSSFeed[index].date;

										return (
											<a
												key={title}
												href={link}
												className="px-6 py-5 block rounded-[0.2rem] transition ease-in-out duration-150"
												target={'_blank'}
												rel={'noreferrer noopener'}
											>
												<p className="text-sm mb-1 font-medium text-slate-800" dangerouslySetInnerHTML={{__html: title}}></p>
												<p className="text-xs text-slate-500" dangerouslySetInnerHTML={{__html: pubDate}}></p>
												<p className="mt-3 spectra-changelog-description" dangerouslySetInnerHTML={{__html: description}}></p>
											</a>
										);
									} )}
								</div>
							</div>
						</div>
					</div>
					</Transition.Child>
				</div>
				</div>
			</Dialog>
		</Transition.Root>
	</>
	)
};

export default ChangeLogPopup;
