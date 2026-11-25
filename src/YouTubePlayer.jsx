import { useState, useEffect, useRef } from 'react';

function ShowYouTubePlayer({ videoId }) {
    const [isPlayerReady, setPlayerReady] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const iframeRef = useRef(null);
    const ytPlayerRef = useRef(null);

    useEffect(() => {
        if(!videoId) return;
        let cancelled = false;
        window.youtubeApiReady
        .then((YT) => {
            if (cancelled) return;
            if(!ytPlayerRef.current && iframeRef.current){
                ytPlayerRef.current = new YT.Player(iframeRef.current, {
                    events: {
                        'onReady': (event) => { setPlayerReady(true) },
                        'onStateChange': onPlayerStateChange
                    }
                })
            }
        });
        return () => {
            cancelled = true;
            ytPlayerRef.current?.destroy();
            ytPlayerRef.current = null;
        }
    }, [videoId]);

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            setPlaying(true);
        } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED){
            setPlaying(false);
        }
    }

    if (videoId === '') {
        return null;
    }

    function handlePlayPause() {
        if (ytPlayerRef.current.getPlayerState() == YT.PlayerState.PLAYING) {
            ytPlayerRef.current.pauseVideo();
        } else {
            ytPlayerRef.current.playVideo();
        }
    }

    return (

    <div className="youtube-player">
            <iframe width="560" height="315"
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>
            {!isPlayerReady ? null : <button className="videoBtn" onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>}
    </div>
  );
}

export default ShowYouTubePlayer;