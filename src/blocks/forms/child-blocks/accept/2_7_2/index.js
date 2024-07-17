
/**
 * BLOCK: Forms - Accept - Save Block
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	acceptRequired: {
		type: 'boolean',
		default: false,
	},
	acceptText: {
		type: 'string',
		default: __( 'I have read and agree to the Privacy Policy.', 'ultimate-addons-for-gutenberg' ),
	},
	showLink: {
		type: 'boolean',
		default: false,
	},
	linkLabel: {
		type: 'string',
		default: __( 'Privacy Policy', 'ultimate-addons-for-gutenberg' ),
	},
	link: {
		type: 'string',
		default: '#',
	},
	linkInNewTab: {
		type: 'boolean',
		default: true,
	},
};

const deprecated = {
    attributes,
    save: ( props ) => {
        const { attributes : { block_id, acceptRequired, acceptText, showLink, linkLabel, link, linkInNewTab } } = props;

        const isRequired = acceptRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';
        const target = linkInNewTab
            ? __( '_blank', 'ultimate-addons-for-gutenberg' )
            : __( '_self', 'ultimate-addons-for-gutenberg' );

        return (
            <div className={classnames( 'uagb-forms-accept-wrap', 'uagb-forms-field-set', `uagb-block-${block_id}` )}>
                {showLink && (
                    <div className="uagb-forms-accept-privacy-link">
                        <a href={link} target={target} rel="noopener noreferrer">
                            {linkLabel}
                        </a>
                    </div>
                )}
                <input
                    type="checkbox"
                    name={block_id}
                    required={acceptRequired}
                    value="Agree"
                    className="uagb-forms-checkbox"
                    id={`uagb-forms-accept-${block_id}`}
                />
                <label
                    name={block_id}
                    htmlFor={`uagb-forms-accept-${block_id}`}
                    className={`uagb-forms-accept-label ${isRequired}`}
                    id={block_id}
                >
                    {acceptText}
                </label>
                <br></br>
            </div>
        );
    }
}
export default deprecated;