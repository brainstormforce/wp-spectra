/**
 * BLOCK: Forms - Block
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import variations from './variations';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

if( attributes.reCaptchaEnable ) {

	uagb_blocks_info.enable_recaptcha = attributes.reCaptchaEnable;
	uagb_blocks_info.recaptcha_type = attributes.reCaptchaType;

	if( attributes.reCaptchaType == 'v2' ) {

		uagb_blocks_info.site_key_v2 = attributes.reCaptchaSiteKeyV2;
		uagb_blocks_info.secret_key_v2 = attributes.reCaptchaSecretKeyV2;

	} else {

		uagb_blocks_info.site_key_v3 = attributes.reCaptchaSiteKeyV3;
		uagb_blocks_info.secret_key_v3 = attributes.reCaptchaSecretKeyV3;


	}
}

registerBlockType( 'uagb/forms', {
	title: __( 'Form', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allow you to create interactive contact form, newsletter, suggestion, etc easily.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.forms,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'forms', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	attributes,
	variations,
	edit,
	supports: {
		anchor: true,
	},
	deprecated,
	save,
} );
