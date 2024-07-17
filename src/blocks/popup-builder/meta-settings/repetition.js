import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

// React Component to Render the Repetition Settings.
const RepetitionSettings = () => {
	const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType() );

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const [ repetition, setRepetition ] = useState( meta['spectra-popup-repetition'] );
	const [ infiniteRepeat, setInfiniteRepeat ] = useState( false );

	// Once the panel loads, update the Default Repetition after Infinite Repeat has been set.
	useEffect( () => {
		if ( -1 === repetition ) {
			setInfiniteRepeat( true );
			setRepetition( 1 );
		}
	}, [] );

	// Update the repetition setting.
	const updateRepetition = ( value ) => {
		setRepetition( value );
		updateRepetitionMeta( value );
	};

	// Update the infinite repetition setting.
	const updateInfiniteLoop = ( value ) => {
		setInfiniteRepeat( value );
		updateRepetitionMeta( value ? -1 : repetition );
	};

	// Update the repetition meta.
	const updateRepetitionMeta = ( value ) => {
		setMeta( {
			...meta,
			'spectra-popup-repetition': value,
		} );
	}

	return (
		<UAGAdvancedPanelBody
			title={ __( 'Repetition', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				label={ __( 'Repeat Infinitely', 'ultimate-addons-for-gutenberg' ) }
				checked={ infiniteRepeat }
				onChange={ () => updateInfiniteLoop( ! infiniteRepeat ) }
			/>
			{ ! infiniteRepeat && (
				<Range
					label={ __(
						'Repetition per Browser',
						'ultimate-addons-for-gutenberg'
					) }
					value={ repetition }
					data={ {
						value: repetition,
						label: 'repetition',
					} }
					onChange={ ( value ) => updateRepetition( value ) }
					min={ 1 }
					max={ 100 }
					displayUnit={ false }
					allowReset={ false }
					help={ __(
						'Note: Repetition decreases on close, not on refresh.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			) }
		</UAGAdvancedPanelBody>
	)
}

export default RepetitionSettings;