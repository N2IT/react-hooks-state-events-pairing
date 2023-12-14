import React from 'react'
import Comments from './Comments'

function CommentsList({ video, setVisible }) {
    
    return (
        <div>
            <Comments 
            setVisible={setVisible} 
            comments={video}
            key={""}/>
        </div>
    )
}

export default CommentsList