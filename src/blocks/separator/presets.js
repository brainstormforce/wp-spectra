/**
 * Block Separator : Presets.
 */
import { __ } from '@wordpress/i18n';
import defaultAttributes from './attributes';

const separatorPresets = [
	{
		defaultAttributes,
	},
	{
		value: 'preset-1',
		label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'elementType', value: 'icon' },
			{ label: 'separatorStyle', value: 'solid' },
			{ label: 'separatorBorderHeight', value: 3 },
			{ label: 'separatorBorderHeightType', value: 'px' },
			{ label: 'elementColor', value: '#0085ba' },
			{ label: 'elementPosition', value: 'center' },
		],
		icon:
			'<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><path d="M65.631 134.382L146.303 134.382" stroke="#E6E6E6" stroke-width="3" stroke-linecap="round"/><path d="M178.697 134.382L259.369 134.382" stroke="#E6E6E6" stroke-width="3" stroke-linecap="round"/><path d="M171.12 134.382C171.12 139.143 167.261 143.002 162.5 143.002C157.739 143.002 153.88 139.143 153.88 134.382C153.88 129.621 157.739 125.762 162.5 125.762C167.261 125.762 171.12 129.621 171.12 134.382Z" fill="#B6B6B6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M166.553 130.65C166.856 130.956 166.853 131.45 166.547 131.753L160.544 137.694L157.449 134.159C157.165 133.834 157.197 133.341 157.522 133.057C157.846 132.773 158.339 132.806 158.623 133.13L160.625 135.417L165.449 130.644C165.755 130.34 166.249 130.343 166.553 130.65Z" fill="white"/></svg>',
	},
	{
		value: 'preset-2',
		label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'elementType', value: 'text' },
			{ label: 'separatorStyle', value: 'solid' },
			{ label: 'separatorBorderHeight', value: 3 },
			{ label: 'separatorBorderHeightType', value: 'px' },
			{ label: 'elementColor', value: '#0085ba' },
			{ label: 'elementPosition', value: 'center' },
		],
		icon:
			'<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5 31.7987C26.5 29.1485 28.6527 27 31.3081 27H293.692C296.347 27 298.5 29.1485 298.5 31.7987V245H26.5V31.7987Z" fill="white"/><path d="M56.852 136L137.524 136" stroke="#E6E6E6" stroke-width="3" stroke-linecap="round"/><path d="M187.476 136L268.148 136" stroke="#E6E6E6" stroke-width="3" stroke-linecap="round"/><path d="M147.085 136L177.915 136" stroke="#B6B6B6" stroke-width="3" stroke-linecap="round"/></svg>',
	},
	{
		value: 'preset-3',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'elementType', value: 'text' },
			{ label: 'separatorStyle', value: 'solid' },
			{ label: 'separatorBorderHeight', value: 3 },
			{ label: 'separatorBorderHeightType', value: 'px' },
			{ label: 'elementColor', value: '#0085ba' },
			{ label: 'elementPosition', value: 'left' },
		],
		icon:
			'<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg">		<path d="M26.5 31.7987C26.5 29.1485 28.6527 27 31.3081 27H293.692C296.347 27 298.5 29.1485 298.5 31.7987V245H26.5V31.7987Z" fill="white"/><path d="M121 136L243 136" stroke="#E6E6E6" stroke-width="3" stroke-linecap="round"/><path d="M82 136L112.829 136" stroke="#B6B6B6" stroke-width="3" stroke-linecap="round"/></svg>',
	},
	{
		value: 'preset-4',
		label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'separatorStyle', value: 'rectangles' },
			{ label: 'separatorBorderHeight', value: 6 },
			{ label: 'separatorBorderHeightType', value: 'px' },
			{ label: 'elementType', value: 'none' },
		],
		icon:
			'<svg width="325" height="245" viewBox="0 0 325 245" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/><path d="M52.3389 133.921H49.4329L47.4233 138.962H50.381L52.3389 133.921Z" fill="#B6B6B6"/><path d="M58.7743 133.921H55.8683L53.8587 138.962H56.8164L58.7743 133.921Z" fill="#B6B6B6"/><path d="M65.2096 133.921H62.3037L60.2941 138.962H63.2517L65.2096 133.921Z" fill="#B6B6B6"/><path d="M71.645 133.921H68.739L66.7294 138.962H69.6871L71.645 133.921Z" fill="#B6B6B6"/><path d="M78.0803 133.921H75.1743L73.1647 138.962H76.1224L78.0803 133.921Z" fill="#B6B6B6"/><path d="M84.5157 133.921H81.6098L79.6002 138.962H82.5578L84.5157 133.921Z" fill="#B6B6B6"/><path d="M90.9511 133.921H88.0451L86.0355 138.962H88.9932L90.9511 133.921Z" fill="#B6B6B6"/><path d="M97.3864 133.921H94.4804L92.4708 138.962H95.4285L97.3864 133.921Z" fill="#B6B6B6"/><path d="M103.822 133.921H100.916L98.9062 138.962H101.864L103.822 133.921Z" fill="#B6B6B6"/><path d="M110.257 133.921H107.351L105.342 138.962H108.299L110.257 133.921Z" fill="#B6B6B6"/><path d="M116.693 133.921H113.787L111.777 138.962H114.735L116.693 133.921Z" fill="#B6B6B6"/><path d="M123.128 133.921H120.222L118.212 138.962H121.17L123.128 133.921Z" fill="#B6B6B6"/><path d="M129.563 133.921H126.657L124.648 138.962H127.605L129.563 133.921Z" fill="#B6B6B6"/><path d="M135.999 133.921H133.093L131.083 138.962H134.041L135.999 133.921Z" fill="#B6B6B6"/><path d="M142.434 133.921H139.528L137.518 138.962H140.476L142.434 133.921Z" fill="#B6B6B6"/><path d="M148.869 133.921H145.963L143.954 138.962H146.911L148.869 133.921Z" fill="#B6B6B6"/><path d="M155.305 133.921H152.399L150.389 138.962H153.347L155.305 133.921Z" fill="#B6B6B6"/><path d="M161.74 133.921H158.834L156.824 138.962H159.782L161.74 133.921Z" fill="#B6B6B6"/><path d="M168.175 133.921H165.269L163.26 138.962H166.217L168.175 133.921Z" fill="#B6B6B6"/><path d="M174.611 133.921H171.705L169.695 138.962H172.653L174.611 133.921Z" fill="#B6B6B6"/><path d="M181.046 133.921H178.14L176.131 138.962H179.088L181.046 133.921Z" fill="#B6B6B6"/><path d="M187.482 133.921H184.576L182.566 138.962H185.524L187.482 133.921Z" fill="#B6B6B6"/><path d="M193.917 133.921H191.011L189.001 138.962H191.959L193.917 133.921Z" fill="#B6B6B6"/><path d="M200.352 133.921H197.446L195.437 138.962H198.394L200.352 133.921Z" fill="#B6B6B6"/><path d="M206.788 133.921H203.882L201.872 138.962H204.83L206.788 133.921Z" fill="#B6B6B6"/><path d="M213.223 133.921H210.317L208.307 138.962H211.265L213.223 133.921Z" fill="#B6B6B6"/><path d="M219.658 133.921H216.753L214.743 138.962H217.701L219.658 133.921Z" fill="#B6B6B6"/><path d="M226.094 133.921H223.188L221.178 138.962H224.136L226.094 133.921Z" fill="#B6B6B6"/><path d="M232.529 133.921H229.623L227.614 138.962H230.571L232.529 133.921Z" fill="#B6B6B6"/><path d="M238.965 133.921H236.059L234.049 138.962H237.007L238.965 133.921Z" fill="#B6B6B6"/><path d="M245.4 133.921H242.494L240.484 138.962H243.442L245.4 133.921Z" fill="#B6B6B6"/><path d="M251.835 133.921H248.929L246.92 138.962H249.877L251.835 133.921Z" fill="#B6B6B6"/><path d="M258.271 133.921H255.365L253.355 138.962H256.313L258.271 133.921Z" fill="#B6B6B6"/><path d="M264.706 133.921H261.8L259.79 138.962H262.748L264.706 133.921Z" fill="#B6B6B6"/><path d="M271.141 133.921H268.235L266.226 138.962H269.184L271.141 133.921Z" fill="#B6B6B6"/><path d="M277.577 133.921H274.671L272.661 138.962H275.619L277.577 133.921Z" fill="#B6B6B6"/></svg>',
	},
];
export { separatorPresets };
