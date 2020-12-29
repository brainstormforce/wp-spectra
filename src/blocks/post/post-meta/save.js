
export default function save() {
    return <div className='uagb-post-grid-byline'>
            <span className='uagb-post__author'>
                <span className="dashicons-admin-users dashicons"></span>
                Author Name
            </span>

            <time className='uagb-post__date'>
                <span className="dashicons-calendar dashicons"></span>
                Post Date
            </time>
            <span className='uagb-post__comment' >
                <span className="dashicons-admin-comments dashicons"></span>
                Comments
            </span>
            <span className='uagb-post__taxonomy' >
                <span className="dashicons-tag dashicons"></span>
                Category
            </span>	
        </div>

}