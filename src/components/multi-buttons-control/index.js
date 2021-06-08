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

/**
 * Constants
 */
const DefaultOption = [
	{
		value: "5",
		/* translators: abbreviation for small size */
		label: __( 'S','ultimate-addons-for-gutenberg' ),
		tooltip: __( 'Small','ultimate-addons-for-gutenberg' ),
	},
	{
		value: "15",
		/* translators: abbreviation for medium size */
		label: __( 'M','ultimate-addons-for-gutenberg' ),
		tooltip: __( 'Medium','ultimate-addons-for-gutenberg' ),
	},
	{
		value: "20",
		/* translators: abbreviation for large size */
		label: __( 'L','ultimate-addons-for-gutenberg' ),
		tooltip: __( 'Large','ultimate-addons-for-gutenberg' ),
	},
	{
		value: "30",
		/* translators: abbreviation for extra large size */
		label: __( 'XL','ultimate-addons-for-gutenberg' ),
		tooltip: __( 'Extra Large','ultimate-addons-for-gutenberg' ),
	},
];

const MultiButtonsControl = props => {

	const {
		currentOption,
		label,
		onChange,
		options,
		showIcons,
	} = props;

	let buttons = options || DefaultOption;

	return (
		<BaseControl id={ `uagb-option-selector-${ label }` } label={ label }>
			<PanelRow>
				<ButtonGroup className={ `uagb-multi-button-${ label.toLowerCase() }-button-group` } aria-label={ label }>

					{ buttons.map( ( option ) => (
						<Tooltip
							key={ `option-${ option.value }` }
							text={ option.tooltip }>

							<Button
							    className={ `uagb-multi-button-${ label.toLowerCase() }-button` }
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