import React from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

const propTypes = {};

const defaultProps = {};

const Render = ( props ) => {
	const {
		attributes,
		setAttributes,
	} = props.parentProps;

	const {
		block_id,
		triggerText
	} = attributes

	return (
		<React.Fragment>
			<div className={ classnames(
				`uagb-block-${ block_id }`,
				'wp-block-uagb-modal'
			) }>
				<RichText
					tagName="p"
					placeholder={ __(
						'Click Here',
						'ultimate-addons-for-gutenberg'
					) }
					value={ triggerText }
					className="uagb-modal-text uagb-modal-trigger"
					onChange={ ( value ) => setAttributes( { triggerText: value } ) }
				/>
				<div className="uagb-modal-popup">
					<div className="uagb-modal-popup-wrap">
						<div className="uagb-modal-popup-content">
							<InnerBlocks />
						</div>
						<div className="uagb-modal-popup-close">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
