/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const InstagramUnlinkPopup = ( props ) => {
  
    const {
      openPopup,
      poppedUser,
      setOpenPopup,
      setPoppedUser,
    } = props;
    
    const dispatch = useDispatch();
    const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );
    const cancelButtonRef = useRef( null );

    const onCancelClick = () => {
        setOpenPopup( ! openPopup );
    };

    const onContinueClick = () => {
      let updatedUserMatrix = [] ;	
      instaLinkedAccounts.forEach( ( user ) => {
        if ( user.userName !== poppedUser ){
          updatedUserMatrix.push( user );
        }
      } );
      dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: updatedUserMatrix } );
      const action = 'uag_insta_linked_accounts';
      const nonce = uag_react.insta_linked_accounts_nonce;
      const formData = new window.FormData();
      formData.append( 'action', action );
      formData.append( 'security', nonce );
      formData.append( 'value', JSON.stringify( updatedUserMatrix ) );
      apiFetch( {
        url: uag_react.ajax_url,
        method: 'POST',
        body: formData,
      } ).then( () => {
      } );
      setOpenPopup( false );
      setPoppedUser( '' );
    };

    return (
        <Transition.Root show={ openPopup } as={ Fragment }>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={ cancelButtonRef } onClose={ setOpenPopup }>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={ Fragment }
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={ Fragment }
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-[0.2rem] px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      { __( 'Unlink User', 'ultimate-addons-for-gutenberg' ) }
                      </Dialog.Title>
                      <p className="mt-2 text-sm">
                      {
                        // eslint-disable-next-line @wordpress/i18n-no-variables
                        __( `Are you sure you wish to unlink`, 'ultimate-addons-for-gutenberg' )
                      }
                      <span className='font-bold'>{ ` @${ poppedUser }` }</span>
                      {
                        // eslint-disable-next-line @wordpress/i18n-no-variables
                        __( `?`, 'ultimate-addons-for-gutenberg' )
                      }
                      </p>
                      <p className="mt-2 text-sm text-red-600">
                      <span className='font-bold'>
                        { __( `Note: `, 'ultimate-addons-for-gutenberg' ) }
                      </span>
                      {
                        // eslint-disable-next-line @wordpress/i18n-no-variables
                        __( `You will not be able to view this account\'s media after unlinking.`, 'ultimate-addons-for-gutenberg' )
                      }
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row ml-[3.45rem]">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-[0.2rem] border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:mr-3 sm:w-auto sm:text-sm"
                      onClick={ onContinueClick }
                    >
                      { __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-[0.2rem] border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={ onCancelClick }
                      ref={ cancelButtonRef }
                    >
                      { __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    )
};

export default InstagramUnlinkPopup;
