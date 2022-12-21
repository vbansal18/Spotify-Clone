console.log("Welcome to Spotify");
// Initialise the vairables
let masterPlay = document.getElementById('masterPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
let audioElement = new Audio("songs/1.mp3");
let progressBar = document.getElementById('myProgressBar');
let songIndex = 0;

let songs = [
    { songName: "Hanuman Chalisa", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "bhula dena", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "sakhiyaan", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "bekhyali", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Channa Mereya", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Dhoom again", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Mission Impoosible", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Phir bhi tum ko chahunga", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Phir Mohabbat", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "Hale Dil", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});
// Play/pause the song
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();  
        masterPlay.classList.remove('fa-circle-play');  
        masterPlay.classList.add('fa-circle-pause');  
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');  
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity=0; 
    }
})

// update the seekbar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})


// on seeking progressBar, song should change
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

