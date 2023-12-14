import React, { useState } from 'react'
import video from "../data/video.js";
import TitleViews from './TitleViews'
import CommentsList from './CommentsList.js'

function App() {
  // console.log("Here's your data:", video);
  const [thumbsUp, setThumbsUp] = useState(0)
  const [thumbsDown, setThumbsDown] = useState(0)
  const [setVisible, setAsVisible] = useState(true)
  const [upVote, setAsUpVote] = useState(0)
    
  
  const upVoteId = video.comments.map((comment) => {
        return comment})
    
      function handleVoteClick(id){
        const newUpVote = upVoteId.map((voted) => {
          if(voted.comment === id) {
            return upVote + 1
          }
        })
        setAsUpVote(newUpVote)
        // console.log(id)
        // console.log(upVoteId)
      }
  

  function handleClick() {
    setAsVisible((setVisible) => !setVisible)
  }

  const cta = setVisible ? "Hide Comments" : "Show Comments"

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <TitleViews
          thumbsUp={thumbsUp}
          setThumbsUp={setThumbsUp}
          thumbsDown={thumbsDown}
          setThumbsDown={setThumbsDown}
          video={video}
          handleClick={handleClick}
          cta={cta}
        />
        <hr />
        <CommentsList
          setVisible={setVisible}
          video={video}
          handleVoteClick={handleVoteClick}
          upVote={upVote}
          setAsUpVote={setAsUpVote}
          newUpVote={newUpVote} />
      </div>
    </div>
  );
}

export default App;
