function ShowYouTubePlayer({ videoLink }) {
    
    return (
    <div className="youtube-player">
        <p>YouTube Player</p>
        {
            videoLink == '' ? null : 
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink.split('v=')[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        }
    </div>
  );
}

export default ShowYouTubePlayer;