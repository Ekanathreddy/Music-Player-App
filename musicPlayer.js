
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
} 

window.onload = function () {
    if (song.paused) {
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
    } else {
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }

    // Update progress bar periodically
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play()
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        
        
    }
} 

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value; 
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play")
}

