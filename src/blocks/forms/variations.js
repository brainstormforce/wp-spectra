/**
 * Internal dependencies
 */
import variationIcons from './variation-icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'simple-contact-form',
		label: __( 'Simple Contact Form' ),
		icon: variationIcons.simple,
		attributes: {
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/forms-name', { name:'First Name',placeholder:'John',nameRequired:true } ],
			[ 'uagb/forms-name', { name:'Last Name',placeholder:'Doe',nameRequired:true } ],
			[ 'uagb/forms-email',{ emailRequired:true } ],
			[ 'uagb/forms-textarea',{ textareaRequired:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'newsletter-form',
		label: __( 'Newsletter Form' ),
		icon: variationIcons.newsletter,
		attributes: {
		},
		innerBlocks: [
			[ 'uagb/forms-name', { nameRequired:true } ],
			[ 'uagb/forms-email',{ emailRequired:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'suggestion-form',
		label: __( 'Suggestion form' ),
		icon: variationIcons.suggestion,
		attributes: {
		}, 
		innerBlocks: [
			[ 'uagb/forms-name', { nameRequired:true } ],
			[ 'uagb/forms-email',{ emailRequired:true } ],
			[ 'uagb/forms-radio',{ radioRequired:true } ],
			[ 'uagb/forms-name', { name:'Subject',placeholder:'Enter your subject',nameRequired:true } ],
			[ 'uagb/forms-textarea',{ textareaRequired:true } ],
		],
		scope: [ 'block' ],
	},	
];

export default variations;