import React from 'react';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import PropTypes from 'prop-types';

const propTypes = {
	type: PropTypes.string,
	disableDynamicContent: PropTypes.bool
};

const defaultProps = {
	type: 'url',
	disableDynamicContent: false
};

export default function UAGTextControl(props) {
	const {label, name, type, value, setAttributes, disableDynamicContent} = props
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	let registerImageExtender = disableDynamicContent ? null : wp.hooks.applyFilters('uagb.registerTextExtender', '', selectedBlock?.name, name, type)

	const isShowImageUploader = () => {
		if(disableDynamicContent){
			return true;
		}
		const dynamicContent = selectedBlock?.attributes?.dynamicContent
		if(dynamicContent && dynamicContent?.[name]?.enable === true) {
			return false
		}
		return true;
	}

	return (
		<React.Fragment>
			<TextControl
				label={label}
				value={ value }
				onChange={ ( value ) =>
					setAttributes( { [name]: value } )
				}
			/>
			{
				registerImageExtender
			}
		</React.Fragment>
	);
}

UAGTextControl.propTypes = propTypes;
UAGTextControl.defaultProps = defaultProps;
