const express = require("express");
const axios = require("axios");
require("dotenv").config()


//change the type based on what we want to get back (i.e  channels, videos, playlists)
const baseUrl = `https://www.googleapis.com/youtube/v3`
console.log(baseUrl)
const PORT = process.env.PORT || 3001;

const app = express();

//endpoint for covid playlist
app.get("/covidlist", async(req, res) => {
 

    const url = `${baseUrl}/playlistItems?key=${process.env.API_KEY}&part=snippet&playlistId=PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw`
    const response = await axios.get(url)
    res.send(response.data)
  });

//endpoint for all videos 
app.get("/videos", async(req, res) => {
   //get the query from the request and pass to the url
  // const searchQuery = req.query.q
  // &q=${searchQuery}
  
  //get maximum of 5 videos at a time
  const url = `${baseUrl}/search?part=snippet&channelId=UCL03ygcTgIbe36o2Z7sReuQ&&order=date&type=video&key=${process.env.API_KEY}`
  const response = await axios.get(url)
  //get token for next page of 5 videos
  //  const nextPage = response.data.nextPageToken
  res.send(response.data)
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
