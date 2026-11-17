import './App.css'
import PageHeader from './PageHeader.jsx'
import ShowYouTubePlayer from './YouTubePlayer.jsx'
import {useState} from "react";

function App() {

  const [videoLink, setVideoLink] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const submittedLink = new FormData(event.currentTarget).get('videoLink');
    setVideoLink(submittedLink);
  }

  return (
    <>
      <section id="header"><PageHeader /></section>
      <section id="center">
        <p>Enter a YouTube video link:</p>
        <form id="videoForm" onSubmit={handleSubmit}>
          <input type="text" id="videoLink" name="videoLink" />
          <button type="submit">Submit</button>
        </form>
        <ShowYouTubePlayer videoLink={videoLink} />
      </section>
    </>
  )
}

export default App
