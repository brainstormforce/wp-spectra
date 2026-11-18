module.exports = function( grunt ) {
	// Load Grunt plugins
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-bumpup' );
	grunt.loadNpmTasks( 'grunt-text-replace' );

	// Configure tasks
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		copy: {
			main: {
				options: {
					mode: true,
				},
				src: [
					'**',
					'!.git/**',
					'!.gitignore',
					'!.gitattributes',
					'!*.sh',
					'!*.zip',
					'!eslintrc.json',
					'!README.md',
					'!Gruntfile.js',
					'!package.json',
					'!package-lock.json',
					'!composer.lock',
					'!phpcs.xml',
					'!phpcs.xml.dist',
					'!phpunit.xml.dist',
					'!node_modules/**',
					'!vendor/**',
					'!tests/**',
					'!scripts/**',
					'!config/**',
					'!bin/**',
					'!webpack.config.js',
					'!tailwind.config.js',
					'!postcss.config.js',
					'!phpstan-baseline.neon',
					'!phpstan.neon',
					'!artifact/**',
					'!src/**',
					'!.claude/**',
					'!CLAUDE.md',
					'!internal-docs/**',
				],
				dest: 'ast-block-templates/',
			},
		},

		compress: {
			main: {
				options: {
					archive: 'ast-block-templates-<%= pkg.version %>.zip',
					mode: 'zip',
				},
				files: [
					{
						src: [ './ast-block-templates/**' ],
					},
				],
			},
		},

		clean: {
			main: [ 'ast-block-templates' ],
			zip: [ '*.zip' ],
		},

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

	/* Register tasks */
	grunt.registerTask( 'release', [
		'clean:zip',
		'copy',
		'compress',
		'clean:main',
	] );

	// Bump Version - `grunt version-bump --ver=<version-number>`
	grunt.registerTask( 'version-bump', function () {
		let newVersion = grunt.option( 'ver' );

		if ( newVersion ) {
			newVersion = newVersion ? newVersion : 'patch';

			grunt.task.run( 'bumpup:' + newVersion );
			grunt.task.run( 'replace' );
		}
	} );
};
