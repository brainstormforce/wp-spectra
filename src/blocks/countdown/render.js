import { useLayoutEffect, memo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';
import { useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

import CountdownBox from './components/CountdownBox';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const countdownRef = props.countdownRef;

	props = props.parentProps;

	const deviceType = useDeviceType();
	const {
		attributes: { block_id, showLabels, labelDays, labelHours, labelMinutes, labelSeconds, timerEndAction },
	} = props;

	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
		ref: countdownRef,
	} );

	const innerblocks_structure = !! uagb_blocks_info.spectra_pro_status && timerEndAction === 'content' && (
		<div className={ `uagb-block-countdown-innerblocks-${ block_id } wp-block-uagb-countdown-innerblocks` }>
			{ applyFilters( 'spectra.countdown.render-innerblocks', '', props.name ) }
		</div>
	);

	return (
		<>
			<div { ...blockProps }>
				<CountdownBox unitType="days" showLabels={ showLabels } label={ labelDays } />
				<CountdownBox unitType="hours" showLabels={ showLabels } label={ labelHours } />
				<CountdownBox unitType="minutes" showLabels={ showLabels } label={ labelMinutes } />
				<CountdownBox unitType="seconds" showLabels={ showLabels } label={ labelSeconds } />
				{ innerblocks_structure }
			</div>
		</>
	);
};

export default memo( Render );
