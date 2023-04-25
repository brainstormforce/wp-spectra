/**
 * BLOCK: How To Schema - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';
import attributesNewVer from './attributes';
import saveV2_4_1 from './v2.4.1/save';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	toggleRequired: {
		type: 'boolean',
		default: false,
	},
	name: {
		type: 'string',
		default: __( 'Name', 'ultimate-addons-for-gutenberg' ),
	},
	toggleStatus: {
		type: 'boolean',
		default: false,
	},
	layout: {
		type: 'string',
		default: 'round',
	},
	trueValue: {
		type: 'string',
		default: 'on',
	},
	falseValue: {
		type: 'string',
		default: 'off',
	},
};

const deprecated = [
	{
		attributes,
		save: function ( props ) {
			const { attributes } = props;

			const { block_id, toggleRequired, name, toggleStatus, layout, trueValue, falseValue } = attributes;

			const isRequired = toggleRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

			return (
				<div
					className={ classnames(
						'uagb-forms-toggle-wrap',
						'uagb-forms-field-set',
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName="div"
						value={ name }
						className={ `uagb-forms-toggle-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>
					<label class="uagb-switch">
						<input
							type="hidden"
							className="uagb-forms-toggle-input"
							checked={ toggleStatus }
							data-truestate={ trueValue }
							data-falsestate={ falseValue }
							value={ toggleStatus ? trueValue : falseValue }
							required={ toggleRequired }
							name={ block_id }
						/>
						<input
							type="checkbox"
							className="uagb-forms-toggle-input"
							checked={ toggleStatus }
							data-truestate={ trueValue }
							data-falsestate={ falseValue }
							value={ toggleStatus ? trueValue : falseValue }
							required={ toggleRequired }
							name={ block_id }
						/>
						<span class={ `uagb-slider ${ layout }` }></span>
					</label>
				</div>
			);
		},
	},
	{
		attributes,
		save: function ( props ) {
			const { attributes } = props;

			const { block_id, toggleRequired, name, toggleStatus, layout, trueValue, falseValue } = attributes;

			const isRequired = toggleRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

			return (
				<div
					className={ classnames(
						'uagb-forms-toggle-wrap',
						'uagb-forms-field-set',
						`uagb-block-${ block_id }`
					) }
				>
					<RichText.Content
						tagName="div"
						value={ name }
						className={ `uagb-forms-toggle-label ${ isRequired } uagb-forms-input-label` }
						id={ block_id }
					/>
					<label // eslint-disable-line jsx-a11y/label-has-for
						className="uagb-switch"
						id="uag-form"
					>
						<input
							type="hidden"
							className="uagb-forms-toggle-input"
							checked={ toggleStatus }
							data-truestate={ trueValue }
							data-falsestate={ falseValue }
							value={ toggleStatus ? trueValue : falseValue }
							required={ toggleRequired }
							name={ block_id }
						/>
						<input
							type="checkbox"
							className="uagb-forms-toggle-input"
							checked={ toggleStatus }
							data-truestate={ trueValue }
							data-falsestate={ falseValue }
							value={ toggleStatus ? trueValue : falseValue }
							required={ toggleRequired }
							name={ block_id }
						/>
						<span className={ `uagb-slider ${ layout }` }></span>
					</label>
				</div>
			);
		},
	},
	{
		attributes: attributesNewVer,
		save: saveV2_4_1,
	}
];

export default deprecated;
