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
    volume.addEventListener('wheel', zoom);
    media.addEventListener('dblclick', openFullscreen);

}

function zoom(event) {
    event.preventDefault();
    console.log(event.deltaY);
    if (event.deltaY > 0) {
        // Zoom out
        volume.value -= event.deltaY / 5000;
        media.volume = volume.value;
    }
    else {
        // Zoom in
        volume.value -= event.deltaY / 5000;
        media.volume = volume.value;
    }
}

function level() {
    media.volume = volume.value;
    media.muted = false;
    mute.innerHTML = `<span class="material-symbols-outlined" title="Mute">
        volume_up</span>`;
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
    if (mouseX > progressBar) mouseX = progressBar;
    let newTime = mouseX * media.duration / progressBar;
    media.currentTime = newTime;
    progress.style.width = `${mouseX}px`;
    if (!media.paused && !media.ended) {
        play.innerHTML = `<span class="material-symbols-outlined" title="Pause">
        pause_circle</span>`;
    } else {
        play.innerHTML = `<span class="material-symbols-outlined" title="Play">
        play_circle</span>`;
    }
}

function soundSwitch() {
    if (!media.muted) {
        temp = volume.value;
        media.muted = true;
        volume.value = 0;
        mute.innerHTML = `<span class="material-symbols-outlined" title="Unmute">
        volume_off</span>`;
    } else {
        media.muted = false;
        volume.value = temp;
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