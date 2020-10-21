const fs = require('fs')

// Toggle button
const toggleButton = document.getElementById('darkModeToggle')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
})

getSongId = () => {
    const url= window.location.href
    const song = url.split('?')
    const songId = song[1].split('=')[1]
    console.log(songId)
    return songId;
};

fetch('http://localhost:3000/songs')
 .then(
     (response) => {
         response.json().then((jsonResponse) => {
             for (item of jsonResponse) {
                 const songId = getSongId()
                 if(item.id === songId) {
                    document.getElementById('coverAlbum').setAttribute("src", `http://localhost:3000/images/${item.cover}`)
                    document.getElementById('artistName').textContent = item.artist;
                    document.getElementById('songTitle').textContent = item.title;
                 }
             }
         })
     }
 )

 const playBtn = document.getElementById('play-btn')
 playBtn.onclick = () => {
    const songId = getSongId()
     fetch(`http://localhost:3000/audio/${songId}`).then(
         (response) => {
           audioObj = new Audio(response.url)
           audioObj.play()
        }
     )
 }

 const pauseBtn = document.getElementById('pause-btn')
 pauseBtn.onclick = () => {
     audioObj.pause()
 }