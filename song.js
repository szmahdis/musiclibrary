// const paramore = './images/paramore.jpg'

const songs = { //dictonary 
    'aint-it-fun': 'Paramore - Ain\'t It Fun',
    'dog-days-are-over': 'Florence + The Machine - Dog Days Are Over',
    'wasting-my-young-years': 'London Grammar - Wasting My Young Years'
};
const covers = {
    'aint-it-fun': require("./images/paramore.jpg"),
    'dog-days-are-over': require('./images/florence_and_the_machine.jpg'),
    'wasting-my-young-years': require('./images/london_grammar.jpg')
}
getSongName = () => {
    const url= window.location.href
    const song = url.split('?')
    const songName = song[1].split('=')[1]
    return songName;
};
document.getElementById('coverAlbum').setAttribute("src", covers[getSongName()]);
const songTitle = songs[getSongName()];
document.getElementById('songTitle').textContent = songTitle;
console.log(songTitle);