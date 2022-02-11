/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

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
                <svg className={classNames( open ? 'text-gray-600' : 'text-gray-400', ' h-11 w-11 group-hover:text-gray-500' )} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.6665 10.0001C1.6665 5.40008 5.39984 1.66675 9.99984 1.66675C14.5998 1.66675 18.3332 5.40008 18.3332 10.0001C18.3332 14.6001 14.5998 18.3334 9.99984 18.3334C5.39984 18.3334 1.6665 14.6001 1.6665 10.0001ZM10.8332 13.3334V15.0001H9.1665V13.3334H10.8332ZM9.99984 16.6667C6.32484 16.6667 3.33317 13.6751 3.33317 10.0001C3.33317 6.32508 6.32484 3.33341 9.99984 3.33341C13.6748 3.33341 16.6665 6.32508 16.6665 10.0001C16.6665 13.6751 13.6748 16.6667 9.99984 16.6667ZM6.6665 8.33341C6.6665 6.49175 8.15817 5.00008 9.99984 5.00008C11.8415 5.00008 13.3332 6.49175 13.3332 8.33341C13.3332 9.40251 12.6748 9.97785 12.0338 10.538C11.4257 11.0695 10.8332 11.5873 10.8332 12.5001H9.1665C9.1665 10.9824 9.9516 10.3806 10.6419 9.85148C11.1834 9.43642 11.6665 9.06609 11.6665 8.33341C11.6665 7.41675 10.9165 6.66675 9.99984 6.66675C9.08317 6.66675 8.33317 7.41675 8.33317 8.33341H6.6665Z" fill="currentColor"></path></svg>
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
                <Popover.Panel className="absolute z-10 left-[-4rem] transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
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
                            <p className="mt-3 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
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
