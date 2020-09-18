const attributes = {
    block_id: {
		type: "string"
	},
	uploadRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default: "Upload"
    },
    formats:{
        type: "array",
        default: [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "pdf",
                "doc",
                "docx",
                "ppt",
                "pptx",
                "odt",
                "avi",
                "ogg",
                "m4a",
                "mov",
                "mp3",
                "mp4",
                "mpg",
                "wav",
                "wmv"
        ]
    }
}
export default attributes
