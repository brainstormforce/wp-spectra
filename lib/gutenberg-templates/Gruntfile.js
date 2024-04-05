module.exports = function( grunt ) {
	// Load Grunt plugins
	grunt.loadNpmTasks( 'grunt-bumpup' );
	grunt.loadNpmTasks( 'grunt-text-replace' );

	// Configure tasks
	grunt.initConfig( {
		bumpup: {
			options: {
				updateProps: {
					pkg: 'package.json',
				},
			},
			file: 'package.json',
		},
		replace: {
			plugin_main: {
				src: [ 'ast-block-templates.php' ],
				overwrite: true,
				replacements: [
					{
						from: /Version: \bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?(?:\+[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?\b/g,
						to: 'Version: <%= pkg.version %>',
					},
				],
			},

			plugin_const: {
				src: [ 'ast-block-templates.php' ],
				overwrite: true,
				replacements: [
					{
						from: /AST_BLOCK_TEMPLATES_VER', '.*?'/g,
						to: "AST_BLOCK_TEMPLATES_VER', '<%= pkg.version %>'",
					},
				],
			},

			plugin_function_comment: {
				src: [
					'*.php',
					'**/*.php',
					'!node_modules/**',
					'!bin/**',
				],
				overwrite: true,
				replacements: [
					{
						from: 'x.x.x',
						to: '<%=pkg.version %>',
					},
				],
			},
		},
	} );

	// Bump Version - `grunt version-bump --ver=<version-number>`
	grunt.registerTask( 'version-bump', function ( ver ) {
		let newVersion = grunt.option( 'ver' );

		if ( newVersion ) {
			newVersion = newVersion ? newVersion : 'patch';

			grunt.task.run( 'bumpup:' + newVersion );
			grunt.task.run( 'replace' );
		}
	} );
};
