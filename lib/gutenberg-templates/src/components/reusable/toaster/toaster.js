const ToasterBody = ( { title = '', message = '', progress = 0, progressBar = false } ) => {
	const trimmedTitle = title.trim();
	const trimmedMessage = typeof message === 'string' ? message.trim() : message;

	return (
		<div className="space-y-2">
			<div className="space-y-1">
				{ !! trimmedTitle && ( <h6 className="text-heading-text text-base font-medium leading-6 m-0 p-0">{ trimmedTitle }</h6> ) }
				{ !! trimmedMessage && ( <p className="text-secondary-text text-sm font-normal leading-5">{ trimmedMessage }</p> ) }
			</div>
			{ !! progressBar && ( <div className="py-2 w-full">
				<div className="w-full max-w-full h-1.5 flex items-center justify-start bg-background-tertiary rounded-full overflow-hidden">
					<div style={ { width: `${ progress }%` } } className="h-full rounded-full bg-accent-spectra transition-[width] ease-in-out duration-150" />
				</div>
			</div> ) }
		</div>
	);
};

export default ToasterBody;
