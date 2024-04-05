import { classNames } from '../../../utils/helpers';

const { forwardRef } = wp.element;

const ButtonNew = (
	{
		variant = '',
		isSmall = false,
		hasSuffixIcon = false,
		hasPrefixIcon = false,
		type = 'button',
		className,
		onClick,
		children,
		disabled = false,
		id = '',
		...props
	},
	ref,
) => {
	const buttonSize = isSmall ? 'small' : 'base';
	const variantClassNames = {
		primary: 'text-white bg-accent-spectra focus-visible:ring-accent-spectra border border-solid border-accent-spectra',
		'ai-primary': 'text-white bg-accent-ai focus-visible:ring-accent-ai border border-solid border-accent-ai',
		white: 'text-accent-spectra bg-white border border-solid border-accent-spectra focus-visible:ring-accent-spectra',
		'ai-white': 'text-accent-ai bg-white border border-solid border-accent-ai focus-visible:ring-accent-ai',
		dark: 'text-white border border-white bg-transparent border-solid',
		link: 'underline border-0 bg-transparent',
		blank: 'bg-transparent border-transparent',
	};
	const sizeClassNames = {
		base: {
			default: 'px-6 py-3',
			hasPrefixIcon: 'pl-4 pr-6 py-3',
			hasSuffixIcon: 'pl-6 pr-4 py-3',
		},
		small: {
			default: 'px-5 py-2 h-[2.625rem]',
			hasPrefixIcon: 'pl-3 pr-5 py-2 h-[2.625rem]',
			hasSuffixIcon: 'pl-5 pr-3 py-2 h-[2.625rem]',
		},
	};
	const heightClassNames = {
		base: 'h-[3rem]',
		small: 'h-[2.25rem]',
	};
	const typographyClassNames = {
		base: 'sp-text-base font-medium',
		small: 'sp-text-sm font-medium',
	};
	const borderRadiusClassNames = {
		base: 'rounded-md',
		small: 'rounded',
	};

	const handleOnClick = ( event ) => {
		if ( !! onClick && typeof onClick === 'function' ) {
			onClick( event );
		}
	};

	return (
		<button
			type={ type }
			className={ classNames(
				'font-sans group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out cursor-pointer border-0 disabled:bg-button-disabled disabled:text-secondary-text disabled:cursor-not-allowed disabled:border-button-disabled',
				variantClassNames[ variant ],
				! hasPrefixIcon && ! hasSuffixIcon && sizeClassNames[ buttonSize ].default,
				heightClassNames[ buttonSize ],
				hasPrefixIcon && sizeClassNames[ buttonSize ].hasPrefixIcon,
				hasSuffixIcon && sizeClassNames[ buttonSize ].hasSuffixIcon,
				typographyClassNames[ buttonSize ],
				borderRadiusClassNames[ buttonSize ],
				className,
			) }
			onClick={ handleOnClick }
			ref={ ref }
			disabled={ disabled }
			id={ id }
			{ ...props }
		>
			{ children }
		</button>
	);
};

export default forwardRef( ButtonNew );
