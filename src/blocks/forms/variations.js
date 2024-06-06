/**
 * WordPress dependencies
 */

import { __experimentalBlockVariationPicker as BlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
export const variations = [
	{
		name: 'simple-contact-form',
		label: __( 'Simple Contact Form', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.form1,
		title: __( 'Simple Contact Form', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		isDefault: true,
		innerBlocks: [
			[
				'uagb/forms-name',
				{
					name: __( 'First Name', 'ultimate-addons-for-gutenberg' ),
					placeholder: __( 'John', 'ultimate-addons-for-gutenberg' ),
					nameRequired: true,
					autocomplete: 'given-name',
				},
			],
			[
				'uagb/forms-name',
				{
					name: __( 'Last Name', 'ultimate-addons-for-gutenberg' ),
					placeholder: __( 'Doe', 'ultimate-addons-for-gutenberg' ),
					nameRequired: true,
					autocomplete: 'family-name',
				},
			],
			[ 'uagb/forms-email', { emailRequired: true } ],
			[ 'uagb/forms-textarea', { textareaRequired: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'newsletter-form',
		label: __( 'Newsletter Form', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.form2,
		title: __( 'Newsletter Form', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		innerBlocks: [
			[ 'uagb/forms-name', { nameRequired: true } ],
			[ 'uagb/forms-email', { emailRequired: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'suggestion-form',
		label: __( 'Suggestion Form', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.form3,
		title: __( 'Suggestion Form', 'ultimate-addons-for-gutenberg' ),
		attributes: {},
		innerBlocks: [
			[ 'uagb/forms-name', { nameRequired: true } ],
			[ 'uagb/forms-email', { emailRequired: true } ],
			[
				'uagb/forms-radio',
				{
					radioRequired: true,
					radioName: 'Some question with below listed option?',
					options: [
						{
							optiontitle: __( 'Option Name 1', 'ultimate-addons-for-gutenberg' ),
							optionvalue: __( 'Option Value 1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							optiontitle: __( 'Option Name 2', 'ultimate-addons-for-gutenberg' ),
							optionvalue: __( 'Option Value 2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							optiontitle: __( 'Option Name 3', 'ultimate-addons-for-gutenberg' ),
							optionvalue: __( 'Option Value 3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							optiontitle: __( 'Option Name 4', 'ultimate-addons-for-gutenberg' ),
							optionvalue: __( 'Option Value 4', 'ultimate-addons-for-gutenberg' ),
						},
					],
				},
			],
			[
				'uagb/forms-name',
				{
					name: __( 'Subject', 'ultimate-addons-for-gutenberg' ),
					placeholder: __( 'Enter your subject', 'ultimate-addons-for-gutenberg' ),
					nameRequired: true,
					autocomplete: 'off',
				},
			],
			[ 'uagb/forms-textarea', { textareaRequired: true } ],
		],
		scope: [ 'block' ],
	},
];

export const VariationPicker = ( props ) => {
	const { clientId, setAttributes, defaultVariation } = props;
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	return (
		<div { ...useBlockProps() } className="uagb-variation-picker uagb-variation-picker--fill">
			<BlockVariationPicker
				icon={ UAGB_Block_Icons.forms }
				label={ __( 'Forms', 'ultimate-addons-for-gutenberg' ) }
				instructions={
					__(
						'Select a form layout to start with.',
						'ultimate-addons-for-gutenberg'
					)
				}
				variations={ variations }
				onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
			/>
		</div>
	);
};