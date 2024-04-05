import styles from './style.module.scss';

const LoaderDots = () => {
	return (
		<div className="spectra-ai flex items-start w-5 h-5">
			<span className={ styles.loaderDots } />
		</div>
	);
};

export default LoaderDots;
