function renderCustomSVG( svg ) {
	const customSVG = {
		rectangles: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.4 0H16L9.6 16H0L6.4 0Z' fill='black'/%3E%3C/svg%3E")`,

		parallelogram: `url("data:image/svg+xml,%3Csvg width='8' height='16' viewBox='0 0 8 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='16' fill='black'/%3E%3C/svg%3E")`,

		slash: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.29312 16.9999L17 6.29302M14.2931 16.9999L17 14.293M-0.707031 15.9999L16.0002 -0.707153M8.00017 -0.707153L-0.706882 7.9999' stroke='black'/%3E%3C/svg%3E")`,

		leaves: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2356_5631)'%3E%3Cpath d='M15 1C10.5 1 9 2.5 9 7C13.5 7 15 5.5 15 1Z' stroke='black'/%3E%3Cpath d='M1 1C5.5 1 7 2.5 7 7C2.5 7 1 5.5 1 1Z' stroke='black'/%3E%3Cpath d='M15 15C10.5 15 9 13.5 9 9C13.5 9 15 10.5 15 15Z' stroke='black'/%3E%3Cpath d='M1 15C5.5 15 7 13.5 7 9C2.5 9 1 10.5 1 15Z' stroke='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2356_5631'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
	};
	return svg in customSVG ? customSVG[ svg ] : '';
}

export default renderCustomSVG;
