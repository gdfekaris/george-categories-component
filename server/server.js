const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const cors = require('cors');
//const db = require('../database');
const gameData = require('../database/gameData.js');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

/*

app.get('/recent-broadcasts', (req, res) => {
  res.send(gameData.videos);
  // new Promise (function(resolve, reject) {
  //   db.connection.query('SELECT * FROM videos', (error, results, fields) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       resolve(results);
  //     }
  //   });
  // })
  //   .then((results) => JSON.parse(JSON.stringify(results)))
  //   .then((data) => {
  //     data.sort((a, b) => { return a.created_at - b.created_at; });
  //     let recentBroadcasts = data.slice(0, 8);
  //     //console.log('RECENT BROADCASTS =>', recentBroadcasts);
  //     return res.send(recentBroadcasts);
  //   });
});

app.get('/recent-highlights', (req, res) => {
  res.send(gameData.videos);
  // new Promise(function (resolve, reject) {
  //   db.connection.query('SELECT * FROM videos', (error, results, fields) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       resolve(results);
  //     }
  //   });
  // })
  //   .then((results) => JSON.parse(JSON.stringify(results)))
  //   .then((data) => {
  //     data.sort((a, b) => { return a.created_at - b.created_at; });
  //     let temp = data.slice(0, 50);
  //     temp.sort((a, b) => { return b.view_count - a.view_count; });
  //     let recentHighlights = temp.slice(0, 8);
  //     //console.log('RECENT HIGHLIGHTS =>', recentHighlights);
  //     return res.send(recentHighlights);
  //   });
});

app.get('/popular-clips', (req, res) => {
  res.send(gameData.clips);
  // new Promise(function (resolve, reject) {
  //   db.connection.query('SELECT * FROM clips', (error, results, fields) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       resolve(results);
  //     }
  //   });
  // })
  //   .then((results) => JSON.parse(JSON.stringify(results)))
  //   .then((data) => {
  //     data.sort((a, b) => { return b.view_count - a.view_count; });
  //     let popularClips = data.slice(0, 8);
  //     //console.log('POPULAR CLIPS =>', popularClips);
  //     return res.send(popularClips);
  //   });
});

 */


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});