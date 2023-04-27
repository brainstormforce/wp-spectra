import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	const { state, togglePreview, inspectorControls, categoriesList, taxonomyList } = props;

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

	const taxonomyListOptions = [];

	const categoryListOptions = [ { value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) } ];

	if ( '' !== taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: decodeEntities( taxonomyList[ item ].label ),
			} );
		} );
	}

	if ( '' !== categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: decodeEntities( categoriesList[ item ].name ),
			} );
		} );
	}

	return (
		<>
			{ inspectorControls }
			<BlockControls>{ getBlockControls() }</BlockControls>
		</>
	);
};

export default memo( Settings );
