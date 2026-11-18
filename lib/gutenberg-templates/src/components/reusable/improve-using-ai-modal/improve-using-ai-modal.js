import { useModal } from '@ebay/nice-modal-react';

import { useCallback, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import withModals from '../../../hoc/withModals';
import { ExclamationTriangleColorfulIcon } from '../../ui/icons';
import Button from '../button/button';
import LoadingSkeleton from '../loading-skeleton/loading-skeleton';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import Modal from '../modal/modal';
import ModalTitle from '../modal/modal-title';

const improveUsingAiModalName = 'IMPROVE_USING_AI_MODAL';

const ImproveUsingAiModal = ( { handleFetchSuggestion } ) => {
	const modalRef = useModal( improveUsingAiModalName );
	const [ description, setDescription ] = useState( null );
	const [ loading, setLoading ] = useState( false );

	const aiActionLabel = useCallback( () => {
		if ( loading ) {
			return <LoadingSpinner />;
		} else if ( description ) {
			return __( 'Use this', 'ai-builder' );
		}
		return __( 'Improve Using AI', 'ai-builder' );
	}, [ loading, description ] );

	const handleClose = () => {
		modalRef.resolve( '' );
		modalRef.hide();
		modalRef.remove();
	};

	return (
		<Modal
			open={ modalRef.visible }
			setOpen={ handleClose }
			onFullyClose={ modalRef.remove }
			width={ 480 }
			className={ '!p-6 !w-[30rem]' }
		>
			<ModalTitle>
				<span className="flex items-center space-x-1 gap-2">
					<ExclamationTriangleColorfulIcon className="w-6 h-6 " />
					<div className="font-semibold text-lg text-black">
						{ __( 'Add More Business Details', 'ai-builder' ) }
					</div>
				</span>
			</ModalTitle>
			<div className="text-app-text !mt-5 text-base !opacity-80">
				{ __(
					'The business details provided are not enough to create the website content. Please describe your business with more details, or use AI to write it for you.',
					'ai-builder'
				) }
			</div>
			{ description && (
				<div className="w-full mb-2">
					<p className="text-base leading-6 font-semibold p-2 mb-0">
						{ __(
							'A good business description is:',
							'ai-builder'
						) }
					</p>
					<div className="bg-[#F6FAFE] p-4 rounded-lg shadow-sm">
						<p className="text-sm leading-5 my-0">
							{ description }
						</p>
					</div>
				</div>
			) }
			{ loading && (
				<div className="w-full mb-2">
					<LoadingSkeleton className="h-20" />
				</div>
			) }

			<div className="flex flex-col pt-2 !mt-5 gap-y-5">
				<div className="flex gap-4 items-center space-x-3">
					<Button
						className="w-full h-10 !text-sm bg-accent-st hover:bg-accent-st/90 border border-accent-st disabled:bg-accent-st/90"
						variant="primary"
						disabled={ loading }
						onClick={ async () => {
							if ( ! loading && description ) {
								// Save the description
								modalRef.resolve( description );
								modalRef.hide();
								setDescription( null );
								return;
							}

							setLoading( true );
							const improvedDescription =
								await handleFetchSuggestion();
							setDescription( improvedDescription );
							setLoading( false );
						} }
					>
						{ aiActionLabel() }
					</Button>
					<Button
						className="w-full h-10 !text-sm border-gray-200 text-black"
						variant="white"
						onClick={ handleClose }
					>
						{ description
							? __( 'Close', 'ai-builder' )
							: __( "I'll Write by Myself", 'ai-builder' ) }
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default withModals( ImproveUsingAiModal, improveUsingAiModalName );
