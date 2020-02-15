const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");

const port = 3000;

uniqueID = function () {
  return Math.random().toString(36).substr(2, 6) + '_' ;
};

app.use(cors());

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/mp3', (req,res) => {
  let url = req.query.url;
  res.header('Content-Disposition', `attachment; filename="${uniqueID()}audio.mp3"`);
  ytdl(url, {
      format: 'mp3',
      filter: 'audioonly'
  }).pipe(res);
});

app.get('/mp4', (req,res) => {
  let url = req.query.url;
  res.header('Content-Disposition', `attachment; filename="${uniqueID()}video.mp4"`);
  ytdl(url, {
      format: 'mp4'
  }).pipe(res);
});

app.listen(port, () => {
  console.log(`
  Server is running:
  Visit http://localhost:3000
  `);
});
