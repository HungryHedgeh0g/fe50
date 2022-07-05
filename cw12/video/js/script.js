const progressBar = 450;

function initiate() {
    media = document.getElementById('media');
    play = document.getElementById('play');
    mute = document.getElementById('mute');
    bar = document.getElementById('bar');
    progress = document.getElementById('progress');
    volume = document.getElementById('volume');

    media.volume = volume.value;

    play.addEventListener('click', push);
    media.addEventListener('click', push);
    mute.addEventListener('click', soundSwitch);
    bar.addEventListener('click', move);
    volume.addEventListener('input', level);
    media.addEventListener('dblclick', openFullscreen);

}

function level() {
    media.volume = volume.value;
}

function push() {
    if (!media.paused && !media.ended) {
        media.pause();
        play.innerHTML = `<span class="material-symbols-outlined" title="Play">
        play_circle</span>`;
        clearInterval(loop);
    } else {
        media.play();
        play.innerHTML = `<span class="material-symbols-outlined" title="Pause">
        pause_circle</span>`;
        loop = setInterval(progressDraw, 300);
    }
}

function progressDraw() {
    if (!media.ended) {
        let size = parseInt(media.currentTime * progressBar / media.duration);
        progress.style.width = `${size}px`;
    } else {
        // progress.style.width = '0';
        progress.style.width = progressBar;
        play.innerHTML = `<span class="material-symbols-outlined" title="Replay">
        replay</span>`;
        clearInterval(loop);
    }
}

function move(e) {
    console.log(e);
    let mouseX = e.layerX - bar.offsetLeft;
    let newTime = mouseX * media.duration / progressBar;
    media.currentTime = newTime;
    progress.style.width = `${mouseX}px`;
}


function soundSwitch() {
    if (!media.muted) {
        media.muted = true;
        mute.innerHTML = `<span class="material-symbols-outlined" title="Unmute">
        volume_off</span>`;
    } else {
        media.muted = false;
        mute.innerHTML = `<span class="material-symbols-outlined" title="Mute">
        volume_up</span>`;
    }
}

function openFullscreen() {
    media.requestFullscreen();
    media.addEventListener('dblclick', exitFullscreen);
}

function exitFullscreen() {
    document.exitFullscreen();
}

addEventListener('load', initiate);