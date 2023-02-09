import React, {useLayoutEffect} from 'react';
import {
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import {getIdFromString} from '@Utils/Helpers';
import styles from './editor.lazy.scss';
import PropTypes from 'prop-types';

const propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	settings: PropTypes.array,
	value: PropTypes.any,
	onChange: PropTypes.func,
	help: PropTypes.string,
};

const defaultProps = {
	placeholder: __( 'Search…', 'ultimate-addons-for-gutenberg' ),
	settings: [
		{
			id: 'opensInNewTab',
			title: __( 'Open in new window', 'ultimate-addons-for-gutenberg' ),
		},
		{
			id: 'noFollow',
			title: __( 'Add nofollow', 'ultimate-addons-for-gutenberg' )
		}
	]
};

export default function UAGLinkControl( {label, placeholder, settings, onChange, help, value} ) {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const ID = getIdFromString( label ? label : placeholder )
	return (
		<React.Fragment>
			<div className='uagb-link-control'>
				{
					label && (
						<label htmlFor={ID} className='uagb-link-control__label'>
							{label}
						</label>
					)
				}
				<LinkControl
					id={ID}
					searchInputPlaceholder={ placeholder }
					value={ value }
					settings={ settings }
					onChange={ onChange }
					withCreateSuggestion={ false }
				/>
				{
					help && (
						<p className='uagb-link-control__help'>{help}</p>
					)
				}
			</div>
		</React.Fragment>
	);
}

UAGLinkControl.propTypes = propTypes;
UAGLinkControl.defaultProps = defaultProps;
