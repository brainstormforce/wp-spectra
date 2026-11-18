import { useSelect } from '@wordpress/data';
import { classNames, debounce } from '../../../utils/helpers';
import { STORE_KEY } from '../../../store/index';

const { forwardRef, useMemo } = wp.element;

const Input = (
	{
		disabled = false,
		className,
		inputClassName,
		error,
		name,
		validations,
		label,
		noBorder,
		height = '[42px]',
		labelColorClassName = 'text-zip-app-heading',
		enableDebounce,
		onChange,
		prefixIcon,
		suffixIcon,
		prefixIconClassName,
		suffixIconClassName,
		enableAutoGrow = false,
		register,
		...props
	},
	ref
) => {
	const { ref: formHookRef, ...registerValidations } = useMemo( () => {
		return typeof register === 'function'
			? register( name, validations )
			: {};
	}, [ name, register, validations ] );

	const { importInProgress } = useSelect( ( select ) => {
		const { getImportInProgress } = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
		};
	}, [] );

	return (
		<div className={ className }>
			{ label && (
				<label
					htmlFor={ name }
					className={ classNames(
						'text-sm font-medium text-zip-app-heading',
						labelColorClassName
					) }
				>
					{ label }
					{ validations?.required && (
						<span className="text-alert-error"> *</span>
					) }
				</label>
			) }
			<div className="flex relative items-center">
				{ prefixIcon &&
					<div className={ prefixIconClassName }>
						{ prefixIcon }
					</div>
			    }
				<div
					className={ classNames(
						enableAutoGrow
							? 'relative overflow-hidden flex justify-start items-center'
							: 'w-full'
					) }
				>
					<input
						ref={ ( node ) => {
							if ( node && typeof formHookRef === 'function' ) {
								formHookRef( node );
							}
							if ( ! ref ) {
								return;
							}
							switch ( typeof ref ) {
								case 'function':
									ref( node );
									break;
								case 'object':
									ref.current = node;
									break;
								default:
									break;
							}
						} }
						name={ name }
						disabled={ disabled }
						className={ classNames(
							'w-full px-[1rem] placeholder:text-secondary-text rounded-md outline-none text-sm placeholder:!text-sm',
							`h-${ height }`,
							label ? 'mt-2' : '',
							noBorder
								? 'bg-transparent'
								: 'px-3 border border-solid focus:ring-1 focus:ring-accent-st',
							error
								? `${
									noBorder ? '' : 'shadow-error'
								  }  border-alert-error  focus:border-accent-st`
								: `${
									noBorder ? '' : 'shadow-sm'
								  }  border-border-primary focus:border-accent-st`,
							enableAutoGrow && 'absolute left-0 min-w-[50px]',
							disabled ? 'cursor-not-allowed' : '',
							inputClassName,
							( importInProgress ) &&
							'disable-click-action'
						) }
						onChange={
							enableDebounce
								? debounce( onChange, 500 )
								: onChange
						}
						{ ...props }
						{ ...registerValidations }
					/>
					{ enableAutoGrow && (
						<span className="invisible inline whitespace-pre text-[0.9rem]">
							{ props.value || props.placeholder }
						</span>
					) }
				</div>
				{ suffixIcon && (
					<div className={
						suffixIconClassName
					}>
						{ suffixIcon }
					</div>
				) }
			</div>
			{ error && (
				<div className="mt-1 text-sm text-alert-error ">
					{ error.message }
				</div>
			) }
		</div>
	);
};

export default forwardRef( Input );
