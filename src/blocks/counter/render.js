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
		UAGBCounter.init( '.uagb-block-' + block_id, attributes ) // eslint-disable-line no-undef
	}, [] )


	const number = (
		<div className="wp-block-uagb-counter__number">
			{
				numberPrefix && (<span className="uagb-counter-block-prefix">{numberPrefix}</span>)
			}
			<span className="uagb-counter-block-number" data-duration={animationDuration} data-to-value={endNumber} data-from-value={startNumber} data-delimiter={thousandSeparator}></span>
			{
				numberSuffix && (<span className="uagb-counter-block-suffix">{numberSuffix}</span>)
			}
		</div>
	);

	const bars = (
		<div className='wp-block-uagb-counter-bars-container'>
			{number}
		</div>
	)

	const circle = (
		<div className="svg-container">
			<svg className="svg" viewBox="0 0 250 250" version="1.1" preserveAspectRatio="xMinYMin meet">
				{/* <path className="fl-bar-bg" r="115" cx="125" cy="125" fill="transparent" strokeDasharray="722.57" strokeDashoffset="0"></path>
				<path className="fl-bar" r="115" cx="125" cy="125" fill="transparent" strokeDasharray="722.57" strokeDashoffset="722.57" transform="rotate(-90 125 125)" data-bbtest="sample-lang" style="strokeDashoffset: 0px;"></path> */}
			</svg>
		</div>
	)

	return (
		<React.Fragment>
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-counter',
				`wp-block-uagb-counter--${ layout }`,
			) }>
				{
					layout === 'number' && number
				}
				{
					layout === 'bars' && bars
				}
				{
					layout === 'circle' && circle
				}
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
