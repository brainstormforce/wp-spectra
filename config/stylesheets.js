/**
 * All SCSS files
 *
 * Project related paths.
 */

const path = require( "path" )
const fs = require( "fs" )
let all_dirs = []


// Make sure any symlinks in the project folder are resolved:
const pluginDir = fs.realpathSync( process.cwd() )
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath )
fs.readdir(resolvePlugin( "src/blocks" ), function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});

// Config after eject: we're in ./config/
module.exports = {
	items: items
}
