document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-audio");
    const playButton = document.getElementById("play-audio-btn");

    playButton.addEventListener("click", function () {
        audio.play();

        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 30000); // 30 seconds
    });
});