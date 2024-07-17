/**
 * Zip AI - React Icon Renderers.
 *
 * All Exported Constants are alplabetically arranged.
 */
import { createElement as el } from '@wordpress/element';

// --------- Common Constants --------- //

// These are common properties used by all icons
const commonProperties = {
	// Choose from the common SVG sizes.
	size: {
		big: 32,
		regular: 24,
		small: 16,
	},
	// Choose from the common stroke thicknesses.
	stroke: {
		thick: 2,
		regular: 1.4,
		thin: 1.2,
		one: 1,
	},
	// Choose from the common colors.
	color: {
		currentColor: 'currentColor',
		none: 'none',
		white: '#fff',
	},
	// Spread this for rounded stroke vertices.
	rounded: {
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
	},
};

// These are the common formats used for our SVGs.
const format = {
	// Spread these values to get all the required properties for an outlined icon.
	outlined: {
		stroke: commonProperties.color.currentColor,
		strokeWidth: commonProperties.stroke.regular,
		fill: commonProperties.color.none,
		...commonProperties.rounded,
	},
	// Spread these values to get all the required properties for a filled icon.
	filled: {
		fill: commonProperties.color.currentColor,
		stroke: commonProperties.color.none,
	},
};

// --------- Logo Renderers --------- //

// The WordPress Logo.
export const WordPressLogo = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 29 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'g',
		{
			clipPath: 'url(#clip_spec_ai_wordpress_logo)',
		},
		el(
			'path',
			{
				d: 'M28.2 14C28.2 6.272 21.9279 0 14.2 0C6.47195 0 0.199951 6.272 0.199951 14C0.199951 21.728 6.47195 28 14.2 28C21.9279 28 28.2 21.728 28.2 14ZM14.2 1.414C21.158 1.414 26.7859 7.042 26.7859 14C26.7859 20.958 21.158 26.586 14.2 26.586C7.24195 26.586 1.61395 20.958 1.61395 14C1.61395 7.042 7.24195 1.414 14.2 1.414ZM11.414 20.748L7.14395 9.254C7.82995 9.212 8.61395 9.142 8.61395 9.142C9.21595 9.072 9.14595 7.728 8.52995 7.756C8.52995 7.756 6.72395 7.896 5.54795 7.896C5.33795 7.896 5.08595 7.896 4.81995 7.882C6.83595 4.844 10.28 2.842 14.2 2.842C17.1259 2.842 19.786 3.948 21.774 5.768C20.934 5.656 19.744 6.258 19.744 7.756C19.744 8.68 20.276 9.464 20.85 10.388C21.284 11.144 21.55 12.096 21.55 13.482C21.55 15.358 19.7719 19.754 19.7719 19.754L15.978 9.254C16.65 9.212 17.028 9.03 17.028 9.03C17.63 8.96 17.56 7.49 16.958 7.518C16.958 7.518 15.138 7.672 13.962 7.672C12.87 7.672 11.008 7.518 11.008 7.518C10.406 7.49 10.336 9.002 10.938 9.03L12.114 9.142L13.682 13.398L11.414 20.748ZM19.842 23.758L23.496 14C23.496 14 24.434 11.634 24.042 8.666C24.924 10.262 25.358 12.054 25.358 14C25.358 18.144 23.174 21.812 19.842 23.758ZM3.95195 9.478L9.29995 24.15C5.56195 22.33 3.04195 18.438 3.04195 14C3.04195 12.376 3.32195 10.878 3.95195 9.478ZM14.382 15.82L17.588 24.57C16.538 24.948 15.39 25.158 14.2 25.158C13.192 25.158 12.226 25.004 11.316 24.738L14.382 15.82Z',
				...format.filled,
				...childParams,
			},
		),
	),
	el(
		'defs',
		null,
		el(
			'clipPath',
			{
				id: 'clip_spec_ai_wordpress_logo',
			},
			el(
				'rect',
				{
					width: 28,
					height: 28,
					fill: commonProperties.color.white,
					transform: 'translate(0.199951)',
				},
			),
		),
	),
);

// The ZipWP Logo.
export const ZipWPLogo = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.big,
		height: commonProperties.size.big,
		viewBox: '0 0 30 30',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM26.1432 10.7265C26.1459 10.7262 26.1487 10.7259 26.1514 10.7256L26.1349 10.7269C26.1377 10.7267 26.1405 10.7266 26.1432 10.7265ZM26.1432 10.7265C21.9125 11.174 19.2481 11.1414 18.4509 11.1007C18.3687 11.1071 18.3417 10.9723 18.4048 10.9331C20.7044 9.21451 21.5524 7.98503 21.7865 7.59037C21.8319 7.53551 21.776 7.45429 21.7102 7.45939C20.6151 7.42458 13.7358 7.29097 9.63266 7.95161C6.00268 8.5242 3.84948 11.2753 3.86235 14.851C3.87523 18.4266 6.09129 21.3863 9.29387 22.1304C17.4168 23.9986 22.9334 18.0944 23.8439 17.0311C23.9057 16.975 23.8485 16.8768 23.7649 16.8661L19.5924 16.8476C19.4937 16.8553 19.4654 16.7035 19.5615 16.6618C24.5276 14.3256 25.9654 11.5273 26.2442 10.8553C26.2709 10.7871 26.2208 10.7249 26.1432 10.7265Z',
			...format.filled,
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			...childParams,
		}
	),
);

// --------- Icon Renderers - Alphabetically Arranged --------- //

// The AI Sparkle Icon - Three four-pointed stars.
export const AiSparkleIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M3.33333 2V4.66667M2 3.33333H4.66667M4 11.3333V14M2.66667 12.6667H5.33333M8.66667 2L10.1905 6.57143L14 8L10.1905 9.42857L8.66667 14L7.14286 9.42857L3.33333 8L7.14286 6.57143L8.66667 2Z',
			...format.outlined,
			...childParams,
		},
	),
);

