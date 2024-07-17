/**
 * BLOCK: Buttons - Deprecated Block
 */

import classnames from 'classnames';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import newAttributesV2_7_11 from './deprecated/v2.7.11/attributes';
import saveV2_7_11 from './deprecated/v2.7.11/save'; 

import { InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save: ( props ) => {
			const { attributes, className } = props;

			const { block_id, align, items, buttons, btn_count } = props.attributes;

			const renderButtonsMarkup = buttons.map( ( button, index ) => {
				return (
					<div
						className={ classnames( `uagb-buttons-repeater-${ index }`, 'uagb-button__wrapper' ) }
						key={ index }
					>
						<RichText.Content
							value={ button.label }
							tagName="a"
							className="uagb-button__link"
							href={ button.link }
							rel="noopener noreferrer"
							target={ button.target }
						/>
					</div>
				);
			} );

			return (
				<div
					className={ classnames( className, 'uagb-buttons__outer-wrap' ) }
					id={ `uagb-buttons-${ block_id }` }
				>
					<div className="uagb-buttons__wrap">{ renderButtonsMarkup }</div>
				</div>
			);
		},
	},
	{
		attributes,
		save: ( props ) => {
			const { attributes, className } = props;

			const { block_id, align, items, buttons, btn_count } = props.attributes;

			const renderButtonsMarkup = buttons.map( ( button, index ) => {
				return (
					<div
						className={ classnames( `uagb-buttons-repeater-${ index }`, 'uagb-button__wrapper' ) }
						key={ index }
					>
						<RichText.Content
							value={ button.label }
							tagName="a"
							className="uagb-button__link"
							href={ button.link }
							rel="noopener noreferrer"
							target={ button.target }
						/>
					</div>
				);
			} );

			return (
				<div
					className={ classnames( className, 'uagb-buttons__outer-wrap' ) }
					id={ `uagb-buttons-${ block_id }` }
				>
					<div className="uagb-buttons__wrap">{ renderButtonsMarkup }</div>
				</div>
			);
		},
	},
	{
		attributes,
		save: ( props ) => {
			const { attributes, className } = props;

			const { block_id, align, items, buttons, btn_count } = props.attributes;

			const renderButtonsMarkup = buttons.map( ( button, index ) => {
				return (
					<div
						className={ classnames( `uagb-buttons-repeater-${ index }`, 'uagb-button__wrapper' ) }
						key={ index }
					>
						<RichText.Content
							value={ button.label }
							tagName="a"
							className="uagb-button__link"
							href={ button.link }
							rel="noopener noreferrer"
							target={ button.target }
						/>
					</div>
				);
			} );

			return (
				<div className={ classnames( className, 'uagb-buttons__outer-wrap', `uagb-block-${ block_id }` ) }>
					<div className="uagb-buttons__wrap">{ renderButtonsMarkup }</div>
				</div>
			);
		},
	},
	{
		attributes,
		save: ( props ) => {
			const { className } = props;
			const { block_id } = props.attributes;

			return (
				<div className={ classnames( className, 'uagb-buttons__outer-wrap', `uagb-block-${ block_id }` ) }>
					<div className="uagb-buttons__wrap uagb-buttons-layout-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes: newAttributesV2_7_11,
		save: saveV2_7_11,
	},
];

export default deprecated;
