const playButtons = document.getElementsByTagName('button')

for (playButton of playButtons) {
    const songName = playButton.getAttribute("data-song")
    playButton.onclick = () => {
        window.location.href = `./song.html?song=${songName}`;
    }
}

const changeModeButton = document.getElementById('changeMode')
changeModeButton.onclick = () => {
    document.documentElement.style.setProperty('--background-color', 'white')
    document.documentElement.style.setProperty('--primary-color', 'red')
    document.documentElement.style.setProperty('--secondary-color', 'whitesmoke')
    document.documentElement.style.setProperty('--text-color', 'black')
    document.documentElement.style.setProperty('--play-button-color', 'black')
}