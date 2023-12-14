import React from 'react'
import Comments from './Comments'

function CommentsList({ video }) {
    const comments = video.comments.map((comment) => {
        return comment
    })

    return (
        <div>
            <Comments comments={comments}/>
            {/* {vidComments.map((comment) => console.log(comment))}
            <h2><em>2 Comments</em></h2>
            <h3><em>duanebot</em></h3>
            <p>first!</p>
            <h3><em>gaeron</em></h3>
            <p>What a great tutorial!</p> */}
        </div>
    )
}

export default CommentsList