// The Blocks Icon - Four squares in a grid.
export const BlocksIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 29 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M22.9111 2.80005C24.2857 2.80005 25.4 3.8991 25.4 5.25484L25.4 9.4453C25.4 10.801 24.2857 11.9001 22.9111 11.9001H19.1778C17.8032 11.9001 16.6889 10.801 16.6889 9.4453L16.6889 5.25484C16.6889 3.8991 17.8032 2.80005 19.1778 2.80005L22.9111 2.80005Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M5.48889 2.80005C4.11431 2.80005 3 3.8991 3 5.25484L3.00001 9.4453C3.00001 10.801 4.11432 11.9001 5.4889 11.9001H9.22223C10.5968 11.9001 11.7111 10.801 11.7111 9.4453L11.7111 5.25484C11.7111 3.8991 10.5968 2.80005 9.22222 2.80005L5.48889 2.80005Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M22.9111 16.1001C24.2857 16.1001 25.4 17.1991 25.4 18.5549V22.7453C25.4 24.101 24.2857 25.2001 22.9111 25.2001H19.1778C17.8032 25.2001 16.6889 24.101 16.6889 22.7453L16.6889 18.5549C16.6889 17.1991 17.8032 16.1001 19.1778 16.1001H22.9111Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M5.4889 16.1001C4.11432 16.1001 3.00001 17.1991 3.00001 18.5549L3.00001 22.7453C3.00001 24.101 4.11433 25.2001 5.4889 25.2001H9.22223C10.5968 25.2001 11.7111 24.101 11.7111 22.7453L11.7111 18.5549C11.7111 17.1991 10.5968 16.1001 9.22223 16.1001H5.4889Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Check Icon - A simple tick mark.
export const CheckIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 24 24',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M4.5 12.75l6 6 9-13.5',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Clipboard Check Icon - A sheet on top of a clipboard with a tick mark.
export const ClipboardCheckIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M7.56635 2.55746C7.52322 2.69734 7.5 2.84596 7.5 3C7.5 3.27614 7.72386 3.5 8 3.5H11C11.2761 3.5 11.5 3.27614 11.5 3C11.5 2.84596 11.4768 2.69734 11.4337 2.55746M7.56635 2.55746C7.75517 1.94505 8.32561 1.5 9 1.5H10C10.6744 1.5 11.2448 1.94505 11.4337 2.55746M7.56635 2.55746C7.31591 2.57239 7.06625 2.59019 6.81739 2.61085C6.06333 2.67344 5.5 3.31549 5.5 4.07215V5.5M11.4337 2.55746C11.6841 2.57239 11.9338 2.59019 12.1826 2.61085C12.9367 2.67344 13.5 3.31549 13.5 4.07214V11C13.5 11.8284 12.8284 12.5 12 12.5H10.5M5.5 5.5H3.25C2.83579 5.5 2.5 5.83579 2.5 6.25V13.75C2.5 14.1642 2.83579 14.5 3.25 14.5H9.75C10.1642 14.5 10.5 14.1642 10.5 13.75V12.5M5.5 5.5H9.75C10.1642 5.5 10.5 5.83579 10.5 6.25V12.5M5 10.5L6 11.5L8 9',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Clock Icon - A simple clock icon.
export const ClockIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 24 24',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Close Icon - A simple 'x' mark.
export const CloseIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M4 12L12 4M4 4L12 12',
			...format.outlined,
			...childParams,
		},
	),
);

// The Copy Icon - Two sheets of paper stacked, with a corner of the topmost paper bent.
export const CopyIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 24 24',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Code Block Icon - A square with opening and closing angular brackets.
export const CodeBlockIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M11.1998 17.5L7.6998 14L11.1998 10.5M16.7998 10.5L20.2998 14L16.7998 17.5M5.5998 25.2C4.05341 25.2 2.7998 23.9464 2.7998 22.4V5.60005C2.7998 4.05365 4.05341 2.80005 5.5998 2.80005H22.3998C23.9462 2.80005 25.1998 4.05365 25.1998 5.60005V22.4C25.1998 23.9464 23.9462 25.2 22.3998 25.2H5.5998Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Edit Icon - An icon of a square with a pencil on it.
export const EditIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M7.36484 2.23437H3.36484C2.03936 2.23437 0.964844 3.30889 0.964844 4.63437V12.6344C0.964844 13.9599 2.03936 15.0344 3.36484 15.0344H11.3648C12.6903 15.0344 13.7648 13.9599 13.7648 12.6344L13.7648 8.63441M4.96484 11.0344L7.8755 10.4479C8.03002 10.4168 8.1719 10.3407 8.28332 10.2292L14.7991 3.70982C15.1115 3.39725 15.1113 2.8906 14.7986 2.57829L13.4184 1.19957C13.1058 0.887393 12.5994 0.887605 12.2871 1.20005L5.77069 7.72008C5.65948 7.83135 5.58354 7.97294 5.55238 8.12714L4.96484 11.0344Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Exclaimation Mark Icon - An exclaimation mark in a circle.
export const ExclamationMarkIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 20 20',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(	'g', { clipPath: 'url(#zip_ai_svg_clip0_4606_13338)' },
		el(
			'path',
			{
				d: 'M10.0013 6.66675V10.0001M10.0013 13.3334H10.0096M18.3346 10.0001C18.3346 14.6025 14.6037 18.3334 10.0013 18.3334C5.39893 18.3334 1.66797 14.6025 1.66797 10.0001C1.66797 5.39771 5.39893 1.66675 10.0013 1.66675C14.6037 1.66675 18.3346 5.39771 18.3346 10.0001Z',
				...format.outlined,
				...childParams,
			}
		),
	),
	el( 'defs', {},
		el( 'clipPath', { id: 'zip_ai_svg_clip0_4606_13338' },
			el( 'rect', {
				width: 20,
				height: 20,
				fill: commonProperties.color.white,
			} ),
		),
	),
);

