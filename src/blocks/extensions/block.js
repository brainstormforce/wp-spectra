import UserConditionOptions from './condition-block';

const { __ } = wp.i18n

const AdvancedControlsBlock = wp.compose.createHigherOrderComponent((BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { isSelected } = props;
		const blocks_name = props.name;
		const block_type = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child' ];

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && ! block_type.includes(blocks_name) &&
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
	'uagb/advanced-control-block',
	AdvancedControlsBlock
);