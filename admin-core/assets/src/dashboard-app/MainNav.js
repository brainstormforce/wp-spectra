import { Disclosure } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import ChangeLogPopup from './ChangeLogPopup';

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

  return (
    <Disclosure as="nav" className="bg-white shadow">
          <div className="max-w-3xl mx-auto px-6 lg:max-w-7xl">
            <div className="relative flex justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <a href="https://ultimategutenberg.com" target='_blank' rel="noreferrer" className="flex-shrink-0 flex items-center">
                  <img
                    className="lg:block h-[2.6rem] w-auto"
                    src={ uag_react.logo_url }
                    alt="Workflow"
                  />
                </a>
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
                                    ? ' border-wpcolor hover:text-wphovercolor text-gray-900 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
                                    : 'border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
                            }` }
                        >
                            { menu.name }
                        </Link>
                    ) ) }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ChangeLogPopup/>
              </div>
            </div>
          </div>
    </Disclosure>
  )
}
