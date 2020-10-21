// Toggle button
const toggleButton = document.getElementById('darkmode-toggle')

toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light-mode' : 'dark');

})

if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.toggle('light-mode');
    toggleButton.checked = true;
}

//dynamic rendering
const container = document.getElementsByClassName('list-container')

fetch('https://musiclibrary-server.herokuapp.com/songs')
    .then(
        (response) => {
            response.json().then((jsonResponse) => {
                const songItems = jsonResponse
                let counter = 0;
                for (item of songItems) {
                    const div = document.createElement('div');
                    div.setAttribute('class', 'song row')

                    const button = document.createElement('button')
                    button.setAttribute('class', 'play-button')
                    button.setAttribute('data-song', 'aint-it-fun')
                    const reference = `./song.html?songId=${songItems[counter].id}`

                    button.onclick = () => {
                           
                        window.location.href = reference;
                      
                    }
                    const i = document.createElement('i')
                    button.appendChild(i)
                    i.setAttribute('class', 'fa fa-play fa-2x')

                    const image = document.createElement('img')
                    image.setAttribute('class', 'cover-img')
                    image.setAttribute('src', `https://musiclibrary-server.herokuapp.com/images/${songItems[counter].cover}`)
                    image.setAttribute('alt', 'img')

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