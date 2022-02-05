import { Disclosure } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

export default function MainNav() {
  const menus = [
    {
        name: __( 'Welcome', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: '',
    },
    {
        name: __( 'Blocks', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: 'blocks',
    },
    {
        name: __( 'Settings', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: 'settings',
    },
  ];

  const query = new URLSearchParams( useLocation()?.search );
	const activePage = query.get( 'page' )
		? query.get( 'page' )
		: uag_react.home_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

  const onVisitWebsiteClick = () => {
		window.open(
			'https://ultimategutenberg.com',
			'_blank'
		);
	};

  return (
    <Disclosure as="nav" className="bg-white shadow">
          <div className="max-w-3xl mx-auto px-6 lg:max-w-7xl">
            <div className="relative flex justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="lg:block h-[2.4rem] w-auto"
                    src={ uag_react.logo_url }
                    alt="Workflow"
                  />
                </div>
                <div className="sm:ml-8 sm:flex sm:space-x-8">
                    { menus.map( ( menu , key ) => (
                        <Link
                            index = {key}
                            key={ `?page=${ menu.slug }&path=${ menu.path }` }
                            to={ {
                                pathname: 'options-general.php',
                                search: `?page=${ menu.slug }${
                                    '' !== menu.path ? '&path=' + menu.path : ''
                                }`,
                            } }
                            className={ `${
                                activePage === menu.slug && activePath === menu.path
                                    ? ' border-wpcolor text-gray-900 inline-flex items-center px-1 border-b-2 text-sm font-medium'
                                    : 'border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 border-b-2 text-sm font-medium'
                            }` }
                        >
                            { menu.name }
                        </Link>
                    ) ) }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none"
                    onClick={ onVisitWebsiteClick }
                >
                    {__( 'Visit Website', 'ultimate-addons-for-gutenberg' )}
                </button>
              </div>
            </div>
          </div>
    </Disclosure>
  )
}
