import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import {BlockControls} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n'
import { Toolbar, Button, Tooltip } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const FORMAT_TYPE = 'uagb/advanced-heading-highlight'

function HighlightFormat( { isActive, onChange, value } ) {
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	return (
		<BlockControls>
			{
				selectedBlock && selectedBlock.name === 'uagb/advanced-heading' && (
					<Toolbar className="uag-highlight-toolbar" label="Options">
						<Tooltip text={__( 'Highlight Text', 'ultimate-addons-for-gutenberg' )}>
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
						</Tooltip>
					</Toolbar>
				)
			}
		</BlockControls>
	);
}


registerFormatType( FORMAT_TYPE, {
	title: 'Spectra Highlight',
	tagName: 'mark',
	className: 'uagb-highlight',
	edit: HighlightFormat,
} );
