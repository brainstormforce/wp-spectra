// Import block dependencies and components
import classnames from 'classnames';
import ReviewBody from './review-body';
import { __ } from '@wordpress/i18n';

export default function renderReview(
	props,
	bodyState,
	bodySetStateValue,
	starState,
	starSetStateValue
) {
	// Setup the attributes
	const {
		attributes: {
			block_id,
			authorName,
			itemName,
			description,
			parts,
			starCount,
			summaryTitle,
			summaryDescription,
			inactiveStarColor,
			activeStarColor,
			ctaLink,
			ctaTarget,
			rTitle,
			rContent,
			rAuthor,
			headingTag,
			mainimage,
			imgSize,
			showFeature,
			showAuthor,
			starOutlineColor,
			enableDescription,
			enableImage,
		},
		setAttributes,
		isSelected,
		className,
	} = props;

	let urlChk = '';
	let title = '';
	if (
		'undefined' !== typeof props.attributes.mainimage &&
		null !== props.attributes.mainimage &&
		'' !== props.attributes.mainimage
	) {
		urlChk = props.attributes.mainimage.url;
		title = props.attributes.mainimage.title;
	}

	let url = '';
	if ( '' !== urlChk ) {
		const size = props.attributes.mainimage.sizes;
		const imageSize = props.attributes.imgSize;

		if (
			'undefined' !== typeof size &&
			'undefined' !== typeof size[ imageSize ]
		) {
			url = size[ imageSize ].url;
		} else {
			url = urlChk;
		}
	}

	let image_icon_html = '';

	if ( mainimage && mainimage.url ) {
		image_icon_html = (
			<img
				className="uagb-review__source-image"
				src={ url }
				title={ title }
			/>
		);
	}

	return (
		<div
			className={ classnames(
				className,
				'uagb-ratings__outer-wrap',
				`uagb-block-${ block_id.substr( 0, 8 ) }`
			) }
		>
			<ReviewBody
				rTitle={ rTitle }
				setTitle={ ( newValue ) =>
					setAttributes( { rTitle: newValue } )
				}
				ctaLink={ ctaLink }
				ctaTarget={ ctaTarget }
				rContent={ rContent }
				setDescription={ ( newValue ) =>
					setAttributes( { rContent: newValue } )
				}
				rAuthor={ rAuthor }
				setAuthorName={ ( newValue ) =>
					setAttributes( { rAuthor: newValue } )
				}
				headingTag={ headingTag }
				mainimage={ mainimage }
				imgSize={ imgSize }
				image_icon_html={ image_icon_html }
				isSelected={ isSelected }
				authorName={ authorName }
				itemName={ itemName }
				description={ description }
				descriptionEnabled={ enableDescription }
				ID={ block_id }
				imageEnabled={ enableImage }
				items={ parts }
				starCount={ starCount }
				summaryTitle={ summaryTitle }
				summaryDescription={ summaryDescription }
				inactiveStarColor={ inactiveStarColor }
				activeStarColor={ activeStarColor }
				selectedStarColor={ activeStarColor }
				starOutlineColor={ starOutlineColor }
				setItemName={ ( newValue ) =>
					setAttributes( { itemName: newValue } )
				}
				setImage={ ( img ) =>
					setAttributes( {
						imgID: img.id,
						imgURL: img.url,
						imgAlt: img.alt,
					} )
				}
				setItems={ ( newValue ) =>
					setAttributes( { parts: newValue } )
				}
				setSummaryTitle={ ( newValue ) =>
					setAttributes( { summaryTitle: newValue } )
				}
				setSummaryDescription={ ( newValue ) =>
					setAttributes( { summaryDescription: newValue } )
				}
				hasFocus={ isSelected }
				setEditable={ ( newValue ) =>
					bodySetStateValue( { editable: newValue } )
				}
				setActiveStarIndex={ ( editedStar ) =>
					bodySetStateValue( { editedStar } )
				}
				showfeature={ showFeature }
				showauthor={ showAuthor }
				state={ bodyState }
				setStateValue={ bodySetStateValue }
				starState={ starState }
				starSetStateValue={ starSetStateValue }
			/>
		</div>
	);
}
