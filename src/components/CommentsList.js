import React from 'react'
import Comments from './Comments'

function CommentsList({ video, setVisible, handleVoteClick, newUpVote }) {

    return (
        <div>
            <Comments
                setVisible={setVisible}
                comments={video}
                key={""} 
                handleVoteClick={handleVoteClick}
                newUpVote={newUpVote}
                />
        </div>
    )
}

export default CommentsList