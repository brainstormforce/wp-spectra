module.exports = function ( grunt ) {
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		copy: {
			main: {
				options: {
					mode: true,
				},
				src: [
					'**',
					'!node_modules/**',
					'!.git/**',
					'!*.sh',
					'!*.zip',
					'!eslintrc.json',
					'!README.md',
					'!Gruntfile.js',
					'!package.json',
					'!package-lock.json',
					'!.gitignore',
					'!.gitattributes',
					'!*.zip',
					'!Optimization.txt',
					'!composer.json',
					'!composer.lock',
					'!phpcs.xml.dist',
					'!phpunit.xml.dist',
					'!vendor/**',
					'!src/**',
					'!scripts/**',
					'!config/**',
					'!tests/**',
					'!bin/**',
					'!webpack.config.js',
					'!admin-core/node_modules/**',
					'!admin-core/src/**',
					'!admin-core/webpack.config.js',
					'!admin-core/package.json',
					'!admin-core/package-lock.json',
					'!fontawesome-custom-shorted-category.json',
					'!fontawesome-category.json',
				],
				dest: 'ultimate-addons-for-gutenberg/',
			},
		},
		compress: {
			main: {
				options: {
					archive:
						'spectra-<%= pkg.version %>.zip',
					mode: 'zip',
				},
				files: [
					{
						src: [ './ultimate-addons-for-gutenberg/**' ],
					},
				],
			},
		},
		clean: {
			main: [ 'ultimate-addons-for-gutenberg' ],
			zip: [ '*.zip' ],
		},
		makepot: {
			target: {
				options: {
					domainPath: '/',
					mainFile: 'ultimate-addons-for-gutenberg.php',
					potFilename: 'languages/ultimate-addons-for-gutenberg.pot',
					exclude: [ 'admin/bsf-core' ],
					potHeaders: {
						'poedit': true,
						'x-poedit-keywordslist': true,
					},
					type: 'wp-plugin',
					updateTimestamp: true,
				},
			},
		},
		addtextdomain: {
			options: {
				textdomain: 'ultimate-addons-for-gutenberg',
				updateDomains: true,
			},
			target: {
				files: {
					src: [
						'*.php',
						'**/*.php',
						'!node_modules/**',
						'!php-tests/**',
						'!bin/**',
						'!admin/bsf-core/**',
					],
				},
			},
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
			stable_tag: {
				src: [ 'readme.txt' ],
				overwrite: true,
				replacements: [
					{
						from: /Stable tag:\ .*/g,
						to: 'Stable tag: <%= pkg.version %>',
					},
				],
			},
			plugin_const: {
				src: [ 'classes/class-uagb-loader.php' ],
				overwrite: true,
				replacements: [
					{
						from: /UAGB_VER', '.*?'/g,
						to: "UAGB_VER', '<%= pkg.version %>'",
					},
				],
			},
			plugin_function_comment: {
				src: [
					'*.php',
					'**/*.php',
					'!node_modules/**',
					'!php-tests/**',
					'!bin/**',
					'!vendor/**',
				],
				overwrite: true,
				replacements: [
					{
						from: 'x.x.x',
						to: '<%=pkg.version %>',
					},
				],
			},
			plugin_main: {
				src: [ 'ultimate-addons-for-gutenberg.php' ],
				overwrite: true,
				replacements: [
					{
						from: /Version: \bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?(?:\+[\da-z-A-Z-]+(?:\.[\da-z-A-Z-]+)*)?\b/g,
						to: 'Version: <%= pkg.version %>',
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
		rtlcss: {
            options: {
                // rtlcss options
                config: {
                    preserveComments: true,
                    greedy: true
                },
                // generate source maps
                map: false
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'admin-core/assets/build',
                        src: [
                            '*.css',
                            '!*-rtl.css',
                        ],
                        dest: 'admin-core/assets/build',
                        ext: '-rtl.css'

                    },
                ]
            }
        },

		// Minified CSS.
		cssmin: {
			options: {
				keepSpecialComments: 0,
			},
			css: {
				files: [
					{
						expand: true,
						cwd: 'assets/css',
						src: [ '*.css', '!*.min.css', '!blocks/*.css' ],
						dest: 'assets/css',
						ext: '.min.css',
					},
				],
			},
		},

		// Minified JS.
		uglify: {
			js: {
				options: {
					compress: {
						drop_console: true, // <-
					},
				},
				files: [
					{
						expand: true,
						cwd: 'assets/js',
						src: [ '*.js', '!*.min.js' ],
						dest: 'assets/js',
						ext: '.min.js',
					},
				],
			},
		},

		json2php: {
			options: {
				// Task-specific options go here.
				compress: true,
				cover ( phpArrayString, destFilePath ) { // eslint-disable-line no-unused-vars
					phpArrayString = phpArrayString.replace( /"%%translation_start%%/g, '__("' );
					phpArrayString = phpArrayString.replace( /%%translation_end%%"/g, '","ultimate-addons-for-gutenberg")' );
					return (
						'<?php\n/**\n * Font awesome icons array array file.\n *\n * @package     Spectra\n * @author      Spectra\n * @link        https://wpspectra.com/\n */\n\n/**\n * Returns font awesome icons array \n */\nreturn ' +
						phpArrayString +
						';\n'
					);
				},
			},
			your_target: {
				files: {
					'blocks-config/uagb-controls/uagb-icons.php':
						'blocks-config/uagb-controls/UAGBIcon.json',
					'blocks-config/uagb-controls/spectra-icons-v6.php':
						'blocks-config/uagb-controls/SpectraIconsV6.json',
				},
			},
		},
	} );

	/* Load Tasks */
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.loadNpmTasks( 'grunt-wp-i18n' );

	/* Version Bump Task */
	grunt.loadNpmTasks( 'grunt-bumpup' );
	grunt.loadNpmTasks( 'grunt-text-replace' );

	/* Read File Generation task */
	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );
	grunt.loadNpmTasks( 'grunt-rtlcss' );
	grunt.loadNpmTasks( 'grunt-json2php' );

	/* Register task started */
	grunt.registerTask( 'release', [
		'clean:zip',
		'copy',
		'compress',
		'clean:main',
	] );
	grunt.registerTask( 'release-no-clean', [ 'clean:zip', 'copy' ] );
	grunt.registerTask( 'textdomain', [ 'addtextdomain' ] );
	grunt.registerTask( 'i18n', [ 'addtextdomain', 'makepot' ] );

	// Default
	//grunt.registerTask('default', ['style']);

	// Version Bump `grunt bump-version --ver=<version-number>`
	grunt.registerTask( 'bump-version', function () {
		let newVersion = grunt.option( 'ver' );

		if ( newVersion ) {
			newVersion = newVersion ? newVersion : 'patch';

			grunt.task.run( 'bumpup:' + newVersion );
			grunt.task.run( 'replace' );
		}
	} );

	// Keep category in each icon.
	function keep_category( fonts, currentFont, getCategories ){
		for( const category in getCategories ){
			if( Array.isArray( getCategories[ category ].icons ) && getCategories[ category ].icons.includes( currentFont ) ){
				fonts[currentFont].categories.push( category );
			}
		}
	}

	function keep_custom_category( fonts, currentFont, getCategoriesCustomTitle ){
		const current_icon_category = fonts[currentFont].categories;
		if( !current_icon_category.length ){
			return;
		}
		for( const key in getCategoriesCustomTitle ){
				const original_categories = getCategoriesCustomTitle[key].original_cate;
				const get_common_values = original_categories.filter( ( value )=>current_icon_category.includes( value ) );
				if( get_common_values.length ){
					fonts[currentFont].custom_categories.push( key );
				}
			}
		// return fonts;
	}

	// Keep category list in icons array.
	function keep_category_list( fonts,customCategory ){
		const keep_category_array = [];
		for( const category in customCategory ){
			if( customCategory[ category ] && customCategory[ category ] ?.title ){	
				// we will keep count from here.
				const put_category_with_title = { slug:category } ;
				put_category_with_title.title = `%%translation_start%%${customCategory[ category ].title}%%translation_end%%`;
				keep_category_array.push( put_category_with_title );
			}
		}
		fonts.uagb_category_list = keep_category_array;
		return fonts;
	}

	// keep custom category in icons.
	function keep_custom_category_in_icons( fonts, getCustomCategoryTitle ) {
		for ( const font in fonts ) {
			// check in custom icons.
			for ( const customCate in getCustomCategoryTitle ) {
				if ( getCustomCategoryTitle[ customCate ].icons.includes( font ) ) {
					if ( fonts[ font ]?.custom_categories ) {
						fonts[ font ].custom_categories.push( customCate );
					}
				}
			}
		}
		return fonts;
	}

	// Update Font Awesome library.
	grunt.registerTask( 'font-awesome', function () {
		this.async();
		const request = require( 'request' );
		const getCategories = grunt.file.readJSON( './fontawesome-category.json' );
		const getCategoriesCustomTitle = grunt.file.readJSON( './fontawesome-custom-shorted-category.json' );
		const fs = require( 'fs' );

		request(
			'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json',
			function ( error, response, body ) {
				if ( response && response.statusCode === 200 ) {
					console.log( 'Fonts successfully fetched!' ); // eslint-disable-line

					const fonts = JSON.parse( body );
					Object.keys( fonts ).map( ( key ) => {

						// Put category.
						fonts[key].categories = [];
						fonts[key].custom_categories = [];
						keep_category( fonts, key, getCategories );
						keep_custom_category( fonts, key, getCategoriesCustomTitle );
						if( isNaN( fonts[key].label ) ){
							fonts[key].label = `%%translation_start%%${fonts[key].label}%%translation_end%%`;
						}
						delete fonts[key].categories;
						delete fonts[key].changes;
						delete fonts[key].ligatures;
						delete fonts[key].search;
						delete fonts[key].styles;
						delete fonts[key].unicode;
						delete fonts[key].voted;
						delete fonts[key].free;
						return key;
					} );

					fs.writeFile(
						'blocks-config/uagb-controls/UAGBIcon.json',
						JSON.stringify( fonts, null, 4 ),
						function ( err ) {
							if ( ! err ) {
								console.log( 'Font-Awesome library updated!' ); // eslint-disable-line
							}
						}
					);
				}
			}
		);
	} );
	
	grunt.registerTask( 'font-awesome-cate-list', function () {
		this.async();
		// Source https://github.com/FortAwesome/Font-Awesome/blob/6.x/metadata/categories.yml.
		const request = require( 'request' );
		const fs = require( 'fs' );
		request(
			'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/categories.yml',
			function ( error, response, body ) {
					fs.writeFile(
						'fontawesome-category.yml',
						body,
						function ( err ) {
							if ( ! err ) {
								console.log( 'Categories added' ); // eslint-disable-line
								const yaml = require( 'js-yaml' );
								const category_lists = yaml.load( fs.readFileSync( 'fontawesome-category.yml', {encoding: 'utf-8'} ) ); 
								fs.writeFileSync( 'fontawesome-category.json', JSON.stringify( category_lists, null, 2 ) );
								fs.unlinkSync( 'fontawesome-category.yml' );
							}
						}
					);
			}
		);

	} );

	// Update Font Awesome v6 library.
	grunt.registerTask( 'font-awesome-v6', function () {
		this.async();
		const request = require( 'request' );
		const getCategories = grunt.file.readJSON( './fontawesome-category.json' );
		const getCategoriesCustomTitle = grunt.file.readJSON( './fontawesome-custom-shorted-category.json' );
		// This is custom category list like in our icon library brand category is not available so we put manually here.
		const getCustomCategoryTitle = grunt.file.readJSON( './custom-icon-category.json' );
		const fs = require( 'fs' );
		
		request(
			'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json',
			function ( error, response, body ) {
				if ( response && response.statusCode === 200 ) {
					console.log( 'V6 Fonts successfully fetched!' ); // eslint-disable-line

					let fonts = JSON.parse( body );
					Object.keys( fonts ).map( ( key ) => {
						
						fonts[key].categories = [];
						fonts[key].custom_categories = [];
						keep_category( fonts, key, getCategories );
						keep_custom_category( fonts, key, getCategoriesCustomTitle );
						delete fonts[key].categories;
						if( isNaN( fonts[key].label ) ){
							fonts[key].label = `%%translation_start%%${fonts[key].label}%%translation_end%%`;
						}
						delete fonts[key].changes;
						delete fonts[key].ligatures;
						delete fonts[key].search;
						delete fonts[key].styles;
						delete fonts[key].unicode;
						delete fonts[key].voted;
						delete fonts[key].free;
						delete fonts[key].aliases;
						return key;
					} );

					// keep custom category in icons 
					fonts = keep_custom_category_in_icons( fonts, getCustomCategoryTitle ); 

					// Put custom categories list.
					fonts = keep_category_list( fonts, getCategoriesCustomTitle );

					fs.writeFile(
						'blocks-config/uagb-controls/SpectraIconsV6.json',
						JSON.stringify( fonts, null, 4 ),
						function ( err ) {
							if ( ! err ) {
								console.log( 'Font-Awesome v6 library updated!' ); // eslint-disable-line
							}
						}
					);
				}
			}
		);
	} );

	// Generate Read me file
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );

	// rtlcss, you will still need to install ruby and sass on your system manually to run this
	grunt.registerTask( 'rtl', ['rtlcss'] );

	grunt.registerTask( 'minify', [ 'rtlcss', 'cssmin', 'uglify' ] );

	grunt.registerTask( 'font-awesome-php-array-update', [ 'json2php' ] );
};