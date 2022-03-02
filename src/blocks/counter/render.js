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
		clientId,
		deviceType
	} = props.parentProps;

	const {
		block_id,
		layout,
		heading,
		numberPrefix,
		numberSuffix,
		startNumber,
		endNumber,
		animationDuration,
		thousandSeparator,
	} = attributes

	useEffect( () => {
		UAGBCounter.init( '.uagb-block-' + block_id, props.attributes ) // eslint-disable-line no-undef
	}, [props.attributes, deviceType] )


	return (
		<React.Fragment>
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-counter',
				`wp-block-uagb-counter--${ layout }`,
			) }>
				<div className="wp-block-uagb-counter__number">
					{
						numberPrefix && (<span className="uagb-counter-block-prefix">{numberPrefix}</span>)
					}
					<span className="uagb-counter-block-number" data-duration={animationDuration} data-to-value={endNumber} data-from-value={startNumber} data-delimiter={thousandSeparator}></span>
					{
						numberSuffix && (<span className="uagb-counter-block-suffix">{numberSuffix}</span>)
					}
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
