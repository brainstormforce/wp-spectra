<!-- Keep patience doc is coming -->

<!-- Previously we were updating icons like this  -->

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