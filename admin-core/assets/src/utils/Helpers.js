let admin_slug = uag_react.admin_base_slug;
let admin_url = uag_react.admin_base_url;

export function getAdminPageBase() {
	let admin_page_base = `${ admin_url }?page=${ admin_slug }`;

	return admin_page_base;
}

export function getEditPostLink( post_id ) {
	let edit_url = `${ admin_url }post.php?post=${ post_id }&action=edit`;

	return edit_url;
}

export function getEditFlowLink( flow_id = false ) {
	let admin_page_base = '#';

	if ( flow_id ) {
		admin_page_base = getAdminPageBase();
	}

	return admin_page_base;
}

export function validateTitleField( title, max_length, display_length ){
	return title.length > max_length ? title.substring(0, display_length) + "..." : title;
}

const XmlEntitiesObj = require( 'html-entities' ).XmlEntities, // <>"'& + &#...; decoding
	Html4EntitiesObj = require( 'html-entities' ).Html4Entities, // HTML4 entities.
	Html5EntitiesObj = require( 'html-entities' ).Html5Entities, // HTML5 entities.
	AllHtmlEntitiesObj = require( 'html-entities' ).AllHtmlEntities; // Synonym for HTML5 entities.

export const XmlEntities = XmlEntitiesObj;
export const Html4Entities = Html4EntitiesObj;
export const Html5Entities = Html5EntitiesObj;
export const AllHtmlEntities = AllHtmlEntitiesObj;

function conditionsHelper() {
	var self = this;

	this.compare = function ( leftValue, rightValue, operator ) {
		switch ( operator ) {
			case '==':
				return leftValue == rightValue;
			case '!=':
				return leftValue != rightValue;
			case '!==':
				return leftValue !== rightValue;
			case 'in':
				return -1 !== rightValue.indexOf( leftValue );
			case '!in':
				return -1 === rightValue.indexOf( leftValue );
			case 'contains':
				return -1 !== leftValue.indexOf( rightValue );
			case '!contains':
				return -1 === leftValue.indexOf( rightValue );
			case '<':
				return leftValue < rightValue;
			case '<=':
				return leftValue <= rightValue;
			case '>':
				return leftValue > rightValue;
			case '>=':
				return leftValue >= rightValue;
			default:
				return leftValue === rightValue;
		}
	};

	this.check = function ( conditions, options ) {
		var isOrCondition = 'or' === conditions.relation,
			conditionsResult = ! isOrCondition;

		conditions.fields.map( function ( field ) {
			let comparisonResult;

			comparisonResult = self.compare(
				options[ field.name ],
				field.value,
				field.operator
			);

			if ( isOrCondition ) {
				if ( comparisonResult ) {
					conditionsResult = true;
				}
			}

			if ( ! comparisonResult ) {
				conditionsResult = false;
			}
		} );

		return conditionsResult;
	};

	this.isActiveControl = function ( control, options ) {
		let conditions = control?.conditions ? control?.conditions : false;

		if ( conditions && ! self.check( conditions, options ) ) {
			return false;
		}

		return true;
	};
}

export const conditions = new conditionsHelper();
