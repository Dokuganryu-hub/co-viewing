import ShowYouTubePlayer from './YouTubePlayer.jsx'
import {useState} from "react";

function App() {

  const [videoId, setVideoId] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const submittedLink = new FormData(event.currentTarget).get('videoLink');
    const cleanId = new URL(submittedLink).searchParams.get('v');
    setVideoId(cleanId);
  }

  return (
    <>
      {/* <section id="header"><PageHeader /></section> */}
      <section id="player" className="player-section">
        <p>Enter a YouTube video link:</p>
        <form id="videoForm" onSubmit={handleSubmit}>
          <input type="text" id="videoLink" name="videoLink" />
          <button type="submit">Submit</button>
        </form>
        <ShowYouTubePlayer videoId={videoId} />
      </section>
    </>
  )
}

export default App
