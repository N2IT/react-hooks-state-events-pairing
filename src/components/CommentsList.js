import React from 'react'
import Comments from './Comments'

function CommentsList({ video, setVisible, search }) {

    return (
        <div>
            <Comments
                setVisible={setVisible}
                comments={video}
                key={""}
                search={search}
                />
        </div>
    )
}

export default CommentsList