const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const songs = [
    {
        artist: "Paramore",
        title: "Aint It Fun",
        album: "Paramore",
        cover: "paramore.jpg"
    },
    {
        artist: "Florence + The Machine",
        title: "Dog Days Are Over",
        album: "Lungs",
        cover: "florence_and_the_machine.jpg"
    },
    {
        artist: "London Grammar",
        title: "Wasting My Youngs Years",
        album: "If You Wait",
        cover: "london_grammar.jpg"
    },

    {
        artist: "Hasan Shamaizadeh",
        title: "Bishtar Bishtar",
        album: "Khodafez",
        cover: "shamaizadeh_khodahafez.jpg"
    }
]

app.get('/songs', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(songs)
})

app.get('/images/:filename', (req, res) => {
    const fileName = req.params.filename

    fs.readFile(`./images/${fileName}`, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
      });
    
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})