// The External Link Icon - An arrow exiting a square from the top-right.
export const ExternalLinkIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 12 12',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M5 3H3C2.44772 3 2 3.44772 2 4V9C2 9.55228 2.44772 10 3 10H8C8.55228 10 9 9.55228 9 9V7M7 2H10M10 2V5M10 2L5 7',
			...format.outlined,
			...childParams,
		},
	),
);

// The Checkmark Badge Icon - A checkmark in a flower-like badge.
export const CheckmarkBadgeIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 21 21',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M16.7626 13.1523C17.7124 12.6487 18.3594 11.6499 18.3594 10.5C18.3594 9.35007 17.7124 8.35126 16.7626 7.84771C17.0781 6.82002 16.8294 5.65625 16.0162 4.84312C15.2031 4.03 14.0393 3.78122 13.0117 4.09679C12.5081 3.14698 11.5093 2.5 10.3594 2.5C9.20944 2.5 8.21062 3.14699 7.70708 4.09681C6.6794 3.78126 5.51564 4.03004 4.70252 4.84316C3.8894 5.65628 3.64062 6.82003 3.95618 7.84771C3.00636 8.35126 2.35938 9.35007 2.35938 10.5C2.35938 11.6499 3.00636 12.6487 3.95618 13.1523C3.64061 14.18 3.88939 15.3437 4.70252 16.1569C5.51564 16.97 6.6794 17.2188 7.70709 16.9032C8.21064 17.853 9.20945 18.5 10.3594 18.5C11.5093 18.5 12.5081 17.853 13.0117 16.9032C14.0393 17.2187 15.2031 16.97 16.0162 16.1568C16.8293 15.3437 17.0781 14.18 16.7626 13.1523ZM14.2159 8.69113C14.4596 8.35614 14.3855 7.88708 14.0505 7.64345C13.7155 7.39982 13.2465 7.47388 13.0028 7.80887L9.51907 12.599L7.63971 10.7197C7.34681 10.4268 6.87194 10.4268 6.57904 10.7197C6.28615 11.0126 6.28615 11.4874 6.57904 11.7803L9.07905 14.2803C9.23414 14.4354 9.44937 14.5149 9.66804 14.4977C9.88671 14.4805 10.0869 14.3685 10.2159 14.1911L14.2159 8.69113Z',
			...format.filled,
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			...childParams,
		},
	),
);


// The Layout Icon - A square with a header, sidebar, and footer content.
export const LayoutIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 29 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M2.2002 4.36921C2.2002 3.06073 3.27471 2 4.6002 2H23.8002C25.1257 2 26.2002 3.06073 26.2002 4.36921V23.6308C26.2002 24.9393 25.1257 26 23.8002 26H4.6002C3.27471 26 2.2002 24.9393 2.2002 23.6308V4.36921Z',
			...format.outlined,
			strokeWidth: 1.7,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M5.02918 6.12988C5.02918 5.47564 5.56643 4.94528 6.22918 4.94528H22.1714C22.8341 4.94528 23.3714 5.47564 23.3714 6.12988V9.13253C23.3714 9.78677 22.8341 10.3171 22.1714 10.3171H6.22918C5.56643 10.3171 5.02918 9.78677 5.02918 9.13253V6.12988Z',
			...format.outlined,
			strokeWidth: 1.7,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M9.75183 12.9683C10.4146 12.9683 10.9518 13.4986 10.9518 14.1529L10.9518 22.0893C10.9518 22.7435 10.4146 23.2739 9.75183 23.2739H6.2291C5.56636 23.2739 5.0291 22.7435 5.0291 22.0893L5.0291 14.1529C5.0291 13.4986 5.56636 12.9683 6.2291 12.9683H9.75183Z',
			...format.outlined,
			strokeWidth: 1.7,
			...childParams,
		},
	),
	el(
		'path',
		{
			d: 'M22.1714 12.9683C22.8341 12.9683 23.3714 13.4986 23.3714 14.1529V22.0893C23.3714 22.7435 22.8341 23.2739 22.1714 23.2739H14.6509C13.9881 23.2739 13.4509 22.7435 13.4509 22.0893V14.1529C13.4509 13.4986 13.9881 12.9683 14.6509 12.9683H22.1714Z',
			...format.outlined,
			strokeWidth: 1.7,
			...childParams,
		},
	),
);

// The Page Icon - A rounded square with a title area and a content area with lines for content.
export const PageIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 29 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M3.7 9.10005H24.7M21.2 14H7.2M15.6 19.6H7.2M7.2 25.2H21.2C23.5196 25.2 25.4 23.3196 25.4 21V7.00005C25.4 4.68045 23.5196 2.80005 21.2 2.80005H7.2C4.8804 2.80005 3 4.68045 3 7.00005V21C3 23.3196 4.8804 25.2 7.2 25.2Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thick,
			...childParams,
		},
	),
);

// The Regenerate Icon - Two curved arrows forming a circle.
export const RegenerateIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M10.6807 6.23235H14.0091V6.23117M1.98828 13.0963V9.76791M1.98828 9.76791L5.31671 9.76791M1.98828 9.76791L4.10888 11.8899C4.76923 12.5515 5.60726 13.0534 6.5751 13.3127C9.50916 14.0989 12.525 12.3577 13.3112 9.42365M2.68601 6.57664C3.47219 3.64258 6.48804 1.90137 9.42211 2.68755C10.3899 2.94688 11.228 3.44883 11.8883 4.11042L14.0091 6.23117M14.0091 2.90395V6.23117',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Size Expand Icon - Four arrows pointing outward from the center.
export const SizeExpandIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 14 14',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Size Shrink Icon - Four arrows pointing inward to the center.
export const SizeShrinkIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M6 6L6 3M6 6L3 6M6 6L2.5 2.5M6 10L6 13M6 10L3 10M6 10L2.5 13.5M10 6H13M10 6V3M10 6L13.5 2.5M10 10H13M10 10L10 13M10 10L13.5 13.5',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		},
	),
);

