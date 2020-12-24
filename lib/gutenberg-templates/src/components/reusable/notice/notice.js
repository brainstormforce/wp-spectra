const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

import './notice.scss';

const Notice = ({ notice, setNotice }) => {
	if (!Object.keys(notice).length) {
		return;
	}

	let { type, message } = notice;

	return (
		<div className={`gutenberg-templates-notice notice notice-${type}`}>
			<div className="gutenberg-templates-notice-message">{message}</div>
			<button
				type="button"
				className="notice-dismiss"
				onClick={() => setNotice({})}
			>
				<span className="screen-reader-text">Dismiss</span>
			</button>
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setNotice } = dispatch('gutenberg-templates');
		return {
			setNotice: setNotice,
		};
	}),
	withSelect((select) => {
		const { getNotice } = select('gutenberg-templates');
		return {
			notice: getNotice(),
		};
	})
)(memo(Notice));
