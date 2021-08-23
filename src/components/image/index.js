import { __ } from "@wordpress/i18n";
import { BaseControl, Button } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import React, { useLayoutEffect } from "react";
import styles from "./editor.lazy.scss";

const UAGImage = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		showVideoInput,
	} = props;

	let label = __("Image", "ultimate-addons-for-gutenberg");
	let selectImageLabel = __("Select Image", "ultimate-addons-for-gutenberg");
	let replaceImageLabel = __(
		"Replace Image",
		"ultimate-addons-for-gutenberg"
	);
	let removeImageLabel = __("Remove Image", "ultimate-addons-for-gutenberg");
	let allowedTypes = ["image"];

	if (showVideoInput) {
		label = __("Video", "ultimate-addons-for-gutenberg");
		selectImageLabel = __("Select Video", "ultimate-addons-for-gutenberg");
		replaceImageLabel = __(
			"Replace Video",
			"ultimate-addons-for-gutenberg"
		);
		removeImageLabel = __("Remove Video", "ultimate-addons-for-gutenberg");
		allowedTypes = ["video"];
	}
	
	return (
		<BaseControl className="editor-bg-image-control" label={label}>
			<div className="uagb-bg-image">
				<MediaUpload
					title={selectImageLabel}
					onSelect={onSelectImage}
					allowedTypes={allowedTypes}
					value={backgroundImage}
					render={({ open }) => (
						<Button isSecondary onClick={open}>
							{ !backgroundImage?.url
								? selectImageLabel
								: replaceImageLabel}
						</Button>
					)}
				/>
				{ backgroundImage?.url && (
					<Button
						className="uagb-rm-btn"
						onClick={onRemoveImage}
						isLink
						isDestructive
					>
						{removeImageLabel}
					</Button>
				)}
			</div>
		</BaseControl>
	);
};

export default UAGImage;
