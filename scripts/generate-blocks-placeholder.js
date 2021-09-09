const path = require( 'path' );
const paths = require( './paths' );
const fs = require( 'fs' );
const glob = require( 'glob' );

const dest_file = paths.pluginDist + '/blocks-placeholder.js';
const dest_content = `/**
 * This is a dummy file that contains blocks settings placeholder.
 * WordPress plugin directory detects registered blocks from this file and shows them on plugin page
 * It doesn't do anything in the actual code.
 *
 * It is auto-generated.
 */
`;

const getBlockSlug = ( content ) => {
	return ( content.match( /registerBlockType\(\s*.*?['"](.*?)['"]/ ) ||
		[] )[ 1 ];
};

const getBlockTitle = ( content ) => {
	return ( content.match( /title\s*:.*?(__\(.*?\))/ ) || [] )[ 1 ];
};

const registerBlocks = glob
	.sync( './src/blocks/**/block.js' )
	.reduce( ( code, file ) => {
		const content = fs.readFileSync( path.resolve( file ), 'utf8' );

		const blockSlug = getBlockSlug( content );
		const blockTitle = getBlockTitle( content );
		if ( ! blockSlug || ! blockTitle || -1 !== file.indexOf( 'child' ) ) {
			return code;
		}

		return `${ code }
registerBlockType( '${ blockSlug }', { title: ${ blockTitle } } );`;
	}, dest_content );

fs.writeFile( dest_file, registerBlocks, ( err ) => {
	if ( err ) {
		return console.log( err );
	}

	console.log( `Sucessfully written block registration placeholder ${ dest_file }` ) // eslint-disable-line
} );
