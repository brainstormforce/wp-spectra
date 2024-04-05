
const AIStartup = ( { title, description, primaryButton, secondaryButton } ) => {
	return (
		<div className="spectra-ai absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-center bg-background-tertiary/[0.85] backdrop-blur-[6px] z-[1]">
			{ /* Main Content */ }
			<div className="p-10 flex flex-col gap-8 max-w-[560px] border border-solid border-border-primary rounded-lg shadow-small bg-white">
				{ /* Logo & Content */ }
				<div className="space-y-2">
					<h4 className="text-[2rem] font-semibold leading-[2.625rem]">{ title }</h4>
					<p className="text-base font-normal leading-6 text-body-text">{ description }</p>
				</div>
				{ /* Action buttons */ }
				<div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-start items-center gap-2">
					{ /* Primary Button */ }
					{ primaryButton }
					{ /* Secondary Button */ }
					{ secondaryButton }
				</div>
			</div>
		</div>
	);
};

export default AIStartup;
