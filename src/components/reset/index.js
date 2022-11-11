import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select } from '@wordpress/data';
import { Button, Tooltip, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

const UAGReset = ( props ) => {

	const {
		onReset,
		attributeNames,
		setAttributes
	} = props;

	const [ refreshPresets, toggleRefreshPresets ] = useState( false );

	const { getSelectedBlock } = select( 'core/block-editor' );

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )

	const getBlockResetValue = () => {
		const selectedBlockName = getSelectedBlock()?.name.split( '/' ).pop();
		let defaultValues = false;

		if ( attributeNames && 'undefined' !== typeof allBlocksAttributes[selectedBlockName] ) {
			attributeNames.map( ( attributeName ) => {

				if ( attributeName ) {
					const blockDefaultAttributeValue = ( 'undefined' !== typeof allBlocksAttributes[selectedBlockName][attributeName]?.default ) ? allBlocksAttributes[selectedBlockName][attributeName]?.default : '';
					defaultValues = {
						...defaultValues,
						[attributeName] : blockDefaultAttributeValue,
					}
				}

				return attributeName;
			} );
		}

		return defaultValues;
	}

	const getResetState = () => {
		const defaultValues = getBlockResetValue();
		const selectedBlockAttributes = getSelectedBlock()?.attributes;
		let resetDisableState = true;

		attributeNames.map( ( attributeName ) => {
			if ( selectedBlockAttributes?.[attributeName] && selectedBlockAttributes?.[attributeName] !== defaultValues?.[attributeName] ) {
				resetDisableState = false;
			}
			return attributeName;
		} );

		return resetDisableState;
	};

	const resetDisableState = getResetState();

	const resetHandler = () => {
		const defaultValues = getBlockResetValue();

		if ( attributeNames ) {
			attributeNames.map( ( attributeName ) => {
				if ( attributeName ) {
					if ( setAttributes ) {
						setAttributes( { [ attributeName ]: defaultValues?.[attributeName] } )
					}
				}
				toggleRefreshPresets( !refreshPresets );
				return attributeName;
			} );
		}

		if ( onReset ) {
			onReset( defaultValues );
		}
	};

	return (
		<Tooltip
			text={ __( 'Reset', 'ultimate-addons-for-gutenberg' )}
			key={ 'reset' }
		>
		<Button
			className="uagb-reset"
			isSecondary
			isSmall
			onClick={ ( e ) => {
				e.preventDefault();
				resetHandler();
			} }
			disabled = {resetDisableState}
		>
			<Dashicon icon="image-rotate" />
		</Button>
		</Tooltip>
	);
}

export default UAGReset;