// The Small Arrow Icons - The left and right wedge icons.
export const SmallArrowIcons = ( svgParams = {}, childParams = {} ) => ( {
	left: el(
		'svg',
		{
			width: commonProperties.size.small,
			height: commonProperties.size.small,
			viewBox: '0 0 16 16',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'path',
			{
				d: 'M9.06 4L10 4.94L6.94667 8L10 11.06L9.06 12L5.06 8L9.06 4Z',
				...format.outlined,
				strokeWidth: commonProperties.stroke.thin,
				...childParams,
			},
		),
	),
	right: el(
		'svg',
		{
			width: commonProperties.size.small,
			height: commonProperties.size.small,
			viewBox: '0 0 16 16',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'path',
			{
				d: 'M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z',
				...format.outlined,
				strokeWidth: commonProperties.stroke.thin,
				...childParams,
			},
		),
	),
} );

// The Smiley Icon - A simple smiley face.
export const SmileyIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M10.1213 10.1213C9.84276 10.3999 9.51204 10.6209 9.14806 10.7717C8.78408 10.9224 8.39397 11 8 11C7.60603 11 7.21592 10.9224 6.85194 10.7717C6.48796 10.6209 6.15724 10.3999 5.87867 10.1213M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8ZM6.5 6.5C6.5 6.776 6.388 7 6.25 7C6.112 7 6 6.776 6 6.5C6 6.224 6.112 6 6.25 6C6.388 6 6.5 6.224 6.5 6.5ZM6.25 6.5H6.25533V6.51H6.25V6.5ZM10 6.5C10 6.776 9.888 7 9.75 7C9.612 7 9.5 6.776 9.5 6.5C9.5 6.224 9.612 6 9.75 6C9.888 6 10 6.224 10 6.5ZM9.75 6.5H9.75533V6.51H9.75V6.5Z',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		}
	)
);

// The Translate Icon - A Japanese character next to an 'A'.
export const TranslateIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.small,
		height: commonProperties.size.small,
		viewBox: '0 0 16 16',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'path',
		{
			d: 'M7 14L10.5 6.5L14 14M8 12H13M2 3.74733C3.32693 3.58221 4.66283 3.49961 6 3.5M6 3.5C6.74667 3.5 7.48867 3.52533 8.22267 3.576M6 3.5V2M8.22267 3.576C7.45067 7.10533 5.12667 10.0533 2 11.668M8.22267 3.576C8.82 3.61667 9.41267 3.674 10 3.74733M6.94067 9.41067C5.84731 8.29908 4.98076 6.98533 4.38933 5.54267',
			...format.outlined,
			strokeWidth: commonProperties.stroke.thin,
			...childParams,
		}
	)
);

// The Wand Icon - A wand tilting to the top-left, with lines shining out of the top end.
export const WandIcon = ( svgParams = {}, childParams = {} ) => el(
	'svg',
	{
		width: commonProperties.size.regular,
		height: commonProperties.size.regular,
		viewBox: '0 0 28 28',
		fill: commonProperties.color.none,
		...svgParams,
	},
	el(
		'g',
		{
			clipPath: 'url(#clip_spec_ai_wand)',
		},
		el(
			'path',
			{
				d: 'M15.4712 1.71924C15.4712 0.917724 14.8013 0.23584 13.9998 0.23584C13.1982 0.23584 12.5164 0.917724 12.5164 1.71924V5.36791C12.5164 6.16943 13.1982 6.83935 13.9998 6.83935C14.8013 6.83935 15.4712 6.16943 15.4712 5.36791V1.71924ZM19.1558 6.83935C18.6054 7.40161 18.6054 8.35865 19.1798 8.93286C19.73 9.48316 20.6989 9.48316 21.2612 8.90893L23.7614 6.40869C24.3237 5.8584 24.3118 4.88941 23.7376 4.31518C23.1873 3.75293 22.2183 3.77685 21.656 4.33911L19.1558 6.83935ZM6.72632 8.90893C7.28858 9.48316 8.25757 9.48316 8.80786 8.93286C9.38208 8.35865 9.38208 7.40161 8.8318 6.83935L6.34351 4.33911C5.78125 3.77685 4.81226 3.75293 4.26197 4.31518C3.68774 4.87744 3.68774 5.84643 4.23805 6.39672L6.72632 8.90893ZM23.283 26.1235C24.0007 26.8532 25.2209 26.8413 25.9267 26.1235C26.6327 25.3937 26.6327 24.2095 25.9267 23.4797L14.574 12.0432C13.8562 11.3254 12.636 11.3254 11.9302 12.0432C11.2124 12.773 11.2244 13.9573 11.9302 14.675L23.283 26.1235ZM1.63013 12.5935C0.828614 12.5935 0.158691 13.2634 0.158691 14.0649C0.158691 14.8665 0.828614 15.5364 1.63013 15.5364H5.27881C6.08032 15.5364 6.76221 14.8665 6.76221 14.0649C6.76221 13.2634 6.08032 12.5935 5.27881 12.5935H1.63013ZM26.3574 15.5364C27.1589 15.5364 27.8409 14.8665 27.8409 14.0649C27.8409 13.2634 27.1589 12.5935 26.3574 12.5935H22.7207C21.9192 12.5935 21.2372 13.2634 21.2372 14.0649C21.2372 14.8665 21.9192 15.5364 22.7207 15.5364H26.3574ZM16.8469 17.7375L13.1145 13.9932C12.8154 13.7061 12.7078 13.3352 13.0068 13.0481C13.27 12.7849 13.6528 12.8806 13.9519 13.1797L17.6604 16.9002L16.8469 17.7375ZM4.23805 21.6972C3.67579 22.2595 3.66382 23.2285 4.21411 23.7788C4.77636 24.353 5.74536 24.3651 6.30761 23.8147L8.80786 21.3145C9.37011 20.7522 9.38208 19.7951 8.8318 19.2328C8.26954 18.6706 7.30055 18.6587 6.73829 19.209L4.23805 21.6972ZM15.4712 22.774C15.4712 21.9725 14.8013 21.2905 13.9998 21.2905C13.1982 21.2905 12.5164 21.9725 12.5164 22.774V26.4107C12.5164 27.2121 13.1982 27.8941 13.9998 27.8941C14.8013 27.8941 15.4712 27.2121 15.4712 26.4107V22.774Z',
				...format.filled,
				...childParams,
			},
		),
	),
	el(
		'defs',
		null,
		el(
			'clipPath',
			{
				id: 'clip_spec_ai_wand',
			},
			el(
				'rect',
				{
					width: 28,
					height: 28,
					fill: commonProperties.color.white,
					...childParams,
				},
			),
		),
	),
);

