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
			className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-gray-200"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none">
				<rect width="24" height="24" fill="none"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M12.5773 0.0698877C12.1397 0.204389 11.5204 0.850874 11.3953 1.30378C11.3386 1.509 11.2919 2.1682 11.2916 2.76862L11.2911 3.86018L10.5852 3.97893C7.19355 4.54961 4.61653 7.14953 4.09175 10.5302C4.00744 11.0735 3.98583 15.4401 4.00832 27.4033C4.04142 45.0199 3.9977 43.6386 4.57145 45.1792C5.21695 46.9126 7.10963 48.814 8.8369 49.4641C10.357 50.0362 9.24757 49.9995 25.0189 49.9995C38.2185 49.9995 39.5277 49.9853 40.061 49.8364C41.0919 49.5485 41.7396 49.2661 42.4665 48.7875C44.6497 47.3504 45.9813 44.9836 45.9948 42.5164C45.9993 41.7033 45.9711 41.5404 45.769 41.2137C45.6419 41.0083 45.3602 40.7222 45.1432 40.5779C44.8144 40.3593 44.6405 40.3154 44.1015 40.3154C43.5625 40.3154 43.3885 40.3593 43.0597 40.5779C42.4677 40.9715 42.2597 41.385 42.1499 42.387C41.9728 44.0018 41.2061 45.1246 39.8351 45.7772L39.1848 46.0868H25.0189H10.8529L10.2026 45.7772C9.29741 45.3464 8.7337 44.7918 8.29577 43.9015L7.93213 43.1624V26.9682V10.7741L8.24027 10.1207C8.40968 9.7614 8.72727 9.2723 8.94585 9.03402C9.38562 8.5547 10.2557 8.04516 10.872 7.90607L11.2722 7.81568L11.306 9.05035C11.3359 10.1457 11.3658 10.3272 11.5708 10.6584C11.6978 10.8638 11.9795 11.1499 12.1965 11.2942C12.5253 11.5128 12.6993 11.5567 13.2383 11.5567C13.7773 11.5567 13.9512 11.5128 14.28 11.2942C14.497 11.1499 14.7787 10.8638 14.9058 10.6584C15.1111 10.3266 15.1406 10.1461 15.1709 9.03783L15.205 7.79064H19.0799H22.9547L22.9889 9.04517C23.0206 10.213 23.041 10.327 23.2842 10.6961C23.6878 11.3086 24.1618 11.5567 24.9286 11.5567C25.4599 11.5567 25.6356 11.5121 25.9633 11.2942C26.1803 11.1499 26.4619 10.8638 26.589 10.6584C26.7943 10.3266 26.8238 10.1461 26.8541 9.03783L26.8883 7.79064H30.7631H34.638L34.6721 9.04517C34.7039 10.213 34.7242 10.327 34.9674 10.6961C35.3697 11.3065 35.8456 11.5567 36.6047 11.5567C37.3639 11.5567 37.8397 11.3065 38.242 10.6961C38.4852 10.3269 38.5056 10.2131 38.5374 9.04253L38.5716 7.78546L38.9269 7.84415C39.1223 7.87643 39.5936 8.05299 39.9743 8.2365C40.8139 8.64137 41.3718 9.21782 41.7974 10.1207L42.1056 10.7741L42.1543 21.9327L42.2029 38.0912L42.4642 38.4877C42.8677 39.1004 43.3417 39.3485 44.1086 39.3485C44.6399 39.3485 44.8156 39.3039 45.1432 39.086C45.3602 38.9418 45.6419 38.6556 45.769 38.4502L46 38.0768V21.7788C46 11.5307 45.9849 10.4261 45.8376 9.89375C45.5511 8.85804 45.27 8.20725 44.7937 7.47693C43.5554 5.57807 41.593 4.31181 39.3553 3.96758L38.5703 3.84687L38.5368 2.55889C38.5054 1.35406 38.4864 1.24538 38.242 0.874644C37.8397 0.264156 37.3639 0.014033 36.6047 0.014033C35.8456 0.014033 35.3697 0.264156 34.9674 0.874644C34.7227 1.24606 34.7041 1.35298 34.6723 2.57444L34.6384 3.87788H30.7631H26.8878L26.8539 2.58178C26.8235 1.42145 26.7958 1.24655 26.589 0.912305C26.4619 0.706885 26.1803 0.420764 25.9633 0.276481C25.6356 0.0586385 25.4599 0.014033 24.9286 0.014033C24.1618 0.014033 23.6878 0.262102 23.2842 0.874644C23.0394 1.24606 23.0208 1.35298 22.9891 2.57444L22.9552 3.87788H19.0799H15.2046L15.1707 2.57444C15.1389 1.35298 15.1203 1.24606 14.8756 0.874644C14.732 0.656704 14.4589 0.381735 14.2688 0.263765C13.8711 0.016772 13.0544 -0.0768408 12.5773 0.0698877ZM13.1102 18.8451C12.3676 19.0711 11.7779 19.9002 11.7779 20.7182C11.7779 21.3096 12.1244 21.9479 12.6456 22.3168L13.0603 22.6102H25.01H36.9597L37.3544 22.3478C37.9643 21.9423 38.2112 21.4661 38.2112 20.6956C38.2112 20.1618 38.1668 19.9852 37.95 19.6561C37.8064 19.438 37.5216 19.1551 37.3171 19.0274L36.9455 18.7953L25.1649 18.7785C18.6856 18.7692 13.2609 18.7992 13.1102 18.8451ZM13.1102 26.6706C12.3676 26.8966 11.7779 27.7258 11.7779 28.5437C11.7779 29.1351 12.1244 29.7734 12.6456 30.1423L13.0603 30.4357H25.01H36.9597L37.3544 30.1733C37.9643 29.7678 38.2112 29.2916 38.2112 28.5211C38.2112 27.9873 38.1668 27.8108 37.95 27.4816C37.8064 27.2636 37.5216 26.9806 37.3171 26.8529L36.9455 26.6208L25.1649 26.604C18.6856 26.5947 13.2609 26.6247 13.1102 26.6706ZM13.1102 34.4958C12.3671 34.7228 11.7779 35.5514 11.7779 36.3692C11.7779 36.9606 12.1244 37.5989 12.6456 37.9678L13.0603 38.2612H21.5953H30.1303L30.5019 38.0291C30.7064 37.9015 30.9911 37.6185 31.1347 37.4004C31.3523 37.0701 31.396 36.8953 31.396 36.3538C31.396 35.8123 31.3523 35.6374 31.1347 35.3071C30.9911 35.0891 30.7064 34.8061 30.5019 34.6784L30.1303 34.4463L21.7573 34.4292C17.1521 34.4198 13.2609 34.4497 13.1102 34.4958Z" fill="#2D2D33"/>
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
							<Dialog.Title className="text-lg font-medium text-gray-900"> { __( 'What\'s New?', 'ultimate-addons-for-gutenberg' ) } </Dialog.Title>
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
