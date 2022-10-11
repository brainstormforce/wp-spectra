import React, { useLayoutEffect } from 'react';
import { SelectControl } from '@wordpress/components';
import styles from './editor.lazy.scss';
import PropTypes from 'prop-types';

// Use the onChange prop only if needed.
// When using the onChange prop, you may skip the label KV-Pair of the data prop and the setAttributes prop.
// Children can now be declared as Options or OptGroups, as in the WP Select Control. Skip the options prop in this case.

const propTypes = {
	label: PropTypes.string,
	layout: PropTypes.string,
	options: PropTypes.array,
	data: PropTypes.object,
	setAttributes: PropTypes.func,
	onChange: PropTypes.func,
	help: PropTypes.string,
};

const defaultProps = {
	layout: 'inline',
	onChange: null,
};

export default function UAGSelectControl( { layout, label, options, data, setAttributes, onChange, help, children } ) {
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	return (
		children ? (
			<div className={ `uagb-select-control uagb-select-control--layout-${ layout }` }>
				<SelectControl
					label={ label }
					value={ data.value }
					onChange={ ( value ) => (
						onChange ? onChange( value ) : setAttributes( { [data.label]: value } )
					) }
					help={ help }
				>
					{ children }
				</SelectControl>
			</div>
		) : (
			<div className={ `uagb-select-control uagb-select-control--layout-${ layout }` }>
				<SelectControl
					label={ label }
					value={ data.value }
					onChange={ ( value ) => (
						onChange ? onChange( value ) : setAttributes( { [data.label]: value } )
					) }
					options={ options }
					help={ help }
				/>
			</div>
		)
	);
}

UAGSelectControl.propTypes = propTypes;
UAGSelectControl.defaultProps = defaultProps;
