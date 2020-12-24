import './no-search-result.scss';

const NoSearchResult = ({ children }) => {
	return (
		<div className="no-search-result">
			<h3>Sorry No Results Found.</h3>
			<div className="no-search-result-description">
				<p>
					Don't see a template you would like to import?
					<br />
					<a target="_blank" href="">
						Make a Template Suggestion!
					</a>
				</p>
			</div>
			{children}
		</div>
	);
};

export default NoSearchResult;
