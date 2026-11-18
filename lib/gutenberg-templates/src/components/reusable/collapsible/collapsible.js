import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from '@wordpress/element';
import Collapsible from 'react-collapsible';

const Collapse = ( { trigger, children } ) => {
	const [ open, setOpen ] = useState( false );

	return (
		<div className="bg-white relative">
			<div className="absolute top-4 right-0 w-6 h-6 pointer-events-none ">
				{ open ? (
					<ChevronUpIcon className="text-app-body-text" />
				) : (
					<ChevronDownIcon className="text-app-body-text" />
				) }
			</div>
			<Collapsible
				trigger={ trigger }
				triggerClassName="block py-4 pr-8 text-[16px] font-semibold leading-[24px]"
				triggerOpenedClassName="block py-4 pr-8 text-[16px] font-semibold leading-[24px]"
				contentInnerClassName="pb-5"
				transitionTime={ 200 }
				transitionCloseTime={ 200 }
				onOpen={ () => setOpen( true ) }
				onClose={ () => setOpen( false ) }
			>
				{ children }
			</Collapsible>
		</div>
	);
};

export default Collapse;
