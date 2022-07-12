// Auto Block Recovery.
const autoRecoverBlocks = () => {

	// Function to Create the Recovered Block.
	const generateRecoveredBlock = ( { name, attributes, innerBlocks } ) => (
		wp.blocks.createBlock( name, attributes, innerBlocks )
	);

	// Function to Recover Invalid Blocks.
	const recoverInvalidBlocks = ( blocks ) => {
		const curBlocks = [ ...blocks ];
		let recoveryCalled = false;

		// Function to Recursively Recover Inner Blocks.
		const recoverInnerBlocks = ( innerBlocks ) => {
			innerBlocks.forEach( ( block ) => {
				if ( isInvalid( block ) ) {
					recoveryCalled = true;
					const newBlock = generateRecoveredBlock( block );
					for ( const key in newBlock ) {
						block[ key ] = newBlock[ key ];
					}
				}

				if ( block.innerBlocks.length ) {
					recoverInnerBlocks( block.innerBlocks );
				}
			} )
		};

		recoverInnerBlocks( curBlocks );
		return [ curBlocks, recoveryCalled ];
	};

	// Function to Get All Recovered Blocks.
	const getRecoveredBlocks = ( allBlocks ) => (
		allBlocks.map( ( block ) => {
			const curBlock = block;

			if ( block.name === 'core/block' ) {
				const { attributes: { ref } } = block;
				const parsedBlocks = wp.blocks.parse( wp.data.select( 'core' ).getEntityRecords(
					'postType',
					'wp_block',
					{ include: [ ref ] }
				)?.[ 0 ]?.content?.raw ) || [];

				const [ recoveredBlocks, isSuccessful ] = recoverInvalidBlocks( parsedBlocks );

				if ( isSuccessful ) {
					console.log( `${ curBlock.name } (${ curBlock.clientId }) recovered successfully.` );
					return {
						blocks: recoveredBlocks,
						isReusable: true,
						ref,
					}
				}
			}

			if ( curBlock.innerBlocks && curBlock.innerBlocks.length ) {
				const newInnerBlocks = getRecoveredBlocks( curBlock.innerBlocks );
				if ( newInnerBlocks.some( ( curBlock ) => curBlock.recovered ) ) {
					curBlock.innerBlocks = newInnerBlocks;
					curBlock.replacedClientId = curBlock.clientId;
					curBlock.recovered = true;
				}
			}

			if ( ! curBlock.isValid ) {
				const newBlock = getRecoveredBlocks( curBlock );
				newBlock.replacedClientId = curBlock.clientId;
				newBlock.recovered = true;
				console.log( `${ curBlock.name } (${ curBlock.clientId }) recovered successfully.` );

				return newBlock;
			}

			return curBlock;
		} )
	);

	// Variable to Store Recovered Blocks.
	const recoveredBlocks = getRecoveredBlocks( wp.data.select( 'core/editor' ).getEditorBlocks() );

	// Loop To Replace Invalid Blocks with Recovered Blocks.
	recoveredBlocks.forEach( ( block ) => {
		if ( block.isReusable && block.ref ) {
			wp.data.dispatch( 'core' ).editEntityRecord(
				'postType',
				'wp_block',
				block.ref,
				{ content: wp.blocks.serialize( block.blocks ) }
			).then();
		}

		if ( block.recovered && block.replacedClientId ) {
			wp.data.dispatch( 'core/block-editor' ).replaceBlock( block.replacedClientId, block );
		}
	} );
};

const RecoverBlocks = () => {
	setTimeout(() => {
		if ( window._wpLoadBlockEditor ) {
			console.log( '%cHERE', 'font-size: 6em; color: seagreen; box-shadow: 2px 2px 2px black;' );
			window._wpLoadBlockEditor.then( () => {
				autoRecoverBlocks();
			} );
		}
	}, 3000);
};

export default RecoverBlocks;