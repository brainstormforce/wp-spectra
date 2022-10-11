import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

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
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-modal'
			) }>
				<RichText
					tagName="p"
					placeholder={ __(
						'Click here',
						'ultimate-addons-for-gutenberg'
					) }
					value={ triggerText }
					className="uagb-modal-text"
					onChange={ ( value ) => setAttributes( { triggerText: value } ) }
				/>
			</div>
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
