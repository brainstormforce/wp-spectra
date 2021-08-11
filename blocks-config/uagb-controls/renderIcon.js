/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */

import parseSVG from "./parseIcon";

function renderSVG(svg) {
	svg = parseSVG(svg);

	const fontAwesome = uagb_blocks_info.uagb_svg_icons[svg];

	if ("undefined" !== typeof fontAwesome) {
		const viewbox_array = fontAwesome.svg.hasOwnProperty("brands")
			? fontAwesome.svg.brands.viewBox
			: fontAwesome.svg.solid.viewBox;
		const path = fontAwesome.svg.hasOwnProperty("brands")
			? fontAwesome.svg.brands.path
			: fontAwesome.svg.solid.path;
		const viewBox = viewbox_array.join(" ");

		switch (svg) {
			case "align-center":
				return (
					<svg
						viewBox="0 0 18 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 1H4M18 6H0M14 11H4"
							stroke="#B1B1B1"
							stroke-width="2"
						/>
					</svg>
				);
			case "align-left":
				return (
					<svg
						viewBox="0 0 18 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 1H10M0 6H18M0 11H10"
							stroke="#007CBA"
							stroke-width="2"
						/>
					</svg>
				);
			case "align-right":
				return (
					<svg
						viewBox="0 0 18 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 1H8M18 6H0M18 11H8"
							stroke="#B1B1B1"
							stroke-width="2"
						/>
					</svg>
				);
		}

		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
				<path d={path}></path>
			</svg>
		);
	}
}

export default renderSVG;
