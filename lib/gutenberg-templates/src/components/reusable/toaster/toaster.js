const ToasterBody = ( { title = '', message = '', progress = 0, progressBar = false } ) => {
	const trimmedTitle = title.trim();
	const trimmedMessage = typeof message === 'string' ? message.trim() : message;

	return (
		<div className="space-y-2">
			<div className="space-y-2 !w-full">
				{ !! trimmedTitle && ( <h6 className="text-background-primary text-sm font-semibold leading-5 m-0 p-0 !w-auto !h-auto">{ trimmedTitle }</h6> ) }
				{ !! trimmedMessage && ( <p className="text-zip-light-border-primary text-sm font-normal leading- !w-auto !h-auto break-words">{ trimmedMessage }</p> ) }
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
