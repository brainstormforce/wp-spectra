import { useEntityProp } from '@wordpress/core-data';
import { TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { useSelect, withSelect } from '@wordpress/data';
import { useState, useLayoutEffect, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import style from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import {
	alterEditorTitleStyling,
	removeEditorAlteringStyles,
	checkCustomFieldsSupport,
} from './utils';
import { uagbClassNames } from '@Utils/Helpers';
import { hidden, visible } from './icons';

const HeaderTitle = ( props ) => {

	const {
		getDistractionFreeMode,
	} = props;

	const deviceType = useDeviceType();
	const [ supportsCustomFields, setSupportsCustomFields ] = useState( true );

	// Use the editor styling for the header titlebar.
	useLayoutEffect( () => {
		style.use();
		return () => {
			style.unuse();
		}
	}, [] );

	// Add the editor-manipulating styles whenever the device type changes, or distraction free mode status changes.
	useEffect( () => {
		if ( ! supportsCustomFields ) {
			return;
		}
		alterEditorTitleStyling( getDistractionFreeMode );
	}, [
		deviceType,
		getDistractionFreeMode,
	] );

	// Get the required post details.
    const { postId, postType } = useSelect( ( select ) => {
        const editor = select( 'core/editor' );
        return {
            postId: editor.getCurrentPostId(),
            postType: editor.getCurrentPostType(),
        };
    }, [] );

	// Check if custom fields are supported. If not supported, disable the top titlebar.
	checkCustomFieldsSupport( postType ).then( ( data ) => {
		if ( ! data?.success || ! data?.supports_custom_fields ) {
			setSupportsCustomFields( false );
			removeEditorAlteringStyles();
		}
	} );

	// Get the Post Title and the setter.
	const [ title, setTitle ] = useEntityProp(
		'postType',
		postType,
		'title',
		postId
	);

	// Get the Post Meta and the setter.
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta', postId );

	// Get the required details from the current theme.
	const currentTheme = uagb_blocks_info?.current_theme;
	const isAstraBased = ( !! uagb_blocks_info?.is_astra_based_theme ) || 'Astra' === currentTheme;
	const isSpectraOne = 'Spectra One' === currentTheme;
	let titleMeta;

	// Set the required title meta KV pairs.
	switch ( true ) {
		case isAstraBased:
			titleMeta = {
				key: 'site-post-title',
				visible: '',
				hidden: 'disabled',
			};
			break;
		case isSpectraOne:
			titleMeta = {
				key: '_swt_meta_site_title_display',
				visible: false,
				hidden: true,
			};
			break;
		default:
			titleMeta = {};
	}
	// If the meta is not available, return.
	if ( ! meta ) {
		return;
	}

	// Add common conditions for easier usage down the line.
	const isCompatibleTheme = ( isAstraBased || isSpectraOne );
	const isHidden = ( titleMeta?.hidden === meta[ titleMeta?.key ] );

	// Add the required functionality based on the theme.
	const updateVisibility = () => {
		if ( ! titleMeta?.key ) {
			return;
		}
		const invertedTitleMeta = isHidden ? titleMeta.visible : titleMeta.hidden;
		setMeta( {
			...meta,
			[ titleMeta.key ]: invertedTitleMeta,
		} );
	};

	// Render the header titlebar, with auto-focus for new or draft posts.
	return supportsCustomFields && (
		<div className={ uagbClassNames( [
			'spectra-editor__top-titlebar--wrapper',
			( isCompatibleTheme && isHidden ) && 'spectra-editor__top-titlebar--is-hidden',
		] ) }>
			<TextControl
				className={ uagbClassNames( [
					'spectra-editor__top-titlebar',
					isCompatibleTheme && 'spectra-editor__top-titlebar--has-button',
				] ) }
				placeholder={ __( 'Add Title', 'ultimate-addons-for-gutenberg' ) }
				value={ title }
				onChange={ ( value ) => {
					setTitle( value );
				} }
				autoComplete="off"
			/>
			{ isCompatibleTheme && (
				<button
					className="spectra-editor__top-titlebar--button"
					onClick={ () => updateVisibility() }
				>
					{ isHidden ? hidden( { width: 16, height: 16 } ) : visible( { width: 16, height: 16 } ) }
				</button>
			) }
		</div>
	);
};

export default compose(
	withSelect( ( headerTitlebarSelect ) => {
		const getBlockEditorStore = headerTitlebarSelect( 'core/block-editor' );
		const getDistractionFreeMode = getBlockEditorStore?.getSettings()?.isDistractionFree;
	
		return {
			getDistractionFreeMode,
		};
	} ),
)( HeaderTitle );
