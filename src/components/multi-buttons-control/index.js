/**
 * WordPress dependencies
 */
 import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelRow,
	Tooltip,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Import Css
 */
import './editor.scss';

const MultiButtonsControl = props => {

	const {
		currentOption,
		label,
		onChange,
		options,
		showIcons,
	} = props;
	
	if ( ! options ){
		return __( 'Please add a option props to MultiButtonsControl','ultimate-addons-for-gutenberg' );
	}

	return (
		<>
			<p class="uagb-multi-buttons-control__label">{ label }</p>
			<ButtonGroup className={ `uagb-multi-button-button-group` } aria-label={ label }>
				{ options.map( ( option ) => (
					<Tooltip
						key={ `option-${ option.value }` }
						text={ option.tooltip }>

						<Button
							className={ `uagb-multi-button` }
							isLarge
							isSecondary={ currentOption !== option.value }
							isPrimary={ currentOption === option.value }
							aria-pressed={ currentOption === option.value }
							onClick={ () => onChange( option.value ) }
							aria-label={ option.tooltip }>

							{ showIcons ? option.icon : option.label }

						</Button>

					</Tooltip>
				) ) }
			</ButtonGroup>
		</>
	);
}

export default MultiButtonsControl