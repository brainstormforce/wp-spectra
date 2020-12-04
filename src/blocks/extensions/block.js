import UserConditionOptions from './condition-block';

const { __ } = wp.i18n

const AdvancedControlsBlock = wp.compose.createHigherOrderComponent((BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { isSelected } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&
					<InspectorAdvancedControls>
						{ UserConditionOptions( props ) }						
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'AdvancedControlsBlock');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'uagb/cover-advanced-control',
	AdvancedControlsBlock
);