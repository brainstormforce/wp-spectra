/**
 * BLOCK: Advanced Heading - Transform Block
 */

const transform = [
	{
		from: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					return createBlock( "uagb/advanced-heading", {
						headingDesc: content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content, level } ) => {
					return createBlock( "uagb/advanced-heading", {
						headingTitle: content,
						level: level,
					} )
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					return createBlock( "core/paragraph", {
						content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content, level } ) => {
					return createBlock( "core/heading", {
						content: content,
						level: level
					} )
				},
			},
		],
	}
]

export default transform;