// The Translucent Icon Set.
export const translucentSet = {

	// The Translate Icon - A folded page with A in the front and a Japanese character behind.
	translateIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: commonProperties.size.regular,
			height: commonProperties.size.regular,
			viewBox: '0 0 20 20',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'g',
			{
				clipPath: 'url(#zip_ai_translucent_set_translate_clip)',
			},
			el(
				'mask',
				{
					id: 'zip_ai_translucent_set_translate_mask',
					style: { maskType: 'luminance' },
					maskUnits: 'userSpaceOnUse',
					x: 0,
					y: 0,
					width: 20,
					height: 20,
				},
				el(
					'path',
					{
						d: 'M20 0H0V20H20V0Z',
						fill: commonProperties.color.none,
					},
				),
			),
			el(
				'g',
				{
					mask: 'url(#zip_ai_translucent_set_translate_mask)',
				},
				el(
					'path',
					{
						d: 'M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z',
						...format.filled,
						fill: commonProperties.color.white,
					},
				),
			),
			el(
				'path',
				{
					d: 'M15.2118 6.56641H9.524L10.3498 13.3547L8.85156 15.1588L9.096 15.5257H15.2118L15.6702 15.1588V6.99453L15.2118 6.56641Z',
					...format.filled,
					fillOpacity: 0.25,
				},
			),
			el(
				'path',
				{
					d: 'M8.60323 10.2789C8.58423 10.1838 7.92954 6.91022 7.90873 6.80647C7.87635 6.64416 7.73379 6.52734 7.56829 6.52734H6.87379C6.70829 6.52734 6.56573 6.64416 6.53329 6.80647C6.51223 6.91197 5.85685 10.1888 5.83884 10.2788C5.80123 10.467 5.9232 10.6498 6.11124 10.6875C6.29929 10.7251 6.48223 10.6031 6.51985 10.415L6.74179 9.30528H7.70029L7.92223 10.4151C7.95985 10.6032 8.14292 10.7251 8.33085 10.6875C8.51885 10.6498 8.64085 10.467 8.60323 10.2789ZM6.88067 8.61078L7.15848 7.22184H7.2836L7.56142 8.61078H6.88067Z',
					...format.filled,
				},
			),
			el(
				'path',
				{
					d: 'M14.1681 9.30583H13.1264V8.95858C13.1264 8.76683 12.9709 8.61133 12.7792 8.61133C12.5874 8.61133 12.4319 8.76683 12.4319 8.95858V9.30583H11.3902C11.1984 9.30583 11.043 9.46127 11.043 9.65308C11.043 9.84483 11.1984 10.0003 11.3902 10.0003H11.4742C11.6721 10.6395 11.97 11.1301 12.2978 11.5233C12.031 11.7673 11.761 11.9675 11.5205 12.1598C11.3708 12.2796 11.3465 12.4981 11.4663 12.6479C11.5862 12.7977 11.8047 12.8218 11.9543 12.7021C12.1962 12.5086 12.486 12.2936 12.7792 12.0246C13.0725 12.2938 13.3628 12.5092 13.604 12.7021C13.7537 12.8219 13.9722 12.7976 14.092 12.6479C14.2118 12.4981 14.1875 12.2796 14.0378 12.1598C13.7979 11.9679 13.5276 11.7676 13.2605 11.5233C13.5883 11.1301 13.8862 10.6395 14.0841 10.0003H14.1681C14.3599 10.0003 14.5153 9.84483 14.5153 9.65308C14.5153 9.46127 14.3599 9.30583 14.1681 9.30583ZM12.7792 11.013C12.5575 10.7347 12.3581 10.4026 12.2078 9.99802H13.3505C13.2002 10.4026 13.0008 10.7347 12.7792 11.013Z',
					...format.filled,
				},
			),
			el(
				'path',
				{
					d: 'M14.885 6.18079H9.87539L9.72657 4.98671C9.66151 4.46651 9.21714 4.07422 8.69289 4.07422H5.11594C4.54153 4.07422 4.07422 4.54153 4.07422 5.11593V12.7784C4.07422 13.3527 4.54153 13.82 5.11594 13.82H8.04395L8.19089 15.0142C8.25576 15.5333 8.70014 15.9267 9.22458 15.9267H14.885C15.4593 15.9267 15.9266 15.4594 15.9266 14.8849V7.22254C15.9266 6.6481 15.4593 6.18079 14.885 6.18079ZM5.11594 13.1256C4.92447 13.1256 4.7687 12.9698 4.7687 12.7784V5.11593C4.7687 4.92447 4.92447 4.76869 5.11594 4.76869H8.69289C8.86764 4.76869 9.01576 4.89944 9.03745 5.07274C9.08776 5.47637 9.99132 12.7252 10.0413 13.1256H5.11594ZM8.8597 14.7634L8.74364 13.82H9.67526L8.8597 14.7634ZM15.2321 14.8849C15.2321 15.0764 15.0764 15.2322 14.885 15.2322H9.37251L10.6944 13.7031C10.7621 13.6267 10.7924 13.5254 10.7784 13.4247L9.96195 6.87529H14.885C15.0764 6.87529 15.2321 7.03104 15.2321 7.22254V14.8849Z',
					...format.filled,
				},
			),
		),
		el(
			'defs',
			{},
			el(
				'clipPath',
				{
					id: 'zip_ai_translucent_set_translate_clip',
				},
				el(
					'rect',
					{
						width: 20,
						height: 20,
						fill: commonProperties.color.white,
					},
				),
			),
		),
	),

	// The Pencil Icon - a pencil pointing down-left.
	pencilIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: commonProperties.size.regular,
			height: commonProperties.size.regular,
			viewBox: '0 0 20 20',
			fill: 'none',
			...svgParams,
		},
		el(
			'g',
			{
				clipPath: 'url(#zip_ai_translucent_set_pencil_clip)',
			},
			el(
				'mask',
				{
					id: 'zip_ai_translucent_set_pencil_mask',
					style: { maskType: 'luminance' },
					maskUnits: 'userSpaceOnUse',
					x: 0,
					y: 0,
					width: 20,
					height: 20,
				},
				el(
					'path',
					{
						d: 'M20 0H0V20H20V0Z',
						fill: commonProperties.color.white,
					},
				),
			),
			el(
				'g',
				{
					mask: 'url(#zip_ai_translucent_set_pencil_mask)',
				},
				el(
					'path',
					{
						d: 'M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z',
						fill: commonProperties.color.none,
					},
				),
			),
			el(
				'path',
				{
					d: 'M10.8966 6.22266L5.72334 11.3959C5.59051 11.5288 5.52409 11.5952 5.48042 11.6768C5.43676 11.7583 5.41833 11.8505 5.38149 12.0347L4.77038 15.0903C4.7288 15.2982 4.70801 15.4021 4.76714 15.4612C4.82627 15.5203 4.93021 15.4995 5.13809 15.458L8.19368 14.8468C8.37787 14.81 8.46999 14.7916 8.55156 14.7479C8.63318 14.7043 8.69962 14.6378 8.83243 14.505L14.0057 9.33172L10.8966 6.22266Z',
					...format.filled,
					fillOpacity: 0.25,
				},
			),
			el(
				'path',
				{
					d: 'M8.34623 14.6906C8.22654 14.7584 8.09511 14.791 7.95842 14.825C7.94836 14.8275 7.93823 14.83 7.92811 14.8326L5.67534 15.3958L5.6602 15.3995C5.65418 15.401 5.64809 15.4026 5.64196 15.4041C5.54567 15.4282 5.43676 15.4555 5.3441 15.4646C5.24089 15.4747 5.05387 15.4738 4.90307 15.323C4.75227 15.1721 4.75134 14.9851 4.76144 14.882C4.7705 14.7893 4.79779 14.6803 4.82193 14.5841C4.82346 14.5779 4.82499 14.5718 4.82649 14.5658L5.39347 12.2979C5.396 12.2878 5.39851 12.2777 5.40101 12.2676C5.43499 12.1309 5.46765 11.9995 5.5354 11.8798C5.60315 11.7601 5.69905 11.6645 5.79882 11.565C5.80616 11.5577 5.81353 11.5503 5.82091 11.543L11.6877 5.67624L11.7044 5.65948C11.8984 5.46552 12.0697 5.29411 12.2265 5.17453C12.3964 5.04491 12.5923 4.94141 12.8367 4.94141C13.0811 4.94141 13.277 5.04491 13.4469 5.17453C13.6037 5.2941 13.775 5.46551 13.969 5.65947L13.9857 5.67624L14.5498 6.24029L14.5665 6.25708C14.7605 6.45096 14.9319 6.62239 15.0515 6.77908C15.1811 6.94896 15.2846 7.14496 15.2846 7.38933C15.2846 7.63377 15.1811 7.82971 15.0515 7.99958C14.9319 8.15633 14.7605 8.32771 14.5665 8.52164L14.5498 8.53839L8.68304 14.4051C8.67567 14.4125 8.66829 14.4199 8.66098 14.4272C8.56154 14.527 8.46586 14.6229 8.34623 14.6906ZM8.34623 14.6906L8.16148 14.3643',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M10.8945 6.22266L14.0037 9.33173',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
		),
		el(
			'defs',
			{},
			el(
				'clipPath',
				{
					id: 'zip_ai_translucent_set_pencil_clip',
				},
				el(
					'rect',
					{
						width: 20,
						height: 20,
						fill: commonProperties.color.white,
					},
				),
			),
		),
	),

	// The Code Icon - A slash between two angular brackets.
	codeIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: commonProperties.size.regular,
			height: commonProperties.size.regular,
			viewBox: '0 0 20 20',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'g',
			{
				clipPath: 'url(#zip_ai_translucent_set_code_clip)',
			},
			el(
				'mask',
				{
					id: 'zip_ai_translucent_set_code_mask',
					style: { maskType: 'luminance' },
					maskUnits: 'userSpaceOnUse',
					x: 0,
					y: 0,
					width: 20,
					height: 20,
				},
				el(
					'path',
					{
						d: 'M20 0H0V20H20V0Z',
						fill: commonProperties.color.white,
					},
				),
			),
			el(
				'g',
				{
					mask: 'url(#zip_ai_translucent_set_code_mask)',
				},
				el(
					'path',
					{
						d: 'M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z',
						fill: commonProperties.color.none,
					},
				),
			),
			el(
				'path',
				{
					d: 'M7.10807 7.05957L3.66406 9.86632L7.10807 12.6731',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M12.8945 12.6731L16.3385 9.86632L12.8945 7.05957',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M11.07 5.93262L8.92969 14.0682',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			)
		),
		el(
			'defs',
			{},
			el(
				'clipPath',
				{
					id: 'zip_ai_translucent_set_code_clip',
				},
				el(
					'rect',
					{
						width: 20,
						height: 20,
						fill: commonProperties.color.white,
					},
				),
			),
		),
	),

	// The Layers Icon - A stack of isometric cards one on top of another.
	layersIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: commonProperties.size.regular,
			height: commonProperties.size.regular,
			viewBox: '0 0 20 20',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'path',
			{
				d: 'M9.64707 4.57713L9.64707 4.57713L9.64911 4.57618C9.86656 4.47461 10.11 4.47461 10.3275 4.57618L10.3274 4.57618L10.3295 4.57713L15.4525 6.94209C15.4714 6.95246 15.4861 6.9665 15.4945 6.97869C15.4977 6.98334 15.4993 6.98653 15.4999 6.98825C15.4995 7.00094 15.4961 7.01005 15.4901 7.01903C15.4829 7.02978 15.4704 7.04221 15.4525 7.05205L10.3295 9.41701L10.3295 9.417L10.3275 9.41795C10.11 9.51953 9.86656 9.51953 9.64911 9.41795L9.64707 9.41701L4.52488 7.05241C4.51721 7.04796 4.51352 7.04351 4.51089 7.03912C4.50777 7.03393 4.5 7.01825 4.5 6.98534C4.5 6.97323 4.50311 6.96473 4.50697 6.95851C4.51044 6.9529 4.51595 6.94688 4.52487 6.94173L9.64707 4.57713Z',
				...format.outlined,
				strokeWidth: commonProperties.stroke.one,
				fill: commonProperties.color.currentColor,
				fillOpacity: 0.25,
			},
		),
		el(
			'path',
			{
				d: 'M15.6719 9.49569C15.8594 9.58953 16 9.77721 16 9.98836C16 10.223 15.8594 10.4106 15.6719 10.5045L10.5391 12.874C10.1875 13.0382 9.78906 13.0382 9.4375 12.874L4.30469 10.5045C4.11719 10.4106 4 10.223 4 9.98836C4 9.77721 4.11719 9.58953 4.30469 9.49569L5.57031 8.90918L9.13281 10.5514C9.67188 10.8095 10.3047 10.8095 10.8438 10.5514L14.4062 8.90918L15.6719 9.49569Z',
				...format.filled,
				fillOpacity: 0.25,
			},
		),
		el(
			'path',
			{
				d: 'M14.4062 11.9121L10.8438 13.5543C10.3047 13.8124 9.67188 13.8124 9.13281 13.5543L5.57031 11.9121L4.30469 12.4986C4.11719 12.5925 4 12.7801 4 12.9913C4 13.2259 4.11719 13.4136 4.30469 13.5074L9.4375 15.8769C9.78906 16.0411 10.1875 16.0411 10.5391 15.8769L15.6719 13.5074C15.8594 13.4136 16 13.2259 16 12.9913C16 12.7801 15.8594 12.5925 15.6719 12.4986L14.4062 11.9121Z',
				...format.filled,
				fillOpacity: 0.25,
			},
		),
	),

	// The Description Icon - A card with a paragraph of text below it.
	descriptionIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: commonProperties.size.regular,
			height: commonProperties.size.regular,
			viewBox: '0 0 20 20',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'g',
			{
				clipPath: 'url(#zip_ai_translucent_set_description_clip)',
			},
			el(
				'mask',
				{
					id: 'zip_ai_translucent_set_description_mask',
					style: { maskType: 'luminance' },
					maskUnits: 'userSpaceOnUse',
					x: 0,
					y: 0,
					width: 20,
					height: 20,
				},
				el(
					'path',
					{
						d: 'M20 0H0V20H20V0Z',
						fill: commonProperties.color.white,
					},
				),
			),
			el(
				'g',
				{
					mask: 'url(#zip_ai_translucent_set_description_mask)',
				},
				el(
					'path',
					{
						d: 'M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z',
						fill: commonProperties.color.none,
					},
				),
			),
			el(
				'path',
				{
					d: 'M15.6076 12.8594H4.39062',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M15.6076 14.8594H4.39062',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M13.5742 16.8594H6.42578',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442V7.42855C12.9442 8.60711 12.9442 9.19636 12.5781 9.56249C12.2119 9.92855 11.6227 9.92855 10.4442 9.92855H9.50476C8.32626 9.92855 7.73694 9.92855 7.37088 9.56249C7.00476 9.19636 7.00476 8.60711 7.00476 7.42855V4.83761Z',
					...format.filled,
					fillOpacity: 0.25,
				},
			),
			el(
				'path',
				{
					d: 'M7.00476 4.83761V7.42855C7.00476 8.60711 7.00476 9.19636 7.37088 9.56249C7.73694 9.92855 8.32626 9.92855 9.50476 9.92855H10.4442C11.6227 9.92855 12.2119 9.92855 12.5781 9.56249C12.9442 9.19636 12.9442 8.60711 12.9442 7.42855V4.83761M7.00476 4.83761H12.9442M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
			el(
				'path',
				{
					d: 'M9.125 8.23145H10.822',
					...format.outlined,
					strokeWidth: commonProperties.stroke.one,
				},
			),
		),
		el(
			'defs',
			{},
			el(
				'clipPath',
				{
					id: 'zip_ai_translucent_set_description_clip',
				},
				el(
					'rect',
					{
						width: 20,
						height: 20,
						fill: commonProperties.color.white,
					},
				),
			),
		),
	),

	// The Chat Bubble Icon - a squircle chat bubble.
	chatBubbleIcon: ( svgParams = {} ) => el(
		'svg',
		{
			width: 20,
			height: 20,
			viewBox: '0 0 20 20',
			fill: commonProperties.color.none,
			...svgParams,
		},
		el(
			'g',
			{
				clipPath: 'url(#zip_ai_translucent_set_chat_bubble_clip)',
			},
			el(
				'mask',
				{
					id: 'zip_ai_translucent_set_chat_bubble_mask',
					style: { maskType: 'luminance' },
					maskUnits: 'userSpaceOnUse',
					x: 0,
					y: 0,
					width: 20,
					height: 20,
				},
				el(
					'path',
					{
						d: 'M20 0H0V20H20V0Z',
						fill: commonProperties.color.white,
					},
				),
			),
			el(
				'g',
				{
					mask: 'url(#zip_ai_translucent_set_chat_bubble_mask)',
				},
				el(
					'path',
					{
						d: 'M17.0894 9.95178e-08H2.86902C2.10845 0.0011001 1.37934 0.303726 0.841531 0.841532C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84408C19.9826 2.08373 19.6683 1.36038 19.1243 0.828844C18.5804 0.297307 17.8499 -0.00019865 17.0894 9.95178e-08Z',
						fill: commonProperties.color.none,
					},
				),
			),
			el(
				'path',
				{
					d: 'M4.41797 12.358V6.41956L6.88217 4.40285L13.1931 4.21387L15.4984 6.41956V11.6964L14.5535 13.1324L12.5885 14.1053H10.8124L8.16704 15.6643L7.57623 15.2486L7.78911 14.1053H7.57623L6.01714 13.6527L4.41797 12.358Z',
					...format.filled,
					fillOpacity: 0.25,
				},
			),
			el(
				'path',
				{
					d: 'M10.0022 8.344H7.5135C7.25581 8.344 7.04688 8.14281 7.04688 7.89463C7.04688 7.6465 7.25581 7.44531 7.5135 7.44531H10.0022C10.2599 7.44531 10.4689 7.6465 10.4689 7.89463C10.4689 8.14281 10.2599 8.344 10.0022 8.344Z',
					...format.filled,
				},
			),
			el(
				'path',
				{
					d: 'M7.04688 10.2912C7.04688 10.043 7.25581 9.8418 7.5135 9.8418H12.491C12.7487 9.8418 12.9576 10.043 12.9576 10.2912C12.9576 10.5394 12.7487 10.7405 12.491 10.7405H7.5135C7.25581 10.7405 7.04688 10.5394 7.04688 10.2912Z',
					...format.filled,
				},
			),
			el(
				'path',
				{
					d: 'M9.35681 3.84961H10.643C11.4964 3.84961 12.1655 3.84961 12.7033 3.89192C13.2509 3.935 13.7033 4.02419 14.1128 4.2251C14.786 4.55539 15.3333 5.08242 15.6763 5.73065C15.8849 6.12496 15.9775 6.56058 16.0223 7.08796C16.0662 7.60577 16.0662 8.25015 16.0662 9.07196V10.7236C16.0662 10.8773 16.0662 10.9709 16.0622 11.0524C15.9749 12.827 14.5006 14.2467 12.6578 14.3307C12.5731 14.3346 12.4662 14.3346 12.2888 14.3346H12.2711L12.2242 14.3346C11.6847 14.3379 11.1591 14.5001 10.7181 14.7995L10.6874 14.8204L9.06312 15.9377C8.12706 16.5815 6.897 15.6517 7.32419 14.6232C7.38162 14.485 7.27594 14.3346 7.12131 14.3346H6.74688C5.19315 14.3346 3.93359 13.1216 3.93359 11.6255V9.07196C3.93359 8.25015 3.93359 7.60577 3.97753 7.08796C4.02226 6.56058 4.11488 6.12496 4.32352 5.73065C4.66651 5.08242 5.21381 4.55539 5.88697 4.2251C6.29644 4.02419 6.74888 3.935 7.29644 3.89192C7.83425 3.84961 8.50338 3.84961 9.35681 3.84961ZM7.37244 4.78765C6.88256 4.82619 6.56669 4.90026 6.31069 5.02586C5.81312 5.26998 5.40859 5.65953 5.15507 6.13865C5.02465 6.38515 4.94772 6.68933 4.9077 7.16108C4.86723 7.63808 4.86687 8.24577 4.86687 9.09208V11.6255C4.86687 12.6253 5.70858 13.4358 6.74688 13.4358H7.12131C7.93619 13.4358 8.49337 14.2284 8.19075 14.957C8.10969 15.1521 8.34306 15.3285 8.52069 15.2064L10.1804 14.0648C10.7772 13.6599 11.4882 13.4404 12.2183 13.4359L12.2711 13.4358C12.4713 13.4358 12.5541 13.4358 12.6137 13.433C13.9757 13.3709 15.0654 12.3216 15.1299 11.01C15.1328 10.9524 15.1329 10.8818 15.1329 10.709V9.09208C15.1329 8.24577 15.1326 7.63808 15.0921 7.16108C15.052 6.68933 14.9751 6.38515 14.8447 6.13865C14.5912 5.65953 14.1866 5.26998 13.6891 5.02586C13.4331 4.90026 13.1172 4.82619 12.6273 4.78765C12.132 4.74867 11.5009 4.74832 10.6221 4.74832H9.37769C8.49888 4.74832 7.86781 4.74867 7.37244 4.78765Z',
					...format.filled,
					fillRule: 'evenodd',
					clipRule: 'evenodd',
				},
			),
		),
		el(
			'defs',
			{},
			el(
				'clipPath',
				{
					id: 'zip_ai_translucent_set_chat_bubble_clip',
				},
				el(
					'rect',
					{
						width: 20,
						height: 20,
						fill: commonProperties.color.white,
					},
				),
			),
		),
	),
};
