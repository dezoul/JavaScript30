// variables 
const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const videoBar = player.querySelector('.progress');
const progressFilled = videoBar.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const playerSliders = player.querySelectorAll('.player__controls .player__slider');
const volumeSlider = playerSliders[0];
const SpeedSlider = playerSliders[0];
const fullScreenButton = player.querySelector('FullScreen__button')

console.log(playButton)

// functions

function togglePlay() {
    // console.log('play time')
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    playButton.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function volumeControl() {

    // console.log(this.value)
    // console.log(this.name)

    video[this.name] = this.value
}

function videoBarProgress() {
    
    if (!video.paused){
        console.log('tick')
        
        // console.log(video.currentTime)
        // console.log(video.duration)

        const progressPercent = (video.currentTime / video.duration) * 100  ;
        
        console.log(progressPercent)

        progressFilled.style.flexBasis = `${progressPercent}%` ;
    }

}



function enableScrub() { mouseDown = true ;}
function disableScrub() { mouseDown = false; }

function scrub(e) {
        // console.log(e)
        const progressPercent = (e.offsetX / videoBar.offsetWidth);
        // console.log(progressPercent * video.duration)
        progressFilled.style.flexBasis = `${progressPercent * 100}%`;
        video.currentTime = progressPercent * video.duration ;

}

function toggleFullScreen() {
    video
}

// add event listiners  

playButton.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('pause', updateButton)
video.addEventListener('play', updateButton)
video.addEventListener('timeupdate', videoBarProgress)

skipButtons.forEach( button => 
    button.addEventListener('click', skip)
)

let mouseDown = false
videoBar.addEventListener('mousedown', () => mouseDown = true)
videoBar.addEventListener('mouseup', () => mouseDown = false)
// videoBar.addEventListener('mouseout', () => mouseDown = false)
videoBar.addEventListener('mousemove', (e) => mouseDown && scrub(e))





playerSliders.forEach(slider => slider.addEventListener('change', volumeControl ));
playerSliders.forEach(slider => slider.addEventListener('mousemove', volumeControl));

console.log(video)
video.requestFullScreen()