if (googlefonts === undefined) {
	var googlefonts = [];
}
import PropTypes from "prop-types";
import WebFont from "webfontloader";
import { useState, useEffect } from "@wordpress/element";
const statuses = {
	inactive: "inactive",
	active: "active",
	loading: "loading",
};
const noop = () => {};

const WebfontLoader = (props) => {
	const [value, setValue] = useState([]);

	let status = undefined;

	useEffect(() => {
		loadFonts();
	}, []);

	const handleLoading = () => {
		setValue({ status: statuses.loading });
	};

	const addFont = (font) => {
		if (!googlefonts.includes(font)) {
			googlefonts.push(font);
		}
	};

	const handleActive = () => {
		setValue({ status: statuses.active });
	};

	const handleInactive = () => {
		setValue({ status: statuses.inactive });
	};

	const loadFonts = () => {
		if (!googlefonts.includes(props.config.google.families[0])) {
			WebFont.load({
				...props.config,
				loading: handleLoading,
				active: handleActive,
				inactive: handleInactive,
			});
			addFont(props.config.google.families[0]);
		}
	};

	useEffect(() => {
		const { onStatus, config } = props;

		if (status !== value.status) {
			onStatus(value.status);
		}
		if (config !== value.config) {
			loadFonts();
		}
	}, [status]);

	const { children } = props;
	return children || null;
};

WebfontLoader.propTypes = {
	config: PropTypes.object.isRequired,
	children: PropTypes.element,
	onStatus: PropTypes.func.isRequired,
};

WebfontLoader.defaultProps = {
	onStatus: noop,
};

export default WebfontLoader;
