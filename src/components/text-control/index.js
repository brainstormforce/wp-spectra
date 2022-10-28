import React, {useLayoutEffect} from 'react';
import styles from './editor.lazy.scss';
import { TextControl } from '@wordpress/components';
import Separator from '@Components/separator';
import { useSelect } from '@wordpress/data';
import PropTypes from 'prop-types';

const propTypes = {
	dynamicContentType: PropTypes.string,
	disableDynamicContent: PropTypes.bool
};

const defaultProps = {
	dynamicContentType: 'url',
	disableDynamicContent: false
};

export default function UAGTextControl(props) {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {label, name, dynamicContentType, value, setAttributes, disableDynamicContent} = props
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	let registerTextExtender = disableDynamicContent ? null : wp.hooks.applyFilters('uagb.registerTextExtender', '', selectedBlock?.name, name, dynamicContentType)

	const isEnableDynamicContent = () => {
		if(disableDynamicContent){
			return false;
		}
		const dynamicContent = selectedBlock?.attributes?.dynamicContent
		if(dynamicContent && dynamicContent?.[name]?.enable === true) {
			return true
		}
		return false;
	}

	return (
		<React.Fragment>
			<div className={`uagb-text-control${isEnableDynamicContent() ? ' uagb-text-control--open-dynamic-content' : ''}`}>
				<TextControl
					label={label}
					value={ value }
					onChange={ ( value ) =>
						setAttributes( { [name]: value } )
					}
					readOnly={isEnableDynamicContent()}
				/>
				{
					registerTextExtender
				}
				{
					isEnableDynamicContent() && (
						<Separator />
					)
				}
			</div>
		</React.Fragment>
	);
}

UAGTextControl.propTypes = propTypes;
UAGTextControl.defaultProps = defaultProps;
