export default function save() {
	return (
		<div className="uagb-post__image">
			<img
				src={ `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/post-grid.png` }
				alt=""
				width="640" height="360"
				loading="lazy"
			/>
		</div>
	);
}
