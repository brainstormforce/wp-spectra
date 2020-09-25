
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const attributes = {
    block_id: {
		type: "string"
	},
	dateRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default: "Date"
    },
    additonalVal : {
        type: "boolean",
        default: false
    },
    minYear: {
        type: "number",
        default : yyyy,
    },
    minMonth: {
        type: "number",
        default : mm,
    },
    minDay: {
        type: "number",
        default : dd,
    },
    maxYear: {
		type: "number"
    },
    maxMonth: {
		type: "number"
    },
    maxDay: {
		type: "number"
    },
    
			
}
export default attributes
