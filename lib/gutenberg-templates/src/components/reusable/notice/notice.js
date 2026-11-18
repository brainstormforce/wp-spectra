import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { memo } from '@wordpress/element';
import { STORE_KEY } from '../../../store';

import './notice.scss';

const Notice = ( { notice, setNotice } ) => {
	if ( ! Object.keys( notice ).length ) {
		return null;
	}

	const { type, message } = notice;

	return (
		<div className={ `ast-block-templates-notice notice notice-${ type }` }>
			<div className="ast-block-templates-notice-message">{ message }</div>
			<button
				type="button"
				className="notice-dismiss"
				onClick={ () => setNotice( {} ) }
			>
				<span className="screen-reader-text">Dismiss</span>
			</button>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNotice } = dispatch( STORE_KEY );
		return {
			setNotice,
		};
	} ),
	withSelect( ( select ) => {
		const { getNotice } = select( STORE_KEY );
		return {
			notice: getNotice(),
		};
	} )
)( memo( Notice ) );
