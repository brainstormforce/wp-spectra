/**
 * As we have for example 1800 icons list so we will not put all icons in same file we will split it in 4 php files.
 * Now we will have 4 php file for icons.
 */
const NUMBER_OF_ICON_CHUNKS = 4;
const ICONS_PHP_FILE_CHUNKS = {};
for ( let i = 0; i < NUMBER_OF_ICON_CHUNKS; i++ ) {
	ICONS_PHP_FILE_CHUNKS[ `blocks-config/uagb-controls/spectra-icons-v6-${i}.php` ] = `blocks-config/uagb-controls/SpectraIconsV6-${i}.json`;
}

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
					'!*.neon',
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
			SpectraIconsV6: [ 'blocks-config/uagb-controls/*.json' ]
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
						from: /x.x.x/ig,
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
						'<?php\n/**\n * Font awesome icons array array file.\n *\n * @package     UAGB\n * @author      Brainstorm Force\n * @link        https://wpspectra.com/\n */\n\n/**\n * Returns font awesome icons array \n */\nreturn ' +
						phpArrayString +
						';\n'
					);
				},
			},
			your_target: {
				files: ICONS_PHP_FILE_CHUNKS,
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

	// Clean up svg icon json file.
	grunt.registerTask( 'clean-icon-svg-json-file', [ 'clean:SpectraIconsV6' ] );

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

	// Update Google Font library.
    grunt.registerTask( 'google-fonts', function () {
		this.async();
		const request = require( 'request' );
		const fs = require( 'fs' );
		request(
			'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAVfm2WzgRiV5posH5f_LNNKAQfv80I6yg',
			function ( error, response, body ) {
				const data = JSON.parse( body );
				let fonts = {};

				data.items.forEach( ( font ) => {
					const fontName = font.family;
					let fontVariant = [];
					if( font.variants ) {
						const copyFontVariant = [ ...font.variants ];
						const filterFontVariant =  copyFontVariant.filter( variant => /^[0-9]+$/.test( variant ) && !/^[a-z]+$/.test( variant ) );
						filterFontVariant.push( '400' );
						const sortArray = filterFontVariant.sort( ( a, b ) => parseInt( a ) - parseInt( b ) );
						fontVariant = [ 'Default', ...sortArray ];
                    }

					const fontData = {
						v: font.variants || [],
						subset: font.subsets || [],
						weight: fontVariant,
						i: [],
					};

					if ( fontData.v.includes( 'italic' ) ) {
						fontData.i.push( 'normal', 'italic' );
				    } else {
						fontData.i.push( 'normal' );
					}

					fonts[ fontName ] = fontData;
				} );

				fonts = JSON.stringify( fonts );
				const keepFont = `const fonts = ${ fonts }; export default fonts;`;

				fs.writeFile( 'blocks-config/uagb-controls/fonts.js', keepFont, function ( err ) {
					if ( ! err ) {
						console.log( 'Google font update successfully !' ); // eslint-disable-line no-console
					}
				} );
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
								console.log( 'Categories added' ); // eslint-disable-line no-console
								const yaml = require( 'js-yaml' );
								const category_lists = yaml.load( fs.readFileSync( 'fontawesome-category.yml', { encoding: 'utf-8' } ) );
								fs.writeFileSync( './bin/icons-configure/fontawesome-category.json', JSON.stringify( category_lists, null, 2 ) );
								fs.unlinkSync( 'fontawesome-category.yml' );
							}
						}
					);
			}
		);

	} );


	function createChunksOfObject( obj, chunksSize = 3 ) {
		const entries = Object.entries( obj );
		const chunkSize = Math.ceil( entries.length / chunksSize ); // Calculate the chunk size for equal division
		const dividedArray = [];

		for ( let i = 0; i < entries.length; i += chunkSize ) {
			const chunk = entries.slice( i, i + chunkSize );
			const chunkObj = Object.fromEntries( chunk );
			dividedArray.push( chunkObj );
		}
		return dividedArray;
	}

	// Update Font Awesome v6 library.
	grunt.registerTask( 'font-awesome-v6', function () {
		this.async();
		const getCategories = grunt.file.readJSON( './bin/icons-configure/fontawesome-category.json' );
		const getCategoriesCustomTitle = grunt.file.readJSON( './bin/icons-configure/fontawesome-custom-shorted-category.json' );
		// This is custom category list like in our icon library brand category is not available so we put manually here.
		const getCustomCategoryTitle = grunt.file.readJSON( './bin/icons-configure/custom-icon-category.json' );
		let getDownloadedIcons = grunt.file.readJSON( './bin/icons-configure/spectra-icons-v6.json' );
		const fs = require( 'fs' );
		// We have take initially icons from 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json' but we have downloaded and keep this in bin folder due to back word compatibility

		// eslint-disable-next-line array-callback-return
		Object.keys( getDownloadedIcons ).map( ( key ) => {
			const iconObj = getDownloadedIcons[key];
			iconObj.categories = [];
			iconObj.custom_categories = [];
			keep_category( getDownloadedIcons, key, getCategories );
			keep_custom_category( getDownloadedIcons, key, getCategoriesCustomTitle );
			delete iconObj.categories;

			// Remove unwanted properties from icon list only we will keep in icon list are width height and path.
			if( iconObj.svg?.solid ){
				const keepSolidRequiredData = { ...{
					width : iconObj.svg.solid.width,
					height : iconObj.svg.solid.height,
					path : iconObj.svg.solid.path
				}};
				iconObj.svg.solid = keepSolidRequiredData;
			}

			if( iconObj.svg?.brands  ){
				const keepBrandsRequiredData = { ...{
					width : iconObj.svg.brands.width,
					height : iconObj.svg.brands.height,
					path : iconObj.svg.brands.path
				}};
				iconObj.svg.brands = keepBrandsRequiredData;
			}

			if( iconObj.svg?.regular  ){
				const keepBrandsRequiredData = { ...{
					width : iconObj.svg.regular.width,
					height : iconObj.svg.regular.height,
					path : iconObj.svg.regular.path
				}};
				iconObj.svg.regular = keepBrandsRequiredData;
			}

			if( isNaN( iconObj.label ) ){
				iconObj.label = `%%translation_start%%${iconObj.label}%%translation_end%%`;
			}
		} );

		// keep custom category in icons
		getDownloadedIcons = keep_custom_category_in_icons( getDownloadedIcons, getCustomCategoryTitle );

		// Put custom categories list.
		getDownloadedIcons = keep_category_list( getDownloadedIcons, getCategoriesCustomTitle );

		const createChunks = createChunksOfObject( getDownloadedIcons, NUMBER_OF_ICON_CHUNKS );

		for ( const chunkKey in createChunks ) {
			const pieceOfIcon = createChunks[ chunkKey ];
			const configFilePath = `blocks-config/uagb-controls/SpectraIconsV6-${chunkKey}.json`;
			fs.writeFile( configFilePath ,
				JSON.stringify( pieceOfIcon, null, 4 ),
				function ( err ) {
					if ( ! err ) {
						console.log('Font-Awesome v6 chunk ' + chunkKey + ' library updated!'); // eslint-disable-line
					}
				}
			);
		}
	} );

	// Generate Read me file
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );

	// rtlcss, you will still need to install ruby and sass on your system manually to run this
	grunt.registerTask( 'rtl', ['rtlcss'] );

	grunt.registerTask( 'minify', [ 'rtlcss', 'cssmin', 'uglify' ] );

	grunt.registerTask( 'font-awesome-php-array-update', [ 'json2php', 'clean-icon-svg-json-file' ] );
};
