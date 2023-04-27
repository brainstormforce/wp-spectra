import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	const { state, inspectorControls, togglePreview } = props;

	props = props.parentProps;

	const getBlockControls = () => {
		const { isEditing } = state;

		return (
			<ToolbarGroup
				controls={ [
					{
						icon: 'edit',
						title: __( 'Edit', 'ultimate-addons-for-gutenberg' ),
						onClick: () => togglePreview(),
						isActive: isEditing,
					},
				] }
			/>
		);
	};

	return (
		<>
			{ inspectorControls }
			<BlockControls>{ getBlockControls() }</BlockControls>
		</>
	);
};

export default memo( Settings );
