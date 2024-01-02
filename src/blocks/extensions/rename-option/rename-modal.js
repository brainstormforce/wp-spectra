/**
 * WordPress dependencies
 */
import {
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Button,
	TextControl,
	Modal,
} from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { ENTER } from '@wordpress/keycodes';
import { uagbGetValue } from '@Utils/Helpers';
import { __ } from '@wordpress/i18n';

// TODO: Once Gutenberg merged the rename functionality code in WP then we need to remove entire rename-modal file.
const SpectraRenameModal = ( { closeModal, block, updateBlockAttributes } ) => {
	const [tmpName, setTmpName] = useState( uagbGetValue( block, ['attributes', 'metadata', 'name'], '' ) );

	const modifiedName = block.name
		.replace( /^uagb\//, '' )
		.replace( /-/g, ' ' )
		.replace( /\b\w/g, ( char ) => char.toUpperCase() );

	const dialogDescription = useInstanceId(
		SpectraRenameModal,
		`block-editor-rename-modal__description`
	);

	const handleSubmit = () => {
		updateBlockAttributes( block.clientId, { metadata: { ...block.attributes.metadata, name: tmpName } } );
		closeModal();
	};

	return (
		<Modal className={'spectra-rename-modal-wrap'} title={ __( 'Rename', 'ultimate-addons-for-gutenberg' ) } onRequestClose={closeModal} focusOnMount={false}>
			<p id={dialogDescription}>
				{__( 'Enter a custom name for this block.', 'ultimate-addons-for-gutenberg' )}
			</p>
			<form
				onSubmit={( e ) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<VStack spacing="3">
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__( 'Block name', 'ultimate-addons-for-gutenberg' )}
						hideLabelFromVision={true}
						value={tmpName}
						onFocus={( event ) => event.target.select()}
						onChange={( value ) => {
							setTmpName( value );
						}}
						onKeyDown={( event ) => {
							const { keyCode } = event;

							if ( keyCode === ENTER ) {
								updateBlockAttributes( block.clientId, { metadata: { ...block.attributes.metadata, name: tmpName } } );
								closeModal();
							}
						}}
						placeholder={__( `${modifiedName}`, 'ultimate-addons-for-gutenberg' )} // eslint-disable-line @wordpress/i18n-no-variables
					/>
					<HStack justify="right">
						<Button
							__next40pxDefaultSize
							variant="tertiary"
							onClick={() => {
								closeModal();
								setTmpName( '' );
							}}
						>
							{__( 'Cancel', 'ultimate-addons-for-gutenberg' )}
						</Button>
						<Button
							__next40pxDefaultSize
							variant="primary"
							type="submit"
						>
							{__( 'Save', 'ultimate-addons-for-gutenberg' )}
						</Button>
					</HStack>
				</VStack>
			</form>
		</Modal>
	);
};

export default SpectraRenameModal;
