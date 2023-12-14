import React from 'react'

function Comments({ comments, setVisible, handleVoteClick, newUpVote }) {

    // onClick={() => setThumbsUp(thumbsUp + 1)}>{video.upvotes + thumbsUp}👍
    // setAsUpVote(upVote + 1)


    const viewComments = comments.comments.map((visible) => {
        if (setVisible) {
            return visible
        } else {
            return setVisible
        }
    })
    return (
        <div>
            <h2><em>2 Comments</em></h2>
            {viewComments.map((m) => {
                return (
                    <div key={m.comment}>
                        <h3><em>{m.user}</em></h3>
                        <p>{m.comment}<span id={m.comment} onClick={(e) => handleVoteClick(e.target.id)}>Upvote⬆️{newUpVote}</span></p>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments
