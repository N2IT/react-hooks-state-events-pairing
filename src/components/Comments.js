import React from 'react'

function Comments({ comments, setVisible }) {
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
                        <p>{m.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments
