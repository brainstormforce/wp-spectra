module.exports = function ( grunt ) {
	'use strict';

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		addtextdomain: {
			options: {
				textdomain: 'one-onboarding',
			},
			update_all_domains: {
				options: {
					updateDomains: true,
				},
				src: [
					'*.php',
					'**/*.php',
					'!.git/**/*',
					'!bin/**/*',
					'!node_modules/**/*',
					'!tests/**/*',
					'!vendor/**/*',
				],
			},
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					exclude: [
						'.git/*',
						'bin/*',
						'node_modules/*',
						'tests/*',
						'vendor/*',
					],
					mainFile: 'one-onboarding.php',
					potFilename: 'one-onboarding.pot',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true,
					},
					type: 'wp-plugin',
					updateTimestamp: true,
				},
			},
		},

		copy: {
			main: {
				options: {
					mode: true,
				},
				src: [
					'**',
					'!*.zip',
					'!node_modules/**',
					'!dist/**',
					'!.git/**',
					'!bin/**',
					'!.gitlab-ci.yml',
					'!tests/**',
					'!phpunit.xml',
					'!*.sh',
					'!*.map',
					'!Gruntfile.js',
					'!package.json',
					'!package-lock.json',
					'!.gitignore',
					'!phpunit.xml',
					'!README.md',
					'!sass/**',
					'!vendor/**',
					'!composer.json',
					'!composer.lock',
					'!phpcs.xml',
					'!phpstan.neon',
					'!phpstan-baseline.neon',
					'!.editorconfig',
					'!phpinsights.php',
					'!artifacts/**',
					'!.claude/**',
					'!CLAUDE.md',
					'!internal-docs/**',
					'!src/**',
					'!jsconfig.json',
					'!postcss.config.js',
					'!tailwind.config.js',
					'!webpack.config.js',
					'!assets/css/**', // Currently not in use.
					'!assets/js/**', // Currently not in use.
				],
				dest: 'one-onboarding/',
			},
		},

		compress: {
			main: {
				options: {
					archive: 'artifacts/one-onboarding-<%= pkg.version %>.zip',
					mode: 'zip',
				},
				files: [
					{
						src: [ './one-onboarding/**' ],
					},
				],
			},
		},

		clean: {
			main: [ 'one-onboarding' ],
			zip: [ 'artifacts/one-onboarding-<%= pkg.version %>.zip' ],
		},

		replace: {
			plugin_main: {
				src: [ 'one-onboarding.php' ],
				overwrite: true,
				replacements: [
					{
						from: /Version:\s*(.*)$/gm,
						to: 'Version: <%= pkg.version %>',
					},
				],
			},

			plugin_const: {
				src: [ 'one-onboarding.php' ],
				overwrite: true,
				replacements: [
					{
						from: /define\(\s*'ONE_ONBOARDING_VER',\s*'(.*)'\s*\);/g,
						to: "define( 'ONE_ONBOARDING_VER', '<%= pkg.version %>' );",
					},
				],
			},
		},

		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt',
				},
			},
		},
	} );

	// Load grunt tasks
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-text-replace' );

	// Register tasks
	grunt.registerTask( 'release', [
		'clean:zip',
		'replace',
		'copy:main',
		'compress:main',
		'clean:main',
	] );

	grunt.registerTask( 'textdomain', [ 'addtextdomain' ] );
	grunt.registerTask( 'dist', [ 'clean:zip', 'replace', 'makepot' ] );

	grunt.util.linefeed = '\n';
};
