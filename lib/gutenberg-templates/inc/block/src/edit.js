import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';
import './editor.scss';
import EventEmitter from '.././../../src/utils/event-emitter';

const Edit = ( { onReplace } ) => {
	const { blockProps } = useBlockProps();

	const handleClickTemplateKits = () => {
		// TODO: Add logic to open modal
		const templateKitButton = document.querySelector( '#ast-block-templates-button' );
		onReplace( [] );
		if ( ! templateKitButton ) {
			return;
		}
		templateKitButton.click();
	};

	const handleClickBuildUsingAI = () => {
		EventEmitter.emit( 'toggle-onboarding-page-ai' );
		onReplace( [] );
	};

	const handleClickClose = () => {
		onReplace( [] );
	};

	return (
		<div className="spectra-ai-block-layout block-wrapper border border-solid border-border-primary relative" { ...blockProps }>
			<div className="block-heading-wrapper">
				<h5 className="block-title">
					{ __( 'Spectra AI Block', 'ast-block-templates' ) }
				</h5>
				<p className="block-description">
					{ __( 'Eu lectus mauris vulputate et sem consequat ornare. Et consectetur sagittis faucibus eget.', 'ast-block-templates' ) }
				</p>
			</div>
			<div className="block-buttons">
				<button
					className="block-button button-primary prefix-icon"
					onClick={ handleClickBuildUsingAI }
				>
					<SparklesIcon className="button-icon" />
					<span>{ __( 'Build using AI', 'ast-block-templates' ) }</span>
				</button>
				<button
					className="block-button button-secondary"
					onClick={ handleClickTemplateKits }
				>
					<span>{ __( 'Template Kits', 'ast-block-templates' ) }</span>
				</button>
			</div>
			<button
				className="close-button"
				onClick={ handleClickClose }
			>
				<XMarkIcon className="close-button-icon" />
			</button>
		</div>
	);
};

export default Edit;
