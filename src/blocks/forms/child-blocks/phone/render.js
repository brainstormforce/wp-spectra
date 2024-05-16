import classnames from 'classnames';
import countryOptions from './country-option';
import { useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';

import { SelectControl } from '@wordpress/components';

import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, setAttributes } = props;

	const { block_id, phoneRequired, phoneName, pattern, selectPhoneCode, autocomplete } = attributes;

	useLayoutEffect( () => {
		// Handle backward case of wrong country code.
		if( '+42' === selectPhoneCode ) {
			setAttributes( { selectPhoneCode: '+420' } )
		}
	}, [] );
	let phone_html = '';

	let placeholder = '';
	if ( pattern === '[0-9]{3}-?[0-9]{2}-?[0-9]{3}' ) {
		placeholder = __( '123-45-678', 'ultimate-addons-for-gutenberg' );
	} else if ( pattern === '[0-9]{3}-?[0-9]{3}-?[0-9]{4}' ) {
		placeholder = __( '123-456-7890', 'ultimate-addons-for-gutenberg' );
	} else if ( pattern === '[0-9]{3}s?[0-9]{3}s?[0-9]{4}' ) {
		placeholder = __( '123 456 7890', 'ultimate-addons-for-gutenberg' );
	}

	if ( pattern !== '' ) {
		phone_html = (
			<input
				type="tel"
				placeholder={ placeholder }
				pattern={ pattern }
				required={ phoneRequired }
				className="uagb-forms-phone-input uagb-forms-input"
				name={ block_id }
				autoComplete={ autocomplete }
			/>
		);
	} else {
		phone_html = (
			<input
				type="tel"
				required={ phoneRequired }
				className="uagb-forms-phone-input uagb-forms-input"
				name={ block_id }
				autoComplete={ autocomplete }
			/>
		);
	}
	const contryCode = [];

	countryOptions.map( (
		o,
		index // eslint-disable-line no-unused-vars
	) => contryCode.push( { value: o.props.value, label: o.props.children } ) );

	const isRequired = phoneRequired ? 'required' : '';

	return (
		<>
			<div
				className={ classnames( 'uagb-forms-phone-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }
			>
				<RichText
					tagName="div"
					placeholder={ __( 'Phone Name', 'ultimate-addons-for-gutenberg' ) }
					value={ phoneName }
					onChange={ ( value ) => setAttributes( { phoneName: value } ) }
					className={ `uagb-forms-phone-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<div className="uagb-forms-phone-flex">
					<SelectControl
						className={ 'uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor' }
						options={ contryCode }
						value={ selectPhoneCode }
						onChange={ ( value ) =>
							setAttributes( {
								selectPhoneCode: value,
							} )
						}
					/>
					{ phone_html }
				</div>
			</div>
		</>
	);
};
export default memo( Render );
