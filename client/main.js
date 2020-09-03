
// Play button
const playButtons = document.getElementsByClassName('play-button')
console.log(playButtons)

for (playButton of playButtons) {
    const songName = playButton.getAttribute("data-song")
    playButton.onclick = () => {
        window.location.href = `./song.html?song=${songName}`;
    }
}


// Toggle button
const toggleButton = document.getElementById('darkmode-toggle')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
})

//dynamic rendering
const container = document.getElementsByClassName('list-container')

fetch('http://localhost:3000/songs')
    .then(
        (response) => {
            response.json().then((jsonResponse) => {
                 const songItems = jsonResponse
                 console.log(`./images/${songItems[0].cover}`)
                let counter = 0;
                 for (item of songItems) {
                    const div = document.createElement('div');
                    div.setAttribute('class', 'song row')
                    
                    const button = document.createElement('button')
                    button.setAttribute('class', 'play-button')
                    button.setAttribute('data-song', 'aint-it-fun')
                    const i = document.createElement('i')
                    button.appendChild(i)
                    i.setAttribute('class', 'fa fa-play fa-2x')
                    
                    const image = document.createElement('img')
                    image.setAttribute('class', 'cover-img')
                    image.setAttribute('src', `http://localhost:3000/images/${songItems[counter].cover}`)
                    image.setAttribute('alt', 'paramore')
                    
                    const title = document.createElement('span')
                    title.append(songItems[counter].title)
                    
                    const artist = document.createElement('span')
                    artist.append(songItems[counter].artist)
                    
                    const album = document.createElement('span')
                    album.append(songItems[counter].album)
                    
                    container[0].appendChild(div);
                    div.append(button)
                    div.append(image)
                    div.append(title)
                    div.append(artist)
                    div.append(album)
                    counter++;
                 }
            })
        }
    )