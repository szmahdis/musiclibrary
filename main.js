const playButtons = document.getElementsByTagName('button')

for (playButton of playButtons) {
    const songName = playButton.getAttribute("data-song")
    playButton.onclick = () => {
        window.location.href = `./song.html?song=${songName}`;
    }
}