import React, { useState } from 'react' 

function TitleViews({ video }) {
    const [ thumbsUp, setThumbsUp ] = useState(0)
    const [ thumbsDown, setThumbsDown ] = useState(0)

    return (
        <div>
        <h1>{video.title}</h1>
        <p>{video.views} | Uploaded {video.createdAt}</p>
        <button onClick={() => setThumbsUp(thumbsUp + 1)}>{video.upvotes + thumbsUp}👍</button><button onClick={() => setThumbsDown(thumbsDown + 1)}>{video.downvotes + thumbsDown}👎</button><button>Hide Comments</button>
        </div>
    )
}

export default TitleViews