import React from 'react' 

function TitleViews({ video }) {
    let countUp = video.upvotes
    // function handleClicks() {
    //     video.upvotes +=1
    //     console.log(video.upvotes)
    // }

    return (
        <div>
        <h1>{video.title}</h1>
        <p>{video.views} | Uploaded {video.createdAt}</p>
        <button onClick={handleClicks}>{video.upvotes}👍</button><button>{video.downvotes}👎</button><button>Hide Comments</button>
        </div>
    )
}

export default TitleViews