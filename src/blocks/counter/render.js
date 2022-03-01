import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useDeviceType } from '@Controls/getPreviewType';

const propTypes = {};

const defaultProps = {};

const Render = ( props ) => {
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		clientId
	} = props.parentProps;

	const {
		block_id,
		heading
	} = attributes


	return (
		<React.Fragment>
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-counter'
			) }>
				<div className="wp-block-uagb-counter__number">
					<span className="uagb-counter-block-prefix">Hello</span>
					<span className="uagb-counter-block-number" data-duration="2000" data-to-value="10000" data-from-value="0" data-delimiter=".">10.000</span>
					<span className="uagb-counter-block-suffix">World</span>
				</div>
				<RichText
					tagName="div"
					className="wp-block-uagb-counter__title"
					value={ heading }
					onChange={ ( value ) => setAttributes( { heading: value } ) }
					placeholder={ __( 'Heading...' ) }
				/>
			</div>
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
