
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