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
			title = { __( 'Changelog', 'ultimate-addons-for-gutenberg' ) }
			className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-gray-200"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11 5.88218V19.2402C11 20.2121 10.2121 21 9.24018 21C8.49646 21 7.83302 20.5325 7.58288 19.8321L5.43647 13.6829M18 13C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7M5.43647 13.6829C4.0043 13.0741 3 11.6543 3 10C3 7.79086 4.79086 6 6.99999 6H8.83208C12.9327 6 16.4569 4.7659 18 3L18 17C16.4569 15.2341 12.9327 14 8.83208 14L6.99998 14C6.44518 14 5.91677 13.887 5.43647 13.6829Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
					<div className="w-screen max-w-md">
						<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
						<div className="px-4 sm:px-6 pb-4 border-b border-gray-200">
							<div className="flex items-start justify-between">
							<Dialog.Title className="text-lg font-medium text-gray-900"> { __( 'Changelog', 'ultimate-addons-for-gutenberg' ) } </Dialog.Title>
							<div className="h-7 flex items-center">
								<button
								type="button"
								className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
								onClick={() => setOpen( false )}
								>
								<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							</div>
						</div>
						<div className="mt-6 relative flex-1 px-4 sm:px-6">
							{/* Replace with your content */}
							<div className="relative grid bg-white divide-y divide-gray-200">
								{dynamicUAGChangelogRSSFeed.map( ( item, index ) => {
									const title = dynamicUAGChangelogRSSFeed[index].title;
									const description = dynamicUAGChangelogRSSFeed[index].description;
									const link = 'https://ultimategutenberg.com/changelog/';
									const pubDate = dynamicUAGChangelogRSSFeed[index].date;

									return (
										<a
											key={title}
											href={link}
											className="-m-3 p-3 block rounded-[0.2rem] transition ease-in-out duration-150 mb-1"
											target={'_blank'}
											rel={'noreferrer noopener'}
										>
										<p className="text-base font-medium text-gray-900" dangerouslySetInnerHTML={{__html: title}}></p>
										<p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: pubDate}}></p>
										<p className="mt-3 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
										</a>
									);
								} )}
							</div>
							{/* /End replace */}
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
