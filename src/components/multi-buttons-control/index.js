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
	
	if ( !options ){
		return __( 'Please add a option props to MultiButtonsControl','ultimate-addons-for-gutenberg' );
	}

	let buttons = options;

	let multiButtonLabel = label.toLowerCase();

	return (
		<BaseControl id={ `uagb-option-selector-${ multiButtonLabel }` } label={ label }>
			<PanelRow>
				<ButtonGroup className={ `uagb-multi-button-${ multiButtonLabel }-button-group` } aria-label={ label }>

					{ buttons.map( ( option ) => (
						<Tooltip
							key={ `option-${ option.value }` }
							text={ option.tooltip }>

							<Button
							    className={ `uagb-multi-button-${ multiButtonLabel }-button` }
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
			</PanelRow>
		</BaseControl>
	);
}

export default MultiButtonsControl