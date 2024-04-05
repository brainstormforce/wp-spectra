const { forwardRef, useMemo } = wp.element;

const TextArea = (
	{
		disabled = false,
		className,
		textAreaClassName = '',
		error,
		register,
		name,
		validations,
		label,
		...props
	},
	ref
) => {
	const { ref: formHookRef, ...registerValidations } = useMemo( () => {
		return typeof register === 'function'
			? register( name, validations )
			: {};
	}, [ name, register, validations ] );

	return (
		<div className={ className }>
			{ label && (
				<label
					htmlFor={ name }
					className="sp-text-base font-medium text-heading-text"
				>
					{ label }
				</label>
			) }
			<div className="relative">
				<textarea
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
					className={ `${
						label ? 'mt-2' : ''
					} w-full placeholder:zw-placeholder zw-input rounded-md border outline-none focus:ring-1 focus:ring-accent-spectra ${
						error
							? 'shadow-error border-alert-error  focus:border-accent-spectra '
							: 'shadow-sm border-border-primary focus:border-accent-spectra'
					} ${ textAreaClassName }` }
					{ ...props }
					{ ...registerValidations }
				/>
			</div>

			{ error && (
				<p className="mt-1 text-sm text-alert-error ">
					{ error.message }
				</p>
			) }
		</div>
	);
};

export default forwardRef( TextArea );
