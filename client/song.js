
// Toggle button
const toggleButton = document.getElementById('darkModeToggle')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
})

getSongName = () => {
    const url= window.location.href
    const song = url.split('?')
    const songName = song[1].split('=')[1]
    console.log(songName)
    return songName;
};

fetch('http://localhost:3000/songs')
 .then(
     (response) => {
         response.json().then((jsonResponse) => {
             for (item of jsonResponse) {
                 const songId = getSongName()
                 if(item.id === songId) {
                    document.getElementById('coverAlbum').setAttribute("src", `http://localhost:3000/images/${item.cover}`)
                    document.getElementById('artistName').textContent = item.artist;
                    document.getElementById('songTitle').textContent = item.title;
                 }
             }
         })
     }
 )
