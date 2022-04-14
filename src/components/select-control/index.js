import React, {useLayoutEffect} from 'react';
import {SelectControl} from '@wordpress/components';
import styles from './editor.lazy.scss';
import PropTypes from 'prop-types';

const propTypes = {
	label: PropTypes.string,
	layout: PropTypes.string,
	options: PropTypes.array,
	data: PropTypes.object,
	setAttributes: PropTypes.func
};

const defaultProps = {
	layout: 'inline'
};

export default function UAGSelectControl( {layout, label, options, data, setAttributes} ) {
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	return (
		<div className={`uagb-select-control uagb-select-control--layout-${layout}`}>
			<SelectControl
				label={ label }
				value={ data.value }
				onChange={ ( value ) =>
					setAttributes( { [data.label]: value } )
				}
				options={options}
			/>
		</div>
	);
}

UAGSelectControl.propTypes = propTypes;
UAGSelectControl.defaultProps = defaultProps;
