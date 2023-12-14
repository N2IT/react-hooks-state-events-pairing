import React, { useState } from 'react'

function Comments({ comments, setVisible }) {

    const [ upVotes, setAsUpVotes ] = useState(0)

    function handleVoteClick(commentId){
        setAsUpVotes(prevUpVotes => ({
            ...prevUpVotes,
            [commentId]:(prevUpVotes[commentId] || 0) + 1
        }))
        debugger
    }

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
                        <p id={m.comment} onClick={() => handleVoteClick(m.comment)}>{m.comment} <br /> Upvote ⬆️{upVotes[m.comment]}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments
