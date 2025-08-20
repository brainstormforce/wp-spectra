/**
 * Stars Component - Interactive star rating component for the review block frontend
 *
 * This component renders clickable stars that allow users to set ratings for review features.
 * It supports both full stars (1-5) and half stars (0.5 increments) with immediate visual feedback.
 *
 * @param props
 */
const Stars = (props) => {
	// Destructure all required props from the parent component
	const { limit, id, className, inactiveStarColor, onClick, style, starOutlineColor, value, activeStarColor, selectedStarColor, setValue } = props;

	/**
	 * mouseClick - Handles star click events to set new rating values
	 *
	 * @param {number} i - Zero-based index of the clicked star (0-4 for 5-star rating)
	 */
	const mouseClick = (i) => {
		// Calculate new value: if clicking same star as current value, set to half star, otherwise set to full star
		// Example: if current value is 3 and user clicks star index 2 (3rd star), set to 2.5
		// If current value is 2 and user clicks star index 2 (3rd star), set to 3
		const newValue = value === i + 1 ? i + 0.5 : i + 1;

		// Only update value if setValue function is available (not available for read-only average stars)
		if (setValue) {
			setValue(newValue);
		}
	};

	return (
		// Main container for the star rating component
		<div
			className={className}
			style={Object.assign(
				{
					// Use flexbox to arrange stars horizontally in a row
					display: 'flex',
					flexDirection: 'flex-row',
				},
				style // Merge with any custom styles passed from parent
			)}
		>
			{/* Generate array of stars based on the limit prop (usually 5 stars) */}
			{[...Array(limit).keys()].map((i) => (
				// Clickable wrapper div for each star - provides reliable click events
				<div
					key={i}
					style={{
						cursor: 'pointer',        // Show pointer cursor on hover to indicate clickability
						display: 'inline-block'   // Allow stars to align horizontally while maintaining click area
					}}
					onClick={() => {
						// Check if custom onClick handler is provided (used for read-only average stars)
						if (onClick) {
							// Call custom onClick handler (e.g., () => null for disabled stars)
							onClick(i);
						} else if (setValue) {
							// Call our mouseClick handler to update the rating value
							mouseClick(i);
						}
						// If neither onClick nor setValue is available, do nothing (fallback safety)
					}}
				>
					{/* SVG star element - visual representation of the star */}
					<svg
						xmlns="https://www.w3.org/2000/svg"
						height="20"           // Fixed height for consistent star size
						width="20"            // Fixed width for consistent star size
						viewBox="0 0 150 150"  // SVG coordinate system (150x150 internal units)
						style={{ pointerEvents: 'none' }} // Disable pointer events on SVG to prevent click conflicts with wrapper div
					>
						{/* SVG definitions - contains reusable elements like masks */}
						<defs>
							{/* Mask for creating partial star fill effect (enables half-star ratings) */}
							<mask id={`uagb_review_star_filter-${id}-${i}`}>
								{/* White rectangle that determines how much of the star is filled */}
								<rect
									height="150"  // Full height of the star viewBox
									width={
										// Calculate fill width based on current value and star position
										(value - i > 0  // If this star should have some fill // eslint-disable-line no-nested-ternary
											? value - i < 1  // If it's a partial star (half-star)
												? value - i   // Use the fractional part (0.5 for half star)
												: 1           // Full star (width = 1 = 100%)
											: 0              // No fill for this star
										) * 150              // Convert to viewBox units (150 = 100% width)
									}
									y="0"         // Position at top of viewBox
									x="0"         // Position at left of viewBox
									fill="#fff"   // White fill makes the masked area visible
								/>
							</mask>
						</defs>

						{/* Background star path - shows the unfilled/inactive portion of the star */}
						<path
							fill={inactiveStarColor}    // Color for unfilled portion of star
							strokeWidth="2.5"             // Border thickness
							d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"  // SVG path data for star shape
							stroke={starOutlineColor}   // Border color
						/>
						{/* Foreground star path - shows the filled/active portion using the mask */}
						<path
							className="star"              // CSS class for additional styling
							id={`star${i}`}           // Unique ID for this star element
							mask={`url(#uagb_review_star_filter-${id}-${i})`}  // Apply the mask to show only filled portion
							fill={activeStarColor}      // Color for filled portion of star
							strokeWidth="2.5"             // Border thickness (same as background)
							d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"  // Same star shape as background
							stroke={starOutlineColor}   // Border color (same as background)
						/>
					</svg>
					{/* End of clickable wrapper div */}
				</div>
			))}
			{/* End of star array mapping */}
		</div>
		// End of main container
	);
};

// Export the component for use in other files
export default Stars;