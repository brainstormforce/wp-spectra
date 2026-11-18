import NiceModal from '@ebay/nice-modal-react';

// Hoc to create a modal component and register it with NiceModal
const withModals = ( Component, modalName ) => {
	const WrappedComponent = NiceModal.create( Component );

	NiceModal.register( modalName, WrappedComponent );

	const show = ( options ) => {
		return NiceModal.show( modalName, options );
	};

	return {
		...WrappedComponent,
		show,
	};
};

export default withModals;
