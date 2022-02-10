/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { __ } from '@wordpress/i18n';

function classNames( ...classes ) {
  return classes.filter( Boolean ).join( ' ' )
}

const ChangeLogPopup = () =>{

	const dynamicUAGChangelogRSSFeed = uag_react.global_data.changelog_data;

    return (
        <Popover className="relative">
          {( { open } ) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-[0.2rem] inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                )}
              >
                <span>{ __( 'Changelog', 'ultimate-addons-for-gutenberg' ) }</span>
                <ChevronDownIcon
                  className={classNames( open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500' )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-0 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-[0.2rem] shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-screen">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {dynamicUAGChangelogRSSFeed.map( ( item, index ) => {
                          const title = dynamicUAGChangelogRSSFeed[index].title;
                          const description = dynamicUAGChangelogRSSFeed[index].description;
                          const link = dynamicUAGChangelogRSSFeed[index].link;
                          const pubDate = dynamicUAGChangelogRSSFeed[index].date;

                        return (
                            <a
                            key={title}
                            href={link}
                            className="-m-3 p-3 block rounded-[0.2rem] hover:bg-gray-50 transition ease-in-out duration-150"
                            >
                            <p className="text-base font-medium text-gray-900" dangerouslySetInnerHTML={{__html: title}}></p>
                            <p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: pubDate}}></p>
                            <p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
                            </a>
                        );
                     } )}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )
};

export default ChangeLogPopup;
