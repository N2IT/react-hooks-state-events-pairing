import React from 'react'
import Search from './Search'

function TitleViews({ video, thumbsUp, thumbsDown, setThumbsUp, setThumbsDown, handleClick, cta, search, setSearch, handleSearchChange }) {

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} | Uploaded {video.createdAt}</p>
            <button onClick={() => setThumbsUp(thumbsUp + 1)}>{video.upvotes + thumbsUp}👍</button><button onClick={() => setThumbsDown(thumbsDown + 1)}>{video.downvotes + thumbsDown}👎</button><button onClick={handleClick}>{cta}</button>
            <Search onSearchChange={handleSearchChange} search={search} setSearch={setSearch}/>
        </div>
    )
}

export default TitleViews