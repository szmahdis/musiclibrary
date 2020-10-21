const fs = require('fs')

// Toggle button
const toggleButton = document.getElementById('darkModeToggle')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light-mode' : 'dark');
})


if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.toggle('light-mode');
    toggleButton.checked = true;
}

getSongId = () => {
    const url= window.location.href
    const song = url.split('?')
    const songId = song[1].split('=')[1]
    console.log(songId)
    return songId;
};

fetch('https://musiclibrary-server.herokuapp.com/songs')
 .then(
     (response) => {
         response.json().then((jsonResponse) => {
             for (item of jsonResponse) {
                 const songId = getSongId()
                 if(item.id === songId) {
                    document.getElementById('coverAlbum').setAttribute("src", `https://musiclibrary-server.herokuapp.com/images/${item.cover}`)
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
     fetch(`https://musiclibrary-server.herokuapp.com/audio/${songId}`).then(
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