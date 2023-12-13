import React from 'react'
import video from "../data/video.js";
import TitleViews from './TitleViews'

function App() {
  console.log("Here's your data:", video);

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

      <div className="bodySection">

        <TitleViews video={video} />
        {/* <div className="titleViews">
          <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
          <p>730707 Views | Uploaded Oct 26, 2018</p>
        </div> */}
        {/* <div className="uiFeatures">
        <button>9210 👍</button><button>185 👎</button>
        <button>Hide Comments</button>
        </div>
       */}
      <hr />
      <div className="commentsSection">
        <h2><em>2 Comments</em></h2>
        <h3><em>duanebot</em></h3>
        <p>first!</p>
        <h3><em>gaeron</em></h3>
        <p>What a great tutorial!</p>
      </div>
  </div>
    </div>
  );
}

export default App;
