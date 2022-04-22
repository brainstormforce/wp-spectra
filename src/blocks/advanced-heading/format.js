import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import {BlockControls} from '@wordpress/block-editor';
import { Toolbar, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const FORMAT_TYPE = 'uagb/advanced-heading-highlight'

function HighlightFormat( { isActive, onChange, value } ) {
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	if ( selectedBlock && selectedBlock.name !== 'uagb/advanced-heading' ) {
		return null;
	}

	return (
		<BlockControls>
			<Toolbar className="uag-highlight-toolbar" label="Options">
				<Button
					isPrimary={isActive}
					onClick={ () => {
						onChange(
							toggleFormat( value, {
								type: FORMAT_TYPE,
							} )
						);
					} }
				>
					<span className="dashicons  dashicons-admin-customizer"></span>
				</Button>
			</Toolbar>
		</BlockControls>
	);
}


registerFormatType( FORMAT_TYPE, {
	title: 'Spectra Highlight',
	tagName: 'mark',
	className: 'uagb-highlight',
	edit: HighlightFormat,
} );
