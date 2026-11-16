const video = document.getElementById('video');
const button = document.getElementById('videoBtn');
const timeDisplay = document.getElementById('time');

function changeVideoStatus() {
    if (video.paused === false) {   
        video.pause();
    } else {
        video.play();
    }
}

function updateButtonText() {
    if (video.paused === true) {
        button.innerText = 'Play';
    } else {
        button.innerText = 'Pause';
    }
}

function TimeFormat(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateVideoTime() {
    console.log(video.duration, timeDisplay.innerText);
    timeDisplay.innerText = TimeFormat(video.currentTime) + ` / ` + TimeFormat(video.duration);
}

video.addEventListener('loadedmetadata', updateVideoTime);
button.addEventListener('click', changeVideoStatus);
video.addEventListener('play', updateButtonText);
video.addEventListener('pause', updateButtonText);
video.addEventListener('timeupdate', updateVideoTime);

if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
updateVideoTime();
}
