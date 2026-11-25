import ShowYouTubePlayer from './YouTubePlayer.jsx'
import {useState} from "react";

function App() {

  const [videoId, setVideoId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const submittedLink = new FormData(event.currentTarget).get('videoLink');
    
    try {
      const currentUrl = new URL(submittedLink);
      let cleanId = currentUrl.searchParams.get('v');
      if (currentUrl.hostname !== 'www.youtube.com' && currentUrl.hostname !== 'youtube.com') {
        if (currentUrl.hostname !== 'youtu.be') {
          throw new Error('It is not a YouTube link');
        } else {
          cleanId = currentUrl.pathname.slice(1);
        }
      }
      if (!cleanId) {
        throw new Error('Invalid YouTube link');
      }
      setVideoId(cleanId);
      setErrorMessage('');
      event.currentTarget.reset();
    } catch (error) {
      setErrorMessage(error.message);
      return;
    } 
  }

  return (
    <>
      <section id="player" className="player-section">
        <p>Enter a YouTube video link:</p>
        <form id="videoForm" onSubmit={handleSubmit}>
          <input type="text" id="videoLink" name="videoLink" />
          <button type="submit">Submit</button>
        </form>
        { errorMessage && <p>{errorMessage}</p> }
        <ShowYouTubePlayer videoId={videoId} key={videoId} />
      </section>
    </>
  )
}

export default App
