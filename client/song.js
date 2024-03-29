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

fetch('http://localhost:5000/songs')
 .then(
     (response) => {
         response.json().then((jsonResponse) => {
             for (item of jsonResponse) {
                 const songId = getSongId()
                 if(item.id === songId) {
                    document.getElementById('coverAlbum').setAttribute("src", `http://localhost:5000/images/${item.cover}`)
                    document.getElementById('artistName').textContent = item.artist;
                    document.getElementById('songTitle').textContent = item.title;
                 }
             }
         })
     }
 )

 const playBtn = document.getElementById('play-btn')
 let audioObj = undefined
 playBtn.onclick = () => {
     if (audioObj) {
         audioObj.play();
     } else {
        const songId = getSongId()
        fetch(`http://localhost:5000/audio/${songId}`).then(
            (response) => {
                audioObj = new Audio(response.url)
                audioObj.play();
            }
        )
         
     }
 }

 const pauseBtn = document.getElementById('pause-btn')
 pauseBtn.onclick = () => {
     if (audioObj) {
         audioObj.pause()
     }
 }