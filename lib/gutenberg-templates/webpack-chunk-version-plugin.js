/**
 * Webpack plugin to add version parameter to lazy-loaded chunk URLs.
 * This prevents cache issues when rolling back between plugin versions.
 *
 * How it works:
 * - Hooks into webpack's processAssets compilation stage
 * - Modifies main.js to append version parameter to chunk URLs
 * - Reads version from package.json automatically
 *
 * Example output:
 * Before: 910.js
 * After: 910.js?ver=2.4.18
 *
 * Version handling:
 * - Version is read from package.json during build
 * - Each build gets the current version automatically
 * - No manual version management required
 *
 * Usage:
 * Plugin is automatically applied during npm run build
 * No configuration needed - works out of the box
 *
 * @since x.x.x
 */
const packageJson = require( './package.json' );
const { RawSource } = require( 'webpack-sources' );

class ChunkVersionPlugin {
	apply( compiler ) {
		compiler.hooks.compilation.tap(
			'ChunkVersionPlugin',
			( compilation ) => {
				compilation.hooks.processAssets.tap(
					{
						name: 'ChunkVersionPlugin',
						stage: compilation.PROCESS_ASSETS_STAGE_OPTIMIZE + 1,
					},
					( assets ) => {
						Object.keys( assets ).forEach( ( filename ) => {
							if (
								filename.endsWith( '.js' ) &&
								filename === 'main.js'
							) {
								const asset = assets[ filename ];
								let source = asset.source().toString();

								// Find and modify webpack's chunk loading URL generation
								// Pattern: Look for chunk URL construction like: chunkId + ".js"
								source = source.replace(
									/(["'])(\+)([a-zA-Z0-9_]+)(["']\.js["'])/g,
									`$1$2$3$4+"?ver=${ packageJson.version }"`
								);

								// Pattern 2: __webpack_require__.u = function
								source = source.replace(
									/(__webpack_require__\.u\s*=\s*[^}]+\.js)(["'])/g,
									`$1?ver=${ packageJson.version }$2`
								);

								// Update the asset with RawSource
								compilation.updateAsset(
									filename,
									new RawSource( source )
								);
							}
						} );
					}
				);
			}
		);
	}
}

module.exports = ChunkVersionPlugin;
