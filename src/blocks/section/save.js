/**
 * BLOCK: UAGB - Section Save Class
 */

import classnames from 'classnames';

const {
	Component,
	Fragment
} = wp.element

const {
	InnerBlocks
} = wp.editor

class UAGBSectionSave extends Component {

	render() {

		const {
			tag,
			block_id,
			backgroundType,
			backgroundVideoColor,
			backgroundOpacity,
			backgroundVideoOpacity,
			backgroundVideo,
			className
		} = this.props.attributes

		const CustomTag = `${tag}`

		return (
			<CustomTag
				className={ classnames(
					className,
					"uagb-section__wrap",
					`uagb-section__background-${backgroundType}`,
				) }
				id={ `uagb-section-${block_id}` }
			>
				<div className="uagb-section__overlay"></div>
				{ "video" == backgroundType &&
					<div className="uagb-section__video-wrap">
						{  backgroundVideo &&
							<video src={ backgroundVideo.url } autoPlay loop muted></video>
						}

					</div>
				}
				<div className="uagb-section__inner-wrap">
					<InnerBlocks />
				</div>

			</CustomTag>
		)
	}
}

export default UAGBSectionSave;
