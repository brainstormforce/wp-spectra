const UAGReset = (props) => {

	const resetHandler = () => {
		console.log('reset');
	};

	return (
		<Tooltip
			text={ __( 'Reset', 'ultimate-addons-for-gutenberg' )}
			key={ 'reset' }
		>
		<Button
			className="uagb-reset"
			isSecondary
			isSmall
			onClick={ ( e ) => {
				e.preventDefault();
				resetHandler();
			} }
		>
			<Dashicon icon="image-rotate" />
		</Button>
		</Tooltip>
	);
}

export default UAGReset;
