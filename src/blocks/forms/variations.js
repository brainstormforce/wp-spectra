/**
 * Internal dependencies
 */
const {Dashicon} = wp.components

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
		icon:  <Dashicon icon="phone" />,
		title: __( 'Simple Contact Form' ),
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
		icon:  <Dashicon icon="buddicons-pm" />,
		title: __( 'Newsletter Form' ),
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
		label: __( 'Suggestion Form' ),
		icon:  <Dashicon icon="edit" />,
		title: __( 'Suggestion Form' ),
		attributes: {
		}, 
		innerBlocks: [
			[ 'uagb/forms-name', { nameRequired:true } ],
			[ 'uagb/forms-email',{ emailRequired:true } ],
			[ 'uagb/forms-radio',{ 
				radioRequired:true,
				radioName:'Some question with below listed option?',
				options:[ 
					{ "optiontitle": __( "Option Name 1" ),"optionvalue": __( "Option Value 1" ) },
					{ "optiontitle": __( "Option Name 2" ),"optionvalue": __( "Option Value 2" ) },
					{ "optiontitle": __( "Option Name 3" ),"optionvalue": __( "Option Value 3" ) },
					{ "optiontitle": __( "Option Name 4" ),"optionvalue": __( "Option Value 4" ) },

				] 
			} ],
			[ 'uagb/forms-name', { name:'Subject',placeholder:'Enter your subject',nameRequired:true } ],
			[ 'uagb/forms-textarea',{ textareaRequired:true } ],
		],
		scope: [ 'block' ],
	},	
];

export default variations;