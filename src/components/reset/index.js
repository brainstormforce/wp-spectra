import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';
import { select } from '@wordpress/data';
import { Button, Tooltip, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const UAGReset = ( props ) => {

	const {
		onReset,
		attributeNames,
		setAttributes
	} = props;

	const { getSelectedBlock } = select( 'core/block-editor' );

	const resetHandler = () => {

		const selectedBlockName = getSelectedBlock()?.name.replace( 'uagb/', '' );
		let defaultValues = false;
		if ( attributeNames ) {
			attributeNames.map( ( attributeName ) => {
				if ( attributeName ) {
					const blockDefaultAttributeValue = blocksAttributes[selectedBlockName][attributeName]?.default;
					if ( setAttributes ) {
						setAttributes( { [ attributeName ]: blockDefaultAttributeValue } )
					}
					defaultValues = {
						...defaultValues,
						[attributeName] : blockDefaultAttributeValue,
					}
				}

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
		>
			<Dashicon icon="image-rotate" />
		</Button>
		</Tooltip>
	);
}

export default UAGReset;
