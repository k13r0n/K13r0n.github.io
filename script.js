function changeColor() {
    document.body.classList.toggle("alt-theme");
}

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
const button = document.getElementById("music-btn");

const playlist = [
    "Two Six.mp3"
];

let currentSong = 0;

window.addEventListener("load", () => {
    music.src = playlist[currentSong];
});


button.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0.5; 
        music.play().then(() => {
            button.textContent = "⏸";
        }).catch(err => {
            console.log("Playback blocked until user interaction");
        })
        music.play().catch(() => {
            console.log("Autoplay blocked until user interaction");
        });
        button.textContent = "⏸";
    } else {
        music.pause();
        button.textContent = "🎵";
    }
});

music.addEventListener("ended", () => {
    currentSong++;

    if (currentSong >= playlist.length) {
        currentSong = 0;
    }

    music.src = playlist[currentSong];
    music.play();
    });
})

