/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const ChangeLogPopup = () =>{

const dynamicUAGChangelogRSSFeed = uag_react.global_data.changelog_data;
const [open, setOpen] = useState( false )

return (
	<>
		<button
			onClick={() => setOpen( true )}
		>
			<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M25 46.875C19.1984 46.875 13.6344 44.5703 9.53204 40.468C5.42968 36.3656 3.125 30.8016 3.125 25C3.125 19.1984 5.42968 13.6344 9.53204 9.53204C13.6344 5.42968 19.1984 3.125 25 3.125C30.8016 3.125 36.3656 5.42968 40.468 9.53204C44.5703 13.6344 46.875 19.1984 46.875 25C46.875 30.8016 44.5703 36.3656 40.468 40.468C36.3656 44.5703 30.8016 46.875 25 46.875ZM25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50Z" fill="black"/>
			<path d="M27.9063 20.5875L20.75 21.4844L20.4938 22.6719L21.9 22.9313C22.8188 23.15 23 23.4813 22.8 24.3969L20.4938 35.2344C19.8875 38.0375 20.8219 39.3563 23.0188 39.3563C24.7219 39.3563 26.7 38.5688 27.5969 37.4875L27.8719 36.1875C27.2469 36.7375 26.3344 36.9563 25.7281 36.9563C24.8688 36.9563 24.5563 36.3531 24.7781 35.2906L27.9063 20.5875ZM28.125 14.0625C28.125 14.8913 27.7958 15.6862 27.2097 16.2722C26.6237 16.8583 25.8288 17.1875 25 17.1875C24.1712 17.1875 23.3763 16.8583 22.7903 16.2722C22.2042 15.6862 21.875 14.8913 21.875 14.0625C21.875 13.2337 22.2042 12.4388 22.7903 11.8528C23.3763 11.2667 24.1712 10.9375 25 10.9375C25.8288 10.9375 26.6237 11.2667 27.2097 11.8528C27.7958 12.4388 28.125 13.2337 28.125 14.0625Z" fill="black"/>
		</svg>
		</button>
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
				<div className="absolute inset-0 overflow-hidden">
				<Dialog.Overlay className="absolute inset-0" />

				<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:mt-[2rem]">
					<Transition.Child
					as={Fragment}
					enter="transform transition ease-in-out duration-500 sm:duration-700"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-500 sm:duration-700"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
					>
					<div className="w-screen max-w-md">
						<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
						<div className="px-4 sm:px-6">
							<div className="flex items-start justify-between">
							<div className="h-7 flex items-center">
								<button
								type="button"
								className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
								onClick={() => setOpen( false )}
								>
								<span className="sr-only">Close panel</span>
								<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							</div>
						</div>
						<div className="mt-6 relative flex-1 px-4 sm:px-6">
							{/* Replace with your content */}
							<div className="relative grid bg-white">
								{dynamicUAGChangelogRSSFeed.map( ( item, index ) => {
									const title = dynamicUAGChangelogRSSFeed[index].title;
									const description = dynamicUAGChangelogRSSFeed[index].description;
									const link = dynamicUAGChangelogRSSFeed[index].link;
									const pubDate = dynamicUAGChangelogRSSFeed[index].date;

									return (
										<a
											key={title}
											href={link}
											className="-m-3 p-3 block rounded-[0.2rem] transition ease-in-out duration-150 mb-1"
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
