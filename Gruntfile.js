module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( "package.json" ),

		copy: {
			main: {
				options: {
					mode: true
				},
				src: [
					"**",
					"!node_modules/**",
					"!.git/**",
					"!*.sh",
					"!eslintrc.json",
					"!README.md",
					"!Gruntfile.js",
					"!package.json",
					"!package-lock.json",
					"!.gitignore",
					"!ultimate-addons-for-gutenberg.zip",
					"!Optimization.txt",
					"!composer.json",
					"!composer.lock",
					"!phpcs.xml.dist",
					"!vendor/**",
					"!src/**",
					"!scripts/**",
					"!config/**"
				],
				dest: "ultimate-addons-for-gutenberg/"
			}
		},
		compress: {
			main: {
				options: {
					archive: "ultimate-addons-for-gutenberg.zip",
					mode: "zip"
				},
				files: [
					{
						src: [
							"./ultimate-addons-for-gutenberg/**"
						]

					}
				]
			}
		},
		clean: {
			main: ["ultimate-addons-for-gutenberg"],
			zip: ["ultimate-addons-for-gutenberg.zip"],
		},
		makepot: {
			target: {
				options: {
					domainPath: "/",
					mainFile: "ultimate-addons-for-gutenberg.php",
					potFilename: "languages/ultimate-addons-for-gutenberg.pot",
					exclude: [
						"admin/bsf-core",
					],
					potHeaders: {
						poedit: true,
						"x-poedit-keywordslist": true
					},
					type: "wp-plugin",
					updateTimestamp: true
				}
			}
		},
		addtextdomain: {
			options: {
				textdomain: "ultimate-addons-for-gutenberg",
				updateDomains: true
			},
			target: {
				files: {
					src: ["*.php", "**/*.php", "!node_modules/**", "!php-tests/**", "!bin/**", "!admin/bsf-core/**"]
				}
			}
		},
		bumpup: {
			options: {
				updateProps: {
					pkg: "package.json"
				}
			},
			file: "package.json"
		},
		replace: {
			plugin_main: {
				src: [ "ultimate-addons-for-gutenberg.php" ],
				overwrite: true,
				replacements: [
					{
						from: /Version: \d{1,1}\.\d{1,2}\.\d{1,2}/g,
						to: "Version: <%= pkg.version %>"
					}
				]
			},

			plugin_const: {
				src: [ "classes/class-uagb-loader.php" ],
				overwrite: true,
				replacements: [
					{
						from: /UAGB_VER', '.*?'/g,
						to: "UAGB_VER', '<%= pkg.version %>'"
					}
				]
			}
		},
		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt'
				}
			},
		},
	})

	/* Load Tasks */
	grunt.loadNpmTasks( "grunt-contrib-copy" )
	grunt.loadNpmTasks( "grunt-contrib-compress" )
	grunt.loadNpmTasks( "grunt-contrib-clean" )

	grunt.loadNpmTasks( "grunt-wp-i18n" )

	/* Version Bump Task */
	grunt.loadNpmTasks( "grunt-bumpup" )
	grunt.loadNpmTasks( "grunt-text-replace" )

	/* Read File Generation task */
	grunt.loadNpmTasks('grunt-wp-readme-to-markdown');



	/* Register task started */
	grunt.registerTask("release", ["clean:zip", "copy","compress","clean:main"])
	grunt.registerTask("i18n", ["addtextdomain", "makepot"])

	// Default
	//grunt.registerTask('default', ['style']);
    
	// Version Bump `grunt bump-version --ver=<version-number>`
	grunt.registerTask( "bump-version", function() {
		
		var newVersion = grunt.option("ver")

		if ( newVersion ) {
			grunt.task.run( "bumpup:" + newVersion )
			grunt.task.run( "replace" )
		}
	} )

	// Generate Read me file
	grunt.registerTask( 'readme', ['wp_readme_to_markdown'] );

}
