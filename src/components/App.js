import React, { useState } from 'react'
import video from "../data/video.js";
import TitleViews from './TitleViews'
import CommentsList from './CommentsList.js'

function App() {
  // console.log("Here's your data:", video);
  const [thumbsUp, setThumbsUp] = useState(0)
  const [thumbsDown, setThumbsDown] = useState(0)
  const [setVisible, setAsVisible] = useState(true)

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
        <CommentsList setVisible={setVisible} video={video} />
      </div>
    </div>
  );
}

export default App;
