import React, { useState } from 'react'

function Comments({ comments, setVisible, search }) {

    const [ upVotes, setAsUpVotes ] = useState(0)

    function handleVoteClick(commentId){
        //setAsUpVotes gets the current 'previous' state of upVotes as its argument ('...prevUpVotes'). current state = 0
        setAsUpVotes(prevUpVotes => ({
            //create new object that spreads previous upVotes to keep counts of all other comments
            ...prevUpVotes,
            //then updates the count for the specific comment being clicked
            [commentId]:(prevUpVotes[commentId] || 0) + 1
            //if commentId doesn't exist it defaults to 0 then adds 1
        }))
    }

    // onClick={() => setThumbsUp(thumbsUp + 1)}>{video.upvotes + thumbsUp}👍
    // setAsUpVote(upVote + 1)


    const viewComments = comments.comments
    .filter((comment) => {
        return comment.user.includes(search)
    })
    .map((visible) => {
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
                        <p id={m.comment} onClick={() => handleVoteClick(m.comment)}>{m.comment}{"Upvote ⬆️"}{upVotes[m.comment]}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments
