
// Play button
const playButtons = document.getElementsByTagName('button')

for (playButton of playButtons) {
    const songName = playButton.getAttribute("data-song")
    playButton.onclick = () => {
        window.location.href = `./song.html?song=${songName}`;
    }
}


// Toggle button
const toggleButton = document.getElementById('darkModeToggle')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
})