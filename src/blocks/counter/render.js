import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
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
		block_id
	} = attributes


	return (
		<React.Fragment>
			Render Mode
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
