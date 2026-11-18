import { createPortal } from '@wordpress/element';

const ModalRoot = () => {
	return createPortal(
		<div id="headlessui-portal-root" className="gt-library-styles">
			<div />
		</div>,
		document.body
	);
};

export default ModalRoot;
