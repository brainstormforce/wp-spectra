const paths = require( './paths' );
const fs = require( 'fs' );
const sass = require( 'node-sass' );

/* Generate common editor */
sass.render(
	{
		file: paths.pluginSrc + '/common-editor.scss',
		outputStyle: 'compressed',
		outFile: paths.pluginDist + '/common-editor.css',
		sourceMap: false,
	},
	function ( error, result ) {
		if ( null !== result && ! error ) {
			fs.writeFile(
				paths.pluginDist + '/common-editor.css',
				result.css,
				function ( err ) {
					if ( err ) {
						throw err;
					}

					console.log( '\n\nCommon editor generated!' ); // eslint-disable-line
				}
			);
		}
	}
);

//Generate individual block's css files
fs.readdir( paths.pluginSrc + '/blocks', function ( readError, items ) {

	for ( const item of items ) {

		sass.render(
			{
				file: paths.pluginSrc + '/blocks/' + item + '/style.scss',
				outputStyle: 'compressed',
				outFile: './assets/css/blocks/' + item + '.css',
				sourceMap: false,
			},
			function ( error, result ) {

				if ( result && ! error ) {

					let file_name = item;

					switch ( item ) {
						case 'cf7-designer':
							file_name = 'cf7-styler';
							break;
						case 'gf-designer':
							file_name = 'gf-styler';
							break;
						default:
							file_name = item;
							break;
					}

					fs.writeFile(
						'./assets/css/blocks/' + file_name + '.css',
						result.css,
						function ( err ) {
							if ( err ) throw err;
						}
					);
				}
			}
		);
	}

	if ( readError ) {
		console.error( readError ); // eslint-disable-line
		return;
	}

	console.log( "\n\nIndividaul block's css files Generated Successfully!" ); // eslint-disable-line
} );

// Copy generated style file content to custom style file
// source to copy content
const src = paths.pluginDist + '/style-blocks.css';

// Keep deprecated file for astra.
// Deprecated at 1.23.0. Deelte this after 2 updates.

// destination for copied content
const old_dest = paths.pluginDist + '/blocks.style.css';

fs.copyFile( src, old_dest, ( error ) => {
	// incase of any error
	if ( error ) {
		console.error( error ); // eslint-disable-line
		return;
	}

	console.log( '\n\nStyle in deprecated file blocks.style.css - Copied Successfully!' ); // eslint-disable-line
} );
